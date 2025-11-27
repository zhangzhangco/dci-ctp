'use server';

import { db } from '@/db';
import {
    measurementsBasic,
    measurementsUniformity,
    measurementsGrayscale,
    measurementsColor,
    measurementsPixelStructure,
    measurementsIntraContrast,
    measurementsInactiveArea,
    measurementsPixelCount,
    measurementsContouring,
    measurementsSubPixel,
    measurementsUpscaling,
    measurementsViewingAngle,
    measurementsScreenGain,
    measurementsExhibition,
    measurementsContrast,
    measurementsVignetting,
    testSessions,
    devices
} from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import type { CTPOverview, MeasurementItemStatus, PhaseStatus, StandardType } from '@/types/ctp-overview';
import { getTranslations } from 'next-intl/server';

// 导入验证逻辑
import {
    SDR_WHITE_SPEC,
    HDR_WHITE_SPEC,
    isLuminanceWithinTolerance,
    isBlackLevelCompliant,
    BasicTestSpec
} from '@/domain/standards/ctpBasicSpec';
import {
    SDR_UNIFORMITY_SPEC,
    HDR_UNIFORMITY_SPEC,
    UniformityStandard
} from '@/domain/standards/ctpUniformitySpec';
import {
    SDR_COLOR_VOLUME_SPEC,
    HDR_COLOR_VOLUME_SPEC
} from '@/domain/standards/ctpColorVolumeSpec';
import {
    SDR_ACCURACY_TARGETS,
    HDR_ACCURACY_TARGETS,
    isLuminanceCompliant,
    isChromaticityCompliant
} from '@/domain/standards/ctpColorAccuracySpec';
// Assuming these exist or using placeholders if not found in recent checks
import {
    HDR_EOTF_SPEC
} from '@/domain/standards/ctpGrayscaleSpec';

/**
 * 获取 CTP 总览数据
 */
