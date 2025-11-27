'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { RotateCcw } from 'lucide-react';
import { clearSessionAction } from '@/app/actions/session-actions';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface ResetSessionButtonProps {
    sessionId: number;
}

export function ResetSessionButton({ sessionId }: ResetSessionButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('ResetSessionButton');

    const handleReset = async () => {
        setIsLoading(true);
        const result = await clearSessionAction(sessionId);

        if (result.success) {
            router.refresh();
        } else {
            alert(t('failure') + (result.error || ''));
        }
        setIsLoading(false);
    };

    return (
        <ConfirmDialog
            title={t('title')}
            description={t('description')}
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
                {isLoading ? t('resetting') : t('button')}
            </Button>
        </ConfirmDialog>
    );
}
