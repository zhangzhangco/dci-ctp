import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * GET /api/hardware/devices
 * 获取所有已注册的设备列表
 */
export async function GET() {
    try {
        const devices = deviceManager.getDevices();

        // 只返回必要的信息，不包括实例
        const deviceList = devices.map(device => ({
            id: device.id,
            name: device.name,
            type: device.type,
            isConnected: device.isConnected,
            isMock: device.isMock,
        }));

        return NextResponse.json(deviceList);
    } catch (error) {
        console.error('[API] Failed to get devices:', error);
        return NextResponse.json(
            { error: 'Failed to get devices', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
