'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { EXHIBITION_SPEC } from '@/domain/standards/ctpExhibitionSpec';
import { saveExhibitionAction, getExhibitionAction } from '@/app/actions/exhibition-actions';

const formSchema = z.object({
    ambientLightPass: z.boolean(),
    maskingPass: z.boolean(),
    portWindowPass: z.boolean(),
    hvacNoisePass: z.boolean(),
    ambientLightLevel: z.coerce.number(),
    temperature: z.coerce.number(),
    humidity: z.coerce.number(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ExhibitionFormProps {
    sessionId: number;
}

export function ExhibitionForm({ sessionId }: ExhibitionFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ambientLightPass: false,
            maskingPass: false,
            portWindowPass: false,
            hvacNoisePass: false,
            ambientLightLevel: 0,
            temperature: 24,
            humidity: 50,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getExhibitionAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    ambientLightPass: result.data.ambientLightPass ?? false,
                    maskingPass: result.data.maskingPass ?? false,
                    portWindowPass: result.data.portWindowPass ?? false,
                    hvacNoisePass: result.data.hvacNoisePass ?? false,
                    ambientLightLevel: result.data.ambientLightLevel ?? 0,
                    temperature: result.data.temperature ?? 24,
                    humidity: result.data.humidity ?? 50,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveExhibitionAction({
            sessionId,
            ...values,
        });

        if (result.success) {
            alert('保存成功');
        } else {
            alert('保存失败');
        }
        setIsSaving(false);
    }

    return (
        <MeasurementLayout
            title={EXHIBITION_SPEC.title}
            subtitle={EXHIBITION_SPEC.description}
            phases={['Phase 3']}
            standard={{
                title: "DCI CTP Exhibition Environment",
                reference: EXHIBITION_SPEC.reference,
                description: EXHIBITION_SPEC.description,
                targets: EXHIBITION_SPEC.measurements.map(m => ({
                    label: m.label,
                    value: `${m.min ? m.min + ' - ' : ''}${m.max} ${m.unit}`
                }))
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Card>
                            <CardHeader><CardTitle>Environment Checklist</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                {EXHIBITION_SPEC.checklist.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name={item.id as any}
                                        render={({ field }) => (
                                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">{item.label}</FormLabel>
                                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                                </div>
                                                <FormControl>
                                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>Measurements</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {EXHIBITION_SPEC.measurements.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name={item.id as any}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{item.label} ({item.unit})</FormLabel>
                                                <FormControl>
                                                    <Input type="number" step="0.01" {...field} />
                                                </FormControl>
                                                <div className="text-xs text-muted-foreground">
                                                    Target: {item.min ? `${item.min} - ` : ''}{item.max}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>Notes</CardTitle></CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="notes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl><Textarea {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSaving} size="lg">
                                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                <Save className="mr-2 h-4 w-4" />
                                Save Results
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </MeasurementLayout>
    );
}
