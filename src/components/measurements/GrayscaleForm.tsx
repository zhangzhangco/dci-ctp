'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import {
    getTestSpec,
    getTestName,
    getTableReference,
    isWithinTolerance,
    calculateDeviation,
    getHDREOTFTolerance,
    type GrayscaleTestType,
} from '@/domain/standards/ctpGrayscaleSpec';
import {
    saveGrayscaleDataAction,
    loadGrayscaleDataAction
} from '@/app/actions/grayscale-actions';
import { MeasurementLayout } from './MeasurementLayout';

interface MeasurementData {
    stepNumber: number;
    nominalLuminance: number;
    tolerance: number;
    measuredLuminance?: number;
}

interface GrayscaleFormProps {
    sessionId: number;
}

export function GrayscaleForm({ sessionId }: GrayscaleFormProps) {
    const [standardType, setStandardType] = useState<'sdr' | 'hdr'>('sdr');
    const [sdrTestType, setSdrTestType] = useState<'white-steps' | 'gray-steps'>('white-steps');

    // HDR only has one test type currently
    const currentTestType: GrayscaleTestType = standardType === 'sdr' ? sdrTestType : 'hdr-eotf';

    const [screenBlackLevel, setScreenBlackLevel] = useState<number | undefined>(undefined);
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [measurements, setMeasurements] = useState<MeasurementData[]>([]);

    // Load data when test type changes
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const spec = getTestSpec(currentTestType);

            // Initialize with spec defaults
            let initialMeasurements = spec.map(s => ({
                stepNumber: s.stepNumber,
                nominalLuminance: s.nominalLuminance,
                tolerance: s.tolerance, // For HDR this might be 0 initially, updated dynamically
            }));

            const savedData = await loadGrayscaleDataAction(sessionId, currentTestType);

            if (savedData) {
                setScreenBlackLevel(savedData.screenBlackLevel);
                // Merge saved data
                initialMeasurements = initialMeasurements.map(m => {
                    const saved = savedData.measurements.find(sm => sm.stepNumber === m.stepNumber);
                    return {
                        ...m,
                        measuredLuminance: saved?.measuredLuminance,
                    };
                });
            } else {
                // Reset black level if no data found for this type
                if (standardType === 'sdr') {
                    setScreenBlackLevel(undefined);
                } else {
                    setScreenBlackLevel(0); // HDR doesn't use black level subtraction
                }
            }

            setMeasurements(initialMeasurements);
            setIsLoading(false);
        };

        loadData();
    }, [sessionId, currentTestType, standardType]);

    const updateMeasurement = (index: number, value: string) => {
        const numValue = parseFloat(value);
        setMeasurements(prev =>
            prev.map((m, i) =>
                i === index ? { ...m, measuredLuminance: isNaN(numValue) ? undefined : numValue } : m
            )
        );
    };

    const handleSave = async () => {
        if (standardType === 'sdr' && screenBlackLevel === undefined) {
            alert('请先测量黑电平');
            return;
        }

        setIsSaving(true);
        try {
            const result = await saveGrayscaleDataAction({
                sessionId,
                testType: currentTestType,
                screenBlackLevel: screenBlackLevel || 0,
                measurements: measurements.map(m => ({
                    stepNumber: m.stepNumber,
                    measuredLuminance: m.measuredLuminance,
                })),
            });

            if (result.success) {
                alert('数据已保存成功!');
            } else {
                alert(`保存失败: ${result.error}`);
            }
        } catch (error) {
            alert(`保存失败: ${error}`);
        } finally {
            setIsSaving(false);
        }
    };

    // Calculate Pass/Fail
    const passedSteps = measurements.filter(m => {
        if (m.measuredLuminance === undefined) return false;

        if (standardType === 'sdr') {
            if (screenBlackLevel === undefined) return false;
            const corrected = m.measuredLuminance - (screenBlackLevel / 1000);
            return isWithinTolerance(corrected, m.nominalLuminance, m.tolerance);
        } else {
            // HDR: Absolute validation with dynamic tolerance
            const tolerance = getHDREOTFTolerance(m.nominalLuminance);
            // Calculate percentage error: 100 * (measured - target) / target
            // Pass if |error| <= tolerance * 100
            // Reusing isWithinTolerance which expects tolerance as decimal (e.g. 0.05)
            return isWithinTolerance(m.measuredLuminance, m.nominalLuminance, tolerance);
        }
    }).length;

    const totalSteps = measurements.filter(m => m.measuredLuminance !== undefined).length;

    return (
        <MeasurementLayout
            title={standardType === 'sdr' ? "SDR 灰阶传递函数 (Transfer Function)" : "HDR EOTF 跟踪 (Tracking)"}
            subtitle={standardType === 'sdr' ? "验证 SDR Gamma 2.6 传递函数" : "验证 HDR PQ (ST 2084) EOTF 跟踪性能"}
            phases={['Phase 2']}
            standard={{
                title: standardType === 'sdr' ? "SDR Transfer Function" : "HDR EOTF (ST 2084)",
                reference: standardType === 'sdr' ? "DCI CTP §7.5.11" : "HDR Addendum §8.4.6.2",
                description: standardType === 'sdr'
                    ? "测量输出亮度，减去黑电平后验证是否在容差范围内。"
                    : "测量绝对亮度，验证是否符合 PQ 曲线 (Table 6 容差)。",
                targets: standardType === 'sdr' ? [
                    { label: "测试图案", value: "DCI White/Gray Steps" },
                    { label: "黑电平", value: "需减去 (Active Black)" }
                ] : [
                    { label: "测试图案", value: "HDR Table 7 & 8" },
                    { label: "容差", value: "Table 6 (±3% - ±20%)" }
                ]
            }}
        >
            <Tabs value={standardType} onValueChange={(v) => setStandardType(v as 'sdr' | 'hdr')} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sdr">SDR Standard</TabsTrigger>
                    <TabsTrigger value="hdr">HDR Standard</TabsTrigger>
                </TabsList>
            </Tabs>

            {isLoading ? (
                <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">加载数据中...</span>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* SDR Black Level Input */}
                    {standardType === 'sdr' && (
                        <Card className="bg-muted/50">
                            <CardHeader>
                                <CardTitle className="text-base">步骤 1: 屏幕黑电平测量</CardTitle>
                                <CardDescription>
                                    测量 "2K Full SDR Black" 亮度 (用于自动减去)
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4">
                                    <label className="text-sm font-medium">黑电平 (mcd/m²):</label>
                                    <Input
                                        type="number"
                                        step="0.001"
                                        placeholder="0.000"
                                        value={screenBlackLevel ?? ''}
                                        onChange={(e) => setScreenBlackLevel(parseFloat(e.target.value) || undefined)}
                                        className="w-40"
                                    />
                                    <span className="text-sm text-muted-foreground">
                                        (1 mcd/m² = 0.001 cd/m²)
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Measurement Table */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-base">
                                    {standardType === 'sdr' ? "步骤 2-3: 测量灰阶" : "HDR EOTF 测量数据"}
                                </CardTitle>
                                {totalSteps > 0 && (
                                    <Badge variant={passedSteps === totalSteps ? "default" : "destructive"}>
                                        {passedSteps}/{totalSteps} 通过
                                    </Badge>
                                )}
                            </div>
                            {standardType === 'sdr' && (
                                <Tabs value={sdrTestType} onValueChange={(v) => setSdrTestType(v as 'white-steps' | 'gray-steps')} className="mt-2">
                                    <TabsList>
                                        <TabsTrigger value="white-steps">White Steps (Bright)</TabsTrigger>
                                        <TabsTrigger value="gray-steps">Gray Steps (Dark)</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            )}
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="p-3 text-left font-medium">步骤</th>
                                            <th className="p-3 text-center font-medium">
                                                {standardType === 'sdr' ? "标称值 (Above Black)" : "目标值 (PQ Target)"}
                                            </th>
                                            <th className="p-3 text-center font-medium">容差</th>
                                            <th className="p-3 text-center font-medium">测量值 (cd/m²)</th>
                                            {standardType === 'sdr' && <th className="p-3 text-center font-medium">减黑后</th>}
                                            <th className="p-3 text-center font-medium">偏差 %</th>
                                            <th className="p-3 text-center font-medium">结果</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {measurements.map((measurement, idx) => {
                                            const absoluteLuminance = measurement.measuredLuminance;

                                            // Logic for SDR vs HDR
                                            let displayValue = absoluteLuminance;
                                            let deviation: number | undefined;
                                            let passed: boolean | undefined;
                                            let tolerance = measurement.tolerance;

                                            if (standardType === 'sdr') {
                                                const correctedLuminance = absoluteLuminance !== undefined && screenBlackLevel !== undefined
                                                    ? absoluteLuminance - (screenBlackLevel / 1000)
                                                    : undefined;

                                                displayValue = correctedLuminance;

                                                if (correctedLuminance !== undefined) {
                                                    deviation = calculateDeviation(correctedLuminance, measurement.nominalLuminance);
                                                    passed = isWithinTolerance(correctedLuminance, measurement.nominalLuminance, tolerance);
                                                }
                                            } else {
                                                // HDR Logic
                                                tolerance = getHDREOTFTolerance(measurement.nominalLuminance);
                                                if (absoluteLuminance !== undefined) {
                                                    deviation = calculateDeviation(absoluteLuminance, measurement.nominalLuminance);
                                                    passed = isWithinTolerance(absoluteLuminance, measurement.nominalLuminance, tolerance);
                                                }
                                            }

                                            const lowerBound = measurement.nominalLuminance * (1 - tolerance);
                                            const upperBound = measurement.nominalLuminance * (1 + tolerance);

                                            return (
                                                <tr key={idx} className="border-b hover:bg-muted/30">
                                                    <td className="p-3 font-medium">{measurement.stepNumber}</td>
                                                    <td className="p-3 text-center font-mono text-xs">{measurement.nominalLuminance.toFixed(4)}</td>
                                                    <td className="p-3 text-center">
                                                        <span className="text-xs">
                                                            ±{(tolerance * 100).toFixed(0)}%
                                                            <br />
                                                            <span className="text-muted-foreground text-[10px]">
                                                                ({lowerBound.toFixed(4)} - {upperBound.toFixed(4)})
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-3 text-center">
                                                        <Input
                                                            type="number"
                                                            step="0.0001"
                                                            placeholder="0.0000"
                                                            value={measurement.measuredLuminance ?? ''}
                                                            onChange={(e) => updateMeasurement(idx, e.target.value)}
                                                            className="w-32 text-center font-mono text-xs mx-auto"
                                                        />
                                                    </td>
                                                    {standardType === 'sdr' && (
                                                        <td className="p-3 text-center font-mono text-xs">
                                                            {displayValue !== undefined ? displayValue.toFixed(4) : '-'}
                                                        </td>
                                                    )}
                                                    <td className="p-3 text-center font-mono text-xs">
                                                        {deviation !== undefined ? (
                                                            <span className={Math.abs(deviation) > tolerance * 100 ? 'text-red-600 font-bold' : 'text-muted-foreground'}>
                                                                {deviation > 0 ? '+' : ''}{deviation.toFixed(2)}%
                                                            </span>
                                                        ) : '-'}
                                                    </td>
                                                    <td className="p-3 text-center">
                                                        {passed === true && <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />}
                                                        {passed === false && <XCircle className="h-5 w-5 text-red-600 mx-auto" />}
                                                    </td>
                                                </tr>
                                            );
                                        })}
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
            )}
        </MeasurementLayout>
    );
}
