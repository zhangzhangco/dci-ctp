
export interface UniformityStandard {
    name: string;
    reference: string;
    luminanceTolerance: number; // Percentage, e.g., 0.20 for 20%
    chromaticityTolerance: number; // e.g., 0.006 for Delta u'v' or xy distance
}

export const SDR_UNIFORMITY_SPEC: UniformityStandard = {
    name: "SDR Screen Luminance & Chromaticity Uniformity",
    reference: "DCI CTP §7.5.15(b)",
    luminanceTolerance: 0.06, // 6% (Direct View) - Updated from 20% based on user input
    chromaticityTolerance: 0.0171, // Delta u'v'
};

export const HDR_UNIFORMITY_SPEC: UniformityStandard = {
    name: "HDR Screen Luminance & Chromaticity Uniformity",
    reference: "DCI CTP §7.5.14(b)",
    luminanceTolerance: 0.06, // 6%
    chromaticityTolerance: 0.0182, // Delta u'v'
};

// Helper to calculate deviation from center
export function calculateLuminanceDeviation(centerL: number, measuredL: number): number {
    if (centerL === 0) return 0;
    return ((measuredL - centerL) / centerL) * 100;
}

export function calculateChromaticityDistance(centerX: number, centerY: number, measuredX: number, measuredY: number): number {
    return Math.sqrt(Math.pow(measuredX - centerX, 2) + Math.pow(measuredY - centerY, 2));
}
