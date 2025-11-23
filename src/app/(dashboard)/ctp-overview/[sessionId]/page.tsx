import { notFound } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCTPOverviewAction } from '@/app/actions/ctp-overview-actions';
import { StatusCards } from '@/components/ctp/StatusCards';
import { PhaseSection } from '@/components/ctp/PhaseSection';
import { db } from '@/db';
import { testSessions } from '@/db/schema';
import { eq } from 'drizzle-orm';

interface PageProps {
    params: { sessionId: string };
    searchParams: { standard?: 'sdr' | 'hdr' };
}

export default async function CTPOverviewPage({ params, searchParams }: PageProps) {
    const sessionId = parseInt(params.sessionId);
    const standardType = searchParams.standard || 'sdr';

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
    const overview = await getCTPOverviewAction(sessionId, standardType);

    return (
        <div className="space-y-6">
            {/* 页面标题和会话信息 */}
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">CTP 合规性总览</h1>
                        <p className="text-muted-foreground mt-2">
                            测试会话: {session.name} • 设备: {session.device?.name || 'N/A'}
                        </p>
                    </div>

                    {/* SDR/HDR 切换器 */}
                    <Tabs value={standardType} className="w-auto">
                        <TabsList>
                            <TabsTrigger value="sdr" asChild>
                                <a href={`/ctp-overview/${sessionId}?standard=sdr`}>
                                    SDR
                                </a>
                            </TabsTrigger>
                            <TabsTrigger value="hdr" asChild>
                                <a href={`/ctp-overview/${sessionId}?standard=hdr`}>
                                    HDR
                                </a>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
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
