# DCI CTP 完整测试项实施规划

## 文档版本
- 版本: 2.0
- 日期: 2025-11-23
- 状态: 规划阶段

---

## 1. 概述

本文档详细规划了 DCI Direct View Display CTP 的完整测试覆盖方案，基于：
- DCI Direct View Addendum v1.0
- DCI HDR Addendum v1.0  
- SMPTE RP 431-2
- IDMS 15.1

### 1.1 总体架构

```
测试系统层次结构:
├── Phase 1: Device-Level (设备基础特性)
│   ├── 1.1 基础光学 (Luminance, Black Level, Uniformity)
│   ├── 1.2 几何像素 (Resolution, Pixel Structure, Scaling)
│   ├── 1.3 高级光学 (Off-Axis, Reflectivity)
│   └── 1.4 对比度 (Intra-Frame, Inactive Area)
├── Phase 2: System-Level (系统集成特性)
│   ├── 2.1 传递函数 (SDR Gamma, HDR PQ)
│   ├── 2.2 色彩 (Primaries, Accuracy)
│   ├── 2.3 图像质量 (Contouring)
│   └── 2.4 自动功能 (Mode Switching)
└── Phase 3: 3D (立体显示, 可选)
    ├── 3.1 消光比
    ├── 3.2 3D 亮度
    └── 3.3 帧率测试
```

---

## 2. Phase 1: Device-Level Tests (详细规格)

### 2.1 基础光学测试

#### 2.1.1 Peak White Level (已实现 ✅)
**CTP Reference**: 7.5.15 (SDR), 7.5.14 (HDR)

**已实现功能**:
- Tri-Zone 测量 (Left/Center/Right)
- SDR: 48.0 ± 3.5 nits
- HDR: 299.6 ± 9.0 nits

**数据库**: `measurementsBasic` (type: 'peak_white')

---

#### 2.1.2 Black Level (已实现 ✅)
**CTP Reference**: 7.5.29 (SDR), 7.5.17 (HDR)

**已实现功能**:
- Tri-Zone 测量
- SDR: 0.01 ≤ L ≤ 0.024 nits
- HDR: 0.005 ± 0.001 nits

**数据库**: `measurementsBasic` (type: 'black_level')

---

#### 2.1.3 Uniformity (已实现 ✅)
**CTP Reference**: 7.5.15, DV Add 6.3.2

**已实现功能**:
- 9-point 测量 (Center + 8 corners/edges)
- SDR Tolerance: N ≤ 6%, Δu'v' ≤ 0.0171
- HDR Tolerance: N ≤ 6%, Δu'v' ≤ 0.0182

**数据库**: `measurementsUniformity`

**需要增强**:
- [ ] 添加 Vignetting 评估 (CTP 7.5.23, N ≤ 4%)
- [ ] 使用成像色度计的全屏采样 (可选高级功能)

---

### 2.2 几何与像素结构测试

#### 2.2.1 Pixel Structure (已部分实现 ✅)
**CTP Reference**: 7.5.9

**已实现功能**:
- 基础 checklist (Fill Factor, Pixel Pitch, Sub-Pixel, Visual Artifacts)

**数据库**: `measurementsPixelStructure`

**需要增强**:
- [ ] 添加具体的填充率数值输入
- [ ] 支持上传显微镜图像

---

#### 2.2.2 Pixel Count (待实现 🔴)
**CTP Reference**: 7.5.3, DV Add 6.1.2

**实施规格**:

```typescript
interface PixelCountTest {
  sessionId: number;
  testPattern: 'north' | 'south' | 'east' | 'west'; // S/N/E/W patterns
  
  // Visual Inspection Results
  pixelBlockComplete: boolean; // 16x16 pixel block with 8-bit binary code
  noCropping: boolean;
  noScaling: boolean;
  
  // Measured Resolution
  horizontalPixels: number; // Should be ≥ 4096
  verticalPixels: number;   // Should be ≥ 2160
  
  notes: string;
  images?: string; // JSON array of inspection images
}
```

**素材**: `Pixel Structure Pattern S/N/E/W 4k.mxf`

