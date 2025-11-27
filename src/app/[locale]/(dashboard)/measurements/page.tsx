// 这个文件应该移动到 d:/dci-ctp/src/app/(dashboard)/measurements/grayscale/page.tsx
import { GrayscaleForm } from '@/components/measurements/GrayscaleForm';
import { SessionSelector } from '@/components/measurements/SessionSelector';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getSessionsAction } from '@/app/actions/session-actions';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export default async function MeasurementsPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: idStr } = await searchParams;
    const sessions = await getSessionsAction();
    const sessionId = idStr ? parseInt(idStr) : sessions[0]?.session.id;
    const t = await getTranslations('Measurements');

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground">
                    {t('subtitle')}
                </p>
            </div>

            {sessions.length === 0 ? (
                <Card>
                    <CardHeader>
                        <CardTitle>{t('noSessionsTitle')}</CardTitle>
                        <CardDescription>
                            {t('noSessionsDesc')}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ) : (
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('selectSessionTitle')}</CardTitle>
                            <CardDescription>
                                {t('selectSessionDesc')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <SessionSelector sessions={sessions} />
                        </CardContent>
                    </Card>

                    {sessionId && (
                        <GrayscaleForm sessionId={sessionId} />
                    )}
                </div>
            )}
        </div>
    );
}
