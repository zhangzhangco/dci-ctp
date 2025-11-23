# IDMS

## **5.6 FULL-SCREEN BLACK**

**ALIAS:** black screen, black-screen luminance

**DESCRIPTION:** We measure the center luminance and optionally the chromaticity coordinates and CCT of full-screen black. **Units:** $cd/m^2$ for luminance, no units for chromaticity coordinates, K (kelvin) for CCT. **Symbol:** $L_K$ for luminance, $x, y$ for the 1931 CIE chromaticity coordinates, $T_C$ for CCT.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 一排设置图标，显示预热、暗室环境、标准视角、无环境光等要求]

[图片描述: 测量示意图。一个LMD（亮度计）对准显示器屏幕中心，显示器显示全黑画面。]

**OTHER SETUP CONDITIONS:** Use a full-screen black pattern (e.g., FK\*.PNG). Note that the setup conditions require that the display be adjusted for useful operation as would be judged by trained observers.

**REPORTING:** Before reporting a low luminance of $1 cd/m^2$ or less for this measurement, the measurement equipment must be able to measure the luminance with a 4 % or less relative uncertainty and provide at least two significant figures (see comments at the beginning of this chapter). If a dark-adapted normal eye in a good darkroom can see any luminance from the screen with or without a mask, then regardless of the capability of the LMD, a zero-luminance black must not be reported. If you can’t measure it but can see it, then it has a luminance. This avoids the specsmanship of illegitimately reporting huge or infinite contrasts.

**COMMENTS:**
**(1) Zero-Luminance Black:** If a zero-luminance black is obtained then infinite contrasts should not be reported for any metric that uses this black. Instead, report the contrast as “undefined” and be sure that a white that characterizes the display is reported along with a zero-luminance black. Refer to § 5.1 for more information regarding zero-luminance blacks.
**(2) Display Modes:** Like many metrics throughout this document, this measurement can be highly sensitive to the mode setting of the display, see § 2.1 Display Description, Identification, & Modes and § 3.2 Controls Unchanged and Modes for details regarding mode settings and recording.

**—SAMPLE DATA ONLY—**
*Values shown here are for illustration purposes only; they do not suggest expected measurement results.*

| **REPORTING EXAMPLE** |                          |                  |                  |
| :-------------------------- | :----------------------: | :---------------: | :--------------: |
| **Full-Screen Black** | **$L (cd/m^2)$** | **CCT (K)** | **$x$** |
| **Black $L_K$**     |      **0.12**      |  **6070**  | **0.3195** |

[图片描述: 页面底部有一幅名为 "RUSTIC METROLOGY" (乡村计量学) 的漫画。
左边的角色拿着一本翻开的书，看起来很困惑，心想："I don't know why they had to make everything so complicated..." (我不明白他们为什么要把它搞得这么复杂...)
右边的角色看起来是一个像幽灵或云朵一样的生物，说道："They should have specified that everybody buy the same measurement meter, then everybody would get the same results." (他们应该规定每个人都买同样的测量仪表，那样每个人都会得到相同的结果。)]

---

## **5.14 FULL-SCREEN PRIMARY COLORS (R, G, and B)**

**ALIAS:** red-, green-, or blue-screen luminance, etc.

**DESCRIPTION:** Separately measure the luminance and chromaticity coordinates of the full-screen primary (R, G, B) colors. Use the procedure for Full-Screen White § 5.3.

[图片描述: 三个测量示意图，分别显示 LMD 测量红色、绿色和蓝色全屏画面。]