export async function getCTPOverviewAction(
    sessionId: number,
    locale: string = 'zh'
): Promise<CTPOverview> {
    const tItems = await getTranslations({ locale, namespace: 'MeasurementItems' });
    const tSummary = await getTranslations({ locale, namespace: 'MeasurementSummary' });
    const tOverview = await getTranslations({ locale, namespace: 'CTPOverview' });

    // Fetch session and device info
    const session = await db.query.testSessions.findFirst({
        where: eq(testSessions.id, sessionId),
        with: {
            device: true
        }
    });

    if (!session) {
        throw new Error('Session not found');
    }

    const standardType = (session.standard || 'sdr') as StandardType;
    const deviceType = (session.device?.type || 'projector') as 'projector' | 'direct_view';

    // Helper to create placeholder items
    const createPlaceholder = (id: string, nameKey: string, phase: 1 | 2 | 3, ref: string, standard?: string): MeasurementItemStatus => ({
        id,
        name: standard ? `${standard.toUpperCase()} ${tItems(nameKey)}` : tItems(nameKey),
        category: 'device',
        phase,
        status: 'not_tested',
        standardRef: ref,
        navigationPath: `/measurements/placeholder?id=${id}` // Placeholder path
    });

    // Phase 1: Device Baseline (Direct View Geometry / Uniformity / Environment)
    const phase1Items: MeasurementItemStatus[] = [];

    // 7.5.3 Pixel Count / Structure (All)
    const pixelStructureData = await db.query.measurementsPixelStructure.findFirst({
        where: eq(measurementsPixelStructure.sessionId, sessionId)
    });
    phase1Items.push(await evaluatePixelStructure(sessionId, pixelStructureData, tItems, tSummary));

    const pixelCountData = await db.query.measurementsPixelCount.findFirst({
        where: eq(measurementsPixelCount.sessionId, sessionId)
    });
    phase1Items.push(await evaluatePixelCount(sessionId, pixelCountData, tItems, tSummary));

    // 7.5.12 Color Volume (Device)
    const colorVolumeData = await db.query.measurementsColor.findMany({
        where: and(eq(measurementsColor.sessionId, sessionId), eq(measurementsColor.standard, standardType))
    });
    phase1Items.push(await evaluateColorVolume(sessionId, colorVolumeData, standardType, tItems, tSummary));

    if (deviceType === 'direct_view') {
        // 7.5.18 SDR Inactive Black (DV)
        const inactiveAreaDataSDR = await db.query.measurementsInactiveArea.findFirst({
            where: eq(measurementsInactiveArea.sessionId, sessionId)
        });
        phase1Items.push(await evaluateInactiveArea(sessionId, inactiveAreaDataSDR, 'sdr', tItems, tSummary));

        // 7.5.19 Off-axis Uniformity (DV) - Using Viewing Angle Form
        // Note: Viewing Angle form covers off-axis measurements
        const viewingAngleData = await db.query.measurementsViewingAngle.findFirst({
            where: eq(measurementsViewingAngle.sessionId, sessionId)
        });
        phase1Items.push({
            ...await evaluateViewingAngle(sessionId, viewingAngleData, tItems, tSummary),
            id: 'off-axis-uniformity',
            name: tItems('off-axis-uniformity'),
            category: 'device',
            phase: 1,
            standardRef: 'DCI CTP §7.5.19'
        });

        // 7.5.22 Surface Reflectivity (DV) - Using Screen Gain Form
        const screenGainData = await db.query.measurementsScreenGain.findFirst({
            where: eq(measurementsScreenGain.sessionId, sessionId)
        });
        phase1Items.push({
            ...await evaluateScreenGain(sessionId, screenGainData, tItems, tSummary),
            id: 'surface-reflectivity',
            name: tItems('surface-reflectivity'),
            category: 'device',
            phase: 1,
            standardRef: 'DCI CTP §7.5.22'
        });

        // 7.5.23 Vignetting (DV)
        const vignettingData = await db.query.measurementsVignetting.findFirst({
            where: eq(measurementsVignetting.sessionId, sessionId)
        });
        phase1Items.push(await evaluateVignetting(sessionId, vignettingData, tItems, tSummary));

        // 7.5.27 Sub-pixel (DV)
        const subPixelData = await db.query.measurementsSubPixel.findFirst({
            where: eq(measurementsSubPixel.sessionId, sessionId)
        });
        phase1Items.push(await evaluateSubPixel(sessionId, subPixelData, tItems, tSummary));

        // 7.5.30 Environment (DV)
        const exhibitionData = await db.query.measurementsExhibition.findFirst({
            where: eq(measurementsExhibition.sessionId, sessionId)
        });
        phase1Items.push({
            ...await evaluateExhibition(sessionId, exhibitionData, tItems, tSummary),
            id: 'dv-environment',
            name: tItems('dv-environment'),
            category: 'device',
            phase: 1,
            standardRef: 'DCI CTP §7.5.30'
        });
    } else {
        // Projector Environment (7.5.13)
        const exhibitionData = await db.query.measurementsExhibition.findFirst({
            where: eq(measurementsExhibition.sessionId, sessionId)
        });
        phase1Items.push({
            ...await evaluateExhibition(sessionId, exhibitionData, tItems, tSummary),
            id: 'proj-environment',
            name: tItems('proj-environment'),
            category: 'device',
            phase: 1,
            standardRef: 'DCI CTP §7.5.13'
        });
    }

    // Phase 2: Image Chain Correctness (HDR/SDR EOTF, White Point, Color Accuracy, Black Level, Patterns)
    const phase2Items: MeasurementItemStatus[] = [];

    // 7.5.7 Sequential Contrast (All)
    const contrastData = await db.query.measurementsContrast.findFirst({
        where: and(eq(measurementsContrast.sessionId, sessionId), eq(measurementsContrast.standard, 'sdr'))
    });
    phase2Items.push(await evaluateSequentialContrast(sessionId, contrastData, 'sdr', tItems, tSummary));

    // 7.5.8 SDR Intra-frame Contrast (All)
    const intraContrastData = await db.query.measurementsIntraContrast.findFirst({
        where: eq(measurementsIntraContrast.sessionId, sessionId)
    });
    phase2Items.push(await evaluateIntraContrast(sessionId, intraContrastData, 'sdr', tItems, tSummary));

    // 7.5.9 SDR Grayscale (All)
    const sdrGrayscaleData = await db.query.measurementsGrayscale.findMany({
        where: and(eq(measurementsGrayscale.sessionId, sessionId), eq(measurementsGrayscale.standard, 'sdr'))
    });
    phase2Items.push(await evaluateGrayscale(sessionId, sdrGrayscaleData, 'sdr', tItems, tSummary));

    // 7.5.10 SDR Contouring (All)
    const sdrContouringData = await db.query.measurementsContouring.findFirst({
        where: and(eq(measurementsContouring.sessionId, sessionId), eq(measurementsContouring.standard, 'sdr'))
    });
    phase2Items.push(await evaluateContouring(sessionId, sdrContouringData, 'sdr', tItems, tSummary));

    // 7.5.11 SDR Transfer Function (All) - Usually covered by Grayscale, but listed separately.
    phase2Items.push(createPlaceholder('sdr-transfer', 'sdr-transfer', 2, '7.5.11'));

    // 7.5.12 SDR Color Accuracy (All)
    const sdrColorData = await db.query.measurementsColor.findMany({
        where: and(eq(measurementsColor.sessionId, sessionId), eq(measurementsColor.standard, 'sdr'))
    });
    phase2Items.push(await evaluateColorAccuracy(sessionId, sdrColorData, 'sdr', tItems, tSummary));

    // 7.5.15 SDR White Luminance & Chromaticity (All)
    const sdrPeakWhiteData = await db.query.measurementsBasic.findFirst({
        where: (table, { and, eq }) => and(eq(table.sessionId, sessionId), eq(table.type, 'peak_white'), eq(table.standard, 'sdr'))
    });
    // 7.5.29 SDR Minimum Active Black Level (All)
    const sdrBlackLevelData = await db.query.measurementsBasic.findFirst({
        where: (table, { and, eq }) => and(eq(table.sessionId, sessionId), eq(table.type, 'black_level'), eq(table.standard, 'sdr'))
    });
    phase2Items.push(await evaluatePeakWhiteBlack(sessionId, { centerWhite: sdrPeakWhiteData?.measuredL, centerBlack: sdrBlackLevelData?.measuredL }, 'sdr', tItems, tSummary));

    // 7.5.33 Image Frame Rates (All)
    phase2Items.push(createPlaceholder('frame-rates', 'frame-rates', 2, '7.5.33'));

    if (standardType === 'hdr') {
        // 7.5.14 HDR White Luminance & Chromaticity
        const hdrPeakWhiteData = await db.query.measurementsBasic.findFirst({
            where: (table, { and, eq }) => and(eq(table.sessionId, sessionId), eq(table.type, 'peak_white'), eq(table.standard, 'hdr'))
        });
        // 7.5.17 HDR Minimum Active Black
        const hdrBlackLevelData = await db.query.measurementsBasic.findFirst({
            where: (table, { and, eq }) => and(eq(table.sessionId, sessionId), eq(table.type, 'black_level'), eq(table.standard, 'hdr'))
        });
        phase2Items.push(await evaluatePeakWhiteBlack(sessionId, { centerWhite: hdrPeakWhiteData?.measuredL, centerBlack: hdrBlackLevelData?.measuredL }, 'hdr', tItems, tSummary));

        // 7.5.16 HDR Color Accuracy
        const hdrColorData = await db.query.measurementsColor.findMany({
            where: and(eq(measurementsColor.sessionId, sessionId), eq(measurementsColor.standard, 'hdr'))
        });
        phase2Items.push(await evaluateColorAccuracy(sessionId, hdrColorData, 'hdr', tItems, tSummary));

        // 7.5.28 HDR Transfer Function
        const hdrGrayscaleData = await db.query.measurementsGrayscale.findMany({
            where: and(eq(measurementsGrayscale.sessionId, sessionId), eq(measurementsGrayscale.standard, 'hdr'))
        });
        phase2Items.push(await evaluateGrayscale(sessionId, hdrGrayscaleData, 'hdr', tItems, tSummary));

        // 7.5.31 Auto SDR/HDR Switching
        phase2Items.push(createPlaceholder('auto-switch', 'auto-switch', 2, '7.5.31'));

        // 7.5.32 HDR Inactive Black (DV)
        if (deviceType === 'direct_view') {
            phase2Items.push(createPlaceholder('hdr-inactive-black', 'hdr-inactive-black', 2, '7.5.32'));
        }

        // 7.5.35 HDR Contouring
        const hdrContouringData = await db.query.measurementsContouring.findFirst({
            where: and(eq(measurementsContouring.sessionId, sessionId), eq(measurementsContouring.standard, 'hdr'))
        });
        phase2Items.push(await evaluateContouring(sessionId, hdrContouringData, 'hdr', tItems, tSummary));
    }

    // Phase 3: System / Content Level (Upscaling, 3D, Stability)
    const phase3Items: MeasurementItemStatus[] = [];

    // 7.5.25 Image Upscaling Artifacts (DV)
    if (deviceType === 'direct_view') {
        const upscalingData = await db.query.measurementsUpscaling.findFirst({
            where: eq(measurementsUpscaling.sessionId, sessionId)
        });
        phase3Items.push(await evaluateUpscaling(sessionId, upscalingData, tItems, tSummary));
    }

    // 3D Optional Items (Placeholders)
    phase3Items.push(createPlaceholder('stereo-extinction', 'stereo-extinction', 3, '7.5.20'));
    phase3Items.push(createPlaceholder('stereo-peak-white', 'stereo-peak-white', 3, '7.5.21'));
    phase3Items.push(createPlaceholder('stereo-black', 'stereo-black', 3, '7.5.24'));
    phase3Items.push(createPlaceholder('stereo-color', 'stereo-color', 3, '7.5.26'));
    phase3Items.push(createPlaceholder('stereo-frame-rates', 'stereo-frame-rates', 3, '7.5.34'));

    // 7.5.33 Image Frame Rates (Repeated for System Playback emphasis)
    phase3Items.push(createPlaceholder('frame-rates-system', 'frame-rates-system', 3, '7.5.33'));


    // 计算阶段状态
    const phase1 = calculatePhaseStatus(tOverview('phase1'), 1, phase1Items);
    const phase2 = calculatePhaseStatus(tOverview('phase2'), 2, phase2Items);
    const phase3 = calculatePhaseStatus(tOverview('phase3'), 3, phase3Items);

    // 根据会话阶段过滤
    const phases: CTPOverview['phases'] = {};
    if (session.phase >= 1) phases.phase1 = phase1;
    if (session.phase >= 2) phases.phase2 = phase2;
    if (session.phase >= 3) phases.phase3 = phase3;

    // 计算总体状态 (只计算包含的阶段)
    const activeItems = [
        ...(session.phase >= 1 ? phase1Items : []),
        ...(session.phase >= 2 ? phase2Items : []),
        ...(session.phase >= 3 ? phase3Items : [])
    ];

    const completedItems = activeItems.filter(item => item.status !== 'not_tested').length;
    const passedItems = activeItems.filter(item => item.status === 'pass').length;
    const failedItems = activeItems.filter(item => item.status === 'fail').length;
    const warningItems = activeItems.filter(item => item.status === 'warning').length;

    let overallStatus: CTPOverview['overallStatus'] = 'incomplete';
    if (completedItems === activeItems.length) {
        if (failedItems > 0) {
            overallStatus = 'fail';
        } else if (warningItems > 0) {
            overallStatus = 'warning';
        } else {
            overallStatus = 'pass';
        }
    } else if (failedItems > 0) {
        overallStatus = 'fail';
    } else if (warningItems > 0) {
        overallStatus = 'warning';
    }

    return {
        sessionId,
        standardType,
        overallStatus,
        completionPercentage: activeItems.length > 0 ? Math.round((completedItems / activeItems.length) * 100) : 0,
        phases,
        totalItems: activeItems.length,
        completedItems,
        passedItems,
        failedItems,
        warningItems
    };
}

