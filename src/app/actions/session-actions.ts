'use server';

import { createTestSession, getAllSessions } from '@/domain/sessions';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/db';
import { measurementsBasic, measurementsUniformity, measurementsColor, measurementsGrayscale, measurementsExhibition, testSessions } from '@/db/schema';
import { eq, count, and } from 'drizzle-orm';
import {
    getBasicTestSpec,
    isLuminanceWithinTolerance,
    isChrominanceWithinTolerance,
    isBlackLevelCompliant
} from '@/domain/standards/ctpBasicSpec';
import {
    SDR_UNIFORMITY_SPEC,
    HDR_UNIFORMITY_SPEC,
    calculateLuminanceDeviation,
    calculateChromaticityDistance
} from '@/domain/standards/ctpUniformitySpec';
import {
    P3_COLOR_SPEC,
    HDR_P3_COLOR_SPEC,
    isColorCompliant
} from '@/domain/standards/ctpColorVolumeSpec';
import {
    WHITE_STEPS_SPEC,
    GRAY_STEPS_SPEC,
    HDR_EOTF_SPEC,
    calculatePercentageError,
    validateHDREOTF
} from '@/domain/standards/ctpGrayscaleSpec';
import {
    SDR_ACCURACY_TARGETS,
    HDR_ACCURACY_TARGETS,
    isLuminanceCompliant,
    isChromaticityCompliant
} from '@/domain/standards/ctpColorAccuracySpec';

const sessionSchema = z.object({
    deviceId: z.coerce.number().min(1, "Device is required"),
    phase: z.coerce.number().min(1).max(3),
    standard: z.enum(['sdr', 'hdr']),
    date: z.string().min(1, "Date is required"),
    operator: z.string().optional(),
    location: z.string().optional(),
    notes: z.string().optional(),
});

export async function getSessionsAction() {
    return await getAllSessions();
}

export async function getSession(id: number) {
    const sessions = await getAllSessions();
    return sessions.find(s => s.session.id === id);
}

export type TestStatus = 'pass' | 'fail' | 'incomplete' | 'none';

