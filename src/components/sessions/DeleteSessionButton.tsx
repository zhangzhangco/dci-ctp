'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { Trash2 } from 'lucide-react';
import { deleteSessionAction } from '@/app/actions/session-actions';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface DeleteSessionButtonProps {
    sessionId: number;
}

export function DeleteSessionButton({ sessionId }: DeleteSessionButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('Session');
    const tCommon = useTranslations('Common');

    const handleDelete = async () => {
        setIsLoading(true);
        const result = await deleteSessionAction(sessionId);

        if (result.success) {
            router.refresh();
        } else {
            alert(t('deleteFailed') + ': ' + (result.error || tCommon('unknownError')));
        }
        setIsLoading(false);
    };

    return (
        <ConfirmDialog
            title={t('deleteConfirmTitle')}
            description={t('deleteConfirmDesc')}
            onConfirm={handleDelete}
            destructive
        >
            <Button
                variant="ghost"
                size="sm"
                disabled={isLoading}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
                <Trash2 className="h-4 w-4 mr-2" />
                {isLoading ? tCommon('loading') : tCommon('delete')}
            </Button>
        </ConfirmDialog>
    );
}
