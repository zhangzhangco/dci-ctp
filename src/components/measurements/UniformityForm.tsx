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
import { saveUniformityMeasurementAction, getUniformityMeasurementsAction } from '@/app/actions/measurement-actions';
import { Loader2, Save, CheckCircle2, XCircle } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import {
    SDR_UNIFORMITY_SPEC,
    HDR_UNIFORMITY_SPEC,
    calculateLuminanceDeviation,
    calculateChromaticityDistance
} from '@/domain/standards/ctpUniformitySpec';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000/types';

const POSITIONS = [
    'TopLeft', 'TopCenter', 'TopRight',
    'LeftCenter', 'Center', 'RightCenter',
    'BottomLeft', 'BottomCenter', 'BottomRight'
] as const;

const pointSchema = z.object({
    measuredL: z.coerce.number().min(0),
    measuredX: z.coerce.number().min(0).max(1),
    measuredY: z.coerce.number().min(0).max(1),
});

const formSchema = z.object(
    POSITIONS.reduce((acc, pos) => ({
        ...acc,
        [pos]: pointSchema,
    }), {} as Record<typeof POSITIONS[number], typeof pointSchema>)
);

type FormValues = z.infer<typeof formSchema>;

interface UniformityFormProps {
    sessionId: number;
    initialData?: Record<string, { measuredL: number; measuredX: number; measuredY: number }>;
}