**判据**:
- ✓ 16x16 像素块完整显示
- ✓ 8-bit 二进制码清晰可辨
- ✓ 无裁切 (Cropping)
- ✓ 无缩放 (Scaling)
- ✓ 分辨率 ≥ 4096×2160

**UI 组件**: 类似 `PixelStructureForm` 的 checklist + 分辨率输入

**数据库表**:
```sql
CREATE TABLE measurements_pixel_count (
  id INTEGER PRIMARY KEY,
  session_id INTEGER REFERENCES test_sessions(id),
  test_pattern TEXT, -- 'north', 'south', 'east', 'west'
  pixel_block_complete BOOLEAN,
  no_cropping BOOLEAN,
  no_scaling BOOLEAN,
  horizontal_pixels INTEGER,
  vertical_pixels INTEGER,
  notes TEXT,
  images TEXT
);
```

---

#### 2.2.3 Sub-Pixel Alignment (待实现 🔴)
**CTP Reference**: 7.5.27, DV Add 6.1.4

**实施规格**:

```typescript
interface SubPixelAlignmentTest {
  sessionId: number;
  
  // Visual Inspection of white lines
  horizontalLinesPass: boolean; // Single-pixel white horizontal lines
  verticalLinesPass: boolean;   // Single-pixel white vertical lines
  
  // Observed issues
  colorFringing: boolean;     // Color边缘检测
  geometricDistortion: boolean; // 几何扭曲
  
  observations: string;
  images?: string;
}
```

**素材**: `white_lines_pt.mxf`

**判据**:
- ✓ 单像素宽白线清晰锐利
- ✗ 无可见色边 (Color Fringing)
- ✗ 无几何异常 (Geometric Distortion)

**UI**: Checklist form

---

#### 2.2.4 Upscaling Artifacts (待实现 🔴)
**CTP Reference**: 7.5.25, DV Add 6.1.3

**实施规格**:

```typescript
interface UpscalingArtifactsTest {
  sessionId: number;
  
  viewingDistance: number; // In multiples of screen height (typically 1.0H)
  
  // Inspection results
  diagonalLinesPass: boolean;   // 斜线无锯齿
  zonePlatePass: boolean;       // Zone Plate 无伪影
  
  // Detected artifacts
  jaggies: boolean;    // 锯齿
  ringing: boolean;    // 振铃效应
  aliasing: boolean;   // 混叠
  
  observations: string;
}
```

**素材**: `4k_scaling_patterns_pt.mxf`

**观察点**:
- 斜线区域 (Diagonal Lines)
- Zone Plate 区域

**判据** (@ 1.0倍屏高距离):
- ✗ 无锯齿 (Jaggies)
- ✗ 无振铃 (Ringing)
- ✗ 无混叠 (Aliasing)

---

### 2.3 光学特性测试 (高难度)

#### 2.3.1 Off-Axis Uniformity (待实现 🔴🔴🔴)
**CTP Reference**: 7.5.19, DV Add 6.6.2/6.6.3

**难度评估**: ⭐⭐⭐⭐⭐ (需要专业测量设备)

**实施规格**:

```typescript
interface OffAxisMeasurement {
  sessionId: number;
  axis: 'horizontal' | 'vertical';
  angle: number; // degrees
  
  // Sampled Vantage-Point Measurements (IDMS 8.1.2)
  measurements: Array<{
    position: string;    // Grid position
    viewAngle: number;   // Viewing angle
    luminance: number;   // cd/m²
    x: number;           // Chromaticity
    y: number;
    u_prime: number;     // CIE 1976 u'
    v_prime: number;     // CIE 1976 v'
  }>;
}
```

**测量要求**:

**水平方向 (Horizontal)**:
- 角度范围: -60° 至 +60°
- 亮度容差: +0% / -25%
- 全屏色度容差: Δu'v' ≤ 0.01
- 像素间色度容差: Δu'v' ≤ 0.025

**垂直方向 (Vertical)**:
- 角度范围: -35° 至 +10°
- 亮度容差: +0% / -25%
- 全屏色度容差: Δu'v' ≤ 0.02
- 像素间色度容差: Δu'v' ≤ 0.025

