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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { saveScreenGainAction, getScreenGainAction } from '@/app/actions/screen-gain-actions';
import { useTranslations } from 'next-intl';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000/types';

const formSchema = z.object({
    screenGain: z.coerce.number().optional(),
    halfGainAngle: z.coerce.number().optional(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ScreenGainFormProps {
    sessionId: number;
}

export function ScreenGainForm({ sessionId }: ScreenGainFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations('ScreenGainForm');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            screenGain: 0,
            halfGainAngle: 0,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getScreenGainAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    screenGain: result.data.screenGain ?? 0,
                    halfGainAngle: result.data.halfGainAngle ?? 0,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveScreenGainAction({
            sessionId,
            ...values,
        });

        if (result.success) {
            alert(t('success'));
        } else {
            alert(t('failure'));
        }
        setIsSaving(false);
    }

    return (
        <MeasurementLayout
            title={t('title')}
            subtitle={t('subtitle')}
            phases={['Phase 2']}
            standard={{
                title: t('standardTitle'),
                reference: "DCI CTP 1.2",
                description: t('standardDescription'),
                targets: [
                    { label: t('targetLabel'), value: t('targetValue') }
                ]
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Card>
                            <CardHeader><CardTitle>{t('measurements')}</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="screenGain"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('screenGain')}</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{ x: 0.314, y: 0.351, Y: 48 }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('screenGain', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="halfGainAngle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('halfGainAngle')} (°)</FormLabel>
                                            <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>{t('notes')}</CardTitle></CardHeader>
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
                                {t('save')}
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </MeasurementLayout>
    );
}
