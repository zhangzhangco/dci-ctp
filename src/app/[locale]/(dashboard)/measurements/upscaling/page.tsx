import { UpscalingForm } from '@/components/measurements/UpscalingForm';
import { notFound } from 'next/navigation';

export default async function UpscalingPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <UpscalingForm sessionId={sessionId} />;
}
