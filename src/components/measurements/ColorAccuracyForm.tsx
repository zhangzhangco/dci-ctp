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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { saveColorAccuracyAction, getColorAccuracyMeasurementsAction } from '@/app/actions/color-accuracy-actions';
import { Loader2, Save, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import {
    SDR_ACCURACY_TARGETS,
    HDR_ACCURACY_TARGETS,
    COLOR_ACCURACY_SPEC,
    isLuminanceCompliant,
    isChromaticityCompliant,
    calculateLuminanceError,
    type ColorAccuracyTarget
} from '@/domain/standards/ctpColorAccuracySpec';
import { CIEPlot, CIEPoint } from '@/components/charts/CIEPlot';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000';
import {
    P3_COLOR_SPEC,
    HDR_P3_COLOR_SPEC
} from '@/domain/standards/ctpColorAccuracySpec';

const pointSchema = z.object({
    measuredL: z.coerce.number().min(0),
    measuredX: z.coerce.number().min(0).max(1),
    measuredY: z.coerce.number().min(0).max(1),
});

const formSchema = z.record(z.string(), pointSchema);

type Point = z.infer<typeof pointSchema>;
type FormValues = Record<string, Point>;

interface ColorAccuracyFormProps {
    sessionId: number;
}

// Helper to map target names to hex colors for UI
const TARGET_COLORS: Record<string, string> = {
    "Red-1": "#ff0000",
    "Green-1": "#00ff00",
    "Blue-1": "#0000ff"
};

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

    const values = useWatch({ control: form.control }) || {};

    // Load data when standard type changes
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getColorAccuracyMeasurementsAction(sessionId, standardType);

            if (result.success && result.data) {
                const newValues: FormValues = {};
                targets.forEach(t => {
                    const saved = result.data.find(d => d.colorName === t.name);
                    newValues[t.name] = {
                        measuredL: saved?.measuredL ?? 0,
                        measuredX: saved?.measuredX ?? 0,
                        measuredY: saved?.measuredY ?? 0
                    };
                });
                form.reset(newValues);
            } else {
                const defaultValues = targets.reduce((acc, t) => ({
                    ...acc,
                    [t.name]: { measuredL: 0, measuredX: 0, measuredY: 0 }
                }), {} as FormValues);
                form.reset(defaultValues);
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, standardType, form, targets]);

    async function onSubmit(data: FormValues) {
        setIsSaving(true);
        try {
            const promises = targets.map(target => {
                const measured = data[target.name];
                return saveColorAccuracyAction({
                    sessionId,
                    colorName: target.name,
                    standard: standardType,
                    targetX: target.targetX,
                    targetY: target.targetY,
                    targetL: target.targetL,
                    measuredX: measured.measuredX,
                    measuredY: measured.measuredY,
                    measuredL: measured.measuredL,
                    deltaE: 0 // Calculated on backend or not needed if we store raw values
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

    const renderPatchInput = (target: ColorAccuracyTarget) => {
        const measuredVal = values[target.name];
        const measuredX = measuredVal?.measuredX ?? 0;
        const measuredY = measuredVal?.measuredY ?? 0;
        const measuredL = measuredVal?.measuredL ?? 0;

        const hasMeasurement = measuredX > 0 || measuredY > 0;

        let isLValid = true;
        let isCValid = true;
        let lError = 0;

        if (hasMeasurement) {
            isLValid = isLuminanceCompliant(measuredL, target.targetL, target.toleranceL);
            isCValid = isChromaticityCompliant(measuredX, measuredY, target.targetX, target.targetY, target.toleranceX);
            lError = calculateLuminanceError(measuredL, target.targetL) * 100;
        }

        const isCompliant = isLValid && isCValid;

        return (
            <tr key={target.name} className="border-b hover:bg-muted/30">
                <td className="p-3 font-medium">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-4 h-4 rounded-full border shadow-sm"
                            style={{ backgroundColor: TARGET_COLORS[target.name] || '#ccc' }}
                        />
                        {target.name}
                    </div>
                </td>
                <td className="p-3 text-center text-muted-foreground font-mono text-xs">
                    x: {target.targetX.toFixed(3)}<br />y: {target.targetY.toFixed(3)}<br />L: {target.targetL.toFixed(1)}
                </td>
                <td className="p-3 text-center">
                    <span className="text-xs">
                        Δxy ≤ {target.toleranceX}<br />ΔL ≤ {(target.toleranceL * 100).toFixed(0)}%
                    </span>
                </td>
                <td className="p-3">
                    <div className="flex gap-2 justify-center">
                        <FormField
                            control={form.control}
                            name={`${target.name}.measuredX`}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="x"
                                    className={`w-20 text-center font-mono text-xs ${hasMeasurement && !isCValid ? 'border-red-500 bg-red-50' : ''}`}
                                    type="number" step="0.001"
                                />
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`${target.name}.measuredY`}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="y"
                                    className={`w-20 text-center font-mono text-xs ${hasMeasurement && !isCValid ? 'border-red-500 bg-red-50' : ''}`}
                                    type="number" step="0.001"
                                />
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`${target.name}.measuredL`}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="L"
                                    className={`w-20 text-center font-mono text-xs ${hasMeasurement && !isLValid ? 'border-red-500 bg-red-50' : ''}`}
                                    type="number" step="0.1"
                                />
                            )}
                        />
                        <MeasureButton
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onMeasured={(data: ColorimetricData) => {
                                form.setValue(`${target.name}.measuredX`, parseFloat(data.x.toFixed(4)));
                                form.setValue(`${target.name}.measuredY`, parseFloat(data.y.toFixed(4)));
                                form.setValue(`${target.name}.measuredL`, parseFloat(data.Lv.toFixed(3)));
                            }}
                        />
                    </div>
                </td>
                <td className="p-3 text-center font-mono text-xs">
                    {hasMeasurement ? (
                        <div className="flex flex-col gap-1">
                            <span className={isCValid ? 'text-green-600' : 'text-red-600 font-bold'}>
                                Δxy: {Math.sqrt(Math.pow(measuredX - target.targetX, 2) + Math.pow(measuredY - target.targetY, 2)).toFixed(4)}
                            </span>
                            <span className={isLValid ? 'text-green-600' : 'text-red-600 font-bold'}>
                                ΔL: {lError > 0 ? '+' : ''}{lError.toFixed(1)}%
                            </span>
                        </div>
                    ) : '-'}
                </td>
                <td className="p-3 text-center">
                    {hasMeasurement && isCompliant && <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />}
                    {hasMeasurement && !isCompliant && <XCircle className="h-5 w-5 text-red-600 mx-auto" />}
                </td>
            </tr>
        );
    };

    // Prepare Chart Data
    const specTargets = standardType === 'sdr' ? P3_COLOR_SPEC : HDR_P3_COLOR_SPEC;
    const chartPrimaries = {
        red: { x: specTargets.Red.targetX, y: specTargets.Red.targetY },
        green: { x: specTargets.Green.targetX, y: specTargets.Green.targetY },
        blue: { x: specTargets.Blue.targetX, y: specTargets.Blue.targetY },
        white: { x: specTargets.White.targetX, y: specTargets.White.targetY }
    };

    // Map accuracy targets to points for the chart
    const chartPoints: CIEPoint[] = targets.map(t => {
        const measuredVal = values[t.name];
        const measuredX = measuredVal?.measuredX ?? 0;
        const measuredY = measuredVal?.measuredY ?? 0;

        const hasMeasurement = measuredX > 0 || measuredY > 0;

        // Return both reference and measured points
        const points: CIEPoint[] = [
            {
                x: t.targetX,
                y: t.targetY,
                label: `${t.name} (Ref)`,
                color: TARGET_COLORS[t.name] || '#ccc',
                type: 'reference'
            }
        ];

        if (hasMeasurement) {
            points.push({
                x: measuredX,
                y: measuredY,
                label: `${t.name} (Meas)`,
                color: TARGET_COLORS[t.name] || '#ccc',
                type: 'measured'
            });
        }
        return points;
    }).flat();

    return (
        <MeasurementLayout
            title={COLOR_ACCURACY_SPEC.title}
            subtitle="验证 Red-1, Green-1, Blue-1 的亮度与色度准确性"
            phases={['Phase 2']}
            standard={{
                title: `${standardType === 'sdr' ? 'SDR' : 'HDR'} Color Accuracy`,
                reference: COLOR_ACCURACY_SPEC.reference,
                description: COLOR_ACCURACY_SPEC.description,
                targets: targets.map(t => ({
                    label: t.name,
                    value: `(${t.targetX}, ${t.targetY})`,
                    tolerance: `±${t.toleranceX}`
                }))
            }}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Tabs value={standardType} onValueChange={(v) => setStandardType(v as 'sdr' | 'hdr')}>
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="sdr">SDR Standard</TabsTrigger>
                            <TabsTrigger value="hdr">HDR Standard</TabsTrigger>
                        </TabsList>

                        {isLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                                <span className="ml-2 text-muted-foreground">加载数据中...</span>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-base">测量数据录入</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="overflow-x-auto">
                                                <table className="w-full border-collapse text-sm">
                                                    <thead>
                                                        <tr className="border-b bg-muted/50">
                                                            <th className="p-3 text-left font-medium">色块</th>
                                                            <th className="p-3 text-center font-medium">目标值 (x, y, L)</th>
                                                            <th className="p-3 text-center font-medium">容差</th>
                                                            <th className="p-3 text-center font-medium">测量值 (x, y, L)</th>
                                                            <th className="p-3 text-center font-medium">偏差</th>
                                                            <th className="p-3 text-center font-medium">结果</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {targets.map(renderPatchInput)}
                                                    </tbody>
                                                </table>
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
                                </div>

                                {/* Chart Section */}
                                <div>
                                    <CIEPlot
                                        title={`Color Accuracy Plot (${standardType.toUpperCase()})`}
                                        primaries={chartPrimaries}
                                        points={chartPoints}
                                    />
                                </div>
                            </div>
                        )}
                    </Tabs>
                </form>
            </Form>
        </MeasurementLayout>
    );
}
