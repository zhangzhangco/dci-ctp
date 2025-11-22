# Direct View Display D-Cinema Addendum  

Version 1.2 (build f24b77c)  

# Notice  

Digital Cinema Initiatives, LLC (DCI) is the author and creator of this specification for the purpose of copyright and other laws in all countries throughout the world. The DCI copyright notice must be included in all reproductions, whether in whole or in part, and may not be deleted or attributed to others. DCI hereby grants to its members and their suppliers a limited license to reproduce this specification for their own use, provided it is not sold. Others should obtain permission to reproduce this specification from Digital Cinema Initiatives, LLC.  

This document is a specification developed and adopted by Digital Cinema Initiatives, LLC. This document may be revised by DCI. It is intended solely as a guide for companies interested in developing products, which can be compatible with other products, developed using this document. Each DCI member company shall decide independently the extent to which it will utilize, or require adherence to, these specifications. DCI shall not be liable for any exemplary, incidental, proximate or consequential damages or expenses arising from the use of this document. This document defines only one approach to compatibility, and other approaches may be available to the industry.  

his document is an authorized and approved publication of DCI. Only DCI has the right and authority to revise or change the material contained in this document, and any revisions by any party other than DCI are unauthorized and prohibited.  

Compliance with this document may require use of one or more features covered by proprietary rights (such as features which are the subject of a patent, patent application, copyright, mask work right or trade secret right). By publication of this document, no position is taken by DCI with respect to the validity or infringement of any patent or other proprietary right. DCI hereby expressly disclaims any liability for infringement of intellectual property rights of others by virtue of the use of this document. DCI has not and does not investigate any notices or allegations of infringement prompted by publication of any DCI document, nor does DCI undertake a duty to advise users or potential users of DCI documents of such notices or allegations. DCI hereby expressly advises all users or potential users of this document to investigate and analyze any potential infringement situation, seek the advice of intellectual property counsel, and, if indicated, obtain a license under any applicable intellectual property right or take the necessary steps to avoid infringement of any intellectual property right. DCI expressly disclaims any intent to promote infringement of any intellectual property right by virtue of the evolution, adoption, or publication of this document.  

# Table of Contents  

1 INTRODUCTION 6   
2 SCOPE 6   
3 NORMATIVE REFERENCES 6   
4 TERMS AND DEFINITIONS 7 4.1 D-Cinema Direct View Display.. 4.2 Screen . 4.3 Cabinet ... 4.4 Module. 4.5 Display Pixel.. 4.6 Edit Unit .. 4.7 Minimum Active Black Level .. .8  

# 5 INPUT REQUIREMENTS 8  

5.1 Standard Dynamic Range Mode.. ..8   
5.2 High Dynamic Range Mode... ...8   
5.3 Other Input Modes. .8   
5.4 Auxiliary Input Connection. ..8   
5.5 Edit Unit .  

# 6 IMAGE PARAMETERS  

# 6.1 Display Pixels..  

6.1.1 Pixel Visibility .. .9   
6.1.2 Display Pixel Count... .9   
6.1.3 Image Scaling..   
6.1.4 Sub-pixel Spatial Coincidence... .9   
6.2 Calibration White Point and Luminance.... .9   
6.2.1 Standard Dynamic Range Mode... .9   
6.2.2 High Dynamic Range Mode.. .10   
6.3 Minimum Active Black Level .. ..10   
6.3.1 Standard Dynamic Range Mode.... ..10   
6.3.2 High Dynamic Range Mode.. .10   
6.4 Color Gamut and Accuracy . .10   
6.4.1 Standard Dynamic Range Mode.. ...10   
6.4.2 High Dynamic Range Mode.. ..10   
6.5 Dithering .. .10   
.10  

6.5.1 Spatial Dithering.  

6.5.2 Temporal Dithering... ...10   
6.6 Luminance Uniformity.. .11   
6.6.1 On-Axis Luminance Uniformity... ..11   
6.6.1.1 Inter-Module Luminance Uniformity ... 11   
6.6.1.2 Inter-Pixel Luminance Uniformity ..... .11   
6.6.1.3 Module Boundary Uniformity .. ..12   
6.6.2 Horizontal Off-Axis Luminance Uniformity... ..13   
6.6.2.1 Horizontal Full Screen Off-Axis Luminance Uniformity ... ....13   
6.6.2.2 Horizontal Inter-Pixel Off-Axis Luminance Uniformity . 13   
6.6.3 Vertical Off-Axis Luminance Uniformity... .....14   
6.6.3.1 Vertical Full Screen Off-Axis Luminance Uniformity . 14   
6.6.3.2 Vertical Inter-Pixel Off-Axis Luminance Uniformity .. .14   
6.6.4 Full-Screen Sampled Nonuniformity.... ..14   
6.7 White Chromaticity Uniformity ... .14   
6.7.1 On-Axis White Chromaticity Uniformity... ..14   
6.7.1.1 Inter-Module White Chromaticity Uniformity .. 14   
6.7.1.2 Inter-Pixel White Chromaticity Uniformity .. .15   
6.7.2 Horizontal Off-Axis White Chromaticity Uniformity .. ..15   
6.7.2.1 Horizontal Full Screen Off-Axis White Chromaticity Uniformity .. .15   
6.7.2.2 Horizontal Inter-Pixel Off-Axis White Chromaticity Uniformity . ..15   
6.7.3 Vertical Off-Axis White Chromaticity Uniformity .. .15   
6.7.3.1 Vertical Full Screen Off-Axis White Chromaticity Uniformity .... ....15   
6.7.3.2 Vertical Inter-Pixel Off-Axis White Chromaticity Uniformity . .15   
6.8 Surface Reflectivity .... ...16   
6.8.1 Diffuse reflectivity ...... ....16   
6.8.2 Specular reflectivity . 16   
6.9 Stereoscopic Display Requirements .. ....16   
6.9.1 Stereoscopic Peak White Luminance. .16   
6.9.1.1 Standard Dynamic Range Mode .. .16   
6.9.2 Stereoscopic Minimum Active Black Level ... ....16   
6.9.2.1 Standard Dynamic Range Mode . .16   
6.9.3 Stereoscopic Color Gamut and Accuracy .... ...16   
6.9.3.1 Standard Dynamic Range Mode . .16   
6.9.4 Stereoscopic Extinction Ratio..... ..17   
6.10 Spatio-Temporal Aliasing.. ..17   
6.11 Inactive Area Black Level ... .17   
7 SOUND 17  

