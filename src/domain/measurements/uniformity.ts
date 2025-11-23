import { db } from "@/db";
import { measurementsUniformity } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export type UniformityPosition = 'Center' | 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight' | 'TopCenter' | 'BottomCenter' | 'LeftCenter' | 'RightCenter';

export interface UniformityMeasurementInput {
    sessionId: number;
    position: string; // UniformityPosition or custom string
    measuredL: number;
    measuredX: number;
    measuredY: number;
}

export async function saveUniformityMeasurement(input: UniformityMeasurementInput) {
    const existing = await db.query.measurementsUniformity.findFirst({
        where: and(
            eq(measurementsUniformity.sessionId, input.sessionId),
            eq(measurementsUniformity.position, input.position)
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
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
            })
            .returning();
    }
}

export async function getUniformityMeasurements(sessionId: number) {
    return await db.query.measurementsUniformity.findMany({
        where: eq(measurementsUniformity.sessionId, sessionId)
    });
}
