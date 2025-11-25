import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * GET /api/hardware/devices
 * 获取所有已注册的设备列表
 */
export async function GET() {
    try {
        let devices = deviceManager.getDevices();

        // 如果列表为空，提供默认的 Mock 设备
        if (devices.length === 0) {
            console.log('[API] No devices found, providing default mock device');
            devices = [{
                id: 'cs2000-mock',
                name: 'CS-2000 Mock (模拟设备)',
                type: 'cs2000' as const,
                config: { portPath: 'MOCK', baudRate: 115200, mock: true },
                instance: null,
                isConnected: true,
                isMock: true,
            }];
        }

        // 只返回必要的信息，不包括实例
        const deviceList = devices.map(device => ({
            id: device.id,
            name: device.name,
            type: device.type,
            isConnected: device.isMock ? true : device.isConnected, // Mock 设备始终在线
            isMock: device.isMock,
        }));

        return NextResponse.json(deviceList);
    } catch (error) {
        console.error('[API] Failed to get devices:', error);
        // 发生错误时仍然返回 Mock 设备
        return NextResponse.json([{
            id: 'cs2000-mock',
            name: 'CS-2000 Mock (模拟设备)',
            type: 'cs2000',
            isConnected: true,
            isMock: true,
        }]);
    }
}
