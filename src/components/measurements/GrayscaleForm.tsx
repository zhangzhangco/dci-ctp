'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Info, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import {
    getTestSpec,
    getTestName,
    getTableReference,
    isWithinTolerance,
    calculateDeviation,
    type GrayscaleTestType,
} from '@/domain/standards/ctpGrayscaleSpec';
import {
    saveGrayscaleDataAction,
    loadGrayscaleDataAction
} from '@/app/actions/grayscale-actions';

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
    const [testType, setTestType] = useState<GrayscaleTestType>('white-steps');
    const [screenBlackLevel, setScreenBlackLevel] = useState<number | undefined>(undefined);
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const testSpec = getTestSpec(testType);
    const [measurements, setMeasurements] = useState<MeasurementData[]>(
        testSpec.map(spec => ({
            stepNumber: spec.stepNumber,
            nominalLuminance: spec.nominalLuminance,
            tolerance: spec.tolerance,
        }))
    );

    // 加载已保存的数据
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const savedData = await loadGrayscaleDataAction(sessionId, testType);

            if (savedData) {
                setScreenBlackLevel(savedData.screenBlackLevel);
                // 合并已保存的测量值到当前spec
                const spec = getTestSpec(testType);
                setMeasurements(spec.map(specItem => {
                    const saved = savedData.measurements.find(m => m.stepNumber === specItem.stepNumber);
                    return {
                        stepNumber: specItem.stepNumber,
                        nominalLuminance: specItem.nominalLuminance,
                        tolerance: specItem.tolerance,
                        measuredLuminance: saved?.measuredLuminance,
                    };
                }));
            }
            setIsLoading(false);
        };

        loadData();
    }, [sessionId, testType]);

    const updateMeasurement = (index: number, value: string) => {
        const numValue = parseFloat(value);
        setMeasurements(prev =>
            prev.map((m, i) =>
                i === index ? { ...m, measuredLuminance: isNaN(numValue) ? undefined : numValue } : m
            )
        );
    };

    const handleTestTypeChange = (newType: string) => {
        const type = newType as GrayscaleTestType;
        setTestType(type);
        // 切换测试类型时会触发useEffect重新加载数据
    };

    const handleSave = async () => {
        if (screenBlackLevel === undefined) {
            alert('请先测量黑电平');
            return;
        }

        setIsSaving(true);
        try {
            const result = await saveGrayscaleDataAction({
                sessionId,
                testType,
                screenBlackLevel,
                measurements: measurements.map(m => ({
                    stepNumber: m.stepNumber,
                    measuredLuminance: m.measuredLuminance,
                })),
            });

            if (result.success) {
                alert('灰阶数据已保存成功!');
            } else {
                alert(`保存失败: ${result.error}`);
            }
        } catch (error) {
            alert(`保存失败: ${error}`);
        } finally {
            setIsSaving(false);
        }
    };

    // 计算通过/失败的步骤数
    const passedSteps = measurements.filter(m => {
        if (m.measuredLuminance === undefined || screenBlackLevel === undefined) return false;
        const corrected = m.measuredLuminance - (screenBlackLevel / 1000);
        return isWithinTolerance(corrected, m.nominalLuminance, m.tolerance);
    }).length;

    const totalSteps = measurements.filter(m => m.measuredLuminance !== undefined).length;

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle>灰阶传递函数测试 (SDR Transfer Function)</CardTitle>
                        <CardDescription className="mt-2">
                            DCI CTP §7.5.11 - 验证影像设备使用正确的 SDR 传递函数
                        </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">Phase 2</Badge>
                </div>

                <Alert className="mt-4">
                    <Info className="h-4 w-4" />
                    <AlertTitle>测试依据与要求</AlertTitle>
                    <AlertDescription className="space-y-2 text-sm">
                        <div><strong>参考标准:</strong></div>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                            <li>DCI-DCSS §9.3.4.11</li>
                            <li>SMPTE RP 431-2 Tables A.2/A.3</li>
                        </ul>
                        <div className="mt-2"><strong>测试步骤:</strong></div>
                        <ol className="list-decimal list-inside ml-2 space-y-1">
                            <li>播放 "2K Full SDR Black",测量屏幕黑电平 (精度 1 mcd/m²)</li>
                            <li>播放相应测试图案 (DCI White Steps 或 DCI Gray Steps)</li>
                            <li><strong className="text-amber-600 dark:text-amber-500">测量每个步进的输出亮度,减去黑电平后验证</strong></li>
                            <li>验证结果是否在容差范围内</li>
                        </ol>
                        <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
                            <strong className="text-blue-900 dark:text-blue-100">📌 重要说明:</strong>
                            <ul className="list-disc list-inside ml-2 mt-1 text-blue-800 dark:text-blue-200">
                                <li><strong>容差来源</strong>: 来自 DCI CTP Tables 7.5.11(a) 和 (b)</li>
                                <li><strong>White Steps</strong>: Step 1-2 为 ±5%, Step 3-10 为 ±3%</li>
                                <li><strong>Gray Steps</strong>: Step 1 为 ±20%, Step 2-6 为 ±5%, Step 7-10 为 ±3%</li>
                                <li><strong>黑电平处理</strong>: <span className="text-green-600 dark:text-green-400">您只需输入设备绝对读数,系统会自动减去黑电平</span></li>
                            </ul>
                        </div>
                        <div className="mt-2 text-amber-600 dark:text-amber-500">
                            <strong>⚠️ 任何步骤验证失败都会导致此测试失败</strong>
                        </div>
                    </AlertDescription>
                </Alert>
            </CardHeader>

            <CardContent className="space-y-6">
                {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">加载数据中...</span>
                    </div>
                ) : (
                    <>
                        {/* 黑电平测量 */}
                        <Card className="bg-muted/50">
                            <CardHeader>
                                <CardTitle className="text-base">步骤 1: 屏幕黑电平测量</CardTitle>
                                <CardDescription>
                                    使用光谱辐射计测量 "2K Full SDR Black" 的输出亮度
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
                                        (精度: 1 mcd/m² = 0.001 cd/m²)
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 测试图案选择 */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">步骤 2-3: 选择测试图案并测量</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs value={testType} onValueChange={handleTestTypeChange}>
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="white-steps">DCI White Steps</TabsTrigger>
                                        <TabsTrigger value="gray-steps">DCI Gray Steps</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value={testType} className="mt-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-semibold">{getTestName(testType)}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        参考: {getTableReference(testType)}
                                                    </p>
                                                </div>
                                                {totalSteps > 0 && (
                                                    <Badge variant={passedSteps === totalSteps ? "default" : "destructive"}>
                                                        {passedSteps}/{totalSteps} 通过
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="overflow-x-auto">
                                                <table className="w-full border-collapse text-sm">
                                                    <thead>
                                                        <tr className="border-b bg-muted/50">
                                                            <th className="p-3 text-left font-medium">步骤</th>
                                                            <th className="p-3 text-center font-medium">标称值<br />(above black)</th>
                                                            <th className="p-3 text-center font-medium">容差</th>
                                                            <th className="p-3 text-center font-medium">测量值<br />(设备读数)</th>
                                                            <th className="p-3 text-center font-medium">减去黑电平后</th>
                                                            <th className="p-3 text-center font-medium">偏差</th>
                                                            <th className="p-3 text-center font-medium">结果</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {measurements.map((measurement, idx) => {
                                                            // 用户输入的是绝对亮度值,系统自动减去黑电平
                                                            const absoluteLuminance = measurement.measuredLuminance;
                                                            const correctedLuminance = absoluteLuminance !== undefined && screenBlackLevel !== undefined
                                                                ? absoluteLuminance - (screenBlackLevel / 1000) // mcd/m² 转 cd/m²
                                                                : undefined;

                                                            const deviation = correctedLuminance !== undefined
                                                                ? calculateDeviation(correctedLuminance, measurement.nominalLuminance)
                                                                : undefined;

                                                            const passed = correctedLuminance !== undefined
                                                                ? isWithinTolerance(correctedLuminance, measurement.nominalLuminance, measurement.tolerance)
                                                                : undefined;

                                                            const lowerBound = measurement.nominalLuminance * (1 - measurement.tolerance);
                                                            const upperBound = measurement.nominalLuminance * (1 + measurement.tolerance);

                                                            return (
                                                                <tr key={idx} className="border-b hover:bg-muted/30">
                                                                    <td className="p-3 font-medium">{measurement.stepNumber}</td>
                                                                    <td className="p-3 text-center font-mono text-xs">{measurement.nominalLuminance.toFixed(3)}</td>
                                                                    <td className="p-3 text-center">
                                                                        <span className="text-xs">
                                                                            ±{(measurement.tolerance * 100).toFixed(0)}%
                                                                            <br />
                                                                            <span className="text-muted-foreground">
                                                                                ({lowerBound.toFixed(3)} - {upperBound.toFixed(3)})
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="p-3">
                                                                        <Input
                                                                            type="number"
                                                                            step="0.001"
                                                                            placeholder="0.000"
                                                                            value={measurement.measuredLuminance ?? ''}
                                                                            onChange={(e) => updateMeasurement(idx, e.target.value)}
                                                                            className="w-32 text-center font-mono text-xs"
                                                                        />
                                                                    </td>
                                                                    <td className="p-3 text-center font-mono text-xs">
                                                                        {correctedLuminance !== undefined ? (
                                                                            <span className="text-blue-600 dark:text-blue-400">
                                                                                {correctedLuminance.toFixed(3)}
                                                                            </span>
                                                                        ) : (
                                                                            <span className="text-muted-foreground">-</span>
                                                                        )}
                                                                    </td>
                                                                    <td className="p-3 text-center font-mono text-xs">
                                                                        {deviation !== undefined ? (
                                                                            <span className={deviation > 0 ? 'text-amber-600' : 'text-blue-600'}>
                                                                                {deviation > 0 ? '+' : ''}{deviation.toFixed(2)}%
                                                                            </span>
                                                                        ) : (
                                                                            <span className="text-muted-foreground">-</span>
                                                                        )}
                                                                    </td>
                                                                    <td className="p-3 text-center">
                                                                        {passed === true && (
                                                                            <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                                                                        )}
                                                                        {passed === false && (
                                                                            <XCircle className="h-5 w-5 text-red-600 mx-auto" />
                                                                        )}
                                                                        {passed === undefined && (
                                                                            <span className="text-muted-foreground">-</span>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        {/* 保存按钮 */}
                        <div className="flex justify-end">
                            <Button onClick={handleSave} disabled={isSaving}>
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
                    </>
                )}
            </CardContent>
        </Card>
    );
}