# 8 IMAGE PARAMETERS & TOLERANCES FOR D-CINEMA DIRECT VIEW DISPLAYS 18  

NNEX A MEASUREMENT CONDITIONS 19  

A.1 Initial Conditions .. .19  

A.2 Display Conditions.... ...19   
A.3 Spectroradiometer Type.. ..19   
A.4 Imaging Colorimeter Type... ..19   
A.5 Reflectivity Measurement Tool Type .. .20  

# Table of Tables  

Table 1: Edit Units Per Second Requirements for D-Cinema Direct View Displays . 8   
Table 2: Image Parameters & Tolerances for D-Cinema Direct View Displays . .18  

# 1 INTRODUCTION  

D-Cinema Direct View Displays have now entered the marketplace, representing a new technology that was not available when [DCI DCSS] was initially created. New requirements are needed to ensure that the security and quality of these devices meet DCI specifications. See [DCI DCSS], Section 9.5.2.4 for details on security requirements. This specification defines performance requirements for D-Cinema Direct View Displays, which are intended to ensure interoperability and consistent image quality on these types of displays.  

D-Cinema Direct View Displays provide the potential for an improved, high-quality image through significantly increased pea luminance and dynamic range capabilities, but may also be used to present legacy content.  

Since these displays use emissive technology (often LED pixels) rather than a projected image, the image quality can be excellent, even in viewing environments with moderate ambient light, such as a dine-in theater. However, emissive displays may potentially exhibit artifacts that are very different than those associated with projectors. For this reason, image quality metrics, performance requirements and metrology for D-Cinema Direct View Displays differ from those of d-cinema projectors.  

In writing these specifications, DCI makes no endorsement of and takes no position about the adoption and use of thes devices in d-cinema.  

# 2 SCOPE  

This specification defines the technical parameters applicable to D-Cinema Direct View Displays.  

Such displays can be used to present Standard Dynamic Range (SDR) content and/or new High Dynamic Range (HDR) content, so the requirements in this document are intended to apply to both modes of operation. The definition of HDR is outside the scope of this document (see [DCI High Dynamic Range D-Cinema Addendum]).  

This document shall be integrated into [DCI DCSS].  

# 3 NORMATIVE REFERENCES  

The names of standards publications and protocols are placed in [bracketed text]. International and industry standards contain provisions which, through reference in this text, constitute provisions of this specification. The most recent editions of the referenced standards shall be valid unless otherwise exempted in this specification. These referenced standards are subject to revision, and parties to agreements based upon this specification are encouraged to investigate the possibility of applying the most recent edition of the referenced standards.  

CIE Technical Report 15: Colorimetry  

DCI Digital Cinema System Specification   
DCI High Dynamic Range D-Cinema Addendum   
ISO/CIE 11664 (all parts): Colorimetry   
SMPTE RP 431-2: Reference Projector and Environment for D-Cinema Quality   
SMPTE ST 428-1: D-Cinema Distribution Master (DCDM) — Image Characteristics   
SMPTE ST 431-1: Screen Luminance Level, Chromaticity and Uniformity for D-Cinema Quality  

# 4 TERMS AND DEFINITIONS  

For the purposes of this document, the following terms and definitions apply.  

# 4.1 D-Cinema Direct View Display  

A display system intended for digital cinema applications and comprised of a combination of individual light-emitting display Cabinets conjoined so as to form a single large display. LED-based panels are typical, but the requirements herein apply to any image-forming display technology so comprised.  

# 4.2 Screen  

The complete D-Cinema Direct View Display system including all pixels sufficient to display the entire image, and typicall comprised of a plurality of Cabinets with a supporting structure, associated electronics and cabling.  

# 4.3 Cabinet  

The physical structure and associated electronics which contains a portion of the image area of a Screen. The emissive surface area of a Cabinet is typically comprised of a plurality of Modules.  

# 4.4 Module  

A component including an array of pixels physically positioned so as to form the front display surface of a Cabinet. The Module is typically the smallest field-serviceable light-emitting component of a Screen.  

# 4.5 Display Pixel  

The smallest grouping of light emitting elements within a Module, and capable of broad-spectrum (not monochromatic) light emissions. A Display Pixel is often comprised of a triplet of red, green and blue light emitting diodes, which may be considered sub-pixels.  

# 4.6 Edit Unit  