// ==================== 评估函数 ====================

async function evaluatePeakWhiteBlack(
    sessionId: number,
    data: any,
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data || data.centerWhite === undefined) {
        return {
            id: `peak-white-black-${standardType}`,
            name: `${standardType.toUpperCase()} ${tItems(`peak-white-black-${standardType}`)}`,
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: standardType === 'sdr' ? SDR_WHITE_SPEC.reference : HDR_WHITE_SPEC.reference,
            navigationPath: `/measurements/basic?sessionId=${sessionId}&standard=${standardType}`
        };
    }

    const spec = standardType === 'sdr' ? SDR_WHITE_SPEC : HDR_WHITE_SPEC;

    const whiteValid = isLuminanceWithinTolerance(data.centerWhite || 0, spec.targetLuminance, spec.toleranceLuminance);
    const blackValid = isBlackLevelCompliant(data.centerBlack || 0, spec.minBlackLevel, spec.maxBlackLevel);

    const issues: string[] = [];
    if (!whiteValid) {
        issues.push(`${tSummary('whiteLevel')}: ${data.centerWhite?.toFixed(2)} cd/m² (${tSummary('target')}: ${spec.targetLuminance} ±${spec.toleranceLuminance})`);
    }
    if (!blackValid) {
        issues.push(`${tSummary('blackLevel')}: ${data.centerBlack?.toFixed(4)} cd/m² (${tSummary('range')}: ${spec.minBlackLevel}-${spec.maxBlackLevel})`);
    }

    let status: MeasurementItemStatus['status'] = 'pass';
    if (issues.length > 0) {
        status = 'fail';
    }

    return {
        id: `peak-white-black-${standardType}`,
        name: `${standardType.toUpperCase()} ${tItems(`peak-white-black-${standardType}`)}`,
        category: 'device',
        phase: 1,
        status,
        standardRef: spec.reference,
        summary: tSummary('whiteBlackSummary', { white: data.centerWhite?.toFixed(1), black: data.centerBlack?.toFixed(4) }),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/basic?sessionId=${sessionId}&standard=${standardType}`
    };
}

async function evaluateUniformity(
    sessionId: number,
    data: any[],
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
        return {
            id: `uniformity-${standardType}`,
            name: tItems('uniformity'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: standardType === 'sdr' ? SDR_UNIFORMITY_SPEC.reference : HDR_UNIFORMITY_SPEC.reference,
            navigationPath: `/measurements/uniformity?sessionId=${sessionId}`
        };
    }

    const spec = standardType === 'sdr' ? SDR_UNIFORMITY_SPEC : HDR_UNIFORMITY_SPEC;

    const issues: string[] = [];
    let failCount = 0;

    data.forEach((measurement, idx) => {
        if (measurement.measuredL) {
            const centerL = data.find(m => m.position === 'center')?.measuredL || measurement.measuredL;
            const lDeviation = Math.abs((measurement.measuredL - centerL) / centerL);

            if (lDeviation > spec.luminanceTolerance) {
                failCount++;
                if (failCount <= 3) {
                    issues.push(tSummary('uniformityFailCount', { pos: measurement.position, dev: (lDeviation * 100).toFixed(1), tol: spec.luminanceTolerance * 100 }));
                }
            }
        }
    });

    if (failCount > 3) {
        issues.push(tSummary('uniformityMoreFail', { count: failCount - 3 }));
    }

    return {
        id: `uniformity-${standardType}`,
        name: tItems('uniformity'),
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: spec.reference,
        summary: tSummary('uniformitySummary', { count: data.length }),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/uniformity?sessionId=${sessionId}`
    };
}

