import { getSessionsAction } from '@/app/actions/session-actions';
import { getDevicesAction } from '@/app/actions/device-actions';
import { AddSessionDialog } from '@/components/sessions/AddSessionDialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default async function SessionsPage() {
    const sessions = await getSessionsAction();
    const devices = await getDevicesAction();

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">测试会话</h1>
                    <p className="text-muted-foreground">
                        查看和管理CTP测试会话。点击"查看详情"进入测试项目。
                    </p>
                </div>
                <AddSessionDialog devices={devices} />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>所有会话</CardTitle>
                    <CardDescription>选择一个会话查看详细的测试项目</CardDescription>
                </CardHeader>
                <CardContent>
                    {sessions.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            还没有测试会话。点击右上角创建一个新会话。
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>设备</TableHead>
                                    <TableHead>阶段</TableHead>
                                    <TableHead>日期</TableHead>
                                    <TableHead>操作人员</TableHead>
                                    <TableHead>地点</TableHead>
                                    <TableHead>操作</TableHead>
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
                                            <Link href={`/sessions/${session.id}`}>
                                                <Button variant="outline" size="sm">
                                                    查看详情
                                                </Button>
                                            </Link>
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
