'use server';

import { createTestSession, getAllSessions } from '@/domain/sessions';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const sessionSchema = z.object({
    deviceId: z.coerce.number().min(1, "Device is required"),
    phase: z.coerce.number().min(1).max(3),
    date: z.string().min(1, "Date is required"),
    operator: z.string().optional(),
    location: z.string().optional(),
    notes: z.string().optional(),
});

export async function getSessionsAction() {
    return await getAllSessions();
}

export async function createSessionAction(formData: FormData) {
    const rawData = {
        deviceId: formData.get('deviceId'),
        phase: formData.get('phase'),
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