The smallest unit of d-cinema content that can be successfully edited while maintaining the integrity of the content. The edit unit value shall be an integer multiple of the duration of a single $d$ -cinema frame. In most cases, the edit unit value is the same as the frame duration, but in certain applications, the value can be ${ > } 1$ (for example, stereoscopic d-cinema requires an edit unit value twice that of the frame duration).  

# 4.7 Minimum Active Black Level  

The Minimum Active Black Level of a D-Cinema Direct View Display is the lowest luminance level above code value 0 reproduced within the specified uniformity tolerance.  

# 5 INPUT REQUIREMENTS  

The D-Cinema Direct View Display operational modes and requirements are as follows:  

# 5.1 Standard Dynamic Range Mode  

Standard Dynamic Range (SDR) operation refers to displaying compositions containing images conforming to the SMPTE dcinema document suites 428, 429, 430 and 431, including (in particular) the color quality [SMPTE ST 431-1] and reference projector [SMPTE RP 431-2] documents.  

SDR content is identified by the absence of an HDR flag in the CPL metadata as described in DCI’s [DCI High Dynamic Range D-Cinema Addendum].  

A D-Cinema Direct View Display shall display SDR content in a manner that emulates the SDR display on which the content was mastered (SDR Mode). This will ensure predictable and consistent exhibition quality for those DCDMs mastered using a reference projector. A D-Cinema Direct View Display in SDR Mode shall not reproduce screen black level values lower than 0.01 cd/m2. In SDR Mode, the grayscale tracking shall conform to [SMPTE RP 431-2], with the exception that screen black level shall only be displayed at luminance levels at or above 0.01 cd/m2.  

# 5.2 High Dynamic Range Mode  

HDR mode is optional. If implemented, the D-Cinema Direct View Display shall support HDR-DCDM (HDR Digital Cinema Distribution Master), as defined in DCI’s [DCI High Dynamic Range D-Cinema Addendum].  

# 5.3 Other Input Modes  

The D-Cinema Direct View Display may support other image structures, aspect ratios, file formats and frame rates in order to enable the playback of alternative content, or for other purposes.  

# 5.4 Auxiliary Input Connection  

It is highly desirable for the D-Cinema Direct View Display to have an auxiliary input connection capable of accepting an uncompressed image with CIE XYZ colorimetry and image structure and frame rates as described in Table 1. Such an auxiliary input is useful for display calibration and testing.  

# 5.5 Edit Unit  

The D-Cinema Direct View Display shall support the content frame rates in Table 1, expressed in Edit Units per second:  

Table 1: Edit Units Per Second Requirements for D-Cinema Direct View Displays   


<html><body><table><tr><td>Edit Unit/Sec.</td><td>2K 2D</td><td>2K 3D</td><td>4K 2D</td></tr><tr><td>24</td><td>Required</td><td>Required</td><td>Required</td></tr><tr><td></td><td></td><td></td><td></td></tr></table></body></html>  

<html><body><table><tr><td>48</td><td>Required</td><td>Required</td><td>Required</td></tr><tr><td>60</td><td>Required</td><td>Required</td><td>Required</td></tr><tr><td>96</td><td>Required</td><td></td><td></td></tr><tr><td>120</td><td>Required</td><td></td><td></td></tr></table></body></html>  

Support for stereoscopic presentations is optional; “Required” in the 2K 3D category of Table 1 applies only to displays in which stereoscopic exhibition is implemented.  

# 6 IMAGE PARAMETERS  

# 6.1 Display Pixels  

The number of Display Pixels and their visibility is defined below.  

# 6.1.1 Pixel Visibility  

Since the D-Cinema Direct View Display utilizes individual light-emitting pixels, the visibility of pixel structure and the void between pixels (sometimes referred to as the “screen door effect”) is dependent on the optical design of the pixels. Factors affecting pixel visibility may include pixel pitch (space between adjacent pixels), pixel fill-factor, angular emission pattern, coatings and diffusion filters.  

The pixel structure of the D-Cinema Direct View Display shall not be visible by an observer with normal visual acuity (e.g.   
20/20 vision) when viewed at a distance equal to 1.6 times the image height.  

# 6.1.2 Display Pixel Count  

Per the above, in order to ensure that the pixel structure is not visible, the sampling structure of the displayed picture (pixel count) shall be at least 4096 (4K) horizontal pixels and at least 2160 vertical pixels.  

# 6.1.3 Image Scaling  

For D-Cinema Direct View Displays, image scaling at non-integer values may be utilized if it is clearly demonstrable that no image scaling artifacts result when viewed at a distance equal to the image height.  

# 6.1.4 Sub-pixel Spatial Coincidence  

The DCDM image structures are defined with co-sited pixel samples. In the case where the D-Cinema Direct View Display does not utilize co-sited color primaries, the spatial arrangement of the displayed color primary elements (likely composed of RGB subpixels corresponding to R, G and B LEDs) shall not introduce objectionable geometric anomalies such as fringing or checkerboard artifacts.  

# 6.2 Calibration White Point and Luminance  

The calibration white point and luminance of D-Cinema Direct View Displays for each operational mode are defined below Measurements shall be made with a spectroradiometer meeting the criteria of Section A.3  

# 6.2.1 Standard Dynamic Range Mode  

# 6.2.2 High Dynamic Range Mode  

In HDR mode, the D-Cinema Direct View Display shall conform to Table 2.  

# 6.3 Minimum Active Black Level  

