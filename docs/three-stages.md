> 测试大类 → 代表测试 → CTP 入口路径 → 规范依据 → 测试过程要点 → 指标/判定标准出处

---

## 一、阶段划分与总览

* **阶段一：设备级（Device-Level）**
  把 LED 屏当成一个“HDR 直显设备”，不管播放器，只测它本身的**物理能力**。

* **阶段二：系统级（System-Level）**
  播放链路 + 媒体块 + 显示设备一起，验证**信号→光的还原行为**（EOTF、灰阶、色彩等）。

* **阶段三：影厅级（Auditorium-Level）**
  把设备装到影厅里，考虑**环境光、座位位置、视角、屏幕几何**带来的实际呈现变化。

下面按阶段展开。

---

## 二、阶段一：设备级测试（Device-Level）

> 核心入口：**CTP 第 26 章 – HDR Direct View Display Test Sequences**
> 尤其是：26.2 HDR Direct View Display Consolidated Test Sequence / 26.2.1 Practical Procedures 
> 以及影像测试章节 7.5.x 被 26.2 调用 

### 阶段一测试矩阵（设备本体能力）

| 测试大类                 | 代表测试 / 子项                               | CTP 入口路径（示意链路）                                                                                                      | 规范依据（DCI/SMPTE）                                                                                                                           | 测试过程要点（CTP 摘要式概括）                                                                                        | 指标/判定标准出处                                                                                                                                                     |
| -------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. HDR 白场亮度与白点**   | HDR Peak White & Chromaticity           | CTP 26.2.1 → 调用 7.5.14 *HDR White Luminance and Chromaticity*（表 7.5.14(a)(b)）                                       | HDR Addendum 8.4.3 *White Point and Luminance* + Annex A Table 6（HDR Reference Display 参数）；HDR Color Volume 表 1（Y=300, D65 白点）            | CTP 7.5.14 的目标大意：在规定测试环境和初始条件下，用白场测试图测量显示器在 HDR 模式下的峰值亮度及其色度，并与 HDR Addendum 规定的名义值与容差比较。                | 目标白场亮度为 **Y=300 cd/m²**，白点色度为 **D65 (x=0.3127, y=0.3290)**，数值定义见 HDR Color Volume Table 1；具体容差值由 HDR Addendum Annex A Table 6 给出（Review Room 与 Theater 各有一组）。 |
| **2. 最小活动黑位**        | HDR Minimum Active Black Level          | CTP 26.2.1 → 调用 7.5.17 *HDR Minimum Active Black Level*（表 7.5.28(b) 对应暗阶）                                           | HDR Addendum 8.4.4 *Minimum Active Black Level*（对参考显示要求）；Direct View Addendum 6.3.2 HDR Mode *Minimum Active Black Level*（对直显设备具体要求）      | CTP 7.5.17 目标：使用黑–暗灰阶测试图，在规定环境下测量最低非零亮度的显示水平，并与 HDR/直显规范中规定的黑位范围与容差比较。                                   | HDR Addendum 8.4.4 给出 HDR 参考显示的**黑位目标及容差区间**（数值在 Annex A 表中），直显设备还须满足 Direct View Addendum 6.3.2 对 **Minimum Active Black** 的范围要求。                            |
| **3. 像素/模块结构与可见性**   | Pixel Structure & Visibility            | CTP 26.2.1 → 调用 7.5.3 *Imaging Device Pixel Count/Structure*（含 16×16 / 8×8 像素结构图）                                   | Direct View Addendum 6.1 *Display Pixels*（包含 pixel visibility、display pixel count、sub-pixel coincidence 等）                                | CTP 7.5.3：使用特定像素结构测试图，检查 LED 模块拼接后是否满足**可见像素结构、无错误拼接、几何比例正确、无异常重采样**等要求。                                 | Direct View Addendum 6.1 要求：显示像素数量需满足 DCI 图像容器分辨率，像素需完整可见且几何比例正确；子像素空间重合（6.1.4）需在规定公差内。                                                                       |
| **4. 亮度均匀性（轴上）**     | On-axis Luminance Uniformity            | CTP 26.2.1 → 调用 7.5.14(b) *HDR White Angular Nonuniformity* + 7.5.16 *HDR Color Luminance and Chromaticity* 中的全屏样本点 | Direct View Addendum 6.6.1 *On-Axis Luminance Uniformity*（含 inter-module / inter-pixel / module-boundary 三部分）                             | CTP 相关测试：在轴上多个测量点（中心+四角+边缘等）测量白场亮度，计算最大/最小与平均的偏差，分别评估模块间、像素间以及模块边界处的亮度一致性。                               | Direct View Addendum 6.6.1.x 对三类均匀性分别给出最大允许偏差（以百分比形式），这些阈值被 CTP 用作通过/失败判据。                                                                                    |
| **5. 色域和色彩亮度能力**     | HDR Color Volume & Color Luminance      | CTP 26.2.1 → 调用 7.5.16 *HDR Color Luminance and Chromaticity*（表 7.5.16）                                             | HDR Addendum 第 5 章 *HDR Color Volume*（P3 原色 + D65 白点），8.4.7 *Color Volume*；Direct View Addendum 6.4.2 HDR Mode *Color Gamut and Accuracy* | CTP 7.5.16：用一组色块（R/G/B/C/M/Y/中性灰）在目标亮度下测量其 XYZ / 色度坐标与亮度，并与 HDR Color Volume 所定义的 P3D65 及 DCI 指定的名义亮度比较。 | HDR Addendum 表 1 给出 P3 原色与 D65 白点坐标及 Y=300 cd/m² 白点；Annex A（Table 9）给出了色差和亮度容差；直显设备需在 Direct View Addendum 6.4.2 规定的色域覆盖与 ΔE 范围内。                             |
| **6. 空间/时间抖动（避免伪影）** | Spatial / Temporal Dithering            | CTP 26.2.1 中的**主观检查项 + 7.5.10/7.5.35 Contouring / HDR Contouring**                                                  | Direct View Addendum 6.5 *Dithering*（分别定义 spatial / temporal dithering 对观感的限制）                                                            | CTP 相关测试：在灰阶渐变和静态色块上观察是否出现明显的**轮廓、闪烁或空域噪声**，并在必要时以高帧率摄像检查时间抖动行为。                                         | Direct View Addendum 6.5.1 / 6.5.2 规定：抖动不得在正常观影条件和距离下产生可感知伪影；CTP 在 7.5.10 / 7.5.35 中给出“无明显可见轮廓或闪烁”作为通过标准。                                                     |
| **7. 表面反射（设备本体属性）**  | Surface Reflectivity（Diffused/Specular） | CTP 26.2.1 → 调用 7.5.22 *Surface Reflectivity*（直接视显）                                                                 | Direct View Addendum 6.8 *Surface Reflectivity*（6.8.1 diffuse、6.8.2 specular）                                                             | CTP 7.5.22：使用指定反射率标准板和测量几何，测定屏幕的漫反射与镜面反射分量，用于评估对环境光的敏感程度。                                                | Direct View Addendum 6.8 要求设备的漫反射和镜面反射系数不超过一定数值，以保证在影院环境下不会严重抬升黑位或产生明显镜面高光。                                                                                   |

