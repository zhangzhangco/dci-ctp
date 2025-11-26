import { UpscalingForm } from '@/components/measurements/UpscalingForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: { sessionId?: string };
}

export default function UpscalingPage({ searchParams }: PageProps) {
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <UpscalingForm sessionId={sessionId} />;
}
