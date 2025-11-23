import { notFound } from 'next/navigation';
import { getCTPOverviewAction } from '@/app/actions/ctp-overview-actions';
import { StatusCards } from '@/components/ctp/StatusCards';
import { PhaseSection } from '@/components/ctp/PhaseSection';
import { db } from '@/db';
import { testSessions } from '@/db/schema';
import { eq } from 'drizzle-orm';

interface PageProps {
    params: { sessionId: string };
}

export default async function CTPOverviewPage({ params }: PageProps) {
    const sessionId = parseInt(params.sessionId);

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
    const overview = await getCTPOverviewAction(sessionId);

    return (
        <div className="space-y-6">
            {/* 页面标题和会话信息 */}
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">CTP 合规性总览</h1>
                        <p className="text-muted-foreground mt-2">
                            测试会话: {session.name || `Session #${session.id}`} • 设备: {session.device?.model || 'Unknown Device'} ({session.device?.type === 'direct_view' ? 'Direct View' : 'Projector'})
                        </p>
                    </div>

                    {/* 显示当前标准 */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-muted-foreground">Standard:</span>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 uppercase">
                            {session.standard || 'SDR'}
                        </span>
                    </div>
                </div>
            </div>

            {/* 状态卡片 */}
            <StatusCards overview={overview} />

            {/* Phase 1: Device-Level */}
            <PhaseSection phase={overview.phases.phase1} />

            {/* Phase 2: System-Level */}
            <PhaseSection phase={overview.phases.phase2} />
        </div>
    );
}