**OTHER SETUP CONDITIONS:**
Use a full-screen pattern of the primary colors (e.g., FR, FG, FB\_\#\#\#\#\#x\#\#\#\#\#.PNG).

**COMMENT:** The chromaticity gamut is the area in a two-dimensional chromaticity diagram—usually $u'v'$ CIE 1976 or $xy$ CIE 1931—that is defined by the above measured primary colors. The chromaticity gamut area is determined in § 5.18 below.

> [红色方框内的重要说明]
> The chromaticity gamut area has been inappropriately referred to as “color gamut” for many years. In addition, it has been plausibly claimed that $u'v'$ area is more appropriate than $xy$ area because of the nominal uniformity of the $u'v'$ chromaticity diagram. However, perceptual color differences in the $u'v'$ diagram depend on luminance. Color is three dimensional. In addition, the chromaticity gamut area metric significantly over-estimates the color capability of non-additive display systems. The ICDM now recommends the use of CIELAB color gamut volume and gamut ring metrics as described in Section 5.32. Please also refer to tutorial Chapter 21 on color metrology.

**5.15 FULL-SCREEN SECONDARY COLORS (C, M, and Y)**

**ALIAS:** cyan-, magenta-, or yellow-screen luminance, etc.

**DESCRIPTION:** Separately measure the luminance and chromaticity coordinates of the full-screen secondary (C, M, Y) colors. Use the procedure for Full-Screen White § 5.3.

[图片描述: 三个测量示意图，分别显示 LMD 测量青色(Cyan)、品红(Magenta)和黄色(Yellow)全屏画面。]

**OTHER SETUP CONDITIONS:**
Use a full-screen pattern of the secondary colors (e.g., FC, FM, FY\_\#\#\#\#\#x\#\#\#\#\#.PNG).

**5.16 FULL-SCREEN GRAYS ($R = G = B = S$)**

**ALIAS:** gray screen, gray-screen luminance

**DESCRIPTION:** Measure the luminance and chromaticity coordinates of a selected gray shade ($S = R = G = B$). Use the procedure for Full-Screen White § 5.3.

**OTHER SETUP CONDITIONS:** Use a full-screen gray-shade pattern (e.g., FS\#, FS\#\#\#\_\#\#\#\#\#x\#\#\#\#\#.PNG) where each R, G, B, primary is set at the same color level $S$.

[图片描述: 测量示意图，LMD 测量全屏灰色画面。]

**5.17 FULL-SCREEN ARBITRARY COLOR (R, G, B)**

**DESCRIPTION:** Measure the luminance and chromaticity coordinates of a specified color (R, G, B). Use the procedure for Full-Screen White § 5.3.

**OTHER SETUP CONDITIONS:** Use a full-screen color pattern where $(R, G, B)$ is specified (e.g., F\#\#\#-\#\#\#-\#\#\#\_\#\#\#\#\#x\#\#\#\#\#.PNG). These colors are not duplications of W, K, R, G, B, C, M, Y or S but are intermediate colors within the gamut. Gray levels ($R = G = B$) are a specialized case handled in the previous section. Use the procedure for Full-Screen White § 5.3.

[图片描述: 测量示意图，LMD 测量全屏紫色（任意颜色）画面。]

---

## **5.26 CHECKERBOARD LUMINANCE & CONTRAST (n×m)**

**DESCRIPTION:** We measure the black and white luminances at the vicinity of the center of a checkerboard pattern and calculate the contrast.
The specification $n \times m$ is the number of columns ($n$) by the number of rows ($m$). There are several types of checkerboards. One has even rows and columns in each dimension. Another has odd rows and columns in each dimension. Most will use either the even or odd patterns. There are two types that mix even and odd that will probably be rarely, if ever, used. The only type of checkerboard what will be measured using only one pattern is the even checkerboard. All the other types (containing an odd component) require two with one being the negative of the other. In the figure we show some examples for illustration. The contrast ratio is $C_C = L_W / L_K$ , where $L_W$ and $L_K$ are either the center measurements in the case of the odd checkerboard or averages of white and black boxes about the center in all other cases:

$$
\textbf{ODD: } C_C = \frac{L_W}{L_K}, \quad \textbf{EVEN \& EVEN/ODD: } C_C = \frac{L_{WL} + L_{WR}}{L_{KL} + L_{KR}}, \quad \textbf{ODD/EVEN: } C_C = \frac{L_{WT} + L_{WB}}{L_{KT} + L_{KB}} \quad (1)
$$

Here, the first letter in the subscript refers to black or white, and the second letter in the subscript is “L” for left, “R” for right, “T” for top, and “B” for bottom. See the following figure.

[图片描述: 展示了四种不同类型的棋盘格图案及其测量点位置。

1. **EVEN 6x6:** 显示中心附近的四个方块（左白右黑，下左黑下右白），标注了 $L_{WL}, L_{KR}, L_{KL}, L_{WR}$。
2. **ODD 5x5:** 显示两张互为反色的图（正片和负片），中心点分别为 $L_W$ 和 $L_K$。
3. **EVEN/ODD 6x5:** 同样显示正负两张图，关注中心左右的黑白块，标注 $L_{WL}, L_{KR}, L_{KL}, L_{WR}$。
4. **ODD/EVEN 5x4:** 同样显示正负两张图，关注中心上下的黑白块，标注 $L_{WT}, L_{KT}, L_{KB}, L_{WB}$。]

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).

**Table 1. Summary of checkerboard formats.**

| Checkerboard Pattern | Required Patterns | White |        Black        |      Contrast      |
| :------------------: | :---------------: | :---: | :-----------------: | :-----------------: |
|  **Columns**  |  **Rows**  |      |       $L_W$       |       $L_K$       |
|         Even         |       Even       |   1   | $L_{WL} + L_{WR}$ | $L_{KL} + L_{KR}$ |
|         Odd         |        Odd        |   2   |       $L_W$       |       $L_K$       |
|         Even         |        Odd        |   2   | $L_{WL} + L_{WR}$ | $L_{KL} + L_{KR}$ |
|         Odd         |       Even       |   2   | $L_{WT} + L_{WB}$ | $L_{KT} + L_{KB}$ |

---

[图片描述: 页面顶部是一排设置图标，包括标准视角、暗室等。]

**OTHER SETUP CONDITIONS:** Arrange to measure the black and white luminances at the center of the boxes at or in the vicinity of the center of a checkerboard pattern. If either the number of columns or the number of rows is odd, then the negative of the pattern must also be measured.

**PROCEDURE:** Display the desired checkerboard pattern. The luminances are measured at the center of the boxes ($\pm 3 \%$ of the screen diagonal) nearest the center of the screen according to the scheme shown in the figure (the “+” signs indicate the measurement positions). For **even** checkerboards measure the luminance at the center of the four boxes positioned next to the center of the DUT. For **odd** checkerboards measure at the center of the screen for each of the two (negative and positive) patterns obtaining the black and white luminance directly. For **even/odd** checkerboards measure the luminance of black and white on each side of the center of the screen for both the negative and positive patterns. For **odd/even** checkerboards measure the luminance of black and white above and below the center of the screen for both the negative and positive patterns.

**ANALYSIS:** See Table 1 for an outline of the procedure. For **even**, **even/odd**, and **odd/even** checkerboards, using the appropriate formula in Eq. 1, obtain the average of the black and white recorded luminances then calculate the contrast. For **odd** checkerboards calculate the contrast from the black and white luminances from the two patterns.

**REPORTING:** Report the $n \times m$ checkerboard used, the black luminance, the white luminance, and the checkerboard contrast to no more than three significant figures. Use the average luminance values when reporting the black and white luminances for the even, even/odd, or odd/even checkerboards.

**COMMENTS:**
**(1) Undefined Contrasts:** As discussed in § 5.1 Black & White Characterization Issues, if a zero-luminance black is determined for the blacks, it is best to report an “undefined contrast” and include both the white luminance and the determined black luminance. In no case may the contrast be reported as infinite.
**(2) Veiling Glare:** Be careful in making the black measurement. Avoid glare corruption of black by using a black-gloss frustum mask. See A2 Stray-Light Management & Veiling Glare for details on measurements of black in the presence of white. Some will want to measure all the checkerboard rectangles and base the contrast on an average value $C_{Cave}$ over the entire screen.
**(3) Gray Levels:** There may be instances where a white and black checkerboard is not as useful as a checkerboard composed of two different gray shades (or even colors). There can be no objection to such modifications provided all interested parties agree and the modification is clearly documented in any report. Some will want to measure all the checkerboard rectangles and base the contrast on an average value $C_{Cave}$ over the entire screen. Some will want to measure a wider or different sampling of rectangles than just at the center and report their averages. Provided all interested parties agree and the modifications are clearly stated and reported, there is not objection to such modifications.

**—SAMPLE DATA ONLY—**

| **Analysis – Sample Data** |                 |               |
| :-------------------------------- | :-------------- | :------------ |
| **Even Checkerboard**       |                 |               |
| **Checkerboard**            | **6 x 6** |               |
| $L_{WL}$                        | **101**   | $L_{KL}$    |
| $L_{WR}$                        | **105**   | $L_{KR}$    |
| $L_W$                           | **103**   | $L_K$       |
| $C_C$                           |                 | **245** |

| **Analysis – Sample Data** |                 |
| :-------------------------------- | :-------------- |
| **Odd Checkerboard**        |                 |
| **Checkerboard**            | **5 x 5** |
| $L_W$                           | **103**   |
| $L_K$                           | **0.464** |
| $C_C$                           | **245**   |

| **Reporting (Sample Data)** |                 |
| :-------------------------------- | :-------------- |
| **Checkerboard**            | **5 x 5** |
| $L_W$                           | **103**   |
| $L_K$                           | **0.464** |
| $C_C$                           | **245**   |

---

## **6.14 SLOPE MONOTONICITY OF GRAY SCALE**

**DESCRIPTION:** The slope monotonicity of the gray scale is investigated to determine if there are places where the gray shade does not properly increase with gray level. This metric answers the question: Does the slope of the gray scale continue to increase with gray level. That is, the gray-scale (gamma curve) and its derivative for each gray level luminance should be increasing in a monotonic manner, thus the second derivative must be positive.
**Units:** None, **Symbol:** None.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 测量示意图和设置图标。]

**PROCEDURE:**
Measure the luminance $L_i$ at the center of the screen for each of nine or 17 full-screen gray levels $V_i$ or use data collected in § 6.1 Gray Scale.

**ANALYSIS:**
Calculate the normalized luminance for each gray level:

$$
\overline{L}_i = L_i / L_W, \quad i = 1, 2, ... ,9
$$

Calculate the normalized gray level:

$$
\overline{V}_i = V_i / V_W, \quad i = 1, 2, ... ,9
$$

Calculate the first approximate derivative.

$$
\frac{\Delta L_i}{\Delta V_i} = \frac{\overline{L}_i - \overline{L}_{i-1}}{\overline{V}_i - \overline{V}_{i-1}}, \quad i = 2, ... ,9
$$

Calculate the second approximate derivative.

$$
\frac{\Delta^2 L_i}{\Delta V_i^2} = \frac{\frac{\Delta L_i}{\Delta V_i} - \frac{\Delta L_{i-1}}{\Delta V_{i-1}}}{\Delta V_i}, \quad i = 3, ... ,9
$$

[图片描述: 包含三个图表。

1. **Luminance, $L_i (cd/m^2)$ vs Gray Level, $V_i$:** 典型的Gamma曲线图，显示亮度随灰阶非线性上升。
2. **First Derivative:** 一阶导数图，显示随灰阶增加而单调上升。
3. **Second Derivative:** 二阶导数图，曲线有波动。其中在 Gray Level 200 附近有一个用红圈标记的点，显示数值突然下降至接近零或负值，表示问题区域。]

---

**REPORTING:** Report the slope monotonicity of the gray-scale as a table as shown below where any negative value of the second derivative is highlighted.

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements.*

| **Gray-Scale Monotonicity Analysis & Reporting** |            |        |                    |                          |                            |
| :----------------------------------------------------- | :---------: | :-----: | :----------------: | :-----------------------: | :-------------------------: |
|                                                        | Gray Level, |        |     Normalized     |  $1^{st}$ Derivative,  |   $2^{nd}$ Derivative,   |
| Level                                                  |   $V_i$   | $L_i$ | $\overline{L}_i$ | Levels,$\overline{V}_i$ | $\Delta L_i / \Delta V_i$ |
| White(9)                                               |     255     |  34.90  |       1.000       |           1.000           |           1.9636           |
| Level 8                                                |     223     |  26.30  |       0.754       |           0.875           |           1.6463           |
| Level 7                                                |     191     |  19.09  |       0.547       |           0.749           |           1.2718           |
| Level 6                                                |     159     |  13.52  |       0.387       |           0.624           |           1.2764           |
| Level 5                                                |     127     |  7.93  |       0.227       |           0.498           |           1.0184           |
| Level 4                                                |     95     |  3.47  |       0.099       |           0.373           |           0.5411           |
| Level 3                                                |     63     |  1.10  |       0.032       |           0.247           |           0.1863           |
| Level 2                                                |     31     |  0.28  |       0.008       |           0.122           |           0.0441           |
| Black (1)                                              |      0      |   0.1   |       0.003       |             0             |                            |

**COMMENTS:** The minimum number of gray level should be larger than eight. For certain applications it may be useful to explore more than nine or seventeen levels, even all the levels of gray or any segments in that scale. For example, it may be useful to examine the first 10 levels from black and the last 10 levels to white. This procedure can easily be extended to provide a detailed coverage of the gray scale. It is recommended that the slope monotonicity of gamma curve value should be larger than zero. Note that noise or uncertainties in the detector may artificially introduce negative second derivatives when the gray shades are close or at either end of the gray scale, white or black.

**REFERENCE:** EBU Tech. 3273-E, [http://tech.ebu.ch/publications](https://www.google.com/search?q=http://tech.ebu.ch/publications), 2009.

[图片描述: 页面右下方有一幅漫画。
左边的测量仪器（带有摄像头的盒子）头上冒出一个对话气泡："Not a clue\!\!\!" (毫无头绪\!\!\!)。
右边的奇怪生物（可能代表技术人员或复杂的信号）指着仪器说道："Diagnostics\!? What do we need diagnostics for?\! We know what we're doing\!" (诊断！？我们需要诊断做什么？！我们知道我们在做什么！)]

---

## **8.1 SAMPLED UNIFORMITY**

**DESCRIPTION:** Measure the luminance and chromaticity coordinates of a display at sampled locations to determine the overall uniformity of the display while showing a full screen pattern: white, black, gray shade, or some color. **Units:** none. **Symbol:** $\mathcal{U}$ for uniformity, $\mathcal{N}$ for nonuniformity.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 右上角显示测量示意图，使用多个LMD或者移动LMD测量屏幕上的不同点。左侧有一排设置图标。]

**OTHER SETUP CONDITIONS:** Prepare to measure five or nine points on the screen for the required full-screen pattern. The points are arranged in an X or 3x3 array, with the edge points located 1/10 of the vertical or horizontal screen size from the edges of the screen, and the middle points centered between the edges (see the figure). For example, if the screen is 100 cm wide and 80 cm tall, the edge points would be located 10 cm inward from the right and left edges and 8 cm inward from the top and bottom edges. All points should be measured with the LMD normal to the screen, so the LMD or the display should be translated to move from one measurement point to the next. The points are numbered left-to-right and top-to-bottom as one would read English.

[图片描述: 屏幕测量点分布图。
显示了一个屏幕，标出了宽度 H 和高度 V。
边缘点距离边缘 H/10 和 V/10。
显示了 5点法（菱形符号）和 9点法（加号符号）的位置。
中心点为 3 (5)。]

**PROCEDURE:** At each location measure luminance and chromaticity values of the full-screen pattern at the five or nine points. Make sure that the LMD is normal to the screen at each measurement point.

**ANALYSIS:**

1. For each full-screen pattern find the minimum $L_{min}$ and maximum $L_{max}$ luminance values of the set of five or nine measured points.
2. Calculate the nonuniformity for that full-screen pattern:
   $$
   \mathcal{N} = 100\% \left( 1 - \frac{L_{min}}{L_{max}} \right) \quad (1)
   $$
3. To calculate the uniformity of the chromaticity for each selected luminance level, find the $u'$ and $v'$ coordinates of each measured point. Find the two points that are farthest apart on a $u'v'$-graph, by using equation (2) to compare chromaticity differences between all 10 or 36 combinations of two points and report the largest value. Alternatively, the $u'$ and $v'$ points can be graphed to visually determine which pair is most separated, and $\Delta u'v'$ is still calculated:
   $$
   \Delta u'v' = \sqrt{(u'_1 - u'_2)^2 + (v'_1 - v'_2)^2} \quad (2)
   $$

**REPORTING:** Report whether five or nine samples are measured. Report the nonuniformity at each selected luminance level as a percentage to no more than three significant figures. Report the maximum chromaticity difference at each selected luminance level to no smaller uncertainty than ±.001.

**COMMENTS:** For some types of displays, such as those with dynamic backlights, the luminance levels might need to be adjusted. For example, black uniformity might be meaningless, but more levels of low-luminance data may be collected. Uniformity for $L_{max}=0$ is 100%, Keep in mind the difference between the input gray level and the associated luminance of the resulting gray shade. For example, an input gray level of 127 out of 256 does not produce 50% of the luminance of white\!

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements.*

| **Reporting Example (Sample Data)**                         |                               |                 |
| :---------------------------------------------------------------- | :---------------------------- | :-------------- |
| **9-Point Luminance and Color Nonuniformity (Normal View)** |                               |                 |
| Luminance                                                         | Nonuniformity,$\mathcal{N}$ | $\Delta u'v'$ |
| White (100%)                                                      | 30%                           | 0.005           |
| Gray (20%)                                                        | 35%                           | 0.008           |
| Dark Gray (5%)                                                    | 55%                           | 0.011           |
| Custom(3%)                                                        | 45%                           | 0.009           |
| Black (0% input)                                                  | 40%                           | 0.007           |

---

## **8.1.2 SAMPLED VANTAGE-POINT UNIFORMITY**

**DESCRIPTION:** Measure the luminance and chromaticity coordinates of full-screen white, black, and gray levels at five or nine points. The luminance nonuniformity is reported in percent deviation from the maximum value measured at each luminance level.
The maximum chromaticity difference is reported as $\Delta u'v'$. This test measures the luminance uniformity of the screen viewing each sampled point from the same direction as a human observer would do. **Units:** percent for luminance nonuniformity, and no units for $\Delta u'v'$ chromaticity difference. **Symbol:** none.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 测量示意图。所有的测量射线汇聚于一点（观察点），而非平行测量。]

**OTHER SETUP CONDITIONS:**
Full-screen white test pattern (100% luminance), full-screen gray test pattern (20% luminance), full-screen dark gray test pattern (5% luminance), and full-screen black test pattern (0% input gray level).
The same five or nine points are measured at each luminance level. The points are arranged in an X or 3x3 array and numbered left-to-right and top-to-bottom as one would read English. The edge points are located 1/10 of the vertical or horizontal screen size from the edges of the screen, and the middle points are centered between the edges (See Figure). For example, if the screen is 100 cm wide and 80 cm tall, the edge points would be located 10 cm inward from the right and left edges and 8 cm inward from the top and bottom edges. All points should be measured with the LMD peering through the same imaginary point in space at a position of the correct distance. There are two options for the distance:

1. **Near field - wide angles:** This standard distance in this document is 50 cm. Some prefer a shorter viewing distance of 30 cm (or the shortest focal distance of the LMD beyond 30 cm) to provide large measurement angles and more critically view the uniformity characteristics at the various directions. Making this measurement with an imaging LMD requires a wide-angle lens to achieve the same angle views at such short distances that a spot LMD achieves when it pivots at a close distance to the display.
2. **Far field - narrower angles:** Distance which corresponds to the visual acuity limit of an average user. To calculate the distance between the LMD and the screen, find the size of a screen pixel $P = V/N_V$ and multiply that size by 2750:

   $$
   D = 2570 \ V / N_V = 2570 \ P, \quad (1)
   $$

   where $P$ is the pixel pitch (assuming square pixels), $V$ is the vertical screen height, and $N_V$ is the number of pixels in the vertical direction. Use of this distance will give more gradual angles to the corners and will show less variations among the measured spots. See § 3.2.8 for more information on the determination of $D$.

[图片描述: 屏幕测量点分布图，与 8.1 节相同。]

**PROCEDURE:**

1. Locate the LMD at the correct viewing distance imaged on the center point per one of the two options given.
2. Measure the luminances and chromaticity coordinates for five or nine screen locations. The LMD must remain at approximately the same distance from the screen and pivot to measure through the imaginary point $D$. If the LMD is a flat-field compensated imaging colorimeter, all five or nine points may be measured at the same time at position $D$.

**ANALYSIS:**

1. At each luminance level, find the minimum and maximum luminance values of the set of five or nine measured points.
2. Calculate the nonuniformity at that luminance level:

---

## 8.1.3: SAMPLED VANTAGE-POINT CONTRAST UNIFORMITY

$$
\mathcal{N} = 100\% \left( 1 - \frac{L_{min}}{L_{max}} \right) \quad (2)
$$

3. To calculate the chromaticity uniformity for each luminance level, find the $u'$ and $v'$ coordinates of each measured point. Find the two points that are farthest apart on a $u'v'$-graph, by using Eq. (2) to compare chromaticity differences between all 10 or 36 combinations of two points, and report the largest value. Alternatively, the $u'$ and $v'$ points can be graphed to visually determine which pair is most separated and $\Delta u'v'$ is still calculated:

   $$
   \Delta u'v' = \sqrt{(u'_1 - u'_2)^2 + (v'_1 - v'_2)^2} \quad (2)
   $$

   *(注意：此处公式编号重复使用了 (2)，遵循原文档内容)*

**REPORTING:** Report whether five or nine samples are measured. Report the nonuniformity at each luminance level as a percentage to no more than three significant figures. Report the maximum chromaticity difference at each luminance level to no smaller uncertainty than ±.001.

**COMMENTS:** (1) **Dynamic Backlights:** For some types of displays, such as those with dynamic backlights, the luminance levels might need to be adjusted. For example, black uniformity might be meaningless, but more levels of low-luminance data may be collected. (2) **Luminance vs. Gray Value:** Keep in mind the difference between the input gray level and the associated luminance of the gray shade. For example, an input gray level of 127 out of 256 does not produce 50% of the luminance of white\!

**8.1.3 SAMPLED VANTAGE-POINT CONTRAST UNIFORMITY**

**DESCRIPTION:** Calculate the luminance contrast ratio at each of the five or nine points measured in § 8.1.2. **Units:** none for contrast ratio, percent for uniformity of contrast ratio. **Symbol:** $C_U$.

**SETUP:** None. This calculation uses the data from § 8.1.2.
[图片描述: 测量示意图同 8.1.2，显示汇聚于一点的测量方式。]

**PROCEDURE:**

1. Collect white and black luminance data for 5 or 9 points as per § 8.1.2.
2. For each of the 5 or 9 points, calculate a contrast ratio as per equation (1).
   $$
   \text{Contrast ratio } C_U = \frac{L_{White}}{L_{Black}} \quad (1)
   $$

**ANALYSIS:**

1. Find the minimum and maximum contrast ratios ($C_{min}$ and $C_{max}$) of the set of measured points.
2. Calculate the nonuniformity using this equation:
   $$
   \text{Nonuniformity: } \mathcal{N} = 100\% \left( 1 - \frac{C_{min}}{C_{max}} \right) \quad (2)
   $$

**REPORTING:** Report the number of samples used. Report $C_{min}$ and $C_{max}$, and the nonuniformity to no more than three significant figures. Report the nonuniformity in percent. Report the maximum color difference to no smaller uncertainty than ±.001.

**COMMENTS:** See comments of § 8.1.2.

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements.*

| **Reporting Example (Sample Data)** |                 |                 |
| :---------------------------------------- | :-------------- | :-------------- |
| **9-Point Contrast Ratio**          |                 |                 |
| **Nonuniformity (Vantage Point)**   |                 |                 |
| Luminance                                 | Nonuniformity   | $\Delta u'v'$ |
|                                           | $\mathcal{N}$ |                 |
| White (100%)                              | 30%             | 0.005           |
| Gray (20%)                                | 35%             | 0.008           |
| Dark Gray (5%)                            | 55%             | 0.011           |
| Custom(3%)                                | 45%             | 0.009           |
| Black (0% input)                          | 40%             | 0.007           |

*(注：上方表格为 Page 157 的示例数据，Page 158 的实际数据如下)*

| **—SAMPLE DATA ONLY—**            |     |
| :---------------------------------------- | :-- |
| **Reporting example (Sample Data)** |     |
| **9-Point Contrast Ratio**          |     |
| **Nonuniformity (Vantage Point)**   |     |
| Maximum,$C_{max}$                       | 800 |
| Minimum,$C_{min}$                       | 600 |
| Nonuniformity,$\mathcal{N}$             | 25% |

这是为您整理的后续页面提取内容，同样按照页码顺序排列，包含了文字、公式（LaTeX）、表格数据和图片描述。

---

## **9.4 VIEWING-ANGLE LUMINANCE CHANGE RATIO**

**ALIAS:** Luminance degradation ratio

**DESCRIPTION:** We measure the relative change between the luminance at any measurement direction and the luminance at the reference viewing direction for a full-screen pattern at center screen. It is mainly intended to be used with a white or gray-shade patterns. **Units:** None, a ratio. **Symbol:** $\Delta L/L_{Q,R}$.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 包含一系列设置图标（预热、暗室等）。右侧为测量示意图：LMD（亮度计）在不同角度测量显示屏。]

