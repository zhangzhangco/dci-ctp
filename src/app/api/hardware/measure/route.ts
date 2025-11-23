import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * POST /api/hardware/measure
 * 使用当前设备执行测量
 */
export async function POST() {
    try {
        const data = await deviceManager.measureWithCurrentDevice();

        return NextResponse.json(data);
    } catch (error) {
        console.error('[API] Measurement failed:', error);
        return NextResponse.json(
            { error: 'Measurement failed', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
