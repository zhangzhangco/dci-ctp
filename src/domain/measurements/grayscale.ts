import { db } from '@/db';
import { measurementsGrayscale } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export type NewGrayscaleMeasurement = typeof measurementsGrayscale.$inferInsert;
export type GrayscaleMeasurement = typeof measurementsGrayscale.$inferSelect;

export async function getGrayscaleMeasurements(sessionId: number, standard: 'sdr' | 'hdr' = 'sdr') {
    return await db
        .select()
        .from(measurementsGrayscale)
        .where(and(
            eq(measurementsGrayscale.sessionId, sessionId),
            eq(measurementsGrayscale.standard, standard)
        ))
        .orderBy(measurementsGrayscale.stepIndex);
}

export async function createGrayscaleMeasurement(data: NewGrayscaleMeasurement) {
    return await db.insert(measurementsGrayscale).values(data).returning();
}

export async function batchCreateGrayscaleMeasurements(data: NewGrayscaleMeasurement[]) {
    return await db.insert(measurementsGrayscale).values(data).returning();
}