The minimum active black level for each operational mode is defined below. Measurements shall be made with a spectroradiometer meeting the criteria of Section A.3.  

# 6.3.1 Standard Dynamic Range Mode  

In SDR mode, the D-Cinema Direct View Display minimum active black level shall conform to Table 2.  

# 6.3.2 High Dynamic Range Mode  

In HDR mode, the D-Cinema Direct View Display minimum active black level shall conform to Table 2.  

# 6.4 Color Gamut and Accuracy  

Color gamut and color accuracy for each operational mode are defined below. Measurements shall be made with a spectroradiometer meeting the criteria of Section A.3.  

# 6.4.1 Standard Dynamic Range Mode  

In SDR Mode, the D-Cinema Direct View Display color gamut and color accuracy shall conform to Table 2.  

# 6.4.2 High Dynamic Range Mode  

In HDR mode, the D-Cinema Direct View Display gamut and color accuracy shall conform to Table 2.  

# 6.5 Dithering  

Dithering is an intentionally-applied form of noise used to randomize quantization error. The following constraints on the use of dithering shall apply:  

# 6.5.1 Spatial Dithering  

Spatial dithering may be used to randomly turn off some pixels that would normally be illuminated at a given code value. This is performed in order to reduce the overall luminance level below what would otherwise be possible with all pixels on at their lowest luminance. This spatial dithering has the side effect of reducing image resolution. If used, spatial dithering shall be only applied at luminance levels below $0 . 0 1 \ c d / m ^ { 2 }$ . Spatial dithering, if utilized, shall not be visible when viewed at a distance equal to 1.6 times the image height.  

# 6.5.2 Temporal Dithering  

Temporal dithering may be used to turn on and off pixels in a cycle similar to pulse-width modulation in order to reduce the luminance level below what would otherwise be possible with all pixels on continuously. Temporal dithering, if utilized, shall not  

be visible when viewed at a distance equal to 1.6 times the image height.  

# 6.6 Luminance Uniformity  

The luminance uniformity of a D-Cinema Direct View Display is affected by factors in the design and calibration of the display that are significantly different than those affecting the uniformity of a projector. In order to ensure an image free of distractingly visible non-uniformities, the following specifications shall be followed:  

# 6.6.1 On-Axis Luminance Uniformity  

he following measurements shall be made with an imaging colorimeter meeting the criteria of Section A.4 placed at horizontal creen center, as near vertical screen center as possible, and at a viewing angle directly perpendicular to the screen plane.  

# 6.6.1.1 Inter-Module Luminance Uniformity  

Inter-module luminance uniformity is the measure of inconsistencies in luminance between adjacent Modules or Cabinets. These variances may result in visible edges (transitions) between Modules, creating high-frequency fixed-pattern noise, to which the human visual system is very sensitive. To eliminate measurement errors from moiré patterns in the test image, slightly defocus the imaging colorimeter. This uniformity may vary at different luminance levels (e.g., look acceptable at peak white, but inconsistent at mid-grey). Therefore, measurements should be performed at various luminance levels. The luminance variation between adjacent Modules shall not exceed the value specified in Table 2.  

# 6.6.1.2 Inter-Pixel Luminance Uniformity  

Inter-pixel luminance uniformity is the measure of inconsistencies in between adjacent pixels. These variances result in highfrequency fixed-pattern noise, which may appear as random noise to the human visual system. These variances are often less perceptible than systematic fixed-pattern noise, and therefore may be allowed to have wider tolerances. This uniformity may vary at different luminance levels (e.g., look acceptable at peak white, but inconsistent at mid-grey). Therefore, measurements should be performed at various luminance levels. In order for the test instrument to distinguish individual pixels, the test pattern is divided into nine images, each with 1/9 of the screen pixels illuminated, as shown in Figure 1. The luminance variation between adjacent pixels shall not exceed the value specified in Table 2.  

![](images/435b85e9f5a261ac4128f543d356b3deb226c8f64bd5e9e8e9042c25af1e0b6f.jpg)  
Figure 1: Set of Nine Test Images, Each Illuminating 1/9 of Display Pixels, for Inter-Pixel Uniformity Test  

# 6.6.1.3 Module Boundary Uniformity  

Module boundary uniformity is the measure of the degree to which inconsistent mechanical spacing between Modules or Cabinets may be visible. These inconsistencies result in high-frequency fixed-pattern noise – typically vertical or horizontal lines representing transitions at certain Cabinet boundaries – to which the human visual system is very sensitive (see Figure 2).  

This defect is related to full-screen uniformity but may be caused by mechanical misalignment even in situations where the Modules themselves exhibit perfect uniformity. Misalignment may result from pixels at Cabinet boundaries being too far apart (a gap, resulting in a dark line) or too close together (an overlap, resulting in a bright line). Misalignment out of plane may be visible only from certain viewing angles, so the display should be inspected from all viewing angles to identify potential defects that should be measured.  

Using the inter-pixel uniformity test data, process the data with a high-pass filter $3 \times 3$ Gaussian blur). The luminance variation at any Module boundary shall not exceed the value specified in Table 2.  

![](images/24b6a8cabe630f68c735673cfec9e472d38a29a1b51fd1202a7640467e080079.jpg)  

# Figure 2: Example of Test Result for Module Boundary Uniformity, with Measured Variance of $4 . 5 \%$ , Exceeding Permissible Tolerance  

