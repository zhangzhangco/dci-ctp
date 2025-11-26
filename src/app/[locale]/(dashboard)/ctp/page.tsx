import { db } from '@/db';
import { testSessions } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight } from 'lucide-react';

export default async function CTPIndexPage() {
    const t = await getTranslations('CTP');

    // Fetch all sessions with device info
    const sessions = await db.query.testSessions.findMany({
        orderBy: desc(testSessions.createdAt),
        with: {
            device: true
        }
    });

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('dashboardTitle')}</h1>
                <p className="text-muted-foreground">
                    {t('dashboardSubtitle')}
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('dashboardTitle')}</CardTitle>
                    <CardDescription>{t('dashboardSubtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('table.session')}</TableHead>
                                <TableHead>{t('table.device')}</TableHead>
                                <TableHead>{t('table.standard')}</TableHead>
                                <TableHead>{t('table.progress')}</TableHead>
                                <TableHead className="text-right">{t('table.actions')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sessions.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24">
                                        {t('noSessions')}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                sessions.map((session) => (
                                    <TableRow key={session.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex flex-col">
                                                <span>Session #{session.id}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    {session.createdAt ? new Date(session.createdAt).toLocaleDateString() : '-'}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span>{session.device?.model || 'Unknown'}</span>
                                                <span className="text-xs text-muted-foreground">{session.device?.manufacturer}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 uppercase">
                                                {session.standard || 'SDR'}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            {/* Placeholder for progress/status - calculating for all might be expensive */}
                                            <span className="text-muted-foreground text-sm">-</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" asChild>
                                                <Link href={`/ctp-overview/${session.id}`}>
                                                    {t('viewReport')} <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
