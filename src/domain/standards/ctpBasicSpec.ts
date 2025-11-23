
export type BasicTestType = 'sdr-white' | 'hdr-white';

export interface BasicTestSpec {
    type: BasicTestType;
    name: string;
    reference: string;
    // Peak White Targets
    targetLuminance: number; // cd/m²
    toleranceLuminance: number; // absolute value (e.g., 3.5) or percentage? CTP uses absolute for SDR, percentage for HDR?
    // SDR: 48.0 ± 3.5
    // HDR: 299.6 ± 9 (Direct View)

    targetX: number;
    targetY: number;
    toleranceChrominance: number; // ± 0.002

    // Black Level Targets (Active)
    minBlackLevel: number;
    maxBlackLevel: number;
}

export const SDR_WHITE_SPEC: BasicTestSpec = {
    type: 'sdr-white',
    name: 'SDR Peak White & Black',
    reference: 'DCI CTP §7.5.15 / §7.5.29',
    targetLuminance: 48.0,
    toleranceLuminance: 3.5, // ± 3.5 cd/m²
    targetX: 0.314,
    targetY: 0.351,
    toleranceChrominance: 0.002,
    minBlackLevel: 0.01,
    maxBlackLevel: 0.024,
};

export const HDR_WHITE_SPEC: BasicTestSpec = {
    type: 'hdr-white',
    name: 'HDR Peak White & Black',
    reference: 'DCI CTP §7.5.14 / §7.5.17',
    targetLuminance: 299.6,
    toleranceLuminance: 9.0, // ± 9 cd/m²
    targetX: 0.3127,
    targetY: 0.3290,
    toleranceChrominance: 0.002,
    minBlackLevel: 0.0001, // Placeholder for HDR Black, need DCI-HDR ref
    maxBlackLevel: 0.005,  // Placeholder
};

export function getBasicTestSpec(type: BasicTestType): BasicTestSpec {
    return type === 'sdr-white' ? SDR_WHITE_SPEC : HDR_WHITE_SPEC;
}

export function isLuminanceWithinTolerance(measured: number, target: number, tolerance: number): boolean {
    return Math.abs(measured - target) <= tolerance;
}

export function isChrominanceWithinTolerance(measuredX: number, measuredY: number, targetX: number, targetY: number, tolerance: number): boolean {
    return Math.abs(measuredX - targetX) <= tolerance && Math.abs(measuredY - targetY) <= tolerance;
}

export function isBlackLevelCompliant(measured: number, min: number, max: number): boolean {
    // For Black level, usually we want it to be BELOW a max. 
    // But CTP 7.5.29 says "within the range [0.01, 0.024]". 
    // This implies a minimum black level is required (maybe to prevent crushing?).
    return measured >= min && measured <= max;
}
