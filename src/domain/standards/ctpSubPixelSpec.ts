export const SUB_PIXEL_SPEC = {
    title: "Sub-Pixel Alignment",
    reference: "DCI CTP §7.5.27",
    description: "Verify sub-pixel alignment using single-pixel white lines.",
    checklist: [
        { id: 'horizontalLinesPass', label: 'Horizontal Lines', description: 'Single-pixel horizontal white lines are sharp and clear.' },
        { id: 'verticalLinesPass', label: 'Vertical Lines', description: 'Single-pixel vertical white lines are sharp and clear.' },
        { id: 'noColorFringing', label: 'No Color Fringing', description: 'No visible color fringing at normal viewing distance.' }
    ]
};
