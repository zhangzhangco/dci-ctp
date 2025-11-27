
import { GrayscaleForm } from "@/components/measurements/GrayscaleForm";
import { getSession } from "@/app/actions/session-actions";
import { redirect } from "next/navigation";
import { getTranslations } from 'next-intl/server';

export default async function GrayscaleMeasurementPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: sessionIdStr } = await searchParams;
    const sessionId = sessionIdStr ? parseInt(sessionIdStr) : undefined;

    if (!sessionId || isNaN(sessionId)) {
        return <div>Invalid Session ID</div>;
    }

    const session = await getSession(sessionId);
    if (!session) {
        redirect("/");
    }

    const t = await getTranslations('Measurements.grayscale');

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">{t('title')}</h2>
                <p className="text-muted-foreground">
                    {t('subtitle')}
                </p>
            </div>
            <GrayscaleForm sessionId={sessionId} />
        </div>
    );
}
