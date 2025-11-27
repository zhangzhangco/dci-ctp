'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

type Session = {
    session: { id: number; phase: number; date: string };
    device: { manufacturer: string; model: string };
};

import { useTranslations } from 'next-intl';

export function SessionSelector({ sessions }: { sessions: Session[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('sessionId') || sessions[0]?.session.id.toString();
    const t = useTranslations('SessionSelector');

    const handleChange = (value: string) => {
        router.push(`/measurements?sessionId=${value}`);
    };

    return (
        <div className="space-y-2">
            <Label>{t('label')}</Label>
            <Select value={sessionId} onValueChange={handleChange}>
                <SelectTrigger className="w-full">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {sessions.map(({ session, device }) => (
                        <SelectItem key={session.id} value={session.id.toString()}>
                            {device.manufacturer} {device.model} - Phase {session.phase} - {session.date}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
