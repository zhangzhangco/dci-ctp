import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * GET /api/hardware/devices/current
 * 获取当前活动设备
 */
export async function GET() {
    try {
        const device = deviceManager.getCurrentDevice();

        // 如果没有当前设备，返回默认的 Mock 设备
        if (!device) {
            console.log('[API] No current device, returning mock device');
            return NextResponse.json({
                id: 'cs2000-mock',
                name: 'CS-2000 Mock (模拟设备)',
                type: 'cs2000',
                isConnected: true,
                isMock: true,
            });
        }

        return NextResponse.json({
            id: device.id,
            name: device.name,
            type: device.type,
            isConnected: device.isMock ? true : device.isConnected, // Mock 设备始终在线
            isMock: device.isMock,
        });
    } catch (error) {
        console.error('[API] Failed to get current device:', error);
        // 发生错误时返回 Mock 设备
        return NextResponse.json({
            id: 'cs2000-mock',
            name: 'CS-2000 Mock (模拟设备)',
            type: 'cs2000',
            isConnected: true,
            isMock: true,
        });
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

        // 如果是 Mock 设备，直接返回成功
        if (deviceId === 'cs2000-mock') {
            console.log('[API] Selected mock device');
            return NextResponse.json({
                id: 'cs2000-mock',
                name: 'CS-2000 Mock (模拟设备)',
                type: 'cs2000',
                isConnected: true,
                isMock: true,
            });
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
