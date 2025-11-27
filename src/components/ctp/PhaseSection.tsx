import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, AlertTriangle, Circle } from 'lucide-react';
import { MeasurementItem } from './MeasurementItem';
import type { PhaseStatus } from '@/types/ctp-overview';
import { useTranslations } from 'next-intl';

interface PhaseSectionProps {
    phase: PhaseStatus;
}

export function PhaseSection({ phase }: PhaseSectionProps) {
    const t = useTranslations('PhaseSection');

    const StatusIcon = {
        pass: CheckCircle2,
        fail: XCircle,
        warning: AlertTriangle,
        incomplete: Circle
    }[phase.status];

    const statusColor = {
        pass: 'text-green-600',
        fail: 'text-red-600',
        warning: 'text-yellow-600',
        incomplete: 'text-gray-400'
    }[phase.status];

    const statusLabel = t(phase.status);

    return (
        <div className="space-y-4">
            {/* 阶段标题 */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{phase.name}</h3>
                    <div className="flex items-center gap-2">
                        <StatusIcon className={`h-5 w-5 ${statusColor}`} />
                        <span className={`text-sm font-medium ${statusColor}`}>
                            {statusLabel}
                        </span>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground">
                    {phase.completedItems} / {phase.totalItems} {t('completed')}
                </div>
            </div>

            {/* 测量项列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.items.map(item => (
                    <MeasurementItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
