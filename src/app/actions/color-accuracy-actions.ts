'use server';

import { saveColorAccuracyMeasurement, getColorAccuracyMeasurements, ColorAccuracyInput } from '@/domain/measurements/color-accuracy';
import { revalidatePath } from 'next/cache';

export async function saveColorAccuracyAction(input: ColorAccuracyInput) {
    try {
        await saveColorAccuracyMeasurement(input);
        revalidatePath(`/measurements/color-accuracy`);
        return { success: true };
    } catch (error) {
        console.error("Failed to save color accuracy measurement:", error);
        return { success: false, error: String(error) };
    }
}

export async function getColorAccuracyMeasurementsAction(sessionId: number) {
    try {
        const data = await getColorAccuracyMeasurements(sessionId);
        return { success: true, data };
    } catch (error) {
        console.error("Failed to load color accuracy measurements:", error);
        return { success: false, error: String(error) };
    }
}
