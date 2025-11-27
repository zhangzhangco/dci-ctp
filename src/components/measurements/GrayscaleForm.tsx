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
    getTestName,
    getTableReference,
    getHDREOTFTolerance,
    type GrayscaleStepSpec
} from '@/domain/standards/ctpGrayscaleSpec';
import {
    saveGrayscaleDataAction,
    loadGrayscaleDataAction
} from '@/app/actions/grayscale-actions';
import { MeasurementLayout } from './MeasurementLayout';
import { GrayscaleChart } from '@/components/charts/GrayscaleChart';
import { MeasureButton } from './MeasureButton';
import { ColorimetricData } from '@/lib/hardware/cs2000/types';

interface GrayscaleFormProps {
    sessionId: number;
}

interface MeasuredStep {
    measuredL: number;
}

import { useTranslations } from 'next-intl';

export function GrayscaleForm({ sessionId }: GrayscaleFormProps) {
    const t = useTranslations('GrayscaleForm');
    const [activeTab, setActiveTab] = useState<'white-steps' | 'gray-steps' | 'hdr-eotf'>('white-steps');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Determine current spec based on tab
    let currentSpec: GrayscaleStepSpec[];
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
            const standard = activeTab === 'hdr-eotf' ? 'hdr' : 'sdr';
            const savedData = await loadGrayscaleDataAction(sessionId, activeTab, standard);
            if (savedData && savedData.measurements) {
                const loaded: Record<string, MeasuredStep> = {};
                savedData.measurements.forEach(item => {
                    // Find step name by index/number if possible, or assume order matches?
                    // The action returns stepNumber (index). We need to map back to name.
                    // currentSpec has the order.
                    // Note: stepNumber in spec is 1-based usually, but let's rely on the array index matching the save logic
                    // In save logic below, we use index as stepNumber.
                    const specStep = currentSpec[item.stepNumber];
                    if (specStep) {
                        const stepName = `Step ${specStep.stepNumber}`;
                        if (item.measuredLuminance !== undefined) {
                            loaded[stepName] = { measuredL: item.measuredLuminance };
                        }
                    }
                });
                setMeasurements(loaded);
            } else {
                setMeasurements({});
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, activeTab, currentSpec]);

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
            const dataToSave = currentSpec.map((step, index: number) => ({
                stepNumber: index, // Use index as step number for storage consistency
                measuredLuminance: measurements[`Step ${step.stepNumber}`]?.measuredL || 0
            }));

            const standard = activeTab === 'hdr-eotf' ? 'hdr' : 'sdr';
            const result = await saveGrayscaleDataAction({
                sessionId,
                testType: activeTab,
                screenBlackLevel: 0, // TODO: Get actual black level if needed
                measurements: dataToSave
            }, standard);

            if (result.success) {
                alert(t('saveSuccess'));
            } else {
                alert(t('saveFail'));
            }
        } catch (error) {
            alert(t('saveFail'));
        } finally {
            setIsSaving(false);
        }
    };

    const renderRow = (step: GrayscaleStepSpec) => {
        const stepName = `Step ${step.stepNumber}`;
        const measured = measurements[stepName]?.measuredL;
        const hasValue = measured !== undefined;

        let result: { status: 'pass' | 'fail' | 'warning', message?: string } | undefined;
        let deltaL: number | undefined;
        let normalizedL: number | undefined;
        let percentageError: number | undefined;

        if (hasValue) {
            if (activeTab === 'hdr-eotf') {
                const status = validateHDREOTF(measured, step.nominalLuminance);
                result = { status: status === 'soft-fail' ? 'warning' : status };
                deltaL = calculateDeltaL(measured, step.nominalLuminance);
                const peakL = Math.max(...currentSpec.map(s => s.nominalLuminance));
                normalizedL = calculateNormalizedL(measured, peakL);
            } else {
                // SDR Logic
                percentageError = calculatePercentageError(measured, step.nominalLuminance);
                const isPass = Math.abs(percentageError) <= (step.tolerance * 100);
                result = { status: isPass ? 'pass' : 'fail' };
            }
        }

        return (
            <tr key={step.stepNumber} className="border-b hover:bg-muted/30">
                <td className="p-3 font-medium">{stepName}</td>
                {activeTab === 'hdr-eotf' && (
                    <td className="p-3 text-center font-mono text-xs text-muted-foreground">
                        {step.codeY ? `${step.codeY}` : '-'}
                    </td>
                )}
                <td className="p-3 text-center font-mono text-xs">
                    {step.nominalLuminance.toFixed(activeTab === 'hdr-eotf' ? 3 : 1)}
                </td>
                <td className="p-3 text-center text-xs">
                    {activeTab === 'hdr-eotf' ? (
                        <span>
                            Target: ±{(getHDREOTFTolerance(step.nominalLuminance) * 100).toFixed(0)}%
                        </span>
                    ) : (
                        `±${(step.tolerance * 100).toFixed(1)}%`
                    )}
                </td>
                <td className="p-3">
                    <div className="flex justify-center gap-1 items-center">
                        <Input
                            type="number"
                            step="0.001"
                            className="w-20 text-center font-mono text-xs"
                            value={measured ?? ''}
                            onChange={e => updateMeasurement(stepName, e.target.value)}
                        />
                        <MeasureButton
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            target={{
                                x: activeTab === 'hdr-eotf' ? 0.3127 : 0.314,
                                y: activeTab === 'hdr-eotf' ? 0.3290 : 0.351,
                                Y: step.nominalLuminance
                            }}
                            onMeasured={(data: ColorimetricData) => {
                                updateMeasurement(stepName, data.Lv.toFixed(3));
                            }}
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
            title={t('title')}
            subtitle={t('subtitle')}
            phases={['Phase 2']}
            standard={{
                title: getTestName(activeTab),
                reference: getTableReference(activeTab),
                description: t('description'),
                targets: [
                    { label: t('targets.stepsLabel'), value: t('targets.stepsValue', { count: currentSpec.length }) },
                    { label: t('targets.standardLabel'), value: activeTab === 'hdr-eotf' ? 'SMPTE ST 2084 (PQ)' : 'Gamma 2.6' }
                ]
            }}
        >
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="white-steps">{t('tabs.whiteSteps')}</TabsTrigger>
                    <TabsTrigger value="gray-steps">{t('tabs.graySteps')}</TabsTrigger>
                    <TabsTrigger value="hdr-eotf">{t('tabs.hdrEotf')}</TabsTrigger>
                </TabsList>
            </Tabs>

            {isLoading ? (
                <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">{t('loading')}</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">{t('dataEntry')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto max-h-[600px]">
                                    <table className="w-full border-collapse text-sm">
                                        <thead className="sticky top-0 bg-background z-10">
                                            <tr className="border-b bg-muted/50">
                                                <th className="p-3 text-left font-medium">{t('table.step')}</th>
                                                {activeTab === 'hdr-eotf' && <th className="p-3 text-center font-medium">{t('table.cv')}</th>}
                                                <th className="p-3 text-center font-medium">{t('table.target')}</th>
                                                <th className="p-3 text-center font-medium">{t('table.tolerance')}</th>
                                                <th className="p-3 text-center font-medium">{t('table.measured')}</th>
                                                {activeTab === 'hdr-eotf' && (
                                                    <>
                                                        <th className="p-3 text-center font-medium">{t('table.normL')}</th>
                                                        <th className="p-3 text-center font-medium">{t('table.deltaL')}</th>
                                                    </>
                                                )}
                                                <th className="p-3 text-center font-medium">{t('table.result')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentSpec.map(renderRow)}
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
                                        {t('saving')}
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 h-4 w-4" />
                                        {t('saveButton')}
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div>
                        <GrayscaleChart
                            spec={currentSpec}
                            measurements={currentSpec.map(step => ({
                                stepNumber: step.stepNumber,
                                measuredLuminance: measurements[`Step ${step.stepNumber}`]?.measuredL
                            }))}
                            standardType={activeTab === 'hdr-eotf' ? 'hdr' : 'sdr'}
                        />
                    </div>
                </div>
            )}
        </MeasurementLayout>
    );
}
