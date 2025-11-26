import { PixelStructureForm } from '@/components/measurements/PixelStructureForm';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: { sessionId?: string };
}

export default function PixelStructurePage({ searchParams }: PageProps) {
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : null;

    if (!sessionId || isNaN(sessionId)) {
        notFound();
    }

    return <PixelStructureForm sessionId={sessionId} />;
}
