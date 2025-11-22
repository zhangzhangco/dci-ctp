import { db } from '@/db';
import { testSessions, devices } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

export type NewTestSession = typeof testSessions.$inferInsert;
export type TestSession = typeof testSessions.$inferSelect;

export async function getAllSessions() {
    return await db.select({
        session: testSessions,
        device: devices
    })
        .from(testSessions)
        .innerJoin(devices, eq(testSessions.deviceId, devices.id))
        .orderBy(desc(testSessions.date));
}

export async function createTestSession(data: NewTestSession) {
    return await db.insert(testSessions).values(data).returning();
}
