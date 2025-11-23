'use server';

import { db } from '@/db';
import { measurementsPixelStructure } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function savePixelStructureAction(data: {
    sessionId: number;
    fillFactorCheck: boolean;
    pixelPitchCheck: boolean;
    subPixelStructureCheck: boolean;
    visualArtifactsCheck: boolean;
    notes?: string;
}) {
    try {
        const existing = await db.query.measurementsPixelStructure.findFirst({
            where: eq(measurementsPixelStructure.sessionId, data.sessionId)
        });

        if (existing) {
            await db.update(measurementsPixelStructure)
                .set({
                    fillFactorCheck: data.fillFactorCheck,
                    pixelPitchCheck: data.pixelPitchCheck,
                    subPixelStructureCheck: data.subPixelStructureCheck,
                    visualArtifactsCheck: data.visualArtifactsCheck,
                    notes: data.notes
                })
                .where(eq(measurementsPixelStructure.id, existing.id));
        } else {
            await db.insert(measurementsPixelStructure).values({
                sessionId: data.sessionId,
                fillFactorCheck: data.fillFactorCheck,
                pixelPitchCheck: data.pixelPitchCheck,
                subPixelStructureCheck: data.subPixelStructureCheck,
                visualArtifactsCheck: data.visualArtifactsCheck,
                notes: data.notes
            });
        }

        revalidatePath(`/measurements/pixel-structure`);
        return { success: true };
    } catch (error) {
        console.error('Failed to save pixel structure data:', error);
        return { success: false, error: 'Failed to save data' };
    }
}

export async function getPixelStructureAction(sessionId: number) {
    try {
        const data = await db.query.measurementsPixelStructure.findFirst({
            where: eq(measurementsPixelStructure.sessionId, sessionId)
        });
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get pixel structure data:', error);
        return { success: false, error: 'Failed to get data' };
    }
}
