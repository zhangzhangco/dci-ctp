'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, CheckCircle2, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import {
    WHITE_STEPS_SPEC,
    GRAY_STEPS_SPEC,
    HDR_EOTF_SPEC,
    calculatePercentageError,
    calculateDeltaL,
    calculateNormalizedL,
    validateHDREOTF,
    type GrayscaleStandard,
    type GrayscaleStepSpec
} from '@/domain/standards/ctpGrayscaleSpec';
import {
    saveGrayscaleDataAction,
    loadGrayscaleDataAction
} from '@/app/actions/grayscale-actions';
import { MeasurementLayout } from './MeasurementLayout';
import { GrayscaleChart } from '@/components/charts/GrayscaleChart';

interface GrayscaleFormProps {
    sessionId: number;
}

interface MeasuredStep {
    measuredL: number;
}

export function GrayscaleForm({ sessionId }: GrayscaleFormProps) {
    const [activeTab, setActiveTab] = useState<'white-steps' | 'gray-steps' | 'hdr-eotf'>('white-steps');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Determine current spec based on tab
    let currentSpec: GrayscaleStandard;
    switch (activeTab) {
        case 'white-steps':
            currentSpec = WHITE_STEPS_SPEC;
            break;
        case 'gray-steps':
            currentSpec = GRAY_STEPS_SPEC;
            break;
        case 'hdr-eotf':
            currentSpec = HDR_EOTF_SPEC;
            break;
    }

    const [measurements, setMeasurements] = useState<Record<string, MeasuredStep>>({});

    // Load data when tab changes
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const savedData = await loadGrayscaleDataAction(sessionId, activeTab);
            if (savedData) {
                const loaded: Record<string, MeasuredStep> = {};
                savedData.forEach(item => {
                    loaded[item.stepName] = { measuredL: item.measuredL };
                });
                setMeasurements(loaded);
            } else {
                setMeasurements({});
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, activeTab]);

    const updateMeasurement = (stepName: string, value: string) => {
        const numValue = parseFloat(value);
        setMeasurements(prev => ({
            ...prev,
            [stepName]: { measuredL: isNaN(numValue) ? 0 : numValue }
        }));
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const dataToSave = currentSpec.steps.map(step => ({
                stepName: step.name,
                measuredL: measurements[step.name]?.measuredL || 0
            }));

            const result = await saveGrayscaleDataAction({
                sessionId,
                testType: activeTab,
                measurements: dataToSave
            });

            if (result.success) {
                alert('数据已保存成功!');
            } else {
                alert('保存失败');
            }
        } catch (error) {
            alert('保存失败');
        } finally {
            setIsSaving(false);
        }
    };

    const renderRow = (step: GrayscaleStepSpec) => {
        const measured = measurements[step.name]?.measuredL;
        const hasValue = measured !== undefined;
        
        let result: { status: 'pass' | 'fail' | 'warning', message?: string } | undefined;
        let deltaL: number | undefined;
        let normalizedL: number | undefined;
        let percentageError: number | undefined;

        if (hasValue) {
            if (activeTab === 'hdr-eotf') {
                result = validateHDREOTF(measured, step);
                deltaL = calculateDeltaL(measured, step.targetL);
                // For Normalized L, we need peak white. Assuming the last step is peak for now or using target.
                // Ideally we should find the max target L in the spec.
                const peakL = Math.max(...currentSpec.steps.map(s => s.targetL));
                normalizedL = calculateNormalizedL(measured, peakL);
            } else {
                // SDR Logic
                percentageError = calculatePercentageError(measured, step.targetL);
                const isPass = Math.abs(percentageError) <= (step.tolerance * 100);
                result = { status: isPass ? 'pass' : 'fail' };
            }
        }

        return (
            <tr key={step.name} className="border-b hover:bg-muted/30">
                <td className="p-3 font-medium">{step.name}</td>
                {activeTab === 'hdr-eotf' && (
                    <td className="p-3 text-center font-mono text-xs text-muted-foreground">
                        {step.codeValueCV ? `${step.codeValueCV}` : '-'}
                    </td>
                )}
                <td className="p-3 text-center font-mono text-xs">
                    {step.targetL.toFixed(activeTab === 'hdr-eotf' ? 3 : 1)}
                </td>
                <td className="p-3 text-center text-xs">
                    {activeTab === 'hdr-eotf' ? (
                        <span>
                            Target: ±{(step.tolerance * 100).toFixed(0)}%<br/>
                            (Soft: ±{(step.softTolerance! * 100).toFixed(0)}%)
                        </span>
                    ) : (
                        `±${(step.tolerance * 100).toFixed(1)}%`
                    )}
                </td>
                <td className="p-3">
                    <div className="flex justify-center">
                        <Input 
                            type="number" 
                            step="0.001"
                            className="w-24 text-center font-mono text-xs"
                            value={measured ?? ''}
                            onChange={e => updateMeasurement(step.name, e.target.value)}
                        />
                    </div>
                </td>
                {activeTab === 'hdr-eotf' && (
                    <>
                        <td className="p-3 text-center font-mono text-xs">
                            {normalizedL !== undefined ? normalizedL.toFixed(4) : '-'}
                        </td>
                        <td className="p-3 text-center font-mono text-xs">
                            {deltaL !== undefined ? (
                                <span className={deltaL > 0 ? 'text-red-500' : 'text-blue-500'}>
                                    {deltaL > 0 ? '+' : ''}{deltaL.toFixed(3)}
                                </span>
                            ) : '-'}
                        </td>
                    </>
                )}
                <td className="p-3 text-center">
                    {result ? (
                        <div className="flex flex-col items-center gap-1">
                            {result.status === 'pass' && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                            {result.status === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                            {result.status === 'fail' && <XCircle className="h-5 w-5 text-red-600" />}
                            
                            {activeTab !== 'hdr-eotf' && percentageError !== undefined && (
                                <span className={`text-xs font-bold ${Math.abs(percentageError) > step.tolerance * 100 ? 'text-red-600' : 'text-green-600'}`}>
                                    {percentageError > 0 ? '+' : ''}{percentageError.toFixed(1)}%
                                </span>
                            )}
                        </div>
                    ) : '-'}
                </td>
            </tr>
        );
    };

    return (
        <MeasurementLayout
            title="灰阶与 EOTF 响应 (Grayscale & Gamma)"
            subtitle="验证显示设备的灰阶追踪性能与 Gamma/EOTF 曲线符合度"
            phases={['Phase 2']}
            standard={{
                title: currentSpec.name,
                reference: currentSpec.reference,
                description: "测量各灰阶等级的亮度，验证其与目标 EOTF 曲线的偏差。",
                targets: [
                    { label: "Steps", value: `${currentSpec.steps.length} Levels` },
                    { label: "Standard", value: activeTab === 'hdr-eotf' ? 'SMPTE ST 2084 (PQ)' : 'Gamma 2.6' }
                ]
            }}
        >
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="white-steps">White Steps (SDR)</TabsTrigger>
                    <TabsTrigger value="gray-steps">Gray Steps (SDR)</TabsTrigger>
                    <TabsTrigger value="hdr-eotf">HDR EOTF (PQ)</TabsTrigger>
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
                                <div className="overflow-x-auto max-h-[600px]">
                                    <table className="w-full border-collapse text-sm">
                                        <thead className="sticky top-0 bg-background z-10">
                                            <tr className="border-b bg-muted/50">
                                                <th className="p-3 text-left font-medium">Step</th>
                                                {activeTab === 'hdr-eotf' && <th className="p-3 text-center font-medium">CV</th>}
                                                <th className="p-3 text-center font-medium">Target (cd/m²)</th>
                                                <th className="p-3 text-center font-medium">Tolerance</th>
                                                <th className="p-3 text-center font-medium">Measured</th>
                                                {activeTab === 'hdr-eotf' && (
                                                    <>
                                                        <th className="p-3 text-center font-medium">Norm. L</th>
                                                        <th className="p-3 text-center font-medium">ΔL</th>
                                                    </>
                                                )}
                                                <th className="p-3 text-center font-medium">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentSpec.steps.map(renderRow)}
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
                        <GrayscaleChart 
                            data={currentSpec.steps.map(step => ({
                                stepName: step.name,
                                targetL: step.targetL,
                                measuredL: measurements[step.name]?.measuredL,
                                tolerance: step.tolerance,
                                codeValue: step.codeValueCV
                            }))}
                            isHDR={activeTab === 'hdr-eotf'}
                        />
                    </div>
                </div>
            )}
        </MeasurementLayout>
    );
}
