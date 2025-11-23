import { PixelCountForm } from '@/components/measurements/PixelCountForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: { sessionId?: string };
}

export default function PixelCountPage({ searchParams }: PageProps) {
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <PixelCountForm sessionId={sessionId} />;
}