**OTHER SETUP CONDITIONS:** Use a full-screen color $Q$ pattern: white ($Q = W$), black ($Q = K$), or gray ($Q = S$, with $R = G = B$). (Here, the index $Q$ is a variable that specifies the selected full-screen display color.)

**PROCEDURE:**

1. Apply the selected full-screen pattern of color $Q$.
2. Measure the luminance $L_Q(\theta, \phi)$ values at each selected measurement direction for full screen color $Q$ to obtain the four-point viewing-angle data. Optionally the generalized viewing-angle data or viewing-field polar data can be obtained.
3. If not part of the selected measurement direction set, repeat this measurement at the reference viewing direction ($\theta_{vd}, \phi_{vd}$), which will typically be the normal direction (0, 0): $L_{Q,R} \equiv L_Q(\theta_{vd}, \phi_{vd})$.
4. Compute the luminance change ratio $\Delta L_Q(\theta, \phi)/L_{Q,R}$ for each measurement directions as follows:

**ANALYSIS:** Luminance change ratio $\Delta L_Q(\theta, \phi)/L_{Q,R}$ is expressed as follows for any measurement direction ($\theta, \phi$):

$$
\frac{\Delta L}{L_R} \equiv \frac{\Delta L_Q(\theta, \phi)}{L_{Q,R}} = \frac{L_{Q,R} - L_Q(\theta, \phi)}{L_{Q,R}} \quad (1)
$$

