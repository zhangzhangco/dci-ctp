# High Dynamic Range D-Cinema Addendum  

Version 1.2.1 (build aca1763)  

# Notice  

Digital Cinema Initiatives, LLC (DCI) is the author and creator of this specification for the purpose of copyright and other laws in all countries throughout the world. The DCI copyright notice must be included in all reproductions, whether in whole or in part, and may not be deleted or attributed to others. DCI hereby grants to its members and their suppliers a limited license to reproduce this specification for their own use, provided it is not sold. Others should obtain permission to reproduce this specification from Digital Cinema Initiatives, LLC.  

This document is a specification developed and adopted by Digital Cinema Initiatives, LLC. This document may be revised by DCI. It is intended solely as a guide for companies interested in developing products, which can be compatible with other products, developed using this document. Each DCI member company shall decide independently the extent to which it will utilize, or require adherence to, these specifications. DCI shall not be liable for any exemplary, incidental, proximate or consequential damages or expenses arising from the use of this document. This document defines only one approach to compatibility, and other approaches may be available to the industry.  

his document is an authorized and approved publication of DCI. Only DCI has the right and authority to revise or change the material contained in this document, and any revisions by any party other than DCI are unauthorized and prohibited.  

Compliance with this document may require use of one or more features covered by proprietary rights (such as features which are the subject of a patent, patent application, copyright, mask work right or trade secret right). By publication of this document, no position is taken by DCI with respect to the validity or infringement of any patent or other proprietary right. DCI hereby expressly disclaims any liability for infringement of intellectual property rights of others by virtue of the use of this document. DCI has not and does not investigate any notices or allegations of infringement prompted by publication of any DCI document, nor does DCI undertake a duty to advise users or potential users of DCI documents of such notices or allegations. DCI hereby expressly advises all users or potential users of this document to investigate and analyze any potential infringement situation, seek the advice of intellectual property counsel, and, if indicated, obtain a license under any applicable intellectual property right or take the necessary steps to avoid infringement of any intellectual property right. DCI expressly disclaims any intent to promote infringement of any intellectual property right by virtue of the evolution, adoption, or publication of this document.  

# Table of Contents  

1 INTRODUCTION 5  

2 SCOPE 5  

3 NORMATIVE REFERENCES 6  

4 TERMS AND DEFINITIONS 6  

4.1 Edit Unit 6   
5 DCI HDR COLOR VOLUME 7  

6 HDR D-CINEMA DISTRIBUTION MASTER (DCDM) 7  

6.1 Image 7   
6.1.1 Structure 7   
6.1.2 Color encoding and decoding 8   
6.1.2.1 General 8   
6.1.2.2 Encoding function 8   
6.1.2.3 Decoding Function 9   
6.1.3 Color volume 9   
6.2 Timed Text 9  

7 HDR D-CINEMA PACKAGE (HDR DCP) 10  

7.1 General 10   
7.2 Signaling 10   
7.3 Maximum compressed bitrate 11  

8 HDR REFERENCE DISPLAY 11  

8.1 Device Behavior 11   
8.1.1 Standard Dynamic Range (SDR) Mode 11   
8.1.2 HDR Mode 11   
8.2 Initial Conditions 12   
8.3 Environment 12   
8.3.1 Ambient Luminance 12   
8.3.2 Reference Viewing Position for Color Grading 12   
8.4 HDR Mode Image Parameters 12   
8.4.1 General 12   
8.4.2 Luminance Uniformity 12   
8.4.3 White Point and Luminance 13   
8.4.4 Minimum Active Black Level 13   
8.4.5 White Chromaticity Uniformity 13   
8.4.6 Electro-Optical Transfer Function 13   
8.4.6.1 General 13   
8.4.6.2 Tracking Performance 13   
8.4.7 Color Volume 13   
8.4.8 Color Accuracy 13   
ANNEX A NORMATIVE HDR MODE TABLES 14   
ANNEX B SUBJECTIVE PARAMETERS (INFORMATIVE) 16   
B.1 Grayscale Tracking 16   
B.2 Contouring 17   
ANNEX C COLOR CONVERSIONS (INFORMATIVE) 17   
C.1 Color Conversion R′G′B′ to X″Y″Z″ 17   
C.2 Color Conversion X″Y″Z″ to P3D65 RGB 18   
BIBLIOGRAPHY (INFORMATIVE) 19  

# Table of Tables  

Table 1: DCI HDR Color Volume. 7   
Table 2: HDR DCDM Image characteristics. 7   
Table 3: HDR DCDM Image dimensions. 7   
Table 4: ExtensionMetadata element that signals conformance with the HDR DCP. 10   
Table 5: Codestream size constraints 11   
Table 6: Image Parameter Values and Tolerances for HDR Reference Display 14   
Table 7: Black-To-White Gray Step-Scale Test Pattern Code Values, Luminance Values, & Chromaticity Coordinates   
Table 8: Black-To-Dark Gray Step-Scale Test Pattern Code Values, Luminance Values, & Chromaticity Coordinates15   
Table 9: Color Accuracy Color Patch Code Values, Luminance Values, & Chromaticity Coordinates 1615  

# 1 INTRODUCTION  

With the publication by Digital Cinema Initiatives, LLC, (DCI) of version 1.0 of the Digital Cinema System Specification in July 2005, DCI recognized that digital cinema had the potential to significantly improve the movie-going experience for the public. In the years since version 1.0, technological developments and innovation have realized that potential in many areas of picture and sound reproduction. Now, further advances in High Dynamic Range (HDR) technology in both reflective projectors and direct view displays offer new opportunities to enhance the theatrical motion picture experience.  

DCI believes that these new HDR opportunities require a rational, empirical basis for setting image parameters. To this end, DCI has conducted extensive image testing, employing both lay and expert viewers. The requirements in this addendum are the considered results of these investigations, specified for both reflective and direct view image devices. The DCI member companies believe that their utilization will provide real and achievable benefits to theater audiences, theater owners, filmmakers and distributors.  

This specification defines a DCI HDR Color Volume, an HDR D-Cinema Distribution Master (HDR DCDM), an HDR D-Cinema Package (HDR DCP) and requirements on a HDR Reference Display in both Review Rooms and Exhibition Theaters environments.  

