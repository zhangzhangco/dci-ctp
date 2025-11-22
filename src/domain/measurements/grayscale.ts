import { db } from '@/db';
import { measurementsGrayscale } from '@/db/schema';
import { eq } from 'drizzle-orm';

export type NewGrayscaleMeasurement = typeof measurementsGrayscale.$inferInsert;
export type GrayscaleMeasurement = typeof measurementsGrayscale.$inferSelect;

export async function getGrayscaleMeasurements(sessionId: number) {
    return await db
        .select()
        .from(measurementsGrayscale)
        .where(eq(measurementsGrayscale.sessionId, sessionId))
        .orderBy(measurementsGrayscale.stepIndex);
}

export async function createGrayscaleMeasurement(data: NewGrayscaleMeasurement) {
    return await db.insert(measurementsGrayscale).values(data).returning();
}

export async function batchCreateGrayscaleMeasurements(data: NewGrayscaleMeasurement[]) {
    return await db.insert(measurementsGrayscale).values(data).returning();
}
