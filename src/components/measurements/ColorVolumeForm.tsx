'use client';

import { useState } from 'react';
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
import { saveColorMeasurementAction } from '@/app/actions/measurement-actions';
import { Loader2, Save, CheckCircle2, XCircle } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { P3_COLOR_SPEC, SDR_COLOR_VOLUME_SPEC, isColorCompliant, calculateColorDistance } from '@/domain/standards/ctpColorVolumeSpec';

const COLORS = ['Red', 'Green', 'Blue', 'White'] as const;

const pointSchema = z.object({
    measuredL: z.coerce.number().min(0),
    measuredX: z.coerce.number().min(0).max(1),
    measuredY: z.coerce.number().min(0).max(1),
});

const formSchema = z.object(
    COLORS.reduce((acc, color) => ({
        ...acc,
        [color]: pointSchema,
    }), {} as Record<typeof COLORS[number], typeof pointSchema>)
);

type FormValues = z.infer<typeof formSchema>;

interface ColorVolumeFormProps {
    sessionId: number;
    initialData?: Record<string, { measuredL: number; measuredX: number; measuredY: number }>;
}

export function ColorVolumeForm({ sessionId, initialData }: ColorVolumeFormProps) {
    const [isSaving, setIsSaving] = useState(false);

    const defaultValues: FormValues = COLORS.reduce((acc, color) => ({
        ...acc,
        [color]: {
            measuredL: initialData?.[color]?.measuredL ?? 0,
            measuredX: initialData?.[color]?.measuredX ?? P3_COLOR_SPEC[color].targetX,
            measuredY: initialData?.[color]?.measuredY ?? P3_COLOR_SPEC[color].targetY,
        }
    }), {} as FormValues);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as any,
        defaultValues,
    });

    const values = useWatch({ control: form.control });

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        try {
            const promises = COLORS.map(color => {
                const data = values[color];
                const type = color === 'White' ? 'white_point' : 'primary';

                return saveColorMeasurementAction({
                    sessionId,
                    colorName: color,
                    type: type,
                    measuredL: data.measuredL,
                    measuredX: data.measuredX,
                    measuredY: data.measuredY,
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

    const renderColorInput = (color: typeof COLORS[number]) => {
        const target = P3_COLOR_SPEC[color];
        const measuredX = values[color]?.measuredX || 0;
        const measuredY = values[color]?.measuredY || 0;

        const isCompliant = isColorCompliant(measuredX, measuredY, target);
        const distance = calculateColorDistance(measuredX, measuredY, target.targetX, target.targetY);

        return (
            <div key={color} className={`border p-4 rounded-md space-y-4 ${isCompliant ? 'border-gray-200 dark:border-gray-800' : 'border-red-300 bg-red-50 dark:bg-red-900/10'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="font-semibold text-lg">{color}</div>
                        {isCompliant ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        Target: ({target.targetX}, {target.targetY})
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name={`${color}.measuredL`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">L (cd/m²)</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.01" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${color}.measuredX`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">x</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.0001" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${color}.measuredY`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">y</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.0001" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className={`text-xs text-right ${!isCompliant ? 'text-red-600 font-medium' : 'text-muted-foreground'}`}>
                    Δxy: {distance.toFixed(4)} (Tol: ±{target.tolerance})
                </div>
            </div>
        );
    };

    return (
        <MeasurementLayout
            title="色域覆盖 (Color Volume)"
            subtitle="测量 R, G, B 原色及白点，验证 P3 色域覆盖"
            phases={['Phase 1']}
            standard={{
                title: SDR_COLOR_VOLUME_SPEC.name,
                reference: SDR_COLOR_VOLUME_SPEC.reference,
                targets: SDR_COLOR_VOLUME_SPEC.targets.map(t => ({
                    label: t.name,
                    value: `(${t.targetX}, ${t.targetY})`,
                    tolerance: `±${t.tolerance}`
                }))
            }}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {COLORS.map(renderColorInput)}
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={isSaving} size="lg">
                            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            <Save className="mr-2 h-4 w-4" />
                            保存所有数据
                        </Button>
                    </div>
                </form>
            </Form>
        </MeasurementLayout>
    );
}