**素材**: `sequential_contrast_pt.mxf` (White frame)

**方法**: Sampled Vantage-Point (IDMS 8.1.2)
- 需要可移动测量架或机器人臂
- 多角度自动化测量

**UI 设计**:
- 角度选择器 (Slider: -60° to +60°)
- 网格位置选择
- 批量数据导入 (CSV)
- 结果可视化 (Heatmap)

---

#### 2.3.2 Surface Reflectivity (待实现 🔴🔴)
**CTP Reference**: 7.5.22, DV Add 6.8

**难度评估**: ⭐⭐⭐⭐ (需要专业分光光度计)

**实施规格**:

```typescript
interface ReflectivityTest {
  sessionId: number;
  
  // Measurement conditions
  screenState: 'off' | 'black_frame'; // 屏幕状态
  instrument: string; // 仪器型号 (e.g., "X-Rite VS450")
  
  // Measurements
  diffuseReflectance_SPEX: number; // % (d/8 geometry, SPEX)
  specularReflectance_SPIN_SPEX: number; // % (d/8 geometry, SPIN-SPEX)
  
  // Spectral data (optional)
  spectralData?: Array<{
    wavelength: number;
    reflectance: number;
  }>;
  
  notes: string;
}
```

**仪器要求**:
- 分光光度计 (Spectrophotometer)
- d/8 几何结构 (Diffuse/8° viewing)

**判据**:
- 漫反射 (Diffuse, SPEX): < 10%
- 镜面反射 (Specular, SPIN-SPEX): < 1.6%

**测量状态**:
- 屏幕断电 (Screen OFF) 或
- 显示全黑帧

**UI 设计**:
- 仪器信息输入
- 反射率数值输入
- 可选的光谱数据上传
- Pass/Fail 自动判定

---

### 2.4 帧内对比度测试

#### 2.4.1 Intra-Frame Contrast (待实现 🔴 - 优先级高)
**CTP Reference**: 7.5.8, DV Add Table 2

**实施规格**:

```typescript
interface IntraFrameContrastTest {
  sessionId: number;
  standard: 'sdr' | 'hdr';
  
  // Checkerboard measurements (4 white + 4 black patches)
  whitePatches: {
    WL: number; // White Left (cd/m²)
    WR: number; // White Right
    WT: number; // White Top
    WB: number; // White Bottom
  };
  
  blackPatches: {
    KL: number; // Black Left
    KR: number; // Black Right
    KT: number; // Black Top
    KB: number; // Black Bottom
  };
  
  // Optional: Full grid measurements
  fullGrid?: Array<{
    position: string;
    luminance: number;
  }>;
}
```

**素材**: `2K_checkerboard_j2c_pt.mxf`

**判据**:
- 白块: 48.0 ±3.5 nits (SDR)
- 黑块: 0.01 - 0.024 nits (SDR)

**UI 设计**:
- 棋盘格可视化
- 8个测量点输入框
- 自动计算对比度比
- 实时合规检查

**数据库表**:
```sql
CREATE TABLE measurements_intra_contrast (
  id INTEGER PRIMARY KEY,
  session_id INTEGER,
  standard TEXT, -- 'sdr' or 'hdr'
  wl REAL, wr REAL, wt REAL, wb REAL,
  kl REAL, kr REAL, kt REAL, kb REAL,
  notes TEXT
);
```

---

#### 2.4.2 Inactive Area Black (待实现 🔴 - 优先级高)
**CTP Reference**: 7.5.18, 7.5.32, DV Add 6.11

**实施规格**:

```typescript
interface InactiveAreaTest {
  sessionId: number;
  
  // Test patterns
  patterns: Array<{
    patternType: 'black_marks' | 'active_area';
    testPassed: boolean;
    
    // Measured regions
    regions: Array<{
      name: string;          // e.g., "Top Border", "Left Border"
      expected: 'black' | 'active';
      actualState: 'emitting' | 'not_emitting';
      luminance?: number;    // cd/m² if emitting
    }>;
  }>;
  
  overallPass: boolean;
  observations: string;
}
```

