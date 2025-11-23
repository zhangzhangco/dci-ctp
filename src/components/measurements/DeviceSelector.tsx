'use client';

import React from 'react';
import { useMeasurementDevice } from '@/lib/hardware/MeasurementDeviceContext';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Circle } from 'lucide-react';

export function DeviceSelector() {
    const { devices, currentDevice, isConnected, selectDevice } = useMeasurementDevice();

    const handleDeviceChange = async (deviceId: string) => {
        try {
            await selectDevice(deviceId);
        } catch (error) {
            console.error('Failed to change device:', error);
        }
    };

    // 状态颜色
    const getStatusColor = () => {
        if (!currentDevice) return 'text-gray-400';
        if (!isConnected) return 'text-red-500';
        return 'text-green-500';
    };

    const getStatusText = () => {
        if (!currentDevice) return '未选择设备';
        if (!isConnected) return '设备离线';
        return '设备在线';
    };

    return (
        <div className="flex items-center gap-3">
            {/* 状态指示器 */}
            <div className="flex items-center gap-2">
                <Circle className={`h-3 w-3 fill-current ${getStatusColor()}`} />
                <span className="text-sm text-muted-foreground hidden sm:inline">
                    {getStatusText()}
                </span>
            </div>

            {/* 设备选择下拉菜单 */}
            <Select
                value={currentDevice?.id || ''}
                onValueChange={handleDeviceChange}
            >
                <SelectTrigger className="w-[200px] sm:w-[250px]">
                    <SelectValue placeholder="选择测量设备" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>测量设备</SelectLabel>
                        {devices.map((device) => (
                            <SelectItem key={device.id} value={device.id}>
                                <div className="flex items-center gap-2">
                                    <Circle
                                        className={`h-2 w-2 fill-current ${device.isConnected ? 'text-green-500' : 'text-gray-400'
                                            }`}
                                    />
                                    <span>{device.name}</span>
                                    {device.isMock && (
                                        <span className="text-xs text-muted-foreground">(模拟)</span>
                                    )}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
