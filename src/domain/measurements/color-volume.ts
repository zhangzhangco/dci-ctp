import { db } from "@/db";
import { measurementsColor } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export type ColorType = 'primary' | 'white_point';
export type ColorName = 'Red' | 'Green' | 'Blue' | 'White';

export interface ColorMeasurementInput {
    sessionId: number;
    colorName: string;
    type: ColorType;
    standard?: 'sdr' | 'hdr';
    measuredL: number;
    measuredX: number;
    measuredY: number;
    targetL?: number;
    targetX?: number;
    targetY?: number;
}

export async function saveColorMeasurement(input: ColorMeasurementInput) {
    const standard = input.standard || 'sdr';
    const existing = await db.query.measurementsColor.findFirst({
        where: and(
            eq(measurementsColor.sessionId, input.sessionId),
            eq(measurementsColor.colorName, input.colorName),
            eq(measurementsColor.type, input.type),
            eq(measurementsColor.standard, standard)
        )
    });

    if (existing) {
        return await db.update(measurementsColor)
            .set({
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
                targetL: input.targetL,
                targetX: input.targetX,
                targetY: input.targetY,
            })
            .where(eq(measurementsColor.id, existing.id))
            .returning();
    } else {
        return await db.insert(measurementsColor)
            .values({
                sessionId: input.sessionId,
                colorName: input.colorName,
                type: input.type,
                standard: standard,
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
                targetL: input.targetL,
                targetX: input.targetX,
                targetY: input.targetY,
            })
            .returning();
    }
}

export async function getColorMeasurements(sessionId: number, standard: 'sdr' | 'hdr' = 'sdr') {
    return await db.query.measurementsColor.findMany({
        where: and(
            eq(measurementsColor.sessionId, sessionId),
            eq(measurementsColor.standard, standard)
        )
    });
}
