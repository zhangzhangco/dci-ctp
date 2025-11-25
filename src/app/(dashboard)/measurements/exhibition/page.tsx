import { ExhibitionForm } from '@/components/measurements/ExhibitionForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: Promise<{ sessionId?: string }>;
}

export default async function ExhibitionPage({ searchParams }: PageProps) {
    const { sessionId: idStr } = await searchParams;
    const sessionId = idStr ? parseInt(idStr) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <ExhibitionForm sessionId={sessionId} />;
}
