# Task List: LED Cinema CTP Test System

## 项目说明
本项目实现完整的 DCI Direct View Display CTP (Compliance Test Plan) 测试管理平台，覆盖所有规范要求的测试项目。

---

## ✅ 已完成模块

### Project Initialization
- [x] Verify existing codebase or initialize new Next.js project
- [x] Create Chinese Implementation Requirements Document
- [x] Install necessary dependencies (Drizzle, UI components, etc.)
- [x] Configure project settings (TypeScript, Tailwind, etc.)

### Core Infrastructure
- [x] Create `src/domain` structure (standards, measurements, ctp, reports)
- [x] Create `src/llm` structure (ctpExplainer, reportWriter)
- [x] Create "Normative Clause" seeder/importer (to load v2 data)
- [x] Create "Measurement Module" registry/structure

### Device & Session Management
- [x] Implement Device Management UI
- [x] Implement Test Session Management UI
- [x] Update Session Detail Page for Phase 2 & Real Status Checking

### Dashboard & Visualization
- [x] Implement CTP Pass/Fail Overview Dashboard
    - [x] Create data aggregation actions
    - [x] Implement validation logic integration
    - [x] Create dashboard page and components
    - [x] Add navigation integration
- [x] Implement Charting (Gamma curves, CIE diagrams)
- [x] Standardize SDR/HDR Tabs across all forms

---

## 🔄 Phase 1: 基础设备测试 (Device-Level Tests)

### 1.1 亮度与对比度基础测试 ✅
- [x] **CTP 7.5.15/14** - Peak White Level (SDR: 48±3.5 nits, HDR: 299.6±9.0 nits)
- [x] **CTP 7.5.29/17** - Black Level (SDR: 0.01-0.024, HDR: 0.005±0.001 nits)
- [x] **Uniformity (9-point)** - Center + 8-point uniformity measurement

### 1.2 几何与像素结构测试
- [x] **CTP 7.5.9** - Pixel Structure (基础检查：填充率、子像素排列)
- [ ] **CTP 7.5.3** - Pixel Count (像素计数验证)
    - 素材: `Pixel Structure Pattern S/N/E/W 4k`
    - 判据: ≥ 4096x2160, 无裁切/缩放
- [ ] **CTP 7.5.27** - Sub-Pixel Alignment (子像素重合)
    - 素材: `white_lines_pt.mxf`
    - 判据: 单像素白线无色边/几何异常
- [ ] **CTP 7.5.25** - Upscaling Artifacts (缩放伪影)
    - 素材: `4k_scaling_patterns_pt.mxf`
    - 判据: 无锯齿/振铃/混叠
- [ ] **CTP 7.5.23** - Vignetting (暗角/渐晕)
    - 与 Uniformity 合并，非均匀性 N ≤ 4%

### 1.3 光学特性测试 (核心难点)
- [ ] **CTP 7.5.19** - Off-Axis Uniformity (离轴均匀性)
    - 水平 ±60°: 亮度 +0%/-25%, 色度 Δu'v' ≤ 0.01
    - 垂直 +10°/-35°: 亮度 +0%/-25%, 色度 Δu'v' ≤ 0.02
    - 需要: Sampled Vantage-Point 方法 (IDMS 8.1.2)
- [ ] **CTP 7.5.22** - Surface Reflectivity (表面反射率)
    - 漫反射 (SPEX) < 10%
    - 镜面反射 (SPIN-SPEX) < 1.6%
    - 需要: 分光光度计 d/8 结构

### 1.4 帧内对比度测试
- [ ] **CTP 7.5.8** - Intra-Frame Contrast (帧内对比度/棋盘格)
    - 素材: `2K_checkerboard_j2c_pt.mxf`
    - 测量: 4个白块 + 4个黑块
    - 判据: 白块 48.0±3.5 nits, 黑块 0.01-0.024 nits
- [ ] **CTP 7.5.18/32** - Inactive Area Black (非活动区黑场)
    - 素材: Black marks + Active area patterns
    - 判据: Active Area 外像素完全不发光

### 1.5 色域测试 ✅
- [x] **Color Volume** - P3 Primaries (R/G/B/White)
    - SDR: DCI White Point
    - HDR: D65 White Point
    - 容差: Δxy ≤ 0.006

---

## 🔄 Phase 2: 系统级测试 (System-Level Tests)

