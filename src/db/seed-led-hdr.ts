import { db } from './index';
import {
    devices, testSessions, measurementsBasic, measurementsGrayscale,
    measurementsColor, measurementsUniformity, measurementsIntraContrast,
    measurementsPixelCount, measurementsPixelStructure, measurementsContouring,
    measurementsSubPixel, measurementsUpscaling, measurementsInactiveArea,
    testResults, testDefinitions, normativeClauses, standardAuthorities,
    testDefinitionClauses
} from './schema';
import { sql } from 'drizzle-orm';

/**
 * 清除所有数据库表数据
 */
async function clearDatabase() {
    console.log('🧹 Clearing database...');

    // 按依赖顺序反向删除
    await db.delete(testResults);

    // Measurements
    await db.delete(measurementsUpscaling);
    await db.delete(measurementsSubPixel);
    await db.delete(measurementsContouring);
    await db.delete(measurementsPixelCount);
    await db.delete(measurementsInactiveArea);
    await db.delete(measurementsIntraContrast);
    await db.delete(measurementsPixelStructure);
    await db.delete(measurementsBasic);
    await db.delete(measurementsUniformity);
    await db.delete(measurementsColor);
    await db.delete(measurementsGrayscale);

    // Core
    await db.delete(testSessions);
    await db.delete(devices);

    // Standards (Optional, usually static but clearing for clean slate if needed)
    // await db.delete(testDefinitionClauses);
    // await db.delete(testDefinitions);
    // await db.delete(normativeClauses);
    // await db.delete(standardAuthorities);

    console.log('✨ Database cleared.');
}

/**
 * 生成 LED HDR 模拟数据
 */
