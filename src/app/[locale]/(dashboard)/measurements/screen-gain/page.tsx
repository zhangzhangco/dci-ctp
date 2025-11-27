import { ScreenGainForm } from '@/components/measurements/ScreenGainForm';
import { notFound } from 'next/navigation';

export default async function ScreenGainPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <ScreenGainForm sessionId={sessionId} />;
}