The goal is to achieve consistent and repeatable color image quality for High Dynamic Range (HDR) D-Cinema presentations. The HDR Reference Display is a practical device and may be an HDR projection system or a direct view display. The nominal parameters are based on industry experience and have been demonstrated by commercially available HDR displays in controlled environments. Two levels of tolerances are specified, a tighter tolerance for Review Rooms where critical color judgments are made, and a wider tolerance for satisfactory reproduction in Exhibition Theaters used for general public viewing. (The use of the term “Review Room” includes the mastering environment where creative color decisions are made on a displayed image.)  

# 2 SCOPE  

To achieve consistent and repeatable HDR D-Cinema presentations, this specification defines a DCI HDR Color Volume, an HDR D-Cinema Distribution Master (HDR DCDM), an HDR D-Cinema Package (HDR DCP) and requirements for an HDR  

Reference Display in both Review Rooms and Exhibition Theaters environments. The HDR Reference Display may be an HDR projection system or a direct view display.  

This document shall be integrated into DCI’s Digital Cinema System Specification.  

# 3 NORMATIVE REFERENCES  

The names of standards publications and protocols are placed in [bracketed text]. International and industry standards contain provisions which, through reference in this text, constitute provisions of this specification. The most recent editions of the referenced standards shall be valid unless otherwise exempted in this specification. These referenced standards are subject to revision, and parties to agreements based upon this specification are encouraged to investigate the possibility of applying the most recent edition of the referenced standards.  

ISO 11664-1, Colorimetry -- Part 1: CIE standard colorimetric observers   
ISO 11664-3, Colorimetry -- Part 3: CIE tristimulus values   
ISO/CIE 11664-5, Colorimetry -- Part 5: CIE 1976 L\*u\*v\* colour space and u′, v′ uniform chromaticity scale diagram   
ISO/CIE 11664-6, Colorimetry -- Part 6: CIEDE2000 Colour-difference formula   
SMPTE ST 377:2004, Material Exchange Format (MXF) — File Format Specification   
SMPTE ST 428-1, D-Cinema Distribution Master (DCDM) — Image Characteristics   
SMPTE ST 429-16, Additional Composition Metadata and Guidelines   
SMPTE ST 431-1, Screen Luminance Level, Chromaticity and Uniformity for D-Cinema Quality   
SMPTE RP 431-2, Reference Projector and Environment for D-Cinema Quality   
SMPTE ST 2084, High Dynamic Range Electro-Optical Transfer Function of Mastering Reference Displays   
SMPTE ST 2113, Colorimetry of P3 Color Spaces   
SMPTE ST 428-7, Digital Cinema Distribution Master — Subtitle   
DCI, Digital Cinema System Specification  

# 4 TERMS AND DEFINITIONS  

For the purposes of this document, the following terms and definitions apply.  

# 4.1 Edit Unit  

The smallest unit of d-cinema content that can be successfully edited while maintaining the integrity of the content. The edit unit value shall be an integer multiple of the duration of a single d-cinema frame. In most cases, the edit unit value is the same as the frame duration, but in certain applications, the value can be ${ > } 1$ (for example, stereoscopic d-cinema requires an edit unit value twice that of the frame duration).  

# 5 DCI HDR COLOR VOLUME  

The DCI HDR Color Volume is the cuboid (in XYZ coordinate space) defined by the three color primaries and white point specified in Table 1.  

Table 1: DCI HDR Color Volume.   


<html><body><table><tr><td>R primary</td><td>(x,y)= (0.6800,0.3200)</td></tr><tr><td>G primary</td><td>(x,y)= (0.2650,0.6900)</td></tr><tr><td>B primary</td><td>(x,y)= (0.1500,0.0600)</td></tr><tr><td>White point</td><td>(Y,x,y)= (300,0.3127,0.3290)</td></tr></table></body></html>  

The primaries of the DCI HDR Color Volume correspond to the P3 primaries specified at [SMPTE ST 2113].  

The $( \mathsf { x } , \mathsf { y } )$ coordinates of the white point of the DCI HDR Color Volume correspond to D65 white.  

# 6 HDR D-CINEMA DISTRIBUTION MASTER (DCDM)  

# 6.1 Image  

# 6.1.1 Structure  

An HDR DCDM shall correspond to either a 2D or a 3D (stereoscopic) presentation.   
The image dimensions and edit rate of an HDR DCDM shall be one of the combinations specified at Table 2.  

Table 2: HDR DCDM Image characteristics.   


<html><body><table><tr><td>Presentation</td><td colspan="2">2D</td><td>3D</td></tr><tr><td>Image dimensions</td><td>2K</td><td>4K</td><td>2K</td></tr><tr><td>Edit rate (Edit Unit/s)</td><td>24 48 60 96</td><td>24 48 60</td><td>24 48 60</td></tr></table></body></html>  

Stereoscopic HDR implementations have yet to be sufficiently demonstrated to DCI. Therefore, parameters for 3D HDR DCDM are reserved for this specification. Additional requirements for 3D HDR DCDM may be specified by DCI in a future specification. As specified at Section 8.1.2, an HDR Reference Display implementation is not required to support 3D HDR DCDM.  

The dimensions of an HDR DCDM image frame shall be as defined at Table 3.  

Table 3: HDR DCDM Image dimensions.   


<html><body><table><tr><td>Label</td><td>Maximum width (pixels)</td><td> Maximum height (pixels)</td></tr><tr><td>2K</td><td>2048</td><td>1080</td></tr></table></body></html>  

<html><body><table><tr><td>4K</td><td>4096</td><td>2160</td></tr></table></body></html>  

# 6.1.2 Color encoding and decoding  

# 6.1.2.1 General  

