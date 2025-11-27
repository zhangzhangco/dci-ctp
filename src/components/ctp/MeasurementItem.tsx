import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, AlertTriangle, Circle, ChevronRight } from 'lucide-react';
import type { MeasurementItemStatus } from '@/types/ctp-overview';

interface MeasurementItemProps {
    item: MeasurementItemStatus;
}

export function MeasurementItem({ item }: MeasurementItemProps) {
    const StatusIcon = {
        pass: CheckCircle2,
        fail: XCircle,
        warning: AlertTriangle,
        not_tested: Circle
    }[item.status];

    const statusColor = {
        pass: 'text-green-600',
        fail: 'text-red-600',
        warning: 'text-yellow-600',
        not_tested: 'text-gray-400'
    }[item.status];

    const bgColor = {
        pass: 'bg-green-50 dark:bg-green-950/20',
        fail: 'bg-red-50 dark:bg-red-950/20',
        warning: 'bg-yellow-50 dark:bg-yellow-950/20',
        not_tested: 'bg-gray-50 dark:bg-gray-950/20'
    }[item.status];

    return (
        <Link href={item.navigationPath}>
            <Card className={`hover:shadow-md transition-shadow cursor-pointer ${item.status !== 'pass' ? 'border-2' : ''} ${item.status === 'fail' ? 'border-red-300' : item.status === 'warning' ? 'border-yellow-300' : ''}`}>
                <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                        {/* 左侧：状态图标和名称 */}
                        <div className="flex items-start gap-3 flex-1">
                            <div className={`mt-0.5 ${bgColor} p-2 rounded-full`}>
                                <StatusIcon className={`h-5 w-5 ${statusColor}`} />
                            </div>

                            <div className="flex-1">
                                <h4 className="font-semibold text-base">{item.name}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{item.standardRef}</p>

                                {item.summary && (
                                    <p className="text-sm text-muted-foreground mt-2">{item.summary}</p>
                                )}

                                {/* 问题详情 */}
                                {item.issues && item.issues.length > 0 && (
                                    <div className="mt-3 space-y-1">
                                        {item.issues.map((issue, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <span className="text-red-600 text-xs mt-0.5">•</span>
                                                <span className="text-xs text-red-600">{issue}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 右侧：导航箭头 */}
                        <div className="flex items-center">
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
