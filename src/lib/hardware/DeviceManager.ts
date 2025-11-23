import type { CS2000Config, ColorimetricData } from './cs2000';

// 动态导入 CS2000 以避免在客户端加载 serialport
async function loadCS2000() {
    // 只在 Node.js 环境中导入
    if (typeof window === 'undefined') {
        const { CS2000 } = await import('./cs2000');
        return CS2000;
    }
    // 在浏览器环境返回 null，使用 Mock 模式
    return null;
}

/**
 * 测量设备接口
 */
export interface MeasurementDevice {
    id: string;
    name: string;
    type: 'cs2000' | 'cs2000a' | 'other';
    config: CS2000Config;
    instance: any | null; // 改为 any 以支持动态导入
    isConnected: boolean;
    isMock: boolean;
}

/**
 * 设备管理器 - 管理所有测量设备
 */
export class DeviceManager {
    private devices: Map<string, MeasurementDevice> = new Map();
    private currentDeviceId: string | null = null;

    /**
     * 注册一个测量设备
     */
    registerDevice(device: Omit<MeasurementDevice, 'instance' | 'isConnected'>): void {
        this.devices.set(device.id, {
            ...device,
            instance: null,
            isConnected: false,
        });
    }

    /**
     * 获取所有已注册的设备
     */
    getDevices(): MeasurementDevice[] {
        return Array.from(this.devices.values());
    }

    /**
     * 获取指定设备
     */
    getDevice(id: string): MeasurementDevice | undefined {
        return this.devices.get(id);
    }

    /**
     * 获取当前活动设备
     */
    getCurrentDevice(): MeasurementDevice | null {
        if (!this.currentDeviceId) return null;
        return this.devices.get(this.currentDeviceId) || null;
    }

    /**
     * 设置当前活动设备
     */
    async setCurrentDevice(id: string): Promise<void> {
        const device = this.devices.get(id);
        if (!device) {
            throw new Error(`Device ${id} not found`);
        }

        // 断开之前的设备
        if (this.currentDeviceId && this.currentDeviceId !== id) {
            await this.disconnectDevice(this.currentDeviceId);
        }

        this.currentDeviceId = id;

        // 如果新设备未连接，则连接它
        if (!device.isConnected) {
            await this.connectDevice(id);
        }
    }

    /**
     * 连接指定设备
     */
    async connectDevice(id: string): Promise<void> {
        const device = this.devices.get(id);
        if (!device) {
            throw new Error(`Device ${id} not found`);
        }

        if (device.isConnected) {
            console.log(`[DeviceManager] Device ${id} already connected`);
            return;
        }

        try {
            // 动态加载 CS2000 类
            if (device.type === 'cs2000' || device.type === 'cs2000a') {
                const CS2000Class = await loadCS2000();
                if (CS2000Class) {
                    device.instance = new CS2000Class(device.config);
                    await device.instance.connect();
                    device.isConnected = true;
                    console.log(`[DeviceManager] Connected to ${device.name}`);
                } else {
                    // 浏览器环境，创建 Mock 实例
                    device.instance = {
                        connect: async () => { device.isConnected = true; },
                        disconnect: async () => { device.isConnected = false; },
                        isDeviceConnected: () => device.isConnected,
                        measure: async () => 2,
                        readColorimetricData: async () => ({
                            x: 0.3127,
                            y: 0.3290,
                            Lv: 100.0,
                            X: 95.04,
                            Y: 100.00,
                            Z: 108.88,
                            u_prime: 0.1978,
                            v_prime: 0.4683,
                            T: 6500,
                            d_uv: 0.0000,
                            lambda_d: 580,
                            Pe: 0.1,
                        }),
                    };
                    await device.instance.connect();
                    console.log(`[DeviceManager] Connected to ${device.name} (Browser Mock)`);
                }
            } else {
                throw new Error(`Unsupported device type: ${device.type}`);
            }
        } catch (error) {
            device.isConnected = false;
            device.instance = null;
            throw error;
        }
    }

    /**
     * 断开指定设备
     */
    async disconnectDevice(id: string): Promise<void> {
        const device = this.devices.get(id);
        if (!device) return;

        if (device.instance) {
            try {
                await device.instance.disconnect();
            } catch (error) {
                console.error(`[DeviceManager] Error disconnecting ${device.name}:`, error);
            }
            device.instance = null;
        }

        device.isConnected = false;
        console.log(`[DeviceManager] Disconnected from ${device.name}`);
    }

    /**
     * 检查设备连接状态（用于心跳检测）
     */
    async checkDeviceStatus(id: string): Promise<boolean> {
        const device = this.devices.get(id);
        if (!device || !device.instance) {
            return false;
        }

        try {
            // 对于 CS2000，检查连接状态
            const isConnected = device.instance.isDeviceConnected();
            device.isConnected = isConnected;
            return isConnected;
        } catch (error) {
            console.error(`[DeviceManager] Error checking status for ${device.name}:`, error);
            device.isConnected = false;
            return false;
        }
    }

    /**
     * 使用当前设备执行测量
     */
    async measureWithCurrentDevice(): Promise<ColorimetricData> {
        const device = this.getCurrentDevice();
        if (!device) {
            throw new Error('No device selected');
        }

        if (!device.instance) {
            throw new Error('Device not connected');
        }

        // 执行测量
        await device.instance.measure();

        // 读取数据
        return await device.instance.readColorimetricData();
    }

    /**
     * 断开所有设备
     */
    async disconnectAll(): Promise<void> {
        const disconnectPromises = Array.from(this.devices.keys()).map(id =>
            this.disconnectDevice(id)
        );
        await Promise.all(disconnectPromises);
        this.currentDeviceId = null;
    }
}

// 创建全局单例
export const deviceManager = new DeviceManager();

// 注册默认的 Mock 设备
deviceManager.registerDevice({
    id: 'cs2000-mock',
    name: 'CS-2000 Mock (模拟设备)',
    type: 'cs2000',
    config: {
        portPath: 'MOCK',
        baudRate: 115200,
        mock: true,
    },
    isMock: true,
});