### 2.1 EOTF 传递函数 ✅
- [x] **CTP 7.5.11** - SDR Gamma (Gamma 2.6)
    - White Steps (10级) + Gray Steps (10级)
    - 容差: 步骤1-2 ±5%, 步骤3-10 ±3%
- [x] **CTP 7.5.28** - HDR EOTF (SMPTE ST 2084 PQ)
    - White/Gray Steps (各10级)
    - 容差: 步骤1-4 ±20%, 5-10 ±3%~5%

### 2.2 色彩准确度 ✅
- [x] **CTP 7.5.12/16** - Color Accuracy
    - SDR: Red-1, Green-1, Blue-1 (亮度±3%, 色度符合RP 431-2)
    - HDR: 相同测试点 (HDR Add Table 9)

### 2.3 图像质量测试
- [ ] **CTP 7.5.10/35** - Contouring (轮廓伪影)
    - 素材: `4k_full_sdr/hdr_dark_gray_j2c_pt.mxf`
    - 方法: Slope Monotonicity (IDMS 6.14)
    - 判据: 亮度二阶导数 > 0, 无可见断层

### 2.4 高级功能测试
- [ ] **CTP 7.5.31** - Auto Mode Switch (SDR/HDR 自动切换)
    - 素材: `sdr_detection.cpl` → `hdr_detection.cpl`
    - 判据: 自动切换模式 (48nits ↔ 300nits), 无人工干预

---

## 🔄 Phase 3: 立体 3D 测试 (可选)

仅在显示设备支持立体 3D 时需要：

- [ ] **CTP 7.5.20** - Extinction Ratio (消光比)
    - 素材: `2k_full_sdr_contrast_stereo_j2c_pt.mxf`
    - 指标: ≥ 150:1 (透过3D眼镜测量)
- [ ] **CTP 7.5.21** - 3D Peak White
    - 指标: 48.0 ± 4.8 nits (透过眼镜)
- [ ] **CTP 7.5.34** - 3D Frame Rate
    - 素材: 24/48/60 fps stereo patterns
    - 判据: 运动平滑, 无左右眼错乱

---

## 🔄 Phase 4: 系统集成与完善

### 4.1 数据库完善
- [ ] Design complete `StandardReference` schema (v2 Normative Layer)
- [ ] Design comprehensive `Measurement` schema covering all test types
- [ ] Implement missing measurement tables (Intra-Contrast, Off-Axis, etc.)
- [ ] Run database migrations

### 4.2 测试项详情页
- [ ] Implement Test Item Detail View (linking Standard to Measurement)
    - 显示规范条款原文
    - 关联测量数据
    - 显示历史趋势

### 4.3 自动判定逻辑
- [ ] Implement comprehensive Auto-Pass/Fail logic
    - 集成所有测试项的验证规则
    - 支持软失败 (Warning) 和硬失败 (Fail)
    - 自动生成问题报告

---

## 🔄 Phase 5: 报告与导出

- [ ] **Report Generation**
    - [ ] PDF 合规报告导出
    - [ ] Excel 数据导出
    - [ ] 包含所有测试项和图表
- [ ] **LLM Integration**
    - [ ] CTP Explainer (规范条款解释)
    - [ ] Report Writer (自动生成报告摘要)

---

## 🔄 Final: 验证与优化

- [ ] **Full Data Flow Verification**
    - [ ] 端到端测试完整流程
    - [ ] 验证所有测试项数据持久化
- [ ] **UI Polish**
    - [ ] 响应式设计优化
    - [ ] 动画与过渡效果
    - [ ] 深色模式支持
- [ ] **Performance Optimization**
    - [ ] 大数据集性能测试
    - [ ] 图表渲染优化
- [ ] **Documentation**
    - [ ] 完整的用户手册
    - [ ] 开发者文档
    - [ ] API 文档

---

## 📊 进度总结

- **已完成**: 7/30+ 核心测试项 (~23%)
- **Phase 1 基础**: 6/13 测试 (46%)
- **Phase 2 系统**: 3/5 测试 (60%)
- **Phase 3 3D**: 0/3 测试 (0%)
- **基础设施**: 90% 完成

**下一步重点**: 补充 Phase 1 的核心测试项（Intra-Frame Contrast, Inactive Area, Pixel Count）
