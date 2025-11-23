// DCI CTP 7.5.11 SDR Transfer Function 测试数据
// 
// 重要说明:
// 1. SMPTE RP 431-2 Tables A.2/A.3 给出的是**绝对亮度值**(包含黑电平 0.024 cd/m²)
// 2. DCI CTP 7.5.11 要求先测量黑电平,然后从测量值中**减去黑电平**后再验证
// 3. 本文件中的 nominalLuminance 是 **"above screen black level"** 的值
// 4. 容差来自 DCI CTP Tables 7.5.11(a) 和 (b)

export type GrayscaleTestType = 'white-steps' | 'gray-steps' | 'hdr-eotf';

export interface GrayscaleStepSpec {
    stepNumber: number;
    // Code Values (SMPTE 431-2 / HDR Addendum)
    codeX: number;  // X' channel
    codeY: number;  // Y' channel  
    codeZ: number;  // Z' channel
    // 参考值
    smpteLuminance?: number; // SDR only
    smpteX?: number;
    smpteY?: number;
    // DCI CTP 验收标准
    nominalLuminance: number; // cd/m² (SDR: above black; HDR: absolute)
    tolerance: number; // as percentage (e.g., 0.05 for ±5%) - For SDR fixed per table
}

// Table 7.5.11(a): Black-to-white gray step-scale test pattern
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

// HDR Addendum Table 8: Black-To-Dark Gray
const HDR_DARK_STEPS: GrayscaleStepSpec[] = [
    { stepNumber: 1, codeX: 60, codeY: 62, codeZ: 65, nominalLuminance: 0.0050, tolerance: 0 }, // Tol calc dynamic
    { stepNumber: 2, codeX: 74, codeY: 76, codeZ: 79, nominalLuminance: 0.0075, tolerance: 0 },
    { stepNumber: 3, codeX: 86, codeY: 88, codeZ: 92, nominalLuminance: 0.0100, tolerance: 0 },
    { stepNumber: 4, codeX: 105, codeY: 108, codeZ: 112, nominalLuminance: 0.0151, tolerance: 0 },
    { stepNumber: 5, codeX: 121, codeY: 124, codeZ: 129, nominalLuminance: 0.0202, tolerance: 0 },
    { stepNumber: 6, codeX: 157, codeY: 161, codeZ: 167, nominalLuminance: 0.0352, tolerance: 0 },
    { stepNumber: 7, codeX: 185, codeY: 189, codeZ: 196, nominalLuminance: 0.0501, tolerance: 0 },
    { stepNumber: 8, codeX: 221, codeY: 226, codeZ: 234, nominalLuminance: 0.0752, tolerance: 0 },
    { stepNumber: 9, codeX: 250, codeY: 255, codeZ: 265, nominalLuminance: 0.0998, tolerance: 0 },
    { stepNumber: 10, codeX: 332, codeY: 339, codeZ: 351, nominalLuminance: 0.1997, tolerance: 0 },
];

// HDR Addendum Table 7: Black-To-White
const HDR_BRIGHT_STEPS: GrayscaleStepSpec[] = [
    { stepNumber: 11, codeX: 472, codeY: 481, codeZ: 496, nominalLuminance: 0.5000, tolerance: 0 },
    { stepNumber: 12, codeX: 603, codeY: 614, codeZ: 632, nominalLuminance: 1.000, tolerance: 0 },
    { stepNumber: 13, codeX: 758, codeY: 771, codeZ: 792, nominalLuminance: 2.000, tolerance: 0 },
    { stepNumber: 14, codeX: 1000, codeY: 1015, codeZ: 1040, nominalLuminance: 5.000, tolerance: 0 },
    { stepNumber: 15, codeX: 1211, codeY: 1227, codeZ: 1255, nominalLuminance: 9.990, tolerance: 0 },
    { stepNumber: 16, codeX: 1444, codeY: 1462, codeZ: 1492, nominalLuminance: 20.00, tolerance: 0 },
    { stepNumber: 17, codeX: 1783, codeY: 1803, codeZ: 1836, nominalLuminance: 50.01, tolerance: 0 },
    { stepNumber: 18, codeX: 2060, codeY: 2081, codeZ: 2116, nominalLuminance: 100.1, tolerance: 0 },
    { stepNumber: 19, codeX: 2350, codeY: 2372, codeZ: 2408, nominalLuminance: 200.2, tolerance: 0 },
    { stepNumber: 20, codeX: 2524, codeY: 2546, codeZ: 2583, nominalLuminance: 299.6, tolerance: 0 },
];

export const HDR_EOTF_SPEC: GrayscaleStepSpec[] = [...HDR_DARK_STEPS, ...HDR_BRIGHT_STEPS];

export function getTestSpec(testType: GrayscaleTestType): GrayscaleStepSpec[] {
    if (testType === 'hdr-eotf') return HDR_EOTF_SPEC;
    return testType === 'white-steps' ? WHITE_STEPS_SPEC : GRAY_STEPS_SPEC;
}

export function getTestName(testType: GrayscaleTestType): string {
    if (testType === 'hdr-eotf') return 'HDR EOTF Tracking (PQ)';
    return testType === 'white-steps'
        ? 'DCI White Steps (Black-to-White)'
        : 'DCI Gray Steps (Black-to-Dark Gray)';
}

export function getTableReference(testType: GrayscaleTestType): string {
    if (testType === 'hdr-eotf') return 'HDR Addendum Table 7 & 8';
    return testType === 'white-steps'
        ? 'DCI CTP Table 7.5.11(a) / SMPTE 431-2 Table A.2'
        : 'DCI CTP Table 7.5.11(b) / SMPTE 431-2 Table A.3';
}

// HDR Tolerance Logic from Table 6
export function getHDREOTFTolerance(targetL: number): number {
    if (targetL <= 0.02) return 0.20; // ±20%
    if (targetL <= 1.0) return 0.05; // ±5%
    return 0.03; // ±3%
}

export function isWithinTolerance(
    measured: number,
    nominal: number,
    tolerance: number
): boolean {
    const lowerBound = nominal * (1 - tolerance);
    const upperBound = nominal * (1 + tolerance);
    return measured >= lowerBound && measured <= upperBound;
}

export function calculateDeviation(measured: number, nominal: number): number {
    if (nominal === 0) return 0;
    return ((measured - nominal) / nominal) * 100;
}