export async function getSessionStatusAction(sessionId: number): Promise<Record<string, TestStatus>> {
    const sessionResult = await getSession(sessionId);
    if (!sessionResult) return {};

    const { session } = sessionResult;
    const standard = session.standard as 'sdr' | 'hdr';

    const status: Record<string, TestStatus> = {
        'peak-white-black': 'none',
        'uniformity': 'none',
        'color-volume': 'none',
        'grayscale': 'none',
        'color-accuracy': 'none',
        'pixel-structure': 'none',
        'exhibition-environment': 'none',
    };

    // 1. Basic (Peak White & Black)
    const basicMeasurements = await db.select()
        .from(measurementsBasic)
        .where(eq(measurementsBasic.sessionId, sessionId));

    const peakWhiteType = standard === 'sdr' ? 'sdr_peak_white' : 'hdr_peak_white';
    const blackLevelType = standard === 'sdr' ? 'sdr_black_level' : 'hdr_black_level';

    const whiteM = basicMeasurements.find(m => m.type === peakWhiteType);
    const blackM = basicMeasurements.find(m => m.type === blackLevelType);

    if (whiteM || blackM) {
        let passed = true;
        const spec = getBasicTestSpec(standard === 'sdr' ? 'sdr-white' : 'hdr-white');

        if (whiteM) {
            const lValid = isLuminanceWithinTolerance(whiteM.measuredL || 0, spec.targetLuminance, spec.toleranceLuminance);
            const cValid = isChrominanceWithinTolerance(whiteM.measuredX || 0, whiteM.measuredY || 0, spec.targetX, spec.targetY, spec.toleranceChrominance);
            if (!lValid || !cValid) passed = false;
        } else {
            passed = false; // Missing white
        }

        if (blackM) {
            const bValid = isBlackLevelCompliant(blackM.measuredL || 0, spec.minBlackLevel, spec.maxBlackLevel);
            if (!bValid) passed = false;
        } else {
            passed = false; // Missing black
        }

        status['peak-white-black'] = passed ? 'pass' : 'fail';
    }

    // 2. Uniformity
    const uniformityMeasurements = await db.select()
        .from(measurementsUniformity)
        .where(and(eq(measurementsUniformity.sessionId, sessionId), eq(measurementsUniformity.standard, standard)));

    if (uniformityMeasurements.length > 0) {
        if (uniformityMeasurements.length < 9) {
            status['uniformity'] = 'incomplete';
        } else {
            const spec = standard === 'sdr' ? SDR_UNIFORMITY_SPEC : HDR_UNIFORMITY_SPEC;
            const center = uniformityMeasurements.find(m => m.position === 'Center');

            if (center) {
                let allPass = true;
                uniformityMeasurements.forEach(m => {
                    if (m.position === 'Center') return;
                    const devL = calculateLuminanceDeviation(center.measuredL || 0, m.measuredL || 0);
                    const distC = calculateChromaticityDistance(center.measuredX || 0, center.measuredY || 0, m.measuredX || 0, m.measuredY || 0);

                    if (Math.abs(devL) > (spec.luminanceTolerance * 100) || distC > spec.chromaticityTolerance) {
                        allPass = false;
                    }
                });
                status['uniformity'] = allPass ? 'pass' : 'fail';
            } else {
                status['uniformity'] = 'fail'; // No center?
            }
        }
    }

    // 3. Color Volume
    const colorMeasurements = await db.select()
        .from(measurementsColor)
        .where(and(
            eq(measurementsColor.sessionId, sessionId),
            eq(measurementsColor.standard, standard)
        ));

    const volumeMeasurements = colorMeasurements.filter(m => m.type === 'primary' || m.type === 'white_point');

    if (volumeMeasurements.length > 0) {
        const required = ['Red', 'Green', 'Blue', 'White'];
        const hasAll = required.every(c => volumeMeasurements.some(m => m.colorName === c));

        if (!hasAll) {
            status['color-volume'] = 'incomplete';
        } else {
            const spec = standard === 'sdr' ? P3_COLOR_SPEC : HDR_P3_COLOR_SPEC;
            let allPass = true;
            volumeMeasurements.forEach(m => {
                const target = spec[m.colorName];
                if (target) {
                    if (!isColorCompliant(m.measuredX || 0, m.measuredY || 0, target)) {
                        allPass = false;
                    }
                }
            });
            status['color-volume'] = allPass ? 'pass' : 'fail';
        }
    }

    // 4. Grayscale
    const grayscaleMeasurements = await db.select()
        .from(measurementsGrayscale)
        .where(and(
            eq(measurementsGrayscale.sessionId, sessionId),
            eq(measurementsGrayscale.standard, standard)
        ));

    if (grayscaleMeasurements.length > 0) {
        if (standard === 'sdr') {
            // Check if we have enough points (11 for white steps or 21 for gray steps)
            // For simplicity, let's say > 10 is enough to judge
            if (grayscaleMeasurements.length < 10) {
                status['grayscale'] = 'incomplete';
            } else {
                let allPass = true;
                grayscaleMeasurements.forEach(m => {
                    // We need to know which spec to compare against.
                    // The table stores stepIndex.
                    // Assuming White Steps (0-10) or Gray Steps (0-20).
                    // Let's try to match with WHITE_STEPS_SPEC first
                    const step = WHITE_STEPS_SPEC[m.stepIndex];
                    if (step) {
                        const error = calculatePercentageError(m.measuredL || 0, step.nominalLuminance);
                        if (Math.abs(error) > (step.tolerance * 100)) allPass = false;
                    }
                });
                status['grayscale'] = allPass ? 'pass' : 'fail';
            }
        } else {
            // HDR
            if (grayscaleMeasurements.length < 10) {
                status['grayscale'] = 'incomplete';
            } else {
                let allPass = true;
                grayscaleMeasurements.forEach(m => {
                    // HDR EOTF
                    const step = HDR_EOTF_SPEC[m.stepIndex];
                    if (step) {
                        const result = validateHDREOTF(m.measuredL || 0, step.nominalLuminance);
                        if (result === 'fail') allPass = false;
                    }
                });
                status['grayscale'] = allPass ? 'pass' : 'fail';
            }
        }
    }

    // 5. Color Accuracy
    const accuracyMeasurements = colorMeasurements.filter(m => m.type === 'macbeth');
    if (accuracyMeasurements.length > 0) {
        const targets = standard === 'sdr' ? SDR_ACCURACY_TARGETS : HDR_ACCURACY_TARGETS;
        if (accuracyMeasurements.length < targets.length) {
            status['color-accuracy'] = 'incomplete';
        } else {
            let allPass = true;
            accuracyMeasurements.forEach(m => {
                const target = targets.find(t => t.name === m.colorName);
                if (target) {
                    const lValid = isLuminanceCompliant(m.measuredL || 0, target.targetL, target.toleranceL);
                    const cValid = isChromaticityCompliant(m.measuredX || 0, m.measuredY || 0, target.targetX, target.targetY, target.toleranceX);
                    if (!lValid || !cValid) allPass = false;
                }
            });
            status['color-accuracy'] = allPass ? 'pass' : 'fail';
        }
    }

    // 6. Exhibition Environment
    const exhibitionMeasurements = await db.select()
        .from(measurementsExhibition)
        .where(eq(measurementsExhibition.sessionId, sessionId));

    if (exhibitionMeasurements.length > 0) {
        status['exhibition-environment'] = exhibitionMeasurements[0].pass ? 'pass' : 'fail';
    }

    return status;
}

