'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export interface CIEPoint {
    x: number;
    y: number;
    label?: string;
    color?: string;
    type: 'reference' | 'measured';
    status?: 'pass' | 'fail' | 'soft-fail';
}

interface CIEPlotProps {
    primaries?: {
        red: { x: number; y: number };
        green: { x: number; y: number };
        blue: { x: number; y: number };
        white: { x: number; y: number };
    }; // Reference Gamut
    measuredPrimaries?: {
        red?: { x: number; y: number };
        green?: { x: number; y: number };
        blue?: { x: number; y: number };
        white?: { x: number; y: number };
    };
    points?: CIEPoint[]; // Additional points (e.g. for Color Accuracy)
    title?: string;
}

// Simplified Spectral Locus Data (Approximate for visual reference)
// In a real app, we'd use a high-res path.
const SPECTRAL_LOCUS = [
    { x: 0.175560, y: 0.005215 }, // 360 nm
    { x: 0.174310, y: 0.004962 }, // 370 nm
    { x: 0.174110, y: 0.004962 }, // 380 nm
    { x: 0.173800, y: 0.004900 }, // 390 nm
    { x: 0.173340, y: 0.004800 }, // 400 nm
    { x: 0.172580, y: 0.004800 }, // 410 nm
    { x: 0.171400, y: 0.005100 }, // 420 nm
    { x: 0.168900, y: 0.006900 }, // 430 nm
    { x: 0.164400, y: 0.010900 }, // 440 nm
    { x: 0.156600, y: 0.018400 }, // 450 nm
    { x: 0.143600, y: 0.035200 }, // 460 nm
    { x: 0.124100, y: 0.057800 }, // 470 nm
    { x: 0.091300, y: 0.132700 }, // 480 nm
    { x: 0.045400, y: 0.295000 }, // 490 nm
    { x: 0.008200, y: 0.538400 }, // 500 nm
    { x: 0.013900, y: 0.750200 }, // 510 nm
    { x: 0.074300, y: 0.833800 }, // 520 nm
    { x: 0.154700, y: 0.805900 }, // 530 nm
    { x: 0.229600, y: 0.754300 }, // 540 nm
    { x: 0.301600, y: 0.692300 }, // 550 nm
    { x: 0.373100, y: 0.624500 }, // 560 nm
    { x: 0.444100, y: 0.554700 }, // 570 nm
    { x: 0.512500, y: 0.486600 }, // 580 nm
    { x: 0.575200, y: 0.424200 }, // 590 nm
    { x: 0.627000, y: 0.372500 }, // 600 nm
    { x: 0.665800, y: 0.334000 }, // 610 nm
    { x: 0.691500, y: 0.308300 }, // 620 nm
    { x: 0.707900, y: 0.292000 }, // 630 nm
    { x: 0.719000, y: 0.280900 }, // 640 nm
    { x: 0.726000, y: 0.274000 }, // 650 nm
    { x: 0.730000, y: 0.270000 }, // 660 nm
    { x: 0.732000, y: 0.268000 }, // 670 nm
    { x: 0.733400, y: 0.266600 }, // 680 nm
    { x: 0.734000, y: 0.266000 }, // 690 nm
    { x: 0.734700, y: 0.265300 }, // 700 nm
];

