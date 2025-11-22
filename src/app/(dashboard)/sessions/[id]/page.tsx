import { getSessionsAction } from '@/app/actions/session-actions';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Phase 1 测试项目定义
const PHASE1_TESTS = [
    {
        id: 'grayscale',
        name: '灰阶与伽马测量',
        description: 'SDR Transfer Function - DCI CTP §7.5.11',
        route: '/measurements/grayscale',
        category: '基础测量',
    },
    {
        id: 'color-accuracy',
        name: '色彩精度测量',
        description: 'P3 Color Gamut - DCI CTP §7.5.12',
        route: '/measurements/color',
        category: '基础测量',
        disabled: true, // 暂未实现
    },
    {
        id: 'uniformity',
        name: '均匀性测量',
        description: 'Screen Uniformity - DCI CTP §7.5.13',
        route: '/measurements/uniformity',
        category: '基础测量',
        disabled: true, // 暂未实现
    },
    {
        id: 'contrast',
        name: '对比度测量',
        description: 'Contrast Ratio - SMPTE RP 431-2',
        route: '/measurements/contrast',
        category: '扩展测量',
        disabled: true, // 暂未实现
    },
];

export default async function SessionDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const sessionId = parseInt(params.id);
    const sessions = await getSessionsAction();
    const currentSession = sessions.find(s => s.session.id === sessionId);

    if (!currentSession) {
        redirect('/sessions');
    }

    const { session, device } = currentSession;

    // TODO: 从数据库查询每个测试的完成状态
    const testStatus: Record<string, boolean> = {
        'grayscale': false,
        'color-accuracy': false,
        'uniformity': false,
        'contrast': false,
    };

    const completedTests = Object.values(testStatus).filter(Boolean).length;
    const totalTests = PHASE1_TESTS.filter(t => !t.disabled).length;
    const progress = totalTests > 0 ? (completedTests / totalTests) * 100 : 0;

    return (
        <div className="container mx-auto py-10 space-y-8">
            {/* 会话信息卡片 */}
            <Card>
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div>
                            <CardTitle className="text-2xl">测试会话详情</CardTitle>
                            <CardDescription className="mt-2">
                                {device.manufacturer} {device.model}
                                {device.serialNumber && ` - SN: ${device.serialNumber}`}
                            </CardDescription>
                        </div>
                        <Badge variant={session.phase === 1 ? 'default' : 'secondary'}>
                            Phase {session.phase}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="text-sm text-muted-foreground">测试日期</div>
                            <div className="font-medium">{session.date}</div>
                        </div>
                        {session.operator && (
                            <div>
                                <div className="text-sm text-muted-foreground">操作人员</div>
                                <div className="font-medium">{session.operator}</div>
                            </div>
                        )}
                        {session.location && (
                            <div>
                                <div className="text-sm text-muted-foreground">测试地点</div>
                                <div className="font-medium">{session.location}</div>
                            </div>
                        )}
                        <div>
                            <div className="text-sm text-muted-foreground">完成进度</div>
                            <div className="font-medium">{completedTests}/{totalTests} 项测试</div>
                        </div>
                    </div>

                    {/* 进度条 */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">整体进度</span>
                            <span className="text-sm text-muted-foreground">{progress.toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 测试项目列表 */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Phase 1 - 设备级测试项目</h2>
                <p className="text-sm text-muted-foreground mb-6">
                    完成以下测量项目,收集设备的物理性能数据。所有数据将用于 Phase 2 的 CTP 合规性验证。
                </p>

                <div className="grid gap-4">
                    {PHASE1_TESTS.map((test) => {
                        const isCompleted = testStatus[test.id];
                        const isDisabled = test.disabled;

                        return (
                            <Card key={test.id} className={isDisabled ? 'opacity-60' : ''}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                {isCompleted ? (
                                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                                ) : (
                                                    <Circle className="h-6 w-6 text-muted-foreground" />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                                    {test.name}
                                                    {isDisabled && (
                                                        <Badge variant="outline" className="text-xs">即将推出</Badge>
                                                    )}
                                                    {isCompleted && (
                                                        <Badge variant="default" className="text-xs">已完成</Badge>
                                                    )}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    {test.description}
                                                </p>
                                                <Badge variant="secondary" className="mt-2 text-xs">
                                                    {test.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div>
                                            {isDisabled ? (
                                                <Button disabled variant="outline">
                                                    暂未开放
                                                </Button>
                                            ) : (
                                                <Link href={`${test.route}?sessionId=${sessionId}`}>
                                                    <Button>
                                                        {isCompleted ? '查看/编辑' : '开始测试'}
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* 返回按钮 */}
            <div className="flex justify-start">
                <Link href="/sessions">
                    <Button variant="outline">← 返回会话列表</Button>
                </Link>
            </div>
        </div>
    );
}
