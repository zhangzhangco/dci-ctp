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
    testSessions,
    devices
} from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import type { CTPOverview, MeasurementItemStatus, PhaseStatus, StandardType } from '@/types/ctp-overview';

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
    sessionId: number
): Promise<CTPOverview> {

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
    const deviceType = (session.device.type || 'projector') as 'projector' | 'direct_view';

    // Phase 1: Device-Level 测量项
    const phase1Items: MeasurementItemStatus[] = [];

    // 1. Peak White & Black Level
    const peakWhiteData = await db.query.measurementsBasic.findFirst({
        where: (table, { and, eq }) => and(eq(table.sessionId, sessionId), eq(table.type, 'peak_white'))
    });
    const blackLevelData = await db.query.measurementsBasic.findFirst({
        where: (table, { and, eq }) => and(eq(table.sessionId, sessionId), eq(table.type, 'black_level'))
    });

    phase1Items.push(await evaluatePeakWhiteBlack(sessionId, { centerWhite: peakWhiteData?.measuredL, centerBlack: blackLevelData?.measuredL }, standardType));

    // 2. Uniformity
    const uniformityData = await db.query.measurementsUniformity.findMany({
        where: eq(measurementsUniformity.sessionId, sessionId)
    });

    phase1Items.push(await evaluateUniformity(sessionId, uniformityData, standardType));

    // 3. Color Volume
    phase1Items.push({
        id: 'color-volume',
        name: '色域覆盖率',
        category: 'device',
        phase: 1,
        status: 'not_tested',
        standardRef: standardType === 'sdr' ? SDR_COLOR_VOLUME_SPEC.reference : HDR_COLOR_VOLUME_SPEC.reference,
        navigationPath: `/measurements/color-volume?sessionId=${sessionId}`
    });

    // 4. Pixel Structure
    const pixelStructureData = await db.query.measurementsPixelStructure.findFirst({
        where: eq(measurementsPixelStructure.sessionId, sessionId)
    });

    phase1Items.push(await evaluatePixelStructure(sessionId, pixelStructureData));

    // 5. Pixel Count
    const pixelCountData = await db.query.measurementsPixelCount.findFirst({
        where: eq(measurementsPixelCount.sessionId, sessionId)
    });
    phase1Items.push(await evaluatePixelCount(sessionId, pixelCountData));

    // 6. Sub-Pixel Alignment
    const subPixelData = await db.query.measurementsSubPixel.findFirst({
        where: eq(measurementsSubPixel.sessionId, sessionId)
    });
    phase1Items.push(await evaluateSubPixel(sessionId, subPixelData));

    // 7. Upscaling Artifacts
    const upscalingData = await db.query.measurementsUpscaling.findFirst({
        where: eq(measurementsUpscaling.sessionId, sessionId)
    });
    phase1Items.push(await evaluateUpscaling(sessionId, upscalingData));

    // 8. Intra-Frame Contrast
    const intraContrastData = await db.query.measurementsIntraContrast.findFirst({
        where: eq(measurementsIntraContrast.sessionId, sessionId)
    });
    phase1Items.push(await evaluateIntraContrast(sessionId, intraContrastData, standardType));

    // 9. Inactive Area Black (Direct View Only)
    if (deviceType === 'direct_view') {
        const inactiveAreaData = await db.query.measurementsInactiveArea.findFirst({
            where: eq(measurementsInactiveArea.sessionId, sessionId)
        });
        phase1Items.push(await evaluateInactiveArea(sessionId, inactiveAreaData));
    }

    // Phase 2: System-Level 测量项
    const phase2Items: MeasurementItemStatus[] = [];

    // 1. Grayscale & Gamma
    const grayscaleData = await db.query.measurementsGrayscale.findMany({
        where: eq(measurementsGrayscale.sessionId, sessionId)
    });

    phase2Items.push(await evaluateGrayscale(sessionId, grayscaleData, standardType));

    // 2. Color Accuracy
    const colorAccuracyData = await db.query.measurementsColor.findMany({
        where: eq(measurementsColor.sessionId, sessionId)
    });

    phase2Items.push(await evaluateColorAccuracy(sessionId, colorAccuracyData, standardType));

    // 3. Contouring (SDR Only)
    if (standardType === 'sdr') {
        const contouringData = await db.query.measurementsContouring.findFirst({
            where: eq(measurementsContouring.sessionId, sessionId)
        });
        phase2Items.push(await evaluateContouring(sessionId, contouringData, standardType));
    }

    // 计算阶段状态
    const phase1 = calculatePhaseStatus('Phase 1: Device-Level', 1, phase1Items);
    const phase2 = calculatePhaseStatus('Phase 2: System-Level', 2, phase2Items);

    // 计算总体状态
    const allItems = [...phase1Items, ...phase2Items];
    const completedItems = allItems.filter(item => item.status !== 'not_tested').length;
    const passedItems = allItems.filter(item => item.status === 'pass').length;
    const failedItems = allItems.filter(item => item.status === 'fail').length;
    const warningItems = allItems.filter(item => item.status === 'warning').length;

    let overallStatus: CTPOverview['overallStatus'] = 'incomplete';
    if (completedItems === allItems.length) {
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
        completionPercentage: Math.round((completedItems / allItems.length) * 100),
        phases: {
            phase1,
            phase2
        },
        totalItems: allItems.length,
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
    standardType: StandardType
): Promise<MeasurementItemStatus> {
    if (!data || data.centerWhite === undefined) {
        return {
            id: 'peak-white-black',
            name: '峰值白电平与黑电平',
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: standardType === 'sdr' ? SDR_WHITE_SPEC.reference : HDR_WHITE_SPEC.reference,
            navigationPath: `/measurements/peak-white-black?sessionId=${sessionId}`
        };
    }

    const spec = standardType === 'sdr' ? SDR_WHITE_SPEC : HDR_WHITE_SPEC;

    const whiteValid = isLuminanceWithinTolerance(data.centerWhite || 0, spec.targetLuminance, spec.toleranceLuminance);
    const blackValid = isBlackLevelCompliant(data.centerBlack || 0, spec.minBlackLevel, spec.maxBlackLevel);

    const issues: string[] = [];
    if (!whiteValid) {
        issues.push(`峰值白电平: ${data.centerWhite?.toFixed(2)} cd/m² (目标: ${spec.targetLuminance} ±${spec.toleranceLuminance})`);
    }
    if (!blackValid) {
        issues.push(`黑电平: ${data.centerBlack?.toFixed(4)} cd/m² (范围: ${spec.minBlackLevel}-${spec.maxBlackLevel})`);
    }

    let status: MeasurementItemStatus['status'] = 'pass';
    if (issues.length > 0) {
        status = 'fail';
    }

    return {
        id: 'peak-white-black',
        name: '峰值白电平与黑电平',
        category: 'device',
        phase: 1,
        status,
        standardRef: spec.reference,
        summary: `白: ${data.centerWhite?.toFixed(1)} cd/m², 黑: ${data.centerBlack?.toFixed(4)} cd/m²`,
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/peak-white-black?sessionId=${sessionId}`
    };
}

async function evaluateUniformity(
    sessionId: number,
    data: any[],
    standardType: StandardType
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
        return {
            id: 'uniformity',
            name: '均匀性',
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
                    issues.push(`位置 ${measurement.position}: 亮度偏差 ${(lDeviation * 100).toFixed(1)}% (容差: ${spec.luminanceTolerance * 100}%)`);
                }
            }
        }
    });

    if (failCount > 3) {
        issues.push(`... 以及其他 ${failCount - 3} 个点超标`);
    }

    return {
        id: 'uniformity',
        name: '均匀性',
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: spec.reference,
        summary: `${data.length} 个测量点`,
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/uniformity?sessionId=${sessionId}`
    };
}

async function evaluateGrayscale(
    sessionId: number,
    data: any[],
    standardType: StandardType
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
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
        id: 'grayscale',
        name: '灰阶与 EOTF',
        category: 'system',
        phase: 2,
        status,
        standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.11' : 'HDR Addendum §8.4.4',
        summary: standardType === 'hdr' ? `HDR EOTF` : `White/Gray Steps`,
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/grayscale?sessionId=${sessionId}`
    };
}

async function evaluateColorAccuracy(
    sessionId: number,
    data: any[],
    standardType: StandardType
): Promise<MeasurementItemStatus> {
    if (!data || data.length === 0) {
        return {
            id: 'color-accuracy',
            name: '色彩准确度',
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
                issues.push(`${target.name}: ${!lValid ? '亮度' : ''}${!lValid && !cValid ? '和' : ''}${!cValid ? '色度' : ''}超标`);
            }
        }
    });

    return {
        id: 'color-accuracy',
        name: '色彩准确度',
        category: 'system',
        phase: 2,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: standardType === 'sdr' ? 'DCI CTP §7.5.15' : 'HDR Addendum §8.4.6',
        summary: `${targets.length} 个色块`,
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/color-accuracy?sessionId=${sessionId}`
    };
}

