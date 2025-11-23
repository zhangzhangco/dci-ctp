import { db } from "@/db";
import { measurementsColor } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export type ColorType = 'primary' | 'white_point';
export type ColorName = 'Red' | 'Green' | 'Blue' | 'White';

export interface ColorMeasurementInput {
    sessionId: number;
    colorName: string;
    type: ColorType;
    measuredL: number;
    measuredX: number;
    measuredY: number;
    targetL?: number;
    targetX?: number;
    targetY?: number;
}

export async function saveColorMeasurement(input: ColorMeasurementInput) {
    const existing = await db.query.measurementsColor.findFirst({
        where: and(
            eq(measurementsColor.sessionId, input.sessionId),
            eq(measurementsColor.colorName, input.colorName),
            eq(measurementsColor.type, input.type)
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

export async function getColorMeasurements(sessionId: number) {
    return await db.query.measurementsColor.findMany({
        where: eq(measurementsColor.sessionId, sessionId)
    });
}