Here, $L_R \equiv L_{Q,R} \equiv L_Q(\theta_{vd}, \phi_{vd})$, is the luminance of the full-screen pattern $Q$ in the reference viewing direction.

**REPORTING:** The off-normal variation in the measured optical characteristics can be presented in two-dimensional plots. Optionally, a threshold value can be included in these plots. You should clearly state the reference viewing direction if not the normal direction (z-axis). If a threshold value for the luminance change ratio is of interest, then it should be reported along with the threshold level used; e.g., $L_{Q,R} \leq 0.50, 0.30$, or some other agreed-upon threshold. The resulting threshold viewing-angles can be tabulated for all viewing directions with no more than three significant figures.

**COMMENTS:** **(1) Colors:** Whereas this measurement normally employs white, black, or gray-shade full-screen patterns, it can also be applied to full-screen colors as agreed upon by all interested parties.

**DATA EXAMPLE:** Example of the luminance change ratio $\Delta L/L_{S=200,R}$, in the vertical viewing direction, relative to normal viewing direction.

[图片描述: 左图为折线图，X轴为垂直视角（度），Y轴为亮度变化率 (Luminance change ratio)。曲线呈“V”字形，显示偏离中心角度越大，变化率越大。]

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements*

| **Analysis and Reporting Viewing-angle color variation** |                 |
| :------------------------------------------------------------- | :-------------- |
| $\Delta L/L_{S=200,R} = 0.40$                                |                 |
| **Direction**                                            | **Angle** |
| Up:$\theta_U$                                                | $54^\circ$    |
| Down:$\theta_D$                                              | $14^\circ$    |
| Right:$\theta_R$                                             | $64^\circ$    |
| Left:$\theta_L$                                              | $62^\circ$    |

