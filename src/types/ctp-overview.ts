// CTP Overview 相关类型定义

export type MeasurementStatus = 'pass' | 'fail' | 'warning' | 'not_tested';
export type OverallStatus = 'pass' | 'fail' | 'warning' | 'incomplete';
export type StandardType = 'sdr' | 'hdr';

export interface MeasurementItemStatus {
    id: string;
    name: string;
    category: 'device' | 'system';
    phase: 1 | 2;
    status: MeasurementStatus;
    standardRef: string;
    summary?: string; // 简要结果摘要
    issues?: string[]; // 问题列表
    navigationPath: string; // 跳转路径，如: /measurements/grayscale?sessionId=1
}

export interface PhaseStatus {
    name: string;
    phase: 1 | 2;
    status: OverallStatus;
    completedItems: number;
    totalItems: number;
    items: MeasurementItemStatus[];
}

export interface CTPOverview {
    sessionId: number;
    standardType: StandardType;
    overallStatus: OverallStatus;
    completionPercentage: number;

    phases: {
        phase1: PhaseStatus;
        phase2: PhaseStatus;
    };

    totalItems: number;
    completedItems: number;
    passedItems: number;
    failedItems: number;
    warningItems: number;
}
