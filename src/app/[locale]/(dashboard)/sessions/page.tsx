import { getSessionsAction } from '@/app/actions/session-actions';
import { getDevicesAction } from '@/app/actions/device-actions';
import { AddSessionDialog } from '@/components/sessions/AddSessionDialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from '@/i18n/navigation';
import { DeleteSessionButton } from '@/components/sessions/DeleteSessionButton';
import { ClearAllSessionsButton } from '@/components/sessions/ClearAllSessionsButton';
import { getTranslations } from 'next-intl/server';

export default async function SessionsPage() {
    const sessions = await getSessionsAction();
    const devices = await getDevicesAction();
    const t = await getTranslations('Session');
    const tCommon = await getTranslations('Common');

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t('pageTitle')}</h1>
                    <p className="text-muted-foreground">
                        {t('pageSubtitle')}
                    </p>
                </div>
                <div className="flex gap-2">
                    <ClearAllSessionsButton />
                    <AddSessionDialog devices={devices} />
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('listTitle')}</CardTitle>
                    <CardDescription>{t('listDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                    {sessions.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            {t('noSessions')}
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t('table.id')}</TableHead>
                                    <TableHead>{t('table.device')}</TableHead>
                                    <TableHead>{t('table.phase')}</TableHead>
                                    <TableHead>{t('table.date')}</TableHead>
                                    <TableHead>{t('table.operator')}</TableHead>
                                    <TableHead>{t('table.location')}</TableHead>
                                    <TableHead>{t('table.actions')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sessions.map(({ session, device }) => (
                                    <TableRow key={session.id}>
                                        <TableCell>{session.id}</TableCell>
                                        <TableCell className="font-medium">
                                            {device.manufacturer} {device.model}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">Phase {session.phase}</Badge>
                                        </TableCell>
                                        <TableCell>{session.date}</TableCell>
                                        <TableCell>{session.operator || '-'}</TableCell>
                                        <TableCell>{session.location || '-'}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Link href={`/sessions/${session.id}`}>
                                                    <Button variant="outline" size="sm">
                                                        {t('viewDetails')}
                                                    </Button>
                                                </Link>
                                                <DeleteSessionButton sessionId={session.id} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

