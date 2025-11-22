// 这个文件应该移动到 d:/dci-ctp/src/app/(dashboard)/measurements/grayscale/page.tsx
import { GrayscaleForm } from '@/components/measurements/GrayscaleForm';
import { SessionSelector } from '@/components/measurements/SessionSelector';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function MeasurementsPage({
    searchParams,
}: {
    searchParams: { sessionId?: string };
}) {
    const sessions = await getSessionsAction();
    const sessionId = searchParams.sessionId ? parseInt(searchParams.sessionId) : sessions[0]?.session.id;

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">测量数据录入</h1>
                <p className="text-muted-foreground">
                    录入设备级测试数据(Phase 1)
                </p>
            </div>

            {sessions.length === 0 ? (
                <Card>
                    <CardHeader>
                        <CardTitle>没有可用的测试会话</CardTitle>
                        <CardDescription>
                            请先在"测试会话"页面创建一个新的测试会话。
                        </CardDescription>
                    </CardHeader>
                </Card>
            ) : (
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>选择测试会话</CardTitle>
                            <CardDescription>
                                为哪个测试会话录入测量数据?
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
