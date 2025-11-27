'use server';

import { db } from '@/db';
import { measurementsContrast } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function saveContrastAction(data: {
    sessionId: number;
    standard: 'sdr' | 'hdr';
    peakWhite?: number;
    blackLevel?: number;
    contrastRatio?: number;
    notes?: string;
}) {
    try {
        // Simple pass logic: check if contrast ratio meets DCI spec (e.g. > 1200:1 for SDR)
        // For now, just check if data is present
        const pass = data.contrastRatio !== undefined && data.contrastRatio > 0;

        const existing = await db.query.measurementsContrast.findFirst({
            where: eq(measurementsContrast.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsContrast)
                .set({
                    standard: data.standard,
                    peakWhite: data.peakWhite,
                    blackLevel: data.blackLevel,
                    contrastRatio: data.contrastRatio,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsContrast.id, existing.id));
        } else {
            await db.insert(measurementsContrast).values({
                sessionId: data.sessionId,
                standard: data.standard,
                peakWhite: data.peakWhite,
                blackLevel: data.blackLevel,
                contrastRatio: data.contrastRatio,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/contrast`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save contrast data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getContrastAction(sessionId: number) {
    try {
        const data = await db.query.measurementsContrast.findFirst({
            where: eq(measurementsContrast.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get contrast data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
