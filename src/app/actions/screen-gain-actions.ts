'use server';

import { db } from '@/db';
import { measurementsScreenGain } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function saveScreenGainAction(data: {
    sessionId: number;
    screenGain?: number;
    halfGainAngle?: number;
    notes?: string;
}) {
    try {
        // Simple pass logic: if values are present, consider it passed (or add specific logic)
        const pass = data.screenGain !== undefined && data.halfGainAngle !== undefined;

        const existing = await db.query.measurementsScreenGain.findFirst({
            where: eq(measurementsScreenGain.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsScreenGain)
                .set({
                    screenGain: data.screenGain,
                    halfGainAngle: data.halfGainAngle,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsScreenGain.id, existing.id));
        } else {
            await db.insert(measurementsScreenGain).values({
                sessionId: data.sessionId,
                screenGain: data.screenGain,
                halfGainAngle: data.halfGainAngle,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/screen-gain`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save screen gain data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getScreenGainAction(sessionId: number) {
    try {
        const data = await db.query.measurementsScreenGain.findFirst({
            where: eq(measurementsScreenGain.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get screen gain data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
