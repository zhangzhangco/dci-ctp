
export interface UniformityStandard {
    name: string;
    reference: string;
    luminanceTolerance: number; // Percentage, e.g., 0.20 for 20%
    chromaticityTolerance: number; // e.g., 0.006 for Delta u'v' or xy distance
}

export const SDR_UNIFORMITY_SPEC: UniformityStandard = {
    name: "SDR Screen Luminance & Chromaticity Uniformity",
    reference: "DCI CTP §7.5.16",
    luminanceTolerance: 0.20, // ±20% from Center
    chromaticityTolerance: 0.006, // Delta u'v' from Center
};

// Helper to calculate deviation from center
export function calculateLuminanceDeviation(centerL: number, measuredL: number): number {
    if (centerL === 0) return 0;
    return ((measuredL - centerL) / centerL) * 100;
}

export function calculateChromaticityDistance(centerX: number, centerY: number, measuredX: number, measuredY: number): number {
    return Math.sqrt(Math.pow(measuredX - centerX, 2) + Math.pow(measuredY - centerY, 2));
}
