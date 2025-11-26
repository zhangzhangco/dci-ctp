import { getColorMeasurementsAction } from '@/app/actions/measurement-actions';
import { ColorVolumeForm } from '@/components/measurements/ColorVolumeForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function ColorVolumeMeasurementPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: sessionIdStr } = await searchParams;
    if (!sessionIdStr) {
        redirect('/sessions');
    }

    const sessionId = parseInt(sessionIdStr);
    if (isNaN(sessionId)) {
        redirect('/sessions');
    }

    return (
        <div className="container mx-auto py-10 space-y-6">
            <div className="flex items-center gap-4">
                <Link href={`/sessions/${sessionId}`}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">色域覆盖测量 (Color Volume)</h1>
                    <p className="text-muted-foreground">
                        Phase 1 - Device Level Color Gamut (P3)
                    </p>
                </div>
            </div>

            <ColorVolumeForm sessionId={sessionId} />
        </div>
    );
}
