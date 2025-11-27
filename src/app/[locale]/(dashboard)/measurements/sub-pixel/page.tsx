import { SubPixelForm } from '@/components/measurements/SubPixelForm';
import { notFound } from 'next/navigation';

export default async function SubPixelPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <SubPixelForm sessionId={sessionId} />;
}
