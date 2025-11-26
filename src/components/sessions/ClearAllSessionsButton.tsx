'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { Trash2 } from 'lucide-react';
import { clearAllSessionsAction } from '@/app/actions/session-actions';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function ClearAllSessionsButton() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const t = useTranslations('Session');
    const tCommon = useTranslations('Common');

    const handleClearAll = async () => {
        setIsLoading(true);
        const result = await clearAllSessionsAction();

        if (result.success) {
            router.refresh();
        } else {
            alert(t('clearAllFailed') + ': ' + (result.error || tCommon('unknownError')));
        }
        setIsLoading(false);
    };

    return (
        <ConfirmDialog
            title={t('clearAllConfirmTitle')}
            description={t('clearAllConfirmDesc')}
            onConfirm={handleClearAll}
            destructive
        >
            <Button
                variant="destructive"
                size="sm"
                disabled={isLoading}
            >
                <Trash2 className="h-4 w-4 mr-2" />
                {isLoading ? tCommon('loading') : t('clearAllButton')}
            </Button>
        </ConfirmDialog>
    );
}
