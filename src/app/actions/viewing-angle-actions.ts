'use server';

import { db } from '@/db';
import { measurementsViewingAngle } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function saveViewingAngleAction(data: {
    sessionId: number;
    luminanceCenter?: number;
    luminanceLeft?: number;
    luminanceRight?: number;
    luminanceTop?: number;
    luminanceBottom?: number;
    colorShiftPass: boolean;
    notes?: string;
}) {
    try {
        // Simple pass logic: if color shift pass is true, we consider it passed for now.
        // Real logic might involve checking luminance uniformity > 50% etc.
        const pass = data.colorShiftPass;

        const existing = await db.query.measurementsViewingAngle.findFirst({
            where: eq(measurementsViewingAngle.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsViewingAngle)
                .set({
                    luminanceCenter: data.luminanceCenter,
                    luminanceLeft: data.luminanceLeft,
                    luminanceRight: data.luminanceRight,
                    luminanceTop: data.luminanceTop,
                    luminanceBottom: data.luminanceBottom,
                    colorShiftPass: data.colorShiftPass,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsViewingAngle.id, existing.id));
        } else {
            await db.insert(measurementsViewingAngle).values({
                sessionId: data.sessionId,
                luminanceCenter: data.luminanceCenter,
                luminanceLeft: data.luminanceLeft,
                luminanceRight: data.luminanceRight,
                luminanceTop: data.luminanceTop,
                luminanceBottom: data.luminanceBottom,
                colorShiftPass: data.colorShiftPass,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/viewing-angle`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save viewing angle data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getViewingAngleAction(sessionId: number) {
    try {
        const data = await db.query.measurementsViewingAngle.findFirst({
            where: eq(measurementsViewingAngle.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get viewing angle data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
