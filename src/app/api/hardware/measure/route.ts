import { NextResponse } from 'next/server';
import { deviceManager } from '@/lib/hardware/DeviceManager';

/**
 * POST /api/hardware/measure
 * 使用当前设备执行测量
 * 
 * Body (可选):
 * {
 *   target?: { x: number, y: number, Y: number } // 目标值（用于模拟）
 * }
 */
export async function POST(request: Request) {
    try {
        // 尝试读取请求体中的目标值
        let targetHint = null;
        try {
            const body = await request.json();
            targetHint = body?.target;
        } catch {
            // 没有 body 或解析失败，忽略
        }

        // 先检查是否有当前设备
        const currentDevice = deviceManager.getCurrentDevice();

        // 如果没有当前设备或者当前设备是 Mock，直接返回模拟数据
        if (!currentDevice || currentDevice.isMock) {
            console.log('[API] Using mock measurement', targetHint ? `with target hint: ${JSON.stringify(targetHint)}` : '');

            // 模拟测量延迟
            await new Promise(r => setTimeout(r, 1000));

            // 生成模拟数据
            const mockData = generateMockData(targetHint);
            return NextResponse.json(mockData);
        }

        // 真实设备，调用 DeviceManager
        const data = await deviceManager.measureWithCurrentDevice();
        return NextResponse.json(data);
    } catch (error) {
        console.error('[API] Measurement failed:', error);
        return NextResponse.json(
            { error: 'Measurement failed', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

/**
 * 生成模拟测量数据
 * 如果提供了目标值，返回接近目标的值（带随机误差）
 * 否则返回 D65 白点数据
 */
function generateMockData(target?: { x?: number, y?: number, Y?: number }) {
    // 随机误差生成器（±1% 范围）
    const addNoise = (value: number, errorPercent: number = 0.01) => {
        const error = value * errorPercent * (Math.random() * 2 - 1);
        return Number((value + error).toFixed(4));
    };

    // 如果提供了目标值，在目标值附近生成数据
    if (target && (target.x !== undefined || target.y !== undefined || target.Y !== undefined)) {
        const x = target.x !== undefined ? addNoise(target.x, 0.005) : 0.3127;
        const y = target.y !== undefined ? addNoise(target.y, 0.005) : 0.3290;
        const Y = target.Y !== undefined ? addNoise(target.Y, 0.02) : 100.0;

        // 从 xy 和 Y 计算 XYZ
        const X = Y * (x / y);
        const Z = Y * ((1 - x - y) / y);

        // 计算 u'v'
        const denominator = X + 15 * Y + 3 * Z;
        const u_prime = (4 * X) / denominator;
        const v_prime = (9 * Y) / denominator;

        return {
            x: Number(x.toFixed(4)),
            y: Number(y.toFixed(4)),
            Lv: Number(Y.toFixed(2)),
            X: Number(X.toFixed(2)),
            Y: Number(Y.toFixed(2)),
            Z: Number(Z.toFixed(2)),
            u_prime: Number(u_prime.toFixed(4)),
            v_prime: Number(v_prime.toFixed(4)),
            T: 6500, // 色温暂时固定
            d_uv: addNoise(0, 0.002),
            lambda_d: 580,
            Pe: 0.1,
        };
    }

    // 默认返回 D65 白点数据（带小误差）
    return {
        x: addNoise(0.3127, 0.003),
        y: addNoise(0.3290, 0.003),
        Lv: addNoise(100.0, 0.02),
        X: addNoise(95.04, 0.02),
        Y: addNoise(100.00, 0.02),
        Z: addNoise(108.88, 0.02),
        u_prime: addNoise(0.1978, 0.003),
        v_prime: addNoise(0.4683, 0.003),
        T: 6500,
        d_uv: addNoise(0.0000, 0.002),
        lambda_d: 580,
        Pe: 0.1,
    };
}
