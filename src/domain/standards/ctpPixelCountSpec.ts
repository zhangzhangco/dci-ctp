export const PIXEL_COUNT_SPEC = {
    title: "Pixel Count & Resolution",
    reference: "DCI CTP §7.5.3",
    description: "Verify the display resolution and pixel integrity using specific test patterns.",
    minHorizontal: 4096,
    minVertical: 2160,
    checklist: [
        { id: 'pixelBlockComplete', label: '16x16 Pixel Block Complete', description: 'Verify 16x16 pixel block and 8-bit binary code are fully visible.' },
        { id: 'noCropping', label: 'No Cropping', description: 'Verify no part of the image is cropped.' },
        { id: 'noScaling', label: 'No Scaling', description: 'Verify 1:1 pixel mapping without scaling.' }
    ]
};