# 6.6.2 Horizontal Off-Axis Luminance Uniformity  

These specifications are intended to quantify systemic inconsistencies in perceived luminance of the image when viewed from horizontally off-axis (not directly perpendicular to the screen plane). The primary cause for non-uniformity in off-axis viewing is the optical performance of the pixel emitters rather than electronics. Therefore, it is not necessary to specify uniformity values at various luminance levels.  

The following measurements shall be made with an imaging colorimeter meeting the criteria of Section A.4 placed at an acute horizontal angle to the screen plane. The angle(s) of measurement and distance to the screen are dependent on the specifications of the instrument being used.  

# 6.6.2.1 Horizontal Full Screen Off-Axis Luminance Uniformity  

The luminance variation on the screen, when viewed from any angle up to $\pm 6 0 ^ { \circ }$ horizontally from perpendicular to the screen plane, compared to the mean average of on-axis full screen luminance, shall not exceed the value specified in Table 2.  

# 6.6.2.2 Horizontal Inter-Pixel Off-Axis Luminance Uniformity  

Inter-Pixel Off-Axis Luminance Uniformity is the measure of inconsistencies between adjacent pixels when viewed from positions not directly perpendicular to the screen plane. These variances result in high-frequency fixed-pattern noise, which may appear as random noise to the human visual system. In order for the test instrument to distinguish individual pixels, the test pattern is divided into nine images, each with $_ { 1 / 9 }$ of the screen pixels illuminated, as shown in Figure 1. The luminance variation between pixels, when viewed from any angle up to $\pm 6 0 ^ { \circ }$ horizontally from perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.6.3 Vertical Off-Axis Luminance Uniformity  

These tests are similar to the Horizontal Off-Axis Luminance Uniformity measurements, but are intended to characterize the image when viewed from a higher or lower angle. Due to the sub-pixel configuration in some D-Cinema Direct View Displays, there can be a luminance shift when viewed at these angles.  

The following measurements shall be made with an imaging colorimeter meeting the criteria of Section A.4 placed at an acute vertical angle to the screen plane. The angle(s) of measurement and distance to the screen are dependent on the specifications of the instrument being used.  

# 6.6.3.1 Vertical Full Screen Off-Axis Luminance Uniformity  

The white chromaticity variation on the screen, when viewed from any angle between $+ \underline { { { 1 0 ^ { \circ } } } }$ and $3 5 ^ { \circ }$ from vertically perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.6.3.2 Vertical Inter-Pixel Off-Axis Luminance Uniformity  

Inter-Pixel Off-Axis Luminance Uniformity is the measure of inconsistencies between adjacent pixels when viewed from positions not directly perpendicular to the screen plane. These variances result in high-frequency fixed-pattern noise, which may appear as random noise to the human visual system. In order for the test instrument to distinguish individual pixels, the test pattern is divided into nine images, each with $_ { 1 / 9 }$ of the screen pixels illuminated, as shown in Figure 1. The luminance variation between pixels, when viewed from any angle between $+ \underline { { { 1 0 ^ { \circ } } } }$ and $- 3 5 ^ { \circ }$ from vertically perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.6.4 Full-Screen Sampled Nonuniformity  

A D-Cinema Direct View Display shall not emulate the edge falloff or vignetting of a projector.  

When presenting a full-screen pattern, the nonuniformity of the display is given by:  

$1 0 0 \% \cdot ( 1 - L _ { \mathrm { m i n } } / L _ { \mathrm { m a x } } )$  

where $L _ { \mathrm { m i n } }$ and $L _ { \mathrm { m a x } }$ are, respectively, the minimum and maximum luminance measured over a representative set of points located at both the center and edges of the display. All points are measured with the light measuring device normal to the display.  

The nonuniformity shall not exceed the value specified in Table 2.  

# 6.7 White Chromaticity Uniformity  

The White Chromaticity uniformity of a D-Cinema Direct View Displays is affected by factors in the design and calibration of the display that are significantly different than those affecting the uniformity of a projected image. In order to ensure an image free of distractingly visible non-uniformities, the following specifications shall be followed:  

# 6.7.1 On-Axis White Chromaticity Uniformity  

The following measurements shall be made with an imaging colorimeter meeting the criteria of Section A.4 placed at horizontal screen center, as near to vertical screen center as possible, and at a viewing angle directly perpendicular to the screen plane.  

# 6.7.1.1 Inter-Module White Chromaticity Uniformity  

Inter-Module White Chromaticity Uniformity is the measure of inconsistencies in color between adjacent Modules or Cabinets. These variances result in visible edges (transitions) between Modules, creating high-frequency fixed-pattern noise, to which the human visual system is very sensitive. To eliminate measurement errors from moiré patterns in the test image, slightly defocus the imaging colorimeter. Because of electronic driver or optical performance of the display, this uniformity may vary at different luminance levels (e.g., look excellent at peak white, but inconsistent at mid-grey). Therefore, measurements should be performed at various luminance levels. The color variation between adjacent Modules shall not exceed the value specified in Table 2.  

# 6.7.1.2 Inter-Pixel White Chromaticity Uniformity  

