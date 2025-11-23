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
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { CONTOURING_SPEC } from '@/domain/standards/ctpContouringSpec';
import { saveContouringAction, getContouringAction } from '@/app/actions/contouring-actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
    standard: z.enum(['sdr', 'hdr']),
    monotonicityPass: z.boolean(),
    visualCheckPass: z.boolean(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContouringFormProps {
    sessionId: number;
}

export function ContouringForm({ sessionId }: ContouringFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'sdr' | 'hdr'>('sdr');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            standard: 'sdr',
            monotonicityPass: false,
            visualCheckPass: false,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getContouringAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    standard: result.data.standard as 'sdr' | 'hdr',
                    monotonicityPass: result.data.monotonicityPass ?? false,
                    visualCheckPass: result.data.visualCheckPass ?? false,
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
        const result = await saveContouringAction({
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

    return (
        <MeasurementLayout
            title={CONTOURING_SPEC.title}
            subtitle={CONTOURING_SPEC.description}
            phases={['Phase 2']}
            standard={{
                title: "DCI CTP Contouring",
                reference: CONTOURING_SPEC.reference,
                description: CONTOURING_SPEC.description,
                targets: [
                    { label: "Method", value: CONTOURING_SPEC.method },
                    { label: "Requirement", value: "Monotonic slope, no visible artifacts" }
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
                        </Tabs>

                        <Card>
                            <CardHeader><CardTitle>Inspection Results</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="monotonicityPass"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">Slope Monotonicity</FormLabel>
                                                <div className="text-sm text-muted-foreground">Verify 2nd derivative of luminance &gt; 0</div>
                                            </div>
                                            <FormControl>
                                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="visualCheckPass"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">Visual Inspection</FormLabel>
                                                <div className="text-sm text-muted-foreground">No visible contours or banding artifacts</div>
                                            </div>
                                            <FormControl>
                                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
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
