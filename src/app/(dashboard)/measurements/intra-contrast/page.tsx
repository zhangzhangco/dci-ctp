import { IntraContrastForm } from '@/components/measurements/IntraContrastForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: { sessionId?: string };
}

export default function IntraContrastPage({ searchParams }: PageProps) {
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <IntraContrastForm sessionId={sessionId} />;
}
