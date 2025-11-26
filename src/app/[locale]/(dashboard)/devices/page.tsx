import { getDevicesAction } from '@/app/actions/device-actions';
import { AddDeviceDialog } from '@/components/devices/AddDeviceDialog';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

export default function DevicesPage() {
    // Note: In Next.js App Router with next-intl, we can use useTranslations in Server Components
    // if we are rendering them as part of the page tree where locale is handled.
    // However, to be safe and follow patterns, we might need to await getTranslations if it was async,
    // but useTranslations works for sync rendering in SCs in recent versions.
    // Let's use useTranslations as it's the standard hook.
    const t = useTranslations('Devices');

    // We need to fetch data. Since this is a server component, we can await.
    // But we can't use hooks (useTranslations) and async/await in the same component body easily 
    // if it's an async component.
    // Actually, for async server components, we should use `getTranslations`.

    return <DevicesPageContent />;
}

async function DevicesPageContent() {
    const devices = await getDevicesAction();
    // We need to pass translations or use getTranslations here.
    // Let's refactor to use getTranslations.
    const { getTranslations } = await import('next-intl/server');
    const t = await getTranslations('Devices');

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-muted-foreground">
                        {t('table.name')} / {t('table.model')}
                    </p>
                </div>
                <AddDeviceDialog />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('table.name')}</TableHead>
                                <TableHead>{t('table.model')}</TableHead>
                                <TableHead>{t('table.sn')}</TableHead>
                                <TableHead>{t('table.type')}</TableHead>
                                <TableHead>{t('table.lastConnected')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {devices.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24">
                                        {t('status.disconnected')}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                devices.map((device) => (
                                    <TableRow key={device.id}>
                                        <TableCell className="font-medium">
                                            {device.manufacturer}
                                        </TableCell>
                                        <TableCell>{device.model}</TableCell>
                                        <TableCell>{device.serialNumber || '-'}</TableCell>
                                        <TableCell>{t(`types.${device.type}`)}</TableCell>
                                        <TableCell>{device.createdAt ? new Date(device.createdAt).toLocaleDateString() : '-'}</TableCell>
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
