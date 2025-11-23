'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { deviceManager, MeasurementDevice } from './DeviceManager';
import { ColorimetricData } from './cs2000';

interface MeasurementDeviceContextType {
    devices: MeasurementDevice[];
    currentDevice: MeasurementDevice | null;
    isConnected: boolean;
    selectDevice: (deviceId: string) => Promise<void>;
    measure: () => Promise<ColorimetricData>;
    refreshDevices: () => void;
}

const MeasurementDeviceContext = createContext<MeasurementDeviceContextType | null>(null);

interface MeasurementDeviceProviderProps {
    children: ReactNode;
}

export function MeasurementDeviceProvider({ children }: MeasurementDeviceProviderProps) {
    const [devices, setDevices] = useState<MeasurementDevice[]>([]);
    const [currentDevice, setCurrentDevice] = useState<MeasurementDevice | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    // 刷新设备列表
    const refreshDevices = useCallback(() => {
        const allDevices = deviceManager.getDevices();
        setDevices([...allDevices]);

        const current = deviceManager.getCurrentDevice();
        setCurrentDevice(current);
        setIsConnected(current?.isConnected || false);
    }, []);

    // 选择设备
    const selectDevice = useCallback(async (deviceId: string) => {
        try {
            await deviceManager.setCurrentDevice(deviceId);
            refreshDevices();
        } catch (error) {
            console.error('Failed to select device:', error);
            throw error;
        }
    }, [refreshDevices]);

    // 执行测量
    const measure = useCallback(async (): Promise<ColorimetricData> => {
        try {
            const data = await deviceManager.measureWithCurrentDevice();
            return data;
        } catch (error) {
            console.error('Measurement failed:', error);
            throw error;
        }
    }, []);

    // 初始化：加载设备列表并选择默认设备
    useEffect(() => {
        refreshDevices();

        // 自动连接 Mock 设备
        const mockDevice = deviceManager.getDevice('cs2000-mock');
        if (mockDevice) {
            selectDevice('cs2000-mock').catch(err => {
                console.error('Failed to connect to mock device:', err);
            });
        }
    }, [refreshDevices, selectDevice]);

    // 心跳检测：每 5 秒检查一次设备状态
    useEffect(() => {
        const heartbeatInterval = setInterval(async () => {
            if (currentDevice) {
                try {
                    const status = await deviceManager.checkDeviceStatus(currentDevice.id);
                    if (status !== isConnected) {
                        refreshDevices();
                    }
                } catch (error) {
                    // 忽略心跳错误
                }
            }
        }, 5000); // 每 5 秒

        return () => clearInterval(heartbeatInterval);
    }, [currentDevice, isConnected, refreshDevices]);

    // 组件卸载时断开所有设备
    useEffect(() => {
        return () => {
            deviceManager.disconnectAll().catch(err => {
                console.error('Failed to disconnect devices on unmount:', err);
            });
        };
    }, []);

    const value: MeasurementDeviceContextType = {
        devices,
        currentDevice,
        isConnected,
        selectDevice,
        measure,
        refreshDevices,
    };

    return (
        <MeasurementDeviceContext.Provider value={value}>
            {children}
        </MeasurementDeviceContext.Provider>
    );
}

/**
 * Hook to use measurement device context
 */
export function useMeasurementDevice(): MeasurementDeviceContextType {
    const context = useContext(MeasurementDeviceContext);
    if (!context) {
        throw new Error('useMeasurementDevice must be used within MeasurementDeviceProvider');
    }
    return context;
}