> 小结：阶段一所有测试都可以从 **CTP 26.2 HDR Direct View Display** 作为入口，它组织并调用 7.5.x 具体测量，而 7.5.x 的数值容差则来自 **HDR Addendum + Direct View Addendum**。

---

## 三、阶段二：系统级测试（System-Level）

> 核心入口：**CTP 第 7.5 章 – Image Reproduction**（由 24/26/28 章的各类设备 Test Sequence 调用）

这一层不再只是“设备能不能亮到 300 nit”，而是“从 DCP 解码到最终输出，这条链路的**EOTF、灰阶、色彩、对比度**是否按 DCI 的 HDR 预期工作”。

### 阶段二测试矩阵（成像链行为）

| 测试大类                                  | 代表测试 / 子项                               | CTP 入口路径                                                                                           | 规范依据                                                                                                       | 测试过程摘要                                                                                     | 指标/出处                                                                                                            |
| ------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **1. HDR EOTF / 传递函数跟踪**              | HDR Transfer Function Tracking          | 对于 HDR Direct View：CTP 26.2.1 → 调用 7.5.28 *HDR Transfer Function*（对 E′→L 关系进行拟合）                   | HDR Addendum 8.4.6 *Electro-Optical Transfer Function*，要求参考显示跟踪 ST 2084（PQ）并在给定容差内                         | CTP 7.5.28：播放一系列编码为不同灰阶等级的测试帧，测量相应的屏幕亮度，拟合实际 EOTF，并与理论 PQ 曲线比较（例如以 log域或 delta L/L 度量）。    | HDR Addendum 8.4.6.2 给出了 EOTF 跟踪误差的允许范围（附录表中）；系统级通过/失败以内插的 PQ 曲线偏差是否在容差内判断。                                      |
| **2. 灰阶 tracking & 轮廓**               | HDR/SDR Grayscale Tracking & Contouring | CTP 7.5.9 *Grayscale Tracking*；7.5.35 *HDR Contouring*（被 26.2/28.2 等章节调用）                          | HDR Addendum Annex B *Subjective Parameters* 中 B.1 *Grayscale Tracking*、B.2 *Contouring*；ST 2084 作为基础 EOTF | CTP 7.5.9：播放从黑到白阶梯图，测量每级亮度与色度，检查是否单调、色温稳定；7.5.35：观察灰阶渐变中有无明显轮廓带状伪影。                        | HDR Addendum B.1/B.2 定义了“良好灰阶 tracking”和“可接受轮廓程度”的主观标准；与 CTP 中“无明显色偏或突跳”“无明显 contouring 条纹”结合使用。                 |
| **3. HDR 对比度 / Intra-frame Contrast** | Checkerboard (ANSI 样式) 对比度              | CTP 7.5.8 *SDR Intra-frame Contrast* + HDR 场景下可扩展使用；被 HDR Projector / Direct View Test Sequence 引用 | DCSS 对投影机对比度的总要求（8.3.3）；HDR Addendum 在 8.4.4/8.4.3 中用峰值和黑位间接限定系统对比度                                        | CTP 7.5.8：使用黑白棋盘格图案，测量黑白方块的平均亮度，计算对比度（白/黑），从系统视角评估“同帧内可见动态范围”。                             | 对于 HDR 模式，实测对比度应满足由白场 300 cd/m² 与 Minimum Active Black（HDR Addendum 8.4.4 给出）推导出的目标范围（考虑设备黑位裕度和环境残光）。            |
| **4. 色彩准确性（系统链路）**                    | HDR Color Accuracy                      | CTP 7.5.12 *SDR Color Accuracy* + HDR 对应测试 7.5.16；由 24/26/28 各设备测试引用                               | HDR Addendum 8.4.8 *Color Accuracy* + Annex A Table 9（色差阈值使用 CIEDE2000）                                    | CTP 7.5.12/7.5.16：播放一组标准色块（覆盖原色、次原色、肤色、灰阶），测量实测 XYZ/色度，与名义值比较，计算 ΔE。                       | HDR Addendum 8.4.8 要求：基于 CIEDE2000 的色差 ΔE 在定义的最大限值之下（具体限值在 Annex A 表中），以保证 HDR 内容在参考链路上的色彩可预期。                   |
| **5. 模式切换与 HDR 信令**                   | 自动 SDR/HDR 模式切换                         | CTP 7.5.31 *Automatic SDR/HDR Mode Switching*；由 26.2 / 28.2 Test Sequence 调用                       | HDR Addendum 第 7 章 *HDR D-Cinema Package* 中 ExtensionMetadata 对 HDR 信令的定义；DCSS 8.3 对放映机输入与模式管理的基本要求        | CTP 7.5.31：使用带/不带 HDR 信令的 DCP 序列，检查系统能否正确根据 CPL/Track File 元数据在 SDR/HDR 模式间切换，且无亮度突变或伽马跳变。 | 判定标准：HDR 内容必须在 HDR 模式下呈现，SDR 内容必须在 SDR 模式下呈现；切换过程中亮度/EOTF 不得出现明显闪烁或残留错误模式；HDR Addendum 7.2 中的 signaling 结构被正确解析。 |
| **6. 图像缩放 / 采样伪影**                    | Upscaling & Sampling Artifacts          | CTP 7.5.25 *Image Upscaling Artifacts*（由各设备 Test Sequence 调用）                                      | DCSS 对图像结构与容器的要求（3.2、8.2.2.7），保证缩放过程不破坏可读性与几何形态                                                            | CTP 7.5.25：用线条、zone-plate 和几何图案检查缩放和重采样带来的 aliasing、ringing、jaggies 等伪影。                   | 要求：在规定观影距离下不可出现严重 aliasing、ringing；CTP 配图 7.25(a)(b)(c) 提供了典型伪影示例作为参考。                                           |

