'use server';

import { db } from '@/db';
import { measurementsSubPixel } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function saveSubPixelAction(data: {
    sessionId: number;
    horizontalLinesPass: boolean;
    verticalLinesPass: boolean;
    noColorFringing: boolean;
    notes?: string;
}) {
    try {
        const pass = data.horizontalLinesPass && data.verticalLinesPass && data.noColorFringing;

        const existing = await db.query.measurementsSubPixel.findFirst({
            where: eq(measurementsSubPixel.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsSubPixel)
                .set({
                    horizontalLinesPass: data.horizontalLinesPass,
                    verticalLinesPass: data.verticalLinesPass,
                    noColorFringing: data.noColorFringing,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsSubPixel.id, existing.id));
        } else {
            await db.insert(measurementsSubPixel).values({
                sessionId: data.sessionId,
                horizontalLinesPass: data.horizontalLinesPass,
                verticalLinesPass: data.verticalLinesPass,
                noColorFringing: data.noColorFringing,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/sub-pixel`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save sub-pixel data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getSubPixelAction(sessionId: number) {
    try {
        const data = await db.query.measurementsSubPixel.findFirst({
            where: eq(measurementsSubPixel.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get sub-pixel data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
