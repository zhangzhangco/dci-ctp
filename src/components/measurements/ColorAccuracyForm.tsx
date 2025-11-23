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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save, CheckCircle2, XCircle } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import {
    SDR_ACCURACY_TARGETS,
    HDR_ACCURACY_TARGETS,
    COLOR_ACCURACY_SPEC,
    isLuminanceCompliant,
    isChromaticityCompliant,
    calculateLuminanceError
} from '@/domain/standards/ctpColorAccuracySpec';
import { saveColorAccuracyAction, getColorAccuracyMeasurementsAction } from '@/app/actions/color-accuracy-actions';

const pointSchema = z.object({
    measuredL: z.coerce.number().min(0),
    measuredX: z.coerce.number().min(0).max(1),
    measuredY: z.coerce.number().min(0).max(1),
});

// Dynamic schema based on targets (using SDR targets as keys, they share names)
const formSchema = z.object(
    SDR_ACCURACY_TARGETS.reduce((acc, target) => ({
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
    const [standardType, setStandardType] = useState<'sdr' | 'hdr'>('sdr');

    // Determine which targets to use based on selected standard
    const targets = standardType === 'sdr' ? SDR_ACCURACY_TARGETS : HDR_ACCURACY_TARGETS;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: targets.reduce((acc, t) => ({
            ...acc,
            [t.name]: { measuredL: 0, measuredX: 0, measuredY: 0 }
        }), {} as FormValues),
    });

    const values = useWatch({ control: form.control });

    // Load data & Session Info
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
                // Merge with defaults
                targets.forEach(t => {
                    if (!newValues[t.name]) {
                        newValues[t.name] = { measuredL: 0, measuredX: 0, measuredY: 0 };
                    }
                });
                form.reset(newValues);
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form, standardType, targets]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        try {
            const promises = targets.map(target => {
                const data = values[target.name];
                return saveColorAccuracyAction({
                    sessionId,
                    colorName: target.name,
                    measuredL: data.measuredL,
                    measuredX: data.measuredX,
                    measuredY: data.measuredY,
                    targetL: target.targetL,
                    targetX: target.targetX,
                    targetY: target.targetY,
                    deltaE: 0
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

    const renderPatchInput = (target: typeof targets[number]) => {
        const data = values[target.name] || { measuredL: 0, measuredX: 0, measuredY: 0 };

        const hasData = data.measuredL > 0;

        const isLValid = isLuminanceCompliant(data.measuredL, target.targetL, target.toleranceL);
        const isCValid = isChromaticityCompliant(data.measuredX, data.measuredY, target.targetX, target.targetY, target.toleranceX);
        const isCompliant = isLValid && isCValid;

        const lError = calculateLuminanceError(data.measuredL, target.targetL) * 100;

        return (
            <div key={target.name} className={`border p-4 rounded-md space-y-3 ${hasData ? (isCompliant ? 'border-green-200 bg-green-50/10' : 'border-red-300 bg-red-50/10') : 'border-gray-200'}`}>
                <div className="flex justify-between items-center mb-1">
                    <div className="font-semibold text-sm">{target.name}</div>
                    {hasData && (isCompliant ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />)}
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name={`${target.name}.measuredL`}
                        render={({ field }) => (
                            <FormItem className="space-y-1">
                                <FormLabel className="text-xs text-muted-foreground">L ({target.targetL})</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.1" className={`h-8 text-sm ${hasData && !isLValid ? 'border-red-500 bg-red-50' : ''}`} {...field} />
                                </FormControl>
                                {hasData && (
                                    <div className={`text-[10px] ${!isLValid ? 'text-red-600 font-bold' : 'text-muted-foreground'}`}>
                                        {lError > 0 ? '+' : ''}{lError.toFixed(1)}%
                                    </div>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${target.name}.measuredX`}
                        render={({ field }) => (
                            <FormItem className="space-y-1">
                                <FormLabel className="text-xs text-muted-foreground">x ({target.targetX})</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.001" className={`h-8 text-sm ${hasData && !isCValid ? 'border-red-500 bg-red-50' : ''}`} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${target.name}.measuredY`}
                        render={({ field }) => (
                            <FormItem className="space-y-1">
                                <FormLabel className="text-xs text-muted-foreground">y ({target.targetY})</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.001" className={`h-8 text-sm ${hasData && !isCValid ? 'border-red-500 bg-red-50' : ''}`} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                {hasData && !isCompliant && (
                    <div className="text-xs text-red-600 mt-2">
                        {!isLValid && <div>Luminance out of ±3% tolerance</div>}
                        {!isCValid && <div>Chromaticity out of ±0.006 tolerance</div>}
                    </div>
                )}
            </div>
        );
    };

    return (
        <MeasurementLayout
            title={COLOR_ACCURACY_SPEC.title}
            subtitle="验证 Red-1, Green-1, Blue-1 的亮度与色度准确性"
            phases={['Phase 2']}
            standard={{
                title: `${standardType === 'sdr' ? 'SDR' : 'HDR'} Color Accuracy`,
                reference: COLOR_ACCURACY_SPEC.reference,
                description: COLOR_ACCURACY_SPEC.description,
                targets: [
                    { label: "Targets", value: "Red-1, Green-1, Blue-1" },
                    { label: "Luminance Tol", value: "±3%" },
                    { label: "Chromaticity Tol", value: "±0.006" }
                ]
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Tabs value={standardType} onValueChange={(v) => setStandardType(v as 'sdr' | 'hdr')}>
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="sdr">SDR Standard</TabsTrigger>
                                <TabsTrigger value="hdr">HDR Standard</TabsTrigger>
                            </TabsList>

                            <div className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Primary Color Measurements ({standardType.toUpperCase()})</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {targets.map(renderPatchInput)}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Tabs>

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
