import { db } from './index';
import { devices, testSessions, measurementsBasic, measurementsGrayscale } from './schema';
import { CS2000 } from '@/lib/hardware/cs2000';

/**
 * 创建演示数据脚本
 * 使用 Mock CS2000 设备生成完整的测试数据
 */
async function seedDemo() {
    console.log('Creating demo session with mock CS2000 data...');

    // 1. 创建 Mock 设备记录
    const [device] = await db.insert(devices).values({
        manufacturer: 'Konica Minolta',
        model: 'CS-2000 (Mock Simulator)',
        serialNumber: 'MOCK-DEMO-001',
        description: '模拟设备用于演示和测试',
    }).returning();

    console.log(`✓ Created device: ${device.manufacturer} ${device.model}`);

    // 2. 创建测试 Session (Phase 1)
    const [session] = await db.insert(testSessions).values({
        deviceId: device.id,
        phase: 1,
        date: new Date().toISOString().split('T')[0],
        operator: 'Demo User',
        location: 'Demo Lab',
        notes: '使用 Mock 设备自动生成的演示数据',
    }).returning();

    console.log(`✓ Created test session ID: ${session.id} (Phase ${session.phase})`);

    // 3. 使用 Mock CS2000 设备生成测量数据
    const cs2000 = new CS2000({ portPath: 'MOCK', mock: true });
    await cs2000.connect();

    console.log('✓ Connected to mock CS2000 device');

    // 4. 生成基础测量数据 (Peak White & Black Level)
    console.log('\\nGenerating basic measurements...');

    // Peak White
    await cs2000.measure();
    const peakWhiteData = await cs2000.readColorimetricData();
    await db.insert(measurementsBasic).values({
        sessionId: session.id,
        type: 'sdr_peak_white',
        measuredL: peakWhiteData.Lv,
        measuredX: peakWhiteData.x,
        measuredY: peakWhiteData.y,
        notes: 'SDR Peak White - Auto generated',
    });
    console.log(`  ✓ Peak White: ${peakWhiteData.Lv.toFixed(2)} cd/m², x=${peakWhiteData.x.toFixed(4)}, y=${peakWhiteData.y.toFixed(4)}`);

    // Black Level (模拟低亮度值)
    const blackLevelData = {
        ...peakWhiteData,
        Lv: 0.02, // 典型黑位值
    };
    await db.insert(measurementsBasic).values({
        sessionId: session.id,
        type: 'sdr_black_level',
        measuredL: blackLevelData.Lv,
        notes: 'SDR Black Level - Auto generated',
    });
    console.log(`  ✓ Black Level: ${blackLevelData.Lv.toFixed(3)} cd/m²`);

    // 5. 生成灰阶测量数据 (White Steps)
    console.log('\\nGenerating grayscale measurements (White Steps)...');

    // 典型的 SDR 灰阶测试点
    const whiteSteps = [
        { name: '5%', targetL: 2.6 },
        { name: '10%', targetL: 6.2 },
        { name: '20%', targetL: 14.4 },
        { name: '30%', targetL: 23.6 },
        { name: '40%', targetL: 33.4 },
        { name: '50%', targetL: 43.6 },
        { name: '60%', targetL: 54.2 },
        { name: '70%', targetL: 65.1 },
        { name: '80%', targetL: 76.3 },
        { name: '90%', targetL: 87.7 },
        { name: '95%', targetL: 93.5 },
        { name: '100%', targetL: 48.0 },
    ];

    for (const step of whiteSteps) {
        // 添加小的随机误差使数据更真实
        const variance = (Math.random() - 0.5) * 0.5;  // ±0.25 cd/m²
        const measuredL = step.targetL + variance;

        await db.insert(measurementsGrayscale).values({
            sessionId: session.id,
            stepIndex: whiteSteps.indexOf(step),
            bitDepth: 12,
            measuredL: measuredL,
            measuredX: peakWhiteData.x,
            measuredY: peakWhiteData.y,
            targetL: step.targetL,
            targetX: peakWhiteData.x,
            targetY: peakWhiteData.y,
        });
    }
    console.log(`  ✓ Generated ${whiteSteps.length} white step measurements`);

    // 6. 生成更多灰阶测量数据 (Gray Steps)
    console.log('\\nGenerating grayscale measurements (Gray Steps)...');

    const graySteps = [
        { name: 'Gray 10%', targetL: 6.2 },
        { name: 'Gray 18%', targetL: 12.8 },
        { name: 'Gray 25%', targetL: 18.5 },
        { name: 'Gray 50%', targetL: 43.6 },
        { name: 'Gray 75%', targetL: 70.2 },
        { name: 'Gray 90%', targetL: 87.7 },
    ];

    for (const step of graySteps) {
        const variance = (Math.random() - 0.5) * 0.5;
        const measuredL = step.targetL + variance;

        await db.insert(measurementsGrayscale).values({
            sessionId: session.id,
            stepIndex: 100 + graySteps.indexOf(step), // Offset to differentiate from white steps
            bitDepth: 12,
            measuredL: measuredL,
            measuredX: peakWhiteData.x,
            measuredY: peakWhiteData.y,
            targetL: step.targetL,
            targetX: peakWhiteData.x,
            targetY: peakWhiteData.y,
        });
    }
    console.log(`  ✓ Generated ${graySteps.length} gray step measurements`);

    // 断开设备
    await cs2000.disconnect();
    console.log('\\n✓ Disconnected from mock device');

    console.log('\\n=================================================');
    console.log('Demo session created successfully!');
    console.log('=================================================');
    console.log(`Session ID: ${session.id}`);
    console.log(`Device: ${device.manufacturer} ${device.model}`);
    console.log(`Phase: ${session.phase}`);
    console.log(`Date: ${session.date}`);
    console.log('');
    console.log('Generated data:');
    console.log(`  - 2 basic measurements (peak white + black level)`);
    console.log(`  - ${whiteSteps.length} white step measurements`);
    console.log(`  - ${graySteps.length} gray step measurements`);
    console.log('');
    console.log('You can now view this demo session in the application!');
    console.log('=================================================');
}

seedDemo().catch((err) => {
    console.error('❌ Demo seeding failed:', err);
    process.exit(1);
});