> 小结：阶段二基本就是“把 7.5 全部当成系统级 test library”，每个设备类型（HDR Projector / Direct View / SDR Projector）在 24/26/28 章从这里抽取需要的测试组合。

---

## 四、阶段三：影厅级测试（Auditorium-Level）

> 这里的特点：**它既存在于 CTP 里，又“藏”在 SMPTE 环境规范里。**
> 不是单独一条“测影院好不好看”的 test，而是**所有影像测试的前置条件 + 部分 off-axis/反射测试本身也具有影厅属性**。

### 阶段三测试矩阵（影院空间 & 视角）

| 测试大类                          | 代表测试 / 子项                                             | CTP 入口路径                                                                                                                                   | 规范依据                                                                                                                                                                             | 测试过程摘要                                                                                     | 指标/出处                                                                                                               |
| ----------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **1. 测试环境几何与测量位置**            | Test Environment Geometry                             | CTP 7.1 *Test Environment for Image Measurements*：7.1.1 General；7.1.2 Projector；7.1.3 Direct View Display；7.1.4 Stereoscopic Measurements  | SMPTE RP 431-2 *Reference Projector and Environment for D-Cinema Quality*；SMPTE ST 431-1 *Screen Luminance Level, Chromaticity and Uniformity*（被 DCSS 和 Direct View Addendum 引用） | CTP 7.1：规定测量必须在**影厅内的参考观众位置**进行（通常是大厅中心、1.0–1.2 m 高度），并描述测量视角、设备预热时间、暗适应时间等。               | RP 431-2/ST 431-1 指定了参考观众位置、视角范围以及环境条件（例如墙面反射控制），这些成为 CTP 测试有效性的先决条件。                                               |
| **2. 环境光（Ambient Luminance）** | Ambient Light & Inactive Black Level                  | HDR 参考显示环境：HDR Addendum 8.3.1 *Ambient Luminance*；直显设备影院环境：CTP 7.5.32 *HDR Inactive Black Level (Direct View Display)*（考察设备灭像时的环境黑）        | HDR Addendum 8.3 对 Review Room / Exhibition Theater 的环境光上限提出要求；Direct View Addendum 6.8 Surface Reflectivity 与 6.3 最小黑位共同决定“影厅黑”                                                 | CTP 7.5.32：在设备无信号或显示全黑（inactive）时，从观众位置测量屏幕亮度，这一数值体现**环境光 + 表面反射**共同作用下的“影院地板黑”。           | HDR Addendum 8.3.1 要求环境光应被**最小化或消除**，并在附表中给出最大允许环境亮度；CTP 要求 Inactive Black 不得超过该环境上限与设备 Minimum Active Black 的组合阈值。 |
| **3. 水平/垂直视角均匀性**             | Horizontal / Vertical Full Screen Off-Axis Uniformity | CTP 7.5.19 *Horizontal and Vertical Full Screen Off-Axis Uniformity (Direct View Display)*（配合表 7.1）                                        | Direct View Addendum 6.6.2 *Horizontal Off-Axis Luminance Uniformity*、6.6.3 *Vertical Off-Axis Luminance Uniformity*（分别定义 ± 水平 / 垂直角度下的亮度变化容差）                                   | CTP 7.5.19：在指定的**水平/垂直偏轴角度**（例如 ±20° / ±30° 等），测量全屏白场亮度与色度，比较与轴上值的偏差，用以评估观众在不同座位行/列的体验一致性。 | Direct View Addendum 6.6.2/6.6.3 给出 off-axis 方向的最大亮度衰减与色度漂移百分比；这些指标直接决定“坐偏一点看是不是明显暗/偏色”。                            |
| **4. 白色色度均匀性（影厅水平）**          | White Chromaticity Uniformity (On/Off-Axis)           | CTP 7.5.14(b) + 7.5.21/7.5.23 相关的 chromaticity uniformity 测试（直显部分）                                                                         | Direct View Addendum 6.7 *White Chromaticity Uniformity*（6.7.1 轴上、6.7.2 水平 off-axis、6.7.3 垂直 off-axis）                                                                           | CTP：在不同座位对应视角测量白场色度，验证坐在不同位置观众看到的白色是否落在 D65（或规定白点）的小范围容差之内。                                | Direct View Addendum 6.7.x 给出 x,y 偏移容差；这本质上是一个**影厅级观感一致性**指标：同一部片子在不同座位不应出现“左边偏绿、右边偏红”的明显差异。                        |
| **5. 眩光/镜面反射与观众视角**           | Specular Glare Visibility                             | CTP 7.5.22 *Surface Reflectivity*（结果需要从观众位置进行主观复核）                                                                                         | Direct View Addendum 6.8.2 *Specular Reflectivity*；SMPTE 431-1 也要求屏幕周围反射控制，以减少二次反射进入观众视场                                                                                         | 在 CTP 实际执行时，除了定量测反射系数，还会从观众位置观察是否出现观众可感知的**亮点、眩光或对比度下降区域**，尤其在存在紧邻走道灯、出口牌提示灯时。             | Direct View Addendum 6.8.2 指出应限制镜面反射以避免在典型观众视角内产生明显反射热点；这些约束与 7.5.22 的反射测量结果一起用来判断影院是否适合安装对应直显设备。                   |

> 小结：阶段三里，**7.1 是“空间+环境”入口，7.5.19/22/32 等是“带影厅属性的测试”**，而具体阈值和行为定义来自 Direct View Addendum + HDR Addendum + SMPTE 431-1 / RP 431-2 联合约束。