async function seedLedHdr() {
    await clearDatabase();

    console.log('🌱 Seeding LED HDR data...');

    // 1. 创建 LED 设备
    const [device] = await db.insert(devices).values({
        manufacturer: 'Samsung',
        model: 'Onyx Cinema LED',
        type: 'direct_view',
        serialNumber: 'LED-HDR-2025-001',
        description: 'High Dynamic Range Direct View Display',
    }).returning();
    console.log(`✓ Created Device: ${device.manufacturer} ${device.model}`);

    // 2. 创建 HDR 测试会话
    const [session] = await db.insert(testSessions).values({
        deviceId: device.id,
        phase: 2, // System Test
        standard: 'hdr',
        date: new Date().toISOString().split('T')[0],
        operator: 'System Admin',
        location: 'Main Theater',
        notes: 'Full HDR Compliance Test Simulation',
    }).returning();
    console.log(`✓ Created Session: ${session.id} (HDR)`);

    // 3. Measurements

    // 3.1 Basic Measurements (Peak White & Black Level)
    // LED usually has very high contrast, perfect black
    await db.insert(measurementsBasic).values([
        {
            sessionId: session.id,
            type: 'hdr_peak_white',
            measuredL: 305.5, // ~300 nits for HDR often used in cinema context or higher
            measuredX: 0.3127,
            measuredY: 0.3290,
            notes: 'Target 300 nits',
        },
        {
            sessionId: session.id,
            type: 'hdr_black_level',
            measuredL: 0.0001, // Near perfect black
            notes: 'Below measurement threshold',
        }
    ]);
    console.log('✓ Added Basic Measurements');

    // 3.2 Grayscale (HDR PQ Curve simulation)
    // Generating a few steps to simulate PQ tracking
    const pqSteps = [
        { step: 0, target: 0.0001 },
        { step: 128, target: 0.05 },
        { step: 256, target: 1.0 },
        { step: 384, target: 5.0 },
        { step: 512, target: 20.0 }, // Mid gray area
        { step: 640, target: 50.0 },
        { step: 768, target: 100.0 },
        { step: 896, target: 200.0 },
        { step: 1023, target: 300.0 }, // Peak
    ];

    for (const s of pqSteps) {
        await db.insert(measurementsGrayscale).values({
            sessionId: session.id,
            stepIndex: s.step,
            standard: 'hdr',
            bitDepth: 10,
            measuredL: s.target * (1 + (Math.random() * 0.02 - 0.01)), // +/- 1% error
            measuredX: 0.3127 + (Math.random() * 0.002 - 0.001),
            measuredY: 0.3290 + (Math.random() * 0.002 - 0.001),
            targetL: s.target,
            targetX: 0.3127,
            targetY: 0.3290,
            errorE: Math.random() * 0.5,
        });
    }
    console.log(`✓ Added ${pqSteps.length} Grayscale Points`);

    // 3.3 Color Accuracy (Rec.2020 / P3 targets)
    const colors = [
        { name: 'Red', type: 'primary', tx: 0.680, ty: 0.320 },
        { name: 'Green', type: 'primary', tx: 0.265, ty: 0.690 },
        { name: 'Blue', type: 'primary', tx: 0.150, ty: 0.060 },
        { name: 'White', type: 'primary', tx: 0.3127, ty: 0.3290 },
    ];

    for (const c of colors) {
        await db.insert(measurementsColor).values({
            sessionId: session.id,
            colorName: c.name,
            standard: 'hdr',
            type: c.type,
            targetX: c.tx,
            targetY: c.ty,
            targetL: c.name === 'White' ? 300 : 50, // Simplified target L
            measuredX: c.tx + (Math.random() * 0.004 - 0.002),
            measuredY: c.ty + (Math.random() * 0.004 - 0.002),
            measuredL: c.name === 'White' ? 305 : 52,
            deltaE: Math.random() * 2.0,
        });
    }
    console.log('✓ Added Color Accuracy Data');

    // 3.4 Uniformity
    const positions = ['Center', 'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'];
    for (const pos of positions) {
        await db.insert(measurementsUniformity).values({
            sessionId: session.id,
            standard: 'hdr',
            position: pos,
            measuredL: 300 * (1 + (Math.random() * 0.05 - 0.025)), // +/- 2.5% uniformity
            measuredX: 0.3127,
            measuredY: 0.3290,
        });
    }
    console.log('✓ Added Uniformity Data');

    // 3.5 Intra-Frame Contrast
    await db.insert(measurementsIntraContrast).values({
        sessionId: session.id,
        standard: 'hdr',
        whiteL: 300.1, whiteR: 299.8, whiteT: 300.5, whiteB: 299.2,
        blackL: 0.0001, blackR: 0.0001, blackT: 0.0002, blackB: 0.0001,
        contrastRatio: 2000000, // Very high for LED
        pass: true,
        notes: 'Excellent contrast',
    });
    console.log('✓ Added Intra-Frame Contrast');

    // 3.6 Pixel Count
    await db.insert(measurementsPixelCount).values({
        sessionId: session.id,
        patternType: 'full_raster',
        pixelBlockComplete: true,
        noCropping: true,
        noScaling: true,
        horizontalPixels: 4096,
        verticalPixels: 2160,
        pass: true,
    });
    console.log('✓ Added Pixel Count');

    // 3.7 Pixel Structure
    await db.insert(measurementsPixelStructure).values({
        sessionId: session.id,
        fillFactorCheck: true,
        pixelPitchCheck: true,
        subPixelStructureCheck: true,
        visualArtifactsCheck: true,
        notes: 'RGB LED structure verified',
    });
    console.log('✓ Added Pixel Structure');

    // 3.8 Contouring
    await db.insert(measurementsContouring).values({
        sessionId: session.id,
        standard: 'hdr',
        monotonicityPass: true,
        visualCheckPass: true,
        pass: true,
        notes: '12-bit smooth gradients',
    });
    console.log('✓ Added Contouring');

    // 3.9 Sub-Pixel
    await db.insert(measurementsSubPixel).values({
        sessionId: session.id,
        horizontalLinesPass: true,
        verticalLinesPass: true,
        noColorFringing: true,
        pass: true,
    });
    console.log('✓ Added Sub-Pixel Alignment');

    // 3.10 Upscaling
    await db.insert(measurementsUpscaling).values({
        sessionId: session.id,
        noJaggies: true,
        noRinging: true,
        noAliasing: true,
        pass: true,
        notes: 'Internal scaling engine performance good',
    });
    console.log('✓ Added Upscaling');

    // 3.11 Inactive Area
    await db.insert(measurementsInactiveArea).values({
        sessionId: session.id,
        topBorderCheck: true,
        bottomBorderCheck: true,
        leftBorderCheck: true,
        rightBorderCheck: true,
        measuredLuminance: 0.0001,
        pass: true,
        notes: 'Bezel-less design',
    });
    console.log('✓ Added Inactive Area');

    console.log('✅ LED HDR Seed Completed Successfully!');
}

seedLedHdr().catch((err) => {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
});
