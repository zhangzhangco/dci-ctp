import { InactiveAreaForm } from '@/components/measurements/InactiveAreaForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: { sessionId?: string };
}

export default function InactiveAreaPage({ searchParams }: PageProps) {
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <InactiveAreaForm sessionId={sessionId} />;
}