---

## **9.6 VIEWING-ANGLE COLOR VARIATION**

**ALIAS:** viewing-angle color change

**DESCRIPTION:** Many color coordinates definitions have been standardized and can be used to define the color variation with respect to the measurement direction. They all require the measurements of $X, Y$ and $Z$ tristimulus values. **Units:** None. **Symbol:** $\Delta u'v'_Q$.
It is here advised to use the $(u',v')$ chromaticity coordinates system and to express the color variation as a distance $\Delta u'v'$ with respect to values observed at the reference viewing direction (the normal, the on-axis z-direction unless otherwise specified).

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 设置图标栏。]

**OTHER SETUP CONDITIONS:** Use a full-screen W or S achromatic display pattern. Although it is mainly intended for full white or gray shades patterns, this metric can also be applied to any other full-screen pattern as needed.

**PROCEDURE:**

1. Apply the selected W or S (below referred as $Q$) full-screen pattern.
2. Measure the $X, Y$ and $Z$ tristimulus values or $(x, y)$ or $(u',v')$ color coordinates at each selected measurement direction $(\theta, \phi)$ to obtain the four-point viewing-angle data. Optionally the generalized viewing-angle data or viewing-field polar data can be obtained.
3. If not part of the selected measurement direction set, repeat this measurement at the reference viewing direction for $u'_{Qref}$ and $v'_{Qref}$. If the reference direction is normal to the screen (along the z-axis) then $u'_{Qref} = u'_{Qref}(0, 0)$ and $v'_{Qref} = v'_{Qref}(0, 0)$, otherwise $u'_{Qref} = u'_{Qref}(\theta_{ref}, \phi_{ref})$ and $v'_{Qref} = v'_{Qref}(\theta_{ref}, \phi_{ref})$.
4. If needed compute $u'_Q(\theta, \phi)$ and $v'_Q(\theta, \phi)$ for each measurement directions.
5. Compute $\Delta u'v'_Q(\theta, \phi)$.

**ANALYSIS:** Color variation is expressed as follows:

$$
\Delta u'v'_Q = \sqrt{[u'_Q(\theta, \phi) - u'_{Qref}]^2 + [v'_Q(\theta, \phi) - v'_{Qref}]^2} \quad (1)
$$

**REPORTING:** The off-normal variation in the measured optical characteristics can be presented in two-dimensional plots. Optionally, a threshold value can be included in these plots. You should clearly state the reference viewing direction if not the normal direction (z-axis). If a threshold value for the color variation is of interest, then it should be reported along with the threshold level used; e.g., $\Delta u'v'_Q(\theta, \phi) \leq 0.010, 0.015, 0.020$, or some other agreed-upon threshold. The resulting threshold viewing-angles can be tabulated for all viewing directions with no more than three significant figures.