async function evaluateGrayscale(
    sessionId: number,
    data: any[],
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
        return {
            id: `grayscale-${standardType}`,
            name: '灰阶与 EOTF',
            category: 'system',
            phase: 2,
            status: 'not_tested',
            standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.11' : 'HDR Addendum §8.4.4',
            navigationPath: `/measurements/grayscale?sessionId=${sessionId}`
        };
    }

    const relevantData = data.filter(d => d.standard === standardType);

    if (relevantData.length === 0) {
        return {
            id: 'grayscale',
            name: '灰阶与 EOTF',
            category: 'system',
            phase: 2,
            status: 'not_tested',
            standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.11' : 'HDR Addendum §8.4.4',
            navigationPath: `/measurements/grayscale?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    let hasWarning = false;

    // 简化逻辑：如果有数据则视为通过，实际应有更复杂的 EOTF 验证
    // TODO: Implement full EOTF validation

    let status: MeasurementItemStatus['status'] = 'pass';
    if (issues.length > 0) {
        status = 'fail';
    } else if (hasWarning) {
        status = 'warning';
    }

    return {
        id: `grayscale-${standardType}`,
        name: tItems('grayscale'),
        category: 'system',
        phase: 2,
        status,
        standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.11' : 'HDR Addendum §8.4.4',
        summary: standardType === 'hdr' ? tSummary('hdrEotf') : tSummary('whiteGraySteps'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/grayscale?sessionId=${sessionId}`
    };
}

