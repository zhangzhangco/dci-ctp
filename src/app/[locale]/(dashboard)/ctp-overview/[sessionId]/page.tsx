import { notFound } from 'next/navigation';
import { getCTPOverviewAction } from '@/app/actions/ctp-overview-actions';
import { StatusCards } from '@/components/ctp/StatusCards';
import { PhaseSection } from '@/components/ctp/PhaseSection';
import { db } from '@/db';
import { testSessions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getTranslations } from 'next-intl/server';

interface PageProps {
    params: Promise<{ sessionId: string; locale: string }>;
}

export default async function CTPOverviewPage({ params }: PageProps) {
    const { sessionId: sessionIdStr, locale } = await params;
    const sessionId = parseInt(sessionIdStr);
    const t = await getTranslations({ locale, namespace: 'CTPOverview' });

    if (isNaN(sessionId)) {
        notFound();
    }

    // 获取会话信息
    const session = await db.query.testSessions.findFirst({
        where: eq(testSessions.id, sessionId),
        with: {
            device: true
        }
    });

    if (!session) {
        notFound();
    }

    // 获取 CTP 总览数据
    const overview = await getCTPOverviewAction(sessionId, locale);

    return (
        <div className="space-y-6">
            {/* 页面标题和会话信息 */}
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                        <p className="text-muted-foreground mt-2">
                            {t('session')}: {`Session #${session.id}`} • {t('device')}: {session.device?.model || t('unknownDevice')} ({session.device?.type === 'direct_view' ? 'Direct View' : 'Projector'})
                        </p>
                    </div>

                    {/* 显示当前标准 */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-muted-foreground">{t('standard')}:</span>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 uppercase">
                            {session.standard || 'SDR'}
                        </span>
                    </div>
                </div>
            </div>

            {/* 状态卡片 */}
            <StatusCards overview={overview} />

            {/* Phase 1: Device-Level */}
            {overview.phases.phase1 && (
                <PhaseSection phase={overview.phases.phase1} />
            )}

            {/* Phase 2: Image Chain Correctness */}
            {overview.phases.phase2 && (
                <PhaseSection phase={overview.phases.phase2} />
            )}

            {/* Phase 3: System / Content Level */}
            {overview.phases.phase3 && (
                <PhaseSection phase={overview.phases.phase3} />
            )}
        </div>
    );
}
