
import { db } from '@/db';
import { measurementsColor } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export type ColorAccuracyType = 'primary';

export interface ColorAccuracyInput {
    sessionId: number;
    colorName: string;
    standard?: 'sdr' | 'hdr';
    measuredL: number;
    measuredX: number;
    measuredY: number;
    targetL: number;
    targetX: number;
    targetY: number;
    deltaE?: number;
}

export async function saveColorAccuracyMeasurement(input: ColorAccuracyInput) {
    const standard = input.standard || 'sdr';
    // Check if exists
    const existing = await db.query.measurementsColor.findFirst({
        where: and(
            eq(measurementsColor.sessionId, input.sessionId),
            eq(measurementsColor.colorName, input.colorName),
            eq(measurementsColor.type, 'primary'),
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
                deltaE: input.deltaE
            })
            .where(eq(measurementsColor.id, existing.id))
            .returning();
    } else {
        return await db.insert(measurementsColor)
            .values({
                sessionId: input.sessionId,
                colorName: input.colorName,
                type: 'primary',
                standard: standard,
                measuredL: input.measuredL,
                measuredX: input.measuredX,
                measuredY: input.measuredY,
                targetL: input.targetL,
                targetX: input.targetX,
                targetY: input.targetY,
                deltaE: input.deltaE
            })
            .returning();
    }
}

export async function getColorAccuracyMeasurements(sessionId: number, standard: 'sdr' | 'hdr' = 'sdr') {
    return await db.query.measurementsColor.findMany({
        where: and(
            eq(measurementsColor.sessionId, sessionId),
            eq(measurementsColor.type, 'primary'),
            eq(measurementsColor.standard, standard)
        )
    });
}
