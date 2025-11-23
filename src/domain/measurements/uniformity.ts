import { db } from "@/db";
import { measurementsUniformity } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export type UniformityPosition = 'Center' | 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight' | 'TopCenter' | 'BottomCenter' | 'LeftCenter' | 'RightCenter';

export interface UniformityMeasurementInput {
    sessionId: number;
    position: string; // UniformityPosition or custom string
    standard?: 'sdr' | 'hdr';
    measuredL: number;
    measuredX: number;
    measuredY: number;
}

export async function saveUniformityMeasurement(input: UniformityMeasurementInput) {
    const standard = input.standard || 'sdr';
    const existing = await db.query.measurementsUniformity.findFirst({
        where: and(
            eq(measurementsUniformity.sessionId, input.sessionId),
            eq(measurementsUniformity.position, input.position),
            eq(measurementsUniformity.standard, standard)
        )
    });

    if (existing) {
        return await db.update(measurementsUniformity)
            .set({
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
            })
            .where(eq(measurementsUniformity.id, existing.id))
            .returning();
    } else {
        return await db.insert(measurementsUniformity)
            .values({
                sessionId: input.sessionId,
                position: input.position,
                standard: standard,
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
            })
            .returning();
    }
}

export async function getUniformityMeasurements(sessionId: number, standard: 'sdr' | 'hdr' = 'sdr') {
    return await db.query.measurementsUniformity.findMany({
        where: and(
            eq(measurementsUniformity.sessionId, sessionId),
            eq(measurementsUniformity.standard, standard)
        )
    });
}
