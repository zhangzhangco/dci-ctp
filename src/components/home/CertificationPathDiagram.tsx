'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function CertificationPathDiagram() {
    const t = useTranslations('Diagram');

    return (
        <div className="w-full bg-slate-950/50 rounded-xl border border-slate-800/50 p-4 mx-auto backdrop-blur-sm">
            {/* 顶部控制栏/标题说明 */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center px-2">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
                    <div>
                        <h1 className="text-xl font-bold text-slate-100 tracking-tight">{t('title')}</h1>
                        <p className="text-xs text-slate-400">{t('subtitle')}</p>
                    </div>
                </div>
                <div className="text-xs text-slate-500 mt-2 sm:mt-0 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
                    {t('totalItems')}
                </div>
            </div>

            {/* SVG 容器：自适应宽度，默认 viewBox 适配 1280px 宽度 */}
            <div className="w-full overflow-hidden">
                <svg viewBox="0 0 1280 650" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto font-sans">
                    <defs>
                        {/* 优化后的渐变色 - 使用 Slate/Zinc 基调配合柔和的强调色 */}
                        <linearGradient id="phase0" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#0891b2" /> {/* cyan-600 */}
                            <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
                        </linearGradient>
                        <linearGradient id="phase1" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
                            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                        </linearGradient>
                        <linearGradient id="phase2" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#9333ea" /> {/* purple-600 */}
                            <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
                        </linearGradient>
                        <linearGradient id="phase3" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#e11d48" /> {/* rose-600 */}
                            <stop offset="100%" stopColor="#fb7185" /> {/* rose-400 */}
                        </linearGradient>

                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                            <path d="M0,0 L8,4 L0,8 z" fill="#64748b" />
                        </marker>

                        <marker id="arrowHead-warning" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                            <path d="M0,0 L8,4 L0,8 z" fill="#f59e0b" />
                        </marker>

                        <marker id="arrowHead-danger" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                            <path d="M0,0 L8,4 L0,8 z" fill="#f43f5e" />
                        </marker>
                    </defs>

                    {/* 阶段 X 轴时间线 */}
                    <line x1="50" y1="40" x2="1230" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="1230" y="35" textAnchor="end" fill="#64748b" fontSize="10" fontWeight="bold">{t('timeline')} &gt;</text>

                    {/* ==================== 回滚路径 (底部绕行) - 先绘制，作为底层 ==================== */}

                    {/* 1. Phase 3 -> Phase 2 (Yellow) */}
                    <g opacity="0.9">
                        <path d="M 1080 240 V 280 C 1080 340 900 340 770 325"
                            fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowHead-warning)" />
                        <rect x="880" y="315" width="120" height="20" rx="4" fill="#1f2937" stroke="#f59e0b" strokeWidth="0.5" />
                        <text x="940" y="329" textAnchor="middle" fill="#fcd34d" fontSize="10">{t('rollback.lut')}</text>
                    </g>

                    {/* 2. Phase 2 -> Phase 1 (Orange) */}
                    <g opacity="0.9">
                        <path d="M 770 290 V 340 C 770 390 460 390 460 275"
                            fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowHead-warning)" />
                        <rect x="550" y="370" width="140" height="20" rx="4" fill="#1f2937" stroke="#f97316" strokeWidth="0.5" />
                        <text x="620" y="384" textAnchor="middle" fill="#fdba74" fontSize="10">{t('rollback.uniformity')}</text>
                    </g>

                    {/* 3. Phase 2 -> Phase 0 (Red - Deepest) */}
                    <g opacity="1.0">
                        <path d="M 680 290 V 410 C 680 440 150 440 150 225"
                            fill="none" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrowHead-danger)" />
                        <rect x="300" y="420" width="220" height="20" rx="4" fill="#1f2937" stroke="#f43f5e" strokeWidth="0.5" />
                        <text x="410" y="434" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">{t('rollback.physical')}</text>
                    </g>

                    {/* ==================== 阶段 0 ==================== */}
                    <g transform="translate(20, 60)">
                        {/* Header */}
                        <rect x="0" y="0" rx="6" ry="6" width="260" height="40" fill="url(#phase0)" />
                        <text x="130" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{t('phase0.title')}</text>

                        {/* Body */}
                        <rect x="0" y="35" rx="6" ry="6" width="260" height="130" fill="#0f172a" stroke="#0891b2" strokeWidth="1" fillOpacity="0.6" />

                        <g transform="translate(15, 55)">
                            <text y="0" fill="#67e8f9" fontSize="11" fontWeight="bold">{t('phase0.rootCause')}</text>
                            <text y="18" fill="#94a3b8" fontSize="10">• {t('phase0.rootCauseItems.0')}</text>
                            <text y="34" fill="#94a3b8" fontSize="10">• {t('phase0.rootCauseItems.1')}</text>
                            <text y="50" fill="#94a3b8" fontSize="10">• {t('phase0.rootCauseItems.2')}</text>

                            <line x1="0" y1="65" x2="230" y2="65" stroke="#1e293b" />
                            <text y="80" fill="#22d3ee" fontSize="10" fontWeight="bold">{t('phase0.impact')}</text>
                        </g>
                    </g>

                    {/* ==================== 阶段 1 ==================== */}
                    <g transform="translate(330, 60)">
                        {/* Header */}
                        <rect x="0" y="0" rx="6" ry="6" width="260" height="40" fill="url(#phase1)" />
                        <text x="130" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{t('phase1.title')}</text>

                        {/* Body */}
                        <rect x="0" y="35" rx="6" ry="6" width="260" height="180" fill="#0f172a" stroke="#2563eb" strokeWidth="1" fillOpacity="0.6" />

                        <g transform="translate(15, 55)">
                            <text y="0" fill="#93c5fd" fontSize="11" fontWeight="bold">{t('phase1.indicators')}</text>
                            <text y="18" fill="#94a3b8" fontSize="10">• {t('phase1.indicatorsItems.0')}</text>
                            <text y="34" fill="#94a3b8" fontSize="10">• {t('phase1.indicatorsItems.1')}</text>
                            <text y="50" fill="#94a3b8" fontSize="10">• {t('phase1.indicatorsItems.2')}</text>
                            <text y="66" fill="#94a3b8" fontSize="10">• {t('phase1.indicatorsItems.3')}</text>
                            <text y="82" fill="#94a3b8" fontSize="10">• {t('phase1.indicatorsItems.4')}</text>

                            <line x1="0" y1="98" x2="230" y2="98" stroke="#1e293b" />
                            <text y="113" fill="#fca5a5" fontSize="10" fontWeight="bold">{t('phase1.risks')}</text>
                            <text y="128" fill="#94a3b8" fontSize="10">{t('phase1.risksDesc')}</text>
                            <text y="145" fill="#60a5fa" fontSize="10" fontWeight="bold">{t('phase1.rollback')}</text>
                        </g>
                    </g>

                    {/* ==================== 阶段 2 ==================== */}
                    <g transform="translate(640, 60)">
                        {/* Header */}
                        <rect x="0" y="0" rx="6" ry="6" width="260" height="40" fill="url(#phase2)" />
                        <text x="130" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{t('phase2.title')}</text>

                        {/* Body */}
                        <rect x="0" y="35" rx="6" ry="6" width="260" height="230" fill="#0f172a" stroke="#9333ea" strokeWidth="1" fillOpacity="0.6" />

                        <g transform="translate(15, 55)">
                            <text y="0" fill="#c4b5fd" fontSize="11" fontWeight="bold">{t('phase2.indicators')}</text>

                            <text y="20" fill="#a78bfa" fontSize="10" fontWeight="bold">{t('phase2.sdr')}</text>
                            <text x="30" y="20" fill="#94a3b8" fontSize="10">{t('phase2.sdrItems')}</text>

                            <text y="38" fill="#a78bfa" fontSize="10" fontWeight="bold">{t('phase2.hdr')}</text>
                            <text x="30" y="38" fill="#94a3b8" fontSize="10">{t('phase2.hdrItems.0')}</text>
                            <text x="30" y="54" fill="#94a3b8" fontSize="10">{t('phase2.hdrItems.1')}</text>

                            <text y="80" fill="#c4b5fd" fontSize="11" fontWeight="bold">{t('phase2.painPoints')}</text>
                            <text y="96" fill="#94a3b8" fontSize="10">{t('phase2.painPointsItems.0')}</text>
                            <text y="112" fill="#94a3b8" fontSize="10">{t('phase2.painPointsItems.1')}</text>

                            <line x1="0" y1="128" x2="230" y2="128" stroke="#1e293b" />
                            <text y="143" fill="#fca5a5" fontSize="10" fontWeight="bold">{t('phase2.risks')}</text>
                            <text y="158" fill="#94a3b8" fontSize="10">{t('phase2.risksDesc')}</text>
                            <text y="175" fill="#c084fc" fontSize="10" fontWeight="bold">{t('phase2.rollback')}</text>
                        </g>
                    </g>

                    {/* ==================== 阶段 3 ==================== */}
                    <g transform="translate(950, 60)">
                        {/* Header */}
                        <rect x="0" y="0" rx="6" ry="6" width="260" height="40" fill="url(#phase3)" />
                        <text x="130" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{t('phase3.title')}</text>

                        {/* Body */}
                        <rect x="0" y="35" rx="6" ry="6" width="260" height="180" fill="#0f172a" stroke="#e11d48" strokeWidth="1" fillOpacity="0.6" />

                        <g transform="translate(15, 55)">
                            <text y="0" fill="#fda4af" fontSize="11" fontWeight="bold">{t('phase3.indicators')}</text>
                            <text y="18" fill="#94a3b8" fontSize="10">• {t('phase3.indicatorsItems.0')}</text>
                            <text y="34" fill="#94a3b8" fontSize="10">• {t('phase3.indicatorsItems.1')}</text>

                            <text y="60" fill="#fda4af" fontSize="11" fontWeight="bold">{t('phase3.stereo')}</text>
                            <text y="76" fill="#94a3b8" fontSize="10">{t('phase3.stereoItems.0')}</text>
                            <text y="92" fill="#94a3b8" fontSize="10">{t('phase3.stereoItems.1')}</text>

                            <line x1="0" y1="108" x2="230" y2="108" stroke="#1e293b" />
                            <text y="123" fill="#fca5a5" fontSize="10" fontWeight="bold">{t('phase3.risks')}</text>
                            <text y="138" fill="#94a3b8" fontSize="10">{t('phase3.risksDesc')}</text>
                            <text y="155" fill="#fb7185" fontSize="10" fontWeight="bold">{t('phase3.rollback')}</text>
                        </g>
                    </g>

                    {/* ==================== 连接箭头 ==================== */}
                    <g stroke="#4b5563" strokeWidth="1.5" fill="none">
                        <path d="M 280 75 L 330 75" markerEnd="url(#arrowHead)" />
                        <path d="M 590 75 L 640 75" markerEnd="url(#arrowHead)" />
                        <path d="M 900 75 L 950 75" markerEnd="url(#arrowHead)" />
                    </g>

                    {/* 图例 */}
                    <g transform="translate(950, 480)">
                        <rect x="0" y="0" rx="6" ry="6" width="260" height="80" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                        <text x="15" y="25" fill="#e5e7eb" fontSize="12" fontWeight="bold">{t('legend.title')}</text>

                        <circle cx="20" cy="45" r="3" fill="#f59e0b" />
                        <text x="35" y="48" fill="#94a3b8" fontSize="10">{t('legend.software')}</text>

                        <circle cx="20" cy="65" r="3" fill="#f43f5e" />
                        <text x="35" y="68" fill="#f43f5e" fontSize="10" fontWeight="bold">{t('legend.hardware')}</text>
                    </g>

                </svg>
            </div>
        </div>
    );
}
