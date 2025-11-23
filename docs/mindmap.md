### 🧠 DCI Direct View 图像质量认证 - 终极深度测试脑图
``` mindmap
  root((DCI Direct View<br/>Image Quality<br/>全能终极标准))
    Geometry_Pixel(1. 几何与像素结构<br/>Geometry & Pixel)
      Pixel_Count(CTP 7.5.3 像素计数)
        [素材: Pixel Structure Pattern S/N/E/W 4k]
        [过程: 目测 Visual Inspection]
        [要求: 16x16 像素块及8bit二进制码完整显示]
        [判据: 无裁切, 无缩放, ≥ 4096x2160]
        [源: DV Add 6.1.2]
      Upscaling(CTP 7.5.25 缩放伪影)
        [素材: 4k_scaling_patterns_pt.mxf]
        [过程: 目测 @ 1.0倍屏高距离]
        [观察点: 斜线与Zone Plate区域]
        [判据: 无锯齿 Jaggies, 无振铃 Ringing, 无混叠 Aliasing]
        [源: DV Add 6.1.3]
      Sub_pixel(CTP 7.5.27 子像素重合)
        [素材: white_lines_pt.mxf]
        [过程: 观察单像素宽白线]
        [判据: 无可见色边 Color Fringing/几何异常]
        [源: DV Add 6.1.4]
      Vignetting(CTP 7.5.23 暗角/渐晕)
        [素材: sequential_contrast_pt.mxf]
        [方法: Sampled Uniformity (IDMS 8.1)]
        [仪器: 成像色度计 Imaging Colorimeter]
        [过程: 测量全屏采样点]
        [判据: 非均匀性 N ≤ 4%]
        [源: DV Add 6.6.4]
    Luminance_Contrast(2. 亮度与对比度<br/>Luminance & Contrast)
      SDR_White(CTP 7.5.15 SDR 峰值白)
        [素材: sequential_contrast_pt.mxf]
        [方法: Sampled Vantage-Point (IDMS 8.1.2)]
        [仪器: 分光辐射度计 Spectroradiometer]
        [中心指标: 48.0 ± 3.5 nits]
        [均匀性 N: ≤ 6% (9点法)]
        [色度均匀性: Δu'v' ≤ 0.0171]
        [源: DV Add Table 2]
      HDR_White(CTP 7.5.14 HDR 峰值白)
        [素材: 4k_full_hdr_sequential_contrast_j2c_pt.mxf]
        [方法: Sampled Vantage-Point (IDMS 8.1.2)]
        [中心指标: 299.6 ± 9.0 nits]
        [均匀性 N: ≤ 6% (9点法)]
        [色度均匀性: Δu'v' ≤ 0.0182]
        [源: HDR Add Table 6]
      SDR_Black(CTP 7.5.29 SDR 黑电平)
        [素材: 2k/4k_full_sdr_black_pt.mxf]
        [方法: Full-Screen Black (IDMS 5.6)]
        [过程: 暗室测量中心黑场]
        [指标: 0.01 ≤ L ≤ 0.024 nits]
        [源: DV Add 6.3.1]
      HDR_Black(CTP 7.5.17 HDR 黑电平)
        [素材: 4k_full_hdr_sequential_contrast_j2c_pt.mxf]
        [方法: Full-Screen Black (IDMS 5.6)]
        [指标: 0.005 ± 0.001 nits]
        [源: HDR Add 8.4.4]
      Intra_Contrast(CTP 7.5.8 帧内对比度)
        [素材: 2K_checkerboard_j2c_pt.mxf]
        [方法: Checkerboard Luminance & Contrast (IDMS 5.26)]
        [过程: 测量棋盘格 L_WL, L_WR, L_KL, L_KR]
        [白块指标: 48.0 ± 3.5 nits]
        [黑块指标: 0.01 - 0.024 nits]
        [源: DV Add Table 2]
      Inactive_Black(CTP 7.5.18/32 非活动区)
        [素材: ..._black_marks_pt.mxf / ..._active_pt.mxf]
        [过程: 检查Active Area外区域]
        [判据: 像素完全不发光 Emission=0]
        [源: DV Add 6.11]
    Optical_Hard(3. 离轴与反射率 *核心难点*<br/>Optical Properties)
      Off_Axis(CTP 7.5.19 离轴均匀性)
        [素材: sequential_contrast_pt.mxf]
        [方法: Viewing-Angle Luminance/Color (IDMS 9.4 & 9.6)]
        [仪器: 成像色度计 @ 固定视点 Vantage-Point]
        (水平 Horizontal ±60°)
          [亮度变化: +0% / -25%]
          [色度全屏: Δu'v' ≤ 0.01]
          [色度像素间: Δu'v' ≤ 0.025]
        (垂直 Vertical +10°/-35°)
          [亮度变化: +0% / -25%]
          [色度全屏: Δu'v' ≤ 0.02]
          [色度像素间: Δu'v' ≤ 0.025]
        [源: DV Add 6.6.2 / 6.6.3]
      Reflectivity(CTP 7.5.22 表面反射率)
        [状态: 屏幕断电 Screen OFF]
        [方法: Sampling-Sphere Implementation (IDMS 11.2.2)]
        [仪器: 积分球分光光度计 d/8 (Spectrophotometer)]
        [漫反射 Diffuse (SPEX/de:8): < 10%]
        [镜面反射 Specular (SPIN-SPEX): < 1.6%]
        [源: DV Add 6.8 / CIE 15]
    Color_EOTF(4. 色彩与传递函数<br/>Color & EOTF)
      SDR_EOTF(CTP 7.5.11 SDR Gamma)
        [素材: white_step_j2c_pt.mxf / gray_step_j2c_pt.mxf]
        [过程: 测量10级灰阶, 减去黑电平]
        [曲线: Gamma 2.6]
        [容差: 步骤1-2 ±5%, 步骤3-10 ±3%]
        [源: CTP Table 7.5.11a/b]
      HDR_EOTF(CTP 7.5.28 HDR PQ)
        [素材: 4k_full_hdr_white/gray_step_j2c_pt.mxf]
        [曲线: SMPTE ST 2084 PQ]
        [容差: 步骤1-4 ±20%, 5-10 ±3%~5%]
        [源: CTP Table 7.5.28a/b]
      Accuracy(CTP 7.5.12/16 色彩准确性)
        [素材: color_accuracy_pt.mxf (SDR) / 4k_full_hdr_sequential_color... (HDR)]
        [方法: Full-Screen Arbitrary Color (IDMS 5.17)]
        [测量点: Red-1, Green-1, Blue-1]
        [SDR指标: 亮度±3%, 色度符合RP 431-2 Table A.1]
        [HDR指标: 亮度±3%, 色度符合HDR Add Table 9]
      Contouring(CTP 7.5.10/35 轮廓伪影)
        [素材: 4k_full_sdr/hdr_dark_gray_j2c_pt.mxf]
        [方法: Slope Monotonicity of Gray Scale (IDMS 6.14)]
        [计算: 亮度二阶导数 > 0]
        [判据: 无可见轮廓线/断层]
      Auto_Switch(CTP 7.5.31 自动切换)
        [素材: sdr_detection.cpl -> hdr_detection.cpl]
        [过程: 播放混合列表, 测量SDR/HDR Patch亮度]
        [判据: 自动切换亮度模式 (48nits <-> 300nits), 无人工干预]
    Stereo_3D(5. 立体显示 *条件选考*<br/>Stereoscopic)
      Extinction(CTP 7.5.20 消光比)
        [素材: 2k_full_sdr_contrast_stereo_j2c_pt.mxf]
        [方法: Stereoscopic Extinction Ratio (IDMS 17.2.2)]
        [仪器: 透过3D眼镜 Spectroradiometer]
        [公式: (L_WK - L_KK) / (L_KW - L_KK)]
        [指标: ≥ 150:1]
      Peak_White(CTP 7.5.21 3D峰值白)
        [方法: Stereoscopic Luminance (IDMS 17.2.4)]
        [指标: 48.0 ± 4.8 nits (透过眼镜)]
      Black_Level(CTP 7.5.24 3D黑电平)
        [方法: Stereoscopic Contrast Ratio (IDMS 17.2.3)]
        [指标: 0.01 - 0.024 nits]
      Frame_Rate(CTP 7.5.34 3D帧率)
        [素材: 2k_stereo_24/48/60_fps_pt.cpl]
        [检查: 钟摆运动平滑, 无左右眼错乱]
```

