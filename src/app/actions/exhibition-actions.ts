'use server';

import { db } from '@/db';
import { measurementsExhibition } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export interface ExhibitionMeasurementInput {
    sessionId: number;
    ambientLightPass: boolean;
    maskingPass: boolean;
    portWindowPass: boolean;
    hvacNoisePass: boolean;
    ambientLightLevel: number;
    temperature: number;
    humidity: number;
    notes?: string;
}

export async function saveExhibitionAction(input: ExhibitionMeasurementInput) {
    try {
        const existing = await db.select().from(measurementsExhibition).where(eq(measurementsExhibition.sessionId, input.sessionId));

        // Validation logic based on CTP Spec
        // Ambient Light < 0.03 cd/m2
        // Temp 18-28 C
        // Humidity 20-80%
        const pass = input.ambientLightPass && input.maskingPass && input.portWindowPass && input.hvacNoisePass &&
            input.ambientLightLevel <= 0.03 &&
            input.temperature >= 18 && input.temperature <= 28 &&
            input.humidity >= 20 && input.humidity <= 80;

        if (existing.length > 0) {
            await db.update(measurementsExhibition)
                .set({ ...input, pass })
                .where(eq(measurementsExhibition.sessionId, input.sessionId));
        } else {
            await db.insert(measurementsExhibition).values({ ...input, pass });
        }

        revalidatePath('/measurements/exhibition');
        return { success: true };
    } catch (error) {
        console.error('Failed to save exhibition measurement:', error);
        return { success: false, error: 'Failed to save' };
    }
}

export async function getExhibitionAction(sessionId: number) {
    try {
        const result = await db.select().from(measurementsExhibition).where(eq(measurementsExhibition.sessionId, sessionId));
        return { success: true, data: result[0] };
    } catch (error) {
        return { success: false, error: 'Failed to fetch' };
    }
}
