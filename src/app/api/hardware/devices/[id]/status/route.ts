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
        console.log(`[API] Checking status for device: ${id}`);

        // Mock 设备始终在线
        if (id === 'cs2000-mock') {
            console.log(`[API] Mock device is always online`);
            return NextResponse.json({ isConnected: true });
        }

        const device = deviceManager.getDevice(id);
        if (!device) {
            console.log(`[API] Device ${id} not found`);
            return NextResponse.json({ isConnected: false });
        }

        console.log(`[API] Device ${id} found, isMock: ${device.isMock}, isConnected: ${device.isConnected}`);

        const isConnected = await deviceManager.checkDeviceStatus(id);

        console.log(`[API] Status check result for ${id}: ${isConnected}`);

        return NextResponse.json({ isConnected });
    } catch (error) {
        console.error('[API] Failed to check device status:', error);
        // Return false instead of error to avoid breaking the UI
        return NextResponse.json({ isConnected: false });
    }
}
