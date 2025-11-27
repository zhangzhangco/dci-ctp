'use client';

import { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area,
    ComposedChart,
    Bar,
    ReferenceLine
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
    GrayscaleStepSpec,
    getHDREOTFTolerance,
    calculatePercentageError,
    calculateNormalizedL
} from '@/domain/standards/ctpGrayscaleSpec';
import { useTranslations } from 'next-intl';

interface GrayscaleChartProps {
    spec: GrayscaleStepSpec[];
    measurements: { stepNumber: number; measuredLuminance?: number }[];
    standardType: 'sdr' | 'hdr';
}

export function GrayscaleChart({ spec, measurements, standardType }: GrayscaleChartProps) {
    const [scaleType, setScaleType] = useState<'linear' | 'log'>(standardType === 'hdr' ? 'log' : 'linear');
    const [xAxisType, setXAxisType] = useState<'step' | 'cv' | 'normalized'>('step');
    const t = useTranslations('GrayscaleChart');

    // Prepare Data
    const data = spec.map((s) => {
        const measured = measurements.find((m) => m.stepNumber === s.stepNumber)?.measuredLuminance;
        const tolerance = s.tolerance || getHDREOTFTolerance(s.nominalLuminance);

        // Tolerance Band
        const min = s.nominalLuminance * (1 - tolerance);
        const max = s.nominalLuminance * (1 + tolerance);

        // Error
        const error = measured !== undefined ? calculatePercentageError(measured, s.nominalLuminance) : null;

        // Normalized L (assuming peak is last step's target)
        const peak = spec[spec.length - 1].nominalLuminance;
        const normalizedTarget = calculateNormalizedL(s.nominalLuminance, peak);

        return {
            step: s.stepNumber,
            cv: s.codeY, // Using Y' code value as primary reference
            normalized: normalizedTarget,
            target: s.nominalLuminance,
            measured: measured,
            min: min,
            max: max,
            error: error,
            tolerancePercent: tolerance * 100,
            negTolerancePercent: -tolerance * 100
        };
    });

    const getXAxisKey = () => {
        switch (xAxisType) {
            case 'cv': return 'cv';
            case 'normalized': return 'normalized';
            default: return 'step';
        }
    };

    const getXAxisLabel = () => {
        switch (xAxisType) {
            case 'cv': return t('axis.codeValue');
            case 'normalized': return t('axis.normalizedLuminance');
            default: return t('axis.stepNumber');
        }
    };

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="log-scale"
                            checked={scaleType === 'log'}
                            onCheckedChange={(checked) => setScaleType(checked ? 'log' : 'linear')}
                        />
                        <Label htmlFor="log-scale">{t('logScale')}</Label>
                    </div>
                    <Tabs value={xAxisType} onValueChange={(v) => setXAxisType(v as any)}>
                        <TabsList>
                            <TabsTrigger value="step">{t('xAxis.step')}</TabsTrigger>
                            <TabsTrigger value="cv">{t('xAxis.cv')}</TabsTrigger>
                            <TabsTrigger value="normalized">{t('xAxis.normalized')}</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            {/* Main EOTF Chart */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">{t('eotfTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                            <XAxis
                                dataKey={getXAxisKey()}
                                type="number"
                                domain={['dataMin', 'dataMax']}
                                label={{ value: getXAxisLabel(), position: 'bottom', offset: 0 }}
                                scale={xAxisType === 'step' ? 'linear' : 'auto'}
                            />
                            <YAxis
                                scale={scaleType}
                                domain={['auto', 'auto']}
                                label={{ value: t('axis.luminance'), angle: -90, position: 'insideLeft' }}
                            />
                            <Tooltip
                                formatter={(value: number) => value?.toFixed(4)}
                                labelFormatter={(label) => `${getXAxisLabel()}: ${label}`}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />

                            {/* Tolerance Band (Area) */}
                            {/* Recharts Area requires two dataKeys for range, but usually it's min/max. 
                                Here we can use a trick or just plot min/max lines. 
                                For simplicity in this version, we plot min/max as faint lines or use error bars.
                                Actually, Area can take [min, max] if we structure data right, but standard Area is 0 to value.
                                Let's use simple lines for bounds for now to avoid complex custom shapes.
                            */}
                            <Line type="monotone" dataKey="max" stroke="#82ca9d" strokeDasharray="3 3" dot={false} strokeWidth={1} name={t('legend.tolMax')} />
                            <Line type="monotone" dataKey="min" stroke="#82ca9d" strokeDasharray="3 3" dot={false} strokeWidth={1} name={t('legend.tolMin')} />

                            <Line type="monotone" dataKey="target" stroke="#8884d8" strokeWidth={2} dot={false} name={t('legend.target')} />
                            <Line type="monotone" dataKey="measured" stroke="#ff7300" strokeWidth={2} name={t('legend.measured')} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Error Chart */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">{t('errorTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                            <XAxis
                                dataKey={getXAxisKey()}
                                label={{ value: getXAxisLabel(), position: 'bottom', offset: 0 }}
                            />
                            <YAxis label={{ value: t('axis.error'), angle: -90, position: 'insideLeft' }} />
                            <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <ReferenceLine y={0} stroke="#666" />

                            {/* Dynamic Tolerance Lines? Hard since it varies per step. 
                                We can plot tolerance as a Line/Area. 
                            */}
                            <Area type="step" dataKey="tolerancePercent" fill="#82ca9d" stroke="#82ca9d" fillOpacity={0.2} name={t('legend.tolerancePlus')} />
                            <Area type="step" dataKey="negTolerancePercent" fill="#82ca9d" stroke="#82ca9d" fillOpacity={0.2} name={t('legend.toleranceMinus')} />
                            {/* Negative tolerance mirror */}
                            {/* Recharts doesn't easily do negative area from same key. 
                                We can add negTolerance to data.
                            */}

                            <Bar dataKey="error" fill="#ff7300" name={t('legend.error')} barSize={20} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
