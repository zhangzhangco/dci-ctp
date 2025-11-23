'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { hardwareApi, MeasurementDeviceInfo } from './api-client';
import { ColorimetricData } from './cs2000';

interface MeasurementDeviceContextType {
    devices: MeasurementDeviceInfo[];
    currentDevice: MeasurementDeviceInfo | null;
    isConnected: boolean;
    selectDevice: (deviceId: string) => Promise<void>;
    measure: () => Promise<ColorimetricData>;
    refreshDevices: () => Promise<void>;
}

const MeasurementDeviceContext = createContext<MeasurementDeviceContextType | null>(null);

interface MeasurementDeviceProviderProps {
    children: ReactNode;
}

export function MeasurementDeviceProvider({ children }: MeasurementDeviceProviderProps) {
    const [devices, setDevices] = useState<MeasurementDeviceInfo[]>([]);
    const [currentDevice, setCurrentDevice] = useState<MeasurementDeviceInfo | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    // 刷新设备列表
    const refreshDevices = useCallback(async () => {
        try {
            const allDevices = await hardwareApi.getDevices();
            setDevices([...allDevices]);

            const current = await hardwareApi.getCurrentDevice();
            setCurrentDevice(current);
            setIsConnected(current?.isConnected || false);
        } catch (error) {
            console.error('Failed to refresh devices:', error);
        }
    }, []);

    // 选择设备
    const selectDevice = useCallback(async (deviceId: string) => {
        try {
            await hardwareApi.selectDevice(deviceId);
            await refreshDevices();
        } catch (error) {
            console.error('Failed to select device:', error);
            throw error;
        }
    }, [refreshDevices]);

    // 执行测量
    const measure = useCallback(async (): Promise<ColorimetricData> => {
        try {
            const data = await hardwareApi.measure();
            return data;
        } catch (error) {
            console.error('Measurement failed:', error);
            throw error;
        }
    }, []);

    // 初始化：加载设备列表并选择默认设备
    useEffect(() => {
        refreshDevices().then(() => {
            // 自动连接 Mock 设备 (Check if it exists in the fetched list)
            // We can't access 'devices' state immediately here as it's a closure, 
            // but we can fetch again or just try to select.
            // Better to just try selecting if we know we want it.
            // Or check the list from API.
            hardwareApi.getDevices().then(devs => {
                const mockDevice = devs.find(d => d.id === 'cs2000-mock');
                if (mockDevice) {
                    selectDevice('cs2000-mock').catch(err => {
                        console.error('Failed to connect to mock device:', err);
                    });
                }
            });
        });
    }, [refreshDevices, selectDevice]);

    // 心跳检测：每 5 秒检查一次设备状态
    useEffect(() => {
        const heartbeatInterval = setInterval(async () => {
            if (currentDevice) {
                try {
                    const status = await hardwareApi.checkDeviceStatus(currentDevice.id);
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

    // 组件卸载时断开所有设备 - Client shouldn't force disconnect server devices usually, 
    // unless we have a specific 'release' API. hardwareApi doesn't have disconnectAll.
    // Removing this for now.

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