**素材**:
- `..._black_marks_pt.mxf`
- `..._active_pt.mxf`

**判据**:
- Active Area 外的所有像素必须完全不发光 (Emission = 0)

**UI 设计**:
- 屏幕区域可视化
- 区域检查清单
- 光泄漏检测工具

---

## 3. Phase 2: System-Level Tests (详细规格)

### 3.1 传递函数 (已实现 ✅)

#### 3.1.1 SDR EOTF (Gamma 2.6)
**CTP Reference**: 7.5.11
- White Steps: 10 级
- Gray Steps: 10 级
- 容差: Step 1-2 ±5%, Step 3-10 ±3%

#### 3.1.2 HDR EOTF (PQ)
**CTP Reference**: 7.5.28
- White/Gray Steps: 各 10 级
- 容差: Step 1-4 ±20%, Step 5-10 ±3%~5%

**状态**: ✅ 已完整实现，包括图表可视化

---

### 3.2 色彩测试 (已实现 ✅)

#### 3.2.1 Color Accuracy
**CTP Reference**: 7.5.12 (SDR), 7.5.16 (HDR)
- SDR: Red-1, Green-1, Blue-1
- HDR: 相同测试点

**状态**: ✅ 已完整实现，包括 CIE 图表

---

### 3.3 图像质量测试

#### 3.3.1 Contouring (待实现 🔴)
**CTP Reference**: 7.5.10 (SDR), 7.5.35 (HDR), IDMS 6.14

**实施规格**:

```typescript
interface ContouringTest {
  sessionId: number;
  standard: 'sdr' | 'hdr';
  
  // Slope Monotonicity Analysis
  measurements: Array<{
    codeValue: number;
    luminance: number;
    firstDerivative?: number;  // dL/dCV
    secondDerivative?: number; // d²L/dCV²
  }>;
  
  // Analysis results
  monotonicityPass: boolean; // All d²L/dCV² > 0
  visibleContoursDetected: boolean;
  
  // Visual inspection
  observedContours: Array<{
    codeValueRange: [number, number];
    severity: 'none' | 'minor' | 'moderate' | 'severe';
  }>;
  
  notes: string;
}
```

**素材**:
- SDR: `4k_full_sdr_dark_gray_j2c_pt.mxf`
- HDR: `4k_full_hdr_dark_gray_j2c_pt.mxf`

**方法**: Slope Monotonicity (IDMS 6.14)
1. 测量灰阶梯度
2. 计算一阶导数 dL/dCV
3. 计算二阶导数 d²L/dCV²
4. 判据: 所有 d²L/dCV² > 0

**判据**:
- ✓ 亮度曲线单调递增
- ✗ 无可见轮廓线/断层

**UI 设计**:
- 灰阶梯度输入
- 自动导数计算
- 曲线平滑度可视化
- 问题区域标注

---

### 3.4 高级功能测试

#### 3.4.1 Auto Mode Switch (待实现 🔴)
**CTP Reference**: 7.5.31, HDR Add 6.4

**实施规格**:

```typescript
interface AutoModeSwitchTest {
  sessionId: number;
  
  // Test sequence
  testSequence: Array<{
    contentType: 'sdr' | 'hdr';
    cplFile: string; // e.g., "sdr_detection.cpl"
    
    // Measurements
    measuredLuminance: number;
    expectedLuminance: number; // 48 nits (SDR) or 300 nits (HDR)
    
    // Timing
    switchDelay?: number; // milliseconds
    manualInterventionRequired: boolean;
  }>;
  
  overallPass: boolean;
  notes: string;
}
```

**素材**:
- `sdr_detection.cpl` (包含 SDR 测试 patch)
- `hdr_detection.cpl` (包含 HDR 测试 patch)

**测试流程**:
1. 播放 SDR CPL
2. 测量 patch 亮度 → 应为 ~48 nits
3. 切换到 HDR CPL
4. 测量 patch 亮度 → 应为 ~300 nits
5. 验证无需人工干预

