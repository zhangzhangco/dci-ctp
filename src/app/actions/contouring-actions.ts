'use server';

import { db } from '@/db';
import { measurementsContouring } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function saveContouringAction(data: {
    sessionId: number;
    standard: 'sdr' | 'hdr';
    monotonicityPass: boolean;
    visualCheckPass: boolean;
    notes?: string;
}) {
    try {
        const pass = data.monotonicityPass && data.visualCheckPass;

        const existing = await db.query.measurementsContouring.findFirst({
            where: eq(measurementsContouring.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsContouring)
                .set({
                    standard: data.standard,
                    monotonicityPass: data.monotonicityPass,
                    visualCheckPass: data.visualCheckPass,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsContouring.id, existing.id));
        } else {
            await db.insert(measurementsContouring).values({
                sessionId: data.sessionId,
                standard: data.standard,
                monotonicityPass: data.monotonicityPass,
                visualCheckPass: data.visualCheckPass,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/contouring`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save contouring data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getContouringAction(sessionId: number) {
    try {
        const data = await db.query.measurementsContouring.findFirst({
            where: eq(measurementsContouring.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get contouring data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