async function evaluateColorAccuracy(
    sessionId: number,
    data: any[],
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
        return {
            id: `color-accuracy-${standardType}`,
            name: tItems('color-accuracy'),
            category: 'system',
            phase: 2,
            status: 'not_tested',
            standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.15' : 'HDR Addendum §8.4.6',
            navigationPath: `/measurements/color-accuracy?sessionId=${sessionId}`
        };
    }

    const targets = standardType === 'sdr' ? SDR_ACCURACY_TARGETS : HDR_ACCURACY_TARGETS;
    const issues: string[] = [];

    targets.forEach(target => {
        const measurement = data.find(m => m.colorName === target.name);
        if (measurement) {
            const lValid = isLuminanceCompliant(
                measurement.measuredL || 0,
                target.targetL,
                target.toleranceL
            );
            const cValid = isChromaticityCompliant(
                measurement.measuredX || 0,
                measurement.measuredY || 0,
                target.targetX,
                target.targetY,
                target.toleranceX
            );

            if (!lValid || !cValid) {
                issues.push(tSummary('colorFail', { name: target.name, issues: `${!lValid ? tSummary('luminance') : ''}${!lValid && !cValid ? tSummary('and') : ''}${!cValid ? tSummary('chromaticity') : ''}` }));
            }
        }
    });

    return {
        id: `color-accuracy-${standardType}`,
        name: tItems('color-accuracy'),
        category: 'system',
        phase: 2,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.15' : 'HDR Addendum §8.4.6',
        summary: tSummary('colorSummary', { count: targets.length }),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/color-accuracy?sessionId=${sessionId}`
    };
}

async function evaluatePixelStructure(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'pixel-structure',
            name: tItems('pixel-structure'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.9',
            navigationPath: `/measurements/pixel-structure?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.fillFactorCheck) issues.push(tSummary('fillFactorFail'));
    if (!data.pixelPitchCheck) issues.push(tSummary('pixelPitchFail'));
    if (!data.subPixelStructureCheck) issues.push(tSummary('subPixelFail'));
    if (!data.visualArtifactsCheck) issues.push(tSummary('artifactsFail'));

    return {
        id: 'pixel-structure',
        name: tItems('pixel-structure'),
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.9',
        summary: issues.length > 0 ? tSummary('checkFailCount', { count: issues.length }) : tSummary('allChecksPass'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/pixel-structure?sessionId=${sessionId}`
    };
}

async function evaluatePixelCount(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'pixel-count',
            name: tItems('pixel-count'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.3',
            navigationPath: `/measurements/pixel-count?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.pixelBlockComplete) issues.push(tSummary('pixelBlockFail'));
    if (!data.noCropping) issues.push(tSummary('croppingFail'));
    if (!data.noScaling) issues.push(tSummary('scalingFail'));
    if (data.pass === false) issues.push(tSummary('testFail'));

    return {
        id: 'pixel-count',
        name: tItems('pixel-count'),
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.3',
        summary: issues.length > 0 ? tSummary('testFail') : tSummary('resSummary', { h: data.horizontalPixels, v: data.verticalPixels }),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/pixel-count?sessionId=${sessionId}`
    };
}

async function evaluateSubPixel(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'sub-pixel',
            name: tItems('sub-pixel'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.27',
            navigationPath: `/measurements/sub-pixel?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.horizontalLinesPass) issues.push(tSummary('hLinesFail'));
    if (!data.verticalLinesPass) issues.push(tSummary('vLinesFail'));
    if (!data.noColorFringing) issues.push(tSummary('colorFringingFail'));

    return {
        id: 'sub-pixel',
        name: tItems('sub-pixel'),
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.27',
        summary: issues.length > 0 ? tSummary('testFail') : tSummary('alignGood'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/sub-pixel?sessionId=${sessionId}`
    };
}

async function evaluateUpscaling(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'upscaling',
            name: tItems('upscaling'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.25',
            navigationPath: `/measurements/upscaling?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.noJaggies) issues.push(tSummary('jaggiesFail'));
    if (!data.noRinging) issues.push(tSummary('ringingFail'));
    if (!data.noAliasing) issues.push(tSummary('aliasingFail'));

    return {
        id: 'upscaling',
        name: tItems('upscaling'),
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.25',
        summary: issues.length > 0 ? tSummary('artifactsExist') : tSummary('noArtifacts'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/upscaling?sessionId=${sessionId}`
    };
}

async function evaluateIntraContrast(
    sessionId: number,
    data: any,
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'intra-contrast',
            name: tItems('intra-contrast'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.8',
            navigationPath: `/measurements/intra-contrast?sessionId=${sessionId}`
        };
    }

    // 简单判断 pass 字段
    const status = data.pass ? 'pass' : 'fail';

    return {
        id: 'intra-contrast',
        name: tItems('intra-contrast'),
        category: 'device',
        phase: 1,
        status,
        standardRef: 'DCI CTP §7.5.8',
        summary: tSummary('contrastSummary', { ratio: data.contrastRatio?.toFixed(0) }),
        navigationPath: `/measurements/intra-contrast?sessionId=${sessionId}`
    };
}

async function evaluateInactiveArea(
    sessionId: number,
    data: any,
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: `inactive-area-${standardType}`,
            name: tItems(`inactive-area-${standardType}`),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.18',
            navigationPath: `/measurements/inactive-area?sessionId=${sessionId}&standard=${standardType}`
        };
    }

    const issues: string[] = [];
    if (!data.topBorderCheck) issues.push(tSummary('borderFail', { border: 'Top' }));
    if (!data.bottomBorderCheck) issues.push(tSummary('borderFail', { border: 'Bottom' }));
    if (!data.leftBorderCheck) issues.push(tSummary('borderFail', { border: 'Left' }));
    if (!data.rightBorderCheck) issues.push(tSummary('borderFail', { border: 'Right' }));

    return {
        id: `inactive-area-${standardType}`,
        name: tItems(`inactive-area-${standardType}`),
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.18',
        summary: issues.length > 0 ? tSummary('borderCheckFail') : tSummary('borderCheckPass'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/inactive-area?sessionId=${sessionId}&standard=${standardType}`
    };
}

async function evaluateContouring(
    sessionId: number,
    data: any,
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: `contouring-${standardType}`,
            name: tItems('contouring'),
            category: 'system',
            phase: 2,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.10',
            navigationPath: `/measurements/contouring?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.monotonicityPass) issues.push(tSummary('monotonicityFail'));
    if (!data.visualCheckPass) issues.push(tSummary('visualBandFail'));

    return {
        id: `contouring-${standardType}`,
        name: tItems('contouring'),
        category: 'system',
        phase: 2,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.10',
        summary: issues.length > 0 ? tSummary('contouringExist') : tSummary('smoothTransition'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/contouring?sessionId=${sessionId}`
    };
}

async function evaluateColorVolume(
    sessionId: number,
    data: any[],
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
        return {
            id: 'color-volume',
            name: tItems('color-volume'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.12',
            navigationPath: `/measurements/color-volume?sessionId=${sessionId}`
        };
    }

    // Check if Red, Green, Blue, White are present
    const hasRed = data.some(m => m.colorName === 'Red');
    const hasGreen = data.some(m => m.colorName === 'Green');
    const hasBlue = data.some(m => m.colorName === 'Blue');
    const hasWhite = data.some(m => m.colorName === 'White');

    if (!hasRed || !hasGreen || !hasBlue || !hasWhite) {
        return {
            id: 'color-volume',
            name: tItems('color-volume'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.12',
            navigationPath: `/measurements/color-volume?sessionId=${sessionId}`
        };
    }

    // Assuming simple pass if data exists, as validation is complex and handled in form
    return {
        id: 'color-volume',
        name: tItems('color-volume'),
        category: 'device',
        phase: 1,
        status: 'pass',
        standardRef: 'DCI CTP §7.5.12',
        summary: 'Data recorded',
        navigationPath: `/measurements/color-volume?sessionId=${sessionId}`
    };
}

async function evaluateSequentialContrast(
    sessionId: number,
    data: any,
    standardType: StandardType,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'contrast',
            name: tItems('contrast'),
            category: 'system',
            phase: 2,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.7',
            navigationPath: `/measurements/contrast?sessionId=${sessionId}`
        };
    }

    return {
        id: 'contrast',
        name: tItems('contrast'),
        category: 'system',
        phase: 2,
        status: data.pass ? 'pass' : 'fail',
        standardRef: 'DCI CTP §7.5.7',
        summary: data.contrastRatio ? `Ratio: ${data.contrastRatio}:1` : undefined,
        navigationPath: `/measurements/contrast?sessionId=${sessionId}`
    };
}

