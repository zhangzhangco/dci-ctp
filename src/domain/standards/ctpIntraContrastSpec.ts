export interface IntraFrameContrastTarget {
    whiteL: number; // 48.0
    whiteTolerance: number; // 3.5
    blackMin: number; // 0.01
    blackMax: number; // 0.024
}

export const SDR_INTRA_CONTRAST_SPEC: IntraFrameContrastTarget = {
    whiteL: 48.0,
    whiteTolerance: 3.5,
    blackMin: 0.01,
    blackMax: 0.024
};

export const INTRA_CONTRAST_SPEC = {
    title: "Intra-Frame Contrast (Checkerboard)",
    reference: "DCI CTP §7.5.8",
    description: "Verify intra-frame contrast using a checkerboard pattern.",
    whiteTarget: "48.0 ± 3.5 cd/m²",
    blackTarget: "0.01 - 0.024 cd/m²"
};

export function validateIntraFrameContrast(
    whiteL: number,
    blackL: number,
    spec: IntraFrameContrastTarget
): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];

    if (Math.abs(whiteL - spec.whiteL) > spec.whiteTolerance) {
        issues.push(`White level ${whiteL.toFixed(2)} out of range (${spec.whiteL} ± ${spec.whiteTolerance})`);
    }

    if (blackL < spec.blackMin || blackL > spec.blackMax) {
        issues.push(`Black level ${blackL.toFixed(4)} out of range (${spec.blackMin} - ${spec.blackMax})`);
    }

    return {
        isValid: issues.length === 0,
        issues
    };
}
