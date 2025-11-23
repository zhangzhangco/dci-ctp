'use server';

import { db } from '@/db';
import { measurementsInactiveArea } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { validateInactiveArea } from '@/domain/standards/ctpInactiveAreaSpec';

export async function saveInactiveAreaAction(data: {
    sessionId: number;
    topBorderCheck: boolean;
    bottomBorderCheck: boolean;
    leftBorderCheck: boolean;
    rightBorderCheck: boolean;
    measuredLuminance: number;
    notes?: string;
}) {
    try {
        const luminancePass = validateInactiveArea(data.measuredLuminance);
        const checklistPass = data.topBorderCheck && data.bottomBorderCheck && data.leftBorderCheck && data.rightBorderCheck;
        const pass = luminancePass && checklistPass;

        const existing = await db.query.measurementsInactiveArea.findFirst({
            where: eq(measurementsInactiveArea.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsInactiveArea)
                .set({
                    topBorderCheck: data.topBorderCheck,
                    bottomBorderCheck: data.bottomBorderCheck,
                    leftBorderCheck: data.leftBorderCheck,
                    rightBorderCheck: data.rightBorderCheck,
                    measuredLuminance: data.measuredLuminance,
                    pass,
                    notes: data.notes
                })
                .where(eq(measurementsInactiveArea.id, existing.id));
        } else {
            await db.insert(measurementsInactiveArea).values({
                sessionId: data.sessionId,
                topBorderCheck: data.topBorderCheck,
                bottomBorderCheck: data.bottomBorderCheck,
                leftBorderCheck: data.leftBorderCheck,
                rightBorderCheck: data.rightBorderCheck,
                measuredLuminance: data.measuredLuminance,
                pass,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/inactive-area`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save inactive area data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getInactiveAreaAction(sessionId: number) {
    try {
        const data = await db.query.measurementsInactiveArea.findFirst({
            where: eq(measurementsInactiveArea.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get inactive area data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
