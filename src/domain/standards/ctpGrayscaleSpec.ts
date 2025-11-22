// DCI CTP 7.5.11 SDR Transfer Function 测试数据
// 
// 重要说明:
// 1. SMPTE RP 431-2 Tables A.2/A.3 给出的是**绝对亮度值**(包含黑电平 0.024 cd/m²)
// 2. DCI CTP 7.5.11 要求先测量黑电平,然后从测量值中**减去黑电平**后再验证
// 3. 本文件中的 nominalLuminance 是 **"above screen black level"** 的值
// 4. 容差来自 DCI CTP Tables 7.5.11(a) 和 (b)

export type GrayscaleTestType = 'white-steps' | 'gray-steps';

export interface GrayscaleStepSpec {
    stepNumber: number;
    // Code Values (SMPTE 431-2 标准测试图案)
    codeX: number;  // X' channel
    codeY: number;  // Y' channel  
    codeZ: number;  // Z' channel
    // SMPTE 431-2 参考值(包含黑电平)
    smpteLuminance: number; // cd/m² (includes 0.024 cd/m² black level)
    smpteX: number;  // Chromaticity x
    smpteY: number;  // Chromaticity y
    // DCI CTP 验收标准(减去黑电平后)
    nominalLuminance: number; // cd/m² (above screen black level)
    tolerance: number; // as percentage (e.g., 0.05 for ±5%)
}

// Table 7.5.11(a): Black-to-white gray step-scale test pattern
// 参考: DCI CTP §7.5.11, SMPTE RP 431-2 Table A.2
export const WHITE_STEPS_SPEC: GrayscaleStepSpec[] = [
    { stepNumber: 1, codeX: 379, codeY: 396, codeZ: 389, smpteLuminance: 0.14, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.121, tolerance: 0.05 },
    { stepNumber: 2, codeX: 759, codeY: 792, codeZ: 778, smpteLuminance: 0.75, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.731, tolerance: 0.05 },
    { stepNumber: 3, codeX: 1138, codeY: 1188, codeZ: 1167, smpteLuminance: 2.12, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 2.098, tolerance: 0.03 },
    { stepNumber: 4, codeX: 1518, codeY: 1584, codeZ: 1556, smpteLuminance: 4.45, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 4.432, tolerance: 0.03 },
    { stepNumber: 5, codeX: 1897, codeY: 1980, codeZ: 1945, smpteLuminance: 7.94, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 7.917, tolerance: 0.03 },
    { stepNumber: 6, codeX: 2276, codeY: 2376, codeZ: 2334, smpteLuminance: 12.74, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 12.718, tolerance: 0.03 },
    { stepNumber: 7, codeX: 2656, codeY: 2772, codeZ: 2723, smpteLuminance: 19.01, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 18.988, tolerance: 0.03 },
    { stepNumber: 8, codeX: 3035, codeY: 3168, codeZ: 3112, smpteLuminance: 26.89, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 26.870, tolerance: 0.03 },
    { stepNumber: 9, codeX: 3415, codeY: 3564, codeZ: 3501, smpteLuminance: 36.52, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 36.497, tolerance: 0.03 },
    { stepNumber: 10, codeX: 3794, codeY: 3960, codeZ: 3890, smpteLuminance: 48.02, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 47.999, tolerance: 0.03 },
];

// Table 7.5.11(b): Black-to-dark gray step-scale test pattern
// 参考: DCI CTP §7.5.11, SMPTE RP 431-2 Table A.3
export const GRAY_STEPS_SPEC: GrayscaleStepSpec[] = [
    { stepNumber: 1, codeX: 122, codeY: 128, codeZ: 125, smpteLuminance: 0.030, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.006, tolerance: 0.20 },
    { stepNumber: 2, codeX: 245, codeY: 255, codeZ: 251, smpteLuminance: 0.063, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.038, tolerance: 0.05 },
    { stepNumber: 3, codeX: 367, codeY: 383, codeZ: 376, smpteLuminance: 0.135, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.111, tolerance: 0.05 },
    { stepNumber: 4, codeX: 490, codeY: 511, codeZ: 502, smpteLuminance: 0.254, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.234, tolerance: 0.05 },
    { stepNumber: 5, codeX: 612, codeY: 639, codeZ: 627, smpteLuminance: 0.442, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.418, tolerance: 0.05 },
    { stepNumber: 6, codeX: 734, codeY: 766, codeZ: 753, smpteLuminance: 0.695, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 0.670, tolerance: 0.05 },
    { stepNumber: 7, codeX: 857, codeY: 894, codeZ: 878, smpteLuminance: 1.026, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 1.002, tolerance: 0.03 },
    { stepNumber: 8, codeX: 979, codeY: 1022, codeZ: 1004, smpteLuminance: 1.442, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 1.418, tolerance: 0.03 },
    { stepNumber: 9, codeX: 1101, codeY: 1150, codeZ: 1129, smpteLuminance: 1.950, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 1.928, tolerance: 0.03 },
    { stepNumber: 10, codeX: 1224, codeY: 1277, codeZ: 1255, smpteLuminance: 2.557, smpteX: 0.314, smpteY: 0.351, nominalLuminance: 2.531, tolerance: 0.03 },
];

export function getTestSpec(testType: GrayscaleTestType): GrayscaleStepSpec[] {
    return testType === 'white-steps' ? WHITE_STEPS_SPEC : GRAY_STEPS_SPEC;
}

export function getTestName(testType: GrayscaleTestType): string {
    return testType === 'white-steps'
        ? 'DCI White Steps (Black-to-White)'
        : 'DCI Gray Steps (Black-to-Dark Gray)';
}

export function getTableReference(testType: GrayscaleTestType): string {
    return testType === 'white-steps'
        ? 'DCI CTP Table 7.5.11(a) / SMPTE 431-2 Table A.2'
        : 'DCI CTP Table 7.5.11(b) / SMPTE 431-2 Table A.3';
}

export function getCodeValueReference(testType: GrayscaleTestType): string {
    return testType === 'white-steps'
        ? 'SMPTE 431-2 Table A.2 Code Values (X\'Y\'Z\' @ 0.314x, 0.351y white point)'
        : 'SMPTE 431-2 Table A.3 Code Values (X\'Y\'Z\' @ 0.314x, 0.351y white point)';
}

/**
 * 验证测量值是否在容差范围内
 * @param measured 测量的亮度值 (已减去黑电平)
 * @param nominal 标称值 (above black level)
 * @param tolerance 容差 (0.05 = ±5%)
 */
export function isWithinTolerance(
    measured: number,
    nominal: number,
    tolerance: number
): boolean {
    const lowerBound = nominal * (1 - tolerance);
    const upperBound = nominal * (1 + tolerance);
    return measured >= lowerBound && measured <= upperBound;
}

/**
 * 计算偏差百分比
 */
export function calculateDeviation(measured: number, nominal: number): number {
    return ((measured - nominal) / nominal) * 100;
}

/**
 * 获取容差说明
 */
export function getToleranceNote(testType: GrayscaleTestType): string {
    return testType === 'white-steps'
        ? '容差范围: Step 1-2 为 ±5%, Step 3-10 为 ±3% (来自 DCI CTP Table 7.5.11(a))'
        : '容差范围: Step 1 为 ±20%, Step 2-6 为 ±5%, Step 7-10 为 ±3% (来自 DCI CTP Table 7.5.11(b))';
}
