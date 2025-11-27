import { IntraContrastForm } from '@/components/measurements/IntraContrastForm';
import { notFound } from 'next/navigation';

export default async function IntraContrastPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <IntraContrastForm sessionId={sessionId} />;
}
