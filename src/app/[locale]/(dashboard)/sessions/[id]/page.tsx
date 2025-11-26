
import { getSessionsAction, getSessionStatusAction } from '@/app/actions/session-actions';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, ArrowRight, Lock, XCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { CircularProgress } from '@/components/ui/circular-progress';
import { ResetSessionButton } from '@/components/ResetSessionButton';

// 测试项目定义
const TEST_DEFINITIONS = [
    // Phase 1
    {
        id: 'peak-white-black',
        phase: 1,
        name: '峰值亮度与黑位',
        description: 'Peak White & Black Level - DCI CTP §26.2.1',
        route: '/measurements/basic',
        category: '基础测量',
    },
    {
        id: 'uniformity',
        phase: 1,
        name: '均匀性测量',
        description: 'Screen Uniformity - DCI CTP §7.5.13',
        route: '/measurements/uniformity',
        category: '基础测量',
    },
    {
        id: 'color-volume',
        phase: 1,
        name: '色域覆盖测量',
        description: 'Color Volume - DCI CTP §26.2.1',
        route: '/measurements/color-volume',
        category: '基础测量',
    },
    {
        id: 'pixel-structure',
        phase: 1,
        name: '像素结构检查',
        description: 'Pixel Structure - DCI CTP §7.5.3',
        route: '/measurements/pixel-structure',
        category: '基础测量',
        disabled: true,
    },
    // Phase 2
    {
        id: 'grayscale',
        phase: 2,
        name: '灰阶传递函数',
        description: 'Grayscale Tracking (Gamma 2.6) - DCI CTP §7.5.11',
        route: '/measurements/grayscale',
        category: '系统性能',
    },
    {
        id: 'color-accuracy',
        phase: 2,
        name: '色彩准确度',
        description: 'Color Accuracy - DCI CTP §7.5.12',
        route: '/measurements/color-accuracy',
        category: '系统性能',
        disabled: false,
    },
    // Phase 3
    {
        id: 'exhibition-environment',
        phase: 3,
        name: '放映环境检查',
        description: 'Exhibition Environment - DCI CTP §2.0',
        route: '/measurements/exhibition',
        category: '环境检测',
    },
];

export default async function SessionDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const sessionId = parseInt(id);
    const sessions = await getSessionsAction();
    const currentSession = sessions.find(s => s.session.id === sessionId);

    if (!currentSession) {
        redirect('/sessions');
    }

    const { session, device } = currentSession;

    // 获取真实测试状态
    const testStatus = await getSessionStatusAction(sessionId);

    // 根据 Session Phase 过滤显示的测试
    // Phase 1 Session 只显示 Phase 1 测试
    // Phase 2 Session 显示 Phase 1 + Phase 2 测试
    const visibleTests = TEST_DEFINITIONS.filter(t => t.phase <= session.phase);

    const completedTests = visibleTests.filter(t => {
        const status = testStatus[t.id as keyof typeof testStatus];
        return status === 'pass' || status === 'fail' || status === 'incomplete';
    }).length;
    const totalTests = visibleTests.filter(t => !t.disabled).length;
    const progress = totalTests > 0 ? (completedTests / totalTests) * 100 : 0;

    return (
        <div className="container mx-auto py-10 space-y-8">
            {/* 会话信息卡片 */}
            <Card className="border-2 border-primary/10 animate-fade-in">
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div>
                            <CardTitle className="text-2xl">测试会话详情</CardTitle>
                            <CardDescription className="mt-2">
                                {device.manufacturer} {device.model}
                                {device.serialNumber && ` - SN: ${device.serialNumber}`}
                            </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <ResetSessionButton sessionId={sessionId} />
                            <Badge
                                variant={session.phase === 1 ? 'default' : session.phase === 2 ? 'secondary' : 'outline'}
                                className="text-base px-4 py-1"
                            >
                                Phase {session.phase}
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 左侧：信息 */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">测试日期</div>
                                <div className="font-medium">{session.date}</div>
                            </div>
                            {session.operator && (
                                <div className="space-y-1">
                                    <div className="text-sm text-muted-foreground">操作人员</div>
                                    <div className="font-medium">{session.operator}</div>
                                </div>
                            )}
                            {session.location && (
                                <div className="space-y-1">
                                    <div className="text-sm text-muted-foreground">测试地点</div>
                                    <div className="font-medium">{session.location}</div>
                                </div>
                            )}
                            <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">完成进度</div>
                                <div className="font-medium">{completedTests}/{totalTests} 项测试</div>
                            </div>
                        </div>

                        {/* 右侧：进度环 */}
                        <div className="flex items-center justify-center">
                            <CircularProgress value={progress} size={140} />
                        </div>
                    </div>

                    {/* 进度条 */}
                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">整体进度</span>
                            <span className="text-sm text-muted-foreground">{progress.toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <div
                                className="h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-primary to-chart-1"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 测试项目列表 */}
            <div>
                <h2 className="text-xl font-semibold mb-4">
                    测试项目列表 (Phase 1{session.phase >= 2 ? ' & 2' : ''})
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                    根据当前的测试阶段 (Phase {session.phase})，您需要完成以下测量项目。
                </p>

                <div className="grid gap-4">
                    {visibleTests.map((test) => {
                        const status = testStatus[test.id as keyof typeof testStatus] || 'none';
                        const isDisabled = test.disabled;

                        let StatusIcon = Circle;
                        let iconColor = "text-muted-foreground";
                        let badgeVariant: "default" | "secondary" | "destructive" | "outline" = "outline";
                        let badgeText = "";

                        switch (status) {
                            case 'pass':
                                StatusIcon = CheckCircle2;
                                iconColor = "text-green-600";
                                badgeVariant = "default"; // or green custom
                                badgeText = "Pass";
                                break;
                            case 'fail':
                                StatusIcon = XCircle;
                                iconColor = "text-red-600";
                                badgeVariant = "destructive";
                                badgeText = "Fail";
                                break;
                            case 'incomplete':
                                StatusIcon = AlertTriangle;
                                iconColor = "text-yellow-500";
                                badgeVariant = "secondary";
                                badgeText = "Incomplete";
                                break;
                            default:
                                StatusIcon = Circle;
                                iconColor = "text-muted-foreground";
                                badgeVariant = "outline";
                                badgeText = "Not Started";
                                break;
                        }

                        if (isDisabled) {
                            badgeText = "Coming Soon";
                            badgeVariant = "outline";
                        }

                        return (
                            <Card key={test.id} className={isDisabled ? 'opacity-60' : ''}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                <StatusIcon className={`h-6 w-6 ${iconColor}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                                    {test.name}
                                                    <Badge variant="outline" className="text-xs">Phase {test.phase}</Badge>

                                                    {status !== 'none' && !isDisabled && (
                                                        <Badge variant={badgeVariant} className={`text-xs ${status === 'pass' ? 'bg-green-600 hover:bg-green-700' : ''}`}>
                                                            {badgeText}
                                                        </Badge>
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
                                                    <Lock className="mr-2 h-4 w-4" />
                                                    暂未开放
                                                </Button>
                                            ) : (
                                                <Link href={`${test.route}?sessionId=${sessionId}`}>
                                                    <Button variant={status !== 'none' ? "outline" : "default"}>
                                                        {status !== 'none' ? '查看/编辑' : '开始测试'}
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
