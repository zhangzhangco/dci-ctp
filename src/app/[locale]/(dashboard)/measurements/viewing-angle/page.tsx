import { ViewingAngleForm } from '@/components/measurements/ViewingAngleForm';
import { notFound } from 'next/navigation';

export default async function ViewingAnglePage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <ViewingAngleForm sessionId={sessionId} />;
}