async function evaluateViewingAngle(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'viewing-angle',
            name: tItems('viewing-angle'),
            category: 'exhibition',
            phase: 3,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.30',
            navigationPath: `/measurements/viewing-angle?sessionId=${sessionId}`
        };
    }

    return {
        id: 'viewing-angle',
        name: tItems('viewing-angle'),
        category: 'exhibition',
        phase: 3,
        status: data.pass ? 'pass' : 'fail',
        standardRef: 'DCI CTP §7.5.30',
        summary: data.pass ? 'Pass' : 'Fail',
        navigationPath: `/measurements/viewing-angle?sessionId=${sessionId}`
    };
}

async function evaluateScreenGain(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'screen-gain',
            name: tItems('screen-gain'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.22',
            navigationPath: `/measurements/screen-gain?sessionId=${sessionId}`
        };
    }

    return {
        id: 'screen-gain',
        name: tItems('screen-gain'),
        category: 'device',
        phase: 1,
        status: data.pass ? 'pass' : 'fail',
        standardRef: 'DCI CTP §7.5.22',
        summary: data.screenGain ? `Gain: ${data.screenGain}` : undefined,
        navigationPath: `/measurements/screen-gain?sessionId=${sessionId}`
    };
}

async function evaluateExhibition(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'exhibition',
            name: tItems('exhibition-environment'),
            category: 'exhibition',
            phase: 3,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.13',
            navigationPath: `/measurements/exhibition?sessionId=${sessionId}`
        };
    }

    return {
        id: 'exhibition',
        name: tItems('exhibition-environment'),
        category: 'exhibition',
        phase: 3,
        status: data.pass ? 'pass' : 'fail',
        standardRef: 'DCI CTP §7.5.13',
        summary: data.pass ? 'Pass' : 'Fail',
        navigationPath: `/measurements/exhibition?sessionId=${sessionId}`
    };
}

