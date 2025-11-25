/**
 * 硬件设备 API 客户端
 * 用于从客户端组件与服务端硬件管理器通信
 */

import type { ColorimetricData } from './cs2000/types';

export interface MeasurementDeviceInfo {
    id: string;
    name: string;
    type: string;
    isConnected: boolean;
    isMock: boolean;
}

export class HardwareApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = '/api/hardware') {
        this.baseUrl = baseUrl;
    }

    /**
     * 获取所有设备列表
     */
    async getDevices(): Promise<MeasurementDeviceInfo[]> {
        const response = await fetch(`${this.baseUrl}/devices`);
        if (!response.ok) {
            throw new Error('Failed to fetch devices');
        }
        return response.json();
    }

    /**
     * 获取当前活动设备
     */
    async getCurrentDevice(): Promise<MeasurementDeviceInfo | null> {
        const response = await fetch(`${this.baseUrl}/devices/current`);
        if (!response.ok) {
            throw new Error('Failed to fetch current device');
        }
        return response.json();
    }

    /**
     * 选择并连接设备
     */
    async selectDevice(deviceId: string): Promise<void> {
        const response = await fetch(`${this.baseUrl}/devices/current`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ deviceId }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to select device');
        }
    }

    /**
     * 执行测量
     */
    async measure(): Promise<ColorimetricData> {
        const response = await fetch(`${this.baseUrl}/measure`, {
            method: 'POST',
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Measurement failed');
        }

        return response.json();
    }

    /**
     * 检查设备状态
     */
    async checkDeviceStatus(deviceId: string): Promise<boolean> {
        const response = await fetch(`${this.baseUrl}/devices/${deviceId}/status`);
        if (!response.ok) {
            return false;
        }
        const result = await response.json();
        return result.isConnected;
    }
}

// 导出单例
export const hardwareApi = new HardwareApiClient();