export async function createSessionAction(formData: FormData) {
    const rawData = {
        deviceId: formData.get('deviceId'),
        phase: formData.get('phase'),
        standard: formData.get('standard') || 'sdr',
        date: formData.get('date'),
        operator: formData.get('operator') || undefined,
        location: formData.get('location') || undefined,
        notes: formData.get('notes') || undefined,
    };

    const validated = sessionSchema.safeParse(rawData);

    if (!validated.success) {
        return { success: false, errors: validated.error.flatten().fieldErrors };
    }

    await createTestSession(validated.data);
    revalidatePath('/sessions');
    return { success: true };
}

export async function clearSessionAction(sessionId: number) {
    try {
        // 删除所有测量数据
        await db.delete(measurementsBasic).where(eq(measurementsBasic.sessionId, sessionId));
        await db.delete(measurementsUniformity).where(eq(measurementsUniformity.sessionId, sessionId));
        await db.delete(measurementsColor).where(eq(measurementsColor.sessionId, sessionId));
        await db.delete(measurementsGrayscale).where(eq(measurementsGrayscale.sessionId, sessionId));
        await db.delete(measurementsExhibition).where(eq(measurementsExhibition.sessionId, sessionId));

        revalidatePath(`/sessions/${sessionId}`);
        return { success: true };
    } catch (error) {
        console.error('Failed to clear session:', error);
        return { success: false, error: 'Failed to clear session data' };
    }
}

export async function deleteSessionAction(sessionId: number) {
    try {
        // 1. Delete all measurements first
        await db.delete(measurementsBasic).where(eq(measurementsBasic.sessionId, sessionId));
        await db.delete(measurementsUniformity).where(eq(measurementsUniformity.sessionId, sessionId));
        await db.delete(measurementsColor).where(eq(measurementsColor.sessionId, sessionId));
        await db.delete(measurementsGrayscale).where(eq(measurementsGrayscale.sessionId, sessionId));
        await db.delete(measurementsExhibition).where(eq(measurementsExhibition.sessionId, sessionId));

        // 2. Delete the session itself
        await db.delete(testSessions).where(eq(testSessions.id, sessionId));

        revalidatePath('/sessions');
        return { success: true };
    } catch (error) {
        console.error('Failed to delete session:', error);
        return { success: false, error: 'Failed to delete session' };
    }
}

export async function clearAllSessionsAction() {
    try {
        // 1. Delete all measurements
        await db.delete(measurementsBasic);
        await db.delete(measurementsUniformity);
        await db.delete(measurementsColor);
        await db.delete(measurementsGrayscale);
        await db.delete(measurementsExhibition);

        // 2. Delete all sessions
        await db.delete(testSessions);

        revalidatePath('/sessions');
        return { success: true };
    } catch (error) {
        console.error('Failed to clear all sessions:', error);
        return { success: false, error: 'Failed to clear all sessions' };
    }
}