**判据**:
- ✓ 自动识别 SDR/HDR 信号
- ✓ 自动切换亮度模式
- ✗ 无需人工干预

**UI 设计**:
- 顺序测试工作流
- 实时亮度监控
- 切换时间记录

---

## 4. Phase 3: 3D Stereoscopic Tests (可选)

### 4.1 Extinction Ratio (待实现 🟡)
**CTP Reference**: 7.5.20

```typescript
interface ExtinctionRatioTest {
  sessionId: number;
  
  // Measurements through 3D glasses
  L_WK: number; // White frame, keep channel
  L_KK: number; // Black frame, keep channel
  L_KW: number; // Black frame, waste channel
  
  // Calculated
  extinctionRatio: number; // (L_WK - L_KK) / (L_KW - L_KK)
  
  glassesModel: string;
  notes: string;
}
```

**判据**: Extinction Ratio ≥ 150:1

---

### 4.2 3D Peak White (待实现 🟡)
**CTP Reference**: 7.5.21

```typescript
interface ThreeDPeakWhiteTest {
  sessionId: number;
  
  // Through 3D glasses
  measuredLuminance: number; // cd/m²
  glassesModel: string;
  
  notes: string;
}
```

**判据**: 48.0 ± 4.8 nits

---

### 4.3 3D Frame Rate (待实现 🟡)
**CTP Reference**: 7.5.34

```typescript
interface ThreeDFrameRateTest {
  sessionId: number;
  
  tests: Array<{
    frameRate: 24 | 48 | 60; // fps
    cplFile: string;
    
    // Visual inspection
    motionSmooth: boolean;
    eyeSeparationCorrect: boolean; // No L/R eye confusion
    
    observations: string;
  }>;
}
```

---

## 5. 数据库架构总览

### 5.1 新增表清单

```sql
-- Phase 1 补充
CREATE TABLE measurements_pixel_count (...);
CREATE TABLE measurements_sub_pixel_alignment (...);
CREATE TABLE measurements_upscaling_artifacts (...);
CREATE TABLE measurements_off_axis (...);
CREATE TABLE measurements_reflectivity (...);
CREATE TABLE measurements_intra_contrast (...);
CREATE TABLE measurements_inactive_area (...);

-- Phase 2 补充
CREATE TABLE measurements_contouring (...);
CREATE TABLE measurements_auto_switch (...);

-- Phase 3 (3D)
CREATE TABLE measurements_3d_extinction (...);
CREATE TABLE measurements_3d_peak_white (...);
CREATE TABLE measurements_3d_frame_rate (...);
```

---

## 6. 实施优先级与时间估算

### 优先级 P0 (必须 - 2周)
1. **Intra-Frame Contrast** - 3天
2. **Inactive Area Black** - 2天
3. **Pixel Count** - 2天
4. **Contouring** - 3天
5. **Sub-Pixel Alignment** - 2天
6. **Upscaling Artifacts** - 2天

### 优先级 P1 (重要 - 1周)
7. **Auto Mode Switch** - 3天
8. **Vignetting (增强 Uniformity)** - 2天

### 优先级 P2 (高级 - 2周)
9. **Off-Axis Uniformity** - 5天 (复杂度高)
10. **Surface Reflectivity** - 3天

### 优先级 P3 (可选 - 1周)
11. **3D Extinction Ratio** - 2天
12. **3D Peak White** - 1天
13. **3D Frame Rate** - 2天

**总计**: 约 6 周完整实施

---

## 7. 技术挑战与解决方案

### 7.1 Off-Axis 测量自动化
**挑战**: 需要多角度物理移动测量设备

**解决方案**:
- 方案A: 手动测量 + CSV 批量导入
- 方案B: 集成机器人臂 API (高成本)
- 方案C: 使用成像色度计 (一次性多角度捕获)

**推荐**: 方案A (MVP), 方案C (进阶)

### 7.2 反射率测量
**挑战**: 需要专业分光光度计

**解决方案**:
- 手动输入仪器读数
- 支持导入厂商软件导出的数据

### 7.3 Contouring 算法
**挑战**: 二阶导数计算和噪声过滤

