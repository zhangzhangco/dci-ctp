'use server';
'use server';

import { createDevice, getAllDevices } from '@/domain/devices';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const deviceSchema = z.object({
    manufacturer: z.string().min(1, "Manufacturer is required"),
    model: z.string().min(1, "Model is required"),
    serialNumber: z.string().optional(),
    description: z.string().optional(),
});

export async function getDevicesAction() {
    return await getAllDevices();
}

export async function createDeviceAction(formData: FormData) {
    const rawData = {
        manufacturer: formData.get('manufacturer'),
        model: formData.get('model'),
        serialNumber: formData.get('serialNumber') || undefined,
        description: formData.get('description') || undefined,
    };

    const validated = deviceSchema.safeParse(rawData);

    if (!validated.success) {
        return { success: false, errors: validated.error.flatten().fieldErrors };
    }

    await createDevice(validated.data);
    revalidatePath('/devices');
    return { success: true };
}
