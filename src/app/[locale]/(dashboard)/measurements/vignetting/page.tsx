import { VignettingForm } from '@/components/measurements/VignettingForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: Promise<{ sessionId?: string }>;
}

export default async function VignettingPage({ searchParams }: PageProps) {
    const { sessionId } = await searchParams;

    if (!sessionId) {
        return notFound();
    }

    return <VignettingForm sessionId={parseInt(sessionId)} />;
}
