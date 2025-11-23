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
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { SUB_PIXEL_SPEC } from '@/domain/standards/ctpSubPixelSpec';
import { saveSubPixelAction, getSubPixelAction } from '@/app/actions/sub-pixel-actions';

const formSchema = z.object({
    horizontalLinesPass: z.boolean(),
    verticalLinesPass: z.boolean(),
    noColorFringing: z.boolean(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface SubPixelFormProps {
    sessionId: number;
}

export function SubPixelForm({ sessionId }: SubPixelFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            horizontalLinesPass: false,
            verticalLinesPass: false,
            noColorFringing: false,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getSubPixelAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    horizontalLinesPass: result.data.horizontalLinesPass ?? false,
                    verticalLinesPass: result.data.verticalLinesPass ?? false,
                    noColorFringing: result.data.noColorFringing ?? false,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveSubPixelAction({
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
            title={SUB_PIXEL_SPEC.title}
            subtitle={SUB_PIXEL_SPEC.description}
            phases={['Phase 1']}
            standard={{
                title: "DCI CTP Sub-Pixel Alignment",
                reference: SUB_PIXEL_SPEC.reference,
                description: SUB_PIXEL_SPEC.description,
                targets: []
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Card>
                            <CardHeader><CardTitle>Checklist</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                {SUB_PIXEL_SPEC.checklist.map((item) => (
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
