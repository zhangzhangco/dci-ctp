'use server';

import { db } from '@/db';
import { measurementsGrayscale } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export type GrayscaleTestType = 'white-steps' | 'gray-steps';

export interface GrayscaleMeasurement {
    stepNumber: number;
    measuredLuminance?: number; // cd/m²
}

export interface SaveGrayscaleDataInput {
    sessionId: number;
    testType: GrayscaleTestType;
    screenBlackLevel: number; // mcd/m²
    measurements: GrayscaleMeasurement[];
}

/**
 * 保存灰阶测量数据
 * 策略:使用 bitDepth 字段存储额外信息
 * - bitDepth = 10000 表示 white-steps
 * - bitDepth = 20000 表示 gray-steps
 * - stepIndex = stepNumber (1-10)
 * - measuredL = 测量的绝对亮度值 (cd/m²)
 * - targetL = 黑电平值 (cd/m²,从 mcd/m² 转换)
 */
export async function saveGrayscaleDataAction(input: SaveGrayscaleDataInput) {
    try {
        const { sessionId, testType, screenBlackLevel, measurements } = input;

        // 删除该会话该测试类型的旧数据
        const bitDepthMarker = testType === 'white-steps' ? 10000 : 20000;
        await db
            .delete(measurementsGrayscale)
            .where(
                and(
                    eq(measurementsGrayscale.sessionId, sessionId),
                    eq(measurementsGrayscale.bitDepth, bitDepthMarker)
                )
            );

        // 插入新数据
        const blackLevelCdM2 = screenBlackLevel / 1000; // mcd/m² 转 cd/m²

        for (const measurement of measurements) {
            if (measurement.measuredLuminance !== undefined) {
                await db.insert(measurementsGrayscale).values({
                    sessionId,
                    stepIndex: measurement.stepNumber,
                    bitDepth: bitDepthMarker,
                    measuredL: measurement.measuredLuminance,
                    targetL: blackLevelCdM2, // 黑电平存储在 targetL
                    measuredX: null,
                    measuredY: null,
                    targetX: null,
                    targetY: null,
                    errorE: null,
                });
            }
        }

        revalidatePath('/measurements/grayscale');
        revalidatePath(`/sessions/${sessionId}`);

        return { success: true };
    } catch (error) {
        console.error('保存灰阶数据失败:', error);
        return { success: false, error: String(error) };
    }
}

/**
 * 加载灰阶测量数据
 */
export async function loadGrayscaleDataAction(sessionId: number, testType: GrayscaleTestType) {
    try {
        const bitDepthMarker = testType === 'white-steps' ? 10000 : 20000;

        const data = await db
            .select()
            .from(measurementsGrayscale)
            .where(
                and(
                    eq(measurementsGrayscale.sessionId, sessionId),
                    eq(measurementsGrayscale.bitDepth, bitDepthMarker)
                )
            );

        if (data.length === 0) {
            return null;
        }

        // 从数据重建
        const screenBlackLevel = (data[0].targetL || 0) * 1000; // cd/m² 转 mcd/m²
        const measurements: GrayscaleMeasurement[] = data.map((row) => ({
            stepNumber: row.stepIndex,
            measuredLuminance: row.measuredL || undefined,
        }));

        return {
            testType,
            screenBlackLevel,
            measurements,
        };
    } catch (error) {
        console.error('加载灰阶数据失败:', error);
        return null;
    }
}