export function CIEPlot({ primaries, measuredPrimaries, points, title }: CIEPlotProps) {
    // Coordinate System: x [0, 0.8], y [0, 0.9]
    // SVG ViewBox: 0 0 800 900
    // Mapping: x -> x * 1000, y -> (0.9 - y) * 1000 (Flip Y)

    const mapX = (x: number) => (x / 0.8) * 800;
    const mapY = (y: number) => (1 - (y / 0.9)) * 900;

    // Simple Catmull-Rom to Cubic Bezier conversion for smoothing
    const getSmoothPath = (points: { x: number, y: number }[]) => {
        if (points.length < 2) return "";

        const mappedPoints = points.map(p => ({ x: mapX(p.x), y: mapY(p.y) }));
        let path = `M ${mappedPoints[0].x} ${mappedPoints[0].y}`;

        for (let i = 0; i < mappedPoints.length - 1; i++) {
            const p0 = mappedPoints[i === 0 ? 0 : i - 1];
            const p1 = mappedPoints[i];
            const p2 = mappedPoints[i + 1];
            const p3 = mappedPoints[i + 2] || p2;

            const cp1x = p1.x + (p2.x - p0.x) / 6;
            const cp1y = p1.y + (p2.y - p0.y) / 6;

            const cp2x = p2.x - (p3.x - p1.x) / 6;
            const cp2y = p2.y - (p3.y - p1.y) / 6;

            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
        }

        // Close the loop with a straight line (Line of Purples)
        path += ' Z';
        return path;
    };

    const spectralPath = getSmoothPath(SPECTRAL_LOCUS);

    // Gamut Triangle
    let gamutPath = '';
    if (primaries) {
        gamutPath = `M ${mapX(primaries.red.x)} ${mapY(primaries.red.y)} ` +
            `L ${mapX(primaries.green.x)} ${mapY(primaries.green.y)} ` +
            `L ${mapX(primaries.blue.x)} ${mapY(primaries.blue.y)} Z`;
    }

    // Measured Gamut Triangle
    let measuredGamutPath = '';
    if (measuredPrimaries && measuredPrimaries.red && measuredPrimaries.green && measuredPrimaries.blue) {
        measuredGamutPath = `M ${mapX(measuredPrimaries.red.x)} ${mapY(measuredPrimaries.red.y)} ` +
            `L ${mapX(measuredPrimaries.green.x)} ${mapY(measuredPrimaries.green.y)} ` +
            `L ${mapX(measuredPrimaries.blue.x)} ${mapY(measuredPrimaries.blue.y)} Z`;
    }

    return (
        <Card className="w-full max-w-[500px] mx-auto">
            <CardHeader className="pb-2">
                <CardTitle className="text-base">{title || "CIE 1931 Chromaticity Diagram"}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative w-full pt-[100%]">
                    <svg
                        viewBox="0 0 800 900"
                        className="absolute top-0 left-0 w-full h-full bg-slate-50 dark:bg-slate-900 rounded-md border"
                    >
                        {/* Grid Lines (Optional) */}
                        <defs>
                            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="800" height="900" fill="url(#grid)" />

                        {/* Spectral Locus */}
                        <path d={spectralPath} fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400" />

                        {/* Reference Gamut */}
                        {gamutPath && (
                            <path d={gamutPath} fill="none" stroke="#8884d8" strokeWidth="2" strokeDasharray="4 4" />
                        )}

                        {/* Measured Gamut */}
                        {measuredGamutPath && (
                            <path d={measuredGamutPath} fill="none" stroke="#ff7300" strokeWidth="2" />
                        )}

                        {/* Reference Points */}
                        {primaries && Object.entries(primaries).map(([key, p]) => (
                            <circle
                                key={`ref-${key}`}
                                cx={mapX(p.x)}
                                cy={mapY(p.y)}
                                r="6"
                                fill="none"
                                stroke="#8884d8"
                                strokeWidth="2"
                            />
                        ))}

                        {/* Measured Points */}
                        {measuredPrimaries && Object.entries(measuredPrimaries).map(([key, p]) => {
                            if (!p) return null;
                            return (
                                <circle
                                    key={`meas-${key}`}
                                    cx={mapX(p.x)}
                                    cy={mapY(p.y)}
                                    r="5"
                                    fill="#ff7300"
                                />
                            );
                        })}

                        {/* Additional Points */}
                        {points && points.map((p, i) => (
                            <TooltipProvider key={i}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <circle
                                            cx={mapX(p.x)}
                                            cy={mapY(p.y)}
                                            r={p.type === 'reference' ? 6 : 4}
                                            fill={p.type === 'reference' ? 'none' : (p.color || '#ff7300')}
                                            stroke={p.type === 'reference' ? (p.color || '#8884d8') : 'none'}
                                            strokeWidth={2}
                                            className="cursor-pointer hover:r-8 transition-all"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{p.label}</p>
                                        <p>x: {p.x.toFixed(4)}, y: {p.y.toFixed(4)}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </svg>
                </div>
            </CardContent>
        </Card>
    );
}
