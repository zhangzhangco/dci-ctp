'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, CheckCircle2, XCircle, Loader2, AlertTriangle } from 'lucide-react';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import {
    getBasicTestSpec,
    isLuminanceWithinTolerance,
    isChrominanceWithinTolerance,
    isBlackLevelCompliant,
    type BasicTestType
} from '@/domain/standards/ctpBasicSpec';
import {
    saveBasicMeasurementAction,
    getBasicMeasurementsAction
} from '@/app/actions/measurement-actions';
import { BasicMeasurementType } from '@/domain/measurements/basic';
import { MeasurementLayout } from './MeasurementLayout';

interface BasicMeasurementFormProps {
    sessionId: number;
}

export function BasicMeasurementForm({ sessionId }: BasicMeasurementFormProps) {
    const [testType, setTestType] = useState<BasicTestType>('sdr-white');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Form State
    const [whiteL, setWhiteL] = useState<string>('');
    const [whiteX, setWhiteX] = useState<string>('');
    const [whiteY, setWhiteY] = useState<string>('');
    const [blackL, setBlackL] = useState<string>('');

    const spec = getBasicTestSpec(testType);

    // Load data
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                const data = await getBasicMeasurementsAction(sessionId);

                // Determine which type of data to load based on current tab
                // Mapping: sdr-white -> sdr_peak_white / sdr_black_level
                const prefix = testType === 'sdr-white' ? 'sdr' : 'hdr';

                const whiteData = data.find(m => m.type === `${prefix}_peak_white` as BasicMeasurementType) ||
                    data.find(m => m.type === 'peak_white'); // Fallback for legacy data

                const blackData = data.find(m => m.type === `${prefix}_black_level` as BasicMeasurementType) ||
                    data.find(m => m.type === 'black_level'); // Fallback

                if (whiteData) {
                    setWhiteL(whiteData.measuredL?.toString() || '');
                    setWhiteX(whiteData.measuredX?.toString() || '');
                    setWhiteY(whiteData.measuredY?.toString() || '');
                } else {
                    setWhiteL(''); setWhiteX(''); setWhiteY('');
                }

                if (blackData) {
                    setBlackL(blackData.measuredL?.toString() || '');
                } else {
                    setBlackL('');
                }

            } catch (error) {
                console.error("Failed to load data", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, [sessionId, testType]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const prefix = testType === 'sdr-white' ? 'sdr' : 'hdr';

            // Save White
            if (whiteL && whiteX && whiteY) {
                await saveBasicMeasurementAction({
                    sessionId,
                    type: `${prefix}_peak_white` as BasicMeasurementType,
                    measuredL: parseFloat(whiteL),
                    measuredX: parseFloat(whiteX),
                    measuredY: parseFloat(whiteY),
                });
            }

            // Save Black
            if (blackL) {
                await saveBasicMeasurementAction({
                    sessionId,
                    type: `${prefix}_black_level` as BasicMeasurementType,
                    measuredL: parseFloat(blackL),
                });
            }

            alert('数据已保存');
        } catch (error) {
            alert('保存失败');
        } finally {
            setIsSaving(false);
        }
    };

    // Validation Logic
    const numWhiteL = parseFloat(whiteL);
    const numWhiteX = parseFloat(whiteX);
    const numWhiteY = parseFloat(whiteY);
    const numBlackL = parseFloat(blackL);

    const isWhiteLValid = !isNaN(numWhiteL) && isLuminanceWithinTolerance(numWhiteL, spec.targetLuminance, spec.toleranceLuminance);
    const isWhiteCValid = !isNaN(numWhiteX) && !isNaN(numWhiteY) && isChrominanceWithinTolerance(numWhiteX, numWhiteY, spec.targetX, spec.targetY, spec.toleranceChrominance);
    const isBlackValid = !isNaN(numBlackL) && isBlackLevelCompliant(numBlackL, spec.minBlackLevel, spec.maxBlackLevel);

    const renderStatusIcon = (isValid: boolean | undefined, isEmpty: boolean) => {
        if (isEmpty) return <span className="text-muted-foreground">-</span>;
        return isValid ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <XCircle className="h-5 w-5 text-red-600" />;
    };

    return (
        <MeasurementLayout
            title={spec.name}
            subtitle="验证显示设备的亮度与黑位性能"
            phases={['Phase 1']}
            standard={{
                title: `${testType === 'sdr-white' ? 'SDR' : 'HDR'} Standard`,
                reference: spec.reference,
                targets: [
                    {
                        label: "峰值亮度 (Peak White)",
                        value: `${spec.targetLuminance} cd/m²`,
                        tolerance: `±${spec.toleranceLuminance}`
                    },
                    {
                        label: "色坐标 (Chromaticity)",
                        value: `x=${spec.targetX}, y=${spec.targetY}`,
                        tolerance: `±${spec.toleranceChrominance}`
                    },
                    {
                        label: "黑电平 (Black Level)",
                        value: `${spec.minBlackLevel} - ${spec.maxBlackLevel} cd/m²`,
                        tolerance: "(Active Black)"
                    }
                ]
            }}
        >
            {/* Action & Judgment Zone */}
            <Tabs value={testType} onValueChange={(v) => setTestType(v as BasicTestType)}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sdr-white">SDR Standard (DCI)</TabsTrigger>
                    <TabsTrigger value="hdr-white">HDR Standard (DCI)</TabsTrigger>
                </TabsList>

                <TabsContent value={testType} className="space-y-6 mt-6">
                    {isLoading ? (
                        <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Peak White Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">1. 峰值亮度测量</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                        <label className="text-sm font-medium">亮度 (L)</label>
                                        <Input
                                            value={whiteL}
                                            onChange={e => setWhiteL(e.target.value)}
                                            placeholder="cd/m²"
                                            className={!whiteL ? '' : isWhiteLValid ? 'border-green-500' : 'border-red-500'}
                                        />
                                        <div className="flex items-center gap-2">
                                            {renderStatusIcon(isWhiteLValid, !whiteL)}
                                            {!whiteL ? null : (
                                                <span className="text-xs text-muted-foreground">
                                                    Target: {spec.targetLuminance}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                        <label className="text-sm font-medium">色坐标 (x)</label>
                                        <Input
                                            value={whiteX}
                                            onChange={e => setWhiteX(e.target.value)}
                                            placeholder="0.xxxx"
                                            className={!whiteX ? '' : isWhiteCValid ? 'border-green-500' : 'border-red-500'}
                                        />
                                        <div className="row-span-2 flex items-center gap-2">
                                            {renderStatusIcon(isWhiteCValid, !whiteX || !whiteY)}
                                            {(!whiteX || !whiteY) ? null : (
                                                <span className="text-xs text-muted-foreground">
                                                    Target: {spec.targetX}, {spec.targetY}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                        <label className="text-sm font-medium">色坐标 (y)</label>
                                        <Input
                                            value={whiteY}
                                            onChange={e => setWhiteY(e.target.value)}
                                            placeholder="0.xxxx"
                                            className={!whiteY ? '' : isWhiteCValid ? 'border-green-500' : 'border-red-500'}
                                        />
                                        {/* Icon handled above */}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Black Level Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">2. 黑电平测量</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                        <label className="text-sm font-medium">亮度 (L)</label>
                                        <Input
                                            value={blackL}
                                            onChange={e => setBlackL(e.target.value)}
                                            placeholder="cd/m²"
                                            className={!blackL ? '' : isBlackValid ? 'border-green-500' : 'border-red-500'}
                                        />
                                        <div className="flex items-center gap-2">
                                            {renderStatusIcon(isBlackValid, !blackL)}
                                            {!blackL ? null : (
                                                <span className="text-xs text-muted-foreground">
                                                    Max: {spec.maxBlackLevel}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <Alert variant={isBlackValid ? "default" : "destructive"} className="mt-4">
                                        {isBlackValid ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                                        <AlertTitle>判定结果</AlertTitle>
                                        <AlertDescription>
                                            {!blackL ? "等待输入..." : isBlackValid ? "符合标准要求" : "超出标准范围"}
                                        </AlertDescription>
                                    </Alert>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    <div className="flex justify-end pt-4">
                        <Button onClick={handleSave} disabled={isSaving} size="lg">
                            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                            保存测量数据
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </MeasurementLayout>
    );
}
