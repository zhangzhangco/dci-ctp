import { PixelCountForm } from '@/components/measurements/PixelCountForm';
import { notFound } from 'next/navigation';

export default async function PixelCountPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <PixelCountForm sessionId={sessionId} />;
}
