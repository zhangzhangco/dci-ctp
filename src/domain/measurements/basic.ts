import { db } from "@/db";
import { measurementsBasic } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export type BasicMeasurementType = 'peak_white' | 'black_level' | 'sdr_peak_white' | 'hdr_peak_white' | 'sdr_black_level' | 'hdr_black_level';

export interface BasicMeasurementInput {
    sessionId: number;
    type: BasicMeasurementType;
    measuredL: number;
    measuredX?: number;
    measuredY?: number;
    notes?: string;
}

export async function saveBasicMeasurement(input: BasicMeasurementInput) {
    // Check if a measurement of this type already exists for this session
    const existing = await db.query.measurementsBasic.findFirst({
        where: and(
            eq(measurementsBasic.sessionId, input.sessionId),
            eq(measurementsBasic.type, input.type)
        )
    });

    if (existing) {
        // Update
        return await db.update(measurementsBasic)
            .set({
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
                notes: input.notes
            })
            .where(eq(measurementsBasic.id, existing.id))
            .returning();
    } else {
        // Insert
        return await db.insert(measurementsBasic)
            .values({
                sessionId: input.sessionId,
                type: input.type,
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
                notes: input.notes
            })
            .returning();
    }
}

export async function getBasicMeasurements(sessionId: number) {
    return await db.query.measurementsBasic.findMany({
        where: eq(measurementsBasic.sessionId, sessionId)
    });
}
