import { InactiveAreaForm } from '@/components/measurements/InactiveAreaForm';
import { notFound } from 'next/navigation';

export default async function InactiveAreaPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <InactiveAreaForm sessionId={sessionId} />;
}
