'use client';

import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save, CheckCircle2, XCircle } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { MACBETH_TARGETS, COLOR_ACCURACY_SPEC, calculateDeltaE } from '@/domain/standards/ctpColorAccuracySpec';
import { saveColorAccuracyAction, getColorAccuracyMeasurementsAction } from '@/app/actions/color-accuracy-actions';

const pointSchema = z.object({
    measuredL: z.coerce.number().min(0),
    measuredX: z.coerce.number().min(0).max(1),
    measuredY: z.coerce.number().min(0).max(1),
});

// Dynamic schema based on targets
const formSchema = z.object(
    MACBETH_TARGETS.reduce((acc, target) => ({
        ...acc,
        [target.name]: pointSchema,
    }), {} as Record<string, typeof pointSchema>)
);

type FormValues = z.infer<typeof formSchema>;

interface ColorAccuracyFormProps {
    sessionId: number;
}

export function ColorAccuracyForm({ sessionId }: ColorAccuracyFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: MACBETH_TARGETS.reduce((acc, t) => ({
            ...acc,
            [t.name]: { measuredL: 0, measuredX: 0, measuredY: 0 }
        }), {} as FormValues),
    });

    const values = useWatch({ control: form.control });

    // Load data
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getColorAccuracyMeasurementsAction(sessionId);
            if (result.success && result.data) {
                const newValues: any = {};
                result.data.forEach(m => {
                    newValues[m.colorName] = {
                        measuredL: m.measuredL || 0,
                        measuredX: m.measuredX || 0,
                        measuredY: m.measuredY || 0,
                    };
                });
                // Merge with defaults for missing keys
                MACBETH_TARGETS.forEach(t => {
                    if (!newValues[t.name]) {
                        newValues[t.name] = { measuredL: 0, measuredX: 0, measuredY: 0 };
                    }
                });
                form.reset(newValues);
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        try {
            const promises = MACBETH_TARGETS.map(target => {
                const data = values[target.name];
                const deltaE = calculateDeltaE(
                    data.measuredL, data.measuredX, data.measuredY,
                    target.targetL, target.targetX, target.targetY
                );

                return saveColorAccuracyAction({
                    sessionId,
                    colorName: target.name,
                    measuredL: data.measuredL,
                    measuredX: data.measuredX,
                    measuredY: data.measuredY,
                    targetL: target.targetL,
                    targetX: target.targetX,
                    targetY: target.targetY,
                    deltaE: deltaE
                });
            });

            await Promise.all(promises);
            alert('保存成功');
        } catch (error) {
            console.error(error);
            alert('保存出错');
        } finally {
            setIsSaving(false);
        }
    }

    const renderPatchInput = (target: typeof MACBETH_TARGETS[number]) => {
        const data = values[target.name] || { measuredL: 0, measuredX: 0, measuredY: 0 };
        const deltaE = calculateDeltaE(
            data.measuredL, data.measuredX, data.measuredY,
            target.targetL, target.targetX, target.targetY
        );

        // Only show validation if data is entered (L > 0)
        const hasData = data.measuredL > 0;
        const isCompliant = deltaE <= target.toleranceE;

        return (
            <div key={target.name} className={`border p-3 rounded-md space-y-2 ${hasData ? (isCompliant ? 'border-gray-200 dark:border-gray-800' : 'border-red-300 bg-red-50 dark:bg-red-900/10') : 'border-gray-200'}`}>
                <div className="flex justify-between items-center mb-1">
                    <div className="font-medium text-sm truncate" title={target.name}>{target.name}</div>
                    {hasData && (isCompliant ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-red-500" />)}
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <FormField
                        control={form.control}
                        name={`${target.name}.measuredL`}
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel className="text-[10px] text-muted-foreground">L</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.1" className="h-7 text-xs px-1" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${target.name}.measuredX`}
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel className="text-[10px] text-muted-foreground">x</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.001" className="h-7 text-xs px-1" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${target.name}.measuredY`}
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel className="text-[10px] text-muted-foreground">y</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.001" className="h-7 text-xs px-1" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                {hasData && (
                    <div className={`text-[10px] text-right ${!isCompliant ? 'text-red-600 font-bold' : 'text-muted-foreground'}`}>
                        ΔE: {deltaE.toFixed(2)} (Max {target.toleranceE})
                    </div>
                )}
            </div>
        );
    };

    return (
        <MeasurementLayout
            title={COLOR_ACCURACY_SPEC.title}
            subtitle="验证 Macbeth ColorChecker 24 色块的色彩还原准确性"
            phases={['Phase 2']}
            standard={{
                title: "Color Accuracy Standard",
                reference: COLOR_ACCURACY_SPEC.reference,
                description: COLOR_ACCURACY_SPEC.description,
                targets: COLOR_ACCURACY_SPEC.targets
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Macbeth ColorChecker Measurements</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {MACBETH_TARGETS.map(renderPatchInput)}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSaving} size="lg">
                                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                <Save className="mr-2 h-4 w-4" />
                                保存所有数据
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </MeasurementLayout>
    );
}
