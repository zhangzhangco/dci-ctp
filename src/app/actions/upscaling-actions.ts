'use server';

import { db } from '@/db';
import { measurementsUpscaling } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function saveUpscalingAction(data: {
    sessionId: number;
    noJaggies: boolean;
    noRinging: boolean;
    noAliasing: boolean;
    notes?: string;
}) {
    try {
        const pass = data.noJaggies && data.noRinging && data.noAliasing;

        const existing = await db.query.measurementsUpscaling.findFirst({
            where: eq(measurementsUpscaling.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsUpscaling)
                .set({
                    noJaggies: data.noJaggies,
                    noRinging: data.noRinging,
                    noAliasing: data.noAliasing,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsUpscaling.id, existing.id));
        } else {
            await db.insert(measurementsUpscaling).values({
                sessionId: data.sessionId,
                noJaggies: data.noJaggies,
                noRinging: data.noRinging,
                noAliasing: data.noAliasing,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/upscaling`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save upscaling data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getUpscalingAction(sessionId: number) {
    try {
        const data = await db.query.measurementsUpscaling.findFirst({
            where: eq(measurementsUpscaling.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get upscaling data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