Each HDR DCDM image pixel shall consist of a triplet of code values $( C V _ { X " } , C V _ { Y " } , C V _ { Z " } )$ .  

Due to quantization errors, HDR DCDM image pixels can only approximate the nominal primaries and white point of the DC HDR Color Volume specified in Section 5.  

# 6.1.2.2 Encoding function  

The code values $( \mathsf { C V } _ { \mathsf { X } ^ { \prime \prime } } , \mathsf { C V } _ { \mathsf { Y } ^ { \prime \prime } } , \mathsf { C V } _ { Z ^ { \prime \prime } } )$ are 12-bit unsigned integers in the range [0, 4095] and are obtained from XYZ tristimulus values (as defined in [ISO 11664-3]) as follows:  

$$
C V _ { X ^ { \prime \prime } } = \operatorname { f l o o r } \left( { \frac { 1 } { 2 } } + k _ { 1 } \cdot X ^ { \prime \prime } \right)
$$  

$$
C V _ { Y ^ { \prime \prime } } = \operatorname { f l o o r } \left( { \frac { 1 } { 2 } } + k _ { 1 } \cdot Y ^ { \prime \prime } \right)
$$  

$$
C V _ { Z ^ { \prime \prime } } = \mathrm { f l o o r } \left( \frac { 1 } { 2 } + k _ { 1 } \cdot Z ^ { \prime \prime } \right)
$$  

where:  

$$
X ^ { \prime \prime } = \operatorname { E O T F } ^ { - 1 } \left( { \frac { X } { k _ { 0 } } } \right)
$$  

$$
Y ^ { \prime \prime } = \mathrm { E O T F } ^ { - 1 } \left( { \frac { Y } { k _ { 0 } } } \right)
$$  

$$
Z ^ { \prime \prime } = \operatorname { E O T F } ^ { - 1 } \left( { \frac { Z } { k _ { 0 } } } \right)
$$  

$$
\mathrm { E O T F } ^ { - 1 } ( L ) = \left( \frac { c _ { 1 } + c _ { 2 } L ^ { m _ { 1 } } } { 1 + c _ { 3 } L ^ { m _ { 1 } } } \right) ^ { m _ { 2 } }
$$  

k =10,000 $k _ { 1 } = 4 0 9 5$ , $\begin{array} { r } { m _ { 1 } = \frac { 2 6 1 0 } { 4 0 9 6 } \cdot \frac { 1 } { 4 } } \end{array}$ , $\begin{array} { r } { m _ { 2 } = \frac { 2 5 2 3 } { 4 0 9 6 } } \end{array}$ , $c _ { 1 } = c _ { 3 } - c _ { 2 } + 1$ , $\begin{array} { r } { c _ { 2 } = \frac { 2 4 1 3 } { 4 0 9 6 } } \end{array}$ and $\begin{array} { r } { c _ { 3 } = \frac { 2 3 9 2 } { 4 0 9 6 } \cdot 3 2 } \end{array}$ The unary function  yields the largest integer not greater than its argument.   
$\mathbf { E O T F } ^ { - 1 } ( )$ is the Inverse-EOTF specified in [SMPTE ST 2084].  

# 6.1.2.3 Decoding Function  

XYZ tristimulus values are obtained from code values $( \mathsf { C V } _ { \mathsf { X } ^ { \prime \prime } } , \mathsf { C V } _ { \mathsf { Y } ^ { \prime \prime } } , \mathsf { C V } _ { Z ^ { \prime \prime } } )$ as follows:  

$$
X = k _ { 0 } \operatorname { E O T F } \left( X ^ { \prime \prime } \right)
$$  

$$
Y = k _ { 0 } \operatorname { E O T F } \left( Y ^ { \prime \prime } \right)
$$  

$$
Z = k _ { 0 } \operatorname { E O T F } \left( Z ^ { \prime \prime } \right)
$$  

where:  

$$
X ^ { \prime \prime } = C V _ { X ^ { \prime \prime } } / k _ { 1 }
$$  

$$
Y ^ { \prime \prime } = C V _ { Y ^ { \prime \prime } } / k _ { 1 }
$$  

$$
Z ^ { \prime \prime } = C V _ { Z ^ { \prime \prime } } / k _ { 1 }
$$  

$$
\mathrm { E O T F } ( N ) = \left( \frac { \operatorname* { m a x } \left[ N ^ { \frac { 1 } { m _ { 2 } } } - c _ { 1 } , 0 \right] } { c _ { 2 } - c _ { 3 } N ^ { \frac { 1 } { m _ { 2 } } } } \right) ^ { \frac { 1 } { m _ { 1 } } }
$$  

$\mathbf { E O T F } ( N )$ is the EOTF specified in [SMPTE ST 2084].  

# 6.1.3 Color volume  

No image pixel shall have a color outside the DCI HDR Color Volume specified at Section 5.  

# 6.2 Timed Text  

Subtitle essence, as defined in [SMPTE ST 428-7], uses triplets of 8-bit integers, denoted (R,G,B) to specify the color of text e.g., using the Color attribute, and the color of individual pixels in PNG images.  

HDR subtitle essence is subtitle essence, as specified in [SMPTE ST 428-7], where R, G and B are interpreted as having been derived from CIE XYZ tristimulus values as follows:  

$$
R = \operatorname { f l o o r } \left[ { \frac { 1 } { 2 } } + 2 5 5 \cdot \operatorname { E O T F } ^ { - 1 } \left( { \frac { X } { 1 0 , 0 0 0 } } \right) \right]
$$  

$$
G = \operatorname { f l o o r } \left[ { \frac { 1 } { 2 } } + 2 5 5 \cdot \operatorname { E O T F } ^ { - 1 } \left( { \frac { Y } { 1 0 , 0 0 0 } } \right) \right]
$$  

$$
B = \operatorname { f l o o r } \left[ { \frac { 1 } { 2 } } + 2 5 5 \cdot \operatorname { E O T F } ^ { - 1 } \left( { \frac { Z } { 1 0 , 0 0 0 } } \right) \right]
$$  

or example, D65 White at $4 8 \ \mathsf { c d } / \mathsf { m } ^ { 2 }$ is represented by the triplet (110, 111, 113) or, equivalently, 6E6F71 in hexadecimal.  

The Color attribute should be specified on all Font elements. The default value of the Color attribute (FFFFFFFF) corresponds to $X = Y = Z = 1 0 , 0 0 0$ , which exceeds the DCI HDR Color Volume.  

# 7 HDR D-CINEMA PACKAGE (HDR DCP)  

# 7.1 General  

The HDR DCP is a DCP whose picture and subtitle essence are made exclusively from HDR DCDM image and HDR DCDM subtitle essence, as defined in Section 6. When the DCP is unpackaged, decrypted and decoded, the resulting image (the DCDM\* in the [DCSS]) is visually indistinguishable from the original HDR DCDM image.  

Lossy image coding can cause pixel colors to be slightly outside the DCI HDR Color Volume specified at Section 5 even if th color of all DCDM image pixels are within the DCI HDR Color Volume image, as required at Section 6.1.3.  

# 7.2 Signaling  

An HDR DCP that conforms to this specification is identified by a combination of flags carried in the Composition Playlist and Picture Track Files.  

For Picture Track Files, the Transfer Characteristic property of the Generic Picture Essence Descriptor shall be set to the value 06.0E.2B.34.04.01.01.0D.04.01.01.01.01.0A.00.00.  

For Composition Playlists, one instance of the ExtensionMetadata element whose contents match those specified in Table 4 shall be present. The ExtensionMetadata element is defined in [SMPTE ST 429-16]  

Table 4: ExtensionMetadata element that signals conformance with the HDR DCP.   


<html><body><table><tr><td>Scope</td><td>http://www.dcimovies.com/schemas/2018/HDR-Metadata</td></tr><tr><td>Name</td><td>Image Encoding Parameters</td></tr></table></body></html>  

<html><body><table><tr><td></td><td></td></tr><tr><td>Property Value</td><td>ST 2084</td></tr></table></body></html>  

Below is an example excerpt from such a Composition:  

<ExtensionMetadata scope $\mathbf { \sigma } = \mathbf { \sigma }$ "http://www.dcimovies.com/schemas/2018/HDR-Metadata"> <Name>Image Encoding Parameters</Name> <PropertyList> <Property> <Name>EOTF</Name> <Value>ST 2084</Value> </Property> </PropertyList>   
</ExtensionMetadata>  

Although the flags above only explicitly signal the use of the EOTF specified at SMPTE ST 2084, all requirements of the HD DCP and HDR DCDM apply, including color volume requirements.  

# 7.3 Maximum compressed bitrate  

The size of each image codestream in a picture track file that carries HDR image essence shall conform to the constraints of Table 5.  

Table 5: Codestream size constraints   


<html><body><table><tr><td></td><td>Maximum size of the codestream (byte)</td><td>Maximum size of component 1 of the codestream (byte)</td><td>Maximum combined size of components 2 and 3 of the codestream (byte)</td></tr><tr><td>Monoscopic presentation</td><td>floor(56,250,000/R)</td><td>floor(56,250,000/R)</td><td>floor(28,125,000/R)</td></tr><tr><td>Stereoscopic presentation</td><td>floor(28,125,000/R)</td><td>floor(14,062,500/R)</td><td>floor(14,062,500/R)</td></tr></table></body></html>

$R$ is the content frame rate, expressed in Edit Units per second.  

# 8 HDR REFERENCE DISPLAY  

# 8.1 Device Behavior  

# 8.1.1 Standard Dynamic Range (SDR) Mode  

An HDR Reference Display in SDR Mode shall display SDR content in a manner that emulates the SDR display on which the content was mastered, including to [SMPTE ST 431-1]. An HDR Reference Display in SDR Mode shall not reproduce screen black level values lower than $0 . 0 1 ~ c d / m ^ { 2 }$ . In SDR Mode, the grayscale tracking shall conform to [SMPTE RP 431-2], with the exception that screen black level shall only be displayed at luminance levels at or above $0 . 0 1 c d / m ^ { 2 }$ .  

# 8.1.2 HDR Mode  

The HDR Reference Display shall display content in HDR mode when presented with a Composition Playlist and MXF Transfer Characteristic containing the signaling specified in Section 7.1.  

The HDR Reference Display shall reproduce 2D HDR DCDM Image as specified at Section 6.1.  

The HDR Reference Display may reproduce 3D HDR DCDM Image as specified at Section 6.1, in which case it shall eproduce all specified combinations of 3D HDR DCDM Image.  

This specification does not require the HDR Reference Display to accurately reproduce light levels below 0.005 cd/m²; nonetheless, if such a device can reproduce light levels below 0.005 cd/m², it shall do so according to the decoding equation specified at Section 6.1.2.3.  

The behavior of the HDR Reference Display is unspecified when reproducing colors that are outside the DCI HDR Colo Volume. As specified at Section 6.1.3, the HDR DCDM does not contain colors outside the DCI HDR Color Volume.  

# 8.2 Initial Conditions  

The display shall be turned on and allowed to thermally stabilize for 20 to 30 minutes prior to all measurements. The room ights shall be turned off, except for the minimal lighting provided for working or safety reasons.  

The display shall be calibrated to the target image parameters before final measurements are made.  

# 8.3 Environment  

# 8.3.1 Ambient Luminance  

An HDR Reference Display can be either a reflective projector or a direct view display. The level of ambient light reflected by the screen should be minimized. Black, non-reflective finishes on all surfaces, along with recessed lighting, should be used.  

With the device turned off, measure the luminance of the center of the screen. For both Review Rooms and Exhibition Theaters, the ambient light level measured in the center of the screen should be less than or equal to $0 . 0 0 2 \ \mathsf { c d } / \mathsf { m } ^ { 2 }$ for reflective projector screens and less than or equal to $0 . 0 0 0 5 ~ \mathrm { c d } / \mathrm { m } ^ { 2 }$ for direct view displays. A lab environment used for device testing should have all ambient light eliminated such that the level of ambient light reflected by the screen is less than 0.0005 $\mathsf { c d } / \mathsf { m } ^ { 2 }$ . Safety regulations and the placement of exit lights or access lights may result in a higher ambient light level, but it should be noted that this will reduce the contrast of the resulting image.  

# 8.3.2 Reference Viewing Position for Color Grading  

The reference viewing position for color grading shall be at a viewing distance of 1.5 to 3.5 screen heights (for constant height presentation), or if constant width is used for both 2.39:1 and 1.85:1 aspect ratios, then this viewing distance refers to the height of the 1.85:1 picture. Lighting on work surfaces or consoles should be masked and filtered to eliminate any spill onto the display.  

# 8.4 HDR Mode Image Parameters  

# 8.4.1 General  

All image parameters shall be measured as light from the screen or display, with the measurements made from the reference viewing position in the Review Room, or from the center of the normal seating area in an Exhibition Theater.  

Image parameters and tolerances assume that the coding equations specified in Section 6.1.2.2 are used.  

# 8.4.2 Luminance Uniformity  

The variance in the measured luminance from the center to the sides and corners of the screen or display shall not exceed the specified tolerances in Table 6.  

# 8.4.3 White Point and Luminance  

When the HDR Reference Display is sent a full frame image with code values 2524 X″, 2546 Y″, 2583 Z″, the Yxy coordinates of the displayed image shall be $\begin{array} { r } { Y = 2 9 9 . 6 } \end{array}$ , $\begin{array} { r } { x = 0 . 3 1 2 8 } \end{array}$ , $y = 0 . 3 2 9 0 ;$ , within the specified tolerances in Table 6. These coordinates approximate the nominal white point of the DCI HDR Color Volume.  

The DCI HDR Color Volume allows other common white points to be reproduced, albeit with a maximum luminance lower than that achievable for the white point of the DCI HDR Color Volume. Refer to Table 9 for examples of alternative creative white points.  

In the event that display or projection technology is developed that is able to meet all provisions of this specification (e.g., peak luminance, screen black level, etc.) but is unable to meet the full-screen luminance requirements stated in this section, DCI leaves open the possibility of developing a new application profile to accommodate such technology.  

# 8.4.4 Minimum Active Black Level  

The Minimum Active Black Level is the lowest luminance that the HDR Reference Display is required to achieve.  

The Minimum Active Black Level is $0 . 0 0 5 c d / m ^ { 2 }$ , within the tolerances specified at Table 6.  

When the HDR Reference Display is sent a full frame images with the code values 60 X″, 62 Y″, 65 Z″, the chromaticity coordinates of the displayed image shall be $x = 0 . 3 0 9 5$ , $y = 0 . 3 2 9 6$ . These code values shall produce a displayed luminance of $0 . 0 0 5 c d / m ^ { 2 }$ within the specified tolerances in Table 6.  

All measurements shall be made in the center of the screen while in a lab environment such that no contamination from ambient light contributes to the output luminance.  

# 8.4.5 White Chromaticity Uniformity  

The variance in displayed chromaticity across the display shall not exceed the specified tolerances in Table 6.  

# 8.4.6 Electro-Optical Transfer Function  

# 8.4.6.1 General  

The Electro-Optical Transfer Function is the EOTF specified in [SMPTE ST 2084].  

Section 6.1.2 specifies the mapping between XYZ tristimulus values and $( \mathsf { C V } _ { \mathsf { X } ^ { \prime \prime } } , \mathsf { C V } _ { \mathsf { Y } ^ { \prime \prime } } , \mathsf { C V } _ { Z ^ { \prime \prime } } )$ code values.  

# 8.4.6.2 Tracking Performance  

EOTF tracking performance shall be measured at the code-values described in Table 7 and Table 8 with the tolerances identified in Table 6.  

All measurements shall be made in the center of the screen while in a lab environment such that no contamination from ambient light contributes to the output luminance.  

# 8.4.7 Color Volume  

See Table 6.  

# 8.4.8 Color Accuracy  

Within the DCI HDR Color Volume, all colors shall be accurately reproduced. Table 6 defines tolerances for the color primaries of the DCI HDR Color Volume. Table 9 provides exact chromaticity and luminance values for a set of test code values that fall  

within these tolerances.  

All measurements shall be made in the center of the screen while in a lab environment such that no contamination from ambient light contributes to the output luminance.  

# ANNEX A NORMATIVE HDR MODE TABLES  

The HDR Reference Display image parameter values and tolerances for the displayed image in Review Rooms and Exhibition Theaters, as measured from the display or screen, and including the room ambient light, are summarized in Table 6. Where the values are specified as minimums, it is understood that these parameters shall not be constrained from future improvements as the technology progresses.  

Tolerances for Electro-Optical Transfer Function distortion (measured as a percentage error) are calculated as follows:  

Percentage error $= 1 0 0 ^ { \star }$ ((measured luminance - target luminance) / target luminance)  

where target luminance is derived by decoding the input code value using the decoding equation in Section 8.4.6.2, using th anges and tolerances specified in Table 6.  

Table 6: Image Parameter Values and Tolerances for HDR Reference Display   


<html><body><table><tr><td rowspan="2">Reference</td><td rowspan="2">Parameter</td><td rowspan="2">Value</td><td colspan="2">HDR Reference Projector</td><td colspan="2"> HDR Direct View Display</td></tr><tr><td>Review Room Tolerance</td><td>Exhibition Theater Tolerance</td><td>Review Room Tolerance</td><td>Exhibition Theater Tolerance</td></tr><tr><td rowspan="4">Section 8.4.2, Section 8.4.3</td><td>Luminance,center,Peak Luminance,White-1</td><td>299.6 cd/m2</td><td>± 18.0 cd/m2</td><td>± 30.0 cd/m²</td><td>±9.0 cd/m²</td><td>± 9.0 cd/m2</td></tr><tr><td>Luminance, Screen Average,White-1</td><td>299.6 cd/m2</td><td>N/A</td><td>N/A</td><td>± 9.0 cd/m²</td><td>± 9.0 cd/m2</td></tr><tr><td>Luminance, sides</td><td>299.6 cd/m2</td><td>85% to 100% of center</td><td>75% to 100% of center</td><td>± 9.0 cd/m²</td><td>± 9.0 cd/m2</td></tr><tr><td>Luminance, corners</td><td>299.6 cd/m2</td><td>85% to 100% of center</td><td>Not Specified</td><td>± 9.0 cd/m²</td><td>± 9.0 cd/m2</td></tr><tr><td>Section 8.4.4</td><td>Minimum Active Black Level</td><td>0.005 cd/m2</td><td>± 0.001 cd/m2</td><td>± 0.001 cd/m²</td><td>± 0.001 cd/m2</td><td>± 0.001 cd/m²</td></tr><tr><td rowspan="2">Section 8.4.5</td><td>White chromaticity, center, Peak Luminance,White-1</td><td>×= 0.3128 y= 0.3290</td><td>±0.002 x ±0.002 y</td><td>±0.006 x ± 0.006 y</td><td>± 0.002 × ±0.002 y</td><td>±0.006 × ± 0.006 y</td></tr><tr><td>White chromaticity uniformity, corners (tolerance from center)</td><td>±0.000 X ± 0.000 y</td><td>± 0.008 x ± 0.008 y</td><td>±0.015 × ± 0.015 y</td><td>± 0.008 x ± 0.008 y</td><td>±0.015 × ±0.015 y</td></tr></table></body></html>  

<html><body><table><tr><td>Section 8.4.6</td><td>Electro- Optical Transfer Function</td><td>Per [SMPTE ST 2084]</td><td>Y≤0.02 cd/m² ± 20%; 0.02<Y≤1.0 cd/m² ± 12%; 1.0<Y≤299.6 cd/m² ± 6%</td><td>Y≤0.02 cd/m² ± 20%; 0.02<Y≤1.0 cd/m² ± 15%; 1.0<Y≤299.6 cd/m² ±10%</td><td>Y≤0.02 cd/m² ± 20%; 0.02<Y≤1.0 cd/m² ± 5%; 1.0<Y≤299.6 cd/m² ± 3%</td><td>Y≤0.02 cd/m² ± 20%; 0.02<Y≤1.0 cd/m² ± 5%; 1.0<Y≤299.6 cd/m² ± 3%</td></tr><tr><td>Section 8.4.7</td><td>Color Volume</td><td>DCI HDR color volume specified at Section 5.</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr><tr><td>Section 8.4.8</td><td>Color Accuracy</td><td>The following points are expressed in (x,y): Red (0.6800, (0.3250,.690,0 Blue (0.1500, 0.0600)</td><td colspan="4">Red (0.6800 ± 0.01,0.3200 ± 0.01)</td></tr></table></body></html>  

Table 7: Black-To-White Gray Step-Scale Test Pattern Code Values, Luminance Values, & Chromaticity Coordinates   


<html><body><table><tr><td></td><td colspan="3">Input Code Values</td><td colspan="3">Output XYZ Tristimulus</td><td colspan="2">Output Chromaticity Coordinates</td><td>Output Luminance</td></tr><tr><td> Step Number</td><td>CVx</td><td>CVy"</td><td>CVz"</td><td>X</td><td>Y</td><td>z</td><td></td><td>y</td><td>Y, cd/m²</td></tr><tr><td>1</td><td>472</td><td>481</td><td>496</td><td>0.4748</td><td>0.5000</td><td>0.5441</td><td>0.3126</td><td>0.3292</td><td>0.5000</td></tr><tr><td>2</td><td>603</td><td>614</td><td>632</td><td>0.9482</td><td>0.9999</td><td>1.089</td><td>0.3122</td><td>0.3292</td><td>1.000</td></tr><tr><td>3</td><td>758</td><td>771</td><td>792</td><td>1.898</td><td>2.002</td><td>2.181</td><td>0.3121</td><td>0.3293</td><td>2.000</td></tr><tr><td>4</td><td>1000</td><td>1015</td><td>1040</td><td>4.748</td><td>5.001</td><td>5.449</td><td>0.3124</td><td>0.3291</td><td>5.000</td></tr><tr><td>5</td><td>1211</td><td>1227</td><td>1255</td><td>9.507</td><td>9.992</td><td>10.89</td><td>0.3128</td><td>0.3288</td><td>9.990</td></tr><tr><td>6</td><td>1444</td><td>1462</td><td>1492</td><td>19.01</td><td>20.00</td><td>21.76</td><td>0.3128</td><td>0.3291</td><td>20.00</td></tr><tr><td>7</td><td>1783</td><td>1803</td><td>1836</td><td>47.50</td><td>50.01</td><td>54.41</td><td>0.3126</td><td>0.3292</td><td>50.01</td></tr><tr><td>8</td><td>2060</td><td>2081</td><td>2116</td><td>95.11</td><td>100.1</td><td>109.0</td><td>0.3127</td><td>0.3291</td><td>100.1</td></tr><tr><td>9</td><td>2350</td><td>2372</td><td>2408</td><td>190.2</td><td>200.2</td><td>217.8</td><td>0.3127</td><td>0.3292</td><td>200.2</td></tr><tr><td>10</td><td>2524</td><td>2546</td><td>2583</td><td>284.8</td><td>299.6</td><td>326.2</td><td>0.3128</td><td>0.3290</td><td>299.6</td></tr></table></body></html>  

Table 8: Black-To-Dark Gray Step-Scale Test Pattern Code Values, Luminance Values, & Chromaticity Coordinates   


<html><body><table><tr><td></td><td colspan="3">Input Code Values</td><td colspan="3">Output XYZ Tristimulus</td><td colspan="2">Output Chromaticity Coordinates</td><td>Output Luminance</td></tr><tr><td>Step Number</td><td>CVx"</td><td>CVy".</td><td>CVz"</td><td>X</td><td>Y</td><td>Z</td><td></td><td>y</td><td>Y, cd/m²</td></tr><tr><td>1</td><td>60</td><td>62</td><td>65</td><td>0.0047</td><td>0.0050</td><td>0.0055</td><td>0.3095</td><td>0.3296</td><td>0.0050</td></tr><tr><td>2</td><td>74</td><td>76</td><td>79</td><td>0.0071</td><td>0.0075</td><td>0.0081</td><td>0.3134</td><td>0.3302</td><td>0.0075</td></tr><tr><td>3</td><td>86</td><td>88</td><td>92</td><td>0.0096</td><td>0.0100</td><td>0.0109</td><td>0.3133</td><td>0.3281</td><td>0.0100</td></tr><tr><td>4</td><td>105</td><td>108</td><td>112</td><td>0.0143</td><td>0.0151</td><td>0.0163</td><td>0.3124</td><td>0.3309</td><td>0.0151</td></tr><tr><td>5</td><td>121</td><td>124</td><td>129</td><td>0.0191</td><td>0.0202</td><td>0.0219</td><td>0.3129</td><td>0.3293</td><td>0.0202</td></tr><tr><td>6</td><td>157</td><td>161</td><td>167</td><td>0.0333</td><td>0.0352</td><td>0.0381</td><td>0.3125</td><td>0.3300</td><td>0.0352</td></tr><tr><td>7</td><td>185</td><td>189</td><td>196</td><td>0.0478</td><td>0.0501</td><td>0.0544</td><td>0.3138</td><td>0.3291</td><td>0.0501</td></tr><tr><td>8</td><td>221</td><td>226</td><td>234</td><td>0.0714</td><td>0.0752</td><td>0.0815</td><td>0.3131</td><td>0.3296</td><td>0.0752</td></tr></table></body></html>  

<html><body><table><tr><td>9</td><td>250</td><td>255</td><td>265</td><td>0.0952</td><td>0.0998</td><td>0.1093</td><td>0.3129</td><td>0.3279</td><td>0.0998</td></tr><tr><td>10</td><td>332</td><td>339</td><td>351</td><td>0.1895</td><td>0.1997</td><td>0.2180</td><td>0.3121</td><td>0.3289</td><td>0.1997</td></tr></table></body></html>  

Table 9: Color Accuracy Color Patch Code Values, Luminance Values, & Chromaticity Coordinates   


<html><body><table><tr><td></td><td colspan="3">Input Code Values</td><td colspan="3">Output XYZ Tristimulus</td><td colspan="2">Output Chromaticity Coordinates</td><td>Output Luminance</td></tr><tr><td> Patch</td><td></td><td>cVx"CVy"</td><td>CVz</td><td>X</td><td>Y</td><td>Z</td><td></td><td>y</td><td> Y, cd/m²</td></tr><tr><td>Red-1</td><td>2234</td><td>1925</td><td>68</td><td>144.6</td><td>68.13</td><td>0.0060</td><td>0.6797</td><td>0.3202</td><td>68.13</td></tr><tr><td>Green-1</td><td>1988</td><td>2387</td><td>1327</td><td>79.69</td><td>207.3</td><td>13.53</td><td>0.2651</td><td>0.6899</td><td>207.4</td></tr><tr><td>Blue-1</td><td>1871</td><td>1525</td><td>2565</td><td>59.47</td><td>23.86</td><td>313.0</td><td>0.1501</td><td>0.0602</td><td>23.86</td></tr><tr><td>Cyan-1</td><td>2218</td><td>2434</td><td>2583</td><td>139.2</td><td>231.3</td><td>326.2</td><td>0.1998</td><td>0.3320</td><td>231.3</td></tr><tr><td>Magenta-1</td><td>2383</td><td>2049</td><td>2565</td><td>205.4</td><td>92.58</td><td>313.0</td><td>0.3362</td><td>0.1515</td><td>92.58</td></tr><tr><td>Yellow-1</td><td>2423</td><td>2510</td><td>1327</td><td>225.5</td><td>275.8</td><td>13.53</td><td>0.4380</td><td>0.5357</td><td>275.8</td></tr><tr><td>Red-2</td><td>2169</td><td>1899</td><td>1058</td><td>123.8</td><td>63.83</td><td>5.791</td><td>0.6401</td><td>0.3300</td><td>63.83</td></tr><tr><td>Green-2</td><td>2110</td><td>2402</td><td>1674</td><td>107.4</td><td>214.7</td><td>35.71</td><td>0.3001</td><td>0.6001</td><td>214.7</td></tr><tr><td>Blue-2</td><td>1834</td><td>1491</td><td>2524</td><td>54.14</td><td>21.70</td><td>284.8</td><td>0.1501</td><td>0.0602</td><td>21.70</td></tr><tr><td>Cyan-2</td><td>2280</td><td>2443</td><td>2576</td><td>161.3</td><td>236.2</td><td>321.0</td><td>0.2245</td><td>0.3288</td><td>236.2</td></tr><tr><td>Magenta-2</td><td>2322</td><td>2016</td><td>2533</td><td>178.1</td><td>85.39</td><td>290.8</td><td>0.3213</td><td>0.1541</td><td>85.39</td></tr><tr><td>Yellow-2</td><td>2432</td><td>2513</td><td>1731</td><td>230.3</td><td>277.7</td><td>41.50</td><td>0.4190</td><td>0.5054</td><td>277.7</td></tr><tr><td>White-1 (approx. D65 white)</td><td>2524</td><td>2546</td><td>2583</td><td>284.8</td><td>299.6</td><td>326.3</td><td>0.3128</td><td>0.3290</td><td>299.6</td></tr><tr><td>White-2 (approx. D60 white)</td><td>2509</td><td>2530</td><td>2534</td><td>275.2</td><td>288.8</td><td>291.5</td><td>0.3217</td><td>0.3376</td><td>288.8</td></tr><tr><td>White-3 (approx. D55 white)</td><td>2493</td><td>2513</td><td>2478</td><td>265.2</td><td>277.7</td><td>256.2</td><td>0.3319</td><td>0.3476</td><td>277.7</td></tr></table></body></html>  

# ANNEX B SUBJECTIVE PARAMETERS (INFORMATIVE)  

The following parameters are also important to picture quality, but because they are difficult to measure with today’s readily available instrumentation, they are generally assessed subjectively.  

Instrumentation designers are encouraged to design and manufacture equipment that can be used to translate subjective parameters into objective performance characterization.  

# B.1 GRAYSCALE TRACKING  

Using the black-to-white gray step-scale test pattern, the entire step-scale appears neutral without any visible color nonuniformity. The black-to-white gray step-scale test pattern is centered on the display and occupies a rectangle sized $2 0 \%$ of the screen height by $8 0 \%$ of the screen width. The background is defined by code values [1000 1015 1040], which define a luminance of $5 . 0 \ \mathsf { c d } / \mathsf { m } ^ { 2 }$ and chromaticity coordinates $\mathsf { x } = 0 . 3 1 2 4 \mathrm { ~ y } = 0 . 3 2 9 1$ . Each step is $8 \%$ of the screen width and is defined by the code values in Table 7.  

Using the black-to-dark gray step-scale test pattern, the entire step-scale appears neutral without any visible color nonuniformity. The black-to-dark gray step-scale test pattern is centered on the display and occupies a rectangle sized $2 0 \%$ of the screen height by $8 0 \%$ of the screen width. The background is defined by code values [122 124 129], which define a luminance of $0 . 0 2 0 ~ \mathsf { c d } / \mathsf { m } ^ { 2 }$ and chromaticity coordinates $\mathsf { x } = 0 . 3 1 2 9 \ \mathsf { y } = 0 . 3 2 9 3$ . Each step is $8 \%$ of the screen width and is defined by the code values in Table 8.  

All measurements shall be made in the center of the screen while in a lab environment such that no contamination from ambient light contributes to the output luminance.  

# B.2 CONTOURING  

Contouring is the appearance of steps or bands where only a continuous or smooth gradient is expected. Because contouring is a function of many variables, it is important to look at a series of test patterns with shallow gradations to simulate naturally occurring gradations in images.  

Examples include horizons, particularly at sunset or sunrise, and the natural falloff around high intensity spotlights, particularly if diffused by atmosphere or lens filtration. These test pattern ramps have a step width of no less than 4 pixels with an increment of one code value per step and are placed on a background equal to the minimum value in the ramp, so that the eye is adapted for maximum sensitivity.  

Since dynamic fades to black are widely used in real-world content, a dynamic test pattern that fades slowly to black is anothe useful approach.  

Each image is viewed in the proper environment as defined in Section 8.3, and ought not to exhibit any contouring (step in luminance), or color deviation from the neutral gray.  

# ANNEX C COLOR CONVERSIONS (INFORMATIVE)  

The color conversion steps to convert from P3D65 R′G′B′ to X″Y″Z″ and from X″Y″Z″ to P3D65 RGB are shown here as an example for implementation. P3D65 is defined in [SMPTE ST 2113].  

# C.1 Color Conversion R′G′B′ to X″Y″Z″  

Color conversion from R′G′B′ to X″Y″Z″ typically involves the following five-step process:  

1. To the R′G′B′ code values, apply the inverse-quantization process to convert the image’s integer code values to a nonlinear R′G′B′ signal in the range [0.0,1.0] from the code value’s integer range, 12bit full-range code values range from [0,4095] and 16 bit full-range code values range from [0,65535]. 2. To the non-linear R′G′B′ signal, apply [SMPTE ST 2084] EOTF to convert non-linear R′G′B′ signal to linear RGB signal. 3. To the linear RGB signal, apply the RGB to XYZ primary conversion matrix to convert linear RGB to linear XYZ. 4. To the linear XYZ signal, apply the [SMPTE ST 2084] Inverse-EOTF to convert from linear XYZ to non-linear $\mathsf { X } ^ { \prime \prime } \mathsf { Y } ^ { \prime \prime } \mathsf { Z } ^ { \prime \prime }$ .  

5. To the non-linear X″Y″Z″ signal, apply the 12 bit full-range quantization process to convert non-linear X″Y″Z″ to 12 bit X″Y″Z″ code values.  

The transfer function of the HDR Reference Display is explicitly specified by [SMPTE ST 2084]. The actual coefficients of the color transform matrices depend on the color primaries of the Mastering HDR Reference Display (encoding side) and the Cinema HDR Display (decoding side), and their respective white points.  

[SMPTE ST 2084] is a defined standard, and 12-bit quantization is sufficient, so a normalized PQ is not needed. Using a normalized PQ might impede the cross-utilization of assets in other formats.  

The processing steps for converting 12 bit R′G′B′ code values (which range from 0 to 4095) of the color-graded master to device-independent X″Y″Z″ are shown below.  

This color space conversion can be implemented within the color corrector or applied in a separate batch process. The equations below combine step #1 (inverse quantization) and step #2 ([SMPTE ST 2084] EOTF):  

$$
R = k _ { 0 } \ : \mathrm { E O T F } \left( \frac { C V _ { R ^ { \prime } } } { k _ { 1 } } \right)
$$  

$$
G = k _ { 0 } \ : \mathrm { E O T F } \left( \frac { C V _ { G ^ { \prime } } } { k _ { 1 } } \right)
$$  

$$
B = k _ { 0 } \mathrm { E O T F } \left( \frac { C V _ { B ^ { \prime } } } { k _ { 1 } } \right)
$$  

The output (RGB) of this linearization is a floating point number that ranges from 0.0 to 10000.0. The $3 { \times } 3$ linear matrix is then applied to this signal, resulting in a linear XYZ signal with floating point values that range from 0.0 to 10000.0. To minimize quantization errors, this matrix should be implemented as a floating point calculation. The matrix is shown here to 14 significant digits.  

$$
{ \left[ \begin{array} { l l l } { X } \\ { Y } \\ { Z } \end{array} \right] } = { \left( \begin{array} { l l l } { 0 . 4 8 6 5 7 0 9 4 8 6 4 8 2 2 } & { 0 . 2 6 5 6 6 7 6 9 3 1 6 9 1 0 } & { 0 . 1 9 8 2 1 7 2 8 5 2 3 4 3 6 } \\ { 0 . 2 2 8 9 7 4 5 6 4 0 6 9 7 5 } & { 0 . 6 9 1 7 3 8 5 2 1 8 3 6 5 1 } & { 0 . 0 7 9 2 8 6 9 1 4 0 9 3 7 5 } \\ { 0 } & { 0 . 0 4 5 1 1 3 3 8 1 8 5 8 9 0 } & { 1 . 0 4 3 9 4 4 3 6 8 9 0 0 9 8 } \end{array} \right) } * { \left[ \begin{array} { l } { R } \\ { G } \\ { B } \end{array} \right] }
$$  

Finally, $( \mathsf { C V } _ { \mathsf { X } ^ { \prime \prime } } , \mathsf { C V } _ { \mathsf { Y } ^ { \prime \prime } } , \mathsf { C V } _ { Z ^ { \prime \prime } } )$ are obtained as specified in Section 6.1.2.2. This does not compensate for the screen black level, so it represents an absolute encoding of the light levels independent of the screen black level.  

# C.2 Color Conversion X″Y″Z″ to P3D65 RGB  

The $( \mathsf { C V } _ { \mathsf { X } ^ { \prime \prime } } , \mathsf { C V } _ { \mathsf { Y } ^ { \prime \prime } } , \mathsf { C V } _ { Z ^ { \prime \prime } } )$ -to-P3D65 RGB processing steps for a Cinema HDR Display with the same color primaries as the HDR Reference Display are shown below and defined by the following steps:  

1. Apply Inverse Quantization to $( \mathsf { C V } _ { \mathsf { X } ^ { \prime \prime } } , \mathsf { C V } _ { \mathsf { Y } ^ { \prime \prime } } , \mathsf { C V } _ { Z ^ { \prime \prime } } )$ to obtain non-linear X″Y″Z″ in the range [0.0,1.0]  

2. Apply [SMPTE ST 2084] EOTF to non-linear X″Y″Z″ values to obtain linear XYZ  

3. Convert linear XYZ to P3D65 RGB values  

Section 6.1.2.3 describes steps #1 and #2.  

Step #3 can be achieved using the following P3D65 color encoding primaries transformation:  

The resulting linear RGB light levels may end up being converted to other formats as the image data flows through the image/display processing operations involved in ultimately displaying the image to the viewer via the HDR display.  

If other formats within the HDR display that may have a limited precision, it is important to preserve the visual fidelity/accuracy that is achievable with the 12 bit X″Y″Z″ [SMPTE ST 2084] distribution format across the minimum gamut (luminance range and color volume) specified elsewhere in this document to ensure that additional fidelity isn’t loss.  

# BIBLIOGRAPHY (INFORMATIVE)  

SMPTE ST 372, Dual Link 1.5 Gb/s Digital Interface for $1 9 2 0 \times 1 0 8 0$ and 2048 $\times$ 1080 Picture Formats  