export function UniformityForm({ sessionId, initialData }: UniformityFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [standardType, setStandardType] = useState<'sdr' | 'hdr'>('sdr');

    const spec = standardType === 'sdr' ? SDR_UNIFORMITY_SPEC : HDR_UNIFORMITY_SPEC;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: POSITIONS.reduce((acc, pos) => ({
            ...acc,
            [pos]: {
                measuredL: 0,
                measuredX: 0.3127,
                measuredY: 0.3290,
            }
        }), {} as FormValues),
    });

    // Load data when standardType changes
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            // If initialData is provided and we are on SDR (default), use it?
            // Actually, better to always fetch to ensure consistency when switching tabs.
            // But for initial render, we might want to use initialData if available and standard matches.
            // For simplicity, let's fetch.
            const data = await getUniformityMeasurementsAction(sessionId, standardType);

            const newValues: Partial<FormValues> = {};
            POSITIONS.forEach(pos => {
                const saved = data.find(d => d.position === pos);
                if (saved) {
                    newValues[pos] = {
                        measuredL: saved.measuredL ?? 0,
                        measuredX: saved.measuredX ?? 0.3127,
                        measuredY: saved.measuredY ?? 0.3290,
                    };
                } else {
                    newValues[pos] = {
                        measuredL: 0,
                        measuredX: 0.3127,
                        measuredY: 0.3290,
                    };
                }
            });
            form.reset(newValues as FormValues);
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, standardType, form]);


    const values = useWatch({ control: form.control });
    // Safe check for values before accessing properties
    const centerL = values?.Center?.measuredL || 0;
    const centerX = values?.Center?.measuredX || 0.3127;
    const centerY = values?.Center?.measuredY || 0.3290;

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        try {
            const promises = POSITIONS.map(pos => {
                const data = values[pos];
                return saveUniformityMeasurementAction({
                    sessionId,
                    position: pos,
                    standard: standardType,
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

    const renderPointInput = (pos: typeof POSITIONS[number]) => {
        const deviationL = calculateLuminanceDeviation(centerL, values[pos]?.measuredL || 0);
        const distC = calculateChromaticityDistance(centerX, centerY, values[pos]?.measuredX || 0, values[pos]?.measuredY || 0);

        const isLValid = Math.abs(deviationL) <= (spec.luminanceTolerance * 100);
        const isCValid = distC <= spec.chromaticityTolerance;

        // Center is always valid relative to itself
        const isCenter = pos === 'Center';
        const isValid = isCenter || (isLValid && isCValid);

        return (
            <div key={pos} className={`border p-3 rounded-md space-y-2 ${isValid ? 'border-gray-200 dark:border-gray-800' : 'border-red-300 bg-red-50 dark:bg-red-900/10'}`}>
                <div className="flex justify-between items-center mb-1">
                    <div className="font-medium text-sm">{pos}</div>
                    <div className="flex items-center gap-2">
                        <MeasureButton
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            target={{
                                x: standardType === 'hdr' ? 0.3127 : 0.314,
                                y: standardType === 'hdr' ? 0.3290 : 0.351,
                                Y: standardType === 'hdr' ? 100 : 48
                            }}
                            onMeasured={(data: ColorimetricData) => {
                                form.setValue(`${pos}.measuredL`, parseFloat(data.Lv.toFixed(3)));
                                form.setValue(`${pos}.measuredX`, parseFloat(data.x.toFixed(4)));
                                form.setValue(`${pos}.measuredY`, parseFloat(data.y.toFixed(4)));
                            }}
                        />
                        {isValid ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-red-500" />}
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name={`${pos}.measuredL`}
                    render={({ field }) => (
                        <FormItem className="space-y-0">
                            <div className="flex items-center gap-2">
                                <FormLabel className="w-8 text-xs text-muted-foreground">L</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.1" className="h-8 text-sm" {...field} />
                                </FormControl>
                            </div>
                            {!isCenter && (
                                <div className={`text-[10px] text-right ${Math.abs(deviationL) > (spec.luminanceTolerance * 100) ? 'text-red-600' : 'text-muted-foreground'}`}>
                                    {deviationL > 0 ? '+' : ''}{deviationL.toFixed(1)}%
                                </div>
                            )}
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-2">
                    <FormField
                        control={form.control}
                        name={`${pos}.measuredX`}
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <div className="flex items-center gap-1">
                                    <FormLabel className="w-4 text-xs text-muted-foreground">x</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="0.0001" className="h-8 text-sm px-2" {...field} />
                                    </FormControl>
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${pos}.measuredY`}
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <div className="flex items-center gap-1">
                                    <FormLabel className="w-4 text-xs text-muted-foreground">y</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="0.0001" className="h-8 text-sm px-2" {...field} />
                                    </FormControl>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                {!isCenter && (
                    <div className={`text-[10px] text-right ${distC > spec.chromaticityTolerance ? 'text-red-600' : 'text-muted-foreground'}`}>
                        Δxy: {distC.toFixed(4)}
                    </div>
                )}
            </div>
        );
    };

    return (
        <MeasurementLayout
            title="均匀性测量 (Uniformity)"
            subtitle="测量屏幕 9 个点的亮度与色度一致性"
            phases={['Phase 1']}
            standard={{
                title: spec.name,
                reference: spec.reference,
                targets: [
                    {
                        label: "亮度偏差 (Luminance)",
                        value: "Relative to Center",
                        tolerance: `±${spec.luminanceTolerance * 100}%`
                    },
                    {
                        label: "色度偏差 (Chromaticity)",
                        value: "Relative to Center",
                        tolerance: `Radius < ${spec.chromaticityTolerance}`
                    }
                ]
            }}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <Tabs value={standardType} onValueChange={(v) => setStandardType(v as 'sdr' | 'hdr')}>
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="sdr">SDR Standard</TabsTrigger>
                            <TabsTrigger value="hdr">HDR Standard</TabsTrigger>
                        </TabsList>

                        <div className="grid grid-cols-3 gap-4">
                            {/* Top Row */}
                            {renderPointInput('TopLeft')}
                            {renderPointInput('TopCenter')}
                            {renderPointInput('TopRight')}

                            {/* Middle Row */}
                            {renderPointInput('LeftCenter')}
                            {renderPointInput('Center')}
                            {renderPointInput('RightCenter')}

                            {/* Bottom Row */}
                            {renderPointInput('BottomLeft')}
                            {renderPointInput('BottomCenter')}
                            {renderPointInput('BottomRight')}
                        </div>
                    </Tabs>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={isSaving} size="lg">
                            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            <Save className="mr-2 h-4 w-4" />
                            保存所有点数据
                        </Button>
                    </div>
                </form>
            </Form>
        </MeasurementLayout>
    );
}
