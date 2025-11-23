'use server'

import { saveBasicMeasurement, getBasicMeasurements, BasicMeasurementInput } from "@/domain/measurements/basic";
import { revalidatePath } from "next/cache";

export async function saveBasicMeasurementAction(input: BasicMeasurementInput) {
    try {
        await saveBasicMeasurement(input);
        revalidatePath('/measurements/basic'); // Adjust path as needed
        return { success: true };
    } catch (error) {
        console.error("Failed to save basic measurement:", error);
        return { success: false, error: "Failed to save measurement" };
    }
}

export async function getBasicMeasurementsAction(sessionId: number) {
    return await getBasicMeasurements(sessionId);
}

// --- Uniformity ---
import { saveUniformityMeasurement, getUniformityMeasurements, UniformityMeasurementInput } from "@/domain/measurements/uniformity";

export async function saveUniformityMeasurementAction(input: UniformityMeasurementInput) {
    try {
        await saveUniformityMeasurement(input);
        revalidatePath('/measurements/uniformity');
        return { success: true };
    } catch (error) {
        console.error("Failed to save uniformity measurement:", error);
        return { success: false, error: "Failed to save measurement" };
    }
}

export async function getUniformityMeasurementsAction(sessionId: number, standard: 'sdr' | 'hdr' = 'sdr') {
    return await getUniformityMeasurements(sessionId, standard);
}

// --- Color Volume ---
import { saveColorMeasurement, getColorMeasurements, ColorMeasurementInput } from "@/domain/measurements/color-volume";

export async function saveColorMeasurementAction(input: ColorMeasurementInput) {
    try {
        await saveColorMeasurement(input);
        revalidatePath('/measurements/color-volume');
        return { success: true };
    } catch (error) {
        console.error("Failed to save color measurement:", error);
        return { success: false, error: "Failed to save measurement" };
    }
}

export async function getColorMeasurementsAction(sessionId: number, standard: 'sdr' | 'hdr' = 'sdr') {
    return await getColorMeasurements(sessionId, standard);
}
