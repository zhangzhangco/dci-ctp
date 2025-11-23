import { redirect } from 'next/navigation';
import { db } from '@/db';
import { testSessions } from '@/db/schema';
import { desc } from 'drizzle-orm';

export default async function CTPIndexPage() {
    // 获取最新的测试会话
    const latestSession = await db.query.testSessions.findFirst({
        orderBy: desc(testSessions.createdAt)
    });

    if (latestSession) {
        // 重定向到最新会话的 CTP Overview
        redirect(`/ctp-overview/${latestSession.id}`);
    } else {
        // 如果没有会话，重定向到会话列表
        redirect('/sessions');
    }
}
