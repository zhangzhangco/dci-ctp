'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import {
    SDR_COLOR_VOLUME_SPEC,
    HDR_COLOR_VOLUME_SPEC,
    calculateColorDistance,
    type ColorVolumeStandard,
    P3_COLOR_SPEC,
    HDR_P3_COLOR_SPEC
} from '@/domain/standards/ctpColorVolumeSpec';
import {
    saveColorMeasurementAction,
    getColorMeasurementsAction
} from '@/app/actions/measurement-actions';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000/types';
import { MeasurementLayout } from './MeasurementLayout';
import { CIEPlot } from '@/components/charts/CIEPlot';

interface ColorVolumeFormProps {
    sessionId: number;
}

interface MeasuredPoint {
    x?: number;
    y?: number;
    Y?: number;
}

interface MeasuredData {
    red: MeasuredPoint;
    green: MeasuredPoint;
    blue: MeasuredPoint;
    white: MeasuredPoint;
}

export function ColorVolumeForm({ sessionId }: ColorVolumeFormProps) {
    const [standardType, setStandardType] = useState<'sdr' | 'hdr'>('sdr');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Determine spec based on standard
    const spec: ColorVolumeStandard = standardType === 'sdr' ? SDR_COLOR_VOLUME_SPEC : HDR_COLOR_VOLUME_SPEC;
    const targetSpecs = standardType === 'sdr' ? P3_COLOR_SPEC : HDR_P3_COLOR_SPEC;

    const [measurements, setMeasurements] = useState<MeasuredData>({
        red: {}, green: {}, blue: {}, white: {}
    });

    // Load data
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const savedData = await getColorMeasurementsAction(sessionId, standardType);
            if (savedData && savedData.length > 0) {
                const newMeasurements: MeasuredData = { red: {}, green: {}, blue: {}, white: {} };

                savedData.forEach(m => {
                    const point = {
                        x: m.measuredX ?? undefined,
                        y: m.measuredY ?? undefined,
                        Y: m.measuredL ?? undefined
                    };

                    if (m.colorName === 'Red') newMeasurements.red = point;
                    else if (m.colorName === 'Green') newMeasurements.green = point;
                    else if (m.colorName === 'Blue') newMeasurements.blue = point;
                    else if (m.colorName === 'White') newMeasurements.white = point;
                });

                setMeasurements(newMeasurements);
            } else {
                // Reset measurements if no data found for this standard
                setMeasurements({ red: {}, green: {}, blue: {}, white: {} });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, standardType]);

    const updatePoint = (color: keyof MeasuredData, field: keyof MeasuredPoint, value: string) => {
        const numValue = parseFloat(value);
        setMeasurements(prev => ({
            ...prev,
            [color]: {
                ...prev[color],
                [field]: isNaN(numValue) ? undefined : numValue
            }
        }));
    };

    const renderInputRow = (label: string, color: keyof MeasuredData, targetKey: string) => {
        const target = targetSpecs[targetKey];
        const point = measurements[color];
        const deviation = (point.x !== undefined && point.y !== undefined)
            ? calculateColorDistance(point.x, point.y, target.targetX, target.targetY)
            : undefined;

        const passed = deviation !== undefined ? deviation <= target.tolerance : undefined;

        return (
            <tr className="border-b hover:bg-muted/30">
                <td className="p-3 font-medium">{label}</td>
                <td className="p-3 text-center text-muted-foreground font-mono text-xs">
                    x: {target.targetX.toFixed(3)}<br />y: {target.targetY.toFixed(3)}
                </td>
                <td className="p-3 text-center">
                    <span className="text-xs">
                        Δxy ≤ {target.tolerance}
                    </span>
                </td>
                <td className="p-3">
                    <div className="flex gap-2 justify-center">
                        <Input
                            placeholder="x"
                            className="w-20 text-center font-mono text-xs"
                            type="number" step="0.001"
                            value={point.x ?? ''}
                            onChange={e => updatePoint(color, 'x', e.target.value)}
                        />
                        <Input
                            placeholder="y"
                            className="w-20 text-center font-mono text-xs"
                            type="number" step="0.001"
                            value={point.y ?? ''}
                            onChange={e => updatePoint(color, 'y', e.target.value)}
                        />
                        <Input
                            placeholder="Y (cd/m²)"
                            className="w-24 text-center font-mono text-xs"
                            type="number" step="0.1"
                            value={point.Y ?? ''}
                            onChange={e => updatePoint(color, 'Y', e.target.value)}
                        />
                        <MeasureButton
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            target={{ x: target.targetX, y: target.targetY }}
                            onMeasured={(data: ColorimetricData) => {
                                updatePoint(color, 'x', data.x.toFixed(4));
                                updatePoint(color, 'y', data.y.toFixed(4));
                                updatePoint(color, 'Y', data.Lv.toFixed(3));
                            }}
                        />
                    </div>
                </td>
                <td className="p-3 text-center font-mono text-xs">
                    {deviation !== undefined ? (
                        <span className={passed ? 'text-green-600' : 'text-red-600 font-bold'}>
                            {deviation.toFixed(4)}
                        </span>
                    ) : '-'}
                </td>
                <td className="p-3 text-center">
                    {passed === true && <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />}
                    {passed === false && <XCircle className="h-5 w-5 text-red-600 mx-auto" />}
                </td>
            </tr>
        );
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const promises = [];

            // Helper to create save promise
            const createSavePromise = (color: keyof MeasuredData, colorName: string, type: 'primary' | 'white_point') => {
                const m = measurements[color];
                if (m.x !== undefined && m.y !== undefined && m.Y !== undefined) {
                    return saveColorMeasurementAction({
                        sessionId,
                        colorName,
                        type,
                        standard: standardType,
                        measuredL: m.Y,
                        measuredX: m.x,
                        measuredY: m.y,
                        // Optional: include targets if needed
                    });
                }
                return Promise.resolve({ success: true });
            };

            promises.push(createSavePromise('red', 'Red', 'primary'));
            promises.push(createSavePromise('green', 'Green', 'primary'));
            promises.push(createSavePromise('blue', 'Blue', 'primary'));
            promises.push(createSavePromise('white', 'White', 'white_point'));

            const results = await Promise.all(promises);
            const allSuccess = results.every(r => r.success);

            if (allSuccess) {
                alert('数据已保存成功!');
            } else {
                alert('部分数据保存失败');
            }
        } catch (error) {
            alert('保存失败');
        } finally {
            setIsSaving(false);
        }
    };

    // Prepare Chart Data
    const chartPrimaries = {
        red: { x: targetSpecs.Red.targetX, y: targetSpecs.Red.targetY },
        green: { x: targetSpecs.Green.targetX, y: targetSpecs.Green.targetY },
        blue: { x: targetSpecs.Blue.targetX, y: targetSpecs.Blue.targetY },
        white: { x: targetSpecs.White.targetX, y: targetSpecs.White.targetY }
    };

    const chartMeasured = {
        red: measurements.red.x !== undefined && measurements.red.y !== undefined ? { x: measurements.red.x, y: measurements.red.y } : undefined,
        green: measurements.green.x !== undefined && measurements.green.y !== undefined ? { x: measurements.green.x, y: measurements.green.y } : undefined,
        blue: measurements.blue.x !== undefined && measurements.blue.y !== undefined ? { x: measurements.blue.x, y: measurements.blue.y } : undefined,
        white: measurements.white.x !== undefined && measurements.white.y !== undefined ? { x: measurements.white.x, y: measurements.white.y } : undefined,
    };

    return (
        <MeasurementLayout
            title="色域覆盖率 (Color Volume)"
            subtitle="验证显示设备的色域覆盖范围 (P3)"
            phases={['Phase 2']}
            standard={{
                title: spec.name,
                reference: spec.reference,
                description: "测量 R/G/B/White 的色坐标 (x, y) 和亮度 (Y)，计算与目标值的偏差。",
                targets: [
                    { label: "Red", value: `(${targetSpecs.Red.targetX}, ${targetSpecs.Red.targetY})` },
                    { label: "Green", value: `(${targetSpecs.Green.targetX}, ${targetSpecs.Green.targetY})` },
                    { label: "Blue", value: `(${targetSpecs.Blue.targetX}, ${targetSpecs.Blue.targetY})` },
                    { label: "White", value: `(${targetSpecs.White.targetX}, ${targetSpecs.White.targetY})` },
                ]
            }}
        >
            <Tabs value={standardType} onValueChange={(v) => setStandardType(v as 'sdr' | 'hdr')} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sdr">SDR Standard (P3, DCI White)</TabsTrigger>
                    <TabsTrigger value="hdr">HDR Standard (P3, D65 White)</TabsTrigger>
                </TabsList>
            </Tabs>

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
                                                <th className="p-3 text-center font-medium">目标值 (x, y)</th>
                                                <th className="p-3 text-center font-medium">容差</th>
                                                <th className="p-3 text-center font-medium">测量值 (x, y, Y)</th>
                                                <th className="p-3 text-center font-medium">偏差 Δxy</th>
                                                <th className="p-3 text-center font-medium">结果</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderInputRow("Red Primary", "red", "Red")}
                                            {renderInputRow("Green Primary", "green", "Green")}
                                            {renderInputRow("Blue Primary", "blue", "Blue")}
                                            {renderInputRow("White Point", "white", "White")}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button onClick={handleSave} disabled={isSaving} size="lg">
                                {isSaving ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        保存中...
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 h-4 w-4" />
                                        保存测量数据
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div>
                        <CIEPlot
                            title={`CIE 1931 Diagram (${standardType.toUpperCase()})`}
                            primaries={chartPrimaries}
                            measuredPrimaries={chartMeasured}
                        />
                    </div>
                </div>
            )}
        </MeasurementLayout>
    );
}