**解决方案**:
- 使用 Savitzky-Golay 滤波器平滑数据
- 实现 IDMS 6.14 标准算法

---

## 8. UI/UX 设计原则

### 8.1 表单设计
- **简单测试**: Checklist 风格 (Pixel Count, Sub-Pixel)
- **数值测试**: 表格输入 + 实时验证 (Intra-Contrast)
- **复杂测试**: 分步向导 (Off-Axis, Auto Switch)

### 8.2 数据可视化
- **图表库**: Recharts (线图, 柱状图)
- **自定义**: SVG (Heatmap for Off-Axis)
- **3D**: Three.js (可选, 用于角度可视化)

### 8.3 用户引导
- 每个测试添加"帮助"面板
- 链接到规范原文 (Normative Clause)
- 视频教程 (可选)

---

## 9. 验证与测试策略

### 9.1 单元测试
- Domain Logic: 验证算法 (Jest)
- Server Actions: 数据持久化测试
- UI Components: Storybook

### 9.2 集成测试
- 端到端流程: Playwright
- 数据库迁移: Drizzle Kit

### 9.3 性能测试
- 大数据集 (1000+ 测量点)
- 图表渲染优化

---

## 10. 下一步行动

### 立即开始 (本周)
1. ✅ 完成任务清单更新
2. ✅ 创建详细规划文档
3. ⏭ 实现 Intra-Frame Contrast (P0)
4. ⏭ 实现 Inactive Area Black (P0)

### 近期目标 (2周内)
- 完成所有 P0 测试项
- 更新 CTP Dashboard 集成
- 编写用户文档

### 中期目标 (1个月内)
- 完成 P0 + P1 测试项
- 性能优化
- Beta 测试

**文档结束**

---

## 11. Test Matrix Logic Implementation (New)

### Goal
Implement a dynamic test matrix that enables/disables test items based on the device type (Projector vs Direct View) and standard (SDR vs HDR), as defined in CTP Chapter 7.

### Schema Changes
#### [MODIFY] [schema.ts](file:///d:/dci-ctp/src/db/schema.ts)
- Add `type` to `devices` table: 'projector' | 'direct_view'
- Add `standard` to `testSessions` table: 'sdr' | 'hdr'

### UI Changes
#### [MODIFY] [AddSessionDialog.tsx](file:///d:/dci-ctp/src/components/sessions/AddSessionDialog.tsx)
- Add selection for `standard` (SDR/HDR).
- Ensure selected device displays its type or allows filtering.

#### [MODIFY] [AddDeviceDialog.tsx](file:///d:/dci-ctp/src/components/devices/AddDeviceDialog.tsx)
- Add selection for `type` (Projector/Direct View).

### Logic Changes
#### [MODIFY] [ctp-overview-actions.ts](file:///d:/dci-ctp/src/app/actions/ctp-overview-actions.ts)
- Update `getCTPOverviewAction` to fetch session standard and device type.
- Implement filtering logic to exclude irrelevant tests based on the matrix.

### Matrix Definition
| Test Item | SDR Projector | SDR Direct View | HDR Projector | HDR Direct View |
| :--- | :---: | :---: | :---: | :---: |
| Pixel Count | ✔ | ✔ | ✔ | ✔ |
| Intra-frame Contrast | ✔ | ✔ | ✔ | ✔ |
| Grayscale Tracking | ✔ | ✔ | ✔ | ✔ |
| SDR Contouring | ✔ | ✔ | - | - |
| SDR Transfer Function | ✔ | ✔ | - | - |
| SDR Color Accuracy | ✔ | ✔ | - | - |
| HDR White/Color | - | - | ✔ | ✔ |
| HDR Black Level | - | - | ✔ | ✔ |
| Inactive Pixel Black | - | ✔ | - | ✔ |
| Off-axis Uniformity | - | ✔ | - | ✔ |
| Stereoscopic | (if 3D) | (if 3D) | - | (if 3D) |
| Surface Reflectivity | - | ✔ | - | ✔ |
| Vignetting | - | ✔ | - | ✔ |
| Test Environment | ✔ | - | ✔ | - |
