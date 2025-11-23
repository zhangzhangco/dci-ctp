export interface PixelStructureChecklist {
    fillFactor: boolean;
    pixelPitch: boolean;
    subPixelStructure: boolean;
    visualArtifacts: boolean;
}

export const PIXEL_STRUCTURE_SPEC = {
    title: "Pixel Structure & Fill Factor",
    reference: "DCI CTP §7.5.9",
    description: "Verify that the pixel structure, fill factor, and sub-pixel arrangement meet DCI requirements and do not introduce visible artifacts.",
    items: [
        {
            id: "fillFactor",
            label: "Fill Factor",
            requirement: "≥ 90% (or as specified by manufacturer)",
            description: "The ratio of the active light-emitting area to the total pixel area."
        },
        {
            id: "pixelPitch",
            label: "Pixel Pitch",
            requirement: "Documented",
            description: "Verify the pixel pitch matches the manufacturer's specification."
        },
        {
            id: "subPixelStructure",
            label: "Sub-Pixel Structure",
            requirement: "No Color Fringing",
            description: "Verify sub-pixel arrangement does not cause visible color fringing at reference viewing distance."
        },
        {
            id: "visualArtifacts",
            label: "Visual Artifacts",
            requirement: "None Visible",
            description: "No visible screen door effect, moiré, or other artifacts at reference viewing distance."
        }
    ]
};