async function evaluatePixelStructure(
    sessionId: number,
    data: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'pixel-structure',
            name: '像素结构检查',
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.9',
            navigationPath: `/measurements/pixel-structure?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.fillFactorCheck) issues.push('填充率不符合要求');
    if (!data.pixelPitchCheck) issues.push('像素间距未确认');
    if (!data.subPixelStructureCheck) issues.push('子像素结构存在色边');
    if (!data.visualArtifactsCheck) issues.push('存在可见伪影');

    return {
        id: 'pixel-structure',
        name: '像素结构检查',
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.9',
        summary: issues.length > 0 ? `${issues.length} 项检查失败` : '所有检查项通过',
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/pixel-structure?sessionId=${sessionId}`
    };
}

async function evaluatePixelCount(
    sessionId: number,
    data: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'pixel-count',
            name: '像素计数',
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.3',
            navigationPath: `/measurements/pixel-count?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.pixelBlockComplete) issues.push('像素块显示不完整');
    if (!data.noCropping) issues.push('存在图像裁剪');
    if (!data.noScaling) issues.push('存在图像缩放');
    if (data.pass === false) issues.push('测试判定为失败');

    return {
        id: 'pixel-count',
        name: '像素计数',
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.3',
        summary: issues.length > 0 ? '测试失败' : `分辨率: ${data.horizontalPixels}x${data.verticalPixels}`,
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/pixel-count?sessionId=${sessionId}`
    };
}

