'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { INTRA_CONTRAST_SPEC, SDR_INTRA_CONTRAST_SPEC } from '@/domain/standards/ctpIntraContrastSpec';
import { saveIntraContrastAction, getIntraContrastAction } from '@/app/actions/intra-contrast-actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
    standard: z.enum(['sdr', 'hdr']),
    whiteL: z.coerce.number(), whiteR: z.coerce.number(),
    whiteT: z.coerce.number(), whiteB: z.coerce.number(),
    blackL: z.coerce.number(), blackR: z.coerce.number(),
    blackT: z.coerce.number(), blackB: z.coerce.number(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface IntraContrastFormProps {
    sessionId: number;
}

export function IntraContrastForm({ sessionId }: IntraContrastFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'sdr' | 'hdr'>('sdr');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            standard: 'sdr',
            whiteL: 0, whiteR: 0, whiteT: 0, whiteB: 0,
            blackL: 0, blackR: 0, blackT: 0, blackB: 0,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getIntraContrastAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    standard: result.data.standard as 'sdr' | 'hdr',
                    whiteL: result.data.whiteL ?? 0, whiteR: result.data.whiteR ?? 0,
                    whiteT: result.data.whiteT ?? 0, whiteB: result.data.whiteB ?? 0,
                    blackL: result.data.blackL ?? 0, blackR: result.data.blackR ?? 0,
                    blackT: result.data.blackT ?? 0, blackB: result.data.blackB ?? 0,
                    notes: result.data.notes ?? '',
                });
                setActiveTab(result.data.standard as 'sdr' | 'hdr');
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await saveIntraContrastAction({
            sessionId,
            ...values,
            standard: activeTab,
        });

        if (result.success) {
            alert('保存成功');
        } else {
            alert('保存失败');
        }
        setIsSaving(false);
    }

    const calculateContrast = () => {
        const values = form.getValues();
        const avgWhite = (Number(values.whiteL) + Number(values.whiteR) + Number(values.whiteT) + Number(values.whiteB)) / 4;
        const avgBlack = (Number(values.blackL) + Number(values.blackR) + Number(values.blackT) + Number(values.blackB)) / 4;
        if (avgBlack === 0) return 0;
        return avgWhite / avgBlack;
    };

    return (
        <MeasurementLayout
            title={INTRA_CONTRAST_SPEC.title}
            subtitle={INTRA_CONTRAST_SPEC.description}
            phases={['Phase 1']}
            standard={{
                title: "DCI CTP Intra-Frame Contrast",
                reference: INTRA_CONTRAST_SPEC.reference,
                description: INTRA_CONTRAST_SPEC.description,
                targets: [
                    { label: "White Target", value: INTRA_CONTRAST_SPEC.whiteTarget },
                    { label: "Black Target", value: INTRA_CONTRAST_SPEC.blackTarget }
                ]
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'sdr' | 'hdr')}>
                            <TabsList>
                                <TabsTrigger value="sdr">SDR</TabsTrigger>
                                <TabsTrigger value="hdr">HDR</TabsTrigger>
                            </TabsList>

                            <TabsContent value="sdr" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader><CardTitle>White Patches (cd/m²)</CardTitle></CardHeader>
                                        <CardContent className="grid grid-cols-2 gap-4">
                                            {['L', 'R', 'T', 'B'].map((pos) => (
                                                <FormField
                                                    key={`white${pos}`}
                                                    control={form.control}
                                                    name={`white${pos}` as any}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>White {pos}</FormLabel>
                                                            <FormControl><Input type="number" step="0.1" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            ))}
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader><CardTitle>Black Patches (cd/m²)</CardTitle></CardHeader>
                                        <CardContent className="grid grid-cols-2 gap-4">
                                            {['L', 'R', 'T', 'B'].map((pos) => (
                                                <FormField
                                                    key={`black${pos}`}
                                                    control={form.control}
                                                    name={`black${pos}` as any}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Black {pos}</FormLabel>
                                                            <FormControl><Input type="number" step="0.0001" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            ))}
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="hdr">
                                <div className="p-4 text-center text-muted-foreground">HDR 模式暂未完全支持，请使用 SDR</div>
                            </TabsContent>
                        </Tabs>

                        <Card>
                            <CardHeader><CardTitle>Results</CardTitle></CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    Contrast Ratio: {calculateContrast().toFixed(0)}:1
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>Notes</CardTitle></CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="notes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl><Textarea {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSaving} size="lg">
                                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                <Save className="mr-2 h-4 w-4" />
                                Save Results
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </MeasurementLayout>
    );
}
