export const INACTIVE_AREA_SPEC = {
    title: "Inactive Area Black Level",
    reference: "DCI CTP §7.5.18 / §7.5.32",
    description: "Verify that pixels outside the active image area do not emit light.",
    requirement: "No visible light emission (0 cd/m²)",
    maxLuminance: 0.001 // Practical limit for measurement
};

export function validateInactiveArea(measuredL: number): boolean {
    return measuredL <= INACTIVE_AREA_SPEC.maxLuminance;
}