**COMMENTS:** It must be noticed that the proposed thresholds are larger than what is referred to for the evaluating color change visibility in a scene (like for uniformity measurements), which is close to 0.004. Indeed, in the case of viewing direction measurements or human evaluation the sampled and reference values cannot be observed at the same time.

**DATA EXAMPLE:** LEFT - Example of the color variation $\Delta u'v'_{S=200}$, in the vertical viewing direction, relative to normal viewing direction. RIGHT - Angles for a color change of $\Delta u'v'_{Q=W} = 0.005$.

[图片描述: 左图为折线图，显示颜色变化量随垂直视角的变化。]

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements*

| **Analysis and Reporting Viewing-angle color variation** |                 |
| :------------------------------------------------------------- | :-------------- |
| $\Delta u'v'_{S=200} = 0.010$                                |                 |
| **Direction**                                            | **Angle** |
| Up:$\theta_U$                                                | $50^\circ$    |
| Down:$\theta_D$                                              | $20^\circ$    |
| Right:$\theta_R$                                             | $64^\circ$    |
| Left:$\theta_L$                                              | $62^\circ$    |

---

## **11.2.2 SAMPLING-SPHERE IMPLEMENTATION**

**DESCRIPTION:** Measure an appropriate reflection parameter (reflectance factor, luminance factor, diffuse reflectance, and the spectral counterparts) of a display at an $8^\circ$ detector inclination angle, using a selected color $Q$ ($Q$ = W, R, G, B, C, M, Y, K, S, etc.) screen, under uniform diffuse hemispherical illumination with the specular component included.
The sampling sphere is a useful apparatus for obtaining uniform hemispherical diffuse illumination for large displays that cannot realistically be placed within an integrating sphere.
**Units:** none; and **Symbol:** $R_{d/8}$, $\rho_{d/8} = \beta_{d/8}$, $R(\lambda)_{d/8}$, etc.

[图片描述: 右上角 Fig. 1. Sampling sphere with specular included configuration.
展示了一个采样积分球贴在显示器(Display)表面。
Light source (Lamp) 照亮积分球内部。
Baffle (挡板) 防止光线直射。
Measurement Port 位于 $8^\circ$ 角度。
Specular Point 位于 $-8^\circ$ 位置。
Sample Port 贴合显示器。]

**ADDITIONAL SETUP:** The following requirements are needed for this particular implementation of hemispherical illumination in addition to the setup conditions described in the main section. The detector is aligned to view the center of the surface of the display through a hole in the illuminating surround at an angle of $\theta_d = 8^\circ (-0^\circ +2^\circ)$ from the display surface normal.
**Surround:** The display surface should be placed as close as possible to the inner white surface of the sphere. If the emitting surface of the display is significantly recessed from the front surface of the display, then the sphere sample port size is important: For a 1 % introduced error the ratio of the diameter $D_{sp}$ of the sample port to the recess depth $h$ should be $D_{sp}/h = 8$; for a 0.1% introduced error, $D_{sp}/h = 16$. Care should be taken to avoid putting excessive pressure on the display surface. A small port with a diffuser and detector may be useful to monitor the stability of the source during the measurement. Be sure that the detector is far back from the measurement port so that the measurement results are not affected by the bright surround of the sample port. Be sure that the measurement field is centered in the measurement port. Also to be avoided in the measurement is any vignette shadowing near the round edge of the sampling port that arises from its thickness.

[图片描述: Fig. 2. Sampling-sphere illustrations. 左上图和左下图展示了球体放置在屏幕前的3D示意图。右图为侧视图，显示探测器以 $\theta_d$ 角度通过球体观测屏幕。虚线显示了显示器的法线方向。]

**Illuminance Measurement:** The illuminance (or spectral irradiance) on the display can be determined by measuring the interior sphere wall adjacent to the sample port. The wall reflectance factor $\rho_{wall}$ of that interior wall location can be determined by comparing the luminance $L_{wall}$ (or spectral radiance) of the wall with that of a calibrated white standard placed at the sample port: $\rho_{wall} = \rho_{std} L_{wall} / L_{std}$, where $L_{std}$ is the luminance measured from the white standard in the plane of the sample port. The same relationship is also used for spectral measurements. The illuminance might also be measured using a photopic photodiode. We will assume a wall luminance measurement here. Refer to § 11.1.3 Source Measurements and Characterization for tips on making illuminance measurements.

**PROCEDURE (PHOTOMETRIC):**

1. Turn ON the display to the desired color field and place it against the opening of the sphere sample port at the desired orientation relative to the detector. Turn ON the sphere lamps and allow lamps and display emission to stabilize.
2. Measure the luminance $L_{Qon}$ at the center of the display color pattern with the hemispherical surround ON.
3. Align the detector to the calibrated interior wall location of the sampling sphere adjacent to the sample port and measure the luminance $L_{wallQon}$ from the sphere wall.
4. Turn OFF the sampling sphere hemispherical diffuse illumination. This may be accomplished by turning OFF the light source. If the sphere light is input by a portable source (like an optical fiber bundle), then the light can be turned OFF by disconnecting at the light source side so that the interior conditions and performance of the sphere are not changed. This step is not needed for reflective displays.
5. Measure the luminance $L_{wallQoff}$ of the reference standard with the hemispherical surround OFF and the display with it’s color state ON. Values are zero for reflective displays.
6. Align the detector to the center of the display’s color pattern and measure its luminance $L_{Qoff}$ with the surround OFF. Values are zero for reflective displays.

**ANALYSIS:** Same as main section, except that $\rho_{wall}$ is used in Equation (1) instead of $\rho_{std}$, and all the $L_{std...}$ luminances are replaced by $L_{wall...}$.

**REPORTING:** Same as main section.

[图片描述: 页面底部是一幅名为 "RUSTIC METROLOGY" (乡村计量学) 的漫画。
一个角色正看着架设在三脚架上的设备。显示器前面放着一个类似泡沫保温箱的东西（用来模拟积分球）。
文字说明: "You might be a Rustic if you use a beer cooler as an integrating sphere." (如果你用啤酒冷藏箱当作积分球，那你可能是个乡巴佬。)]

---

## **15.5 SEQUENTIAL CONTRAST RATIO**

**ALIAS:** contrast, interframe contrast

**DESCRIPTION:** We measure the dynamic range of the display. This test is similar to that for a flat panel display, except that the luminance meter has been replaced by an illuminance meter. **Symbol:** $C_{seq}$.

**APPLICATION:** All front projection displays

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 设置图标，右侧为全白和全黑画面的示意图。]

**OTHER SETUP CONDITIONS:** If the projector lens has zoom and offset (or shift) controls, set the zoom control to “wide angle” and the offset (or shift) control to halfway between no offset and one end of its range. Setup an illuminance meter on the axis of the projector. Test patterns: full screen white and full screen black.

**PROCEDURE:**

1. Measure the peak white illuminance, $E_W$.
2. Without changing any of the controls measure the black illuminance $E_K$.

**ANALYSIS:** Sequential contrast ratio is:

$$
C_{seq} = E_W / E_K \quad (1)
$$

**REPORTING:** Report the Sequential Contrast, which has been calculated above.

**COMMENTS:** Be careful of stray light in making the black measurement.

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements.*