Inter-Pixel White Chromaticity Uniformity is the measure of inconsistencies in between adjacent pixels. These variances result in high-frequency fixed-pattern noise, which may appear as random noise to the human visual system. These variances are often less perceptible than systematic fixed-pattern noise, and therefore may be allowed to have wider tolerances. Because of electronic driver or optical performance of the display, this uniformity may vary at different luminance levels (e.g., look excellent at peak white, but inconsistent at mid-grey). Therefore, tests should be performed at various luminance levels. In order for the test instrument to distinguish individual pixels, the test pattern is divided into nine images, each with $_ { 1 / 9 }$ of the screen pixels illuminated, as shown in Figure 1. The color variation between adjacent pixels shall not exceed the value specified in Table 2.  

# 6.7.2 Horizontal Off-Axis White Chromaticity Uniformity  

These measurements are intended to quantify systemic inconsistencies in perceived color of the image when viewed from horizontally off-axis (not directly perpendicular to the screen plane). The primary cause for non-uniformity in off-axis viewing is the optical performance of the pixel emitters rather than electronics. Therefore, it is not necessary to perform tests at various luminance levels.  

The following measurements shall be made with an imaging colorimeter meeting the criteria of Section A.4 placed at an acute horizontal angle to the screen plane. The angle(s) of measurement and distance to the screen are dependent on the specifications of the instrument being used.  

# 6.7.2.1 Horizontal Full Screen Off-Axis White Chromaticity Uniformity  

The white chromaticity variation on the screen, when viewed from any angle up to $\pm 6 0 ^ { \circ }$ horizontally from perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.7.2.2 Horizontal Inter-Pixel Off-Axis White Chromaticity Uniformity  

Inter-Pixel Off-Axis White Chromaticity Uniformity is the measure of inconsistencies between adjacent pixels when viewed from positions not directly perpendicular to the screen plane. These variances result in high-frequency fixed-pattern noise, which may appear as random noise to the human visual system. In order for the test instrument to distinguish individual pixels, the test pattern is divided into nine images, each with $_ { 1 / 9 }$ of the screen pixels illuminated, as shown in Figure 1. The white chromaticity variation between pixels, when viewed from any angle up to $\pm 6 0 ^ { \circ }$ horizontally from perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.7.3 Vertical Off-Axis White Chromaticity Uniformity  

These measurements are similar to the Horizontal Off-Axis White Chromaticity Uniformity measurements, but are intended to characterize the image when viewed from a higher or lower angle. Due to the sub-pixel configuration in some D-Cinema Direct View Displays, there can be a color shift when viewed at these angles.  

The following measurements shall be made with an imaging colorimeter meeting the criteria of Section A.4 placed at an acute vertical angle to the screen plane. The angle(s) of measurement and distance to the screen are dependent on the specifications of the instrument being used.  

# 6.7.3.1 Vertical Full Screen Off-Axis White Chromaticity Uniformity  

The white chromaticity variation on the screen, when viewed from any angle between $+ \underline { { { 1 0 ^ { \circ } } } }$ and $- 3 5 ^ { \circ }$ from vertically perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.7.3.2 Vertical Inter-Pixel Off-Axis White Chromaticity Uniformity  

Inter-Pixel Off-Axis White Chromaticity Uniformity is the measure of inconsistencies between adjacent pixels when viewed from positions not directly perpendicular to the screen plane. These variances result in high-frequency fixed-pattern noise, which may appear as random noise to the human visual system. In order for the test instrument to distinguish individual pixels, the test pattern is divided into nine images, each with $_ { 1 / 9 }$ of the screen pixels illuminated, as shown in Figure 1. The white chromaticity variation between pixels, when viewed from any angle between $+ \underline { { { 1 0 ^ { \circ } } } }$ and $- 3 5 ^ { \circ }$ from vertically perpendicular to the screen plane, shall not exceed the value specified in Table 2.  

# 6.8 Surface Reflectivity  

Since light reflecting from the auditorium off the screen will degrade the perceived contrast, a low reflectivity is required. Since the screen surface may exhibit reflectivity with different optical characteristics, both Diffuse reflectivity and Specular reflectivity requirements are defined. Reflectivity measurement shall be made using a spectrophotometer meeting the criteria of Section A.5, to measure di: $\cdot 8 ^ { \circ }$ and de:8° values [CIE Technical Report 15]. The screen shall be turned off or input set to code value zero for this test to ensure that no light is emitted from the pixels.  

# 6.8.1 Diffuse reflectivity  

Diffuse reflectivity is measured by de:8° value, which shall not exceed the value in Table 2.  

# 6.8.2 Specular reflectivity  

Specular reflectivity is calculated using formula di:8° - de:8°, which shall not exceed the value in Table 2.  

# 6.9 Stereoscopic Display Requirements  

Support for stereoscopic presentations in D-Cinema Direct View Displays is optional. There are no constraints regarding the discriminator technology used, such as active shuttered eyewear, polarized passive eyewear or chromatic filtering eyewear.  

# 6.9.1 Stereoscopic Peak White Luminance  

# 6.9.1.1 Standard Dynamic Range Mode  

Given the increased light level capabilities of D-Cinema Direct View Displays, peak white luminance for such display systems shall be as specified in Table 2 when measured through all filters and lenses, i.e., light level to the eye. Relative luminance uniformity shall be per Section 6.6.  

# 6.9.2 Stereoscopic Minimum Active Black Level  

The Minimum Active Black Level for each operational mode is defined below. Measurements shall be made with a spectroradiometer meeting the criteria of Section A.3 measured through all filters and lenses, i.e., light level to the eye.  

# 6.9.2.1 Standard Dynamic Range Mode  

In SDR Mode, the D-Cinema Direct View Display Minimum Active Black Level shall conform to Table 2.  

