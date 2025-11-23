import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * GET /api/hardware/devices/[id]/status
 * 检查指定设备的连接状态
 */
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const isConnected = await deviceManager.checkDeviceStatus(id);

        return NextResponse.json({ isConnected });
    } catch (error) {
        console.error('[API] Failed to check device status:', error);
        return NextResponse.json(
            { error: 'Failed to check device status', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
