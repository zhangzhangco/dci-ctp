'use server';

import { db } from '@/db';
import { measurementsIntraContrast } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { SDR_INTRA_CONTRAST_SPEC, validateIntraFrameContrast } from '@/domain/standards/ctpIntraContrastSpec';

export async function saveIntraContrastAction(data: {
    sessionId: number;
    standard: 'sdr' | 'hdr';
    whiteL: number; whiteR: number; whiteT: number; whiteB: number;
    blackL: number; blackR: number; blackT: number; blackB: number;
    notes?: string;
}) {
    try {
        // Calculate average contrast ratio if needed, or just validate
        // For now, simple validation based on specs
        const spec = SDR_INTRA_CONTRAST_SPEC; // TODO: Add HDR spec support

        // Validate all white patches
        const w1 = validateIntraFrameContrast(data.whiteL, data.blackL, spec);
        const w2 = validateIntraFrameContrast(data.whiteR, data.blackR, spec);
        const w3 = validateIntraFrameContrast(data.whiteT, data.blackT, spec);
        const w4 = validateIntraFrameContrast(data.whiteB, data.blackB, spec);

        const pass = w1.isValid && w2.isValid && w3.isValid && w4.isValid;

        // Calculate a representative contrast ratio (e.g., Avg White / Avg Black)
        const avgWhite = (data.whiteL + data.whiteR + data.whiteT + data.whiteB) / 4;
        const avgBlack = (data.blackL + data.blackR + data.blackT + data.blackB) / 4;
        const contrastRatio = avgBlack > 0 ? avgWhite / avgBlack : 0;

        const existing = await db.query.measurementsIntraContrast.findFirst({
            where: eq(measurementsIntraContrast.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsIntraContrast)
                .set({
                    standard: data.standard,
                    whiteL: data.whiteL, whiteR: data.whiteR, whiteT: data.whiteT, whiteB: data.whiteB,
                    blackL: data.blackL, blackR: data.blackR, blackT: data.blackT, blackB: data.blackB,
                    contrastRatio,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsIntraContrast.id, existing.id));
        } else {
            await db.insert(measurementsIntraContrast).values({
                sessionId: data.sessionId,
                standard: data.standard,
                whiteL: data.whiteL, whiteR: data.whiteR, whiteT: data.whiteT, whiteB: data.whiteB,
                blackL: data.blackL, blackR: data.blackR, blackT: data.blackT, blackB: data.blackB,
                contrastRatio,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/intra-contrast`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save intra-contrast data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getIntraContrastAction(sessionId: number) {
    try {
        const data = await db.query.measurementsIntraContrast.findFirst({
            where: eq(measurementsIntraContrast.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get intra-contrast data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
