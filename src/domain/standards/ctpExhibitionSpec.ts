export const EXHIBITION_SPEC = {
    title: "Exhibition Environment",
    reference: "DCI CTP §2.0 (Environment)",
    description: "Verify the auditorium environment meets DCI specifications for projection.",
    checklist: [
        { id: 'ambientLight', label: 'Ambient Light', description: 'Ambient light on screen is negligible (< 0.03 cd/m²).' },
        { id: 'masking', label: 'Screen Masking', description: 'Masking is properly aligned and absorbs light.' },
        { id: 'portWindow', label: 'Port Window', description: 'Port window glass is clean and clear.' },
        { id: 'hvacNoise', label: 'HVAC Noise', description: 'HVAC noise is not distracting (NC-30 or better).' }
    ],
    measurements: [
        { id: 'ambientLightLevel', label: 'Ambient Light Level', unit: 'cd/m²', max: 0.03 },
        { id: 'temperature', label: 'Booth Temperature', unit: '°C', min: 18, max: 28 },
        { id: 'humidity', label: 'Booth Humidity', unit: '%', min: 20, max: 80 }
    ]
};