|         **Example:**         |                                    |                                    |
| :--------------------------------: | :--------------------------------: | :---------------------------------: |
| **Center White Illuminance** | **Center Black Illuminance** | **Sequential Contrast Ratio** |
|          **102.6**          |           **0.09**           |           **1140**           |

## **15.6 CHECKERBOARD CONTRAST RATIO**

**ALIAS:** ANSI contrast, intraframe contrast

**DESCRIPTION:** We measure the contrast ratio of a checkerboard pattern. This test is similar to that for a flat panel display, except that the luminance meter has been replaced by an illuminance meter. **Symbol:** $C_{CB}$.

**APPLICATION:** All front projection displays.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 设置图标。]

**OTHER SETUP CONDITIONS:** Centralize the zoom and offset controls of the projection lens. Setup a black cloth, which covers the projection area, on the axis of the projector. Test pattern: $N \times M$ checkerboard with and equal number of alternating solid black and white rectangles. Mark the location on the cloth of the center of each of the test pattern rectangles.

**PROCEDURE:** Measure the illuminance at the center of each of the rectangles of the test pattern.

**ANALYSIS:** Calculate the checkerboard contrast as follows:

$$
C_{CB} = \sum_{ij} C_W / \sum_{ij} C_K
$$

*(注：公式原文如此，通常理解为所有白块平均值与所有黑块平均值的比值，或白块总和与黑块总和的比值)*

**REPORTING:** Report the checkerboard contrast calculated above and the test pattern used.

**COMMENTS:** The black illuminance can be very difficult to measure because of stray light and reflections from the room, even if a black screen is used. Accordingly, it is very important that a stray-light-elimination tube (SLET) or a projection mask be used when measuring the black illuminance.

**—SAMPLE DATA ONLY—**
*Do not use any values shown to represent expected results of your measurements.*

|   **Example for 4 x 4 pattern:**   |                |                |                |
| :---------------------------------------: | :-------------: | :-------------: | :-------------: |
|        [图片: 4x4棋盘格，正反两种]        |  **or**  |                |                |
| **Screen Illuminance at 16 points** |                |                |                |
|              **0.066**              | **16.12** | **0.078** | **15.99** |
|              **15.42**              | **0.068** | **21.21** | **0.075** |
|              **0.069**              | **22.95** | **0.081** | **22.89** |
|              **19.65**              | **0.075** | **25.63** | **0.072** |
|         Sum of White Illuminances         |                |                |      53.42      |
|         Sum of Black Illuminances         |                |                |      0.198      |
|           Checkerboard Contrast           |                |                |       270       |

---

## **17.2.2 STEREOSCOPIC EXTINCTION RATIO & CROSSTALK**

**DESCRIPTION:** Measure the stereoscopic extinction ratio (crosstalk between the left and right image channels) of a stereoscopic display that uses eyeglasses.
**Units:** none **Symbols:** $X_{\mathcal{L}}, X_{\mathcal{R}}, X_{\mathcal{L}}, X_{\mathcal{R}}$

**APPLICATION:** This measurement can be applied to transmissive or emissive stereoscopic displays that use eyeglasses of either circular or linear polarization, shutter glasses, or color separation glasses.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 设置图标。右侧示意图显示 Left Eye (左下白右上黑) 和 Right Eye (左下黑右上白) 的测试图案。]

**OTHER SETUP CONDITIONS:**
**(1) Number of pixels measured:** Usually, in practice, we measure fewer than 500 pixels without any bad effects, but dead or constantly white (sub)pixels could then potentially affect the measurement result.
**(2) Angular aperture:** The angular aperture must be less than or equal to $1^\circ$ so that the lens of the LMD better simulates the room-light pupil size of the eye (5 mm).
**(3) Alignment pattern:** Use an appropriate test patterns to locate the center screen and for focusing the LMD.
**(4) Measurement patterns:** Provide appropriate patterns for measurements (a) white for the left eye and black for the right eye and (b) black for the left eye and white for the right eye.
**(5) LMD location:** If there is a manufacturer-specified location for obtaining the best 3D experience, then place the LMD at that designated or design eye position.
**(6) Filters or glasses:** The LMD should have filters (or glasses) in front of its lens that match the right/left filters of the glasses used for viewing the display...

**PROCEDURE:** Notation: $\mathcal{L} =$ left eye; $\mathcal{R} =$ right eye.
**Left-eye luminances:**

1. Put the left-eye filter or left side of glasses in front of the LMD lens.
2. Position the LMD at the designated eye position (DEP).
3. Use test pattern with white for left eye and black for right eye. [图标: 左白右黑]
4. Measure the luminance at the display center ($L_{\mathcal{L}WK}$).
5. Use test pattern with black for left eye and white for right eye. [图标: 左黑右白]
6. Measure the luminance at the display center ($L_{\mathcal{L}KW}$).
7. Use test pattern with black for both eyes. [图标: 全黑]
8. Measure the luminance at the display center ($L_{\mathcal{L}KK}$).

**Right-Eye Luminances:**
9. Put the right-eye filter or right side of the glasses in front of the LMD lens.
10. Position the LMD at the designated eye position (DEP).
11. Use test pattern with black for left eye and white for right eye. [图标: 左黑右白]
12. Measure the luminance at the display center ($L_{\mathcal{R}KW}$).
13. Use test pattern with white for left eye and black for right eye. [图标: 左白右黑]
14. Measure the luminance at the display center ($L_{\mathcal{R}WK}$).
15. Use test pattern with black for both eyes.
16. Measure the luminance at the display center ($L_{\mathcal{R}KK}$).

**ANALYSIS:** Calculate the extinction ratio at display center for the left and right eye:

$$
X_{sys\mathcal{L}} = \frac{L_{\mathcal{L}WK} - L_{\mathcal{L}KK}}{L_{\mathcal{L}KW} - L_{\mathcal{L}KK}}, \quad X_{sys\mathcal{R}} = \frac{L_{\mathcal{R}KW} - L_{\mathcal{R}KK}}{L_{\mathcal{R}WK} - L_{\mathcal{R}KK}} \quad (1)
$$

Calculate the crosstalk at display center for the left and right eye:

$$
X_{\mathcal{L}} = \frac{L_{\mathcal{L}KW} - L_{\mathcal{L}KK}}{L_{\mathcal{L}WK} - L_{\mathcal{L}KK}}, \quad X_{\mathcal{R}} = \frac{L_{\mathcal{R}WK} - L_{\mathcal{R}KK}}{L_{\mathcal{R}KW} - L_{\mathcal{R}KK}} \quad (2)
$$

**REPORTING:** Reported the extinction ratios and cross talks to no more than three significant figures using either a number or a percentage.
**COMMENTS:** Light leakage between the channels is included in this measurement. This measurement result provides a characterization of crosstalk or what some call ghosting.

**—SAMPLE DATA ONLY—**

| **Analysis example ($cd \ m^{-2}$)** |                |
| :------------------------------------------- | :------------: |
| $L_{\mathcal{L}WK}$                        | **241** |
| $L_{\mathcal{L}KW}$                        | **0.58** |
| $L_{\mathcal{L}KK}$                        | **0.09** |
| $L_{\mathcal{R}KW}$                        | **272** |
| $L_{\mathcal{R}WK}$                        | **0.66** |
| $L_{\mathcal{R}KK}$                        | **0.08** |

