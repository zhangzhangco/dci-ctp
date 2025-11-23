import { ContouringForm } from '@/components/measurements/ContouringForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: { sessionId?: string };
}

export default function ContouringPage({ searchParams }: PageProps) {
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <ContouringForm sessionId={sessionId} />;
}
