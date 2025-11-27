import { ContrastForm } from '@/components/measurements/ContrastForm';
import { notFound } from 'next/navigation';

export default async function ContrastPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <ContrastForm sessionId={sessionId} />;
}
