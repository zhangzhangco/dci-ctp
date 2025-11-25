'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { RotateCcw } from 'lucide-react';
import { clearSessionAction } from '@/app/actions/session-actions';
import { useRouter } from 'next/navigation';

interface ResetSessionButtonProps {
    sessionId: number;
}

export function ResetSessionButton({ sessionId }: ResetSessionButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleReset = async () => {
        setIsLoading(true);
        const result = await clearSessionAction(sessionId);

        if (result.success) {
            router.refresh();
        } else {
            alert('重置失败：' + (result.error || '未知错误'));
        }
        setIsLoading(false);
    };

    return (
        <ConfirmDialog
            title="确认重置会话"
            description="此操作将删除该会话的所有测量数据，但保留会话配置。此操作不可撤销。"
            onConfirm={handleReset}
            destructive
        >
            <Button
                variant="outline"
                size="sm"
                disabled={isLoading}
                className="text-destructive border-destructive/50 hover:bg-destructive/10"
            >
                <RotateCcw className="h-4 w-4 mr-2" />
                {isLoading ? '重置中...' : '重置会话'}
            </Button>
        </ConfirmDialog>
    );
}
