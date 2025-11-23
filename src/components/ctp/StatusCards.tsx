import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, AlertTriangle, Activity } from 'lucide-react';
import type { CTPOverview } from '@/types/ctp-overview';

interface StatusCardsProps {
    overview: CTPOverview;
}

export function StatusCards({ overview }: StatusCardsProps) {
    const StatusIcon = {
        pass: CheckCircle2,
        fail: XCircle,
        warning: AlertTriangle,
        incomplete: Activity
    }[overview.overallStatus];

    const statusColor = {
        pass: 'text-green-600 bg-green-50 dark:bg-green-950/20',
        fail: 'text-red-600 bg-red-50 dark:bg-red-950/20',
        warning: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20',
        incomplete: 'text-blue-600 bg-blue-50 dark:bg-blue-950/20'
    }[overview.overallStatus];

    const statusLabel = {
        pass: 'CTP 合规',
        fail: 'CTP 不合规',
        warning: 'CTP 警告',
        incomplete: '测试进行中'
    }[overview.overallStatus];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 整体状态 */}
            <Card className="border-2">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">整体状态</p>
                            <p className={`text-2xl font-bold mt-2 ${statusColor.split(' ')[0]}`}>
                                {statusLabel}
                            </p>
                        </div>
                        <div className={`p-3 rounded-full ${statusColor}`}>
                            <StatusIcon className="h-8 w-8" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 完成度 */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">完成度</p>
                            <p className="text-2xl font-bold mt-2">
                                {overview.completionPercentage}%
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {overview.completedItems} / {overview.totalItems} 项
                            </p>
                        </div>
                        <div className="relative h-16 w-16">
                            <svg className="transform -rotate-90" viewBox="0 0 36 36">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    className="stroke-gray-200 dark:stroke-gray-700"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    className="stroke-blue-600"
                                    strokeWidth="3"
                                    strokeDasharray={`${overview.completionPercentage} 100`}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 通过项 */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">通过</p>
                            <p className="text-2xl font-bold mt-2 text-green-600">
                                {overview.passedItems}
                            </p>
                        </div>
                        <div className="p-3 rounded-full bg-green-50 dark:bg-green-950/20">
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 问题项 */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">问题</p>
                            <p className="text-2xl font-bold mt-2 text-red-600">
                                {overview.failedItems + overview.warningItems}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {overview.failedItems} 失败 / {overview.warningItems} 警告
                            </p>
                        </div>
                        <div className="p-3 rounded-full bg-red-50 dark:bg-red-950/20">
                            <XCircle className="h-6 w-6 text-red-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
