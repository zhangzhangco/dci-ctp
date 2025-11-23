'use server';

import { createTestSession, getAllSessions } from '@/domain/sessions';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/db';
import { measurementsBasic, measurementsUniformity, measurementsColor, measurementsGrayscale } from '@/db/schema';
import { eq, count } from 'drizzle-orm';

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

export async function getSessionStatusAction(sessionId: number) {
    // Basic (Peak White & Black)
    const [basicCount] = await db.select({ count: count() })
        .from(measurementsBasic)
        .where(eq(measurementsBasic.sessionId, sessionId));

    // Uniformity
    const [uniformityCount] = await db.select({ count: count() })
        .from(measurementsUniformity)
        .where(eq(measurementsUniformity.sessionId, sessionId));

    // Color Volume
    const [colorCount] = await db.select({ count: count() })
        .from(measurementsColor)
        .where(eq(measurementsColor.sessionId, sessionId));

    // Grayscale
    const [grayscaleCount] = await db.select({ count: count() })
        .from(measurementsGrayscale)
        .where(eq(measurementsGrayscale.sessionId, sessionId));

    return {
        'peak-white-black': basicCount.count > 0,
        'uniformity': uniformityCount.count > 0,
        'color-volume': colorCount.count > 0,
        'grayscale': grayscaleCount.count > 0,
        'pixel-structure': false, // Not implemented yet
    };
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
