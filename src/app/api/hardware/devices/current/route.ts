import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * GET /api/hardware/devices/current
 * 获取当前活动设备
 */
export async function GET() {
    try {
        const device = deviceManager.getCurrentDevice();

        if (!device) {
            return NextResponse.json(null);
        }

        return NextResponse.json({
            id: device.id,
            name: device.name,
            type: device.type,
            isConnected: device.isConnected,
            isMock: device.isMock,
        });
    } catch (error) {
        console.error('[API] Failed to get current device:', error);
        return NextResponse.json(
            { error: 'Failed to get current device', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/hardware/devices/current
 * 设置当前活动设备
 */
export async function POST(request: Request) {
    try {
        const { deviceId } = await request.json();

        if (!deviceId || typeof deviceId !== 'string') {
            return NextResponse.json(
                { error: 'Invalid device ID' },
                { status: 400 }
            );
        }

        await deviceManager.setCurrentDevice(deviceId);

        const device = deviceManager.getCurrentDevice();

        return NextResponse.json({
            id: device!.id,
            name: device!.name,
            type: device!.type,
            isConnected: device!.isConnected,
            isMock: device!.isMock,
        });
    } catch (error) {
        console.error('[API] Failed to set current device:', error);
        return NextResponse.json(
            { error: 'Failed to set current device', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
