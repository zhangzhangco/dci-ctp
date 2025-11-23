
export interface ColorTarget {
    name: string;
    targetX: number;
    targetY: number;
    tolerance: number;
}

export interface ColorVolumeStandard {
    name: string;
    reference: string;
    targets: ColorTarget[];
}

export const P3_COLOR_SPEC: Record<string, ColorTarget> = {
    Red: { name: 'Red', targetX: 0.680, targetY: 0.320, tolerance: 0.006 }, // P3 Red
    Green: { name: 'Green', targetX: 0.265, targetY: 0.690, tolerance: 0.006 }, // P3 Green
    Blue: { name: 'Blue', targetX: 0.150, targetY: 0.060, tolerance: 0.006 }, // P3 Blue
    White: { name: 'White', targetX: 0.314, targetY: 0.351, tolerance: 0.002 }, // DCI White (SDR)
};

export const HDR_P3_COLOR_SPEC: Record<string, ColorTarget> = {
    Red: { name: 'Red', targetX: 0.680, targetY: 0.320, tolerance: 0.006 },
    Green: { name: 'Green', targetX: 0.265, targetY: 0.690, tolerance: 0.006 },
    Blue: { name: 'Blue', targetX: 0.150, targetY: 0.060, tolerance: 0.006 },
    White: { name: 'White', targetX: 0.3127, targetY: 0.3290, tolerance: 0.002 }, // D65 White (HDR)
};

export const SDR_COLOR_VOLUME_SPEC: ColorVolumeStandard = {
    name: "SDR Color Gamut (P3)",
    reference: "DCI CTP §7.5.15(c)",
    targets: [P3_COLOR_SPEC.Red, P3_COLOR_SPEC.Green, P3_COLOR_SPEC.Blue, P3_COLOR_SPEC.White]
};

export const HDR_COLOR_VOLUME_SPEC: ColorVolumeStandard = {
    name: "HDR Color Gamut (P3)",
    reference: "DCI CTP §7.5.14(c)",
    targets: [HDR_P3_COLOR_SPEC.Red, HDR_P3_COLOR_SPEC.Green, HDR_P3_COLOR_SPEC.Blue, HDR_P3_COLOR_SPEC.White]
};

export function isColorCompliant(measuredX: number, measuredY: number, target: ColorTarget): boolean {
    const distance = Math.sqrt(Math.pow(measuredX - target.targetX, 2) + Math.pow(measuredY - target.targetY, 2));
    return distance <= target.tolerance;
}

export function calculateColorDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
