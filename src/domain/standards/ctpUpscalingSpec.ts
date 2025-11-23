export const UPSCALING_SPEC = {
    title: "Upscaling Artifacts",
    reference: "DCI CTP §7.5.25",
    description: "Verify absence of upscaling artifacts such as jaggies, ringing, or aliasing.",
    checklist: [
        { id: 'noJaggies', label: 'No Jaggies', description: 'Diagonal lines are smooth without stairstep artifacts.' },
        { id: 'noRinging', label: 'No Ringing', description: 'No visible ringing or halos around high-contrast edges.' },
        { id: 'noAliasing', label: 'No Aliasing', description: 'No visible aliasing or moiré patterns in zone plates.' }
    ]
};
