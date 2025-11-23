import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from 'lucide-react';
import { ReactNode } from 'react';

export interface StandardDef {
    title: string; // e.g. "SDR Peak White"
    reference: string; // e.g. "DCI CTP §7.5.15"
    description?: string;
    targets: {
        label: string; // e.g. "Luminance"
        value: string; // e.g. "48.0 cd/m²"
        tolerance?: string; // e.g. "± 3.5"
    }[];
}

interface MeasurementLayoutProps {
    title: string;
    subtitle?: string;
    phases: string[]; // e.g. ["Phase 1", "Phase 2"]
    standard: StandardDef;
    children: ReactNode;
}

export function MeasurementLayout({
    title,
    subtitle,
    phases,
    standard,
    children
}: MeasurementLayoutProps) {
    return (
        <div className="space-y-6">
            {/* Zone 1: Standard & Reference */}
            <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-xl">{title}</CardTitle>
                            {subtitle && <CardDescription className="mt-1">{subtitle}</CardDescription>}
                        </div>
                        <div className="flex gap-2">
                            {phases.map(p => (
                                <Badge key={p} variant="outline">{p}</Badge>
                            ))}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <AlertTitle className="text-blue-800 dark:text-blue-200">
                            标准要求: {standard.title}
                            <span className="ml-2 text-xs font-normal text-blue-600 dark:text-blue-400">
                                ({standard.reference})
                            </span>
                        </AlertTitle>
                        <AlertDescription className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-900 dark:text-blue-100">
                            {standard.targets.map((t, idx) => (
                                <div key={idx}>
                                    <strong>{t.label}:</strong>
                                    <ul className="list-disc list-inside ml-2">
                                        <li>目标: {t.value}</li>
                                        {t.tolerance && <li>容差: {t.tolerance}</li>}
                                    </ul>
                                </div>
                            ))}
                            {standard.description && (
                                <div className="col-span-full mt-2 text-xs opacity-80">
                                    {standard.description}
                                </div>
                            )}
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* Zone 2 & 3: Action & Judgment (Contained in Children) */}
            {children}
        </div>
    );
}
