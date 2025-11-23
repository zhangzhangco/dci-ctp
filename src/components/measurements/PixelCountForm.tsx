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
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import { MeasurementLayout } from './MeasurementLayout';
import { PIXEL_COUNT_SPEC } from '@/domain/standards/ctpPixelCountSpec';
import { savePixelCountAction, getPixelCountAction } from '@/app/actions/pixel-count-actions';

const formSchema = z.object({
    patternType: z.string(),
    pixelBlockComplete: z.boolean(),
    noCropping: z.boolean(),
    noScaling: z.boolean(),
    horizontalPixels: z.coerce.number(),
    verticalPixels: z.coerce.number(),
    notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface PixelCountFormProps {
    sessionId: number;
}

export function PixelCountForm({ sessionId }: PixelCountFormProps) {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            patternType: 'north',
            pixelBlockComplete: false,
            noCropping: false,
            noScaling: false,
            horizontalPixels: 4096,
            verticalPixels: 2160,
            notes: '',
        },
    });

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const result = await getPixelCountAction(sessionId);
            if (result.success && result.data) {
                form.reset({
                    patternType: result.data.patternType ?? 'north',
                    pixelBlockComplete: result.data.pixelBlockComplete ?? false,
                    noCropping: result.data.noCropping ?? false,
                    noScaling: result.data.noScaling ?? false,
                    horizontalPixels: result.data.horizontalPixels ?? 4096,
                    verticalPixels: result.data.verticalPixels ?? 2160,
                    notes: result.data.notes ?? '',
                });
            }
            setIsLoading(false);
        };
        loadData();
    }, [sessionId, form]);

    async function onSubmit(values: FormValues) {
        setIsSaving(true);
        const result = await savePixelCountAction({
            sessionId,
            ...values,
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
            title={PIXEL_COUNT_SPEC.title}
            subtitle={PIXEL_COUNT_SPEC.description}
            phases={['Phase 1']}
            standard={{
                title: "DCI CTP Pixel Count",
                reference: PIXEL_COUNT_SPEC.reference,
                description: PIXEL_COUNT_SPEC.description,
                targets: [
                    { label: "Min Resolution", value: `${PIXEL_COUNT_SPEC.minHorizontal}x${PIXEL_COUNT_SPEC.minVertical}` }
                ]
            }}
        >
            {isLoading ? (
                <div className="flex justify-center py-8"><Loader2 className="animate-spin" /></div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Card>
                            <CardHeader><CardTitle>Test Configuration</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="patternType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Test Pattern</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select pattern" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="north">North</SelectItem>
                                                    <SelectItem value="south">South</SelectItem>
                                                    <SelectItem value="east">East</SelectItem>
                                                    <SelectItem value="west">West</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="horizontalPixels"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>H Pixels</FormLabel>
                                                <FormControl><Input type="number" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="verticalPixels"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>V Pixels</FormLabel>
                                                <FormControl><Input type="number" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>Visual Inspection</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                {PIXEL_COUNT_SPEC.checklist.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name={item.id as any}
                                        render={({ field }) => (
                                            <FormItem className="flex items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">{item.label}</FormLabel>
                                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                                </div>
                                                <FormControl>
                                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                ))}
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