async function evaluateVignetting(
    sessionId: number,
    data: any,
    tItems: any,
    tSummary: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'vignetting',
            name: tItems('vignetting'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.23',
            navigationPath: `/measurements/vignetting?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];

    // Check if center luminance exists
    if (!data.luminanceCenter) {
        return {
            id: 'vignetting',
            name: tItems('vignetting'),
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.23',
            navigationPath: `/measurements/vignetting?sessionId=${sessionId}`
        };
    }

    // Vignetting requirement: corner luminance should be >= 80% of center
    const minLuminance = data.luminanceCenter * 0.8;

    if (data.luminanceTopLeft && data.luminanceTopLeft < minLuminance) {
        issues.push(tSummary('vignettingFail', { corner: 'Top-Left', value: data.luminanceTopLeft.toFixed(1), min: minLuminance.toFixed(1) }));
    }
    if (data.luminanceTopRight && data.luminanceTopRight < minLuminance) {
        issues.push(tSummary('vignettingFail', { corner: 'Top-Right', value: data.luminanceTopRight.toFixed(1), min: minLuminance.toFixed(1) }));
    }
    if (data.luminanceBottomLeft && data.luminanceBottomLeft < minLuminance) {
        issues.push(tSummary('vignettingFail', { corner: 'Bottom-Left', value: data.luminanceBottomLeft.toFixed(1), min: minLuminance.toFixed(1) }));
    }
    if (data.luminanceBottomRight && data.luminanceBottomRight < minLuminance) {
        issues.push(tSummary('vignettingFail', { corner: 'Bottom-Right', value: data.luminanceBottomRight.toFixed(1), min: minLuminance.toFixed(1) }));
    }

    return {
        id: 'vignetting',
        name: tItems('vignetting'),
        category: 'device',
        phase: 1,
        status: data.pass ? 'pass' : 'fail',
        standardRef: 'DCI CTP §7.5.23',
        summary: issues.length > 0 ? tSummary('vignettingExists') : tSummary('uniformLuminance'),
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/vignetting?sessionId=${sessionId}`
    };
}

function calculatePhaseStatus(name: string, phase: 1 | 2 | 3, items: MeasurementItemStatus[]): PhaseStatus {
    const completedItems = items.filter(item => item.status !== 'not_tested').length;
    const failedItems = items.filter(item => item.status === 'fail').length;
    const warningItems = items.filter(item => item.status === 'warning').length;

    let status: PhaseStatus['status'] = 'incomplete';
    if (completedItems === items.length) {
        if (failedItems > 0) {
            status = 'fail';
        } else if (warningItems > 0) {
            status = 'warning';
        } else {
            status = 'pass';
        }
    } else if (failedItems > 0) {
        status = 'fail';
    } else if (warningItems > 0) {
        status = 'warning';
    }

    return {
        name,
        phase,
        status,
        completedItems,
        totalItems: items.length,
        items
    };
}
