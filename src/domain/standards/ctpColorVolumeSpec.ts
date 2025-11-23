
export interface ColorTarget {
    name: string;
    targetX: number;
    targetY: number;
    tolerance: number; // ± tolerance for x and y
}

export const P3_COLOR_SPEC: Record<string, ColorTarget> = {
    Red: { name: 'Red', targetX: 0.680, targetY: 0.320, tolerance: 0.006 }, // Example tolerance, check CTP
    Green: { name: 'Green', targetX: 0.265, targetY: 0.690, tolerance: 0.006 },
    Blue: { name: 'Blue', targetX: 0.150, targetY: 0.060, tolerance: 0.006 },
    White: { name: 'White', targetX: 0.314, targetY: 0.351, tolerance: 0.002 }, // DCI White
};

export const SDR_COLOR_VOLUME_SPEC = {
    name: "SDR Color Gamut (P3)",
    reference: "DCI CTP §7.5.15 / SMPTE 431-2",
    targets: Object.values(P3_COLOR_SPEC),
};

export function calculateColorDistance(measuredX: number, measuredY: number, targetX: number, targetY: number): number {
    return Math.sqrt(Math.pow(measuredX - targetX, 2) + Math.pow(measuredY - targetY, 2));
}

export function isColorCompliant(measuredX: number, measuredY: number, target: ColorTarget): boolean {
    // CTP usually specifies a box tolerance or a delta tolerance. 
    // For simplicity and strictness, we can use the box tolerance from the spec if available, 
    // or a radial distance. Let's assume box tolerance for now as per typical DCI specs.
    return Math.abs(measuredX - target.targetX) <= target.tolerance &&
        Math.abs(measuredY - target.targetY) <= target.tolerance;
}