### 📝 关键测试过程补充说明 (Test Procedure Supplements)

为了确保您在实验室的操作完全符合 CTP 要求，以下补充几个关键测试的**具体执行细节**：

#### 1. 自动 SDR/HDR 模式切换 (CTP 7.5.31)
这是 Direct View 系统特有的逻辑测试，验证系统能否通过 CPL 元数据自动适配。
* **执行步骤**:
    1.  构建一个播放列表（SPL），顺序为：`SDR Detection` -> `HDR Detection` -> `SDR Detection`。
    2.  开始播放。
    3.  在第一个 SDR 片段，测量 Test Patch，亮度应为 **15.2 nits** (中灰) 或符合 SDR 范围。
    4.  当自动播放到 HDR 片段时，测量 HDR Light Patch，亮度应自动跳变到 **299.6 nits**。
    5.  当回到 SDR 片段时，亮度应自动回落。
* **Fail 条件**: 如果需要人工切换 Preset 或亮度模式，则测试失败。

#### 2. 离轴均匀性测量几何 (CTP 7.5.19 Geometry)
* **Vantage Point 定义**: 仪器应放置在屏幕中心法线方向，距离通常为屏幕高度的 1.5-3.5 倍（模拟皇帝位）。
* **旋转方式**:
    * 仪器不动，平移仪器位置（Flat Panel 常用）。
    * **但 DCI 推荐**: 仪器固定在 Vantage Point，通过云台转动角度指向屏幕边缘（模拟人眼转头）。
* **计算**:
    * `Luminance Change Ratio = (L_offaxis - L_center) / L_center`。
    * 对于 Direct View，允许下降到 -25%（即 75% 的中心亮度）。

#### 3. 表面反射率计算 (CTP 7.5.22 Calculation)
* 仪器会给出两个值：
    * **SCI / di:8** (Specular Component Included) - 包含镜面反射的总反射。
    * **SCE / de:8** (Specular Component Excluded) - 排除镜面反射（仅漫反射）。
* **漫反射 (Diffuse)** = `SCE` 值。标准要求 `< 10%`。
* **镜面反射 (Specular)** = `SCI - SCE`。标准要求 `< 1.6%`。
* **注意**: 测量时屏幕必须断电，以防自发光干扰反射测量。

#### 4. 像素结构检查 (CTP 7.5.3)
* **素材**: `pixel_structure_S_4k_pt.cpl.xml`
* **检查重点**: 这个图案包含极细微的 1-pixel 线条和 16x16 的方块。
    * 对于 LED 屏，如果驱动 IC 的灰度级数不足或 Mapping 错误，可能会丢失部分线条。
    * 必须确认 `16x16` 方块内的二进制编码点（Binary Position Indicators）清晰可辨，没有被“吃掉”或模糊。

这份脑图和补充说明完全忠实于 DCI CTP 1.4.3 和 Direct View Addendum 1.2 的原始要求，未做任何删减。