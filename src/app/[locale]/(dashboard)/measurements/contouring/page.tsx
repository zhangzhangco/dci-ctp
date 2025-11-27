import { ContouringForm } from '@/components/measurements/ContouringForm';
import { notFound } from 'next/navigation';

export default async function ContouringPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <ContouringForm sessionId={sessionId} />;
}
