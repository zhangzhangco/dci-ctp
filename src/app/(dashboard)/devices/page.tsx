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

export default async function DevicesPage() {
    const devices = await getDevicesAction();

    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Device Management</h1>
                    <p className="text-muted-foreground">
                        Manage LED displays and projectors for CTP testing.
                    </p>
                </div>
                <AddDeviceDialog />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Registered Devices</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Manufacturer</TableHead>
                                <TableHead>Model</TableHead>
                                <TableHead>Serial Number</TableHead>
                                <TableHead>Created At</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {devices.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center h-24">
                                        No devices found. Add one to get started.
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
                                        <TableCell>{device.createdAt}</TableCell>
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
