'use server';

import { db } from '@/db';
import { measurementsPixelCount } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { PIXEL_COUNT_SPEC } from '@/domain/standards/ctpPixelCountSpec';

export async function savePixelCountAction(data: {
    sessionId: number;
    patternType: string;
    pixelBlockComplete: boolean;
    noCropping: boolean;
    noScaling: boolean;
    horizontalPixels: number;
    verticalPixels: number;
    notes?: string;
}) {
    try {
        const resolutionPass = data.horizontalPixels >= PIXEL_COUNT_SPEC.minHorizontal &&
            data.verticalPixels >= PIXEL_COUNT_SPEC.minVertical;
        const checklistPass = data.pixelBlockComplete && data.noCropping && data.noScaling;
        const pass = resolutionPass && checklistPass;

        const existing = await db.query.measurementsPixelCount.findFirst({
            where: eq(measurementsPixelCount.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsPixelCount)
                .set({
                    patternType: data.patternType,
                    pixelBlockComplete: data.pixelBlockComplete,
                    noCropping: data.noCropping,
                    noScaling: data.noScaling,
                    horizontalPixels: data.horizontalPixels,
                    verticalPixels: data.verticalPixels,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsPixelCount.id, existing.id));
        } else {
            await db.insert(measurementsPixelCount).values({
                sessionId: data.sessionId,
                patternType: data.patternType,
                pixelBlockComplete: data.pixelBlockComplete,
                noCropping: data.noCropping,
                noScaling: data.noScaling,
                horizontalPixels: data.horizontalPixels,
                verticalPixels: data.verticalPixels,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/pixel-count`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save pixel count data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getPixelCountAction(sessionId: number) {
    try {
        const data = await db.query.measurementsPixelCount.findFirst({
            where: eq(measurementsPixelCount.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get pixel count data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