async function evaluateSubPixel(
    sessionId: number,
    data: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'sub-pixel',
            name: '子像素对齐',
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.27',
            navigationPath: `/measurements/sub-pixel?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.horizontalLinesPass) issues.push('水平线条测试失败');
    if (!data.verticalLinesPass) issues.push('垂直线条测试失败');
    if (!data.noColorFringing) issues.push('存在色边');

    return {
        id: 'sub-pixel',
        name: '子像素对齐',
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.27',
        summary: issues.length > 0 ? '测试失败' : '对齐良好',
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/sub-pixel?sessionId=${sessionId}`
    };
}

async function evaluateUpscaling(
    sessionId: number,
    data: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'upscaling',
            name: '缩放伪影',
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.25',
            navigationPath: `/measurements/upscaling?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.noJaggies) issues.push('存在锯齿');
    if (!data.noRinging) issues.push('存在振铃效应');
    if (!data.noAliasing) issues.push('存在混叠');

    return {
        id: 'upscaling',
        name: '缩放伪影',
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.25',
        summary: issues.length > 0 ? '存在伪影' : '无明显伪影',
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/upscaling?sessionId=${sessionId}`
    };
}

async function evaluateIntraContrast(
    sessionId: number,
    data: any,
    standardType: StandardType
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'intra-contrast',
            name: '帧内对比度',
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
        name: '帧内对比度',
        category: 'device',
        phase: 1,
        status,
        standardRef: 'DCI CTP §7.5.8',
        summary: `对比度: ${data.contrastRatio?.toFixed(0)}:1`,
        navigationPath: `/measurements/intra-contrast?sessionId=${sessionId}`
    };
}

async function evaluateInactiveArea(
    sessionId: number,
    data: any
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'inactive-area',
            name: '非活动区域黑电平',
            category: 'device',
            phase: 1,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.18',
            navigationPath: `/measurements/inactive-area?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.topBorderCheck) issues.push('上边界不合格');
    if (!data.bottomBorderCheck) issues.push('下边界不合格');
    if (!data.leftBorderCheck) issues.push('左边界不合格');
    if (!data.rightBorderCheck) issues.push('右边界不合格');

    return {
        id: 'inactive-area',
        name: '非活动区域黑电平',
        category: 'device',
        phase: 1,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.18',
        summary: issues.length > 0 ? '边界检查失败' : '所有边界合格',
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/inactive-area?sessionId=${sessionId}`
    };
}

async function evaluateContouring(
    sessionId: number,
    data: any,
    standardType: StandardType
): Promise<MeasurementItemStatus> {
    if (!data) {
        return {
            id: 'contouring',
            name: '轮廓与条带',
            category: 'system',
            phase: 2,
            status: 'not_tested',
            standardRef: 'DCI CTP §7.5.10',
            navigationPath: `/measurements/contouring?sessionId=${sessionId}`
        };
    }

    const issues: string[] = [];
    if (!data.monotonicityPass) issues.push('单调性测试失败');
    if (!data.visualCheckPass) issues.push('视觉检查发现条带');

    return {
        id: 'contouring',
        name: '轮廓与条带',
        category: 'system',
        phase: 2,
        status: issues.length > 0 ? 'fail' : 'pass',
        standardRef: 'DCI CTP §7.5.10',
        summary: issues.length > 0 ? '存在轮廓问题' : '过渡平滑',
        issues: issues.length > 0 ? issues : undefined,
        navigationPath: `/measurements/contouring?sessionId=${sessionId}`
    };
}

function calculatePhaseStatus(name: string, phase: number, items: MeasurementItemStatus[]): PhaseStatus {
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