# 6.9.3 Stereoscopic Color Gamut and Accuracy  

Color gamut and color accuracy for each operational mode is defined below. Measurements shall be made with an instrument meeting the criteria of Section A.3 measured through all filters and lenses, i.e., light level to the eye.  

# 6.9.3.1 Standard Dynamic Range Mode  

In SDR Mode, the D-Cinema Direct View Display color gamut and color accuracy shall conform to Table 2.  

# 6.9.4 Stereoscopic Extinction Ratio  

Stereoscopic Extinction Ratio (SER) is a measure of crosstalk between left eye and right eye images in a stereoscopic display, as measured through the appropriate eyewear. Low SER results in “ghosting” of the image, where a low luminance right eye image is perceived in the left eye of the viewer (and vice-versa). SER shall be as specified in Table 2.  

# 6.10 Spatio-Temporal Aliasing  

Spatio-Temporal Aliasing refers to visible artifacts that result from pixel multiplexing or scanning, when viewed with eye movement such as saccades or gaze shift. Display multiplex scans may be horizontal, vertical or randomized, and may be synchronized across Modules or Cabinets, or unsynchronized. Spatio-Temporal Aliasing artifacts can be distracting to the viewers and are therefore important to assessing image quality. However, because they are difficult to measure with today’s readily available instrumentation, they are generally assessed subjectively. The D-Cinema Direct View Display shall not exhibit any visible Spatio-Temporal Aliasing artifacts.  

# 6.11 Inactive Area Black Level  

All pixels of the D-Cinema Direct View Display that are outside the smaller of the following two areas shall not emit any light:  

the image area defined by the MainPictureActiveArea element of the CPL; and the encoded image area.  

# 7 SOUND  

DCI recognizes that accurate sound reproduction is an integral part of the theatrical experience. D-Cinema Direct View Displays present unique challenges to sound reproduction. This is because the main loudspeakers cannot be positioned behind the visual image, and the display itself is a sound-reflective surface. As a result, acoustic imaging within the soundtrack and dialog localization are impacted.  

D-Cinema Direct View Display manufacturers and integrators are responsible for developing solutions that enable the sound mix to be experienced as the filmmaker intended. The sound system for a Direct View Display must be capable of delivering a commensurate sound experience to one for a traditional projection system, using the same sound mix. No separate or unique audio mix shall be required for D-Cinema Direct View Display auditoriums.  

# 8 IMAGE PARAMETERS & TOLERANCES FOR D-CINEMA DIRECT VIEW DISPLAYS  

Table 2: Image Parameters & Tolerances for D-Cinema Direct View Displays   


<html><body><table><tr><td></td><td colspan="2"></td><td></td><td></td></tr><tr><td>Section</td><td colspan="2">Image Parameter</td><td>Nominal</td><td>Tolerance</td></tr><tr><td>Section 6.1.2</td><td colspan="2">Pixel Count</td><td colspan="2">4096 × 2160 or greater</td></tr><tr><td rowspan="2">Section 6.2</td><td rowspan="2">Luminance, Screen Average,100% White</td><td>SDR Mode</td><td colspan="2">As defined in [SMPTE ST 431-1]</td></tr><tr><td>HDR Mode</td><td>Per [DCI High Dynamic Range D-Cinema Addendum]</td><td>Per [DCI High Dynamic Range D-Cinema Addendum]</td></tr><tr><td rowspan="2">Section 6.3</td><td rowspan="2">Minimum Active Black Level</td><td>SDR Mode</td><td>As defined in [SMPTE RP 431-2],with the exception that screen black level shall be displayed at luminance levels equal to or greater than 0.O1 cd/m².</td><td></td></tr><tr><td>HDR Mode</td><td>Per [DCI High Dynamic Range D-Cinema Addendum]</td><td>Per [DCl High Dynamic Range D-Cinema Addendum]</td></tr><tr><td rowspan="2">Section 6.4</td><td rowspan="2">Color Gamut and Color Accuracy</td><td>SDR Mode</td><td colspan="2">As defined in [SMPTE RP 431-2]</td></tr><tr><td>HDR Mode</td><td colspan="2">As defined in [DCI High Dynamic Range D-Cinema Addendum]</td></tr><tr><td rowspan="2">Section 6.5</td><td rowspan="2">Dithering</td><td>Spatial</td><td colspan="2">Shall not be used above 0.01 cd/m2</td></tr><tr><td>Temporal</td><td colspan="2">Not visible</td></tr><tr><td rowspan="4">Section 6.6.1</td><td rowspan="4">On-Axis Luminance Uniformity</td><td>Inter-Module</td><td rowspan="4">Any Allowed Luminance Level</td><td>Betweenadjacent modules,2% up to 0.1 nit, ±1.0% higher than 0.1nits</td></tr><tr><td>Uniformity Inter-Pixel</td><td>±4.0% between adjacent pixels</td></tr><tr><td>Uniformity</td><td rowspan="2">±2.0% of screen average</td></tr><tr><td>Module Boundary Uniformity</td></tr><tr><td rowspan="3">Section 6.6.2</td><td rowspan="3">Horizontal Off-Axis Luminance Uniformity</td><td>Full Screen Uniformity</td><td rowspan="4">D65 White Peak Luminance</td><td>+0%/-25% of on-axis luminance at ±60 Horz</td></tr><tr><td>Inter-Pixel</td><td>±6.0% between adjacent pixels at ±6o° Horz</td></tr><tr><td>Uniformity Full Screen</td><td>+0%/-25% of on-axis luminance at +10° to</td></tr><tr><td rowspan="3">Section 6.6.3 Section</td><td rowspan="3">Vertical Off-Axis Luminance Uniformity</td><td>Uniformity</td><td>-35°Vert</td></tr><tr><td>Inter-Pixel Uniformity</td><td rowspan="2">±6.0% between adjacent pixels at +10° to -35° Vert</td></tr><tr><td>Full-Screen Sampled Nonuniformity</td></tr><tr><td>6.6.4 Section</td><td rowspan="2"></td><td>Inter-Module</td><td rowspan="2">Thenonuniformity shall not exceed 4% Any Allowed Luminance Level</td><td>Between adjacent modules,△u'v'±.0025 up</td></tr><tr><td>On-Axis White Chromaticity Uniformity</td><td>Uniformity Inter-Pixel</td><td>to 5 nits,△u'v'±.001 higher than 5 nits △u'v'±0.025 between adjacent pixels</td></tr><tr><td rowspan="2">Section 6.7.2</td><td rowspan="2">Horizontal Off-Axis White Chromaticity Uniformity</td><td>Uniformity Full Screen</td><td rowspan="2">D65 White Peak Luminance</td><td>△u'v'±O.01 from screen centerat±60°Horz</td></tr><tr><td>Uniformity Inter-Pixel</td><td></td></tr></table></body></html>  

