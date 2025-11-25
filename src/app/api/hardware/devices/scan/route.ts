import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * POST /api/hardware/devices/scan
 * 触发设备扫描
 */
export async function POST() {
    try {
        const devices = await deviceManager.scanForDevices();

        // Return simplified device info
        const safeDevices = devices.map(d => ({
            id: d.id,
            name: d.name,
            type: d.type,
            isConnected: d.isConnected,
            isMock: d.isMock
        }));

        return NextResponse.json(safeDevices);
    } catch (error) {
        console.error('[API] Scan failed:', error);
        // Fallback: return existing devices if scan fails
        const devices = deviceManager.getDevices();
        const safeDevices = devices.map(d => ({
            id: d.id,
            name: d.name,
            type: d.type,
            isConnected: d.isConnected,
            isMock: d.isMock
        }));
        return NextResponse.json(safeDevices);
    }
}
