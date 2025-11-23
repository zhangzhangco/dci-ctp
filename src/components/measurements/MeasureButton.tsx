'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Activity } from 'lucide-react';
import { useMeasurementDevice } from '@/lib/hardware/MeasurementDeviceContext';
import { ColorimetricData } from '@/lib/hardware/cs2000';

interface MeasureButtonProps {
    onMeasured: (data: ColorimetricData) => void;
    disabled?: boolean;
    size?: 'default' | 'sm' | 'lg' | 'icon';
    variant?: 'default' | 'outline' | 'ghost' | 'secondary';
    className?: string;
}

/**
 * 通用测量按钮组件
 * 点击后触发设备测量并通过回调返回数据
 */
export function MeasureButton({
    onMeasured,
    disabled = false,
    size = 'sm',
    variant = 'outline',
    className = '',
}: MeasureButtonProps) {
    const { measure, isConnected } = useMeasurementDevice();
    const [isMeasuring, setIsMeasuring] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleMeasure = async () => {
        if (!isConnected) {
            setError('设备未连接');
            return;
        }

        setIsMeasuring(true);
        setError(null);

        try {
            const data = await measure();
            onMeasured(data);
        } catch (err: any) {
            console.error('测量失败:', err);
            setError(err?.message || '测量失败');
        } finally {
            setIsMeasuring(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-1">
            <Button
                type="button"
                size={size}
                variant={variant}
                onClick={handleMeasure}
                disabled={disabled || isMeasuring || !isConnected}
                className={className}
                title={!isConnected ? '设备未连接' : '点击测量'}
            >
                {isMeasuring ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="ml-1 hidden sm:inline">测量中...</span>
                    </>
                ) : (
                    <>
                        <Activity className="h-4 w-4" />
                        <span className="ml-1 hidden sm:inline">测量</span>
                    </>
                )}
            </Button>
            {error && (
                <span className="text-xs text-red-500">{error}</span>
            )}
        </div>
    );
}
