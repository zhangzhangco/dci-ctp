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
import { Loader2, Save, CheckCircle2, XCircle } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { PIXEL_STRUCTURE_SPEC } from '@/domain/standards/ctpPixelStructureSpec';
import { savePixelStructureAction, getPixelStructureAction } from '@/app/actions/pixel-structure-actions';
import { useTranslations } from 'next-intl';

const formSchema = z.object({
    fillFactorCheck: z.boolean(),
    pixelPitchCheck: z.boolean(),
    subPixelStructureCheck: z.boolean(),
    visualArtifactsCheck: z.boolean(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface PixelStructureFormProps {
    sessionId: number;
}

export function PixelStructureForm({ sessionId }: PixelStructureFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations('PixelStructureForm');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fillFactorCheck: false,
            pixelPitchCheck: false,
            subPixelStructureCheck: false,
            visualArtifactsCheck: false,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getPixelStructureAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    fillFactorCheck: result.data.fillFactorCheck ?? false,
                    pixelPitchCheck: result.data.pixelPitchCheck ?? false,
                    subPixelStructureCheck: result.data.subPixelStructureCheck ?? false,
                    visualArtifactsCheck: result.data.visualArtifactsCheck ?? false,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await savePixelStructureAction({
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
            phases={['Phase 1']}
            standard={{
                title: t('standardTitle'),
                reference: PIXEL_STRUCTURE_SPEC.reference,
                description: PIXEL_STRUCTURE_SPEC.description,
                targets: PIXEL_STRUCTURE_SPEC.items.map(item => ({
                    label: item.label,
                    value: item.requirement,
                }))
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PIXEL_STRUCTURE_SPEC.items.map((item) => (
                                <Card key={item.id}>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base flex justify-between items-center">
                                            {item.label}
                                            <FormField
                                                control={form.control}
                                                name={`${item.id}Check` as any}
                                                render={({ field }) => (
                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                        <FormControl>
                                                            <Switch
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </FormControl>
                                                        <span className={`text-sm font-bold ${field.value ? 'text-green-600' : 'text-red-600'}`}>
                                                            {field.value ? 'PASS' : 'FAIL'}
                                                        </span>
                                                    </FormItem>
                                                )}
                                            />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                                        <div className="text-xs font-mono bg-muted p-2 rounded">
                                            Requirement: {item.requirement}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">{t('notes')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="notes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    placeholder={t('notesPlaceholder')}
                                                    className="min-h-[100px]"
                                                    {...field}
                                                />
                                            </FormControl>
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
