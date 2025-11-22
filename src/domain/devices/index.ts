import { db } from '@/db';
import { devices } from '@/db/schema';
import { desc } from 'drizzle-orm';

export type NewDevice = typeof devices.$inferInsert;
export type Device = typeof devices.$inferSelect;

export async function getAllDevices() {
    return await db.select().from(devices).orderBy(desc(devices.createdAt));
}

export async function createDevice(data: NewDevice) {
    return await db.insert(devices).values(data).returning();
}
