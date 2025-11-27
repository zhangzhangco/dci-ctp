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
import { saveViewingAngleAction, getViewingAngleAction } from '@/app/actions/viewing-angle-actions';
import { useTranslations } from 'next-intl';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000/types';

const formSchema = z.object({
    luminanceCenter: z.coerce.number().optional(),
    luminanceLeft: z.coerce.number().optional(),
    luminanceRight: z.coerce.number().optional(),
    luminanceTop: z.coerce.number().optional(),
    luminanceBottom: z.coerce.number().optional(),
    colorShiftPass: z.boolean(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ViewingAngleFormProps {
    sessionId: number;
}

export function ViewingAngleForm({ sessionId }: ViewingAngleFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations('ViewingAngleForm');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            luminanceCenter: 0,
            luminanceLeft: 0,
            luminanceRight: 0,
            luminanceTop: 0,
            luminanceBottom: 0,
            colorShiftPass: false,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getViewingAngleAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    luminanceCenter: result.data.luminanceCenter ?? 0,
                    luminanceLeft: result.data.luminanceLeft ?? 0,
                    luminanceRight: result.data.luminanceRight ?? 0,
                    luminanceTop: result.data.luminanceTop ?? 0,
                    luminanceBottom: result.data.luminanceBottom ?? 0,
                    colorShiftPass: result.data.colorShiftPass ?? false,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveViewingAngleAction({
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
                                    name="luminanceCenter"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('luminanceCenter')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{ x: 0.314, y: 0.351, Y: 48 }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('luminanceCenter', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="luminanceLeft"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('luminanceLeft')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{ x: 0.314, y: 0.351, Y: 48 }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('luminanceLeft', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="luminanceRight"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('luminanceRight')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{ x: 0.314, y: 0.351, Y: 48 }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('luminanceRight', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="luminanceTop"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('luminanceTop')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{ x: 0.314, y: 0.351, Y: 48 }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('luminanceTop', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="luminanceBottom"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('luminanceBottom')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{ x: 0.314, y: 0.351, Y: 48 }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('luminanceBottom', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>{t('inspection')}</CardTitle></CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="colorShiftPass"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">{t('colorShiftPass')}</FormLabel>
                                                <div className="text-sm text-muted-foreground">{t('colorShiftDesc')}</div>
                                            </div>
                                            <FormControl>
                                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
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
