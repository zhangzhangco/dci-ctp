'use server';

import { db } from '@/db';
import { measurementsVignetting, testResults } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getVignettingAction(sessionId: number) {
    try {
        const record = await db.query.measurementsVignetting.findFirst({
            where: eq(measurementsVignetting.sessionId, sessionId),
        });
        return { success: true, data: record };
    } catch (error) {
        console.error('Error fetching vignetting:', error);
        return { success: false, error: 'Failed to fetch vignetting data' };
    }
}

export async function saveVignettingAction(data: {
    sessionId: number;
    luminanceCenter?: number;
    luminanceTopLeft?: number;
    luminanceTopRight?: number;
    luminanceBottomLeft?: number;
    luminanceBottomRight?: number;
    notes?: string;
}) {
    try {
        const existing = await db.query.measurementsVignetting.findFirst({
            where: eq(measurementsVignetting.sessionId, data.sessionId),
        });

        let pass = false;
        if (data.luminanceCenter && data.luminanceCenter > 0) {
            // Check if corners are at least 80% of center luminance (example threshold)
            const threshold = data.luminanceCenter * 0.8;
            const tl = data.luminanceTopLeft ?? 0;
            const tr = data.luminanceTopRight ?? 0;
            const bl = data.luminanceBottomLeft ?? 0;
            const br = data.luminanceBottomRight ?? 0;

            if (tl >= threshold && tr >= threshold && bl >= threshold && br >= threshold) {
                pass = true;
            }
        }

        if (existing) {
            await db.update(measurementsVignetting)
                .set({
                    luminanceCenter: data.luminanceCenter,
                    luminanceTopLeft: data.luminanceTopLeft,
                    luminanceTopRight: data.luminanceTopRight,
                    luminanceBottomLeft: data.luminanceBottomLeft,
                    luminanceBottomRight: data.luminanceBottomRight,
                    pass,
                    notes: data.notes,
                })
                .where(eq(measurementsVignetting.id, existing.id));
        } else {
            await db.insert(measurementsVignetting).values({
                sessionId: data.sessionId,
                luminanceCenter: data.luminanceCenter,
                luminanceTopLeft: data.luminanceTopLeft,
                luminanceTopRight: data.luminanceTopRight,
                luminanceBottomLeft: data.luminanceBottomLeft,
                luminanceBottomRight: data.luminanceBottomRight,
                pass,
                notes: data.notes,
            });
        }

        // Update test result status
        const existingResult = await db.query.testResults.findFirst({
            where: (table, { and, eq }) => and(
                eq(table.sessionId, data.sessionId),
                eq(table.testDefinitionId, 11) // Assuming 11 is Vignetting ID
            )
        });

        if (existingResult) {
            await db.update(testResults)
                .set({ status: pass ? 'pass' : 'fail' })
                .where(eq(testResults.id, existingResult.id));
        } else {
            // If we knew the testDefinitionId for sure, we'd insert. 
            // For now, rely on the overview page to create initial entries or update logic elsewhere.
        }

        revalidatePath('/[locale]/measurements/vignetting');
        return { success: true };
    } catch (error) {
        console.error('Error saving vignetting:', error);
        return { success: false, error: 'Failed to save vignetting data' };
    }
}