| **Reporting example** |                  |
| :-------------------------- | :--------------: |
| $X_{sys\mathcal{L}}$      |  **492**  |
| $X_{sys\mathcal{R}}$      |  **469**  |
| $X_{\mathcal{L}}$         | **0.20 %** |
| $X_{\mathcal{R}}$         | **0.21 %** |

---

## **17.2.3 STEREOSCOPIC CONTRAST RATIO**

**DESCRIPTION:** Measure the stereoscopic contrast ratios of a stereoscopic display that uses eyeglasses. **Units:** none. **Symbols:** $C_{\mathcal{L}}, C_{\mathcal{R}}$.

**APPLICATION:** This measurement can be applied to transmissive or emissive stereoscopic displays that use eyeglasses of either circular or linear polarization, shutter glasses, or color separation glasses.

**SETUP:** As defined by these icons, standard setup details apply (§ 3.2).
[图片描述: 设置图标和示意图。]

**OTHER SETUP CONDITIONS:** (1) - (6) [Same as Section 17.2.2]...

**PROCEDURE:** Notation: $\mathcal{L} =$ left eye; $\mathcal{R} =$ right eye.
**Left-eye luminances:**

1. Put the filter or glasses for the left eye in front of the LMD optics.
2. Position the LMD at the designated eye position (DEP).
3. Use test patterns for left and right eyes: (a) white/white.
4. Measure the luminance at the display center ($L_{\mathcal{L}WW}$).
5. Use test patterns for left and right eyes: (b) black/black.
6. Measure the luminance at the display center ($L_{\mathcal{L}KK}$).

**Right-eye luminances:**
7. Put the filter of the right eye in front of the LMD optics.
8. Position the LMD at the designated eye position (DEP).
9. Use test patterns for left and right eyes: (a) white/white.
10. Measure the luminance at the display center ($L_{\mathcal{R}WW}$).
11. Use test patterns for left and right eyes: (b) black/black.
12. Measure the luminance at the display center ($L_{\mathcal{R}KK}$).

**ANALYSIS:** Calculate the stereo contrast ratios $C_i (i = \mathcal{L}, \mathcal{R})$ at display center for the left and right eye:

$$
C_{\mathcal{L}} = \frac{L_{\mathcal{L}WW}}{L_{\mathcal{L}KK}}, \quad (1)
$$

$$
C_{\mathcal{R}} = \frac{L_{\mathcal{R}WW}}{L_{\mathcal{R}KK}} \quad (2)
$$

**REPORTING:** The reported stereo contrast ratio is the contrast value for each channel (left and right eyes).
**COMMENTS:** Light leakage between the channels is included in this measurement. This measurement is done only in the display center.

**—SAMPLE DATA ONLY—**

| **Analysis example ($cd \ m^{-2}$)** |                |
| :------------------------------------------- | :-------------: |
| $L_{\mathcal{L}WW}$                        | **274.4** |
| $L_{\mathcal{L}KK}$                        | **0.52** |
| $L_{\mathcal{R}WW}$                        |  **240**  |
| $L_{\mathcal{R}KK}$                        | **0.35** |

| **Reporting example** |              |
| :-------------------------- | :-----------: |
| $C_{\mathcal{L}}$         | **524** |
| $C_{\mathcal{R}}$         | **685** |

---

## **17.2.4 STEREOSCOPIC LUMINANCE & LUMINANCE DIFFERENCE**

**DESCRIPTION:** Measure the average stereoscopic luminance of a stereoscopic display that uses eyeglasses and the luminance difference between the two eyes (channels).
**Unit:** $cd \ m^{-2}$. **Symbols:** $L_{ave}, L_{gmean}, \Delta L$

**APPLICATION:** This measurement can be applied to transmissive or emissive stereoscopic displays that use eyeglasses of either circular or linear polarization, shutter glasses, or color separation glasses.

**SETUP:** As defined by these icons, standard setup details apply (sec 3.2).

**OTHER SETUP CONDITIONS:** (1) - (6) [Same as Section 17.2.2]...

**PROCEDURE:** Notation: $\mathcal{L} =$ left eye; $\mathcal{R} =$ right eye.
**Left-eye luminances:**

1. Put the left-eye filter or left side of glasses in front of the LMD lens.
2. Position the LMD at the designated eye position (DEP).
3. Use test patterns for left and right eyes: (a) white/white.
4. Measure the luminance at the display center ($L_{\mathcal{L}WW}$).
5. Use test pattern with black for left eye and white for right eye.
6. Measure the luminance at the display center ($L_{\mathcal{L}KW}$).

**Right-eye luminances:**
7. Put the right-eye filter or right side of the glasses in front of the LMD lens.
8. Position the LMD at the designated eye position (DEP).
9. Use test patterns for left and right eyes: (a) white/white.
10. Measure the luminance at the display center ($L_{\mathcal{R}WW}$).
11. Use test pattern with white for left eye and black for right eye.
12. Measure the luminance at the display center ($L_{\mathcal{R}WK}$).

**ANALYSIS:**

1. Calculate the channel (subscript “h”) luminances of the left channel and the right channel:

$$
L_{\mathcal{L}hW} = L_{\mathcal{L}WW} - L_{\mathcal{L}KW} \text{ and } L_{\mathcal{R}hW} = L_{\mathcal{R}WW} - L_{\mathcal{R}WK} \quad (1)
$$

2. Calculate the average stereo luminance ($L_{ave}$) and geometric mean:

$$
L_{ave} = \frac{L_{\mathcal{L}hW} + L_{\mathcal{R}hW}}{2} \text{ and } L_{gmean} = \sqrt{L_{\mathcal{L}hW} L_{\mathcal{R}hW}} \quad (2)
$$

3. Calculate the relative luminance difference ($\Delta L$) between the two channels (left and right eyes):

$$
\Delta L = \frac{| L_{\mathcal{L}hW} - L_{\mathcal{R}hW} |}{\min(L_{\mathcal{L}hW}, L_{\mathcal{R}hW})} \quad (3)
$$

**REPORTING:** Report the channel luminances, average stereo luminance, and luminance difference to no more than three or four significant figures. The luminance difference may be reported as a number or a percentage.

**COMMENTS:** None.

**—SAMPLE DATA ONLY—**

| **Analysis example ($cd \ m^{-2}$)** |      |
| :------------------------------------------- | :---: |
| $L_{\mathcal{L}WW}$                        |  240  |
| $L_{\mathcal{L}KW}$                        | 0.49 |
| $L_{\mathcal{R}WW}$                        | 274.4 |
| $L_{\mathcal{R}WK}$                        | 0.58 |

| **Reporting example ($cd \ m^{-2}$)** |      |
| :-------------------------------------------- | :---: |
| $L_{\mathcal{L}hW}$                         | 239.5 |
| $L_{\mathcal{R}hW}$                         | 273.8 |
| $L_{ave}$                                   | 256.7 |
| $L_{gmean}$                                 | 256.1 |
| $\Delta L (\%)$                             | 14.3% |