<html><body><table><tr><td>Uniformity</td><td>△u'v'±O.025 between adjacent pixels at ±60°Horz</td><td colspan="3"></td></tr><tr><td rowspan="3">Section 6.7.3</td><td rowspan="3">Vertical Off-Axis White Chromaticity Uniformity</td><td>Full Screen</td><td>△u'v'±0.02 from screen centerat+10°to -35°Vert</td><td rowspan="3"></td></tr><tr><td>Uniformity Inter-Pixel</td><td>△u'v'±0.025 between adjacent pixels at +10° to -35°</td></tr><tr><td>Uniformity Diffuse</td><td>Vert</td></tr><tr><td rowspan="2">Section 6.8</td><td rowspan="2">Screen Surface Reflectivity</td><td>Reflectivity Spectral</td><td colspan="2">Less than 10%</td></tr><tr><td>Reflectivity</td><td>Less than 1.6%</td><td></td></tr><tr><td>Section 6.9.1</td><td>Stereoscopic Peak White Luminance Stereoscopic Minimum Active</td><td>SDR Mode</td><td>48 cd/m2</td><td>±4.8 cd/m²</td></tr><tr><td>Section 6.9.2</td><td>Black Level Stereoscopic Color Gamutand</td><td>SDR Mode</td><td colspan="2">As defined in [SMPTE RP 431-2], with the exception that screen black level shallbe displayedat luminance levels above O.O1 cd/m².</td></tr><tr><td>Section 6.9.3</td><td colspan="2">SDR Mode Color Accuracy</td><td colspan="2">As defined in [SMPTE RP 431-2]</td></tr><tr><td>Section 6.9.4</td><td colspan="2">Stereoscopic Extinction Ratio</td><td>200:1</td><td>Not less than 150:1</td></tr></table></body></html>  

# ANNEX A MEASUREMENT CONDITIONS  

The following procedures and instrumentation shall be used for measurement of the D-Cinema Direct View Display.  

# A.1 Initial Conditions  

The display shall be turned on and allowed to thermally stabilize for 20 to 30 minutes prior to all measurements. The room lights shall be turned off, except for the minimal lighting provided for working or safety reasons. The display shall have been calibrated to the target image parameters before final measurements are made.  

# A.2 Display Conditions  

Measurements shall be made with the D-Cinema Direct View Display in normal operation and set for the mode under test.  

# A.3 Spectroradiometer Type  

Screen luminance shall be measured with a spot spectroradiometer having the spectral luminance response of the standard observer (photopic vision), as defined in [ISO/CIE 11664]. The acceptance angle of the spectroradiometer shall be $2 ^ { \circ }$ or less. The spectroradiometer shall have a minimum luminance of $0 . 0 0 0 5 \ c d / m ^ { 2 }$ , an accuracy $o f \pm 2 . O \%$ and short-term repeatability of $_ { \pm 0 . 0 0 3 }$ to $0 . 0 5 ~ c d / m ^ { 2 }$ . The spectroradiometer response to luminance variation over time shall be to properly integrate any such variation occurring at frequencies at or above $2 4 H z$ and display the arithmetic mean value.  

Screen chromaticity shall be measured with a spot spectroradiometer with an acceptance angle of $2 ^ { \circ }$ or less. It shall report values in CIE x,y coordinates, with an accuracy of $\pm { \ : 0 . 0 0 2 }$ or better for both x and y.  

# A.4 Imaging Colorimeter Type  

Screen luminance uniformity and color uniformity shall be measured with an imaging colorimeter having a minimum of 12 megapixels. It shall report values in CIE x,y coordinates with an accuracy of $\pm \ : 0 . 0 0 3 \$ and short-term color repeatability of $\pm$ 0.0005.  

# A.5 Reflectivity Measurement Tool Type  

Screen surface reflectivity shall be measured with a spectrophotometer designed to measure reflection with the geometries o di:8° and de:8°, conforming to [CIE Technical Report 15].  