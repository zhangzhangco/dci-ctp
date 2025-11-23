
export interface ColorAccuracyTarget {
    name: string;
    // Chromaticity Targets (x, y)
    targetX: number;
    targetY: number;
    toleranceX: number; // ± tolerance
    toleranceY: number; // ± tolerance

    // Luminance Targets (cd/m²)
    // Note: For SDR, targets are derived from SMPTE 431-2 Table A.4 relative to 48 nits.
    // For HDR, targets are explicit in DCI-HDR Addendum.
    targetL: number;
    toleranceL: number; // Percentage (e.g., 0.03 for ±3%)
}

// DCI-P3 Primaries (Common for SDR/HDR)
const P3_R = { x: 0.680, y: 0.320 };
const P3_G = { x: 0.265, y: 0.690 };
const P3_B = { x: 0.150, y: 0.060 };

// SDR Targets (Derived/Approximate for 48 nits Peak White)
// R: ~10.2, G: ~34.4, B: ~3.4 (Sum ~48)
export const SDR_ACCURACY_TARGETS: ColorAccuracyTarget[] = [
    { name: "Red-1", targetX: P3_R.x, targetY: P3_R.y, toleranceX: 0.006, toleranceY: 0.006, targetL: 10.2, toleranceL: 0.03 },
    { name: "Green-1", targetX: P3_G.x, targetY: P3_G.y, toleranceX: 0.006, toleranceY: 0.006, targetL: 34.4, toleranceL: 0.03 },
    { name: "Blue-1", targetX: P3_B.x, targetY: P3_B.y, toleranceX: 0.006, toleranceY: 0.006, targetL: 3.4, toleranceL: 0.03 },
];

// HDR Targets (Explicit from DCI-HDR Addendum)
export const HDR_ACCURACY_TARGETS: ColorAccuracyTarget[] = [
    { name: "Red-1", targetX: P3_R.x, targetY: P3_R.y, toleranceX: 0.006, toleranceY: 0.006, targetL: 68.13, toleranceL: 0.03 },
    { name: "Green-1", targetX: P3_G.x, targetY: P3_G.y, toleranceX: 0.006, toleranceY: 0.006, targetL: 207.35, toleranceL: 0.03 },
    { name: "Blue-1", targetX: P3_B.x, targetY: P3_B.y, toleranceX: 0.006, toleranceY: 0.006, targetL: 23.86, toleranceL: 0.03 },
];

export const COLOR_ACCURACY_SPEC = {
    title: "Color Accuracy (Primaries)",
    reference: "DCI CTP §7.5.12 (SDR) / §7.5.16 (HDR)",
    description: "Measure Red-1, Green-1, Blue-1. Verify Chromaticity (±0.006) and Luminance (±3%).",
};

export function calculateLuminanceError(measuredL: number, targetL: number): number {
    if (targetL === 0) return 0;
    return (measuredL - targetL) / targetL;
}

export function isLuminanceCompliant(measuredL: number, targetL: number, tolerance: number): boolean {
    const error = Math.abs(calculateLuminanceError(measuredL, targetL));
    return error <= tolerance;
}

export function isChromaticityCompliant(measuredX: number, measuredY: number, targetX: number, targetY: number, tolerance: number): boolean {
    return Math.abs(measuredX - targetX) <= tolerance && Math.abs(measuredY - targetY) <= tolerance;
}
