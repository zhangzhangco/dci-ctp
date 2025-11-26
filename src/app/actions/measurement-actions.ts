'use server'

import { saveBasicMeasurement, getBasicMeasurements, BasicMeasurementInput } from "@/domain/measurements/basic";
import { revalidatePath } from "next/cache";

export async function saveBasicMeasurementAction(input: BasicMeasurementInput) {
    console.log("saveBasicMeasurementAction called with:", JSON.stringify(input));
    try {
        const result = await saveBasicMeasurement(input);
        console.log("saveBasicMeasurement result:", result);

        try {
            revalidatePath('/[locale]/measurements/basic', 'page');
            console.log("revalidatePath('/[locale]/measurements/basic') success");
        } catch (revalError) {
            console.error("revalidatePath failed:", revalError);
            // Don't fail the action if revalidation fails
        }

        return { success: true };
    } catch (error) {
        console.error("Failed to save basic measurement:", error);
        // Ensure we return a serializable object
        return { success: false, error: error instanceof Error ? error.message : "Failed to save measurement" };
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
