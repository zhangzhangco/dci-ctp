import { getBasicMeasurementsAction } from '@/app/actions/measurement-actions';
import { BasicMeasurementForm } from '@/components/measurements/BasicMeasurementForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function BasicMeasurementPage({
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

    const measurements = await getBasicMeasurementsAction(sessionId);

    // Transform array to object structure expected by form
    const peakWhite = measurements.find(m => m.type === 'peak_white');
    const blackLevel = measurements.find(m => m.type === 'black_level');

    const initialData = {
        peakWhite: peakWhite ? {
            sessionId: peakWhite.sessionId,
            type: peakWhite.type as 'peak_white',
            measuredL: peakWhite.measuredL || 0,
            measuredX: peakWhite.measuredX || 0,
            measuredY: peakWhite.measuredY || 0,
            notes: peakWhite.notes || '',
        } : undefined,
        blackLevel: blackLevel ? {
            sessionId: blackLevel.sessionId,
            type: blackLevel.type as 'black_level',
            measuredL: blackLevel.measuredL || 0,
            measuredX: blackLevel.measuredX || 0,
            measuredY: blackLevel.measuredY || 0,
            notes: blackLevel.notes || '',
        } : undefined,
    };

    return (
        <div className="container mx-auto py-10 space-y-6">
            <div className="flex items-center gap-4">
                <Link href={`/sessions/${sessionId}`}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">峰值亮度与黑位测量</h1>
                    <p className="text-muted-foreground">
                        Phase 1 - Device Level Basic Capabilities
                    </p>
                </div>
            </div>

            <BasicMeasurementForm sessionId={sessionId} initialData={initialData} />
        </div>
    );
}
