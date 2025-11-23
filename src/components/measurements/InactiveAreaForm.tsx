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
import { INACTIVE_AREA_SPEC } from '@/domain/standards/ctpInactiveAreaSpec';
import { saveInactiveAreaAction, getInactiveAreaAction } from '@/app/actions/inactive-area-actions';

const formSchema = z.object({
    topBorderCheck: z.boolean(),
    bottomBorderCheck: z.boolean(),
    leftBorderCheck: z.boolean(),
    rightBorderCheck: z.boolean(),
    measuredLuminance: z.coerce.number(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface InactiveAreaFormProps {
    sessionId: number;
}

export function InactiveAreaForm({ sessionId }: InactiveAreaFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            topBorderCheck: false,
            bottomBorderCheck: false,
            leftBorderCheck: false,
            rightBorderCheck: false,
            measuredLuminance: 0,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getInactiveAreaAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    topBorderCheck: result.data.topBorderCheck ?? false,
                    bottomBorderCheck: result.data.bottomBorderCheck ?? false,
                    leftBorderCheck: result.data.leftBorderCheck ?? false,
                    rightBorderCheck: result.data.rightBorderCheck ?? false,
                    measuredLuminance: result.data.measuredLuminance ?? 0,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveInactiveAreaAction({
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
            title={INACTIVE_AREA_SPEC.title}
            subtitle={INACTIVE_AREA_SPEC.description}
            phases={['Phase 1']}
            standard={{
                title: "DCI CTP Inactive Area",
                reference: INACTIVE_AREA_SPEC.reference,
                description: INACTIVE_AREA_SPEC.description,
                targets: [
                    { label: "Requirement", value: INACTIVE_AREA_SPEC.requirement },
                    { label: "Max Luminance", value: `${INACTIVE_AREA_SPEC.maxLuminance} cd/m²` }
                ]
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Card>
                            <CardHeader><CardTitle>Border Checks</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['top', 'bottom', 'left', 'right'].map((pos) => (
                                    <FormField
                                        key={`${pos}BorderCheck`}
                                        control={form.control}
                                        name={`${pos}BorderCheck` as any}
                                        render={({ field }) => (
                                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base capitalize">{pos} Border</FormLabel>
                                                    <div className="text-sm text-muted-foreground">No light emission</div>
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
                            <CardHeader><CardTitle>Measurement</CardTitle></CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="measuredLuminance"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Max Measured Luminance (cd/m²)</FormLabel>
                                            <FormControl><Input type="number" step="0.0001" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
