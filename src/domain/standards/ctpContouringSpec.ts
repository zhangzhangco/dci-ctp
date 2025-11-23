export const CONTOURING_SPEC = {
    title: "Contouring & Quantization Artifacts",
    reference: "DCI CTP §7.5.10 (SDR) / §7.5.35 (HDR)",
    description: "Verify freedom from visible contouring or quantization artifacts using a shallow ramp.",
    method: "Slope Monotonicity (IDMS 6.14)",
    requirement: "Luminance slope must be monotonic (2nd derivative > 0) and no visible contours."
};
