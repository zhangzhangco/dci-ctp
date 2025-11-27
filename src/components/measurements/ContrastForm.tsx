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
import { saveContrastAction, getContrastAction } from '@/app/actions/contrast-actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from 'next-intl';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000/types';

const formSchema = z.object({
    standard: z.enum(['sdr', 'hdr']),
    peakWhite: z.coerce.number().optional(),
    blackLevel: z.coerce.number().optional(),
    contrastRatio: z.coerce.number().optional(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContrastFormProps {
    sessionId: number;
}

export function ContrastForm({ sessionId }: ContrastFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'sdr' | 'hdr'>('sdr');
    const t = useTranslations('ContrastForm');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            standard: 'sdr',
            peakWhite: 0,
            blackLevel: 0,
            contrastRatio: 0,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getContrastAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    standard: result.data.standard as 'sdr' | 'hdr',
                    peakWhite: result.data.peakWhite ?? 0,
                    blackLevel: result.data.blackLevel ?? 0,
                    contrastRatio: result.data.contrastRatio ?? 0,
                    notes: result.data.notes ?? '',
                });
                setActiveTab(result.data.standard as 'sdr' | 'hdr');
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveContrastAction({
            sessionId,
            ...values,
            standard: activeTab,
        });

        if (result.success) {
            alert(t('success'));
        } else {
            alert(t('failure'));
        }
        setIsSaving(false);
    }

    // Auto-calculate contrast ratio
    const peakWhite = form.watch('peakWhite');
    const blackLevel = form.watch('blackLevel');
    useEffect(() => {
        if (peakWhite && blackLevel && blackLevel > 0) {
            const ratio = peakWhite / blackLevel;
            form.setValue('contrastRatio', parseFloat(ratio.toFixed(2)));
        }
    }, [peakWhite, blackLevel, form]);

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
                    { label: t('targetLabel'), value: activeTab === 'sdr' ? "1200:1" : "2000:1" }
                ]
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'sdr' | 'hdr')}>
                            <TabsList>
                                <TabsTrigger value="sdr">SDR</TabsTrigger>
                                <TabsTrigger value="hdr">HDR</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <Card>
                            <CardHeader><CardTitle>{t('measurements')}</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <FormField
                                    control={form.control}
                                    name="peakWhite"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('peakWhite')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.01" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{
                                                        x: activeTab === 'hdr' ? 0.3127 : 0.314,
                                                        y: activeTab === 'hdr' ? 0.3290 : 0.351,
                                                        Y: activeTab === 'hdr' ? 1000 : 48
                                                    }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('peakWhite', parseFloat(data.Lv.toFixed(3)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="blackLevel"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('blackLevel')} (cd/m²)</FormLabel>
                                            <div className="flex gap-2">
                                                <FormControl><Input type="number" step="0.0001" {...field} /></FormControl>
                                                <MeasureButton
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-10 w-10"
                                                    target={{
                                                        x: activeTab === 'hdr' ? 0.3127 : 0.314,
                                                        y: activeTab === 'hdr' ? 0.3290 : 0.351,
                                                        Y: 0
                                                    }}
                                                    onMeasured={(data: ColorimetricData) => {
                                                        form.setValue('blackLevel', parseFloat(data.Lv.toFixed(5)));
                                                    }}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contrastRatio"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('contrastRatio')}</FormLabel>
                                            <FormControl><Input type="number" step="1" {...field} readOnly className="bg-muted" /></FormControl>
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
