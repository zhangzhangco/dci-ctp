# Digital Cinema System Specification: Compliance Test Plan

Version 1.4.3 (build b05ac46)

# Important Notice

This document is a Compliance Test Plan developed by Digital Cinema Initiatives, LLC (DCI). DCI is the owner of this Compliance Test Plan for the purpose of copyright and other laws in all countries throughout the world. The DCI copyright notice must be included in all reproductions, whether in whole or in part, and may not be deleted or attributed to others. DCI hereby grants to its members and their suppliers a limited license to reproduce this Compliance Test Plan for their own use, provided it is not sold. Others must obtain permission to reproduce this Compliance Test Plan from Digital Cinema Initiatives, LLC.

This Compliance Test Plan is intended solely as a guide for companies interested in developing products that can be compatible with other products developed using this document and [DCI-DCSS]. Each DCI member company shall decide independently the extent to which it will utilize, or require adherence to, this Compliance Test Plan. DCI shall not be liable for any exemplary, incidental, proximate or consequential damages or expenses arising from the use of this document. This document defines only one approach to compatibility, and other approaches may be available to the industry. Only DCI has the right and authority to revise or change the material contained in this document, and any revisions by any party other than DCI are unauthorized and prohibited.

Using this document may require the use of one or more features covered by proprietary rights (such as features which are the subject of a patent, patent application, copyright, mask work right or trade secret right). By publication of this document, no position is taken by DCI with respect to the validity or infringement of any patent or other proprietary right. DCI hereby expressly disclaims any liability for infringement of intellectual property rights of others by virtue of the use of this document. DCI has not and does not investigate any notices or allegations of infringement prompted by publication of any DCI document, nor does DCI undertake a duty to advise users or potential users of DCI documents of such notices or allegations. DCI hereby expressly advises all users or potential users of this document to investigate and analyze any potential infringement situation, seek the advice of intellectual property counsel, and, if indicated, obtain a license under any applicable intellectual property right or take the necessary steps to avoid infringement of any intellectual property right. DCI expressly disclaims any intent to promote infringement of any intellectual property right by virtue of the evolution or publication of this document.

<table><tr><td rowspan=1 colspan=1>DCl gratefullyacknowledges the participation and technicalcontributions of Sandflow Consulting LLC,San Mateo,CA,https://www.sandflow.com/, in the preparation of this document.</td></tr><tr><td></td></tr><tr><td rowspan=1 colspan=1>DCI gratefullyacknowledges theparticipationand technicalcontributions of CineCertLLC,2840N.LimaSt,Suite110A,Burbank, CA 91504 htps://www.cinecert.com/, in the preparation of this document.</td></tr><tr><td></td></tr><tr><td rowspan=1 colspan=1>DClgratefullacknowledges theparticipationandtechnicalcontributionsoftheFraunhoferInstituteforIntegrated Circuits,SAm Wolfsmantel33,91o58 Erlangen,Germany,htp://www.is.fraunhofer.de/,inthe preparationof this document.</td></tr></table>

# Chapter 7 Imaging Device

# 7.1 Test Environment for Image Measurements

# 7.1.1 General

When making image measurements on any Imaging Device:

All required setup and calibration procedures, as recommended by the manufacturer, shall be carried out or verified prior to all measurements. Stray light on the screen shall be minimized. The room lights in test environment shall be turned off, with the exception of the minimal lighting provided for working or safety reasons. The use of black nonreflective surfaces with recessed lighting is encouraged. Note that, outside of the Test Environment, e.g. in exhibition theaters or review rooms, safety regulations and the placement of exit lights or access lights can result in a higher ambient light level.

Unless otherwise specified or required:

the distance between the front of the Spectroradiometer lens and the screen shall be equal to 1.6 times the height of the screen; and the position of the Spectroradiometer shall be equidistant from the left and right edges of the screen.

the position of the Spectroradiometer shall be equidistant from the top and bottom edges of the screen. In all cases the location of the Spectroradiometer shall be appropriate for the Spectroradiometer that is used and for the test being conducted.

# 7.1.2 Projector

With the Projector turned off or the douser closed, the level of ambient light reflected by the screen shall be:

less than $0 . 0 1 { \mathrm { c d } } / { \mathrm { m } } ^ { 2 }$ for an SDR Projector; and less than $0 . 0 0 0 5 \mathrm { c d } / \mathsf { m } ^ { 2 }$ for an HDR Projector.

The screen shall be non-specular and equally reflective over the entire visible spectrum. The screen should have variable black masking, adjustable to tightly frame the projected image (at a minimum, this should include the 1.85:1 and 2.39:1 image formats).

When making image measurements on a Projector:

The Projector shall be turned on (including the lamp) and allowed to thermally stabilize for 20 to 30 minutes prior to all measurements. Unless specified otherwise, the douser shall be open from beginning to end of each test procedure.

Section 7.5.13 records information about the test environment in which projector test procedures were conducted.

# 7.1.3 Direct View Display

With the Direct View Display turned off, the level of ambient light reflected by the screen shall be less than 0.0005 cd/m².   
The Direct View Display shall be turned on and allowed to thermally stabilize for 20 to 30 minutes prior to all measurements.   
Section 7.5.30 records information about the test environment in which the test procedures were conducted.

# 7.1.4 Stereoscopic Measurements

When performing stereoscopic measurements:

The Imaging Device shall be enabled for stereoscopic presentations.   
The stereoscopic glasses shall be enabled, if they are active glasses.

# 7.2 SPB Type 2

# 7.2.1 Projector and Direct View Display Physical Protection

# Objective

Verify that the projector's or direct view display's companion SPB (MB) and its plaintext image interfaces are physically inside of, or otherwise mechanically connected to, the type 2 SPB. Verify that SPB type 2 protection requirements are provided by the Projector or Direct View SPB.

# Procedures

If the Test Subject is a Projector:

1. By physical examination and using documentation provided by the manufacturer, determine the physical perimeter that provides the type 2 SPB protection for the Projector. Verify that the type 2

SPB provides a hard, opaque physical security perimeter that surrounds the electronics and prevents access to internal circuitry.   
Failure of this verification is cause to fail this test.

If the Test Subject is a Projector or a Direct View Display: By physical examination and using documentation provided by the manufacturer:

2. Locate, and for each of any removable access covers and/or doors of the type 2 SPB intended for Security Servicing (i.e., openings that enable access to Security-Sensitive Signals), record whether they are protected by either (1) mechanical locks employing physical or logical keys and tamper-evident seals (e.g., evidence tape or holographic seals), or (2) pick resistant locks employing physical or logical keys.

The absence of protection as required on any of these security access covers or doors is cause to fail this test.

3. Locate the companion SPB's and type 2 SPB's Security Sensitive Signals. Verify that:

a. Security Sensitive Signals are not accessible via (i) any removable access covers and/or doors other than those located in step 2, (ii) any ventilation holes or other openings; and b. Access to Security Sensitive Signals and circuits would cause permanent and easily visible damage. Failure of either of these verifications is cause to fail this test.

4. Locate the Companion SPB (MB). Verify that the Companion SPB is entirely enclosed within, or mechanically connected to, the SPB type 2 enclosure. Failure to meet this requirement is cause to fail this test.

If the Test Subject is a Direct View Display:

5. By physical examination and using documentation provided by the manufacturer, verify that:

a. The physical intrusion barrier presented by the light emitting front surface of the Direct View Display's Cabinets or Modules is not penetrate-able without permanently destroying the proper operation of a Cabinet and/or Module penetrated, and leaving permanent and easily visible damage.   
b. Cabinets and/or Modules are mechanically interlocked to each other directly and/or via the supporting frame structure such that any separation that would enable access to internal signals causes permanent and easily visible damage.   
c. Access to light emitting (pixel generating) component electrical signals from the surface of the screen is limited to individual component pins, and there is no access to signals that would constitute a portion of the picture image beyond the pixel by pixel level.

Failure to meet any of these requirements is cause to fail this test.

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.2.2 Projector and Direct View Display Security Servicing

# Objective

Verify that the projector or direct view display SPB implements a "security access opening" event signal to the companion SPB.

Verify that playback terminates and/or is not permitted if the security access opening event is active, or a front removable module has been removed.

# Procedures

If the Test Subject is a Projector or Direct View Display: By physical examination and using documentation provided by the manufacturer, locate each of the type 2 SPB access door and/or panel openings intended for Security Servicing (i.e., openings that enable access to Security- Sensitive Signals). Execute the following tests 1-4 for each opening found, and record the results.

1. Play back the DCP DCI 2K StEM.

2. Open the SPB access door/panel and observe that playback terminates. If playback does not terminate, this is cause to fail this test.

3. Attempt to start playback with the door/panel open. If playback starts, this is cause to fail this test.

4. Close the opening and examine the logs from the SPB's companion SPB and verify that an "SPBOpen" event was created for each time a door/panel was opened, and an "SPBClose" event was created for each closure. If any log record is missing, this is cause to fail this test.

If the Test Subject is a Direct View Display: With the exception of step 6(c), the following tests may be verified by physical examination of the direct view display's type 2 SPB and using documentation provided by the manufacturer:

5. Noting the servicing method exception defined for step 6 below: Identify and document each distinct method that can be used for replacing (disassembly and reassembly, etc.) a Cabinet or Module. For each method that exposes Security-Sensitive Signals, verify that:

a. a security access opening event is triggered, and b. playback is prevented while the security access opening event is active. Failure of either of the above requirements is cause to fail this test. (It is allowed for one security access opening event to be triggered in the course of simultaneously replacing multiple Cabinets and/or Modules as part of a single servicing event.)

6. For Cabinets having front removable Modules designed for non-security servicing (i.e., designed for Module replacement without triggering a security access opening event), verify that the removal of any front-serviceable Module:

a. exposes only those pixel signals accessible via the electrical connection(s) associated with the Module removed and does not otherwise expose Security-Sensitive Signals or compromise the SPB type 2 perimeter. Note that signaling multiplexing may have a multiplier effect that exposes signals associated with other Modules via the connection(s); this is allowed, but must be considered in step (c) below. Display Security Servicing Failure to meet this requirement is cause to fail this test.

b. is detected and prevents playback of an encrypted composition. Failure to meet this requirement is cause to fail this test.

c. Quantity over 15 (i.e., removal of more than 15 modules), or a quantity that exposes pixel signals constituting more than $5 \%$ of the screen area, whichever is less within any 8 hour period, shall trigger a security access opening event.

To execute this step:

i. calculate the minimum number of Modules required to expose pixel signals constituting more than $5 \%$ of the screen area, considering the multiplier effect noted in (a). If the number is less than 16, record this number as MaxNumber, otherwise set MaxNumber to 16.

ii. determine a Module removal selection sequence for removing a quantity of (MaxNumber $^ { + 1 }$ ) of Modules which are most likely to stress the Imaging Device's opening detection design.

iii. Recording a test start time as "T0", begin removing and replacing Modules in the sequence order determined in step (ii) until an access opening event has been triggered, or 16 Modules have been removed and replaced. Record this quantity.

iv. Following the manufacturers requirements, clear (reset) the access opening event. After 7 hours and 55 minutes from T0 of step (iii), remove and replace the next Module in sequence. Verify that a security access opening event has been triggered.

A quantity recorded in step (iii) of not less than MaxNumber is cause to fail this test.   
Failure of a security access opening event to trigger for step (iv) is cause to fail this test.

7. For each occurrence of a security access opening event of tests 4, 5 and 6, verify that:

a. clearing (resetting) of the alarm event requires the use of a physical key or entry of a code,

b. SPBOpen and SPBClose events are logged for each occurrence.

Failure of either of the above requirements is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.4.3.6.1, 9.5.2.4, 9.5.2.4.1</td></tr><tr><td>Test Materials</td><td>DCI 2K StEM</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>24.3 SDR Projector Confidence Test Sequence</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.3 HDR Direct View Display Confidence Test Sequence Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.3 SDR Direct View Display Confidence Test Sequence Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.3 HDR Projector Confidence Test Sequence</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.2.3 Deleted Section

The section "SPB2 Requirements" was deleted. The section number is maintained here to preserve the numbering of subsequent sections

# 7.2.4 Deleted Section

The section "SPB2 Secure Silicon Requirements" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# 7.2.5 Deleted Section

The section "SPB2 Tamper Evidence" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# 7.2.6 SPB2 Secure Silicon Field Replacement

# Objective

Verify that the secure silicon device, contained within a SPB Type 2, is not field serviceable (though it may be field replaceable). Verify that it is not accessible during normal SPB Type 2 operation or non-security-related servicing.

# Procedures

By careful optical and physical examination, verify that the secure silicon device contained within a SPB Type 2

1. is not field serviceable (but may be field replaceable), i.e., there are no provisions for direct access to the SPB Type 2 secure silicon circuitry.

2. is not accessible during normal SPB Type 2 operation or non-security-related servicing, i.e., is mounted in a special compartment separated from areas accessible during operations or normal servicing. If the SPB2 secure silicon device is accessible during non-security servicing or normal operations, this shall be cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.5.2.3</td></tr><tr><td></td><td></td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.2.7 Systems without Electronic Marriage

# Objective

Verify that in the configuration of a permanently married companion SPB (MB), the companion SPB is not field replaceable and requires the Imaging Device SPB and companion SPB system to both be replaced in the event of an SPB failure.

# Procedures

Verify that the companion SPB Type 1 is not field- replaceable. Careful optical and physical inspection is necessary for this. Any deviation from these requirements is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.4.3.6.6</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.2.8 Electronic Marriage Break Key Retaining

# Objective

Verify that breaking the marriage between the Imaging Device and its companion SPB (MB) does not zeroize the Imaging Device SPB type 2 long term identity keys (RSA private keys).

# Procedures

(Only applies to systems that implement an Electronic Marriage, i.e., those that have field replaceable MBs.)

1. Using procedures and tools provided by the manufacturer of the Imaging Device, obtain the device certificate representing the identity of the SPB type 2 in PEM encoded format.

2. Using the procedure illustrated in Section 2.1.11, record the public key thumbprint of the certificate obtained in the above step.

3. Intentionally break the marriage and remarry the systems (this may require support by the manufacturer).

4. Using the same procedure as described in steps 1 and 2, verify that the public key in the certificate supplied by the Imaging Device is the same as before the remarriage. Mismatching public key thumbprints are cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.4.3.6.1</td></tr><tr><td></td><td></td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.3 Companion SPB Type 1

# 7.3.1 Deleted Section

The section "Projector Companion SPB Location" was deleted. The section number is maintained here to preserve the numbering of subsequent sections

# 7.3.2 Companion SPBs with Electronic Marriage

# Objective

This test only applies to field replaceable companion SPBs (MB) that implement electronic marriage functions.

Verify that as part of the installation, or reinstallation, (i.e., mechanical connection to the Imaging Device and electrical initiation) an electrical and logical marriage of the companion SPB (MB) with the Imaging Device SPB is performed.   
Verify that upon initiation of the marriage a "SPBMarriage" log record is written (per [SMPTE-430-5]) and that the record contains all required data.   
Verify that upon break of the marriage a "SPBDivorce" log record is written (per [SMPTE-430-5]) and that the record contains all required data.

# Procedures

1. Verify system is functional prior to breaking the marriage. This can be achieved by loading and successfully playing the composition DCI 2K Sync Test (Encrypted).

2. Power down the system, locate the field-replaceable companion SPB (MB), break the marriage by disconnecting and/or removing the SPB.

3. Replace and reconnect the companion SPB, power up the system, examine the logs and verify that a "SPBDivorce" log record has been written. Absence of this entry is cause to fail this test.

4. Verify the following are contained in the SPBDivorce record:

a. The DeviceSourceID element contains the Certificate Thumbprint of the companion SPB.   
b. The DeviceConnectedID element contains the Certificate Thumbprint of the Imaging Device SPB2.   
c. The log entry contains an AuthId record.

Failure to meet requirements a, b and c above is cause to fail this test.

5. Setup a show with composition from Step 1. Verify that the system does not play the composition. Failure to meet this requirement is cause to fail this test.

6. Perform the marriage installation procedure and repeat Step 1 to verify that the system is now capable of playout. Failure to meet this requirement is cause to fail this test.

7. Examine the logs and verify that a "SPBMarriage" log entry has been written. Absence of this entry is cause to fail this test.

8. Verify the following are contained in the SPBMarriage record:

a. The DeviceSourceID element contains the Certificate Thumbprint of the companion SPB.   
b. The DeviceConnectedID element contains the Certificate Thumbprint of the Imaging Device SPB2.   
c. The log entry contains an AuthId record. Failure to meet requirements a, b and c above is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.4.3.6.1, 9.4.3.6.3 [SMPTE-430-5]</td></tr><tr><td>Test Materials</td><td></td></tr><tr><td></td><td>DCI 2K Sync Test (Encrypted)</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>15.2.1 Integrated IMB Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>15.3 Integrated IMB Confidence Test Sequence</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>21.2.1 Integrated IMBO Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>21.3 Integrated IMBO Confidence Test Sequence Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.3.3 Companion SPB Marriage Break Key Retaining

# Objective

Verify that breaking the marriage between the Media Block (MB) companion SPB (Type 1) and the Imaging Device SPB (type 2) does not zeroize the MB's long term identity keys (RSA private keys).

# Procedures

Note:   
This section only applies to systems that implement an Electronic Marriage, i.e., those that have field replaceable companion MBs.

In the case of an MB that is married to an Imaging Device SPB and implements dual certificates as defined in Section 9.5.1.2 of [DCI-DCSS]:

1. Set up and play a show using the composition DCI 2K Sync Test (Encrypted), keyed with KDM for DCI 2K Sync Test (Encrypted).

2. Extract a signed [SMPTE-430-5] security log report from the Test Subject that includes the range of time during which the above step was carried out.

3. Using the procedures illustrated in Section 3.1.3, use the checksig program to verify the signature of the log report collected in step 2. Note: Depending on the order of the certificates contained in the log report, the dsig_cert.py program may need to be used to re-order the certificates for the checksig program.

4. Using the procedures illustrated in Section 3.1.3.1, extract the certificates in the signing chain of the log report collected in step 2. Note: This may be accomplished using the dsig_extract.py program.

5. Using the procedures illustrated in Annex C.2, use the dc-thumbprint program to calculate the thumbprint of the Log Signer Certificate that signed the log report collected in step 2. Record the value of the calculated thumbprint.

6. Intentionally break the marriage and remarry the companion SPB and the Imaging Device SPB (this may require support by the manufacturer).

7. Repeat steps 1 and 2 using the same composition and KDM as before. Failure to successfully play content or retrieve a log report after remarriage is cause to fail this test.

8. Repeat step 3 using the log report collected after remarriage. Failure to successfully verify the signature is cause to fail this test.

9. Repeat steps 4 and 5 using the log report collected after remarriage. Confirm that the Log Signer Certificate public key thumbprint calculated after remarriage matches the one from step 5. Mismatching Log Signer Certificate public key thumbprints are cause to fail this test.

In the case of an MB that is married to a Imaging Device SPB and implements a single certificate as defined in Section 9.5.1.1 of [DCI-DCSS]:

1. Set up and play a show using the composition DCI 2K Sync Test (Encrypted), keyed with KDM for DCI 2K Sync Test (Encrypted).

2. Extract a signed [SMPTE-430-5] security log report from the Test Subject that includes the range of time during which the above step was carried out.

3. Using the procedures illustrated in Section 3.1.3, use the checksig program to verify the signature of the log report collected in step 2. Note: Depending on the order of the certificates contained in the log report, the dsig_cert.py program may need to be used to re-order the certificates for the checksig program.

4. Using the procedures illustrated in Section 3.1.3.1, extract the certificates in the signing chain of the log report collected in step 2. Note: This may be accomplished using the dsig_extract.py program.

5. Using the procedures illustrated in Annex C.2, use the dc-thumbprint program to calculate the thumbprint of the certificate that signed the log report collected in step 2. Record the value of the calculated thumbprint.

6. Intentionally break the marriage and remarry the companion SPB and the Imaging Device SPB (this may require support by the manufacturer).

7. Repeat steps 1 and 2 using the same composition and KDM as before. Failure to successfully play content or retrieve a log report after remarriage is cause to fail this test.

8. Repeat step 3 using the log report collected after remarriage. Failure to successfully verify the signature is cause to fail this test.

9. Repeat steps 4 and 5 using the log report collected after remarriage. Confirm that the certificate thumbprint calculated after remarriage matches the one from step 5. Mismatching public key thumbprints are cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.4.3.6.3, 9.5.1.2</td></tr><tr><td>Test Materials</td><td>DCI 2K Sync Test (Encrypted)</td></tr><tr><td></td><td>KDM for DCI 2K Sync Test (Encrypted)</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>15.2.1 Integrated IMB Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>15.3 Integrated IMB Confidence Test Sequence</td><td rowspan=1 colspan=1>ePass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>21.2.1 Integrated IMBO Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.5 Image Reproduction

# 7.5.1 Deleted Section

The section "Projector Overlay" was deleted. The section number is maintained here to preserve the numbering of subsequen sections.

# 7.5.2 Deleted Section

The section "Projector Lens" was deleted. The section number is maintained here to preserve the numbering of subsequen sections.

# 7.5.3 Imaging Device Pixel Count/Structure

# Objective

Verify that the sampling structure of the displayed picture array (pixel count of the imaging device) is equal that of the respective specified image containers (either $4 0 9 6 \times 2 1 6 0$ or $2 0 4 8 \times 1 0 8 0 _ { j }$ .

# Procedures

Note: Prior to performing the following procedures, it is necessary to verify that any electronic rescaling of the image is fully disabled. This may include turning off resizing, keystone correction, filters and/or other related processes.

For 2K Projectors: Display the test composition Pixel Structure Pattern S 2k Verify that the complete set of ${ 1 6 \times 1 6 }$ and $8 { \times } 8$ pixel blocks is displayed.

For 4K Projectors and Direct View Displays: Display the test pattern Pixel Structure Pattern S 4k. Verify that the complete set of ${ 1 6 \times 1 6 }$ pixel blocks is displayed.

Deviation from the expected image is cause to fail this test. The figures below illustrate the features of the pixel array test pattern. The $^ { 2 \mathsf { k } }$ pattern consists of a $1 2 8 \times 6 7$ grid of ${ 1 6 \times 1 6 }$ pixel blocks as illustrated in Figure 7.1. A single-pixel white border surrounds the pattern. Each ${ 1 6 \times 1 6 }$ block contains a horizontal and vertical location index encoded as a 8-bit binary ladder, with the MSb being at the top or left side of the vertical and horizontal ladders, respectively. The example below shows a block with index $X = 8 1$ , $Y = 3 7$ . The pixel at location 0,0 in the block is located at pixel $x = 1 2 9 6 = X ^ { \star } 1 6$ , $y = 5 9 2 = Y ^ { \star } 1 6$ on the screen. The bottom 8 pixels of the 2k pattern consist of similar, un-indexed $8 \times 8$ patterns as illustrated in Figure 7.2.

The $4 \mathsf { k }$ pattern consists of a $2 5 6 \times 1 3 5$ grid of $1 6 \times 1 6$ pixel arrays. A single-pixel white border surrounds the pattern.

Within each block, color-coded bands mark pixel positions. The bands may have North, South, East or West orientation (the example blocks have South orientation). Pixel positions are coded left to right (top to bottom for East and West orientations) with the following color sequence: brown, red, orange, yellow, green, blue, violet, gray.

Note: North, South, East and West orientations are provided in the test materials set to support investigation of anomalies.

![](images/b045c997d660b1689b103bd9156ae64da342410648174c0189683e4442af73c8.jpg)  
Figure 7.1: Pixel Structure 16 x 16 Array

![](images/ca01b2ab431e6955f02adc3a8dff45b593a84723a5efce3edde0270ef354e111.jpg)  
Figure 7.2: Pixel Structure $\mathbf { 8 \times 8 }$ Array

Warning: the patterns displayed during this test can cause vertigo in some people. People who are sensitive to such optical stimuli should not view the test material.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 8.2.2.6, 8.2.2.7</td></tr><tr><td>Test Materials</td><td>[DV-ADD]</td></tr><tr><td rowspan="5"></td><td>Pixel Structure Pattern N 2k</td></tr><tr><td>Pixel Structure Pattern S2k</td></tr><tr><td>Pixel Structure Pattern E2k Pixel Structure Pattern W 2k</td></tr><tr><td>Pixel Structure Pattern N4k</td></tr><tr><td>Pixel Structure Pattern S 4k</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1>Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>24.3 SDR Projector Confidence Test Sequence</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.3 HDR Direct View Display Confidence Test Sequence Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.3 SDR Direct View Display Confidence Test Sequence Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.3 HDR Projector Confidence Test Sequence</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.5.4 Deleted Section

The section "Projector Spatial Resolution and Frame Rate Conversion" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# 7.5.5 Deleted Section

The section "White Point Luminance and Uniformity" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# 7.5.6 Deleted Section

The section "White Point Chromaticity and Uniformity" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# 7.5.7 Deleted Section

The section "Sequential Contrast" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# 7.5.8 SDR Intra-frame Contrast

# Objective

Verify that the Imaging Device maintains white and black luminance when a non-uniform picture is presented.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Display the checkerboard test pattern Intra-Frame Contrast Sequence.

3. Measure $L _ { \mathsf { W L } }$ , LWR, $L _ { \mathrm { K L } }$ and $L _ { \mathsf { K R } }$ according to:

the checkerboard luminance & contrast $( n { \times } m )$ procedure at [ICDM IDMS], if the Test Subject is a Direct View Display; or the checkerboard contrast ratio procedure at [ICDM IDMS], if the Test Subject is a Projector; or

4. Verify that:

if the Test Subject is a Direct View Display, $L _ { \mathsf { W L } }$ and $L _ { \mathsf { W R } }$ are each equal to $4 8 . 0 \pm 3 . 5 \mathrm { c d } / \mathrm { m } ^ { 2 }$ , and $L _ { \mathrm { K L } }$ and $L _ { \mathsf { K R } }$ are each within the range [0.01, 0.024] $\mathtt { c d } / \mathsf { m } ^ { 2 }$ ; or   
if the Test Subject is a Projector, $L _ { \mathsf { W L } }$ and $L _ { \mathsf { W R } }$ are each equal to $4 8 . 0 \pm 3 . 5 \mathrm { c d } / \mathrm { m } ^ { 2 }$ , and $L _ { \mathrm { K L } }$ and $L _ { \mathsf { K R } }$ each do not exceed $0 . 5 2 { \mathrm { ~ c d } } / { \mathrm { m } } ^ { 2 }$ .

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-DCSS], 8.3.4.8</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td> Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Intra-Frame Contrast Sequence</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1>Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.5.9 Grayscale Tracking

# Objective

Using the black-to-white gray and the black-to-dark gray step-scale test patterns, verify that the entire step-scale appears neutral without any visible color non-uniformity or non-monotonic luminance steps in the test pattern.

# Procedures

Note: Prior to taking measurements, ensure that the test environment requirements detailed in Section 7.1 have been performed.

1. Power-down the Test Subject. Alternatively, the douser can be closed if the Test Subject is a Projector.

2. Use a Spectroradiometer to measure and record the Luminance of the ambient light reflected from the screen.

3. Power-up the Test Subject. Alternatively, the douser can be open if the Test Subject is a Projector.

4. Display no image or display black code values, and, using a Spectroradiometer, measure and record the Luminance of the light reflected from the screen.

5. Play back the DCP DCI White Steps (black-to-white gray step-scale test pattern).

6. For each of the ten steps of the pattern listed in Table A-2 of [SMPTE-431-2], measure and record the Output Luminance and Chromaticity Coordinates with a Spectroradiometer.

7. The entire step-scale should appear neutral without any visible color non-uniformity or non-monotonic luminance steps in the test pattern. Record the presence of any perceived deviation from a neutral scale.

8. Play back the DCP DCI Gray Steps (black-to-dark gray step-scale test pattern).

9. For each of the ten steps of the pattern listed in Table A-3 of [SMPTE-431-2], measure and record the Luminance and Chromaticity Coordinates with a Spectroradiometer.

10. The entire step-scale should appear neutral without any visible color non-uniformity or non-monotonic luminance steps in the test pattern. Record the presence of any perceived deviation from a neutral scale.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 8.3.4.9</td></tr><tr><td>Test Equipment</td><td>[SMPTE-431-2]</td></tr><tr><td>Test Materials</td><td>Spectroradiometer</td></tr><tr><td></td><td>DCI White Steps DCI Gray Steps</td></tr><tr><td></td><td></td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Data only</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Data only</td><td rowspan=1 colspan=1>Data only</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical ProceduresData only</td><td rowspan=1 colspan=1>Data only</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Data only</td><td rowspan=1 colspan=1>一</td></tr></table>

# 7.5.10 SDR Contouring

# Objective

Confirm the Imaging Device exhibits no visible contouring when presenting an SDR composition.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Play back SDR Dark Gray Scale and measure, using a a Spectroradiometer, the luminance $L _ { i }$ at the center of the screen of each full-screen gray patch.

3. Calculate the set of second approximate derivatives from the set of measurements $\{ L _ { i } \}$ according to the slope monotonicity of gray scale procedure at [ICDM IDMS].

4. Verify that all the second approximate derivatives are greater than 0.

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-DCSS], 8.3.3</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>SDR Dark Gray Scale</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>／</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.11 SDR Transfer Function

# Objective

Verify that the correct SDR transfer function is used by the imaging device.

# Procedures

Note: Prior to taking measurements, ensure that the setup and test environment requirements detailed in Section 7.1 have been performed.

1. Display 2K Full SDR Black and, using a Spectroradiometer, measure the output luminance to a precision of 1 mcd/m², and record the result as the screen black level.

2. Play back the DCP DCI White Steps.

3. For each of the ten steps of the pattern listed in Table A-2 of [SMPTE-431-2], measure the output luminance with a Spectroradiometer, subtract the screen black level obtained in step (1), and verify that the result is within the tolerance specified in Table 7.5.11(a).

4. Play back the DCP DCI Gray Steps.

5. For each of the ten steps of the pattern listed in Table A-3 of [SMPTE-431-2], measure the output luminance with a Spectroradiometer, subtract the screen black level obtained in step (1), and verify that the result is within the tolerance specified in Table 7.5.11(b).

Any verification that fails is cause to fail this test.

Table 7.5.11(a): Black-to-white gray step-scale test pattern nominal luminance values   

<table><tr><td rowspan=1 colspan=1>Step Number</td><td rowspan=1 colspan=1>Nominal Luminance abovethe Screen BlackLevel (cd/m2)</td><td rowspan=1 colspan=1>Tolerance</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>0.121</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>0.731</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>2.098</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>4.432</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.917</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>12.718</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>18.988</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>26.870</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>36.497</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>47.999</td><td rowspan=1 colspan=1>±3%</td></tr></table>

Table 7.5.11(b): Black-to-dark gray step-scale test pattern nominal luminance values   

<table><tr><td rowspan=1 colspan=1>Step Number</td><td rowspan=1 colspan=1>NominalLuminance abovethe Screen BlackLevel (cd/m2)</td><td rowspan=1 colspan=1>Tolerance</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>0.006</td><td rowspan=1 colspan=1>±20%</td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>0.038</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>0.111</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>0.234</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>0.418</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>0.670</td><td rowspan=1 colspan=1>±5%</td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>1.002</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>1.418</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>1.928</td><td rowspan=1 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>2.531</td><td rowspan=1 colspan=1>±3%</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-DCSS], 9.3.4.11</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>DCI White Steps</td></tr><tr><td></td><td>DCI Gray Steps</td></tr><tr><td></td><td>2K Full SDR Black</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical ProceduresPass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr></table>

# 7.5.12 SDR Color Accuracy

# Objective

Verify that all colors are accurately reproduced within the tolerances as specified in [SMPTE-431-2].

# Procedures

1. Setup the Imaging Device and test environment according to Section 7.1.

2. Using Color Accuracy Series, measure and record the luminance and chromaticity coordinates for the following patches, according to the full-screen arbitrary color $( R , G , B )$ procedure at [ICDM IDMS]:

Red-1   
Green-1   
Blue-1

3. Verify that the measured chromaticity coordinates for each of the patches are equal to the Red, Green and Blue reference values for Color Accuracy that are specified at [SMPTE-431-2], Table A.1, within review room tolerances.

4. Verify that the measured luminance for each of the patches is $\pm 3 \%$ of the Output Luminance values specified at [SMPTE-431-2], Table A.4.

Any measurement outside of specified tolerances is caused to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-DCSS], 8.3.3</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Color Accuracy Series</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>／</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>/</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.13 Projector Test Environment

# Objective

Record information about the test environment in which the reported projector measurements were made.

# Procedures

1. Record the distance between the front of the projector lens and the center of the screen. 2. Record the approximate vertical angle of incidence of the front of the projector lens to the center of the screen.

3. Record the approximate horizontal angle of incidence of the front of the projector lens to the center of the screen.

4. Record the distance between the front of the Spectroradiometer lens and the center of the screen.

5. Record the approximate vertical angle of incidence of the front of the Spectroradiometer lens to the center of the screen.

6. Record the approximate horizontal angle of incidence of the front of the Spectroradiometer lens to the center of the screen.

7. Record the size of the screen.

8. Record the approximate gain of the screen.

9. Record the perforation configuration of the screen.

10. With the projector lamp switched off (or doused), record the luminance at the center of the screen in units of Cd/m 2.

# Test Sequences

<table><tr><td rowspan=1 colspan=1>Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1> Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures Pass/Fail Al data recorded per the test procedure</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures Pass/Fail Al data recorded per the test procedure</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures Pass/Fail Alldata recorded per the test procedure</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures Pass/Fail Alldata recorded per the test procedure</td></tr></table>

# 7.5.14 HDR White Luminance and Chromaticity

# Objective

Verify that the luminance and chromaticity of HDR white are within tolerances:

at the center of the Imaging Device; and

at the edges of the Imaging Device.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed. For the remainder of this test procedure, the Spectroradiometer shall be positioned as specified at Section 7.1.1, disregarding positioning recommendations made at [ICDM IDMS].

2. Display the white frame of HDR Sequential Contrast and Uniformity Sequence.

3. Measure the luminance and chromaticity coordinates according to the full-screen arbitrary color (R, G, B) procedure at [ICDM IDMS].

4. Verify that the measured luminance and chromaticity coordinates are within the center luminance and center chromaticity tolerances, respectively, specified for specified at Table 7.5.14(a) for the Test Subject. Any measurement outside of the specified tolerances is caused to fail this test.

5. Measure the luminance nonuniformity $\mathcal { N }$ and maximum chromaticity difference Δu′v′ according to the sampled vantage-point uniformity procedure at [ICDM IDMS].

6. Verify that $\mathcal { N }$ and Δu′v′ do not exceed their respective maximum values specified at Table 7.5.14(b) for the Test Subject.

Any verification that fails is cause to fail this test.

Table 7.5.14(a): HDR White (Peak)   

<table><tr><td rowspan=2 colspan=1> Parameter</td><td rowspan=1 colspan=2> Test Subject</td></tr><tr><td rowspan=1 colspan=1>Projector[</td><td rowspan=1 colspan=1>Direct View Display</td></tr><tr><td rowspan=1 colspan=1>Center luminance (cd/m2)</td><td rowspan=1 colspan=1>299.6± 18</td><td rowspan=1 colspan=1>299.6 ±9</td></tr><tr><td rowspan=1 colspan=1>Center chrominance (x,y) (0.3127± 0.002,0.3290± 0.002)</td><td rowspan=1 colspan=2>Center chrominance (x,y) (0.3127± 0.002,0.3290± 0.002)</td></tr></table>

Table 7.5.14(b): HDR White (Angular Nonuniformity)   

<table><tr><td rowspan=2 colspan=1> Parameter</td><td rowspan=1 colspan=2>Test Subject</td></tr><tr><td rowspan=1 colspan=1>Projector</td><td rowspan=1 colspan=1>Direct View Display</td></tr><tr><td rowspan=1 colspan=1>Maximum N</td><td rowspan=1 colspan=1>15%</td><td rowspan=1 colspan=1>6%</td></tr><tr><td rowspan=1 colspan=1>Maximum △u&#x27;v</td><td rowspan=1 colspan=2>0.0182</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-HDR]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>HDR Sequential Contrast and Uniformity Sequence</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.15 SDR White Luminance and Chromaticity

# Objective

Verify that the luminance and chromaticity of SDR white are within tolerances:

at the center of the Imaging Device; and

at the edges of the Imaging Device.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed. For the remainder of this test procedure, the Spectroradiometer shall be positioned as specified at Section 7.1.1, disregarding positioning recommendations made at [ICDM IDMS].

2. Display the white frame of Sequential Contrast and Uniformity Sequence.

3. Measure the luminance and chromaticity coordinates according to the full-screen arbitrary color $( R , G , B )$ procedure at [ICDM IDMS].

4. Verify that the measured luminance and chromaticity coordinates are within the center luminance and center chromaticity tolerances, respectively, specified for specified at Table 7.5.15(a) for the Test Subject. Any measurement outside of the specified tolerances is caused to fail this test.

5. Measure the luminance nonuniformity $\mathcal { N }$ and maximum chromaticity difference Δu′v′ according to the sampled vantage-point uniformity procedure at [ICDM IDMS].

6. Verify that $\mathcal { N }$ and Δu′v′ do not exceed their respective maximum values specified at Table 7.5.15(b) for the Test Subject.

Any verification that fails is cause to fail this test.

Table 7.5.15(a): SDR White (Peak)   

<table><tr><td rowspan=2 colspan=1> Parameter</td><td rowspan=1 colspan=1> Test Subject</td></tr><tr><td rowspan=1 colspan=1>Direct View Display</td></tr><tr><td rowspan=1 colspan=1>Center luminance (cd/m2)</td><td rowspan=1 colspan=1>48.0± 3.5</td></tr><tr><td rowspan=1 colspan=1>Center chrominance (x,y)(0.314 ± 0.002,0.351±0.002)</td><td rowspan=1 colspan=1>Center chrominance (x,y)(0.314 ± 0.002,0.351±0.002)</td></tr></table>

Table 7.5.15(b): SDR White (Angular Nonuniformity)   

<table><tr><td rowspan=2 colspan=1>Parameter</td><td rowspan=1 colspan=2>Test Subject</td></tr><tr><td rowspan=1 colspan=1>Projector</td><td rowspan=1 colspan=1>Direct View Display</td></tr><tr><td rowspan=1 colspan=1>Maximum N</td><td rowspan=1 colspan=1>20%</td><td rowspan=1 colspan=1>6%</td></tr><tr><td rowspan=1 colspan=1>Maximum △u&#x27;v</td><td rowspan=1 colspan=2>0.0171</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td></td><td>[DCI-DCSS], 8.3.4.3, 8.3.4.4</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.16 HDR Color Luminance and Chromaticity

# Objective

Confirm that HDR color reproduction, as measured at the center of the Imaging Device, is within tolerances.

# Procedures

1. Setup the Imaging Device and test environment according to Section 7.1.

2. Using HDR Color Accuracy Series, measure and record the luminance and chromaticity coordinates for the following Patch Code Values, according to the full-screen arbitrary color (R, G, B) procedure at [ICDM IDMS]:

Red-1   
Green-1   
Blue-1

3. Verify that the measured chromaticity coordinates for Red-1, Green-1 and Blue-1 are equal to the reference values for Color Accuracy that are specified at [DCI-HDR], within the review room tolerances corresponding to the Test Subject.

4. Verify that the measured luminance for Red-1, Green-1 and Blue-1 are within the tolerances specified at Table 7.5.31.

Any measurement outside of specified tolerances is caused to fail this test.

Table 7.5.16: Target HDR color luminances and chromaticities   

<table><tr><td rowspan=2 colspan=1> Patch</td><td rowspan=2 colspan=1>Nominal values (cd/m2)</td><td rowspan=1 colspan=2>Tolerances</td></tr><tr><td rowspan=1 colspan=1>Projector</td><td rowspan=1 colspan=1>Direct View Display</td></tr><tr><td rowspan=1 colspan=1>Red-1</td><td rowspan=1 colspan=1>68.13</td><td rowspan=3 colspan=1>±6%</td><td rowspan=3 colspan=1>±3%</td></tr><tr><td rowspan=1 colspan=1>Green-1</td><td rowspan=1 colspan=1>207.35</td></tr><tr><td rowspan=1 colspan=1>Blue-1</td><td rowspan=1 colspan=1>23.86</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-HDR]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>HDR Color Accuracy Series</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1> Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>sPass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.17 HDR Minimum Active Black Level

# Objective

Confirm that the minimum active black level as measured in the center of the Imaging Device is within tolerances.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Display the black frame of HDR Sequential Contrast and Uniformity Sequence.

3. Measure the luminance according to the full-screen black procedure at [ICDM IDMS].

4. Verify that each measured luminance is equal to the nominal value for Minimum Active Black Level specified at [DCI-HDR], within the review room tolerances corresponding to the Test Subject. Any measurement outside of the specified tolerances is caused to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td>[DCI-HDR]</td><td></td></tr><tr><td></td><td></td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.18 SDR Inactive Black Level (Direct View Display)

# Objective

1. Verify that pixels outside the decoded image area are not emitting any light.

2. Verify that pixels outside the area specified by the MainPictureActiveArea item of the CPL metadata are not emitting any light.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. For each of the following test materials, display the material and verify by visual inspection that: (a) registration marks are visible and (b) pixels outside the rectangular area delineated by the registration marks are not emitting any light:

2K Full SDR Black with Marks   
2K Scope SDR Black with Marks   
2K Flat SDR Black with Marks   
4K Full SDR Black with Marks   
4K Scope SDR Black with Marks   
4K Flat SDR Black with Marks

Any verification that fails is cause to fail this test.

3. For each of the following test materials, display the material and verify by visual inspection that: (a) registration marks are visible and (b) no red pixels are visible:

2K Scope SDR Black with Active Area   
2K Flat SDR Black with Active Area   
4K Full SDR Black with Active Area   
4K Scope SDR Black with Active Area   
4K Flat SDR Black with Active Area

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DV-ADD]</td></tr><tr><td>Test Materials</td><td>2K Full SDR Black with Marks</td></tr><tr><td></td><td>2K Scope SDR Black with Marks</td></tr><tr><td></td><td>2KFlat SDR Black with Marks</td></tr><tr><td></td><td>4KFull SDR BlackwithMarks</td></tr><tr><td></td><td>4KScopeSDR Black withMarks</td></tr><tr><td></td><td>4KFlatSDR Black withMarks</td></tr><tr><td></td><td>2K Full SDR Black with Active Area</td></tr><tr><td></td><td>2KScopeSDR Blackwith Active Area</td></tr><tr><td></td><td>2KFlat SDR Black with Active Area</td></tr><tr><td></td><td>4K Full SDR Black with Active Area</td></tr><tr><td></td><td>4KScopeSDRBlackwith Active Area</td></tr><tr><td></td><td>4K Flat SDR Black with Active Area</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical ProceduresF</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.19 Horizontal and Vertical Full Screen Off-Axis Uniformity (Direct View Display)

# Objective

Verify the full screen off-axis uniformity performance of the Imaging Device.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Display the white frame from Sequential Contrast and Uniformity Sequence and, for each of the angular positions specified in Table 7.1:

measure the luminance change ratio according to the viewing-angle luminance change ratio procedure at [ICDM IDMS].   
measure the viewing-angle color variation according to the viewing-angle color variation procedure at [ICDM IDMS].

3. Verify that each of the measured luminance change ratio and viewing-angle color variation satisfy the tolerance specified at Table 7.1.

Any verification that fails is cause to fail this test.

Table 7.1: Measurement positions and tolerances for horizontal and vertical full screen off-axis performance measurements   

<table><tr><td rowspan=1 colspan=1> Angular positions</td><td rowspan=1 colspan=1> Luminance change ratio tolerance</td><td rowspan=1 colspan=1>Viewing-angle color variation tolerance</td></tr><tr><td rowspan=1 colspan=1>+10° vertically（up)</td><td rowspan=2 colspan=1>Full Screen Vertical Off-Axis LuminanceUniformity at [DV-ADD]</td><td rowspan=2 colspan=1>Full Screen Vertical Off-Axis WhiteChromaticity Uniformity at [DV-ADD]</td></tr><tr><td rowspan=1 colspan=1>-35° vertically(down)</td></tr><tr><td rowspan=1 colspan=1>-60° horizontally(left)</td><td rowspan=2 colspan=1>Full Screen Horizontal Off-Axis LuminanceUniformity at [DV-ADD]</td><td rowspan=2 colspan=1>Full Screen Horizontal Off-Axis WhiteChromaticity Uniformity at [DV-ADD]</td></tr><tr><td rowspan=1 colspan=1>+60° horizontally(right)</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Sequential Contrast and Uniformity Sequence</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.20 Stereoscopic Extinction Ratio

# Objective

Confirm that, when reproducing stereoscopic presentations, the Imaging Device achieves the required minimum extinction ratio.

# Procedures

This test procedure only applies to a Test Subject that supports stereoscopic presentations.

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.   
2. Using Stereoscopic SDR Contrast Test Patterns, measure the extinction ratios χsys?? and χsysℜ according to the stereoscopic extinction ratio & crosstalk procedure at [ICDM IDMS].   
3. Verify that $\chi _ { s y s \mathcal { L } }$ and $\chi _ { s y s \mathcal { R } }$ each equals or exceeds the Tolerance for the Stereoscopic Extinction Ratio specified at [DV-ADD].

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Stereoscopic SDR Contrast Test Patterns</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical ProceduresPass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.21 SDR Stereoscopic Peak White Luminance

# Objective

Confirm that, when reproducing stereoscopic presentations, the Imaging Device achieves the required SDR peak white luminance.

# Procedures

This test procedure only applies to a Test Subject that supports SDR stereoscopic presentations.

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.   
2. Using Stereoscopic SDR Contrast Test Patterns, measure the average stereo luminance $L _ { a v e }$ according to the stereoscopic luminance & luminance difference procedure at [ICDM IDMS].   
3. Verify that $L _ { a v e }$ is within the tolerances for the Stereoscopic Peak White Luminance specified at [DVADD].

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td>Test Equipment</td><td>[DV-ADD]</td></tr><tr><td>Test Materials</td><td>Spectroradiometer Stereoscopic SDR Contrast Test Patterns</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.22 Surface Reflectivity (Direct View Display)

# Objective

Verify that the diffuse surface reflectivity of the imaging device is within limits

Verify that the specular surface reflectivity of the imaging device is within limits

# Procedures

# Note:

If the measurement device or procedure reports the diffuse reflectivity at different optical wavelengths, the weighted average using the CIE Y Color Matching Function (see [CIE-15-2004] shall be used to combine different values at different wavelengths into a single diffuse reflectivity value that is photometrically weighted.

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. With the Imaging Device turned off, measure the reflectance with specular excluded, $\rho _ { \theta / d e }$ , according to the sampling-sphere implementation (specular excluded) procedure at [ICDM IDMS].

3. Verify that $\rho _ { \theta / d e }$ is less than or equal to the Diffuse Reflectivity specified at [DV-ADD].

4. With the Imaging Device turned off, measure the reflectance, $\rho _ { 8 / d i } ,$ according to the sampling-sphere implementation procedure at [ICDM IDMS].

5. Verify that $\rho _ { 8 / d i } - \rho _ { \theta / d e }$ is less than or equal to the Spectral Reflectivity specified at [DV-ADD].

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.23 Vignetting (Direct View Display)

# Objective

Verify that the imaging device does not exhbit vignetting.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed. 2. Using the full-frame white target from Sequential Contrast and Uniformity Sequence, measure the nonuniformity $\mathcal { N }$ according to the sampled uniformity procedure at [ICDM IDMS]. 3. Verify that $\mathcal { N }$ meets the tolerance for the Full-Screen Sampled Nonuniformity specified at [DV-ADD].

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Sequential Contrast and Uniformity Sequence</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.24 SDR Stereoscopic Minimum Active Black Level

Objective

Confirm that the stereoscopic display system achieves the required SDR minimum active black level.

# Procedures

This test procedure only applies to a Test Subject that supports SDR stereoscopic presentations.

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Using Stereoscopic SDR Contrast Test Patterns, measure the left eye black level, $L _ { \mathcal { L } K K }$ , and the right eye black level, $R _ { \mathcal { L } K K }$ , according to the stereoscopic contrast ratio procedure at [ICDM IDMS].

3. Verify that both $L _ { \mathcal { L } K K }$ and $R _ { \mathcal { L } K K }$ are within the limits for the Stereoscopic Minimum Active Black Level specified at [DV-ADD].

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Stereoscopic SDR Contrast Test Patterns</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.25 Image Upscaling Artifacts

# Objective

Confirm that the imaging system does not exhibit upscaling artifacts.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.   
2. Display 4K Scaling Test Patterns.   
3. Verify that, when viewed from a distance of one screen height from the imaging device, the displayed image appear as illustrated at Figure A.2.254 and is free of artifacts, including spatial discontinuity artifacts (jaggies), ringing artifacts and aliasing artifacts, as illustrated in Figure 7.25(a), Figure 7.25(b) and Figure 7.25(c).

Any verification that fails is cause to fail this test.

![](images/98733c92cdb07dbeddf3b32115d29e4c0b8b5c34a59cc012805adeacb417f48e.jpg)  
Figure 7.25(a): Sample aliasing artifacts

![](images/8ff440e5916c012dd8ebbb204976022a3dee2e0c7f7a3b53b5b5c936cd2e61e0.jpg)  
Figure 7.25(b): Sample ringing artifacts

![](images/f4e70bd755d1b9f8e2d42f0a2029be77272014c045a4a5e9dcf09b0911861b93.jpg)  
Figure 7.25(c): Sample spatial discontinuities (jaggies)

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DV-ADD]</td></tr><tr><td>Test Materials</td><td>4K Scaling Test Patterns</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1>Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.26 SDR Stereoscopic Color Accuracy

# Objective

Verify that, when reproducing a stereoscopic presentation, the Imaging Device reproduces colors within the tolerances specified in [SMPTE-431-2].

# Procedures

1. Setup the Imaging Device and test environment according to Section 7.1.

2. Using Steroscopic Color Accuracy Series, measure and record the luminance and chromaticity coordinates for the following patches, according to the full-screen arbitrary color $( R , G , B )$ procedure at [ICDM IDMS]:

Red-1   
Green-1   
Blue-1

3. Verify that the measured chromaticity coordinates for each of the patches are equal to the Red, Green and Blue reference values for Color Accuracy that are specified at [SMPTE-431-2], Table A.1, within review room tolerances.

4. Verify that the measured luminance for each of the patches is $\pm 3 \%$ of the Output Luminance values specified at [SMPTE-431-2], Table A.4.

Any measurement outside of specified tolerances is caused to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-DCSS], 8.3.3</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>Steroscopic Color Accuracy Series</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.27 Sub-pixel Spatial Coincidence (Direct View Display)

# Objective

Verify that the spatial arrangement of the color primary elements do not introduce objectionable geometric anomalies such as fringing artifacts.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Using 4K White Lines, verify that no color fringing artifacts are visible. Figure 7.5.27 illustrates one example of fringing artifacts where a nominally vertical white line appears, as seen from the normal seating area, as disjointed line segments of varying colors.

Any verification that fails is cause to fail this test.

![](images/2b5784998147177f0c8e1fba76e4015946e2bd19a0fe2fe85f16c3bc70644928.jpg)  
Figure 7.5.27: Illustration of a fringing artifact (not to scale)

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DV-ADD]</td></tr><tr><td>Test Materials</td><td>4K White Lines</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1>Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>sPass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.5.28 HDR Transfer Function

# Objective

Verify that the correct HDR transfer function is used by the Imaging Device.

# Procedures

Note: Prior to taking measurements, ensure that the setup and test environment requirements detailed in Section 7.1 have been performed.

1. Play back the DCP DCI HDR White Steps.

2. For each of the ten steps of Table 3 at [DCI-HDR], measure the output luminance with a Spectroradiometer and verify that the result is within the tolerance specified in Table 7.5.28(a).

3. Play back the DCP DCI HDR Gray Steps.

4. For each of the ten steps of Table 4 at [DCI-HDR], measure the output luminance with a Spectroradiometer and verify that the result is within the tolerance specified in Table 7.5.28(b).

Any verification that fails is cause to fail this test.

Table 7.5.28(a): HDR black-to-white gray step-scale test pattern nominal luminance values   

<table><tr><td rowspan=2 colspan=1>Step umber</td><td rowspan=2 colspan=1>Step Number Nominal Luminance (cd/m²)</td><td rowspan=1 colspan=2>Tolerance</td></tr><tr><td rowspan=1 colspan=1>Direct View Display</td><td rowspan=1 colspan=1>Projector</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>0.50</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>1.00</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>2.00</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>5.00</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>9.99</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>20.00</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>50.01</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>100.10</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>200.21</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>299.64</td><td rowspan=1 colspan=1>±3%</td><td rowspan=1 colspan=1>±6%</td></tr></table>

Table 7.5.28(b): HDR black-to-dark gray step-scale test pattern nominal luminance values   

<table><tr><td rowspan=2 colspan=1>Step umber</td><td rowspan=2 colspan=1> Step Number Nominal Luminance (cd/m2)</td><td rowspan=1 colspan=2>Tolerance</td></tr><tr><td rowspan=1 colspan=1>Direct View Display</td><td rowspan=1 colspan=1>Projector</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>0.0050</td><td rowspan=1 colspan=1>±20%</td><td rowspan=1 colspan=1>±20%</td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>0.0075</td><td rowspan=1 colspan=1>±20%</td><td rowspan=1 colspan=1>±20%</td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>0.0100</td><td rowspan=1 colspan=1>±20%</td><td rowspan=1 colspan=1>±20%</td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>0.0151</td><td rowspan=1 colspan=1>±20%</td><td rowspan=1 colspan=1>±20%</td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>0.0202</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>0.0352</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>0.0501</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>0.0752</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>0.0998</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>0.1997</td><td rowspan=1 colspan=1>±5%</td><td rowspan=1 colspan=1>±12%</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DCI-HDR]</td></tr><tr><td></td><td>[DV-ADD]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>DCI HDR Gray Steps</td></tr><tr><td></td><td>DCI HDR White Steps</td></tr><tr><td></td><td>HDR Sequential Contrast and Uniformity Sequence</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures1</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.29 SDR Minimum Active Black Level

# Objective

Verify that the Imaging Device achieves the required minimum luminance when presented with an SDR full black signal.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. For each of the following test materials, display the material and measure the luminance according to the full-screen black procedure at [ICDM IDMS]:

2K Full SDR Black  
2K Scope SDR Black  
2K Flat SDR Black  
4K Full SDR Black  
4K Scope SDR Black  
4K Flat SDR Black

3. Verify that the measured luminance is within the range:

[0.01, 0.024] cd/m², if the Test Subject is a Direct View Display; or [0.01, 0.032] cd/m², if the Test Subject is a Projector.

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>2KFulISDRBlack</td></tr><tr><td>4K Scope SDR Black 4KFlat SDR Black</td><td>2K Scope SDR Black 2K Flat SDR Black 4K Full SDR Black</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>一</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.30 Direct View Display Test Environment

# Objective

Record information about the test environment in which the reported Direct View Display measurements were made.

# Procedures

1. Setup the test environment as specified in Section 7.1.   
2. Record the height and width of the Direct View Display in units of meters.   
3. Record the number of modules that comprise the Direct View Display, in both the horizontal and vertical directions.   
4. With the Direct View Display switched off, record, in units of $\mathsf { c d } / \mathsf { m } ^ { 2 }$ , the luminance at the center of the Direct View Display.

Failure to record any data is cause to fail this test.

# Supporting Materials

<table><tr><td>Test Equipment Spectroradiometer</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1> Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail All data recorded per the test procedure</td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail All data recorded per the test procedure</td></tr></table>

# 7.5.31 Automatic SDR/HDR mode switching

# Objective

Verify that the projection system automatically switches between SDR and HDR presentation.

# Procedures

1. Setup the test environment as specified in Section 7.1.

2. Build a show playlist out of the following compositions, in the order listed and without any automation or configuration related to HDR and SDR presentation:

a. SDR Detection b. HDR Detection c. SDR Detection

3. Play back the show, and measure and record the luminance for each of the SDR dark, SDR light, HDR dark and HDR light patches according to the full-screen arbitrary color $( R , \ G , \ B )$ procedure at [ICDM IDMS].

4. Build a show playlist out of the following compositions, in the order listed and without any automation or configuration related to HDR and SDR presentation:

a. HDR Detection b. SDR Detection c. HDR Detection

5. Play back the show, and measure and record the luminance for each of the SDR dark, SDR light, HDR dark and HDR light patches according to the full-screen arbitrary color $( R , \ G , \ B )$ procedure at [ICDM IDMS].

6. Verify that, in all cases, the measured luminance for the patches are within the allowable luminance ranges specified at Table 7.5.31.

Any verification that fails is cause to fail this test.

Table 7.5.31: Target SDR and HDR luminances   

<table><tr><td rowspan=2 colspan=1> Patch</td><td rowspan=1 colspan=2>Allowable luminance range (cd/m²)</td></tr><tr><td rowspan=1 colspan=1> Projector</td><td rowspan=1 colspan=1> Direct View Display</td></tr><tr><td rowspan=1 colspan=1>SDR dark</td><td rowspan=1 colspan=1>[0.01,0.032]</td><td rowspan=1 colspan=1>[0.01,0.024]</td></tr><tr><td rowspan=1 colspan=1>SDR light</td><td rowspan=1 colspan=2>15.20 ± 0.46</td></tr><tr><td rowspan=1 colspan=1>HDR dark</td><td rowspan=1 colspan=2>0.005 ± 0.001</td></tr><tr><td rowspan=1 colspan=1>HDR light</td><td rowspan=1 colspan=1>299.6 ± 18</td><td rowspan=1 colspan=1>299.6±9</td></tr></table>

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-HDR]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>SDR Detection</td></tr><tr><td></td><td>HDR Detection</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.32 HDR Inactive Black Level (Direct View Display)

# Objective

1. Verify that pixels outside the decoded image area are not emitting any light.

2. Verify that pixels outside the area specified by the MainPictureActiveArea item of the CPL metadata are not emitting any light.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. For each of the following test materials, display the material and verify by visual inspection that: (a) registration marks are visible and (b) pixels outside the rectangular area delineated by the registration marks are not emitting any light:

2K Full HDR Black with Marks   
2K Scope HDR Black with Marks   
2K Flat HDR Black with Marks   
4K Full HDR Black with Marks   
4K Scope HDR Black with Marks   
4K Flat HDR Black with Marks

Any verification that fails is cause to fail this test.

3. For each of the following test materials, display the material and verify by visual inspection that: (a) registration marks are visible, (b) pixels other than those pixels belonging to the registration marks are not emitting any light and (c) no red pixels are visible:

2K Full HDR Black with Active Area   
2K Scope HDR Black with Active Area   
2K Flat HDR Black with Active Area   
4K Full HDR Black with Active Area   
4K Scope HDR Black with Active Area   
4K Flat HDR Black with Active Area

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[DV-ADD]</td></tr><tr><td></td><td>[DCI-HDR]</td></tr><tr><td>Test Materials</td><td>2KFull HDR Black with Marks</td></tr><tr><td></td><td>2K Scope HDR Black with Marks</td></tr><tr><td></td><td>2KFlat HDR Black with Marks</td></tr><tr><td></td><td>4KFull HDRBlackwithMarks</td></tr><tr><td></td><td>4K Scope HDR Black with Marks</td></tr><tr><td></td><td>4KFlat HDRBlack with Marks</td></tr><tr><td></td><td>2K Full HDR Black with Active Area</td></tr><tr><td></td><td>2K Scope HDR Black with Active Area</td></tr><tr><td></td><td>2K Flat HDR Black with Active Area</td></tr><tr><td></td><td>4K Full HDR Black with Active Area</td></tr><tr><td></td><td>4KScope HDR Black with Active Area</td></tr><tr><td></td><td>4K Flat HDR Black with Active Area</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1>Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.33 Image Frame Rates

# Objective

Verify that the Imaging Device displays every frame at all required frame rates.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Play each of the following compositions in turn:

a. If the Test Subject is an SDR Projector: 2K 2D 24 FPS Test 2K 2D 48 FPS Test 4K 2D 24 FPS Test   
b. For all other Test Subjects: 2K 2D 24 FPS Test 2K 2D 48 FPS Test 2K 2D 60 FPS Test 2K 2D 96 FPS Test 2K 2D 120 FPS Test 4K 2D 24 FPS Test 4K 2D 48 FPS Test 4K 2D 60 FPS Test

3. For each of the compositions played above, and as illustrated at Figure 7.5.33, verify that: the movement of the pendulum is smooth and uninterrupted;

the timecode is displayed at the bottom of the frame matches the one displayed at the top right of the frame;   
for 4K compositions, the word 4K is displayed at the center of the image;   
the words "left" and "right" are heard through the Sound System as the pendulum reaches the extreme left and right of its trajectory, respectively; and   
the following words appear: 1, 2, 3, 4, 5, even and odd.

Any verification that fails is cause to fail this test.

![](images/0ef2988a5f9cd85adc2e173651cecb99e6da49d838a4822e5551aa90c0db1364.jpg)  
Figure 7.5.33: Location of the elements displayed when testing image frame rates (not to scale)

Supporting Materials

<table><tr><td>Reference Documents</td><td>[DV-ADD]</td></tr><tr><td></td><td>[DCI-DCSS], 3.2.1</td></tr><tr><td>Test Equipment</td><td>Sound System</td></tr><tr><td>Test Materials</td><td>2K 2D 24 FPS Test</td></tr><tr><td></td><td>2K 2D 48 FPS Test</td></tr><tr><td></td><td>2K 2D 60 FPS Test</td></tr><tr><td></td><td>2K 2D 96 FPS Test</td></tr><tr><td></td><td>2K 2D 120 FPS Test</td></tr><tr><td></td><td>4K 2D 24 FPS Test</td></tr><tr><td></td><td>4K 2D 48 FPS Test</td></tr><tr><td></td><td>4K 2D 60 FPS TeSt</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>24.2.1 SDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr></table>

# 7.5.34 Stereoscopic Image Frame Rates

# Objective

Verify that, for stereoscopic presentations, the Imaging Device displays every frame at all required frame rates.

# Procedures

This test procedure only applies to Test Subject that support stereoscopic presentations.

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.

2. Play each of the following compositions in turn:

2K Stereoscopic 24 FPS Test   
2K Stereoscopic 48 FPS Test   
2K Stereoscopic 60 FPS Test

3. For each of the compositions played above, and as illustrated at Figure 7.5.34, verify that:

the movement of the pendulum is smooth and uninterrupted;   
the pendulum pops out of the screen;   
the timecode is displayed at the bottom of the frame matches the one displayed at the top right of the frame;   
the words "left" and "right" are heard through the Sound System as the pendulum reaches the extreme left and right of its trajectory, respectively;   
the words left and right appear only in the left and right eye, respectively; and   
the following words appear: 1, 2, 3, 4, 5, even and odd.

Any verification that fails is cause to fail this test.

![](images/59826a7d66ab7214c9417d9fa2a06235707a5ce030fef4c0e1214af652edbc12.jpg)  
Figure 7.5.34: Location of the elements displayed when testing stereoscopic image frame rates (not to scale)

Supporting Materials

![](images/42c471c1282a4adb82a128e1cbb3edb14c9b7775f86b14004d3b7759904a4876.jpg)

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27.2.1 SDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>

# 7.5.35 HDR Contouring

# Objective

Confirm the Imaging Device exhibits no visible contouring when presenting an HDR composition.

# Procedures

1. Ensure that the Imaging Device setup and test environment requirements detailed in Section 7.1 have been performed.   
2. Play back HDR Dark Gray Scale and measure, using a a Spectroradiometer, the luminance $L _ { i }$ at the center of the screen of each full-screen gray patch.

3. Calculate the set of second approximate derivatives from the set of measurements $\{ L _ { i } \}$ according to the slope monotonicity of gray scale procedure at [ICDM IDMS].

4. Verify that all the second approximate derivatives are greater than 0.

Any verification that fails is cause to fail this test.

# Supporting Materials

<table><tr><td>Reference Documents</td><td>[ICDM IDMS]</td></tr><tr><td></td><td>[DCI-DCSS], 8.3.3</td></tr><tr><td></td><td>[SMPTE-431-2]</td></tr><tr><td></td><td>[DCI-HDR]</td></tr><tr><td>Test Equipment</td><td>Spectroradiometer</td></tr><tr><td>Test Materials</td><td>HDR Dark Gray Scale</td></tr></table>

# Test Sequences

<table><tr><td rowspan=1 colspan=1> Test Sequence</td><td rowspan=1 colspan=1>Type</td><td rowspan=1 colspan=1>Measured Data</td></tr><tr><td rowspan=1 colspan=1>26.2.1 HDR Direct View Display Practical Procedures Pass/Fail</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr><tr><td rowspan=1 colspan=1>28.2.1 HDR Projector Practical Procedures</td><td rowspan=1 colspan=1>Pass/Fail</td><td rowspan=1 colspan=1>1</td></tr></table>


# PART III TEST SEQUENCES

This Part specifies the process by which a d-cinema device becomes and remains DCI-compliant.

A d-cinema device that can become DCI-compliant is a certificated device. Several kinds of certificated devices are defined, each the subject of its own Chapter in this Part.

To become a DCI-compliant, a certificated device is subjected to a Consolidated Test Sequence specific to its type. A Consolidated Test Sequence consists of a set of Practical Procedures and Design Reviews selected from Part I and Part II, respectively. If the certificated device passes the Consolidated Test Sequence, it becomes a DCI-compliant certificated device.

To remain DCI-compliant, a DCI-compliant certificated device that undergoes modifications may require retesting, as specified in Section 11.2.4. Software or firmware modifications can, for example, trigger a Confidence Retest. A Confidence Retest involves passing a Confidence Test Sequence specific to the of the device, as detailed in Section 11.2.4.4. Each Confidence Test Sequence consists of a relatively small number of tests, and ensures that software/firmware modifications have not impacted critical security functionality.

The collection of test results gathered by subjecting a certificated device to a Consolidated or Confidence Test Sequence is called a Test Session, and the details of the Test Session are captured in a Test Report (see Table 11.1).

A Test Subject is a certificated device being subjected to a specific test.


# Chapter 24 SDR Projector Test Sequences

# 24.1 Overview

The Test Subject of the Test Sequence defined in this chapter is a Projector that supports SDR presentations. The configuration and architecture of the system may vary, but the Test Sequence requires that the system consists of at least a light processing system including electronic and optical components (Projector), an IMB or IMBO (containing a Security Manager, Media Decryptor, etc.), and an SMS. For the purpose of this test, the Test Operator may substitute a Theater Management Server/System (TMS) for the SMS if it implements the required functionality. Wherever a test procedure refers to an SMS, the equivalent TMS may also be used.

For the purpose of compliance testing as defined in this Chapter, the spatial resolution of the projector shall be no less tha that of the Media Block.

Before performing a Test Sequence provided below, the Test Operator should read and understand the documentation provided with the Test Subject. If adequate documentation is not available, a Test Subject Representative should be available to provide assistance during the test session.

# 24.2 SDR Projector Consolidated Test Sequence

# 24.2.1 SDR Projector Practical Procedures

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>6.7.4 Default Timed Text Font</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.2.1 Projector and Direct View Display PhysicalProtection</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>7.2.6 SPB2 Secure Silicon Field Replacement</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>7.2.7 Systems without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>7.2.8 Electronic Marriage Break Key Retaining</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>11</td><td rowspan=1 colspan=1>7.5.8 SDR Intra-frame Contrast</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>12</td><td rowspan=1 colspan=1>7.5.9 Grayscale Tracking</td><td rowspan=1 colspan=2>(data only)</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>13</td><td rowspan=1 colspan=1>7.5.10 SDR Contouring</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>14</td><td rowspan=1 colspan=1>7.5.11 SDR Transfer Function</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>15</td><td rowspan=1 colspan=1>7.5.12 SDR Color Accuracy</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>16</td><td rowspan=1 colspan=1>7.5.13 Projector Test Environment</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>17</td><td rowspan=1 colspan=1>7.5.15 SDR White Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>18</td><td rowspan=1 colspan=1>7.5.29 SDR Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>19</td><td rowspan=1 colspan=1>7.5.33 Image Frame Rates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 24.2.2 SDR Projector Design Reviews

For each requirement listed in the table below, prove that the system design meets the requirement by identifying the software or hardware mechanism that implements the requirement and analyzing the design to assure that the requirement has been met, subject to stipulated conditions. If a proof cannot be made, the design will be considered non-compliant with regard to the requirement. To perform this analysis the examiner will require access to exhibit documents (system design artifacts) such as schematic diagrams, implementation source code, unit test source code, state diagrams, design notes, etc. See Chapter 9 and Chapter 10 for more information.

For each requirement, the examiner must record the identifiers of the exhibits consulted in proving the requirement, including applicable version identifiers, section or sheet numbers, grid identifiers, etc., and the examiner must record Pass or Fail to indicate whether or not the requirement has been met by the design. The examiner may also record any notes relevant to interpreting the exhibits and to the determination of the compliance status

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1>Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1>Exhibit Identifiers</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>10.4.1 Theater System Reliability</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>10.4.18 Imaging Device Secure Silicon Device</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>10.4.19 Access to Imaging Device Image Signals</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>10.4.20 Systems with Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>10.4.21 Systems Without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>10.4.25 Repair and Renewal of SPBs</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>10.4.26 SPB2 Protected Devices</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>10.4.78 Imaging Device SPB Log ReportingRequirements</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 24.3 SDR Projector Confidence Test Sequence

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# Chapter 25 Deleted Chapter

The chapter "Projector Consolidated Confidence Sequence" was moved to Section 24.3. The chapter number is maintained here to preserve the numbering of subsequent sections.

# Chapter 26 HDR Direct View Display Test Sequences

# 26.1 Overview

The Test Subject of the Test Sequence defined in this chapter is a Direct View Display that supports both SDR and HDR presentations. The configuration and architecture of the system may vary, but the Test Sequence requires that the system consists of at least a light processing system including electronic and optical components (Direct View Display), an IMB or IMBO (containing a Security Manager, Media Decryptor, etc.), and a Screen Management Server (SMS). For the purpose of this test, the Test Operator may substitute a Theater Management Server (TMS) for the SMS if it implements the required functionality. Wherever a test procedure refers to an SMS, the equivalent TMS may also be used.

For the purpose of compliance testing as defined in this Chapter, the spatial resolution of the direct view display shall be no less than that of the Media Block.

Before performing a Test Sequence provided below, the Test Operator should read and understand the documentation provided with the Test Subject. If adequate documentation is not available, a Test Subject Representative should be available to provide assistance during the test session.

# 26.2 HDR Direct View Display Consolidated Test Sequence

# 26.2.1 HDR Direct View Display Practical Procedures

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1>Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.1 Projector and Direct View Display PhysicalProtection</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>7.2.6 SPB2 Secure Silicon Field Replacement</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>7.2.7 Systems without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>7.2.8 Electronic Marriage Break Key Retaining</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>7.5.8 SDR Intra-frame Contrast</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>11</td><td rowspan=1 colspan=1>7.5.9 Grayscale Tracking</td><td rowspan=1 colspan=2>(data only)</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>12</td><td rowspan=1 colspan=1>7.5.10 SDR Contouring</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>13</td><td rowspan=1 colspan=1>7.5.11 SDR Transfer Function</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>14</td><td rowspan=1 colspan=1>7.5.12 SDR Color Accuracy</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>15</td><td rowspan=1 colspan=1>7.5.14 HDR White Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>16</td><td rowspan=1 colspan=1>7.5.15 SDR White Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>17</td><td rowspan=1 colspan=1>7.5.16 HDR Color Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>18</td><td rowspan=1 colspan=1>7.5.17 HDR Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>19</td><td rowspan=1 colspan=1>7.5.18 SDR Inactive Black Level (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>20</td><td rowspan=1 colspan=1>7.5.19 Horizontal and Vertical Full Screen Off-AxisUniformity (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>21</td><td rowspan=1 colspan=1>7.5.20 Stereoscopic Extinction Ratio</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>22</td><td rowspan=1 colspan=1>7.5.21 SDR Stereoscopic Peak White Luminance</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>23</td><td rowspan=1 colspan=1>7.5.22 Surface Reflectivity (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>24</td><td rowspan=1 colspan=1>7.5.23 Vignetting (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>25</td><td rowspan=1 colspan=1>7.5.24 SDR Stereoscopic Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26</td><td rowspan=1 colspan=1>7.5.25 Image Upscaling Artifacts</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27</td><td rowspan=1 colspan=1>7.5.26 SDR Stereoscopic Color Accuracy</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28</td><td rowspan=1 colspan=1>7.5.27 Sub-pixel Spatial Coincidence (Direct ViewDisplay)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>29</td><td rowspan=1 colspan=1>7.5.28 HDR Transfer Function</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>30</td><td rowspan=1 colspan=1>7.5.29 SDR Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>31</td><td rowspan=1 colspan=1>7.5.30 Direct View Display Test Environment</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>32</td><td rowspan=1 colspan=1>7.5.31 Automatic SDR/HDR mode switching</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>33</td><td rowspan=1 colspan=1>7.5.32 HDR Inactive Black Level (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>34</td><td rowspan=1 colspan=1>7.5.33 Image Frame Rates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>35</td><td rowspan=1 colspan=1>7.5.34 Stereoscopic Image Frame Rates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>36</td><td rowspan=1 colspan=1>7.5.35 HDR Contouring</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 26.2.2 HDR Direct View Display Design Reviews

For each requirement listed in the table below, prove that the system design meets the requirement by identifying the software or hardware mechanism that implements the requirement and analyzing the design to assure that the requirement has been met, subject to stipulated conditions. If a proof cannot be made, the design will be considered non-compliant with regard to the requirement. To perform this analysis the examiner will require access to exhibit documents (system design artifacts) such as schematic diagrams, implementation source code, unit test source code, state diagrams, design notes, etc. See Chapter 9 and Chapter 10 for more information.

For each requirement, the examiner must record the identifiers of the exhibits consulted in proving the requirement, including applicable version identifiers, section or sheet numbers, grid identifiers, etc., and the examiner must record Pass or Fail to indicate whether or not the requirement has been met by the design. The examiner may also record any notes relevant to interpreting the exhibits and to the determination of the compliance status.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1>Exhibit Identifiers</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>10.4.1 Theater System Reliability</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>10.4.18 Imaging Device Secure Silicon Device</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>10.4.19 Access to Imaging Device Image Signals</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>10.4.20 Systems with Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>10.4.21 Systems Without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>10.4.25 Repair and Renewal of SPBs</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>10.4.26 SPB2 Protected Devices</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>10.4.78 Imaging Device SPB Log ReportingRequirements</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>10.5.1 Pixel Visibility (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 26.3 HDR Direct View Display Confidence Test Sequence

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1> Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# Chapter 27 SDR Direct View Display Test Sequences

# 27.1 Overview

The Test Subject of the Test Sequence defined in this chapter is a Direct View Display that supports SDR presentations. The configuration and architecture of the system may vary, but the test sequences requires that the system consists of at least a light processing system including electronic and optical components (Direct View Display), an IMB or IMBO (containing a Security Manager, Media Decryptor, etc.), and a Screen Management Server (SMS). For the purpose of this test, the Test

Operator may substitute a Theater Management Server (TMS) for the SMS if it implements the required functionality.   
Wherever a test procedure refers to an SMS, the equivalent TMS may also be used.

For the purpose of compliance testing as defined in this Chapter, the spatial resolution of the direct view display shall be no less than that of the Media Block.

Before performing a Test Sequence provided below, the Test Operator should read and understand the documentation provided with the Test Subject. If adequate documentation is not available, a Test Subject Representative should be available to provide assistance during the test session.

# 27.2 SDR Direct View Display Consolidated Test Sequence

# 27.2.1 SDR Direct View Display Practical Procedures

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.1 Projector and Direct View Display PhysicalProtection</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>7.2.6 SPB2 Secure Silicon Field Replacement</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>7.2.7 Systems without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>7.2.8 Electronic Marriage Break Key Retaining</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>7.5.8 SDR Intra-frame Contrast</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>11</td><td rowspan=1 colspan=1>7.5.9 Grayscale Tracking</td><td rowspan=1 colspan=2>(data only)</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>12</td><td rowspan=1 colspan=1>7.5.10 SDR Contouring</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>13</td><td rowspan=1 colspan=1>7.5.11 SDR Transfer Function</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>14</td><td rowspan=1 colspan=1>7.5.12 SDR Color Accuracy</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>15</td><td rowspan=1 colspan=1>7.5.15 SDR White Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>16</td><td rowspan=1 colspan=1>7.5.18 SDR Inactive Black Level (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>17</td><td rowspan=1 colspan=1>7.5.19 Horizontal and Vertical Full Screen Off-AxisUniformity (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>18</td><td rowspan=1 colspan=1>7.5.20 Stereoscopic Extinction Ratio</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>19</td><td rowspan=1 colspan=1>7.5.21 SDR Stereoscopic Peak White Luminance</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>20</td><td rowspan=1 colspan=1>7.5.22 Surface Reflectivity (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>21</td><td rowspan=1 colspan=1>7.5.23 Vignetting (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>22</td><td rowspan=1 colspan=1>7.5.24 SDR Stereoscopic Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>23</td><td rowspan=1 colspan=1>7.5.25 Image Upscaling Artifacts</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>24</td><td rowspan=1 colspan=1>7.5.26 SDR Stereoscopic Color Accuracy</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>25</td><td rowspan=1 colspan=1>7.5.27 Sub-pixel Spatial Coincidence (Direct ViewDisplay)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>26</td><td rowspan=1 colspan=1>7.5.29 SDR Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>27</td><td rowspan=1 colspan=1>7.5.30 Direct View Display Test Environment</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>28</td><td rowspan=1 colspan=1>7.5.33 Image Frame Rates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>29</td><td rowspan=1 colspan=1>7.5.34 Stereoscopic Image Frame Rates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 27.2.2 SDR Direct View Display Design Reviews

For each requirement listed in the table below, prove that the system design meets the requirement by identifying the software or hardware mechanism that implements the requirement and analyzing the design to assure that the requirement has been met, subject to stipulated conditions. If a proof cannot be made, the design will be considered non-compliant with regard to the requirement. To perform this analysis the examiner will require access to exhibit documents (system design artifacts) such as schematic diagrams, implementation source code, unit test source code, state diagrams, design notes, etc. See Chapter 9 and Chapter 10 for more information.

For each requirement, the examiner must record the identifiers of the exhibits consulted in proving the requirement, including applicable version identifiers, section or sheet numbers, grid identifiers, etc., and the examiner must record Pass or Fail to indicate whether or not the requirement has been met by the design. The examiner may also record any notes relevant to interpreting the exhibits and to the determination of the compliance status.

<table><tr><td rowspan=1 colspan=1> Step</td><td rowspan=1 colspan=1>Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Exhibit Identifiers</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>10.4.1 Theater System Reliability</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>10.4.18 Imaging Device Secure Silicon Device</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>10.4.19 Access to Imaging Device Image Signals</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>10.4.20 Systems with Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>10.4.21 Systems Without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>10.4.25 Repair and Renewal of SPBs</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>10.4.26 SPB2 Protected Devices</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>10.4.78 Imaging Device SPB Log ReportingRequirements</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>10.5.1 Pixel Visibility (Direct View Display)</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 27.3 SDR Direct View Display Confidence Test Sequence

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# Chapter 28 HDR Projector Test Sequences

# 28.1 Overview

The Test Subject of the Test Sequence defined in this chapter is a Projector that supports both SDR and HDR presentations. The configuration and architecture of the system may vary, but the Test Sequence requires that the system consists of at least a light processing system including electronic and optical components (Projector), an IMB or IMBO (containing a Security Manager, Media Decryptor, etc.), and an SMS. For the purpose of this test, the Test Operator may substitute a Theater Management Server/System (TMS) for the SMS if it implements the required functionality. Wherever a test procedure refers to an SMS, the equivalent TMS may also be used.

For the purpose of compliance testing as defined in this Chapter, the spatial resolution of the projector shall be no less than that of the Media Block.

Before performing a Test Sequence provided below, the Test Operator should read and understand the documentation provided with the Test Subject. If adequate documentation is not available, a Test Subject Representative should be available to provide assistance during the test session.

# 28.2 HDR Projector Consolidated Test Sequence

# 28.2.1 HDR Projector Practical Procedures

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.1 Projector and Direct View Display PhysicalProtection</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>7.2.6 SPB2 Secure Silicon Field Replacement</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>7.2.7 Systems without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>7.2.8 Electronic Marriage Break Key Retaining</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>7.5.3 maging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>7.5.8 SDR Intra-frame Contrast</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>11</td><td rowspan=1 colspan=1>7.5.9 Grayscale Tracking</td><td rowspan=1 colspan=2>(data only)</td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>12</td><td rowspan=1 colspan=1>7.5.10 SDR Contouring</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>13</td><td rowspan=1 colspan=1>7.5.11 SDR Transfer Function</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>14</td><td rowspan=1 colspan=1>7.5.12 SDR Color Accuracy</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>15</td><td rowspan=1 colspan=1>7.5.13 Projector Test Environment</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>16</td><td rowspan=1 colspan=1>7.5.14 HDR White Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>17</td><td rowspan=1 colspan=1>7.5.15 SDR White Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>18</td><td rowspan=1 colspan=1>7.5.16 HDR Color Luminance and Chromaticity</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>19</td><td rowspan=1 colspan=1>7.5.17 HDR Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>20</td><td rowspan=1 colspan=1>7.5.28 HDR Transfer Function</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>21</td><td rowspan=1 colspan=1>7.5.29 SDR Minimum Active Black Level</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>22</td><td rowspan=1 colspan=1>7.5.31 Automatic SDR/HDR mode switching</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>23</td><td rowspan=1 colspan=1>7.5.33 Image Frame Rates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>24</td><td rowspan=1 colspan=1>7.5.35 HDR Contouring</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 28.2.2 HDR Projector Design Reviews

For each requirement listed in the table below, prove that the system design meets the requirement by identifying the software or hardware mechanism that implements the requirement and analyzing the design to assure that the requirement has been met, subject to stipulated conditions. If a proof cannot be made, the design will be considered non-compliant with regard to the requirement. To perform this analysis the examiner will require access to exhibit documents (system design artifacts) such as schematic diagrams, implementation source code, unit test source code, state diagrams, design notes, etc. See Chapter 9 and Chapter 10 for more information.

For each requirement, the examiner must record the identifiers of the exhibits consulted in proving the requirement, including applicable version identifiers, section or sheet numbers, grid identifiers, etc., and the examiner must record Pass or Fail to indicate whether or not the requirement has been met by the design. The examiner may also record any notes relevant to interpreting the exhibits and to the determination of the compliance status

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1>Exhibit Identifiers</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>10.4.1 Theater System Reliability</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>10.4.18 Imaging Device Secure Silicon Device</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>10.4.19 Access to Imaging Device Image Signals</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>10.4.20 Systems with Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>10.4.21 Systems Without Electronic Marriage</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>10.4.25 Repair and Renewal of SPBs</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>10.4.26 SPB2 Protected Devices</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>10.4.78 Imaging Device SPB Log ReportingRequirements</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# 28.3 HDR Projector Confidence Test Sequence

For each row of the table below, perform the procedure specified in the Procedure column. Indicate the status of the test in the Pass or Fail column, unless the test is specified as data only. Any marks in greyed-out fields indicate a test failure. Report any information listed in the Measured Data column. The Test Operator may record any additional observations.

<table><tr><td rowspan=1 colspan=1>Step</td><td rowspan=1 colspan=1> Procedure</td><td rowspan=1 colspan=1> Pass</td><td rowspan=1 colspan=1>Fail</td><td rowspan=1 colspan=1> Measured data</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>5.1.1 SPB Digital Certificate</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>6.1.20 Validity of SPB Certificates</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>6.4.3 FM Payload</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>7.2.2 Projector and Direct View Display SecurityServicing</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>7.5.3 Imaging Device Pixel Count/Structure</td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td><td rowspan=1 colspan=1></td></tr></table>

# APPENDIX A TEST MATERIALS

# A.1 Overview

To facilitate consistent testing of d-cinema equipment, a set of reference files has been produced to be used as directed in the respective test procedures. These materials are described in detail in this Appendix with the intention that the materials can be re-created from the descriptions and used to achieve testing results equivalent to those achieved with the original reference files.

The test material described below consists of digital certificates, Key Delivery Messages (KDM) and D-Cinema Packages (DCP). A DCP can be further deconstructed as a set of Track Files, Composition Playlists and related file descriptions. Some Track Files will be encrypted.

Because the identity of a Test Subject cannot be known until the device has been manufactured, it is not possible to create reference KDM files in advance. It is therefore necessary to divide the test material into two categories: common-use reference material and per-device reference material. Common-use reference material can be created once and used without limit on

any compliant system. Per-device reference material must be created for each Test Subject, with foreknowledge of the date and time of the test session.

Two additional categories of reference material exist: compliant and intentionally non-compliant. Most of the material will be "golden" reference files, intended to be entirely compliant with the relevant specifications. Other files, however, will be intentionally broken to allow testing of error detection and recovery mechanisms.

# A.2 Images

# A.2.1 Introduction

This section defines a set of MXF picture track files. For each track file, a description is given which details the images encoded in the file. The image track files will be combined with sound files to make complete compositions (see Annex A.4).

# A.2.2 Sync Count

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sync_count_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of plain frames followed by a ten second countdown andfive seconds of plain frames.The countdown consists of ten identical one-second count segments, from 9-0.Each count segment consists of twenty- four frames of the respective digit for the count period. Thefirst frame of each count segment willhave a punch set to indicate sync.The example image below</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:20:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/4531c4558cd39747a27430d836fc91cba8da4bb56c0571a800fca57ac73cda91.jpg)  
Figure A.2.2: Sync Count

# A.2.3 Sync Count (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sync_count_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Annex A.2.2.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:20:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.4 4K Sync Count

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4K_sync_count_j2c_pt.mxf</td></tr><tr><td>Description</td><td>4K Resolution MXF track file, contents are identical to Annex A.2.2.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:20:00</td></tr><tr><td>PixelArraySize</td><td>4096×2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.5 Sync Count, 48fps

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sync_count_48fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td>48fps MXF track file containing five seconds (240 frames) of plain frames followed by a ten second countdown and five seconds of plain frames.The countdown consists of ten identical one- second count segments,from 9-0.Each count segment consists of forty- eight frames of the respective digit for the</td></tr><tr><td>Conforms to</td><td>count period. The first two frames of each count segment willhave a punch set to indicate sync. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:20:00</td></tr><tr><td></td><td></td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td></td><td></td></tr><tr><td></td><td>EditRate 48/1</td></tr></table>

# A.2.6 Channel I.D. 5.1

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>channel_id_51_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of plain frames followed by a thirty second audio channel identification set and five seconds of plain frames.The audio channel identification set consists of six identical five second identifier segments having the folowing consecutively displayed labels: Left, Center,Right, Left Surround, Right Surround,LFE.Each channel identifier segment consists of five seconds (120 frames) of the respective label.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:40:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td></td><td>EditRate 24/1</td></tr></table>

# A.2.7 Channel I.D. 1-16

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td> Filename</td><td>channel_id_01-16_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing two seconds (48 frames) of plain frames followed by an eighty second audio channel identification set and two seconds of plain frames.The audio channel identification set consists of sixteen identical five-second identifier segments displaying consecutively numbered channel labels: 1,2,</td></tr><tr><td rowspan="2">Conforms to</td><td colspan="2">3,4,etc.through 16.Each channel identifier segment consists of five seconds (120 frames) of the respective label.</td></tr><tr><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td><td></td></tr><tr><td rowspan="3">Meta</td><td>Duration 00:01:24:00</td><td></td></tr><tr><td>PixelArraySize 2048x1080</td><td></td></tr><tr><td>EditRate 24/1</td><td></td></tr></table>

# A.2.8 "NIST" 2K Test Pattern

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>nist_2k_test_pattern_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing the &quot;DCI NIST&quot; pattern created during original DCl research project.The patern (shown below) includes geometric dimensions, color chips,dimensional paterns,a grayscale gradient and full-color photographic images.The track file contains 30 seconds (720 frames) of this image. Note: This image was obtained during the initial DCl study efort. It is used in the CTP because it is familiar to many in the d- cinema industry.The edge ofset reticles are not accurate, however they are not used by</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td> Meta</td><td>Duration 00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/196a472928f56e157d940c4dcf73390fb122ec70090a230d375e4837b96500b5.jpg)  
Figure A.2.8: "NIST" 2K Test Pattern

A.2.9 "NIST" 4K Test Pattern   

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4K_nist_test_pattern_j2c_pt.mxf</td></tr><tr><td>Description</td><td>4K Resolution MXF track file containing the &quot;DCl NIST&quot; pattern as shown in Annex A.2.8 Patern. The track file contains 30 seconds (720 frames) of this image.Note:This image was obtained during the initial</td></tr><tr><td></td><td>DCI study efort. It is used in the CTP because it is familiar to many in the d-cinema industry. The edge offset reticles are not accurate, however they are not used by any CTP procedure.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td></td><td></td></tr><tr><td></td><td>EditRate 24/1</td></tr></table>

# A.2.10 Black to Gray Step Series

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td> gray_step_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of a chart showing all gray step values for the Black to Grayvalues in Section 7.5.9.This is followed by1 minute of each ofthe 10 values as aful frame.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr></table>

![](images/d5c9c844dac18523b8423ae4e5ff75f8bc3a1fc2e313088f3b26365c5cacb867.jpg)  
Figure A.2.10: Black to Gray Step Series

# A.2.11 Black to White Step Series

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>white_step_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of a chart showing all gray step values for the Black to White values in Section 7.5.9.This is followed by 1 minute of each of the10 values as a fullframe.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:11:05:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/780ee31fb503b41db49270f7d5d123eb252b79742f292be46730225dd8c2dea7.jpg)  
Figure A.2.11: Black to White Step Series

# A.2.12 Color Accuracy Series

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>color_accuracy_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXFtrack file containing five seconds (120 frames) of a chart showing allcolor values for the test in Section 7.5.12. This is followed by 1 minute of each of the 12 color values as a fullframe.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td> Meta</td><td>Duration 00:12:05:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/dba9fd1b51567a3137f01a7b89de61964c63257ffac7e259f694925420f0409b.jpg)  
Figure A.2.12: Color Accuracy Series

# A.2.13 4K Color Accuracy Series

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4K_color_accuracy_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing the 4K version of the Color Accuracy Series shown in Annex A.2.12 Series.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 12:05:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.14 Black (Empty Frame)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 30 seconds (720 frames) of black (all pixels zero).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-422],[SMPTE-429-3], [SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr></table>

<table><tr><td>EditRate 24/1</td></tr></table>

# A.2.15 White (White Frame)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>white_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 30 seconds (720 frames) of white.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.16 Intra-Frame Contrast Sequence

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2K_checkerboard_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing alternating checkerboard patterns and an aiming target.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/969ceef43ae0078d70a5f5a7ebc140453eb627fdf5f8090b3aa356c362c251ad.jpg)  
Figure A.2.16: Intra-Frame Contrast Sequence

# A.2.17 Sequential Contrast Sequence

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2K_sequential_contrast_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing black,white and aiming target frames.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.18 2K Picture Track File, Maximum Bitrate

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>2K_max_bitrate_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing a count to check synchronization between picture and sound,10 minutes (14,400 frames) of a frame that has a large file size (1,281,818 bytes)and a second sync count.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.19 4K Picture Track File, Maximum Bitrate

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4K_max_bitrate_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing a count to check synchronization between picture and sound,10 minutes (14,400 frames) of a frame that has a large file size (1,299,183 bytes) and asecond sync count.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3], [SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.2.20 DCI Numbered Frame Sequence

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>frame_num_burn_in_j2c_pt.mxf</td></tr><tr><td> Description</td><td>MXF track file containing a sequence of the &quot;DCl NIST&quot; frame that has an overlay of two identical visible number fields.The five digit field contains Ooooo in the first frame of the file,with each consecutive frame</td></tr><tr><td>Conforms to</td><td>increasing the count by 1. The last frame willbe numbered 07199. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:05:00:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/63779b2cc28836c434e936a8f24b0ee683800b19a68be9d46cce0419043e323b.jpg)  
Figure A.2.20: DCI Numbered Frame Sequence

# A.2.21 DCI Numbered Frame Sequence (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>frame_num_burn_in_j2c_ct.mxf</td></tr><tr><td>Description</td><td>MXFtrack file containing a sequence of the &quot;DCl NIST&quot; frame that has an overlay of two identical visible number fields.The five digit field contains Ooooo in the first frame of the file,with each consecutive frame</td></tr><tr><td></td><td>increasing the count by 1. The last frame will be numbered 07199.</td></tr><tr><td>Conforms to Meta</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td></td><td>Encryption AES-128 Duration 00:05:00:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td></td><td></td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.22 DCI Scope Transition Sequence

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>transition-scope_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing a sequence of Scope format (A.R.2.39:1) plain frames,and the label "Scope Transition Test Sequence (2O48 x 858)". Each of the first 24 frames of the sequence have two identical</td></tr><tr><td rowspan="2">Conforms to</td><td colspan="2">overlays displaying a number from Oo1 through O24.Each of the last 24 frames of the sequence have two identical overlays displaying a number from 024 through 001.</td></tr><tr><td>[SMPTE-377-1], [SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td><td></td></tr><tr><td rowspan="3">Meta</td><td>Duration 00:10:00</td><td></td></tr><tr><td>PixelArraySize 2048x858</td><td></td></tr><tr><td>EditRate 24/1</td><td></td></tr></table>

# A.2.23 DCI Flat Transition Sequence

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>transition-flat_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing a sequence of Flat format (A.R.1.85:1) plain frames,and the label &quot;Flat</td></tr><tr><td></td><td>Transition Test Sequence (1998 x 1024)&quot;. Each of the first 24 frames of the sequence have two identical overlays displaying a number from OO1 through O24. Each of the last 24 frames of the sequence have two</td></tr><tr><td></td><td>identical overlays displaying a number from O24 through 001.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:10:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td></td><td></td></tr><tr><td></td><td>EditRate 24/1</td></tr></table>

# A.2.24 StEM 2K

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>StEM_2K_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing the complete DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 11:31:21</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.25 StEM 2K (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>StEM_2K_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing the complete DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>11:31:21</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.26 StEM 2K Multi-Reel A (Encrypted)

<table><tr><td>Type</td><td>MXF j2c multi</td></tr><tr><td>Filename</td><td>StEM_2K_j2c_multi_A_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Aset of encrypted MXF track files containing 2k image essence for the DCl StEM Mini Movie.128 files, each with a duration of 5 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SegmentCount 128</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td></td><td>SegmentDuratior00:05:00</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.27 StEM 2K Multi-Reel B (Encrypted)

<table><tr><td>Type MXF j2c multi</td><td></td></tr><tr><td>Filename</td><td>StEM_2K_j2c_multi_B_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Aset of encrypted MXFtrack files containing 2k image essence for the DCl StEM Mini Movie.Identical to StEM_2K_j2c_multi_A_ct</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SegmentCount 128</td></tr><tr><td rowspan="4"></td><td>Encryption AES-128</td></tr><tr><td>SegmentDuratior00:05:00</td></tr><tr><td>Duration 00:10:40:00</td></tr><tr><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate 24/1</td></tr></table>

# A.2.28 StEM 2K Multi-Reel A

<table><tr><td>Type</td><td>MXF j2c multi</td></tr><tr><td>Filename</td><td>StEM_2K_j2c_multi_A_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of plaintext MXF track files containing 2k image essence for the DCl StEM Mini Movie.128 files, each with a duration of 5 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SegmentCount 128</td></tr><tr><td></td><td>SegmentDuratior00:05:00</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.29 StEM 2K Multi-Reel B

<table><tr><td>Type MXF j2c multi</td><td></td></tr><tr><td>Filename</td><td>StEM_2K_j2c_multi_B_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of plaintext MXF track files containing 2k image essence for the DCl StEM Mini Movie.Identical to StEM_2K_j2c_multi_A_pt</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SegmentCount 128</td></tr><tr><td></td><td>SegmentDuratior00:05:00</td></tr><tr><td></td><td>Duration 00:10:40:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.30 StEM 2K 48 fps

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td> Filename</td><td>StEM_2K_48fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing a 48 fps DCl StEM Mini Movie clip.</td></tr><tr><td>Conforms to[</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

<table><tr><td>Meta</td><td></td><td>00:51:46</td></tr><tr><td></td><td>Duration</td><td></td></tr><tr><td></td><td>PixelArraySize</td><td>2048x858</td></tr><tr><td></td><td>EditRate</td><td>48/1</td></tr></table>

# A.2.31 pixel_structure_N_2k_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>pixel_structure_N_2k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.32 pixel_structure_S_2k_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>pixel_structure_S_2k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.33 pixel_structure_E_2k_j2c_pt

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>pixel_structure_E_2k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr></table>

<table><tr><td>Meta</td><td></td><td></td></tr><tr><td></td><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize</td><td>：2048x1080</td></tr><tr><td></td><td>EditRate</td><td>24/1</td></tr></table>

# A.2.34 pixel_structure_W_2k_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>pixel_structure_W_2k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.35 pixel_structure_N_4k_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>pixel_structure_N_4k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.36 pixel_structure_S_4k_j2c_pt

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>pixel_structure_S_4k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr></table>

<table><tr><td>Meta</td><td></td><td></td></tr><tr><td></td><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize</td><td>e4096x2160</td></tr><tr><td></td><td>EditRate</td><td>24/1</td></tr></table>

# A.2.37 pixel_structure_E_4k_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>pixel_structure_E_4k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.38 pixel_structure_W_4k_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>pixel_structure_W_4k_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.39 FM Constraints Begin (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>fm_constraints_begin_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file with 10 seconds of slate reading &quot;Begin Detection&quot;and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr></table>

![](images/5127443d9e917552ffcdce329e3c85b0ae85dc7931b14d7cb234b2340d085073.jpg)  
Figure A.2.39: FM Constraints Begin (Encrypted)

# A.2.40 FM Constraints Begin (Plaintext)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>fm_constraints_begin_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Plaintext MXF track fie with 10 seconds of slate reading &quot;Begin Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.41 FM Constraints End (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>fm_constraints_end_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file with 10 seconds of slate reading &quot;End Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr></table>

<table><tr><td>EditRate 24/1</td></tr></table>

# A.2.42 FM Constraints End (Plaintext)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>fm_constraints_end_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Plaintext MXF track file with 10 seconds of slate reading &quot;End Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.43 2K FM Control Granularity Begin (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_begin_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file with 10 seconds of slate reading &quot;Begin Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td> Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.44 Deleted Section

The section "2K FM Control Granularity Begin" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.45 2K FM Control Granularity End (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_end_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file with 10 seconds of slate reading "End Detection" and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.46 Deleted Section

The section "2K FM Control Granularity End" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.47 2K FM Payload Begin (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2K_fm_payload_begin_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file with 10 seconds of slate reading &quot;Begin Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.48 2K FM Payload End (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2K_fm_payload_end_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file with 10 seconds of slate reading &quot;End Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.49 Binary Audio FM Bypass

<table><tr><td>Type MXF j2c</td></tr><tr><td>Filename binary_audio_fm_bypass_j2c_pt.mxf</td><td></td></tr><tr><td>Description</td><td> Plaintext MXF track file with 10 minutes of slate reading "Binary Audio FM Bypass".</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:10:00:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.2.50 Selective FM Begin

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>selective_fm_begin_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Plaintext MXF track file with 10 seconds of slate reading &quot;Begin Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.51 Selective FM End

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>selective_fm_end_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Plaintext MXF track file with 10 seconds of slate reading &quot;End Detection&quot; and 5 seconds of black.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.52 Timed Text Example with Missing Font

<table><tr><td>Type MXF text</td><td></td></tr><tr><td>Filename</td><td>std_ctp_text_no_font_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text using an OpenType font.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr><tr><td></td><td>MalformationsThe font shall not be present in the track file.</td></tr><tr><td>Meta</td><td></td></tr><tr><td>Duration</td><td>00:01:00:00</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.53 DCI_gradient_step_s_white_j2c_pt

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>DCI_gradient_step_s_white_j2c_pt.mxf</td></tr><tr><td>Description</td><td>See Section 6.5.2 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-431-2]</td></tr><tr><td>Meta</td><td>Duration 00:00:16:16</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

![](images/79093dc8e01c40f04d9892290b90f5d3a6adeaf8802d768783d03ca143294479.jpg)  
Figure A.2.53: DCI_gradient_step_s_white_j2c_pt

# A.2.54 Deleted Section

The section "DCI_gradient_step_s_color_j2c_pt" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.55 Deleted Section

The section "Timed Text Example with Font" was deleted. The section number is maintained here to preserve the numbering of subsequent sections

# A.2.56 Deleted Section

The section "Timed Text Example with PNG" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.57 Sync Count Text

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sync_count_tt_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text using a font and images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5],[SMPTE-428-7]</td></tr><tr><td>Meta</td><td>Duration 00:00:22:00</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.58 Sync Count Text (Encrypted)

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sync_count_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text using a font and images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr><tr><td>Meta</td><td>Duration 00:00:22:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.59 subtitle background

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>subtitle_background_j2c_pt.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-422]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.60 Deleted Section

The section "Plain_Frame_nosub_j2c_ct" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.61 m01 Picture Frame Out Of Order (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>m01_pict_frame_oo_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing the first 5 seconds (120 frames)of the NIST test pattern.The order of the first two frames has been deliberately swapped.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe first two image frames of the track file have been swapped.</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.62 m03 Sound Splice

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>m03_snd_splc_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing one minute (1440 frames) of plain frames with the label &quot;mO3 Sound Splice Test&quot;.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.63 m05 Picture Track File With Wrong TrackFile ID (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>m05_pict_wrong_file_j2c_ct.mxf</td></tr><tr><td>Description</td><td>MXFtrack file in which the integrity pack of the 7th frame has the TrackFile ID replaced with a diferent value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>AES-128</td></tr><tr><td>Encryption</td><td></td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr><tr><td colspan="2">CiphertextHeaderyes</td></tr></table>

# A.2.64 m09 Picture track file with bad HMAC (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>m09_pict_bad_hmac_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Picture track file in which one of the HMAC values for a single frame has been changed.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Malformations</td><td>The file contains a replacement EKLV packet for the seventh frame (index 6).The replacement packet is taken from another track file having a diferent PackageUID but encrypted with the same symmetric key.</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.65 m11 Picture With Bad Check Value (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>m11_pict_bad_chuk_j2c_ct.mxf</td></tr><tr><td>Description</td><td>MXF track file containing one EKLV packet with an invalid Check Value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.66 2K Scope Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename sub_test_2K_scope_00_j2c_ct.mxf</td><td></td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.67 2K Scope Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.68 2K Scope Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.69 Deleted Section

The section "2K Scope Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.70 2K Scope Subtitle Test Background - Reel 5

<table><tr><td>Type MXF j2c</td></tr></table>

<table><tr><td>Filename sub_test_2K_scope_04_j2c_ct.mxf</td><td></td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td></td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.71 2K Scope Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.72 2K Scope Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.73 2K Scope Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.74 2K Scope Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td>PixelArraySize</td><td>：2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.75 2K Scope Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2], [SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.76 4K Scope Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>sub_test_4K_scope_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize ：4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.77 4K Scope Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td></td><td>PixelArraySize 4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.78 4K Scope Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize ：4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.79 Deleted Section

The section "4K Scope Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.80 4K Scope Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize ：4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.81 4K Scope Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.82 4K Scope Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td></td><td>PixelArraySize ：4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.83 4K Scope Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.84 4K Scope Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td>PixelArraySize</td><td>4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.85 4K Scope Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td></td><td>PixelArraySize ：4096x1716</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.86 2K 48fps Scope Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize ：2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.87 2K 48fps Scope Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td colspan="2">Duration</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.88 2K 48fps Scope Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize ：2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.89 Deleted Section

The section "2K 48fps Scope Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.90 2K 48fps Scope Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td></td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.91 2K 48fps Scope Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td></td><td>Duration 00:00:15:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.92 2K 48fps Scope Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.93 2K 48fps Scope Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize ：2048x858</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.94 2K 48fps Scope Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td></td><td>Duration 00:01:45:00</td></tr><tr><td></td><td>PixelArraySize ：2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.95 2K 48fps Scope Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.96 2K Flat Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize ：1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.97 2K Flat Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.98 2K Flat Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td>PixelArraySize</td><td>1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.99 Deleted Section

The section "2K Flat Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.100 2K Flat Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td></td><td>Duration 00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.101 2K Flat Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>sub_test_2K_flat_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.102 2K Flat Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td>PixelArraySize</td><td>1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.103 2K Flat Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td> Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize ：1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.104 2K Flat Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td></td><td>PixelArraySize ：1998x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.105 2K Flat Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td>PixelArraySize</td><td>1998x1080</td></tr><tr><td>EditRate 24/1</td><td></td></tr></table>

# A.2.106 4K Flat Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.107 4K Flat Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td>PixelArraySize</td><td>3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.108 4K Flat Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.109 Deleted Section

The section "4K Flat Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.110 4K Flat Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.111 4K Flat Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td>PixelArraySize</td><td>：3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.112 4K Flat Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.113 4K Flat Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.114 4K Flat Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.115 4K Flat Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 3996x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.116 2K 48fps Flat Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td>PixelArraySize</td><td>1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.117 2K 48fps Flat Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.118 2K 48fps Flat Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.119 Deleted Section

The section "2K 48fps Flat Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.120 2K 48fps Flat Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td>PixelArraySize</td><td>1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.121 2K 48fps Flat Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.122 2K 48fps Flat Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td></td><td>PixelArraySize 1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.123 2K 48fps Flat Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td>PixelArraySize</td><td>1998x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.124 2K 48fps Flat Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.125 2K 48fps Flat Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td>PixelArraySize</td><td>2048x858</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.126 2K Full Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.127 2K Full Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.128 2K Full Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.129 Deleted Section

The section "2K Full Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.130 2K Full Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.131 2K Full Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.132 2K Full Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.133 2K Full Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.134 2K Full Subtitle Test Background - Reel 9

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>sub_test_2K_full_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.135 2K Full Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_2K_full_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td> Duration</td><td>00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.136 4K Full Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.137 4K Full Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td>PixelArraySize</td><td>：4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.138 4K Full Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.139 Deleted Section

The section "4K Full Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.140 4K Full Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize ：4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.141 4K Full Subtitle Test Background - Reel 6

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>sub_test_4K_full_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td>PixelArraySize</td><td>：4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.142 4K Full Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td></td><td>PixelArraySize ：4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.143 4K Full Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td>PixelArraySize</td><td>4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.144 4K Full Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.145 4K Full Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_4K_full_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td></td><td>PixelArraySize 4096x2160</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.146 2K 48fps Full Subtitle Test Background - Reel 1

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_00_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:14:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.147 2K 48fps Full Subtitle Test Background - Reel 2

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_01_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:40:00</td></tr><tr><td></td><td>PixelArraySize ：2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.148 2K 48fps Full Subtitle Test Background - Reel 3

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_02_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:01:52:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.149 Deleted Section

The section "2K 48fps Full Subtitle Test Background - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.150 2K 48fps Full Subtitle Test Background - Reel 5

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_04_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.151 2K 48fps Full Subtitle Test Background - Reel 6

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_05_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:15:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.152 2K 48fps Full Subtitle Test Background - Reel 7

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_06_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td rowspan="4">Meta</td><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:01:31:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.153 2K 48fps Full Subtitle Test Background - Reel 8

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_07_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:10:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.154 2K 48fps Full Subtitle Test Background - Reel 9

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_08_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:01:45:00</td></tr><tr><td></td><td>PixelArraySize ：2048x1080</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.155 2K 48fps Full Subtitle Test Background - Reel 10

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_09_j2c_ct.mxf</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-2],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:30:00</td></tr><tr><td>PixelArraySize</td><td>2048x1080</td></tr><tr><td>EditRate 48/1</td><td></td></tr></table>

# A.2.156 2K Scope Subtitle Test - Timed Text track file - Reel 1

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_00_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.157 2K Scope Subtitle Test - Timed Text track file - Reel 2

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_01_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.2.158 2K Scope Subtitle Test - Timed Text track file - Reel 3

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_02_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.159 Deleted Section

The section "2K Scope Subtitle Test - Timed Text track file - Reel $4 "$ was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.160 2K Scope Subtitle Test - Timed Text track file - Reel 5

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_04_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.161 2K Scope Subtitle Test - Timed Text track file - Reel 6

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_05_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.162 2K Scope Subtitle Test - Timed Text track file - Reel 7

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_06_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.163 2K Scope Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.164 2K Scope Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.165 2K Scope Subtitle Test - Timed Text track file - Reel 10

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_09_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.166 4K Scope Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.167 4K Scope Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.168 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 1

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_scope_00_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.169 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 2

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_01_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.170 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 3

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_02_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.171 Deleted Section

The section "2K 48fps Scope Subtitle Test - Timed Text track file - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.172 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 5

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_04_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.173 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 6

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_scope_05_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.174 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 7

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_06_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.175 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.176 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.177 2K 48fps Scope Subtitle Test - Timed Text track file - Reel 10

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_09_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.178 2K Flat Subtitle Test - Timed Text track file - Reel 1

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_00_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.179 2K Flat Subtitle Test - Timed Text track file - Reel 2

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_01_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.180 2K Flat Subtitle Test - Timed Text track file - Reel 3

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_02_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.2.181 Deleted Section

The section "2K Flat Subtitle Test - Timed Text track file - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.182 2K Flat Subtitle Test - Timed Text track file - Reel 5

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_04_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.183 2K Flat Subtitle Test - Timed Text track file - Reel 6

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_05_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.184 2K Flat Subtitle Test - Timed Text track file - Reel 7

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_06_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.185 2K Flat Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.186 2K Flat Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.187 2K Flat Subtitle Test - Timed Text track file - Reel 10

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_09_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.188 4K Flat Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.189 4K Flat Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.190 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 1

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_00_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.191 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 2

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_01_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.192 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 3

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_02_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.193 Deleted Section

The section "2K 48fps Flat Subtitle Test - Timed Text track file - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.194 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 5

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_04_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.195 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 6

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_05_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.196 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 7

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_06_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.197 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.198 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.199 2K 48fps Flat Subtitle Test - Timed Text track file - Reel 10

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_flat_09_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.200 2K Full Subtitle Test - Timed Text track file - Reel 1

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_00_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.201 2K Full Subtitle Test - Timed Text track file - Reel 2

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_01_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.202 2K Full Subtitle Test - Timed Text track file - Reel 3

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_02_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7], [SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.203 Deleted Section

The section "2K Full Subtitle Test - Timed Text track file - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.204 2K Full Subtitle Test - Timed Text track file - Reel 5

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_04_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.205 2K Full Subtitle Test - Timed Text track file - Reel 6

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_ful_05_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.206 2K Full Subtitle Test - Timed Text track file - Reel 7

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_06_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.207 2K Full Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.208 2K Full Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_full_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.209 2K Full Subtitle Test - Timed Text track file - Reel 10

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_2K_ful_09_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td> Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.210 4K Full Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_4K_full_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.211 4K Full Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_4K_full_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.212 2K 48fps Full Subtitle Test - Timed Text track file - Reel 1

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_00_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.213 2K 48fps Full Subtitle Test - Timed Text track file - Reel 2

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_full_01_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.214 2K 48fps Full Subtitle Test - Timed Text track file - Reel 3

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_full_02_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.215 Deleted Section

The section "2K 48fps Full Subtitle Test - Timed Text track file - Reel 4" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.216 2K 48fps Full Subtitle Test - Timed Text track file - Reel 5

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_04_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.217 2K 48fps Full Subtitle Test - Timed Text track file - Reel 6

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_full_05_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.218 2K 48fps Full Subtitle Test - Timed Text track file - Reel 7

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>sub_test_48fps_full_06_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.219 2K 48fps Full Subtitle Test - Timed Text track file - Reel 8

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_07_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.220 2K 48fps Full Subtitle Test - Timed Text track file - Reel 9

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_ful_08_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.2.221 2K 48fps Full Subtitle Test - Timed Text track file - Reel 10

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_09_tt_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing timed text test content.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-428-7],[SMPTE-429-5],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Duration 00:01:00:00</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.2.222 Sync Count with Subtitle Reticles

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>sync_count_with_subs_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames)of plain frames with reticles.followed by a ten second countdown and five seconds of plain frames with subtitle reticles.The countdown consists of ten identical one-second count segments, from 9-0. Each count segment consists of twenty-four frames of the respective digit for the count period. The first frame of each count segment will have a punch set to indicate sync.The example image below shows the first frame of the fourth count period,which contains</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Duration 00:00:20:00</td></tr></table>

![](images/99d3277fc240ca0be483d1fe072a873ff2011d2bd61d0a072471815d3d8708e4.jpg)  
Figure A.2.222: Sync Count with Subtitle Reticles

# A.2.223 Sync Count with Subtitle Reticles (Encrypted)

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>sync_count_with_subs_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file, contents are identical to Annex A.2.222.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-422],[SMPTE-429-3],[SMPTE-429-4], [SMPTE-429-6]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:20:00</td></tr><tr><td></td><td>PixelArraySize 2048x1080</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.2.224 StEM 2K Multi-Reel C (Encrypted)

<table><tr><td>Type</td><td>MXF j2c multi</td></tr><tr><td>Filename</td><td>StEM_2K_j2c_multi_C_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of encrypted MXF track files containing 2k image essence for the DCl StEM Mini Movie.64 files, each with a duration of 1 second.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SegmentCount 64</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td></td><td>SegmentDuratior00:01:00</td></tr><tr><td>Duration</td><td>00:01:04:00</td></tr><tr><td></td><td>PixelArraySize 2048x858</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

A.2.225 M25 Picture Track File with Malformed Integrity Pack: Missing MIC item (Encrypted)   

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>m25_integrity_pict_mic_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to DCl Numbered Frame Sequence but the 1,44lth edit unit is missing the MiC item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td> MalformationsThe 1,441th edit unit is missing the MlC item</td><td></td></tr></table>

A.2.226 M27 Picture Track File with Malformed Integrity Pack: Missing TrackFileID item (Encrypted)   

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>m27_integrity_pict_tfid_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identicalto DCl Numbered Frame Sequence but the 1,441th edit unit is missing the TrackFilelD item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the TrackFilelD item</td></tr></table>

A.2.227 M26 Picture Track File with Malformed Integrity Pack: Missing SequenceNumber item (Encrypted)   

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>m26_integrity_pict_snum_j2c_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identicalto DCl Numbered Frame Sequence but the 1,441th edit unit is missing the SequenceNumber item.</td></tr><tr><td></td><td>Conforms to[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missng the SequenceNumber item</td></tr></table>

# A.2.228 Deleted Section

The section "Sync Count with KDM-Borne MIC Key" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.2.229 Sync Count with KDM-Borne MIC Key (Encrypted)

<table><tr><td>Type</td><td> MXF j2c mkey</td></tr><tr><td> Filename</td><td>sync_count_j2c_mkey_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXFtrack file, contents are identical to Annex A.2.2 but with KDM-borne MIC Keys.</td></tr><tr><td>Conforms to[</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr></table>

# A.2.230 OBAE Rendering Expectations Guide

<table><tr><td>Type MXF j2c mkey</td><td></td></tr><tr><td>Filename</td><td>obae_render_test_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXFtrack file whose image contents ilustrates the expected acoustic output resulting from the rendering of Annex A.3.90.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-6]</td></tr></table>

# A.2.231 HDR Sequential Contrast Sequence

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_hdr_sequential_contrast_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing black (X&quot;= 60,Y&quot;= 62,Z&quot; = 65),white (X&quot;= 2524,Y&quot;= 2546, Z&quot;= 2583) and aiming target HDR 4K frames.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.232 4K HDR Color Accuracy Series

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_hdr_sequential_color_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of a chart ilustrating all Color Accuracy Color Patch Code Values specified in [DCl-HDR]. This is followed by1 minute of each of the Code Values as a full frame.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.233 2K Full SDR Black

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_full_sdr_black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K ful frames, each filled with pixels with code value (X&quot;=0, Y&#x27;=0, Z&#x27;=0).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.234 2K Scope SDR Black

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_scope_sdr_black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K scope frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=0).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.235 2K Flat SDR Black

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_flat_sdr_black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K flat frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=0).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.236 4K Full SDR Black

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_sdr_black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K ful frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=0).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.237 4K Scope SDR Black

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_scope_sdr_black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K scope frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=O, Z&#x27;=0).</td></tr></table>

# A.2.238 4K Flat SDR Black

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_flat_sdr_black_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=0).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.239 2K Full SDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_full_sdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K fullframes,each flled with pixels with code value (X&#x27;=0, Y&#x27;=O, Z&#x27;=O),with the exception of registration marks at each corner of the frame that use pixels with code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

![](images/d0ec90b2735a60a52109b433f76f4f609fd48a8dea62ceb781921a76ee9c6e61.jpg)  
Figure A.2.239: Black frame with registration marks (not to scale)

# A.2.240 2K Scope SDR Black with Marks

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>2k_scope_sdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K scope frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=O, Z&#x27;=O), with the exception of registration marks at each corner of the frame that use pixels with code value (X&#x27;=122,Y&#x27;=128, Z&#x27;=125),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.241 2K Flat SDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td> Filename</td><td>2k_flat_sdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K flat frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=O),with the exception of registration marks at each corner of the frame that use pixels with code value (X&quot;=122, Y&#x27;=128, Z&#x27;=125),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.242 4K Full SDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_sdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K fullframes,each filled with pixels with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=O), with the exception of registration marks at each corner of the frame that use pixels with code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125),as ilustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.243 4K Scope SDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td> Filename</td><td>4k_scope_sdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K scope frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=O, Z&#x27;=O), with the exception of registration marks at each corner of the frame that use pixels with code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125),as illstrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.244 4K Flat SDR Black with Marks

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_flat_sdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames,each filed with pixels with code value (X&#x27;=0, Y&#x27;=O, Z&#x27;=O),with the exception of registration marks at each corner of the frame that use pixels with code</td></tr><tr><td>Conforms to</td><td>value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125),as illustrated at Figure A.2.239. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.245 2K Full SDR Black with Active Area

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>2k_full_sdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K flat frames.Each frame,illustrated at Figure A.2.245, consists of a central rectangular area with dimensions (1440x1080)filled with code value (X'=0, Y'=0,</td></tr><tr><td>Conforms to</td><td>code value (X'=122, Y'=128, Z'=125) are located at allfour corners of the central rectangular area. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

![](images/45b1b7245c4cd7192eccaa68009df2988c8ce8a36cfaaa1f0688079125044154.jpg)  
Figure A.2.245: Frame with an active area (not to scale)

# A.2.246 2K Scope SDR Black with Active Area

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>2k_scope_sdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K scope frames. Each frame,illustrated at Figure A.2.245,</td></tr><tr><td></td><td>consists of a central rectangular area with dimensions (2048x768) filed with code value (X&#x27;=0, Y&#x27;=0, Z&#x27;=O). The rest of the frame is filed with code value (X&#x27;= 2901,Y&#x27;=2171, Z&#x27;=100). Registration marks with</td></tr><tr><td></td><td>code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125) are located at all four corners of the central rectangular area.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.247 2K Flat SDR Black with Active Area

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td> Filename</td><td>2k_flat_sdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K flat frames. Each frame,ilustrated at Figure A.2.245, consists of a central rectangular area with dimensions (1998×998) filld with code value (X&#x27;=0, Y&#x27;=0,</td></tr><tr><td></td><td>Z&#x27;=O).The rest of the frame is filed with code value (X&#x27;= 2901,Y&#x27;=2171, Z&#x27;=100). Registration marks with code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125) are located at allfour corners of the central rectangular area.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.248 4K Full SDR Black with Active Area

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_sdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K ful frames. Each frame,illustrated at Figure A.2.245, consists of a central rectangular area with dimensions (2880×216o)filled with code value (X&#x27;=0,Y&#x27;=0, Z&#x27;=O).The rest of the frame is filed with code value (X&#x27;= 2901,Y&#x27;=2171, Z&#x27;=100).Registration marks with code value (X&#x27;=122,Y&#x27;=128, Z&#x27;=125) are located at all four corners of the central rectangular area.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.249 4K Scope SDR Black with Active Area

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_scope_sdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K scope frames. Each frame,illustrated at Figure A.2.245, consists of a central rectangular area with dimensions (4096x1536)filled with code value (X&#x27;=O,Y&#x27;=0, Z&#x27;=O).The rest of the frame is filed with code value (X&#x27;= 2901,Y&#x27;=2171, Z&#x27;=100). Registration marks with</td></tr><tr><td>Conforms to</td><td>code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125) are located at all four corners of the central rectangular area. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.250 4K Flat SDR Black with Active Area

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td> Filename</td><td>4k_flat_sdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames. Each frame,illstrated at Figure A.2.245, consists of a central rectangular area with dimensions (3996x1996) filed with code value (X&#x27;=O, Y&#x27;=0,</td></tr><tr><td rowspan="2"></td><td>Z&#x27;=O).The rest of the frame is filed with code value (X&#x27;= 2901,Y&#x27;=2171, Z&#x27;=100).Registration marks with</td></tr><tr><td>code value (X&#x27;=122, Y&#x27;=128, Z&#x27;=125)are located at allfour corners of the central rectangular area.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.251 SDR Stereoscopic Contrast Test Patterns

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_full_sdr_contrast_stereo_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that consists of the sequence of test patterns specified in the stereoscopic extinction ratio &amp; crosstalk and stereoscopic luminance &amp; Iuminance difference procedures at[ICDM IDMS]: black for left eye and white for right eye,white for left eye and black for right eye,black for both eyes, white for both eyes</td></tr></table>

# A.2.252 Stereoscopic Color Accuracy Series

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>color_accuracy_stereo_j2c_pt.mxf</td></tr><tr><td rowspan="3">Description</td><td>Stereoscopic picture track file containing five seconds (120 frames) of the chart specified at Annex A.2.12. This is followed by1 minute of each of the 12 color values as a ful frame.There is no disparity between</td></tr><tr><td></td></tr><tr><td>the two eyes.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-4],[SMPTE-431-2]</td></tr></table>

# A.2.253 4K SDR White Lines on Black Background

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_full_sdr_white_lines_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames. Each frame,illustrated at Figure A.2.253, consists of 3 sets of three patches, with the sets stacked vertically and the patches arranged horizontally. Each set consists one patch with horizontalines,one patch with vertical lines and one patch with oblique lines. Each patch contains lines that are 1,2,3and 4 pixel-wide,and that are not antialiased.The lines</td></tr><tr><td>Conforms to</td><td>are D65 full screen white and the background is black. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

![](images/adb822810658638308d13a0d2506fc9d377214afd28bb9df589065893744ab55.jpg)  
Figure A.2.253: Frame with horizontal, vertical and oblique white lines on a black background (not to scale)

# A.2.254 4K SDR Scaling Test Pattern

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_sdr_scaling_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 10s of the 4K frameillustrated at Figure A.2.254, which consists of: (a) on left side of the frame,continuous 1-pixel line segments at various angles and of various colors and a small gray square; and (b) on the right side of the frame,a zone plate with a wavelength of 2 pixels.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

![](images/55bd49045652ffe65e5614d2d5151a7450d1daba2d02f09240977fb1a16948b5.jpg)  
Figure A.2.254: Frame with line segments, uniform gray square and zone plate

# A.2.260 HDR Black to Gray Step Series

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_full_hdr_gray_step_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of a chart showing all gray step values in [DCl-HDR], Table 5.This is followed by 1 minute of each of the 10 values as a ful frame.The layout of each frame follows that of Annex A.2.10.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.261 HDR Black to White Step Series

<table><tr><td>Type MXF j2c</td></tr></table>

<table><tr><td>Filename</td><td>4k_full_hdr_white_step_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of a chart showing all gray step values in [DCl-HDR], Table 4.This is followed by1 minute of each of the 10 values as a ful frame.The layout of each frame fol ows that of Annex A.2.11.</td></tr><tr><td>Conforms to </td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.262 SDR verification pattern

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>sdr_check_j2c_pt.mxf</td></tr><tr><td rowspan="3">Description</td><td>MXFtrack file consisting of the following sequence: (1) 2-second card displaying the word &quot;SDR dark&quot;, (2)</td></tr><tr><td>10 seconds of a frame filed with code values (X&#x27;=O,Y&#x27;=O,Z&#x27;=O),(3) 2-second card displaying the word</td></tr><tr><td>&quot;SDRlight&quot;,and (4) 10 seconds of a frame filled with code values (X&#x27;=2524,Y&#x27;=2546, Z&#x27;=2583).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.263 HDR verification pattern

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>hdr_check_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file consisting of the following sequence: (1) 2-second card displaying the word &quot;HDR dark&quot;,(2)</td></tr><tr><td></td><td>10 seconds of a frame filed with code values (X&quot;=60,Y&quot;=62, Z&quot;=65),(3) 2-second card displaying the word &quot;HDR light&quot;,and (4) 10 seconds of a frame filed with code values (X&quot;=2524,Y&quot;=2546, Z&quot;=2583).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.264 2K Full HDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_full_hdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K fullframes,each filled with pixels with code value (X&quot;=0, Y&quot;=O,Z&quot;=O),with the exception of registration marks at each corner of the frame that use pixels with code value (X&quot;=157, Y&quot;=161, Z&quot;=167),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.265 2K Scope HDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_scope_hdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K scope frames,each filed with pixels with code value (X&quot;=0, Y&quot;=O,Z&quot;=O), with the exception of registration marks at each cornerof the frame that use pixels with code</td></tr></table>

# A.2.266 2K Flat HDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_flat_hdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K flat frames,each filled with pixels with code value (X&quot;=0, Y&quot;=0,Z&quot;=O), with the exception of registration marks at each corner of the frame that use pixels with code value (X&quot;=157, Y&quot;=161, Z&quot;=167),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.267 4K Full HDR Black with Marks

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_full_hdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K fullframes,each filled with pixels with code value (X&quot;=0, Y&quot;=0, Z&quot;=O), with the exception of registration marks at each corner of the frame that use pixels with code value (X&quot;=157, Y&quot;=161, Z&quot;=167),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.268 4K Scope HDR Black with Marks

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_scope_hdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K scope frames,each filed with pixels with code value (X&quot;=0, Y&quot;=0, Z&quot;=O),with the exception of registration marks at each corner of the frame that use pixels with code value (X&quot;=157, Y&quot;=161, Z&quot;=167),as ilustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.269 4K Flat HDR Black with Marks

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_flat_hdr_black_marks_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames,each filed with pixels with code value (X&quot;=0, Y&quot;=O,Z&quot;=O),with the exception of registration marks at each corner of the frame that use pixels with code value (X&quot;=157, Y&quot;=161, Z&quot;=167),as illustrated at Figure A.2.239.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.270 2K Full HDR Black with Active Area

<table><tr><td>Type MXF j2c</td></tr></table>

<table><tr><td>Filename</td><td>2k_full_hdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames. Each frame,illustrated at Figure A.2.245,consis ts of a central rectangular area with dimensions (1440x1080)filed with code value (X&quot;=0,Y&quot;=0,Z&quot;=O).Th e rest of the frameis filed with code value (X&quot;= 2234,Y&quot;=1925,Z&quot;=68). Registration marks with code valu</td></tr><tr><td></td><td>e (X&quot;=157, Y&quot;=161, Z&quot;=167) are located at al four corners of the central rectangular area.</td></tr><tr><td>Conforms to </td><td></td></tr><tr><td></td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr><tr><td></td><td></td></tr></table>

# A.2.271 2K Scope HDR Black with Active Area

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_scope_hdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K scope frames.Each frame,ilustrated at Figure A.2.245, consists of a central rectangular area with dimensions (2048x768) filed with code value (X&quot;=O,Y&quot;=0, Z&quot;=O).The rest of the frame is filled with code value (X&quot;= 2234,Y&quot;=1925,Z&quot;=68). Registration marks with code value (X&quot;=157, Y&quot;=161, Z&quot;=167) are located at allfour corners of the central rectangular area.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.272 2K Flat HDR Black with Active Area

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_flat_hdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 2K flat frames. Each frame,illstrated at Figure A.2.245, consists of a central rectangular area with dimensions (1998x998)filed with code value (X&quot;=0,Y&quot;=0, Z&quot;=O).The rest of the frame is filed with code value (X&quot;= 2234,Y&quot;=1925,Z&quot;=68).Registration marks with</td></tr><tr><td>Conforms to</td><td>code value (X&quot;=157, Y&quot;=161, Z&quot;=167) are located at allfour corners of the central rectangular area. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.273 4K Full HDR Black with Active Area

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_full_hdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K ful frames. Each frame,illustrated at Figure A.2.245, consists of a central rectangular area with dimensions (2880x216O)filled with code value (X&quot;=O,Y&quot;=0,</td></tr><tr><td></td><td>Z&quot;=0).The rest of the frame is filled with code value (X&quot;= 2234,Y&quot;=1925,Z&quot;=68). Registration marks with</td></tr><tr><td>Conforms to</td><td>code value (X&quot;=157,Y&quot;=161, Z&quot;=167) are located at allfour corners of the central rectangular area. [SMPTE-377-1], [SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.274 4K Scope HDR Black with Active Area

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4k_scope_hdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K scope frames.Each frame,ilustrated at Figure A.2.245, consists of a central rectangular area with dimensions (4096×1536) filed with code value (X&quot;=0,Y&quot;=0, Z&quot;=0).The rest of the frame is filed with code value (X&quot;= 2234,Y&quot;=1925,Z&quot;=68). Registration marks with</td></tr><tr><td></td><td>code value (X&quot;=157,Y&quot;=161, Z&quot;=167) are located at allfour corners of the central rectangular area.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.275 4K Flat HDR Black with Active Area

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td> Filename</td><td>4k_flat_hdr_black_active_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains 1 minute of 4K flat frames. Each frame,illustrated at Figure A.2.245, consists of a central rectangular area with dimensions (3996x1996) filed with code value (X&quot;=0,Y&quot;=0, Z&quot;=O).The rest of the frame is filed with code value (X&quot;= 2234,Y&quot;=1925,Z&quot;=68).Registration marks with</td></tr><tr><td>Conforms to</td><td>code value (X&quot;=157, Y&quot;=161, Z&quot;=167) are located at allfour corners of the central rectangular area. [SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

# A.2.276 2K 2D 24 FPS Test

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>2k_2d_24_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Image Track File that contains a 2K 2D image sequence at 24 fps intended to verify that an imaging device displays allimages.The image sequence displays a continuously swinging pendulum. Every even</td></tr><tr><td></td><td>andodd frameislabeledevenandodd,respectively.Every1st,2nd,3rd,4thand5th frameislabeled1, 2,3,4and 5,respectively.A burned-in timecode sequence is displayed in the top-right corner.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.277 2K 2D 48 FPS Test

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2k_2d_48_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.276 but with a 2K 2D image sequence at 48 fps.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.278 2K 2D 60 FPS Test

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2k_2d_60_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.276 but with a 2K 2D image sequence at 60 fps.</td></tr><tr><td></td><td>Conforms to[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.279 2K 2D 96 FPS Test

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2k_2d_96_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.276 but with a 2K 2D image sequence at 96 fps.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.280 2K 2D 120 FPS Test

<table><tr><td>Type</td><td> MXF j2c</td></tr><tr><td>Filename</td><td>2k_2d_120_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.276 but with a 2K 2D image sequence at 120 fps.</td></tr><tr><td>Conforms to[</td><td>[SMPTE-377-1], [SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.281 2K Stereoscopic 24 FPS Test

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>2k_stereo_24_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Same as Annex A.2.276 but with a 2K stereoscopic image sequence at 24 fps,the pendulum popping out of the screen and the words left and right appearing only in the left and right eye,respectively.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-10]</td></tr></table>

# A.2.282 2K Stereoscopic 48 FPS Test

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>2k_stereo_48_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.281 but with a 2K stereoscopic image sequence at 48 fps.</td></tr><tr><td>Conforms to[</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[SMPTE-429-10]</td></tr></table>

# A.2.283 2K Stereoscopic 60 FPS Test

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>2k_stereo_60_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.281 but with a 2K stereoscopic image sequence at 60 fps.</td></tr><tr><td></td><td>Conforms to[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4], [SMPTE-429-10]</td></tr></table>

# A.2.284 4K 2D 24 FPS Test

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4k_2d_24_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td>Same as Annex A.2.276 but with a 4K image sequence at 24 fps,and the word 4K visible only if the 4K resolution layer is decoded.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3], [SMPTE-429-4]</td></tr></table>

# A.2.285 4K 2D 48 FPS Test

<table><tr><td>Type MXF j2c</td><td></td></tr><tr><td>Filename</td><td>4k_2d_48_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.284 but with a 4K 2D image sequence at 48 fps.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.286 4K 2D 60 FPS Test

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_2d_60_fps_j2c_pt.mxf</td></tr><tr><td>Description</td><td> Same as Annex A.2.284 but with a 4K 2D image sequence at 60 fps.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

# A.2.287 24 FPS test timecode

<table><tr><td>Type MXF text</td><td></td></tr><tr><td>Filename</td><td>24_fps_test_tt_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text that matches the burned-in timecode at 2K 2D 24 FPS Test.</td></tr><tr><td>Conforms to[</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr></table>

# A.2.288 48 FPS test timecode

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td>Filename</td><td>48_fps_test_tt_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text that matches the burned-in timecode at 2K 2D 48 FPS Test.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr></table>

# A.2.289 60 FPS test timecode

<table><tr><td>Type MXF text</td></tr></table>

<table><tr><td>Filename</td><td>60_fps_test_tt_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text that matches the burned-in timecode at 2K 2D 60 FPS Test.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr></table>

# A.2.290 96 FPS test timecode

<table><tr><td>Type MXF text</td><td></td></tr><tr><td>Filename</td><td>96_fps_test_tt_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text that matches the burned-in timecode at 2K 2D 96 FPS Test.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr></table>

# A.2.291 120 FPS test timecode

<table><tr><td>Type</td><td>MXF text</td></tr><tr><td> Filename</td><td>120_fps_test_tt_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing timed text that matches the burned-in timecode at 2K 2D 120 FPS Test.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-5]</td></tr></table>

# A.2.292 SDR Dark Gray Scale

<table><tr><td colspan="2">Type MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_sdr_dark_gray_j2c_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing five seconds (120 frames) of a chart showing all gray step values in Table A.2.292.This is followed by the step values,each as a fullframe with a duration of 50 s.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422], [SMPTE-429-3],[SMPTE-429-4]</td></tr></table>

Table A.2.292: Dark Gray Scale X′Y′Z′ 12-bit Codevalues   

<table><tr><td rowspan=1 colspan=1>Step Number</td><td rowspan=1 colspan=1>x&#x27;</td><td rowspan=1 colspan=1>Y&#x27;</td><td rowspan=1 colspan=1>z&#x27;</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>269</td><td rowspan=1 colspan=1>274</td><td rowspan=1 colspan=1>4283</td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>271</td><td rowspan=1 colspan=1>276</td><td rowspan=1 colspan=1>285</td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>273</td><td rowspan=1 colspan=1>278</td><td rowspan=1 colspan=1>287</td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>275</td><td rowspan=1 colspan=1>280</td><td rowspan=1 colspan=1>289</td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>277</td><td rowspan=1 colspan=1>282</td><td rowspan=1 colspan=1>292</td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>279</td><td rowspan=1 colspan=1>284</td><td rowspan=1 colspan=1>293</td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>280</td><td rowspan=1 colspan=1>286</td><td rowspan=1 colspan=1>296</td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>282</td><td rowspan=1 colspan=1>288</td><td rowspan=1 colspan=1>298</td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>284</td><td rowspan=1 colspan=1>290</td><td rowspan=1 colspan=1>300</td></tr></table>

# A.2.293 HDR Dark Gray Scale

<table><tr><td>Type</td><td>MXF j2c</td></tr><tr><td>Filename</td><td>4k_full_hdr_dark_gray_j2c_pt.mxf</td></tr><tr><td>Description</td><td>HDR Picture Track File containing five seconds (120 frames) of a chart showing all gray step values in Table A.2.293.This is followed by the step values, each as a fullframe with a duration of 50 s.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4],[DCI-HDR]</td></tr></table>

Table A.2.293: Dark Gray Scale X″Y″Z″ 12-bit Codevalues   

<table><tr><td rowspan=1 colspan=1>Step Number</td><td rowspan=1 colspan=1>x&quot;</td><td rowspan=1 colspan=1>Y&quot;</td><td rowspan=1 colspan=1>Z&quot;</td></tr><tr><td rowspan=1 colspan=1>1</td><td rowspan=1 colspan=1>177</td><td rowspan=1 colspan=1>181</td><td rowspan=1 colspan=1>188</td></tr><tr><td rowspan=1 colspan=1>2</td><td rowspan=1 colspan=1>178</td><td rowspan=1 colspan=1>182</td><td rowspan=1 colspan=1>189</td></tr><tr><td rowspan=1 colspan=1>3</td><td rowspan=1 colspan=1>179</td><td rowspan=1 colspan=1>183</td><td rowspan=1 colspan=1>190</td></tr><tr><td rowspan=1 colspan=1>4</td><td rowspan=1 colspan=1>180</td><td rowspan=1 colspan=1>184</td><td rowspan=1 colspan=1>191</td></tr><tr><td rowspan=1 colspan=1>5</td><td rowspan=1 colspan=1>181</td><td rowspan=1 colspan=1>185</td><td rowspan=1 colspan=1>192</td></tr><tr><td rowspan=1 colspan=1>6</td><td rowspan=1 colspan=1>182</td><td rowspan=1 colspan=1>186</td><td rowspan=1 colspan=1>193</td></tr><tr><td rowspan=1 colspan=1>7</td><td rowspan=1 colspan=1>183</td><td rowspan=1 colspan=1>187</td><td rowspan=1 colspan=1>194</td></tr><tr><td rowspan=1 colspan=1>8</td><td rowspan=1 colspan=1>184</td><td rowspan=1 colspan=1>188</td><td rowspan=1 colspan=1>195</td></tr><tr><td rowspan=1 colspan=1>9</td><td rowspan=1 colspan=1>185</td><td rowspan=1 colspan=1>189</td><td rowspan=1 colspan=1>196</td></tr><tr><td rowspan=1 colspan=1>10</td><td rowspan=1 colspan=1>186</td><td rowspan=1 colspan=1>190</td><td rowspan=1 colspan=1>197</td></tr><tr><td rowspan=1 colspan=1>11</td><td rowspan=1 colspan=1>187</td><td rowspan=1 colspan=1>191</td><td rowspan=1 colspan=1>198</td></tr><tr><td rowspan=1 colspan=1>12</td><td rowspan=1 colspan=1>188</td><td rowspan=1 colspan=1>192</td><td rowspan=1 colspan=1>199</td></tr><tr><td rowspan=1 colspan=1>13</td><td rowspan=1 colspan=1>189</td><td rowspan=1 colspan=1>193</td><td rowspan=1 colspan=1>200</td></tr><tr><td rowspan=1 colspan=1>14</td><td rowspan=1 colspan=1>190</td><td rowspan=1 colspan=1>194</td><td rowspan=1 colspan=1>201</td></tr><tr><td rowspan=1 colspan=1>15</td><td rowspan=1 colspan=1>191</td><td rowspan=1 colspan=1>195</td><td rowspan=1 colspan=1>203</td></tr><tr><td rowspan=1 colspan=1>16</td><td rowspan=1 colspan=1>192</td><td rowspan=1 colspan=1>196</td><td rowspan=1 colspan=1>204</td></tr><tr><td rowspan=1 colspan=1>17</td><td rowspan=1 colspan=1>193</td><td rowspan=1 colspan=1>197</td><td rowspan=1 colspan=1>205</td></tr></table>

# A.3 Sound

# A.3.1 Introduction

This section defines a set of MXF sound track files. For each track file, a description is given which details the sounds encoded in the file. The sound track files will be combined with image files to make complete compositions (see Annex A.4).

# A.3.2 Sync Count 5.1

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>sync_count_51_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing six channels of audio. Channels 1,2,4,5 and 6 are silent. Channel 3 (Center) contains five seconds (120 frames) of silence folowed by a ten second countdown and five seconds of silence.The countdown consists of ten identical one-second count segments.Each count segment consists of one frame (20o0 samples) encoding of a 1 kHz sine wave at -20 dBFS,followed by 23 frames of silence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Duration</td><td>00:20:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.3 Sync Count 5.1 (Encrypted)

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td> Filename</td><td>sync_count_51_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Annex A.3.2</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SoundFormat 5.1</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> Duration</td><td>00:20:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.4 Sync Count 5.1 48fps

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td> Filename</td><td>sync_count_51_48fps_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing six channels of audio. Channels 1,2,4,5and 6 are silent. Channel 3 (Center) contains five seconds (240 frames) of silence followed by a ten second countdown and five seconds of silence.The countdown consists of ten identical one-second count segments. Each count segment consists of two frames (2000 samples) encoding of a 1 kHz sine wave at -20 dBFS,followed by 46 frames of silence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Duration</td><td>00:20:00</td></tr><tr><td>SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.3.5 Channel I.D. 5.1

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>channel_id_51_pcm_pt.mxf</td></tr><tr><td> Description</td><td>MXF track file containing a repeated voice announcement of the channel label of the respective channel: Left (Channel 1),Center (Channel 3), Right (Channel 2),Left Surround (Channel 5), Right Surround</td></tr><tr><td>Conforms to</td><td>(Channel 6),LFE (Channel 4). Voice announcements are sequential, in the order given here. [SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td> Malformations</td><td></td></tr><tr><td>Meta</td><td></td></tr><tr><td></td><td>SoundFormat t5.1 Duration 00:40:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td></td></tr><tr><td></td><td>24/1</td></tr></table>

# A.3.6 Channel I.D. 1-16

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>channel_id_01-16_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing a sequential voice announcement of the channel number of the respective channel.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormatWTF</td></tr><tr><td>Duration</td><td>01:24:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.7 Pink Noise, 16 Channels

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>pink_noise_1-16_pcm_pt.mxf</td></tr><tr><td>Description</td><td>Pink (1/f) noise at -20 dBFS on sixteen channels,band limited to 22 KHz. Identical,sample-aligned signal must be used on all channels.</td></tr><tr><td>Conforms to [SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td><td></td></tr><tr><td rowspan="5"> Meta</td><td>SoundFormat WTF</td></tr><tr><td>Duration 00:30:00</td></tr><tr><td>SampleRate 48000</td></tr><tr><td>EditRate 24/1</td></tr><tr><td></td></tr></table>

# A.3.8 Pink Noise, 16 Channels, 96 kHz

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>pink_noise_1-16_96khz_pcm_pt.mxf</td></tr><tr><td>Description</td><td>Pink (1/f) noise at -20 dBFS on sixteen channels,band limited to 44 KHz. Identical,sample-aligned signal must be used on all channels.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat tWTF</td></tr><tr><td>Duration</td><td>00:30:00</td></tr><tr><td> SampleRate</td><td>96000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.9 Deleted Section

The section "Pink Noise, 16 Channels, $9 6 ~ \mathsf { k H z }$ (Encrypted)" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.3.10 Maximum Bitrate, 16 Channels, 96 kHz (Encrypted)

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>max_bitrate_1-16_96khz_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF sound track file containing a count to check synchronization between picture and sound, 10 minutes of pink (1/f) noise at -2O dBFS on allsixteen channels,band limited to 44 KHz and a second sync count.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormatWTF</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td> SampleRate</td><td>96000</td></tr></table>

<table><tr><td>EditRate 24/1</td></tr></table>

# A.3.11 1 kHz Sine Wave

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>1_khz_sine_wave_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 1 kHz sine wave on sixteen channels at -20 dBFS.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat WTF</td></tr><tr><td>Duration</td><td>02:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.12 1 kHz Sine Wave, 16 Channels 96kHz

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>1_khz_sine_wave_96khz_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 96kHz sample rate 1 kHz sine wave on sixteen channels at -20 dBFS.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat tWTF</td></tr><tr><td>Duration</td><td>02:00:00</td></tr><tr><td>SampleRate</td><td>96000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.13 400 hz sine wave

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>400_hz_sine_wave_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 4O0 Hz sine wave on six channels at -20 dBfs (dB Full Scale).LFE channel is full-range.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Duration</td><td>02:00:00</td></tr><tr><td>SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.14 Deleted Section

The section "400 hz sine wave (Encrypted)" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.3.15 400 hz sine wave, WTF (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>400_hz_sine_wave_wtf_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing 40o Hz sine wave on sixteen channels at -20 dBfs (dB Full Scale). LFE channel is full-range.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormatWTF</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>02:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.3.16 Silence, 5.1

<table><tr><td>Type</td><td colspan="2"> MXF pcm</td></tr><tr><td>Filename</td><td colspan="2">black_51_pcm_pt.mxf</td></tr><tr><td>Description</td><td colspan="2">MXF track file containing six channels of silence.</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat 5.1</td><td></td></tr><tr><td></td><td>Duration</td><td>02:00:00</td></tr><tr><td></td><td> SampleRate</td><td>48000</td></tr><tr><td></td><td>EditRate</td><td>24/1</td></tr></table>

# A.3.17 Silence, 5.1, 15 minutes

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>black_long_51_pcm_pt.mxf</td></tr><tr><td>Description</td><td colspan="2">MXF track file containing six channels of silence.</td></tr><tr><td>Conforms to</td><td colspan="2">[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat 5.1</td><td></td></tr><tr><td rowspan="3"></td><td>Duration</td><td>00:15:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate 24/1</td><td></td></tr></table>

# A.3.18 Silence, 5.1, 15 minutes (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>black_long_51_pcm_ct.mxf</td></tr><tr><td>Description</td><td>MXF track file containing six channels of silence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1,15 minutes</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:15:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.19 StEM 5.1 Sound

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>StEM_51_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 5.1 sound essence for the DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Duration</td><td>11:31:21</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.20 StEM 5.1 Sound (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>StEM_51_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing 5.1 sound essence for the DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>SoundFormat 5.1</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> Duration</td><td>11:31:21</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.3.21 StEM 5.1 Sound Multi-Reel A (Encrypted)

<table><tr><td>Type</td><td>MXF pcm multi</td></tr><tr><td>Filename</td><td>StEM_51_pcm_multi_A_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of encrypted MXF track files containing 5.1 sound essence for the DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td></td><td>SegmentCount 128</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td></td><td>SegmentDuratior00:05:00</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.22 StEM 5.1 Sound Multi-Reel B (Encrypted)

<table><tr><td>Type MXF pcm multi</td><td></td></tr><tr><td>Filename</td><td>StEM_51_pcm_multi_B_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Aset of encrypted MXF track files containing 5.1 sound essence for the DCl StEM Mini Movie.Identical to StEM_51_pcm_multi_A_ct</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>SegmentCount 128</td><td></td></tr><tr><td>Encryption AES-128</td><td></td></tr><tr><td>SegmentDuratior00:05:00</td><td></td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td>SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.23 StEM 5.1 Sound Multi-Reel A

<table><tr><td>Type</td><td>MXF pcm multi</td></tr><tr><td>Filename</td><td>StEM_51_pcm_multi_A_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of plaintext MXF track files containing 5.1 sound essence for the DCl StEM Mini Movie.128 files, each with a duration of 5 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td></td><td>SegmentCount 128</td></tr><tr><td></td><td>SegmentDuratior00:05:00</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.24 StEM 5.1 Sound Multi-Reel B

<table><tr><td>Type</td><td>MXF pcm multi</td></tr><tr><td>Filename</td><td>StEM_51_pcm_multi_B_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of plaintext MXF track files containing 5.1 sound essence for the DCl StEM Mini Movie.Identical to StEM_51_pcm_multi_A_pt</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td></td><td>SegmentCount 128</td></tr><tr><td></td><td> SegmentDuratior00:05:00</td></tr><tr><td>Duration</td><td>00:10:40:00</td></tr><tr><td>SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.25 StEM 48fps 5.1 Sound

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>StEM_48fps_51_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 5.1 sound essence for the 48 fps DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Duration</td><td>00:51:46</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td> EditRate</td><td>48/1</td></tr></table>

# A.3.26 Deleted Section

The section "FM StEM 5.1 Sound (Encrypted)" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.3.27 FM StEM WTF Sound

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>fm_StEM_wtf_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file for FM testing containing WTF sound essence for the DCl StEM Mini Movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormatWTF</td></tr><tr><td>Duration</td><td>11:31:21</td></tr><tr><td></td><td>SampleRate 48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.28 FM StEM WTF Sound (Encrypted)

<table><tr><td>Type MXF pcm</td></tr><tr><td>Filename fm_StEM_wtf_pcm_ct.mxf</td><td></td></tr><tr><td>Description</td><td>Encrypted MXF track file for FM testing containing WTF sound essence for the DCI StEM Mini Movie.</td></tr><tr><td>Conforms to [SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td><td colspan="2"></td></tr><tr><td rowspan="5">Meta</td><td>SoundFormat WTF</td><td></td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>11:31:21</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.29 Binary Audio FM Bypass WTF Sound (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>binary_audio_fm_bypass_wtf_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file for FM testing containing known binary audio content on 16 channels of WTF format sound essence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td> Meta</td><td>SoundFormatWTF</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>10:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.30 m02 Sound Frame Out Of Order (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td> Filename</td><td>m02_snd_frame_oo_51_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Malformed, encrypted MXF track file containing six channels of 40oHz sine waves.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Malformations1</td><td> The KLV packets containing edit units O1 and O2 are swapped.</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.31 m04 Sound Track File With Wrong TrackFile ID (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>m04_sndtk_wrong_file_pcm_ct.mxf</td></tr><tr><td>Description</td><td>MXFtrack file in which the integrity pack of the 7th frame has the TrackFile ID replaced with a diferent value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.32 m10 Sound track file with bad HMAC (Encrypted)

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>m10_snd_bad_hmac_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Sound track file in which one of the HMAC values for a single frame has been changed.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Malformations</td><td>The file contains a replacement EKLV packet for the seventh frame (index 6).The replacement packet is taken from another track file having a diferent PackageUID but encrypted with the same symmetric key.</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.3.33 m12 Sound Track File With Bad Check Value (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>m12_snd_bad_chuk_pcm_ct.mxf</td></tr><tr><td>Description</td><td>MXF track file containing one EKLV packet with an invalid Check Value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-422],[SMPTE-429-3],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>00:00:05:00</td></tr></table>

<table><tr><td>EditRate 24/1</td></tr></table>

# A.3.34 400 hz sine wave, WTF

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>400_hz_sine_wave_wtf_pcm_pt.mxf</td></tr><tr><td>Description</td><td>MXF track file containing 400 Hz sine wave on sixteen channels at -20 dBfs (dB Full Scale). LFE channel is full-range.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr><tr><td>Meta</td><td>SoundFormatWTF</td></tr><tr><td>Duration</td><td>02:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.35 Silence, 5.1 (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>black_51_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file containing six channels of silence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td>Prerequisites</td><td> Silence, 5.1</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td></td><td>Encryption AES-128</td></tr><tr><td>Duration</td><td>02:00:00</td></tr><tr><td>SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>24/1</td></tr></table>

# A.3.36 Silence, 5.1, 48 fps (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td> Filename</td><td>black_51_48fps_pcm_ct.mxf</td></tr><tr><td>Description</td><td>48 Frames per second (fps) MXF track file containing six channels of silence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td>Meta</td><td>SoundFormat 5.1</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td> Duration</td><td>00:02:00:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td>EditRate</td><td>48/1</td></tr></table>

# A.3.37 StEM 5.1 Sound Multi-Reel C (Encrypted)

<table><tr><td>Type</td><td>MXF pcm multi</td></tr><tr><td>Filename</td><td>StEM_51_pcm_multi_C_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of encrypted MXF track files containing 5.1 sound essence for the DCl StEM Mini Movie. 64 files, each with a duration of 1 second.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-429-4]</td></tr><tr><td>Meta</td><td>SoundFormat5.1</td></tr><tr><td></td><td>SegmentCount 64</td></tr><tr><td>Encryption</td><td>AES-128</td></tr><tr><td></td><td>SegmentDuratior00:01:00</td></tr><tr><td>Duration</td><td>00:01:04:00</td></tr><tr><td> SampleRate</td><td>48000</td></tr><tr><td> EditRate</td><td>24/1</td></tr></table>

# A.3.38 Sync Count OBAE (Encrypted)

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>sync_count_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.39</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.39 Sync Count OBAE

<table><tr><td colspan="2">Type MXF obae</td></tr><tr><td>Filename</td><td>sync_count_obae_pt.mxf</td></tr><tr><td>Description</td><td>Immersive Audio track file where the center channel of the 9.1OH bed contains five seconds (12O frames) of silence followed by a ten second countdown and five seconds of silence.The countdown consists of</td></tr><tr><td rowspan="2"></td><td>ten identical one-second count segments. Each count segment consists of one frame (20o0 samples) encoding of a 1 kHz sine wave at -20 dBFS, followed by 23 frames of silence.</td></tr><tr><td></td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.40 Main Sound for Sync Count OBAE (Encrypted)

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>sync_count_obae_ms_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.41.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.41 Main Sound for Sync Count OBAE

<table><tr><td colspan="2">MXF pcm</td></tr><tr><td>Type Filename</td><td>sync_count_obae_ms_pt.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19,where the FSK synchronization signal is intended to synchronize playback of Annex A.3.39.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.42 Main Sound for StEM OBAE (Encrypted)

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_ms_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.43.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.43 Main Sound for StEM OBAE

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_ms_pt.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19,where the FSK synchronization signal is intended to synchronize playback of Annex A.3.45.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.44 StEM OBAE (Encrypted)

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>StEM_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.45</td></tr></table>

# A.3.45 StEM OBAE

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>StEM_obae_pt.mxf</td></tr><tr><td>Description</td><td>Immersive Audio track file for the StEM mini-movie.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

A.3.46 M28 Sound Track File with Malformed Integrity Pack: Missing MIC item (Encrypted)   

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>m28_integrity_snd_mic_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Silence,5.1,15 minutes (Encrypted) but the 1,441th edit unit is missing the MIC item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the MlC item</td></tr></table>

A.3.47 M30 Sound Track File with Malformed Integrity Pack: Missing TrackFileID item (Encrypted)   

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>m30_integrity_snd_tfid_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Silence,5.1,15 minutes (Encrypted)but the 1,441th edit unit is missing the TrackFilelD item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the TrackFilelD item</td></tr></table>

# A.3.48 M29 Sound Track File with Malformed Integrity Pack: Missing SequenceNumber item (Encrypted)

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td>Filename</td><td>m29_integrity_snd_snum_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Silence,5.1,15 minutes (Encrypted) but the1,441th edit unit is missing the SequenceNumber item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr><tr><td></td><td> MalformationsThe 1,441th edit unit is missing the SequenceNumber item</td></tr></table>

A.3.49 M20 Sound Track File with Malformed Integrity Pack: Missing MIC item (OBAE) (Encrypted)   

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>m20_integrity_obae_ms_mic_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file, contents are identical to Main Sound for Silence,OBAE,15 minutes (Encrypted) but the 1,441th edit unit is missing the MIC item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the MlC item</td></tr></table>

A.3.50 M22 Sound Track File with Malformed Integrity Pack: Missing TrackFileID item (OBAE) (Encrypted)   

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>m22_integrity_obae_ms_tfid_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Main Sound for Silence,OBAE,15 minutes (Encrypted) but the 1,441th edit unit is missing the TrackFilelD item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the TrackFilelD item</td></tr></table>

# A.3.51 M21 Sound Track File with Malformed Integrity Pack: Missing SequenceNumber item (OBAE) (Encrypted)

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td>Filename</td><td>m21_integrity_obae_ms_snum_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file, contents are identical to Main Sound for Silence,OBAE,15 minutes (Encrypted) but the 1,441th edit unit is missng the SequenceNumber item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the SequenceNumber item</td></tr></table>

A.3.52 M19 OBAE Track File with Malformed Integrity Pack: Missing MIC item (Encrypted)   

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>m19_integrity_obae_mic_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identicalto Silence, OBAE,15 minutes (Encrypted) but the 1,441th edit unit is missing the MIC item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

A.3.53 M24 OBAE Track File with Malformed Integrity Pack: Missing TrackFileID item (OBAE) (Encrypted)   

<table><tr><td colspan="2">Type MXF obae</td></tr><tr><td> Filename</td><td>m24_integrity_obae_tfid_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXFtrack file,contents are identical to Silence,OBAE,15 minutes (Encrypted) but the 1,441th edit unit is missing the TrackFilelD item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the TrackFilelD item</td></tr></table>

A.3.54 M23 OBAE Track File with Malformed Integrity Pack: Missing SequenceNumber item (Encrypted)   

<table><tr><td>Type MXF obae</td><td></td></tr><tr><td>Filename</td><td>m23_integrity_obae_snum_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Silence,OBAE,15 minutes (Encrypted) but the 1,441th edit unit is missing the SequenceNumber item.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe 1,441th edit unit is missing the SequenceNumber item</td></tr></table>

# A.3.55 StEM OBAE Multi-Reel C (Encrypted)

<table><tr><td>Type MXF obae multi</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_multi_C_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Aset of encrypted track files containing OBAE essence for the DCl StEM Mini Movie. 64 files,each with a duration of 1 second.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-429-18]</td></tr></table>

# A.3.56 Main Sound for StEM OBAE Multi-Reel C (Encrypted)

A.3.57 M40 OBAE Track File with Frame-out-of-order error (Encrypted)   

<table><tr><td>Type MXF pcm multi</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_ms_multi_C_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of encrypted sound track files,where the FSK synchronization signal is intended to synchronize playback of Annex A.3.55. 64 files,each with a duration of 1 second.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>m40_obae_frame_oo_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Sync Count OBAE but the KLV packets for the 1st and 2nd edit units are swapped.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr><tr><td></td><td> MalformationsThe 1st and 2nd edit units contain out-of-order Sequence Number item values.</td></tr></table>

# A.3.58 M41 OBAE Track File With Wrong TrackFile ID (Encrypted)

<table><tr><td>Type</td><td> MXF obae</td></tr><tr><td>Filename</td><td>m41_obae_wrong_file_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Sync Count OBAEbut with the TrackFile ID item value of the 7th edit unit replaced with a different value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe TrackFile ID item value of the 7th edit unitis not equal to the identifier of the Track File.</td></tr></table>

# A.3.59 Sync Count OBAE with MIC Key (Encrypted)

<table><tr><td>Type MXF obae mkey</td><td></td></tr><tr><td>Filename</td><td>sync_count_obae_mkey_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXFtrack file,contents are identical to Sync Count OBAE,with the MIC item value computed using the MIC Key c5 9a f6 6f bd e0 70 39 ba 36 2c 62 e8 21 e6 02.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6],[DCI-DCSS]</td></tr></table>

# A.3.60 M43 OBAE Track File With Bad Check Value (Encrypted)

<table><tr><td>Type MXF obae</td><td></td></tr><tr><td>Filename</td><td>m43_obae_bad_chuk_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Sync Count OBAE but with the Check Value of the 7th edit unit replaced with an invalid value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe Check Value value of the 7th edit unit is invalid.</td></tr></table>

# A.3.61 Deleted Section

The section "Sync Count 5.1 with KDM-Borne MIC Key" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

A.3.62 Sync Count 5.1 with KDM-Borne MIC Key (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>sync_count_51_pcm_mkey_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to AnnexA.3.2 but with KDM-borne MIC Keys.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-429-3],[SMPTE-382],[SMPTE-429-6]</td></tr></table>

# A.3.63 M44 OBAE Track File With Bad HMAC value (Encrypted)

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>m44_obae_bad_hmac_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted MXF track file,contents are identical to Sync Count OBAE but with the HMAC value of the 7th edit unit replaced with an invalid value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr><tr><td></td><td>MalformationsThe HMAC value of the 7th edit unit is invalid.</td></tr></table>

# A.3.64 OBAE Tone Multi-Reel (Encrypted)

<table><tr><td>Type MXF obae multi</td><td></td></tr><tr><td>Filename</td><td>OBAE_tone_multi_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Sequence of 20 Encrypted OBAE Track Files,each 1 second long,whose IA Frame contents,when concatenated, form a single continuous Immersive Audio bitstream.The Immersive Audio bitstream</td></tr><tr><td></td><td>consists of (a) 9.1OH bed channels,each containing a 400 Hz sine wave tone (-20 dBFS),and (b) one stationary object, using a 40o Hz sine wave tone (-20 dBFS).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.65 Deleted Section

The section "OBAE Tone Multi-Reel" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.3.66 Main Sound for OBAE Tone Multi-Reel (Encrypted)

<table><tr><td>Type</td><td> MXF pcm multi</td></tr><tr><td>Filename</td><td>OBAE_tone_multi_ms_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Sequence of Encrypted Sound Track Files,each as specified in SMPTE ST 429-19, where the FSK synchronization signal is intended to synchronize playback of Annex A.3.65.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.67 Deleted Section

The section "Main Sound for OBAE Tone Multi-Reel" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.3.68 Audio Tone Multi-Reel (Encrypted)

<table><tr><td>Type MXF pcm multi</td><td></td></tr><tr><td>Filename</td><td>audio_tone_multi_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Sequence of 20 encrypted audio track files,each 1 second long, whose contents,when concatenated, consists of a continuous 400 Hz sine wave on sixteen channels at -20 dBfs (dB Full Scale).The LFE channel is full-range.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-6],[SMPTE-382]</td></tr></table>

# A.3.69 Deleted Section

The section "Audio Tone Multi-Reel" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.3.70 Main Sound for Sync Count (48fps) OBAE

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td> Filename</td><td>sync_count_48fps_obae_ms_pt.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19,where the FSK synchronization signal is intended to synchronize playback of Annex A.3.71.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.71 Sync Count (48fps) OBAE

<table><tr><td>Type MXF obae</td><td></td></tr><tr><td>Filename</td><td>sync_count_48fps_obae_pt.mxf</td></tr><tr><td>Description</td><td>Identical content to Annex A.3.39,but framed at 48 fps.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.72 400 hz sine wave (OBAE)

<table><tr><td>Type MXF obae</td><td></td></tr><tr><td>Filename</td><td>400_hz_sine_wave_obae_pt.mxf</td></tr><tr><td>Description</td><td>The Immersive Audio bitstream consists of (a) 9.1OH bed channels,each containing a 400 Hz sine wave tone (-20 dBFS),and (b) one stationary object located on the ceiling (z=1),using a 40o Hz sine wave tone (-20 dBFS).</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.73 400 hz sine wave (OBAE) (Encrypted)

<table><tr><td>Type MXF obae</td></tr></table>

<table><tr><td>Filename</td><td>400_hz_sine_wave_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.72</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.74 Main Sound for 400 hz sine wave (OBAE)

<table><tr><td>Type MXF pcm</td><td></td></tr><tr><td>Filename</td><td>400_hz_sine_wave_obae_ms_pt.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19 that contains only an FSK synchronization signal intended to synchronize playback of Annex A.3.72.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.75 FM StEM OBAE

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>fm_StEM_obae_pt.mxf</td></tr><tr><td>Description</td><td>Intended to accompany the DCl StEM Mini Movie for FM testing.The Immersive Audio bitstream consists of (a) 9.1OH bed channels, each containing a 40o Hz sine wave tone (-20 dBFS),and (b) one object,</td></tr><tr><td></td><td>using a 40o Hz sine wave tone (-20 dBFS), whose trajectory uniformly covers the unit hemisphere.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.76 FM StEM OBAE (Encrypted)

<table><tr><td>Type MXF obae</td><td></td></tr><tr><td>Filename</td><td>fm_StEM_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.75</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.77 Main Sound for FM StEM OBAE

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td>Filename</td><td>fm_StEM_obae_ms_pt.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19,that contains only an FSK synchronization signal intended to synchronize playback of Annex A.3.75.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.78 StEM OBAE Multi-Reel A

<table><tr><td colspan="2">Type MXF obae multi</td></tr><tr><td>Filename StEM_obae_multi_A_pt_&lt;segment&gt;.mxf</td><td></td></tr><tr><td>Description</td><td>A set of plaintext Immersive Audio track files for the StEM mini-movie.128 files,each with a duration of 5 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.79 Main Sound for StEM OBAE Multi-Reel A

<table><tr><td>Type MXF pcm multi</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_ms_multi_A_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>A set of plaintext Sound Track Files,each as specified in [SMPTE-429-19],where the FSK synchronization signal is intended to synchronize playback of Annex A.3.78.128 files,each with a duration of 5 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.80 StEM OBAE Multi-Reel B

<table><tr><td>Type</td><td>MXF obae multi</td></tr><tr><td>Filename</td><td>StEM_obae_multi_B_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Set of Track Files whose essence and segmentation are identical to those at Annex A.3.78.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.81 Main Sound for StEM OBAE Multi-Reel B

<table><tr><td>Type</td><td> MXF pcm multi</td></tr><tr><td> Filename</td><td>StEM_obae_ms_multi_B_pt_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Set of Track Files whose essence and segmentation are identical to those at Annex A.3.79.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.82 StEM OBAE Multi-Reel A (Encrypted)

<table><tr><td>Type MXF obae multi</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_multi_A_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.78,where the same cryptographic key is used for every 2 consecutive Track Files,resulting in 64 distinct cryptographic keys being used.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.83 Main Sound for StEM OBAE Multi-Reel A (Encrypted)

Type MXF pcm multi

<table><tr><td>Filename StEM_obae_ms_multi_A_ct_&lt;segment&gt;.mxf</td><td></td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.79,where the same cryptographic key is used for every 2 consecutive Tra ck Files,resulting in 64 distinct cryptographic keys being used.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.84 StEM OBAE Multi-Reel B (Encrypted)

<table><tr><td>Type MXF obae multi</td><td></td></tr><tr><td>Filename</td><td>StEM_obae_multi_B_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.80,where the same cryptographic key is used for every 2 consecutive Track Files,resulting in 64 distinct cryptographic keys being used.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.85 Main Sound for StEM OBAE Multi-Reel B (Encrypted)

<table><tr><td>Type MXF pcm multi</td><td></td></tr><tr><td> Filename</td><td>StEM_obae_ms_multi_B_ct_&lt;segment&gt;.mxf</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.3.81,where the same cryptographic key is used for every 2 consecutive Track Files,resulting in 64 distinct cryptographic keys being used.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.86 Maximum Bitrate OBAE 48 fps (Encrypted)

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td>Filename</td><td>maximum_bitrate_48Hz_obae_obae_ct.mxf</td></tr><tr><td>Description</td><td>Intended to accompany StEM 2K 48 fps.The Immersive Audio bitstream has a duration of 640s, has a frame rate of 48 Hz and each frame is the maximum size specified in [SMPTE-429-18].</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.87 Main Sound for Maximum Bitrate OBAE 48 fps (Encrypted)

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>maximum_bitrate_48Hz_obae_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19, that contains only an FSK synchronization signal intended to synchronize playback of Annex A.3.86.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.88 Maximum Bitrate OBAE (Encrypted)

<table><tr><td>Type</td><td>MXF obae</td></tr><tr><td> Filename</td><td>maximum_bitrate_24Hz_obae_obae_ct.mxf</td></tr><tr><td>Description</td><td>Intended to accompany StEM 2K.The Immersive Audio bitstream has a duration of 640s, has aframe rate of 24 Hz and each frame is the maximum size specified in [SMPTE-429-18].</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3], [SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.89 Main Sound for Maximum Bitrate OBAE (Encrypted)

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td>Filename</td><td>maximum_bitrate_24Hz_obae_pcm_ct.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19,that contains only an FSK synchronization signal intended to synchronize playback of Annex A.3.88.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.90 OBAE Rendering Test

<table><tr><td>Type MXF obae</td><td></td></tr><tr><td> Filename</td><td>obae_render_test_obae_pt.mxf</td></tr><tr><td>Description</td><td>Exercises selected OBAE bitstream capabilities.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18]</td></tr></table>

# A.3.91 Main Sound for OBAE Rendering Test

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td>Filename</td><td>obae_render_test_ms_pt.mxf</td></tr><tr><td>Description</td><td>Sound Track File as specified in SMPTE ST 429-19,that contains only an FSK synchronization signal intended to synchronize playback of Annex A.3.90.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.92 Silence w/ HI/VI

<table><tr><td>Type</td><td> MXF pcm</td></tr><tr><td> Filename</td><td>obae_render_test_ms_silence_pt.mxf</td></tr><tr><td>Description</td><td> Sound Track File that contains silence on all channels but HI/VI.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr></table>

# A.3.93 Silence, OBAE, 15 minutes (Encrypted)

<table><tr><td>Type MXF obae</td></tr></table>

<table><tr><td>Filename</td><td>black_long_obae_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted Immersive Audio Track File that contains an Immersive Audio bitstream with a duration of 900s long and a frame rate of 24 Hz.The Immersive Audio bitstream contains no objects and has a single 9.1O</td></tr><tr><td></td><td>H bed that contains silence.</td></tr><tr><td>Conforms to </td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-429-18],[SMPTE-429-6]</td></tr></table>

# A.3.94 Main Sound for Silence, OBAE, 15 minutes (Encrypted)

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td>Filename</td><td>black_long_obae_ms_ct.mxf</td></tr><tr><td>Description</td><td>Encrypted Sound Track File as specified in SMPTE ST 429-19,that contains only an FSK synchronization signal intended to synchronize playback of Annex A.3.93.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382],[SMPTE-429-6],[SMPTE-430-12],[SMPTE-429-19]</td></tr></table>

# A.3.95 24 FPS test

<table><tr><td colspan="2">MXF pcm</td></tr><tr><td>Type Filename</td><td>24_fps_test_pcm_pt.mxf</td></tr><tr><td>Description</td><td>24 FPS Sound Track File where the words &quot;left&quot; and &quot;right&quot; are spoken (from the center speaker) as the pendulum of 2K 2D 24 FPS Test reaches the extreme left and right ofits trajectory,respectively.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1], [SMPTE-429-3],[SMPTE-382]</td></tr></table>

# A.3.96 48 FPS test

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td>Filename</td><td>48_fps_test_pcm_pt.mxf</td></tr><tr><td>Description</td><td>48 FPS Sound Track File where the words &quot;left&quot; and &quot;right&quot; are spoken (from the center speaker) as the pendulum of 2K 2D 48 FPS Test reaches the extreme left and right of its trajectory,respectively.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr></table>

# A.3.97 60 FPS test

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>60_fps_test_pcm_pt.mxf</td></tr><tr><td>Description</td><td>60 FPS Sound Track File where the words &quot;left&quot; and &quot;right&quot; are spoken (from the center speaker) as the pendulum of 2K 2D 60 FPS Test reaches the extreme left and right of its trajectory,respectively.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr></table>

# A.3.98 96 FPS test

<table><tr><td>Type</td><td>MXF pcm</td></tr><tr><td>Filename</td><td>96_fps_test_pcm_pt.mxf</td></tr><tr><td>Description</td><td>96 FPS Sound Track File where the words &quot;left&quot; and &quot;right&quot; are spoken (from the center speaker) as the pendulum of 2K 2D96 FPS Test reachesthe extreme left and right of its trajectory, respectively.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3],[SMPTE-382]</td></tr></table>

# A.3.99 120 FPS test

<table><tr><td colspan="2">Type MXF pcm</td></tr><tr><td> Filename</td><td>120_fps_test_pcm_pt.mxf</td></tr><tr><td>Description</td><td>120 FPS Sound Track File where the words &quot;left&quot; and &quot;right&quot; are spoken (from the center speaker) as the pendulum of 2K 2D120 FPS Test reaches the extreme leftand right of its trajectory,respectively.</td></tr><tr><td>Conforms to</td><td>[SMPTE-377-1],[SMPTE-429-3], [SMPTE-382]</td></tr></table>

# A.4 D-Cinema Packages

# A.4.1 Introduction

This section defines a set of D-Cinema Compositions and D-Cinema Packages. The Compositions depend upon the track files created in Annex A.2 and Annex A.3. The Packages contain the Compositions for ingest.

# A.4.2 DCI 2K Sync Test

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesSync Count, Sync Count 5.1</td></tr></table>

# A.4.3 DCI 2K Sync Test (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesSync Count (Encrypted), Sync Count 5.1 (Encrypted)</td></tr></table>

# A.4.4 DCI 2K Sync test with Subtitles

<table><tr><td>Type CPL</td></tr><tr><td>Filename sync_test_with_subs.cpl.xml</td></tr></table>

<table><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td> Sync Count with Subtitle Reticles, Sync Count 5.1,Sync Count Text</td></tr></table>

# A.4.5 DCI 2K Sync test with Subtitles (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>sync_test_with_subs_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesSync Count with Subtitle Reticles (Encrypted),Sync Count5.1 (Encrypted),Sync CountText (Encrypted)</td></tr></table>

# A.4.6 DCI 2K Sync Test (48fps)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>sync_test_48fps.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td> Sync Count, 48fps, Sync Count 5.1 48fps</td></tr><tr><td>Meta</td><td>EditRate 48/1</td></tr></table>

# A.4.7 4K Sync Test

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4K_sync_test.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites4K Sync Count, Sync Count 5.1</td></tr></table>

# A.4.8 DCI 5.1 Channel Identification

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>channel_id_51_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>银 Channel I.D. 5.1, Channel I.D.5.1</td></tr></table>

# A.4.9 DCI 1-16 Numbered Channel Identification

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>channel_id_01-16.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr></table>

# A.4.10 DCI NIST Frame with silence

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>nist_pattern_black_audio.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites&quot;NIST&quot; 2K Test Pattern, Silence, 5.1</td></tr></table>

# A.4.11 4K DCI NIST Frame with silence

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4K_nist_pattern.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites&quot;NIST&quot; 4K Test Pattern, Silence,5.1</td><td></td></tr></table>

# A.4.12 DCI NIST Frame with Pink Noise

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>nist_pattern_pink_noise.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites&quot;NIST&quot; 2K Test Pattern, Pink Noise,16 Channels</td></tr></table>

# A.4.13 DCI NIST Frame with 1 kHz tone (-20 dB fs)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>nist_pattern_1k.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites&quot;NIST&quot; 2K Test Pattern,1 kHz Sine Wave</td></tr></table>

# A.4.14 DCI NIST Frame with Pink Noise (96 kHz)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>nist_pattern_pink_noise_96k.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>&quot;NIST&quot; 2K Test Pattern,Pink Noise,16 Channels,96 kHz</td></tr></table>

# A.4.15 DCI NIST Frame with 1 kHz tone (-20 dB fs, 96kHz)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>nist_pattern_1k_96k.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>&quot;NIST&quot; 2K Test Pattern,1 kHz Sine Wave,16 Channels 96kHz</td></tr></table>

# A.4.16 DCI NIST Frame no sound files

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>nist_pattern_no_audio.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites&quot;NIST&quot; 2K Test Pattern</td></tr></table>

# A.4.17 DCI 2K Image with Frame Number Burn In

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>frame_num_burn_in.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesDCl Numbered Frame Sequence,Silence, 5.1,15 minutes</td></tr></table>

# A.4.18 DCI 2K Image with Frame Number Burn In (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>frame_num_burn_in_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesDCl Numbered Frame Sequence (Encrypted), Silence,5.1,15 minutes (Encrypted)</td></tr></table>

# A.4.19 DCI 2K Image with Frame Number Burn In (Flat)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>frame_count_flat_2_reels.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesDCl Flat Transition Sequence, Silence, 5.1</td></tr></table>

# A.4.20 DCI 2K Image with Frame Number Burn In (Scope)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>frame_count_scope_2_reels.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>DCI Scope Transition Sequence, Silence, 5.1</td></tr></table>

# A.4.21 DCI 2K StEM

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>2K_StEM_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of the StEM 2K image and 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K, StEM 5.1 Sound</td></tr></table>

# A.4.22 DCI 2K StEM (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition consisting of the encrypted StEM 2K image and encrypted 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K (Encrypted), StEM 5.1 Sound (Encrypted)</td></tr></table>

# A.4.23 DCI 2K StEM Test Sequence

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_sequence_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of six (6) reels. Each reel is composed of the StEM 2K image and 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM2K,StEM5.1 Sound</td></tr></table>

# A.4.24 DCI 2K StEM Test Sequence (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_sequence_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition consisting of six (6) reels. Each reel is composed of the encrypted StEM 2K image and encrypted 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K (Encrypted), StEM 5.1 Sound (Encrypted)</td></tr></table>

# A.4.25 DCI 2K 48fps StEM

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_48fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of the StEM 2K 48 fps image and 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K 48 fps,StEM 48fps 5.1 Sound</td></tr></table>

# A.4.26 128 Reel Composition, "A" Series

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2K_StEM_128_a_reels_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of one hundred and twenty eight (128) reels. Each reelis composed of part of the plaintext StEM 2K image and plaintext 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K Multi-ReelA, StEM 5.1 Sound Multi-Reel A</td></tr></table>

# A.4.27 128 Reel Composition, "B" Series

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_128_b_reels_pt.cpl.xml</td></tr><tr><td>Description</td><td>Aplaintext composition consisting of one hundred and twenty eight (128) reels.Each reel is composed of part of the plaintext StEM 2K image and plaintext 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K Multi-Reel B,StEM 5.1 Sound Multi-Reel B</td></tr></table>

# A.4.28 128 Reel Composition, "A" Series (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_128_a_reels_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition consisting of one hundred and twenty eight (128) reels.Each reel is composed of part of the encrypted StEM 2K image and encrypted 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K Multi-Reel A (Encrypted), StEM 5.1 Sound Multi-Reel A (Encrypted)</td></tr></table>

# A.4.29 128 Reel Composition, "B" Series (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_128_b_reels_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition consisting of one hundred and twenty eight (128)rels. Each reel is composed of part of the encrypted StEM 2K image and encrypted 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td> Prerequisites</td><td>StEM 2K Multi-Reel B (Encrypted), StEM 5.1 Sound Multi-Reel B (Encrypted)</td></tr></table>

# A.4.30 64 Reel Composition, 1 Second Reels (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_64_1_second_reels_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition consisting of sixty four (64) reels,each with a duration of 1 second.Each reel is composed of part of the encrypted StEM 2K image and encrypted 5.1 sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K Multi-Reel C (Encrypted), StEM 5.1 Sound Multi-Reel C (Encrypted)</td></tr></table>

# A.4.31 2K FM Application Constraints (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_constraints_ct.cpl.xml</td></tr><tr><td>Description</td><td>Acomposition consisting of FM testing instructions and both encrypted and plaintext StEM 2K image and 16 channel WTF format sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>FM Constraints Begin (Plaintext),FM Constraints Begin (Encrypted),FM Constraints End (Plaintext),FM Constraints End (Encrypted),400 hz sine wave,WTF (Encrypted),400 hz sine wave,WTF,StEM 2K (Encrypted), StEM 2K,FM StEM WTF Sound,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.32 2K FM Control Granularity - No FM (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_no_fm.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing the encrypted StEM 2K image and encrypted 16 channel WTF format sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave,WTF (Encrypted), StEM 2K (Encrypted),FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.33 2K FM Control Granularity - Image Only FM (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_only_fm.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing the FM encrypted StEM 2K image and encrypted 16 channel WTF format sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),40o hz sine wave,WTF (Encrypted),StEM 2K (Encrypted),FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.34 2K FM Control Granularity - Sound Only FM (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_sound_only_fm.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing the encrypted StEM 2K image and encrypted 16 channel WTF format sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave,WTF (Encrypted), StEM 2K (Encrypted),FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.35 2K FM Control Granularity - Image and Sound FM (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>2K_fm_control_granularity_image_and_sound_fm.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing of the encrypted StEM 2K image and encrypted 16 channel WTF format sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave,WTF (Encrypted), StEM 2K (Encrypted),FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.36 2K FM Payload (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_payload_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition for FM detection containing the encrypted StEM 2K image and encrypted 16 channel WTF format sound track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>2KFM Payload Begin (Encrypted),2K FM Payload End (Encrypted),400 hz sine wave,WTF (Encrypted), StEM 2K (Encrypted),FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.37 Binary Audio Forensic Marking Bypass Test (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>binary_audio_fm_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted 48 kHz sound track file with 16 channels of audio in WTF format.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesBinary Audio FM Bypass,Binary Audio FM Bypass WTF Sound (Encrypted)</td></tr></table>

# A.4.38 Selective Audio FM - All FM (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>selective_audio_fm_allfm_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted sound track file with 16 channels of audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Selective FM Begin,Selective FM End,400 hz sine wave,WTF (Encrypted), StEM2K,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.39 Selective Audio FM - No FM (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>selective_audio_fm_no-fm_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted sound track file with 16 channels of audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Selective FM Begin,Selective FM End,400 hz sine wave,WTF (Encrypted),StEM 2K,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.40 Selective Audio FM - Not Above Channel 6 (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>selective_audio_fm_6ch_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted sound track file with 16 channels of audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Selective FM Begin,Selective FM End,400 hz sine wave,WTF (Encrypted),StEM 2K,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.41 Selective Audio FM - Not Above Channel 8 (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>selective_audio_fm_8ch_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted sound track file with 16 channels of audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Selective FM Begin, Selective FM End,400 hz sine wave,WTF (Encrypted), StEM 2K,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.42 Selective Audio FM - Not Above Channel 10 (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>selective_audio_fm_10ch_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted sound track file with 16 channels of audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Selective FM Begin,Selective FM End,400 hz sine wave,WTF (Encrypted),StEM 2K,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.43 Selective Audio FM - Not Above Channel 17 (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>selective_audio_fm_17ch_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing an encrypted sound track file with 16 channels of audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Selective FM Begin,Selective FM End,400 hz sine wave,WTF (Encrypted),StEM 2K,FM StEM WTF Sound (Encrypted)</td></tr></table>

# A.4.44 2K DCI Maximum Bitrate Composition (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_max_bitrate_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encrypted composition containing picture and sound track files of the maximum allowable bitrate.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>2K Picture Track File, Maximum Bitrate,Maximum Bitrate,16 Channels, 96 kHz (Encrypted)</td></tr></table>

# A.4.45 4K DCI Maximum Bitrate Composition (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4K_max_bitrate_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encrypted composition containing picture and sound track files of the maximum allowable bitrate.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td> 4K Picture Track File, Maximum Bitrate,Maximum Bitrate,16 Channels,96 kHz (Encrypted)</td></tr></table>

# A.4.46 End of Engagement - Past Time Window Extension (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>holdover_long_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition with duration of 6 hours and 11 minutes.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStEM 2K (Encrypted), StEM 5.1 Sound (Encrypted)</td></tr></table>

# A.4.47 End of Engagement - Within Time Window Extension (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>holdover_short_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition with duration of 5 hours and 59 minutes and 30 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted),StEM 5.1 Sound (Encrypted)</td></tr></table>

# A.4.48 Deleted Section

The section "Multi-line Subtitle Test" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.49 Deleted Section

The section "Multi-line PNG Subtitle Test" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.50 Deleted Section

The section "Subtitle Test Part 1" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.51 Deleted Section

The section "Subtitle Test Part $2 "$ was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.52 Deleted Section

The section "Subtitle Test Part $3 "$ was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.53 DCI Black Spacer - 5 seconds

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>black_spacer_5s.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesBlack (Empty Frame), Silence, 5.1</td></tr></table>

# A.4.54 White Frame Sequence

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>white_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7], [SMPTE-431-1]</td></tr><tr><td></td><td>PrerequisitesWhite (White Frame), Silence, 5.1</td></tr></table>

# A.4.55 Intra-Frame Contrast Sequence

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>checkerboard_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-2]</td></tr><tr><td></td><td>PrerequisitesIntra-Frame Contrast Sequence, Silence, 5.1</td></tr></table>

# A.4.56 Sequential Contrast and Uniformity Sequence

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sequential_contrast_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-2]</td></tr><tr><td></td><td>PrerequisitesSequential Contrast Sequence, Silence, 5.1</td></tr></table>

# A.4.57 DCI Gray Steps

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td> gray_step.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesBlack to Gray Step Series, Silence, 5.1,15 minutes</td></tr></table>

# A.4.58 DCI White Steps

<table><tr><td>Type CPL</td></tr></table>

<table><tr><td>Filename</td><td>white_step.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Black to White Step Series, Silence,5.1,15 minutes</td></tr></table>

# A.4.59 DCI 2K Moving Gradient

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>moving-gradient-white.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesDCl_gradient_step_s_white_j2c_pt, Silence, 5.1</td></tr></table>

# A.4.60 Deleted Section

The section "DCI 2K Moving Gradient" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.61 Color Accuracy Series

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>color_accuracy_pt.cpl.xml</td></tr><tr><td>Description</td><td>Composition containing five seconds (120 frames) of a chart showing all color values for the test in Section 7.5.12.This is followed by 1 minute of each of the 12 color values as a full frame.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesColor Accuracy Series, Silence,5.1,15 minutes</td></tr></table>

# A.4.62 4K Color Accuracy Series

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>4K_color_accuracy_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K composition containing contents identical to Annex A.4.61</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites4K Color Accuracy Series, Silence, 5.1, 15 minutes</td></tr></table>

# A.4.63 Pixel Structure Pattern N 2k

<table><tr><td colspan="2">Type CPL</td></tr><tr><td>Filename</td><td>pixel_structure_N_2k_pt.cpl.xml</td></tr><tr><td>Description</td><td>North-oriented pixel structure test pattern featuring 16 × 16 and 8 x8 pixel pattrns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td colspan="2">Conforms to [SMPTE-429-7],[SMPTE-431-1] </td></tr><tr><td>Prerequisitespixel_structure_N_2k_j2c_pt, Silence,5.1</td><td></td></tr></table>

# A.4.64 Pixel Structure Pattern S 2k

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>pixel_structure_S_2k_pt.cpl.xml</td></tr><tr><td>Description</td><td>South-oriented pixel structure test patern featuring 16 x16 and 8 x8 pixel patterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr><tr><td>Prerequisitespixel_structure_S_2k_j2c_pt, Silence,5.1</td><td></td></tr></table>

# A.4.65 Pixel Structure Pattern E 2k

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>pixel_structure_E_2k_pt.cpl.xml</td></tr><tr><td>Description</td><td>East-oriented pixel structure test pattern featuring 16 x16 and 8 x 8 pixel paterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr><tr><td></td><td>Prerequisitespixel_structure_E_2k_j2c_pt, Silence,5.1</td></tr></table>

# A.4.66 Pixel Structure Pattern W 2k

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>pixel_structure_W_2k_pt.cpl.xml</td></tr><tr><td>Description</td><td>West-oriented pixel structure test pattern featuring 16 x16 and 8 x 8 pixel paterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr><tr><td></td><td>Prerequisitespixel_structure_W_2k_j2c_pt, Silence,5.1</td></tr></table>

# A.4.67 Pixel Structure Pattern N 4k

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>pixel_structure_N_4k_pt.cpl.xml</td></tr><tr><td>Description</td><td>North-oriented pixel structure test pattern featuring 16 ×16 pixel patterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr></table>

# A.4.68 Pixel Structure Pattern S 4k

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>pixel_structure_S_4k_pt.cpl.xml</td></tr><tr><td>Description</td><td>South-oriented pixel structure test pattern featuring 16 x16 pixel paterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr><tr><td></td><td>Prerequisitespixel_structure_S_4k_j2c_pt,Silence,5.1</td></tr></table>

# A.4.69 Pixel Structure Pattern E 4k

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>pixel_structure_E_4k_pt.cpl.xml</td></tr><tr><td>Description</td><td>East-oriented pixel structure test pattern featuring 16 ×16 pixel patterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr><tr><td></td><td>Prerequisitespixel_structure_E_4k_j2c_pt,Silence,5.1</td></tr></table>

# A.4.70 Pixel Structure Pattern W 4k

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>pixel_structure_W_4k_pt.cpl.xml</td></tr><tr><td>Description</td><td>West-oriented pixel structure test patern featuring 16 x 16 pixel patterns with binary position indicators. See Section 7.5.3 for description.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-431-1]</td></tr><tr><td></td><td>Prerequisitespixel_structure_W_4k_j2c_pt,Silence,5.1</td></tr></table>

A.4.71 DCI Malformed Test 1: Picture with Frame-out-of-order error (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m01_pict_frame_oo_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesmO1 Picture Frame Out Of Order (Encrypted),400 hz sine wave</td></tr></table>

A.4.72 DCI Malformed Test 2: Sound with Frame-out-of-order error (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>m02_snd_frame_oo_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>"NIST" 2K Test Pattern,m02 Sound Frame Out Of Order (Encrypted)</td></tr></table>

# A.4.73 DCI Malformed Test 3: Sound Splice Tests

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m03_snd_splc_test.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesmO3 Sound Splice, 400 hz sine wave</td></tr></table>

# A.4.74 DCI Malformed Test 4: DCP With an incorrect audio TrackFile ID (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m04_sndtk_wrong_file_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td> &quot;NIST&quot; 2K Test Pattern, mO4 Sound Track File With Wrong TrackFile ID (Encrypted)</td></tr></table>

# A.4.75 DCI Malformed Test 5: DCP With an incorrect image TrackFile ID (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m05_pict_wrong_file_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>m05 Picture Track File With Wrong TrackFile ID (Encrypted),400 hz sine wave</td></tr></table>

# A.4.76 DCI Malformed Test 6: CPL with incorrect track file hashes (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m06_cpl_hash_error_ct.cpl.xml</td></tr><tr><td>Description</td><td>The contents of Asset Hash elements are replaced with random values.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), StEM 5.1 Sound (Encrypted)</td></tr><tr><td>Meta</td><td>Signature no</td></tr></table>

A.4.77 DCI Malformed Test 7: CPL with an Invalid Signature (Encrypted)   

<table><tr><td>A.4.77</td><td></td></tr><tr><td>Type</td><td>CPL</td></tr></table>

A.4.78 DCI Malformed Test 8: DCP with timed text and a missing font   

<table><tr><td>Filename</td><td>m07_cpl_invalid_signature_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted),StEM 5.1 Sound (Encrypted)</td></tr><tr><td></td><td>MalformationsThe contents of dsig:DigestValue are replaced with a random value.</td></tr></table>

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m08_dcp_timetext_missing_font_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td> subtitle background, Silence, 5.1, Timed Text Example with Missing Font</td></tr></table>

# A.4.79 DCI Malformed Test 9: Picture with HMAC error in MXF Track File (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>m09_pict_bad_hmac_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesmO9 Picture track file with bad HMAC (Encrypted),400 hz sine wave</td></tr></table>

# A.4.80 DCI Malformed Test 10: Sound with HMAC error in MXF Track File (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m10_snd_bad_hmac_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisites&quot;NIST&quot; 2K Test Pattern, m10 Sound track file with bad HMAC (Encrypted)</td></tr></table>

# A.4.81 DCI Malformed Test 11: Picture with Check Value error in MXF Track File (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m11_pict_bad_chuk_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td></td><td>Prerequisitesm11 Picture With Bad Check Value (Encrypted),400 hz sine wave</td></tr></table>

# A.4.82 DCI Malformed Test 12: Sound with Check Value error in MXF Track File (Encrypted)

<table><tr><td>Type CPL</td></tr><tr><td>Filename m12_snd_bad_chuk_ct.cpl.xml</td></tr></table>

<table><tr><td>Conforms to [SMPTE-429-7]</td><td></td></tr><tr><td>Prerequisites</td><td>&quot;NIST&quot; 2K Test Pattern,m12 Sound Track File With Bad Check Value (Encrypted)</td></tr></table>

A.4.83 DCI Malformed Test 13: CPL that references a non-existent track file (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m13_cpl_missing_asset_ct.cpl.xml</td></tr><tr><td>Description</td><td>The MainSound asset of this composition is an reference to a non-existent track file.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td> Sync Count (Encrypted)</td></tr><tr><td></td><td>MalformationsThe Id element of the MainSound shallbe a random value.</td></tr><tr><td>Meta</td><td>Signature no</td></tr></table>

A.4.84 DCI Malformed Test 14: CPL that does not conform to ST 429-7 (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m14_cpl_format_error_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Sync Count 5.1 (Encrypted)</td></tr><tr><td></td><td>MalformationsCreate valid CPL using an ad-hoc namespace name.</td></tr><tr><td>Meta</td><td>Signature no</td></tr></table>

A.4.85 DCI Malformed Test 15: CPL signed by a certificate not conforming to ST 430-2 (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m15_cpl_signer_format_error_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted),Sync Count 5.1 (Encrypted)</td></tr><tr><td></td><td>MalformationsCreate valid CPL signature using a SHA-1 certificate chain.</td></tr><tr><td>Meta</td><td>Signature no</td></tr></table>

A.4.86 DCI Malformed Test 16: CPL signed with No Role Certificate (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m16_cpl_malf_signer_no_role_ct.cpl.xml</td></tr><tr><td>Description</td><td>A composition consisting of the encrypted StEM 2K image and encrypted 5.1 sound track files,signed wit h a certificate that has no role.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted),StEM 5.1 Sound (Encrypted)</td></tr><tr><td></td><td>MalformationsThe signer certificate of the CPL has no role instead of CS.</td></tr><tr><td>Meta</td><td>Register no</td></tr><tr><td> Signature</td><td>no</td></tr></table>

A.4.87 DCI Malformed Test 17: CPL signed with Bad Role Certificate (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>m17_cpl_malf_signer_bad_role_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition consisting of the encrypted StEM 2K image and encrypted 5.1 sound track files, signed with a certificate with an incorrect role.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), StEM 5.1 Sound (Encrypted)</td></tr><tr><td></td><td> MalformationsThe signer certificate of the CPL has the role of SM instead of CS.</td></tr><tr><td>Meta</td><td>Register no</td></tr><tr><td> Signature</td><td>no</td></tr></table>

# A.4.88 DCI Malformed Test 18: CPL signed with Extra Role Certificate (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m18_cpl_malf_signer_extra_role_ct.cpl.xml</td></tr><tr><td> Description</td><td>An encrypted composition consisting of the encrypted StEM 2K image and encrypted 5.1 sound track files, signed with a certificate with an extra role.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted),StEM 5.1 Sound (Encrypted)</td></tr><tr><td></td><td>MalformationsThe signer certificate of the CPL has the roles of CS and SM instead of only CS.</td></tr><tr><td>Meta</td><td>Register no</td></tr><tr><td> Signature</td><td>no</td></tr></table>

# A.4.89 Deleted Section

The section "DCI DCP 2K (Encrypted)" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.4.90 DCI DCP 2K Multi-Reel 128 A (Encrypted)

<table><tr><td>Type</td><td>DCP</td></tr><tr><td>Filename</td><td>DCI_2K_128_multi_a_tests</td></tr><tr><td>Description</td><td>DCP containing 128 reel StEM,5 seconds per reel,set A</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td>Prerequisites1</td><td>128 Reel Composition,&quot;A&quot; Series (Encrypted)</td></tr></table>

# A.4.91 DCI DCP 2K Multi-Reel 128 B (Encrypted)

<table><tr><td>Type DCP</td><td></td></tr><tr><td>Filename</td><td>DCI_2K_128_multi_b_tests</td></tr><tr><td>Description</td><td>DCP containing 128 reel StEM,5 seconds per reel, set B</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td></td><td>Prerequisites128 Reel Composition,&quot;B&quot; Series (Encrypted)</td></tr></table>

# A.4.92 DCI DCP 2K Multi-Reel 64 (Encrypted)

<table><tr><td>Type</td><td>DCP</td></tr><tr><td>Filename</td><td>DCI_2K_64_multi_tests</td></tr><tr><td>Description</td><td>DCP containing 64 reel StEM,1 second per reel</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td></td><td>Prerequisites64 Reel Composition,1 Second Reels (Encrypted)</td></tr></table>

# A.4.93 DCI DCP 2K, Malformed (Encrypted)

<table><tr><td>Type DCP</td><td></td></tr><tr><td>Filename</td><td>DCI_2K_malf</td></tr><tr><td>Description</td><td>DCP containing malformed test compositions</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 1: Picture with Frame-out-of-order eror (Encrypted), DCI Malformed Test 2: Sound with Frame-out-of-order error(Encrypted),DCI Malformed Test 3: Sound Splice Tests,DCl Malformed Test 4: DCP With an incorrect audio TrackFile ID (Encrypted),DCl Malformed Test 5: DCP With an</td></tr><tr><td></td><td>incorrect image TrackFile ID (Encrypted),DCl Malformed Test 6: CPL with incorrect track file hashes (Encrypted),DCl Malformed Test 7: CPL with an Invalid Signature (Encrypted), DCI Malformed Test 8: DCP with timed text and a missing font,DCI Malformed Test 9: Picture with HMAC error in MXF Track File (Encrypted),DCI Malformed Test10: Sound with HMAC error in MXF Track File (Encrypted),DCl Malformed Test 11: Picture with Check Value error in MXF Track File (Encrypted),DCI Malformed Test 12: Sound with Check Value error in MXF Track File (Encrypted),DCl Malformed Test13: CPL that references a non-existent track file (Encrypted),DCl Malformed Test14: CPL that does not conform to ST 429-7 (Encrypted),DCl Malformed Test15: CPL signed by a certificate not conforming to ST 430-2 (Encrypted),DCI Malformed Test16: CPL signed with No Role Certificate (Encrypted),DCI Malformed</td></tr><tr><td>Malformations</td><td>Test17: CPL signed with Bad Role Certificate (Encrypted), DCI Malformed Test 18: CPL signed with Extra Role Certificate (Encrypted)</td></tr><tr><td>None Meta yes ExplicitPKLContents</td><td></td></tr></table>

# A.4.94 DCI DCP 4K (Encrypted)

<table><tr><td>Type</td><td>DCP</td></tr><tr><td>Filename</td><td>DCI_4K_tests</td></tr><tr><td>Description</td><td>DCP containing wel-formed 4K test compositions</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td>Prerequisites</td><td>4K Color Accuracy Series,4K DCI Maximum Bitrate Composition (Encrypted),4K DCI NIST Frame with silence,4K Sync Test,Pixel Structure Pattern E4k,Pixel Structure Pattrn N4k,Pixel Structure Pattern S 4k,Pixel Structure Pattern W4k,4K Scope Subtitle Test (Encrypted),4K Flat Subtitle Test (Encrypted), 4K Full Subtitle Test (Encrypted)</td></tr></table>

# A.4.95 2K Scope Subtitle Test (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>sub_test_2K_scope_ct.cpl.xml</td></tr><tr><td>Description</td><td>2K Scope Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1 (Encrypted),2K Scope Subtitle Test Background - Reel1,2K Scope Subtitle Test - Timed Text track file - Reel1,2K Scope Subtitle Test Background - Reel 2,2K Scope Subtitle Test - Timed Text track file - Reel 2,2K Scope Subtitle Test Background - Reel3,2K Scope Subtitle Test - Timed Text track file- Reel3,2K Scope Subtitle Test Background -Reel5,2K Scope Subtitle Test - Timed Texttrack file -</td></tr></table>

# A.4.96 2K Flat Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_ct.cpl.xml</td></tr><tr><td>Description</td><td>2K Flat Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1 (Encrypted),2K Flat Subtitle Test Background -Reel1,2K Flat Subtitle Test- Timed Text track file -Reel1,2K Flat Subtitle TestBackground-Reel2,2KFlat Subtitle Test- Timed Text track file- Reel 2,2K Flat Subtitle Test Background - Reel3,2K Flat Subtitle Test- Timed Text track file - Reel 3,2K</td></tr></table>

# A.4.97 2K Full Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sub_test_2K_full_ct.cpl.xml</td></tr><tr><td>Description</td><td>2K Full Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1 (Encrypted),2KFullSubtitle Test Background - Reel1,2KFullSubtitle Test- TimedText track file-Reel1,2KFull Subtitle TestBackground-Reel2,2KFullSubtitle Test-Timed Text track file- Reel 2,2KFull Subtitle Test Background -Reel3,2KFullSubtitle Test-Timed Text track file -Reel 3,2K Full Subtitle Test Background -Reel5,2KFullSubtitle Test - Timed Text track file-Reel5,2K Full SubtitleTest Background -Reel6,2KFullSubtitle Test-Timed Text track file -Reel6,2KFullSubtitle TestBackground - Reel7,2K FullSubtitle Test - Timed Text track file- Reel7,2K Ful Subtitle Test Background - Reel 8,2K FullSubtitle Test - Timed Text track file - Reel8,2K Ful Subtitle Test Background - Reel 9,2K FullSubtitle Test - Timed Text track file - Reel 9,2K Full Subtitle Test Background - Reel10,2KFull Subtitle Test - Timed Text track file - Reel10</td></tr></table>

# A.4.98 4K Scope Subtitle Test (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>sub_test_4K_scope_ct.cpl.xml</td></tr><tr><td>Description</td><td>4K Scope Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1 (Encrypted),4K Scope Subtitle Test Background - Reel 1,2K Scope Subtitle Test - Timed Text track file -Reel1,4K Scope Subtitle Test Background -Reel2,2K Scope Subtitle Test- Timed Text</td></tr></table>

<table><tr><td>track file-Reel2,4K Scope Subtitle Test Background-Reel3,2KScope SubtitleTest-Timed Text track file-Reel3,4K Scope Subtitle Test Background-Reel5,2K Scope SubtitleTest - Timed Text track file- Reel 5,4K Scope Subtitle Test Background - Reel 6,2K Scope Subtitle Test - Timed Text track file - Reel 6,4K Scope Subtitle Test Background -Reel7,2K Scope Subtitle Test-Timed Texttrack file -Reel 7,4K Scope Subtitle Test Background - Reel 8,4K Scope Subtitle Test - Timed Text track file - Reel 8,4K</td></tr></table>

# A.4.99 4K Flat Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_ct.cpl.xml</td></tr><tr><td>Description</td><td>4K Flat Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1 (Encrypted),4K Flat Subtitle Test Background -Reel1,2K Flat Subtitle Test- Timed Text track file - Reel1,4K Flat Subtitle Test Background-Reel 2,2KFlat Subtitle Test- Timed Text track file- Reel 2,4K Flat Subtitle Test Background - Reel3,2K Flat Subtitle Test - Timed Text track file - Reel 3,4K FlatSubtitle Test Background - Reel 5,2K Flat Subtitle Test - Timed Text track file- Reel 5,4K Flat SubtitleTest Background - Reel 6,2KFlat Subtitle Test-Timed Text track file -Reel 6,4KFlatSubtitle</td></tr></table>

# A.4.100 4K Full Subtitle Test (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>sub_test_4K_full_ct.cpl.xml</td></tr><tr><td>Description</td><td>4K Full Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1 (Encrypted),4K FullSubtitle TestBackground - Reel1,2K Ful Subtitle Test- Timed Text track file -Reel1,4K Ful Subtitle TestBackground - Reel2,2KFullSubtitle Test - Timed Text track file- Reel 2,4K Ful Subtitle Test Background - Reel3,2KFullSubtitle Test - Timed Text track file - Reel 3,4K Full Subtitle Test Background - Reel5,2K FullSubtitle Test - Timed Text track file- Reel 5,4K Full SubtitleTest Background -Reel6,2KFullSubtitle Test-Timed Text track file -Reel6,4KFullSubtitle Test Background - Reel 7,2K FullSubtitle Test - Timed Text track file- Reel 7,4K Ful Subtitle Test Background - Reel 8,4K FullSubtitle Test - Timed Text track file - Reel 8,4K Ful Subtitle Test Background - Reel 9,4K FullSubtitle Test - Timed Text track file - Reel 9,4K Full Subtitle Test</td></tr></table>

# A.4.101 2K 48fps Scope Subtitle Test (Encrypted)

<table><tr><td>Type CPL</td></tr></table>

<table><tr><td>Filename sub_test_48fps_scope_ct.cpl.xml</td><td></td></tr><tr><td>Description</td><td>2K 48fps Scope Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1,48 fps (Encrypted),2K 48fps Scope Subtitle Test Background - Reel1,2K 48fps Scope Subtitle Test- Timed Text track file- Reel1,2K 48fps Scope Subtitle Test Background - Reel2,2K 48fps Scope Subtitle Test- Timed Text track file - Reel2,2K 48fps Scope Subtitle Test Background - Reel 3,2K 48fps Scope Subtitle Test -Timed Text track file- Reel 3,2K 48fps Scope Subtitle Test Background - Reel 5,2K 48fps Scope Subtitle Test -Timed Text track file -Reel5,2K 48fps Scope Subtitle Test Background</td></tr></table>

# A.4.102 2K 48fps Flat Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_ct.cpl.xml</td></tr><tr><td>Description</td><td>2K 48fps Flat Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1,48 fps (Encrypted),2K 48fps FlatSubtitle TestBackground -Reel1,2K 48fps Flat Subtitle Test - Timed Text track file - Reel1,2K 48fps Flat Subtitle Test Background - Reel 2,2K 48fps Flat Subtitle Test- Timed Text track file - Reel 2,2K 48fps Flat Subtitle Test Background - Reel 3,2K 48fps FlatSubtitle Test - Timed Text track file -Reel3,2K 48fps Flat Subtitle Test Background - Reel 5,2K 48fpsFlat Subtitle Test- Timed Text track file- Reel 5,2K 48fps Flat Subtitle Test Background - Reel 6, 2K 48fpsFlatSubtitle Test-Timed Text track file -Reel 6,2K 48fpsFlat Subtitle TestBackground - Reel 7,2K 48fps Flat Subtitle Test-Timed Text track file -Reel 7,2K 48fpsFlat SubtitleTest Background - Reel8,2K 48fps Flat Subtitle Test- Timed Text track file-Reel8,2K 48fps Flat Subtitle Test Background - Reel 9,2K 48fps Flat Subtitle Test - Timed Text track file - Reel 9,2K 48fps Flat Subtitle Test Background - Reel10,2K 48fps FlatSubtitle Test - Timed Text track file - Reel10</td></tr></table>

# A.4.103 2K 48fps Full Subtitle Test (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>sub_test_48fps_ful_ct.cpl.xml</td></tr><tr><td>Description</td><td>2K 48fps Full Subtitle Test (Encrypted)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-2]</td></tr><tr><td>Prerequisites</td><td>Silence,5.1,48 fps (Encrypted),2K 48fpsFull Subtitle TestBackground - Reel1,2K 48fps FullSubtitle Test - Timed Text track file- Reel1,2K 48fps Ful Subtitle Test Background - Reel 2,2K 48fps Full Subtitle Test- Timed Text track file - Reel 2,2K 48fps Ful Subtitle Test Background - Reel 3,2K 48fps</td></tr></table>

<table><tr><td>Full Subtitle Test- Timed Text track file - Reel3,2K 48fps FullSubtitle Test Background - Reel 5,2K 48fps Full Subtitle Test -Timed Text track file- Reel 5,2K 48fpsFullSubtitle Test Background - Reel 6, 2K 48fps Full Subtitle Test- Timed Text track file -Reel 6,2K 48fps Full Subtitle TestBackground - Reel 7,2K 48fps Full Subtitle Test - Timed Text track file - Reel 7,2K 48fps Full Subtitle Test Background -</td></tr><tr><td>Reel8,2K 48fps Full Subtitle Test - Timed Texttrack file -Reel 8,2K 48fps FullSubtitle Test Background - Reel 9,2K 48fpsFullSubtitle Test - Timed Text track file - Reel 9,2K 48fpsFullSubtitle Test Background - Reel10,2K 48fps FullSubtitle Test - Timed Text track file - Reel 10</td></tr></table>

# A.4.104 DCI DCP 2K Multi-Reel 128 A (Unencrypted)

<table><tr><td>Type DCP</td><td></td></tr><tr><td>Filename</td><td>DCI_2K_128_multi_a_tests_pt</td></tr><tr><td>Description</td><td>DCP containing 128 reel StEM,5 seconds per reel,set A, Unencrypted</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td>Prerequisites</td><td>128 Reel Composition,&quot;A&quot; Series</td></tr><tr><td>MalformationsNone</td><td></td></tr></table>

# A.4.105 DCI DCP 2K Multi-Reel 128 B (Unencrypted)

<table><tr><td>Type</td><td>DCP</td></tr><tr><td>Filename</td><td>DCI_2K_128_multi_b_tests_pt</td></tr><tr><td>Description</td><td>DCP containing 128 reel StEM,5 seconds per reel, set B, Unencrypted</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-8],[SMPTE-429-9]</td></tr><tr><td>Prerequisites</td><td>128 Reel Composition, &quot;B&quot; Series</td></tr></table>

# A.4.106 DCI 2K Sync Test (OBAE)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_obae.cpl.xml</td></tr><tr><td>Description</td><td>A Composition that contains an Immersive Audio Track,as specified in SMPTE ST 429-18.It is intended to facilitate test procedures where timing measurements are performed.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-19]</td></tr><tr><td></td><td>PrerequisitesSync Count, Main Sound for Sync Count OBAE,Sync Count OBAE</td></tr></table>

# A.4.107 DCI 2K Sync Test (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.4.106</td></tr><tr><td>Conforms to[SMPTE-429-7],[SMPTE-429-19]</td><td></td></tr><tr><td></td><td>PrerequisitesSync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted),Sync Count OBAE (Encrypted)</td></tr></table>

# A.4.108 DCI 2K StEM (OBAE)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2K_StEM_obae_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of the StEM 2K image and an Immersive Audio Track,as specified in SMPTE ST 429-18.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-19]</td></tr><tr><td></td><td>PrerequisitesStEM 2K,Main Sound for StEM OBAE, StEM OBAE</td></tr></table>

# A.4.109 DCI 2K StEM (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encrypted version of Annex A.4.108</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM2K (Encrypted),Main Sound for StEM OBAE (Encrypted),StEM OBAE (Encrypted)</td></tr></table>

# A.4.110 DCI 2K Sync Test with subtitles (OBAE)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_with_subs_obae.cpl.xml</td></tr><tr><td>Description</td><td>A Composition that contains an Immersive Audio and Subtitle Tracks.It is intended to facilitate test procedures where timing measurements are performed.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count with Subtitle Reticles,Main Sound for Sync Count OBAE, Sync Count OBAE,Sync Count Text</td></tr></table>

# A.4.111 DCI 2K Sync Test with subtitles (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_with_subs_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encrypted version of DCl 2K Sync Test with subtitles (OBAE)</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count with Subtitle Reticles (Encrypted),Main Sound for Sync Count OBAE (Encrypted), Sync</td></tr><tr><td></td><td>Count OBAE (Encrypted),Sync Count Text (Encrypted)</td></tr><tr><td></td><td></td></tr></table>

# A.4.112 M25 Composition with Malformed Integrity Pack: Missing MIC item (Picture)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m25_integrity_pict_mic_ct.cpl.xml</td></tr><tr><td>Description</td><td>Composition where a MIC item is missing from the Main Picture Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>M25 Picture Track File with Malformed Integrity Pack: Missing MIC item (Encrypted),Silence,5.1,15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA MIC item is missing from the Main Picture Track File</td></tr></table>

A.4.113 M27 Composition with Malformed Integrity Pack: Missing TrackFileID item (Picture) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m27_integrity_pict_tfid_ct.cpl.xml</td></tr><tr><td>Description</td><td>Composition where a TrackFilelD item is missing from the Main Picture Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>M27 Picture Track File with Malformed Integrity Pack: Missing TrackFileID item (Encrypted),Silence,5.1, 15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA TrackFilelD item is missing from the Main Picture Track File</td></tr></table>

# A.4.114 M26 Composition with Malformed Integrity Pack: Missing SequenceNumber item (Picture) (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>m26_integrity_pict_snum_ct.cpl.xml</td></tr><tr><td>Description</td><td>Composition where a SequenceNumber item is missng from the Main Picture Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>M26 Picture Track File with Malformed Integrity Pack: Missing SequenceNumber item (Encrypted), Silence,5.1,15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA SequenceNumber item is missing from the Main Picture Track File</td></tr></table>

A.4.115 M28 Composition with Malformed Integrity Pack: Missing MIC item (PCM) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m28_integrity_snd_mic_ct.cpl.xml</td></tr><tr><td>Description</td><td>Composition where a MIC item is missing from the Main Sound Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>M28 Sound Track File with Malformed Integrity Pack: Missing MIC item (Encrypted), DCl Numbered Frame Sequence (Encrypted)</td></tr><tr><td></td><td>MalformationsA MIC item is missing from the Main Sound Track File</td></tr></table>

A.4.116 M30 Composition with Malformed Integrity Pack: Missing TrackFileID item (PCM) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m30_integrity_snd_tfid_ct.cpl.xml</td></tr><tr><td>Description</td><td>Composition where a TrackFileID item is missing from the Main Sound Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7], [SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>M30 Sound Track File with Malformed Integrity Pack: Missing TrackFilelD item (Encrypted), DCl Numbered Frame Sequence (Encrypted)</td></tr><tr><td></td><td>MalformationsA TrackFileID item is missing from the Main Sound Track File</td></tr></table>

A.4.117 M29 Composition with Malformed Integrity Pack: Missing SequenceNumber item (PCM) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m29_integrity_snd_snum_ct.cpl.xml</td></tr><tr><td>Description</td><td>Composition where a SequenceNumber item is missing from the Main Sound Track File. The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td> Prerequisites</td><td>M29 Sound Track File with Malformed Integrity Pack: Missing SequenceNumber item (Encrypted), DCl Numbered Frame Sequence (Encrypted)</td></tr><tr><td></td><td>MalformationsA SequenceNumber item is missing from the Main Sound Track File</td></tr></table>

A.4.118 M20 Composition with Malformed Integrity Pack: Missing MIC item (OBAE Main Sound) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m20_integrity_obae_ms_mic_ct.cpl.xml</td></tr><tr><td>Description</td><td>OBAE Composition where a MIC item is missing from the Main Sound Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>M20 Sound Track File with Malformed Integrity Pack: Missng MIC item (OBAE) (Encrypted), DCl Numbered Frame Sequence (Encrypted), Silence, OBAE,15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA MIC item is missing from the Main Sound Track File</td></tr></table>

A.4.119 M22 Composition with Malformed Integrity Pack: Missing TrackFileID item (OBAE Main Sound) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m22_integrity_obae_ms_tfid_ct.cpl.xml</td></tr><tr><td>Description</td><td>OBAE Composition where a TrackFilelD item is missing from the Main Sound Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>M22 Sound Track File with Malformed Integrity Pack: Missing TrackFilelD item (OBAE) (Encrypted), DCl Numbered Frame Sequence (Encrypted), Silence,OBAE,15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA TrackFilelD item is missing from the Main Sound Track File</td></tr></table>

A.4.120 M21 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE Main Sound) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m21_integrity_obae_ms_snum_ct.cpl.xml</td></tr><tr><td>Description</td><td>OBAE Composition where a SequenceNumber item is missing from the Main Sound Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td></td><td>Conforms to[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>M21 Sound Track File with Malformed Integrity Pack: Missing SequenceNumber item (OBAE) (Encrypte d), DCI Numbered Frame Sequence (Encrypted),Silence,OBAE,15 minutes (Encrypted)</td></tr><tr><td></td><td> MalformationsA SequenceNumber tem is missing from the Main Sound Track File</td></tr></table>

A.4.121 M19 Composition with Malformed Integrity Pack: Missing MIC item (OBAE) (Encrypted)   

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>m19_integrity_obae_mic_ct.cpl.xml</td></tr><tr><td>Description</td><td>OBAE Composition where a MIC item is missing from the OBAE Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>M19 OBAE Track File with Malformed Integrity Pack: Missing MIC item (Encrypted), DCI Numbered Frame Sequence (Encrypted), Main Sound for Silence, OBAE,15 minutes (Encrypted)</td></tr><tr><td>MalformationsA MIC item is missing from the OBAE Track File</td><td></td></tr></table>

A.4.122 M24 Composition with Malformed Integrity Pack: Missing TrackFileID item (OBAE) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m24_integrity_obae_tfid_ct.cpl.xml</td></tr><tr><td>Description</td><td>OBAE Composition where a TrackFilelD item is missing from the OBAE Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>M24 OBAE Track File with Malformed Integrity Pack: Missing TrackFilelD item (OBAE) (Encrypted), DCl Numbered Frame Sequence (Encrypted), Main Sound for Silence, OBAE,15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA TrackFilelD item is missing from the OBAE Track File</td></tr></table>

A.4.123 M23 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE) (Encrypted)   

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>m23_integrity_obae_snum_ct.cpl.xml</td></tr><tr><td>Description</td><td>OBAE Composition where a SequenceNumber item is missng from the OBAE Track File.The duration of the Composition is 2,880 edit units.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td></td><td>PrerequisitesM23 OBAE Track File with Malformed Integrity Pack: Mising SequenceNumber item (Encrypted),DCl Numbered Frame Sequence (Encrypted),Main Sound for Silence, OBAE,15 minutes (Encrypted)</td></tr><tr><td></td><td>MalformationsA SequenceNumber item is missing from the OBAE Track File</td></tr></table>

# A.4.124 64 Reel Composition, 1 Second Reels (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_64_1_second_reels_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted OBAE composition consisting of sixty four(64) rels,each with a duration of 1 second. Each reel is composed of part of the encrypted StEM 2K image and encrypted OBAE track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K Multi-Reel C (Encrypted), StEM OBAE Multi-Reel C (Encrypted), Main Sound for StEM OBAE Multi-Reel C (Encrypted)</td></tr></table>

# A.4.125 M40 OBAE DCP with Frame-out-of-order error (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m40_obae_frame_oo_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted),M40 OBAE Track File with Frame-out-of-order error (Encrypted)</td></tr></table>

# A.4.126 M41 OBAE DCP with an incorrect TrackFile ID (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>m41_obae_wrong_file_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted), M41 OBAE Track File With Wrong TrackFile ID (Encrypted)</td></tr></table>

# A.4.127 DCI 2K Sync Test with MIC Key (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_obae_mkey_ct.cpl.xml</td></tr><tr><td>Description</td><td>Same as Annex A.4.107 but with the OBAE Track File using a KDM-borne MIC Key.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted),Sync Count OBAE with MIC Key (Encrypted)</td></tr></table>

# A.4.128 M43 OBAE DCP with Check Value error in MXF Track File (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>m43_obae_bad_chuk_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted), M43 OBAE Track File With Bad Check Value (Encrypted)</td></tr></table>

# A.4.129 End of Engagement - Past Time Window Extension (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>holdover_long_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted OBAE composition with duration of 6 hours and 11 minutes.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM2K (Encrypted),Main Sound for StEM OBAE (Encrypted),StEM OBAE (Encrypted)</td></tr></table>

# A.4.130 End of Engagement - Within Time Window Extension (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>holdover_short_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted OBAE composition with duration of 5 hours and 59 minutes and 30 seconds.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), Main Sound for StEM OBAE (Encrypted),StEM OBAE (Encrypted)</td></tr></table>

# A.4.131 DCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_mkey_ct.cpl.xml</td></tr><tr><td>Description</td><td>Same as Annex A.4.3 but with KDM-borne MIC Keys.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7]</td></tr><tr><td>Prerequisites</td><td>Sync Count 5.1 with KDM-Borne MIC Key (Encrypted),Sync Count with KDM-Borne MIC Key(Encrypted)</td></tr></table>

# A.4.132 M44 OBAE DCP with HMAC value error in MXF Track File (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m44_obae_bad_hmac_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites HMAC value (Encrypted)</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted), M44 OBAE Track File With Bad</td></tr></table>

# A.4.133 DCP for OBAE Tone Multi-Reel (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>OBAE_tone_multi_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted),OBAE Tone Multi-Reel (Encrypted), Main Sound for OBAE Tone Multi-Reel (Encrypted)</td></tr></table>

# A.4.134 DCP for Audio Tone Multi-Reel (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>audio_tone_multi_ct.cpl.xml</td></tr><tr><td>Description</td><td>A 48 fps Immersive Audio Composition,as specified in [SMPTE-429-19]. It contains a sequence of track files arranged such that no discontinuity exists at the splice points.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td></td><td>PrerequisitesSync Count (Encrypted), Audio Tone Multi-Reel (Encrypted)</td></tr></table>

# A.4.135 DCI 2K Sync Test (48fps) (OBAE)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_sync_test_48fps_obae.cpl.xml</td></tr><tr><td>Description</td><td>A 48 fps Composition that contains an Immersive Audio Track,as specified in SMPTE ST 429-18. It is intended to facilitate test procedures where timing measurements are performed.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-19]</td></tr><tr><td></td><td>PrerequisitesSync Count, 48fps,Main Sound for Sync Count (48fps) OBAE,Sync Count (48fps) OBAE</td></tr></table>

# A.4.136 2K FM Application Constraints (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_constraints_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>A composition consisting of FM testing instructions and both encrypted and plaintext StEM 2K image and OABE track files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>FM Constraints Begin (Plaintext),FM Constraints Begin (Encrypted),FM Constraints End (Plaintext),FM Constraints End (Encrypted),400 hz sine wave (OBAE),400 hz sine wave (OBAE) (Encrypted), Main</td></tr></table>

Sound for 400 hz sine wave (OBAE), StEM 2K (Encrypted), StEM 2K, FM StEM OBAE, FM StEM OBAE (Encrypted), Main Sound for FM StEM OBAE

# A.4.137 2K FM Control Granularity - No FM (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_no_fm_obae.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing image and OBAE essence,for the purpose of detecting the forensic marking application.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave (OBAE) (Encrypted), Main Sound for 400 hz sine wave (OBAE),StEM 2K (Encrypted),FM StEM OBAE (Encrypted),Main Sound for FM StEM OBAE</td></tr></table>

# A.4.138 2K FM Control Granularity - Image Only FM (OBAE) (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_only_fm_obae.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing image and OBAE essence,for the purpose of detecting the forensic marking application.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave (OBAE) (Encrypted), Main Sound for 400 hz sine wave (OBAE),StEM 2K (Encrypted),FM StEM OBAE (Encrypted),Main Sound for FM StEM OBAE</td></tr></table>

# A.4.139 2K FM Control Granularity - OBAE Only FM (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_obae_only_fm_obae.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing image and OBAE essence, for the purpose of detecting the forensic marking application.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave (OBAE) (Encrypted), Main Sound for 400 hz sine wave (OBAE),StEM 2K (Encrypted),FM StEM OBAE (Encrypted),Main Sound for FM StEM OBAE</td></tr></table>

# A.4.140 2K FM Control Granularity - Image and OBAE FM (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_and_obae_fm_obae.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition containing image and OBAE essence,for the purpose of detecting the forensic marking application.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity Begin (Encrypted),2K FM Control Granularity End (Encrypted),400 hz sine wave (OBAE) (Encrypted), Main Sound for 400 hz sine wave (OBAE),StEM 2K (Encrypted),FM StEM OBAE (Encrypted),Main Sound for FM StEM OBAE</td></tr></table>

# A.4.141 128 Reel Composition, "A" Series (OBAE)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_StEM_128_a_reels_obae_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of one hundred and twenty eight (128) reels, where no two reels reference identical main picture,main sound or OBAE track files.The main picture,main sound and OBAE tracks are based on those of Annex A.4.108.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K Multi-Reel A,StEM OBAE Multi-Reel A,Main Sound for StEM OBAE Multi-Reel A</td></tr></table>

# A.4.142 128 Reel Composition, "B" Series (OBAE)

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>2K_StEM_128_b_reels_obae_pt.cpl.xml</td></tr><tr><td>Description</td><td>A plaintext composition consisting of one hundred and twenty eight (128) reels, where no two reels reference identical main picture,main sound or OBAE track files.The main picture,main sound and</td></tr><tr><td>Conforms to</td><td>OBAE tracks are based on those of Annex A.4.108. [SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K Multi-Reel B,StEM OBAE Multi-Reel B,Main Sound for StEM OBAE Multi-Reel B</td></tr></table>

# A.4.143 128 Reel Composition, "A" Series (OBAE) (Encrypted)

A.4.144 128 Reel Composition, "B" Series (OBAE) (Encrypted)   

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>2K_StEM_128_a_reels_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encypted version of Annex A.4.141 where 256 distinct cryptographic keys are used: 128 for the main picture track and 64 for each of the main sound and OBAE tracks.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K Multi-Reel A (Encrypted), StEM OBAE Multi-Reel A (Encrypted), Main Sound for StEM OBAE Multi-Reel A (Encrypted)</td></tr><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>2K_StEM_128_b_reels_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>Encypted version of Annex A.4.142 where 256 distinct cryptographic keys are used: 128 for the main picture track and 64 for each of the main sound and OBAE tracks.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K Multi-Reel B (Encrypted),StEM OBAE Multi-Reel B (Encrypted),Main Sound for StEM OBAE Multi-Reel B (Encrypted)</td></tr></table>

# A.4.145 2K FM Payload (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_payload_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition for FM payload retrieval containing encrypted StEM 2K image and corresponding OBAE essence, preceded and followed by slates.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>2K FM Payload Begin (Encrypted),2K FM Payload End (Encrypted),400 hz sine wave (OBAE) (Encrypted), Main Sound for 400 hz sine wave (OBAE),StEM 2K (Encrypted),Main Sound for FM StEM OBAE,FM StEM OBAE (Encrypted)</td></tr></table>

# A.4.146 2K FM Payload (plaintext OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2K_fm_payload_pt_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>A version of Annex A.4.145 where the OBAE essence is plaintext.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>2K FM Payload Begin (Encrypted),2K FM Payload End (Encrypted),400 hz sine wave (OBAE),Main Sound for 400 hz Sine Wave (OBAE), StEM 2K (Encrypted), Main Sound for FM StEM OBAE,FM StEM OBAE</td></tr></table>

# A.4.147 Maximum Bitrate OBAE (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>maximum_bitrate_24Hz_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>A encrypted composition intended to exercise the maximum OBAE bitrate at a frame rate of 24 Hz.</td></tr><tr><td>Conforms to </td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td></td><td>PrerequisitesStEM 2K,Maximum Bitrate OBAE (Encrypted), Main Sound for Maximum Bitrate OBAE (Encrypted)</td></tr></table>

# A.4.148 Maximum Bitrate OBAE 48 fps (Encrypted)

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>maximum_bitrate_48Hz_obae_ct.cpl.xml</td></tr><tr><td> Description</td><td>A encrypted composition intended to exercise the maximum OBAE bitrate at a frame rate of 48 Hz.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K 48 fps, Maximum Bitrate OBAE 48 fps (Encrypted), Main Sound for Maximum Bitrate OBAE 48 fps (Encrypted)</td></tr></table>

# A.4.149 OBAE Rendering Expectations

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>obae_rendering_test_pt.cpl.xml</td></tr><tr><td>Description</td><td>Composition intended to evaluate whether OBAE rendering expectations are met. Some reels contain neither a sync signal nor OBAE Track Files.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-18]</td></tr><tr><td>Prerequisites</td><td>OBAE Rendering Expectations Guide, OBAE Rendering Test, Main Sound for OBAE Rendering Test, Silence w/ HIVI</td></tr></table>

# A.4.150 DCI Malformed Test 6b: CPL with incorrect track file hashes (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m06b_cpl_hash_error_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>The contents of Asset Hash elements are replaced with random values.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM2K (Encrypted), Main Sound for StEM OBAE (Encrypted), StEM OBAE (Encrypted)</td></tr><tr><td></td><td>MalformationsThe contents of Asset Hash elements are replaced with random values.</td></tr></table>

# A.4.151 DCI Malformed Test 7b: CPL with an Invalid Signature (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m07b_cpl_invalid_signature_obae_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), Main Sound for StEM OBAE (Encrypted), StEM OBAE (Encrypted)</td></tr><tr><td></td><td> MalformationsThe contents of dsig:DigestValue are replaced with a random value.</td></tr></table>

# A.4.152 DCI Malformed Test 13b: CPL that references a non-existent track file (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m13b_cpl_missing_asset_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>The MainSound asset of this composition is an reference to a non-existent track file.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted), Sync Count OBAE (Encrypted)</td></tr><tr><td></td><td>MalformationsThe Id element of te MainSound shall be a random value.</td></tr></table>

A.4.153 DCI Malformed Test 14b: CPL that does not conform to ST 429-7 (OBAE) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m14b_cpl_format_error_obae_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td> Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted),Sync Count OBAE (Encrypted)</td></tr><tr><td></td><td> MalformationsCreate valid CPL using an ad-hoc namespace name.</td></tr></table>

A.4.154 DCI Malformed Test 15b: CPL signed by a certificate not conforming to ST 430-2 (OBAE) (Encrypted)   

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m15b_cpl_signer_format_eror_obae_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>Sync Count (Encrypted), Main Sound for Sync Count OBAE (Encrypted), Sync Count OBAE (Encrypted)</td></tr><tr><td></td><td> MalformationsCreate valid CPL signature using a SHA-1 certificate chain.</td></tr></table>

# A.4.155 DCI Malformed Test 16b: CPL signed with No Role Certificate (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td> Filename</td><td>m16b_cpl_malf_signer_no_role_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>A composition signed with a certificate that has no role.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), Main Sound for StEM OBAE (Encrypted), StEM OBAE (Encrypted)</td></tr><tr><td></td><td>MalformationsThe signer certificate of the CPL has no role instead of CS.</td></tr></table>

# A.4.156 DCI Malformed Test 17b: CPL signed with Bad Role Certificate (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m17b_cpl_malf_signer_bad_role_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition signed with a certificate with an incorrect role.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), Main Sound for StEM OBAE (Encrypted), StEM OBAE (Encrypted)</td></tr><tr><td></td><td>MalformationsThe signer certificate of the CPL has the role of SM instead of CS.</td></tr></table>

# A.4.157 DCI Malformed Test 18b: CPL signed with Extra Role Certificate (OBAE) (Encrypted)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>m18b_cpl_malf_signer_extra_role_obae_ct.cpl.xml</td></tr><tr><td>Description</td><td>An encrypted composition signed with a certificate with an extra role.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-19]</td></tr><tr><td>Prerequisites</td><td>StEM 2K (Encrypted), Main Sound for StEM OBAE (Encrypted),StEM OBAE (Encrypted)</td></tr><tr><td></td><td>MalformationsThe signer certificate of the CPL has the roles of CS and SM instead of only CS.</td></tr></table>

# A.4.158 OBAE Rendering Expectations (Clip)

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>obae_rendering_test_clip_pt.cpl.xml</td></tr><tr><td>Description</td><td>First three reels of OBAE Rendering Expectations</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-18]</td></tr><tr><td></td><td>PrerequisitesOBAE Rendering Expectations</td></tr></table>

# A.4.159 DCI 2K Image with Frame Number Burn In (OBAE) (Encrypted)

<table><tr><td colspan="2">Type CPL</td></tr><tr><td>Filename</td><td>frame_num_burn_in_obae_ct.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-18]</td></tr><tr><td>Prerequisites</td><td>DCI Numbered Frame Sequence (Encrypted),Silence, OBAE,15 minutes (Encrypted),Main Sound for Silence, OBAE,15 minutes (Encrypted)</td></tr></table>

# A.4.160 2K DCI Maximum Bitrate Composition (OBAE) (Encrypted)

Type CPL

<table><tr><td>Filename</td><td>2K_max_bitrate_obae_ct.cpl.xml</td></tr><tr><td> Description</td><td>Encrypted composition containing picture,sound and OBAEtrack files of the maximum alowable bitrate.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-18]</td></tr><tr><td>Prerequisites</td><td>2K Picture Track File,Maximum Bitrate,Maximum Bitrate OBAE (Encrypted), Main Sound for Maximum Bitrate OBAE (Encrypted)</td></tr></table>

# A.4.161 HDR Sequential Contrast and Uniformity Sequence

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>sequential_contrast_hdr_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[DCI-HDR]</td></tr><tr><td></td><td>PrerequisitesHDR Sequential Contrast Sequence, Silence, 5.1</td></tr></table>

# A.4.162 HDR Color Accuracy Series

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sequential_color_hdr_pt.cpl.xml</td></tr><tr><td>Description</td><td>Composition cycling through the Color Accuracy Color Patch Code Values specified in [DCl-HDR].</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites4K HDR Color Accuracy Series, Silence, 5.1</td></tr></table>

# A.4.163 2K Full SDR Black

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_full_sdr_black_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K full SDR black composition where the MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K FullSDR Black, Silence,5.1,15 minutes</td></tr></table>

# A.4.164 2K Scope SDR Black

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_scope_sdr_black_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K scope SDR black composition where the MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr></table>

# A.4.165 2K Flat SDR Black

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_flat_sdr_black_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K flat SDR black composition where the MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Flat SDR Black,Silence,5.1,15 minutes</td></tr></table>

# A.4.166 4K Full SDR Black

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_full_sdr_black_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K full SDR black composition where the MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Full SDR Black,Silence,5.1,15 minutes</td></tr></table>

# A.4.167 4K Scope SDR Black

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_scope_sdr_black_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K scope SDR black composition where the MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Scope SDR Black,Silence,5.1,15 minutes</td></tr></table>

# A.4.168 4K Flat SDR Black

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_flat_sdr_black_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K flat SDR black composition where the MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Flat SDR Black,Silence,5.1，15 minutes</td></tr></table>

# A.4.169 2K Full SDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_full_sdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K full SDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Full SDR Black with Marks, Silence,5.1,15 minutes</td></tr></table>

# A.4.170 2K Scope SDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_scope_sdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K scope SDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Scope SDR Black with Marks, Silence,5.1,15 minutes</td></tr></table>

# A.4.171 2K Flat SDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_flat_sdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K flat SDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Flat SDR Black with Marks,Silence,5.1,15 minutes</td></tr></table>

# A.4.172 4K Full SDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_full_sdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K full SDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Full SDR Black with Marks, Silence,5.1,15 minutes</td></tr></table>

# A.4.173 4K Scope SDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_scope_sdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K scope SDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Scope SDR Black with Marks, Silence, 5.1,15 minutes</td></tr></table>

# A.4.174 4K Flat SDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_flat_sdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K flat SDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Flat SDR Black with Marks,Silence, 5.1,15 minutes</td></tr></table>

# A.4.175 2K Full SDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_full_sdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K full SDR composition with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Full SDR Black with Active Area, Silence,5.1,15 minutes</td></tr></table>

# A.4.176 2K Scope SDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_scope_sdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K scope SDR composition with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Scope SDR Black with Active Area, Silence,5.1,15 minutes</td></tr></table>

# A.4.177 2K Flat SDR Black with Active Area

<table><tr><td>Type CPL</td></tr></table>

<table><tr><td>Filename</td><td>2k_flat_sdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K flat SDR with an active area indicated by registration marks and specified by the MainPictureActiveAre a item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7], [SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Flat SDR Black with Active Area, Silence, 5.1,15 minutes</td></tr></table>

# A.4.178 4K Full SDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_full_sdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K full SDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K FullSDR Black with Active Area, Silence, 5.1,15 minutes</td></tr></table>

# A.4.179 4K Scope SDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_scope_sdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K scope SDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Scope SDR Black with Active Area, Silence, 5.1,15 minutes</td></tr></table>

# A.4.180 4K Flat SDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_flat_sdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K flat SDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K Flat SDR Black with Active Area, Silence,5.1,15 minutes</td></tr></table>

# A.4.181 Stereoscopic SDR Contrast Test Patterns

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sdr_contrast_stereo_pt.cpl.xml</td></tr><tr><td>Description</td><td>Sequence of ful-screen white and black frames designed to evaluate the stereoscopic contrast performance of the Imaging Device.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-10],[SMPTE-429-16]</td></tr><tr><td></td><td>PrerequisitesSDR Stereoscopic Contrast Test Patterns, Silence,5.1,15 minutes</td></tr></table>

# A.4.182 4K Scaling Test Patterns

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>4k_scaling_patterns_pt.cpl.xml</td></tr><tr><td>Description</td><td>Static presentation of thin lines for the purpose of detecting scaling artifacts.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-10],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K SDR Scaling Test Pattern, Silence,5.1,15 minutes</td></tr></table>

# A.4.183 Steroscopic Color Accuracy Series

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>color_accuracy_stereo_pt.cpl.xml</td></tr><tr><td>Description</td><td>Stereoscopic Composition that displays the color patches illustrated at Annex A.2.12.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-7],[SMPTE-429-7]</td></tr><tr><td></td><td>PrerequisitesStereoscopic Color Accuracy Series, Silence,5.1,15 minutes</td></tr></table>

# A.4.184 4K White Lines

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>white_lines_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K composition that presents white lines on a black background.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K SDR White Lines on Black Background,Silence,5.1,15 minutes</td></tr></table>

# A.4.185 DCI HDR Gray Steps

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>hdr_gray_step.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>PrerequisitesHDR Black to Gray Step Series, Silence,5.1,15 minutes</td></tr></table>

# A.4.186 DCI HDR White Steps

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>hdr_white_step.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>PrerequisitesHDR Black to White Step Series,Silence,5.1,15 minutes</td></tr></table>

# A.4.187 2K Full HDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_full_hdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K full HDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites2K FullHDR Black with Marks,Silence, 5.1,15 minutes</td></tr></table>

# A.4.188 2K Scope HDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_scope_hdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K scope HDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites2K Scope HDR Black with Marks, Silence,5.1,15 minutes</td></tr></table>

# A.4.189 2K Flat HDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_flat_hdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K flat HDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites2K Flat HDR Black with Marks,Silence,5.1,15 minutes</td></tr></table>

# A.4.190 4K Full HDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_full_hdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K full HDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites4K FullHDR Black with Marks,Silence,5.1,15 minutes</td></tr></table>

# A.4.191 4K Scope HDR Black with Marks

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>4k_scope_hdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K scope HDR black composition with registration marks. The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites4K Scope HDR Black with Marks, Silence,5.1,15 minutes</td></tr></table>

# A.4.192 4K Flat HDR Black with Marks

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_flat_hdr_black_marks_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K flat HDR black composition with registration marks.The MainPictureActiveArea item of the CPL is set to the dimensions of the encoded image.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites4K Flat HDR Black with Marks,Silence,5.1,15 minutes</td></tr></table>

# A.4.193 2K Full HDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_full_hdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K full HDR composition with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites2K Full HDR Black with Active Area, Silence,5.1,15 minutes</td></tr></table>

# A.4.194 2K Scope HDR Black with Active Area

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_scope_hdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K scope HDR composition with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td></td><td>Conforms t0[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites2K Scope HDR Black with Active Area, Silence,5.1,15 minutes</td></tr></table>

# A.4.195 2K Flat HDR Black with Active Area

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_flat_hdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K flat HDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites2K Flat HDR Black with Active Area, Silence, 5.1,15 minutes</td></tr></table>

# A.4.196 4K Full HDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_full_hdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K full HDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites4K FullHDR Black with Active Area, Silence,5.1,15 minutes</td></tr></table>

# A.4.197 4K Scope HDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_scope_hdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K scope HDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>Prerequisites4K Scope HDR Black with Active Area, Silence, 5.1,15 minutes</td></tr></table>

# A.4.198 4K Flat HDR Black with Active Area

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_flat_hdr_black_active_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K flat HDR with an active area indicated by registration marks and specified by the MainPictureActiveArea item of the CPL.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr></table>

# A.4.199 SDR Detection

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>sdr_detection.cpl.xml</td></tr><tr><td>Description</td><td>SDR composition intended to verify that the system is configured to playback SDR presentations.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites </td><td>SDR verification pattern, Silence,5.1,15 minutes</td></tr></table>

# A.4.200 HDR Detection

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>hdr_detection.cpl.xml</td></tr><tr><td>Description</td><td>HDR composition intended to verify that the system is configured to playback HDR presentations.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>PrerequisitesHDR verification pattrn, Silence,5.1,15 minutes</td></tr></table>

# A.4.201 2K 2D 24 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>2k_2d_24_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td> 2K 2D composition at 24 fps intended to verify that an imaging device displays all images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>2K 2D 24 FPS Test,24 FPS test,24 FPS test timecode</td></tr></table>

# A.4.202 2K 2D 48 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_2d_48_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K 2D composition at 48 fps intended to verify that an imaging device displays allimages.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites2</td><td>2K 2D 48 FPS Test,48 FPS test, 48 FPS test timecode</td></tr></table>

# A.4.203 2K 2D 60 FPS Test

<table><tr><td>Type CPL</td></tr></table>

<table><tr><td> Filename</td><td>2k_2d_60_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K 2D composition at 60 fps intended to verify that an imaging device displays allimages.</td></tr><tr><td>Conforms to[</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K 2D 60 FPS Test, 60 FPS test, 60 FPS test timecode</td></tr></table>

# A.4.204 2K 2D 96 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_2d_96_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td> 2K 2D composition at 96 fps intended to verify that an imaging device displays all images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>2K 2D 96 FPS Test,96 FPS test, 96 FPS test timecode</td></tr></table>

# A.4.205 2K 2D 120 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>2k_2d_120_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K 2D composition at 120 fps intended to verify that an imaging device displays al images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>2K 2D 120 FPS Test,120 FPS test,120 FPS test timecode</td></tr></table>

# A.4.206 2K Stereoscopic 24 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_stereo_24_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td> 2K stereoscopic composition at 24 fps intended to verify that an imaging device displays allimages.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[SMPTE-429-10]</td></tr><tr><td>Prerequisites</td><td>2K Stereoscopic 24 FPS Test,24 FPS test,24 FPS test timecode</td></tr></table>

# A.4.207 2K Stereoscopic 48 FPS Test

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>2k_stereo_48_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>2K stereoscopic composition at 48 fps intended to verify that an imaging device displays all images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16] </td></tr><tr><td></td><td>Prerequisites2K Stereoscopic 48 FPS Test, 48 FPS test, 48 FPS test timecode</td></tr></table>

# A.4.208 2K Stereoscopic 60 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>2k_stereo_60_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td> 2K stereoscopic composition at 60 fps intended to verify that an imaging device displays allimages.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites2K Stereoscopic 60 FPS Test,60 FPS test,60 FPS test timecode</td></tr></table>

# A.4.209 4K 2D 24 FPS Test

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_2d_24_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K 2D composition at 24 fps intended to verify that an imaging device displays al images.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K 2D 24 FPS Test, 24 FPS test,24 FPS test timecode</td></tr></table>

# A.4.210 4K 2D 48 FPS Test

<table><tr><td>Type CPL</td><td></td></tr><tr><td> Filename</td><td>4k_2d_48_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K 2D composition at 48 fps intended to verify that an imaging device displays allimages.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td>4K 2D 48 FPS Test,48 FPS test,48 FPS test timecode</td></tr></table>

# A.4.211 4K 2D 60 FPS Test

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>4k_2d_60_fps_pt.cpl.xml</td></tr><tr><td>Description</td><td>4K 2D composition at 60 fps intended to verify that an imaging device displays allimages.</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td></td><td>Prerequisites4K 2D 60 FPS Test, 60 FPS test, 60 FPS test timecode</td></tr></table>

# A.4.212 SDR Dark Gray Scale

<table><tr><td>Type</td><td>CPL</td></tr><tr><td>Filename</td><td>sdr_dark_gray_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16]</td></tr><tr><td>Prerequisites</td><td> SDR Dark Gray Scale,Silence,5.1,15 minutes</td></tr></table>

# A.4.213 HDR Dark Gray Scale

<table><tr><td>Type CPL</td><td></td></tr><tr><td>Filename</td><td>hdr_dark_gray_pt.cpl.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-429-7],[SMPTE-429-16],[DCI-HDR]</td></tr><tr><td></td><td>PrerequisitesHDR Dark Gray Scale, Silence,5.1,15 minutes</td></tr></table>

# A.5 Digital Certificates

Six certificate chains are defined, which separate certificates by device type and level of conformity. In the descriptions below, the IMB label refers to a certificate which contains roles for a Media Block (MB) or a certificate which signs such certificates. Similarly, PRJ refers to certificates or signers associated with an Imaging Device and KDS refers to certificates associated with a Key Distribution System (a KDM authoring entity).

Chain A1 contains valid IMB certificates.   
Chain A2 contains valid IMB certificates but the chain has no intermediate signers.   
Chain A3 contains invalid IMB certificates.   
Chain B1 contains valid PRJ certificates.   
Chain C1 contains valid KDS certificates.   
Chain C3 contains invalid KDS certificates.

# A.5.1 Chain A1 IMB Certificate Files

Contents removed, not used by any procedure

# A.5.2 Chain A2 IMB Certificate Files

Contents removed, not used by any procedure

# A.5.3 Chain A3 IMB Certificate Files

A.5.3.1 chain-a3-root   

<table><tr><td>Type</td><td> IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-root.pem</td></tr><tr><td>Description</td><td>Root cert, malformed leaves</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

<table><tr><td>Prerequisiteschain-a3-root-key</td></tr></table>

# A.5.3.2 chain-a3-signer1

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td> Filename</td><td>IMB-chain-a3-signer1.pem</td></tr><tr><td>Description</td><td>Intermediate Signer, level one</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>Prerequisiteschain-a3-root, chain-a3-signer1-key</td></tr></table>

# A.5.3.3 chain-a3-osig-type

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-osig-type.pem</td></tr><tr><td>Description</td><td>Signature algorithm of outside signature not sha256WithRSAEncryption</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr><tr><td></td><td> MalformationsSignature algorithm of outside signature is sha1WithRSAEncryption</td></tr></table>

A.5.3.4 chain-a3-isig-type   

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-isig-type.pem</td></tr><tr><td> Description</td><td> Signature algorithm inside signature not sha256WithRSAEncryption</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites 中银</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsSignature algorithm inside the signature is shalWithRSAEncryption</td></tr></table>

A.5.3.5 chain-a3-iosig-type   

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-iosig-type.pem</td></tr><tr><td>Description</td><td>Signature algorithm inside and outside identical, but not sha256WithRSAEncryption</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsSignature algorithm is sha1WithRSAEncryption</td></tr></table>

A.5.3.6 chain-a3-no-rsa   

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-rsa.pem</td></tr><tr><td>Description</td><td> Public Key not an RSA Key</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-no-rsa-key</td></tr><tr><td></td><td>MalformationsPublic Key is a DSA key.</td></tr></table>

A.5.3.7 chain-a3-short-rsa   

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-short-rsa.pem</td></tr><tr><td>Description</td><td>Public Key Length 1024 bit</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-short-rsa-key</td></tr><tr><td></td><td>MalformationsPublic key is 1024 bits.</td></tr></table>

A.5.3.8 chain-a3-bad-exp   

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-bad-exp.pem</td></tr><tr><td>Description</td><td>Public Key Exponent other than the required 65537</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td> chain-a3-signer1, chain-a3-bad-exp-key</td></tr><tr><td>MalformationsPublic Key Exponent is 3.</td><td></td></tr></table>

A.5.3.9 IMB-chain-a3-BER-enc   

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-BER-enc.pem</td></tr><tr><td>Description</td><td>Encoded as BER (not DER)</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td> chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td>MalformationsCertificate uses BER encoding.</td><td></td></tr></table>

# A.5.3.10 chain-a3-no-saf

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-saf.pem</td></tr><tr><td>Description</td><td>Missing SignatureAlgorithm field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsSignatureAlgorithm field is not present</td></tr></table>

# A.5.3.11 chain-a3-no-svf

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-svf.pem</td></tr><tr><td>Description</td><td>Missing SignatureValue field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing SignatureValue field</td></tr></table>

# A.5.3.12 chain-a3-no-ver

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-ver.pem</td></tr><tr><td>Description</td><td>Missing Version field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td>MalformationsMissing Version field</td><td></td></tr></table>

# A.5.3.13 chain-a3-no-sn

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-sn.pem</td></tr><tr><td>Description</td><td>Missing SerialNumber field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td> chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td>MalformationsMissing SerialNumber field</td><td></td></tr></table>

# A.5.3.14 chain-a3-no-sig

<table><tr><td>Type</td><td> IMB Certificate</td></tr><tr><td> Filename</td><td>IMB-chain-a3-no-sig.pem</td></tr><tr><td>Description</td><td>Missing Signature field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key,chain-a3-signer1,chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing Signature field</td></tr></table>

# A.5.3.15 chain-a3-no-issuer

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-issuer.pem</td></tr><tr><td>Description</td><td>Missing Issuer field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsThe Issuer field is not present.</td></tr></table>

# A.5.3.16 chain-a3-no-subject

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-subject.pem</td></tr><tr><td>Description</td><td>Missing Subject field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td>MalformationsMissing Subject field</td><td></td></tr></table>

# A.5.3.17 chain-a3-no-spki

<table><tr><td>Type</td><td> IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-spki.pem</td></tr><tr><td>Description</td><td>Missing SubjectPublicKeylnfo field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing SubjectPublicKeylnfo field</td></tr></table>

# A.5.3.18 chain-a3-no-val-f

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-val-f.pem</td></tr><tr><td>Description</td><td>Missing Validity field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing Validity field</td></tr></table>

# A.5.3.19 chain-a3-no-aki-f

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-aki-f.pem</td></tr><tr><td>Description</td><td>Missing AuthorityKeyldentifier field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsThe AuthorityKeyldentifier is not present.</td></tr></table>

# A.5.3.20 chain-a3-no-keyuse

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-keyuse.pem</td></tr><tr><td>Description</td><td>Missing KeyUsage field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td> chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td>MalformationsThe Key Usage field is not present.</td><td></td></tr></table>

# A.5.3.21 chain-a3-no-basic

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-no-basic.pem</td></tr><tr><td>Description</td><td>Missing BasicConstraint field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsThe Basic Constraints field is not present.</td></tr></table>

# A.5.3.22 chain-a3-path-1

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-path-1.pem</td></tr><tr><td>Description</td><td>Cert.Auth. true, PathLen present and positive</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr></table>

# A.5.3.23 chain-a3-path-2

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-path-2.pem</td></tr><tr><td>Description</td><td>Cert.Auth. true, PathLen present and positive</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr></table>

# A.5.3.24 chain-a3-path-3

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-path-3.pem</td></tr><tr><td>Description</td><td>Cert.Auth. true, PathLen present and negative</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td>MalformationsPathLen is -1.</td><td></td></tr></table>

# A.5.3.25 chain-a3-path-4

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td> Filename</td><td>IMB-chain-a3-path-4.pem</td></tr><tr><td>Description</td><td>Cert.Auth.false,PathLen absent</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr></table>

# A.5.3.26 chain-a3-path-5

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-path-5.pem</td></tr><tr><td>Description</td><td>Cert.Auth. false, PathLen positive</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr></table>

# A.5.3.27 chain-a3-path-6

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-path-6.pem</td></tr><tr><td>Description</td><td>Cert.Auth. false,PathLen positive</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr></table>

# A.5.3.28 chain-a3-path-7

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-path-7.pem</td></tr><tr><td>Description</td><td>Cert.Auth. false,PathLen negative</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr></table>

# A.5.3.29 chain-a3-org-name

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-org-name.pem</td></tr><tr><td>Description</td><td>OrganizationName in subject and issuer fields does not match</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr><tr><td></td><td> MalformationsOrganizationName in subject field has first two letters transposed.</td></tr></table>

# A.5.3.30 chain-a3-role-1

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-role-1.pem</td></tr><tr><td>Description</td><td>Cert.Auth. False,no role specified in CommonName</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>Prerequisiteschain-a3-signer1,chain-a3-leaf-key</td></tr></table>

<table><tr><td>MalformationsCommon Name begins with a period (&quot;.&quot;)</td></tr></table>

# A.5.3.31 chain-a3-role-2

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td>Filename</td><td>IMB-chain-a3-role-2.pem</td></tr><tr><td>Description</td><td>Non-SMS role in CN</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1, chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsCommon Name does not include SMS in the section to the left of the first period (&quot;.&quot;).</td></tr></table>

# A.5.3.32 chain-a3-date-exp

<table><tr><td>Type IMB Certificate</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-date-exp.pem</td></tr><tr><td>Description</td><td>Expired</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-a3-signer1,chain-a3-leaf-key</td></tr><tr><td></td><td>MalformationsCertificate Not After field contains a date value in the past.</td></tr></table>

# A.5.4 Chain B1 Certificate Files

A.5.4.1 chain-b1-root   

<table><tr><td>Type</td><td>PRJ Certificate</td></tr><tr><td>Filename</td><td>PRJ-chain-b1-root.pem</td></tr><tr><td>Description</td><td>Self-signed root certificate for PRJ devices</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-b1-root-key</td></tr></table>

# A.5.5 Chain C1 Certificate Files

# A.5.5.1 chain-c1-root

<table><tr><td>Type KDS Certificate</td></tr><tr><td>Filename KDS-chain-c1-root.pem</td></tr><tr><td>Description Self-signed root certificate for KDS devices</td></tr><tr><td>Conforms to [SMPTE-430-2]</td></tr></table>

# A.5.6 Chain C3 Certificate Files

A.5.6.1 chain-c3-root   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-root.pem</td></tr><tr><td>Description</td><td>Self-signed root certificate for KDS devices</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-root-key</td></tr></table>

A.5.6.2 chain-c3-signer1   

<table><tr><td>Type</td><td>IMB Certificate</td></tr><tr><td> Filename</td><td>KDS-chain-c3-signer1.pem</td></tr><tr><td>Description</td><td>Intermediate Signer, level one</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-root, chain-c3-signer1-key</td></tr></table>

A.5.6.3 chain-c3-osig-type   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-osig-type.pem</td></tr><tr><td>Description</td><td>Signature algorithm of outside signature is sha1WithRSAEncryption</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>中银 chain-c3-signer1,chain-c3-leaf-key</td></tr></table>

A.5.6.4 chain-c3-isig-type   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-isig-type.pem</td></tr><tr><td>Description</td><td>Signature algorithm inside signature not sha256WithRSAEncryption</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsSignature algorithm inside the signature is sha1WithRSAEncryption</td></tr></table>

# A.5.6.5 chain-c3-iosig-type

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-iosig-type.pem</td></tr><tr><td>Description</td><td>Signature algorithm inside and outside identical, but not sha256WithRSAEncryption</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites(</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td> MalformationsSignature algorithm is sha1WithRSAEncryption</td></tr></table>

# A.5.6.6 chain-c3-no-rsa

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-rsa.pem</td></tr><tr><td>Description</td><td> Public Key not an RSA Key</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-no-rsa-key </td></tr><tr><td>MalformationsPublic key is DSA key</td><td></td></tr></table>

A.5.6.7 chain-c3-short-rsa   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-short-rsa.pem</td></tr><tr><td>Description</td><td>Public Key Length 1024 bit</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-short-rsa-key</td></tr><tr><td>MalformationsPublic key is 1024 bits.</td><td></td></tr></table>

A.5.6.8 chain-c3-bad-exp   
A.5.6.9 chain-c3-BER-enc   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-bad-exp.pem</td></tr><tr><td>Description</td><td>Public Key Exponent other than default 65537</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-bad-exp-key</td></tr><tr><td></td><td>MalformationsPublic Key Exponent is 3.</td></tr><tr><td>Filename</td><td>KDS-chain-c3-BER-enc.pem</td></tr><tr><td>Description</td><td>Encoded as BER (not DER)</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites(</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsCertificate uses BER encoding.</td></tr></table>

# A.5.6.10 chain-c3-no-saf

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-saf.pem</td></tr><tr><td>Description</td><td>Missing SignatureAlgorithm field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsSignatureAlgorithm field is not present</td></tr></table>

# A.5.6.11 chain-c3-no-svf

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-svf.pem</td></tr><tr><td>Description</td><td>Missing SignatureValue field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td>MalformationsMissing SignatureValue field</td><td></td></tr></table>

# A.5.6.12 chain-c3-no-ver

A.5.6.13 chain-c3-no-sn   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-ver.pem</td></tr><tr><td>Description</td><td>Missing Version field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing Version field</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-sn.em</td></tr><tr><td>Description</td><td>Missing SerialNumber field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing SerialNumber field</td></tr></table>

# A.5.6.14 chain-c3-no-sig

<table><tr><td>Type KDS Certificate</td><td></td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-sig.pem</td></tr><tr><td>Description</td><td>Missing Signature field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td>MalformationsMissing Signature field</td><td></td></tr></table>

# A.5.6.15 chain-c3-no-issuer

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-issuer.pem</td></tr><tr><td>Description</td><td>Missing Issuer field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites </td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td>MalformationsThe Issuer field is not present.</td><td></td></tr></table>

# A.5.6.16 chain-c3-no-subject

A.5.6.17 chain-c3-no-spki   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-subject.pem</td></tr><tr><td>Description</td><td>Missing Subject field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing Subject field</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-spki.pem</td></tr><tr><td>Description</td><td>Missing SubjectPublicKeylnfo field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>Prerequisiteschain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsMissing SubjectPublicKeylnfo field</td></tr></table>

# A.5.6.18 chain-c3-no-val-f

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-val-f.pem</td></tr><tr><td>Description</td><td>Missing Validity field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td>MalformationsMissing Validity field</td><td></td></tr></table>

# A.5.6.19 chain-c3-no-aki-f

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-aki-f.pem</td></tr><tr><td>Description</td><td>Missing AuthorityKeyldentifier field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsThe AuthorityKeyldentifier is not present.</td></tr></table>

# A.5.6.20 chain-c3-no-keyuse

A.5.6.21 chain-c3-no-basic   

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-keyuse.pem</td></tr><tr><td>Description</td><td>Missing KeyUsage field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsThe Key Usage field is not present.</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-basic.pem</td></tr><tr><td>Description</td><td>Missing BasicConstraint field</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsThe Basic Constraints field is not present.</td></tr></table>

# A.5.6.22 chain-c3-path-1

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td> Filename</td><td>KDS-chain-c3-path-1.pem</td></tr><tr><td>Description</td><td>Cert.Auth. true, PathLenpresent and zero</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>Prerequisiteschain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.6.23 chain-c3-path-2

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-path-2.pem</td></tr><tr><td>Description</td><td>Cert.Auth. true,PathLen present and positive</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>银 chain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.6.24 chain-c3-path-3

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-path-3.pem</td></tr><tr><td>Description</td><td>Cert.Auth. true, PathLen present and negative</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsPathLen is -1.</td></tr></table>

# A.5.6.25 chain-c3-path-4

<table><tr><td colspan="2">Type KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-path-4.pem</td></tr><tr><td>Description</td><td>Cert.Auth.false,PathLenabsent</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.6.26 chain-c3-path-5

<table><tr><td>Type</td><td> KDS Certificate</td></tr><tr><td> Filename</td><td>KDS-chain-c3-path-5.pem</td></tr><tr><td>Description</td><td>Cert.Auth.false,PathLen zero</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>Prerequisiteschain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.6.27 chain-c3-path-6

<table><tr><td>Type</td><td> KDS Certificate</td></tr><tr><td> Filename</td><td>KDS-chain-c3-path-6.pem</td></tr><tr><td>Description</td><td>Cert.Auth. false,PathLen positive</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.6.28 chain-c3-path-7

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-path-7.pem</td></tr><tr><td>Description</td><td>Cert.Auth. false,PathLen negative</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.6.29 chain-c3-org-name

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-org-name.pem</td></tr><tr><td>Description</td><td>OrganizationName in subject and issuer fields does not match</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsOrganizationName in subject field has first two letters transposed.</td></tr></table>

# A.5.6.30 chain-c3-role-1

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-role-1.pem</td></tr><tr><td>Description</td><td>Cert.Auth. False, no role specified in CommonName</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsCommon Name begins with a period (&quot;.&quot;)</td></tr></table>

# A.5.6.31 chain-c3-date-exp

<table><tr><td>Type</td><td>KDS Certificate</td></tr><tr><td>Filename</td><td>KDS-chain-c3-date-exp.pem</td></tr><tr><td>Description</td><td>Expired</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr><tr><td></td><td>MalformationsCertificate Not After field contains a date value in the past.</td></tr></table>

# A.5.6.32 chain-c3-role-2

<table><tr><td>Type KDS Certificate</td><td></td></tr><tr><td>Filename</td><td>KDS-chain-c3-role-2.pem</td></tr><tr><td>Description</td><td>Cert.Auth.False,role error (CN contains only FMI).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>Prerequisites</td><td>chain-c3-signer1,chain-c3-leaf-key</td></tr></table>

# A.5.7 Public/Private Key Pairs

# A.5.7.1 chain-a3-bad-exp-key

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td>Filename</td><td>IMB-chain-a3-bad-exp-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for Public Key Exponent other than the required 65537</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>MalformationsPublic Key Exponent is 3.</td></tr></table>

# A.5.7.2 chain-a3-leaf-key

<table><tr><td>Type</td><td> RSA keypair</td></tr><tr><td>Filename</td><td>IMB-chain-a3-leaf-key.pem</td></tr><tr><td>Description</td><td> RSA keypair for leaf</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

# A.5.7.3 chain-a3-no-rsa-key

<table><tr><td>Type</td><td>DSA keypair</td></tr><tr><td>Filename</td><td> IMB-chain-a3-no-rsa-key.pem</td></tr><tr><td>Description</td><td>DSA keypair for Public Key not an RSA Key</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>MalformationsPublic Key is a DSA key.</td></tr></table>

# A.5.7.4 chain-a3-root-key

<table><tr><td>Type RSA keypair</td><td></td></tr><tr><td>Filename</td><td>IMB-chain-a3-root-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for root cert, malformed leaves</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

A.5.7.5 chain-a3-short-rsa-key   

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td>Filename</td><td> IMB-chain-a3-short-rsa-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for Public Key Length 1024 bit</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td></td><td>MalformationsPublic key is 1024 bits.</td></tr></table>

A.5.7.6 chain-a3-signer1-key   

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td>Filename</td><td>IMB-chain-a3-signer1-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for Intermediate Signer, level one</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

# A.5.7.7 chain-c1-root-key

<table><tr><td>Type RSA keypair</td></tr><tr><td colspan="2">Filename KDS-chain-c1-root-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for self-signed root certificate for KDS devices</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

# A.5.7.8 chain-c3-bad-exp-key

<table><tr><td>Type RSA keypair</td><td></td></tr><tr><td>Filename</td><td>KDS-chain-c3-bad-exp-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for Public Key Exponent other than default 65537</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td>MalformationsPublic Key Exponent is 3.</td><td></td></tr></table>

# A.5.7.9 chain-c3-leaf-key

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td>Filename</td><td>KDS-chain-c3-leaf-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for leaf</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

# A.5.7.10 chain-c3-no-rsa-key

<table><tr><td>Type</td><td>DSA keypair</td></tr><tr><td>Filename</td><td>KDS-chain-c3-no-rsa-key.pem</td></tr><tr><td>Description</td><td>DSA keypair for Public Key not an RSA Key</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td> Malformations</td><td>Public Key is a DSA key.</td></tr></table>

# A.5.7.11 chain-c3-root-key

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td> Filename</td><td>KDS-chain-c3-root-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for self-signed root certificate for KDS devices</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

# A.5.7.12 chain-c3-short-rsa-key

<table><tr><td>Type RSA keypair</td><td></td></tr><tr><td>Filename</td><td>KDS-chain-c3-short-rsa-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for Public Key Length 1024 bit</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr><tr><td> Malformations</td><td>Public key is 1024 bits.</td></tr></table>

# A.5.7.13 chain-c3-signer1-key

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td>Filename</td><td>KDS-chain-c3-signer1-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for Intermediate Signer, level one</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

A.5.7.14 chain-b1-root-key   

<table><tr><td>Type</td><td>RSA keypair</td></tr><tr><td> Filename</td><td>PRJ-chain-b1-root-key.pem</td></tr><tr><td>Description</td><td>RSA keypair for self-signed root certificate for PRJ devices</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-2]</td></tr></table>

# A.6 Key Delivery Messages

# A.6.1 Introduction

The KDM files defined in this section must be generated for the Test Subject and the time and date of the test procedure.

# A.6.2 KDM for DCI 2K Sync Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_sync_test_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl 2K Sync Test (Encrypted)</td></tr></table>

# A.6.3 KDM for DCI 2K Sync Test with Subtitles (Encrypted)

A.6.4 KDM for DCI 2K Image with Frame Number Burn In (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sync_test_with_subs_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync test with Subtitles (Encrypted)</td></tr><tr><td>Filename</td><td>frame_num_burn_in_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl 2K Image with Frame Number Burn In (Encrypted)</td></tr></table>

# A.6.5 KDM for 2K StEM (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_StEM_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K StEM (Encrypted) 中</td></tr></table>

# A.6.6 KDM for 2K StEM Sequence (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_StEM_sequence_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI 2K StEM Test Sequence (Encrypted)</td></tr></table>

# A.6.7 KDM for 128 Reel Composition, "A" Series (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_StEM_128_a_reels_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has all content keys for the track files referenced by the CPL,and additionally has one each of key types FMIK and FMAK.The FMIK and FMAK key values shallbe appropriate for the specifications of</td></tr><tr><td></td><td>the FM system used by the Test Subject.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>128 Reel Composition, &quot;A&quot; Series (Encrypted)</td></tr></table>

# A.6.8 KDM for 128 Reel Composition, "B" Series (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_StEM_128_b_reels_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has all content keys for the track files referenced by the CPL,and additionally has one each of key types FMIK and FMAK.The FMIK and FMAK key values shallbe appropriate for the specifications of</td></tr><tr><td></td><td>the FM system used by the Test Subject.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr></table>

<table><tr><td>Prerequisites128 Reel Composition, &quot;B&quot; Series (Encrypted)</td></tr></table>

# A.6.9 KDM for 64 1 second reel Composition (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_StEM_64_1_second_reels_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites64 Reel Composition,1 Second Reels (Encrypted)</td></tr></table>

# A.6.10 KDM for 2K FM Application Constraints (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_constraints_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td> 2K FM Application Constraints (Encrypted)</td></tr></table>

# A.6.11 KDM for 2K FM Control Granularity - No FM (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_no_fm.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Control Granularity - No FM (Encrypted)</td></tr></table>

# A.6.12 KDM for 2K FM Control Granularity $^ { \ast }$ Image Only FM (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_only_fm.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Control Granularity - Image Only FM (Encrypted)</td></tr></table>

# A.6.13 KDM for 2K FM Control Granularity - Sound Only FM (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_sound_only_fm.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2K FM Control Granularity - Sound Only FM (Encrypted)</td></tr></table>

# A.6.14 KDM for 2K FM Control Granularity $^ { \ast }$ Image and Sound FM (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_and_sound_fm.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Control Granularity - Image and Sound FM (Encrypted)</td></tr></table>

# A.6.15 KDM for 2K FM Payload (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_payload_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites2K FM Payload (Encrypted)</td><td></td></tr></table>

# A.6.16 KDM for Binary Audio Forensic Marking Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>binary_audio_fm_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with &quot;no FM mark&quot; flag applied to audio.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesBinary Audio Forensic Marking Bypass Test (Encrypted)</td></tr></table>

# A.6.17 KDM for Binary Selective Audio Forensic Marking Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>binary_selective_audio_fm_6ch_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with audio forensic marking disabled on audio channels above 6 using the &quot;selective audio FM mark&quot; command.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesBinary Audio Forensic Marking Bypass Test (Encrypted)</td></tr></table>

# A.6.18 KDM for Selective Audio FM - All FM (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>selective_audio_fm_all-fm_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with all audio forensic marking enabled on all audio channels.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesSelective Audio FM - All FM (Encrypted)</td></tr></table>

# A.6.19 KDM for Selective Audio FM - No FM (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>selective_audio_fm_no-fm_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with all audio forensic marking disabled by the &quot;no FM mark&quot; URl.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>Selective Audio FM - No FM (Encrypted)</td></tr></table>

# A.6.20 KDM for Selective Audio FM - Not Above Channel 6 (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>selective_audio_fm_6ch_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with audio forensic marking disabled on audio channels above 6 using the &quot;selective audio FM mark&quot; command.The KDM also has the &quot;no FM mark&quot; URl,which should be overridden by the &quot;selective</td></tr><tr><td>Conforms to</td><td>audio FM mark&quot; URI. [SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>Selective Audio FM - Not Above Channel 6 (Encrypted)</td></tr></table>

# A.6.21 KDM for Selective Audio FM - Not Above Channel 8 (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>selective_audio_fm_8ch_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with audio forensic marking disabled on audio channels above 8 using the &quot;selective audio FM mark&quot; command.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesSelective Audio FM - Not Above Channel 8 (Encrypted)</td></tr></table>

# A.6.22 KDM for Selective Audio FM - Not Above Channel 10 (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>selective_audio_fm_10ch_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with audio forensic marking disabled on audio channels above 10 using the &quot;selective audio FM mark&quot; command.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesSelective Audio FM - Not Above Channel 10 (Encrypted)</td></tr></table>

# A.6.23 KDM for Selective Audio FM - Not Above Channel 17 (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>selective_audio_fm_17ch_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM with audio forensic marking disabled on audio channels above 17 using the &quot;selective audio FM mark&quot; command.The KDM also has the &quot;no FM mark&quot; URl,which should be overridden by the &quot;selective</td></tr><tr><td>Conforms to</td><td>audio FM mark&quot; URI. [SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesSelective Audio FM - Not Above Channel 17 (Encrypted)</td></tr></table>

# A.6.24 KDM with two selective audio FM mark URIs

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>kdm-malf-2-selective-fm-cmds.kdm.xml</td></tr><tr><td>Description</td><td>KDM that contains more than one selective audio FM mark URls</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>KDM contains one ForensicMarkFlag element with the value http://www.dcimovies.com/430- 1/2006/KDM#mrkflg-audio-disable-above-channel-06,and one ForensicMarkFlag element with the value http://www.dcimovies.com/430-1/2006/KDM#mrkflg-audio-disable-above-channel-08.</td></tr></table>

# A.6.25 KDM for 2K Maximum Bitrate Composition (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_max_bitrate_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2K DCI Maximum Bitrate Composition (Encrypted)</td></tr></table>

# A.6.26 KDM for 4K Maximum Bitrate Composition (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>4K_max_bitrate_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>64K DCl Maximum Bitrate Composition (Encrypted)</td></tr></table>

# A.6.27 KDM for Past Time Window Extension (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>holdover_long_ct-kdm-short-expire.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has a validity period that is current, but expires in the near future</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>End of Engagement - Past Time Window Extension (Encrypted)</td></tr><tr><td>Malformations</td><td>The value of the ContentKeysNotValidAfter element is a UTC timestamp no greater than 60 minutes in the future.</td></tr></table>

# A.6.28 KDM for Within Time Window Extension (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>holdover_short_ct-kdm-short-expire.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has a validity period that is current, but expires in the near future</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>End of Engagement - Within Time Window Extension (Encrypted)</td></tr><tr><td></td><td>MalformationsThe value ofthe ContentKeysNotValidAfter element is a UTC timestamp no greater than 60 minutes in the future.</td></tr></table>

A.6.29 KDM for DCI Malformed Test 1: Picture with Frame-out-of-order error (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m01_pict_frame_oo_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites </td><td>DCI Malformed Test 1: Picture with Frame-out-of-order eror (Encrypted)</td></tr></table>

A.6.30 KDM for DCI Malformed Test 2: Sound with Frame-out-of-order error (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m02_snd_frame_oo_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 2: Sound with Frame-out-of-order error (Encrypted)</td></tr></table>

A.6.31 KDM for DCI Malformed Test 4: DCP With an incorrect audio TrackFile ID (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m04_sndtk_wrong_file_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl Malformed Test 4: DCP With an incorrect audio TrackFile ID (Encrypted)</td></tr></table>

A.6.32 KDM for DCI Malformed Test 5: DCP With an incorrect image TrackFile ID (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m05_pict_wrong_file_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI Malformed Test 5: DCP With an incorrect image TrackFile ID (Encrypted)</td></tr></table>

A.6.33 KDM for DCI Malformed Test 6: CPL with incorrect track file hashes (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m06_cpl_hash_error_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI Malformed Test 6: CPL with incorrect track file hashes (Encrypted)</td></tr></table>

# A.6.34 KDM for DCI Malformed Test 7: CPL with an Invalid Signature (Encrypted)

A.6.35 KDM for DCI Malformed Test 9: Picture with HMAC error in MXF Track File (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m07_cpl_invalid_signature_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl Malformed Test 7: CPL with an Invalid Signature (Encrypted)</td></tr></table>

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m09_pict_bad_hmac_ct.kdm.xml</td></tr><tr><td>Description</td><td>The KDM does not contain a KDM-borne MIC Key.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 9: Picture with HMAC error in MXF Track File (Encrypted)</td></tr></table>

# A.6.36 KDM for DCI Malformed Test 10: Sound with HMAC error in MXF Track File (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m10_snd_bad_hmac_ct.kdm.xml</td></tr><tr><td>Description</td><td>The KDM does not contain a KDM-borne MIC Key.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 1O: Sound with HMAC error in MXF Track File (Encrypted)</td></tr></table>

A.6.37 KDM for DCI Malformed Test 11: Picture with Check Value error in MXF Track File (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m11_pict_bad_chuk_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI Malformed Test 11: Picture with Check Value error in MXF Track File (Encrypted)</td></tr></table>

A.6.38 KDM for DCI Malformed Test 12: Sound with Check Value error in MXF Track File (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m12_snd_bad_chuk_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites[</td><td>DCI Malformed Test 12: Sound with Check Value eror in MXF Track File (Encrypted)</td></tr></table>

A.6.39 KDM for DCI Malformed Test 13: CPL that references a non-existent track file (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m13_cpl_missing_asset_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test13: CPL that references a non-existent track file (Encrypted)</td></tr></table>

A.6.40 KDM for DCI Malformed Test 14: CPL that does not conform to ST 429-7 (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m14_cpl_format_error_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 14: CPL that does not conform to ST 429-7 (Encrypted)</td></tr></table>

A.6.41 KDM for DCI Malformed Test 15: CPL signed by a certificate not conforming to ST 430-2 (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m15_cpl_signer_format_error_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 15: CPL signed by a certificate not conforming to ST 430-2 (Encrypted)</td></tr></table>

A.6.42 KDM for DCI Malformed Test 16: CPL signed with No Role Certificate (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td> Filename</td><td>m16_cpl_malf_signer_no_role_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl Malformed Test 16: CPL signed with No Role Certificate (Encrypted)</td></tr></table>

# A.6.43 KDM for DCI Malformed Test 17: CPL signed with Bad Role Certificate (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m17_cpl_malf_signer_bad_role_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl Malformed Test 17: CPL signed with Bad Role Certificate (Encrypted)</td></tr></table>

A.6.44 KDM for DCI Malformed Test 18: KDM for CPL signed with Extra Role Certificate (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>m18_cpl_malf_signer_extra_role_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI Malformed Test 18: CPL signed with Extra Role Certificate (Encrypted)</td></tr></table>

# A.6.45 KDM with invalid XML

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-malf-any.kdm.xml</td></tr><tr><td>Description</td><td> KDM that contains an invalid XML file format</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsMissing &lt;/DCinemaSecurityMessage&gt; tag</td></tr></table>

# A.6.46 KDM that has expired

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-expired.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has a validity period that has expired</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe value of the ContentKeysNotValidAfter element is a UTC timestamp at least 24 hours in the past.</td></tr></table>

# A.6.47 KDM with future validity period within the UTC offset

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-near-future.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has a validity period in the future according to the ful ContentKeysNotValidBefore timestamp but is valid now if the UTC offset is ignored.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The value of the ContentKeysNotValidBefore element is a UTC timestamp between 4 and 6 hours in the future,with a local offset of -06:00.</td></tr></table>

# A.6.48 KDM that has recently expired

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-recent-expired.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has a validity period that has expired according to the ful ContentKeysNotValidAfter timestamp but that has not expired if the local offset is ignored.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The value of the ContentKeysNotValidAfter element is a UTC timestamp between 4 and 6 hours in the past, with a local offset of +06:00.</td></tr></table>

# A.6.49 KDM with incorrect message digest

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-malf-sig-digest.kdm.xml</td></tr><tr><td>Description</td><td> KDM in which a Signature Digest has been altered</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The plaintext form of the encrypted message digest in the signature is not the same value as a calculated message digest of the KDM.</td></tr></table>

# A.6.50 KDM with future validity period

<table><tr><td>Type KDM</td></tr></table>

<table><tr><td> Filename</td><td>kdm-future-cy2024.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has a validity period that is in the future</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe value of the ContentKeysNotValidBefore elementis a UTCtimestamp atlast 24 hoursin the future.</td></tr></table>

# A.6.51 KDM with empty TDL

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-no-tdl.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has an empty Trusted Device List (TDL)</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites </td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe DeviceList element of the KDM is empty.</td></tr></table>

# A.6.52 KDM with Assume Trust and random TDL entries

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-assume-trust-and-more.kdm.xml</td></tr><tr><td>Description</td><td>KDM with a TDL consisting of one entry Assume Trust entry (i.e.&quot;2jmj7I5rSw0yVb/ vIWAYkK/YBwk=&quot;) and one random entry.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted)</td></tr></table>

# A.6.53 KDM with the SM alone on the TDL

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-self-tdl.kdm.xml</td></tr><tr><td>Description</td><td> KDM with a single entry on its TDL corresponding the recipient&#x27;s SM certificate.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDMfor 2K StEM (Encrypted)</td></tr></table>

# A.6.54 Deleted Section

The section "KDM with the projector and LDB on the TDL" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.55 KDM with the Imaging Device alone on the TDL

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>kdm-projector-tdl.kdm.xml</td></tr><tr><td> Description</td><td>KDM with a single entry on its TDL corresponding the Imaging Device SPB connected to the MB.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr></table>

# A.6.56 Deleted Section

The section "KDM with the LDB alone on the TDL" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.57 Deleted Section

The section "KDM with imminent expiration date" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.58 KDM with corrupted CipherData block

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-CipherData-block.kdm.xml</td></tr><tr><td>Description</td><td>KDM that contains an Invalid Structure ID field in the CipherData element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The first byte of the Structure ID field contained in the &lt;enc:CipherValue&gt; element inside the &lt;enc:CipherData&gt; element has been changed from &quot;F1&quot; to &quot;1F&quot;</td></tr></table>

# A.6.59 KDM with incorrect signer thumbprint

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-signer-tp.kdm.xml</td></tr><tr><td>Description</td><td>KDM for which the Thumbprint of the Signer&#x27;s Certificate does not match the Signer of the KDM</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The thumbprint of the signer certificate as listed in the KDM is incorrect and does not match the thumbprint for the issuing certificate.</td></tr></table>

# A.6.60 KDM without signer certificate

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-chain.kdm.xml</td></tr><tr><td>Description</td><td>KDM in which the KeyInfo element is missing the leaf certificate used to sign the KDM but otherwise contains all other certificates in the chain.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe certificate that signed the KDM is not included in the KDM.</td></tr></table>

# A.6.61 KDM without AuthorityKey certificate

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-chain-no-cert-authkeyid.kdm.xml</td></tr><tr><td>Description</td><td>KDM in which the Certificate chain does not contain the certificate specified by the AuthorityKeyldentifier value in the Signer Certificate</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsA KDM that specifies the signer&#x27;s ssuer certficate as the AuthorityKeyldentifier but which does not contain that certificate.</td></tr></table>

# A.6.62 KDM with KeyInfo mismatch

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-bad-keyinfo.kdm.xml</td></tr><tr><td>Description</td><td>Keylnfo field of the audio EncryptedKey element does not match the Keylnfo field of the image EncryptedKey element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The KeyInfo element of the audio encrypted key data contains the correct lssuer Name and an incorrect IssuerSerial of the certificate of the recipient of the KDM.</td></tr></table>

# A.6.63 KDM with invalid MessageType

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-malf-bad-MessageType.kdm.xml</td></tr><tr><td>Description</td><td> KDM with an Invalid MessageType element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsMessageType element contains: "htp://ww.smpte-qa.0rg/430-1/2006/KDM#kdm-key-type"</td></tr></table>

# A.6.64 KDM with expired Signer certificate

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-expired-signer.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an expired Signer&#x27;s Certificate and an ETM IssueDate later than Signer&#x27;s Certificate expiry date</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsKDM signer&#x27;s certificate&#x27;s Validity &quot;Not After&quot; date is earlier than ETM IssueDate</td></tr></table>

# A.6.65 KDM issued before certificate valid

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-issue-before-cert-valid.kdm.xml</td></tr><tr><td>Description</td><td> KDM with a valid Signer&#x27;s Certificate, but ETM issue date before Signer&#x27;s Certificate issue date</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe&lt;lssueDate&gt; elementcontainsadate priorto thedateofthe signercertficate&#x27;s Validity&quot;Not Before&quot; date.</td></tr></table>

# A.6.66 KDM validity exceeds signer validity

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-malf-signer-cert-exp-before-kdm-expires.kdm.xml</td></tr><tr><td>Description</td><td> KDM with a validity period that extends beyond the validity of Signer&#x27;s Certificate expiry date.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>PrerequisitesKDM for 2K StEM (Encrypted)</td><td></td></tr><tr><td></td><td>MalformationsThe KDM has a ContentKeysNotValidAfter value later than the signer certificate&#x27;s &quot;Not After&quot; value.</td></tr></table>

# A.6.67 KDM with mismatched keytype

<table><tr><td>Type KDM</td><td></td></tr><tr><td> Filename</td><td>kdm-malf-mismatched-key-keytype.kdm.xml</td></tr><tr><td>Description</td><td> KDM with an encryption key that is valid but has an incorrect keytype</td></tr><tr><td colspan="2">Conforms to [SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td> MalformationsKeyis avalid image encryption key but has the keytype "MDAK".</td></tr></table>

# A.6.68 KDM with non-empty NonCriticalExtensions

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-with-non-crit-exts.kdm.xml</td></tr><tr><td>Description</td><td>KDM with a non-empty NonCriticalExtensions element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted)</td></tr></table>

# A.6.69 KDM with invalid ContentAuthenticator

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-ContentAuthenticator.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an Invalid ContentAuthenticator element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>Malformationsthe content ofthe ContentAuthenticator element shallcontain athumbprintofa D-Cinema cert that does not match one in the signer chain of the CPL that the KDM references.</td></tr></table>

# A.6.70 KDM with bad CompositionPlaylistId value

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-CompositionPlaylistld.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an incorrect value in the CompositionPlaylistld element.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe contentof the CompositionPlaylistld element shallcontain a UUID value that does not match the Id value of the associated CPL.</td></tr></table>

# A.6.71 KDM with bad CipherData CompositionPlaylistId value

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-CipherData-CPLId.kdm.xml</td></tr><tr><td>Description</td><td> KDM with an incorrect value in the CompositionPlaylistld field of the CipherData structure.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The content of the CompositionPlaylistld field of the CipherData structure shallcontain a UUID value that does not match the Id value of the associated CPL.</td></tr></table>

# A.6.72 KDM with incorrect namespace name value

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-namespace.kdm.xml</td></tr><tr><td>Description</td><td> KDM has the wrong namespace name.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td>Malformations</td><td>The namespace name corresponding to the top level XML element does not match the value given in SMPTE-430-3-2006.The bogus value http://www.smpte-qa.org/schemas/430-3/2001/ETM shallbe used.</td></tr></table>

# A.6.73 KDM with random TDL entry

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>kdm-random-tdl.kdm.xml</td></tr><tr><td>Description</td><td> KDM has a random entry that does not match any known certificated device.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe DevicelnfoList contains a single entry, a randomly generated value.</td></tr></table>

# A.6.74 KDM signed with incorrect signer certificate format

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-signer-format.kdm.xml</td></tr><tr><td>Description</td><td> KDM which has been signed with a certificate not conforming with SMPTE-430-2-2006.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)</td></tr><tr><td></td><td>MalformationsThe certificate that signed the KDM is Interop format.</td></tr></table>

# A.6.75 KDM with Assume Trust TDL Entry for 2K StEM (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-assume-trust.kdm.xml</td></tr><tr><td>Description</td><td>KDM which has only the empty-string thumbprint &quot;assume trust&quot; in the TDL (i.e. &quot;2jmj7I5rSw0yVb/vIWAYkK/YBwk=&quot;).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted)</td></tr></table>

# A.6.76 Deleted Section

The section "KDM for 2K StEM with Device Specific Special Auditorium TDL" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.77 Deleted Section

The section "KDM for DCI 2K StEM with a TDL that contains all of the certificate thumbprints for the devices in the special auditorium situation" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.78 Deleted Section

The section "KDM with a TDL including Responder A" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.79 Deleted Section

The section "KDM with a TDL including Responder B" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.80 Deleted Section

The section "KDM with a TDL that contains all of the certificate thumbprints for the devices in the special auditorium situation and an additional device certificate" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.81 Deleted Section

The section "KDM with a TDL that contains all but one of the certificate thumbprints for the devices in the special auditorium situation" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.82 Deleted Section

The section "KDM with a TDL that contains all of the certificate thumbprints for the devices in the special auditorium situation and the 'assume trust' thumbprint" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.83 Deleted Section

The section "KDM with a TDL that contains one more LD/LE device thumbprints than there are LD/projector thumbprints in the special auditorium situation" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.84 Deleted Section

The section "KDM with Assume Trust TDL Entry for DCI 2K Sync Test (Encrypted)" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.85 Deleted Section

The section "KDM with a TDL that contains all of the certificate thumbprints for the devices in the special auditorium situation" was deleted. The section number is maintained here to preserve the numbering of subsequent sections.

# A.6.86 KDM for 2K Scope Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_2K_scope_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K Scope Subtitle Test (Encrypted)</td></tr></table>

# A.6.87 KDM for 2K Flat Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_2K_flat_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2KFlat Subtitle Test (Encrypted)</td></tr></table>

# A.6.88 KDM for 2K Full Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_2K_full_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2K Full Subtitle Test (Encrypted)</td></tr></table>

# A.6.89 KDM for 4K Scope Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_4K_scope_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites4K Scope Subtitle Test (Encrypted)</td></tr></table>

# A.6.90 KDM for 4K Flat Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_4K_flat_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>4K Flat Subtitle Test (Encrypted)</td></tr></table>

# A.6.91 KDM for 4K Full Subtitle Test (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>sub_test_4K_full_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites4K Full Subtitle Test (Encrypted)</td><td></td></tr></table>

# A.6.92 KDM for 2K 48fps Scope Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_48fps_scope_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td> 2K 48fps Scope Subtitle Test (Encrypted)</td></tr></table>

# A.6.93 KDM for 2K 48fps Flat Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_48fps_flat_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2K 48fps Flat Subtitle Test (Encrypted)</td></tr></table>

# A.6.94 KDM for 2K 48fps Full Subtitle Test (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>sub_test_48fps_full_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2K48fps FullSubtitle Test (Encrypted)</td></tr></table>

# A.6.95 KDM for DCI 2K Sync Test (OBAE) (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_sync_test_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for Annex A.4.107</td></tr><tr><td>Conforms to [SMPTE-430-1],[SMPTE-430-3]</td><td></td></tr><tr><td>Prerequisites </td><td>DCI 2K Sync Test (OBAE) (Encrypted)</td></tr></table>

# A.6.96 KDM with bad CompositionPlaylistId value (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-CompositionPlaylistld-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an incorrect value in the CompositionPlaylistld element.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsThe content ofte CompositionPlaylistld element shallcontain a UUID value that does not match the Id value of the associated CPL.</td></tr></table>

# A.6.97 KDM with bad CipherData CompositionPlaylistId value (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-CipherData-CPLId-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an incorrect value in the CompositionPlaylistld field of the CipherData structure.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td>Malformations</td><td>The content of the CompositionPlaylistld field of the CipherData structure shallcontain a UUID value that does not match the Id value of the associated CPL.</td></tr></table>

# A.6.98 KDM for 2K StEM (Encrypted) (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_StEM_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI 2K StEM (OBAE)(Encrypted)</td></tr></table>

# A.6.99 KDM for DCI 2K Sync test with Subtitles (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_sync_test_with_subs_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr></table>

# A.6.100 KDM for DCI 2K Sync test with Subtitles (Encrypted): missing picture essence key

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m0100_missing_key_pict.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCl 2K Sync test with Subtitles (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync test with Subtitles (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM is missing a single picture essence key used by the associated CPL.</td></tr></table>

# A.6.101 KDM for DCI 2K Sync test with Subtitles (Encrypted): missing sound essence key

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m0102_missing_key_snd.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCl 2K Sync test with Subtitles (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync test with Subtitles (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM is missing a single sound essence key used by the associated CPL.</td></tr></table>

# A.6.102 KDM for DCI 2K Sync test with Subtitles (Encrypted): missing subtitle essence key

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m0104_missing_key_sub.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCl 2K Sync test with Subtitles (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync test with Subtitles (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM is missing a single subtitle essence key used by the associated CPL.</td></tr></table>

# A.6.103 KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted): missing picture essence

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>m0106_missing_key_pict_obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl 2K Sync Test with subtitles (OBAE) (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM is missing a single picture essence key used by the associated CPL.</td></tr></table>

# A.6.104 KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted): missing sound essence

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m0108_missing_key_snd_obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCl 2K Sync Test with subtitles (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync Test with subtitles (OBAE) (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM is missing a single sound essence key used by the associated CPL.</td></tr></table>

# A.6.105 KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted): missing picture subtitle

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>m0110_missing_key_sub_obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td>Prerequisites[</td><td>DCI 2K Sync Test with subtitles (OBAE) (Encrypted)</td></tr><tr><td></td><td> MalformationsThe KDM is missing a single subtitle essence key used by the associated CPL.</td></tr></table>

# A.6.106 KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted): missing OBAE key

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m0112_missing_key_obae_obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync Test with subtitles (OBAE) (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM is missing a single OBAE essence key used by the associated CPL.</td></tr></table>

# A.6.107 KDM for M25 Composition with Malformed Integrity Pack: Missing MIC item (Picture) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m25_integrity_pict_mic_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDMfor M25 Composition with Malformed Integrity Pack: Mising MIC item (Picture)(Encrypted).</td></tr><tr><td></td><td>Conforms to[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM25 Composition with Malformed Integrity Pack: Missing MIC item (Picture) (Encrypted)</td></tr></table>

A.6.108 KDM for M27 Composition with Malformed Integrity Pack: Missing TrackFileID item (Picture) (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m27_integrity_pict_tfid_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M27 Composition with Malformed Integrity Pack: Missing TrackFileID item (Picture) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>M27 Composition with Malformed Integrity Pack: Missing TrackFilelD item (Picture) (Encrypted)</td></tr></table>

# A.6.109 KDM for M26 Composition with Malformed Integrity Pack: Missing SequenceNumber item (Picture) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m26_integrity_pict_snum_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M26 Composition with Malformed Integrity Pack: Missing SequenceNumber item (Picture) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM26 Composition with Malformed Integrity Pack: Missing SequenceNumberitem (Picture)(Encrypted)</td></tr></table>

# A.6.110 KDM for M28 Composition with Malformed Integrity Pack: Missing MIC item (PCM)

<table><tr><td>Type</td><td> KDM</td></tr><tr><td>Filename</td><td>m28_integrity_snd_mic_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M28 Composition with Malformed Integrity Pack: Missng MIC item (PCM) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>PrerequisitesI</td><td>M28 Composition with Malformed Integrity Pack: Missing MIC item (PCM) (Encrypted)</td></tr></table>

# A.6.111 KDM for M30 Composition with Malformed Integrity Pack: Missing TrackFileID item (PCM) (Encrypted)

<table><tr><td>Type KDM</td></tr></table>

<table><tr><td> Filename</td><td>m30_integrity_snd_tfid_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M30 Composition with Malformed Integrity Pack: Mising TrackFilelD item (PCM)(Encrypted).</td></tr><tr><td>Conforms to[</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM30 Composition with Malformed Integrity Pack: Missing TrackFilelD item (PCM)(Encrypted)</td></tr></table>

# A.6.112 KDM for M29 Composition with Malformed Integrity Pack: Missing SequenceNumber item (PCM) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m29_integrity_snd_snum_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M29 Composition with Malformed Integrity Pack: Missing SequenceNumber item (PCM) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM29 Composition with Malformed Integrity Pack: Missing SequenceNumberitem (PCM) (Encrypted)</td></tr></table>

A.6.113 KDM for M20 Composition with Malformed Integrity Pack: Missing MIC item (OBAE Main Sound) (Encrypted)   

<table><tr><td>Type KDM</td></tr><tr><td>Filename</td><td>m20_integrity_obae_ms_mic_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M20 Composition with Malformed Integrity Pack: Missing MIC item (OBAE Main Sound) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM20 Composition with Malformed Integrity Pack: Missing MIC item (OBAE Main Sound) (Encrypted)</td></tr></table>

# A.6.114 KDM for M22 Composition with Malformed Integrity Pack: Missing TrackFileID item (OBAE Main Sound) (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m22_integrity_obae_ms_tfid_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M22 Composition with Malformed Integrity Pack: Missing TrackFileID item (OBAE Main Sound) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>M22 Composition with Malformed Integrity Pack: Missing TrackFilelD item (OBAE Main Sound) (Encrypted)</td></tr></table>

# A.6.115 KDM for M21 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE Main Sound) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m21_integrity_obae_ms_snum_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M21 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE Main Sound) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>M21 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE Main Sound) (Encrypted)</td></tr></table>

A.6.116 KDM for M19 Composition with Malformed Integrity Pack: Missing MIC item (OBAE) (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m19_integrity_obae_mic_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M19 Composition with Malformed Integrity Pack: Missng MIC item (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM19 Composition with Malformed Integrity Pack: Missing MIC item (OBAE) (Encrypted)</td></tr></table>

# A.6.117 KDM for M24 Composition with Malformed Integrity Pack: Missing TrackFileID item

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m24_integrity_obae_tfid_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M24 Composition with Malformed Integrity Pack: Missing TrackFilelD item (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM24 Composition with Malformed Integrity Pack: Missng TrackFilelD item (OBAE)(Encrypted)</td></tr></table>

# A.6.118 KDM for M23 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE) (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m23_integrity_obae_snum_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for M23 Composition with Malformed Integrity Pack: Missing SequenceNumber item (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr></table>

# A.6.119 KDM with mismatched KeyType value (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-mismatched-key-keytype-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an cryptographic key that is valid for an OBAE track file but has an incorrect KeyType value.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)(OBAE)</td></tr><tr><td></td><td> MalformationsKeyis a valid OBAE cryptographic key but is associated with the KeyType Value &quot;MDAK&quot;.</td></tr></table>

# A.6.120 KDM with incorrect message digest (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-sig-digest-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM in which a Signature Digest has been altered</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td>Malformations</td><td>The plaintext form of the encrypted message digest in the signature is not the same value as a calculated message digest of the KDM.</td></tr></table>

# A.6.121 KDM that has expired (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-expired-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has a validity period that has expired</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsThe value of the ContentKeysNotValidAfter element is a UTC timestamp at least 24 hours in the past.</td></tr></table>

# A.6.122 KDM with future validity period (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-future-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has a validity period that is in the future</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>PrerequisitesKDM for 2K StEM (Encrypted) (OBAE)</td><td></td></tr><tr><td></td><td>MalformationsThe value of the ContentKeysNotValidBefore element is aUTC timestamp at least 24 hours in the future.</td></tr></table>

# A.6.123 KDM with empty TDL (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-no-tdl-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has an empty Trusted Device List (TDL)</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsThe DeviceList element of the KDM is empty.</td></tr></table>

# A.6.124 KDM with Assume Trust TDL Entry (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-assume-trust-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM which has only the empty-string thumbprint &quot;assume trust&quot; in the TDL (i.e. &quot;2jmj7I5rSw0yVb/vIWAYkK/YBwk=&quot;).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted) (OBAE)</td></tr></table>

# A.6.125 KDM with invalid XML (OBAE)

<table><tr><td>Type</td><td> KDM</td></tr><tr><td>Filename</td><td>kdm-malf-any-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM that contains an invalid XML file format</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsMissing &lt;/DCinemaSecurityMessage&gt; tag</td></tr></table>

# A.6.126 KDM for 64 1 second reel Composition (OBAE) (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_StEM_64_1_second_reels_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>64 Reel Composition,1 Second Reels (OBAE)(Encrypted)</td></tr></table>

# A.6.127 KDM for M40 OBAE DCP with Frame-out-of-order error (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m40_obae_frame_oo_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM40 OBAE DCP with Frame-0ut-of-order error (Encrypted)</td></tr></table>

# A.6.128 KDM for M41 OBAE DCP with an incorrect TrackFile ID (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m41_obae_wrong_file_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesM41 OBAE DCP with an incorrect TrackFile ID (Encrypted)</td></tr></table>

# A.6.129 KDM for DCI 2K Sync Test with MIC Key (OBAE) (Encrypted)

<table><tr><td>Type KDM mkey</td><td></td></tr><tr><td> Filename</td><td>2K_sync_test_obae_mkey_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI 2K Sync Test with MIC Key(OBAE) (Encrypted)</td></tr></table>

# A.6.130 KDM for M43 OBAE DCP with Check Value error in MXF Track File (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>m43_obae_bad_chuk_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>M43 OBAE DCP with Check Value error in MXF Track File (Encrypted)</td></tr></table>

# A.6.131 KDM with invalid MIC Key for DCI 2K Sync Test with MIC Key (OBAE) (Encrypted)

<table><tr><td>Type KDM mkey</td><td></td></tr><tr><td>Filename</td><td>m120_bad_mkey_2K_sync_test_obae_mkey_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync Test with MIC Key (OBAE) (Encrypted)</td></tr><tr><td>Malformations</td><td>The MIC Key specified in the KDM does not match the MIC Key used to generate the MIC item in the OBAE Track File.</td></tr></table>

# A.6.132 KDM with MIC Key for DCI 2K Sync Test (OBAE) (Encrypted)

<table><tr><td>Type</td><td> KDM mkey</td></tr><tr><td>Filename</td><td>m121_mkey_2K_sync_test_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>S DCI 2K Sync Test (OBAE) (Encrypted)</td></tr><tr><td></td><td> MalformationsThe KDM contains a MIC Key for an OBAE Track File that does not use a KDM-borne MIC Key.</td></tr></table>

# A.6.133 KDM for Past Time Window Extension (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>holdover_long_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td> KDM that has avalidity period that is curent, but expires in the near future</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>End of Engagement - Past Time Window Extension (OBAE) (Encrypted)</td></tr><tr><td></td><td>MalformationsThe value of the ContentKeysNotValidAfter element is a UTC timestamp no greater than 6O minutes in the future.</td></tr></table>

# A.6.134 KDM for Within Time Window Extension (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>holdover_short_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has a validity period that is current, but expires in the near future</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>End of Engagement - Within Time Window Extension (OBAE) (Encrypted)</td></tr><tr><td>Malformations</td><td>The value of the ContentKeysNotValidAfter element is a UTC timestamp no greater than 60 minutes in the future.</td></tr></table>

# A.6.135 KDM with MIC Key (Sound) for DCI 2K Sync Test (Encrypted)

<table><tr><td>Type KDM mkey</td><td></td></tr><tr><td>Filename</td><td>m122_mkey_sound_2K_sync_test_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td> Prerequisites</td><td>DCI 2K Sync Test (Encrypted)</td></tr><tr><td></td><td> MalformationsThe KDM contains a MIC Key fora Sound Track File that does not use a KDM-borne MIC Key.</td></tr></table>

# A.6.136 KDM with invalid MIC Key (Sound) for DCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)

<table><tr><td>Type</td><td> KDM mkey</td></tr><tr><td>Filename</td><td>m123_bad_mkey_sound_2K_sync_test_mkey_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for DCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)</td></tr><tr><td></td><td>MalformationsThe MIC Key specifiedin the KDM does not match the MIC Key usedto generate the MIC item in the Sound Track File.</td></tr></table>

# A.6.137 KDM with MIC Key (Picture) for DCI 2K Sync Test (Encrypted)

<table><tr><td>Type</td><td>KDM mkey</td></tr><tr><td>Filename</td><td>m124_mkey_pict_2K_sync_test_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Sync Test (Encrypted)</td></tr><tr><td></td><td>MalformationsThe KDM contains a MIC Key for a Picture Track File that does not use a KDM-borne MIC Key.</td></tr></table>

# A.6.138 KDM with invalid MIC Key (Picture) for DCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)

<table><tr><td>Type</td><td> KDM mkey</td></tr><tr><td>Filename</td><td>m125_bad_mkey_pict_2K_sync_test_mkey_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for DCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)</td></tr><tr><td></td><td>MalformationsThe MIC Key specified inthe KDM does not match the MIC Key used to generate the MICitem in the Picture Track File.</td></tr></table>

# A.6.139 KDM for M44 OBAE DCP with HMAC value error in MXF Track File (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m44_obae_bad_hmac_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>M44 OBAE DCP with HMAC value error in MXF Track File (Encrypted)</td></tr></table>

# A.6.140 KDM for 2K FM Application Constraints (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_fm_constraints_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Application Constraints (OBAE) (Encrypted)</td></tr></table>

# A.6.141 KDM for 2K FM Control Granularity - No FM (OBAE)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_no_fm_obae.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Control Granularity - No FM (OBAE) (Encrypted)</td></tr></table>

# A.6.142 KDM for 2K FM Control Granularity - Image Only FM (OBAE)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_only_fm_obae.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td> 2K FM Control Granularity - Image Only FM (OBAE) (Encrypted)</td></tr></table>

# A.6.143 KDM for 2K FM Control Granularity - OBAE Only FM (OBAE)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_obae_only_fm_obae.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Control Granularity - OBAE Only FM (OBAE) (Encrypted)</td></tr></table>

# A.6.144 KDM for 2K FM Control Granularity - Image and OBAE FM (OBAE)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_control_granularity_image_and_obae_fm_obae.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Control Granularity - Image and OBAE FM (OBAE) (Encrypted)</td></tr></table>

# A.6.145 KDM for 128 Reel Composition, "A" Series (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_StEM_128_a_reels_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has all content keys for the track files referenced by the CPL,and additionally has one each of key types FMIK,FMAK.The FMIK and FMAK key values shallbe appropriate for the specifications of the</td></tr><tr><td></td><td>FM system used by the Test Subject.</td></tr><tr><td>Conforms to</td><td></td></tr><tr><td></td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td></td></tr></table>

# A.6.146 KDM for 128 Reel Composition, "B" Series (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>2K_StEM_128_b_reels_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has all content keys for the track files referenced by the CPL,and additionally has one each of key types FMIK and FMAK.The FMIK and FMAK key values shallbe appropriate for the specifications of</td></tr><tr><td>Conforms to</td><td>the FM system used by the Test Subject. [SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>128 Reel Composition, &quot;B&quot; Series (OBAE) (Encrypted)</td></tr></table>

# A.6.147 KDM for 2K FM Payload (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_fm_payload_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>Prerequisites2K FM Payload (OBAE) (Encrypted)</td></tr></table>

# A.6.148 KDM for Maximum Bitrate OBAE (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>maximum_bitrate_24Hz_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>PrerequisitesMaximum Bitrate OBAE (Encrypted)</td><td></td></tr></table>

# A.6.149 KDM for Maximum Bitrate OBAE 48 fps (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>maximum_bitrate_48Hz_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesMaximum Bitrate OBAE 48 fps (Encrypted)</td></tr></table>

# A.6.150 KDM for 2K FM Payload (plaintext OBAE) (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td> Filename</td><td>2K_fm_payload_pt_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr></table>

# A.6.151 KDM for 2K FM Payload (OBAE) with FM Bypass (Encrypted)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>2K_fm_bypass_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td> KDM with &quot;no FM mark&quot; flag applied to OBAE essence.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites2</td><td>2K FM Payload (OBAE) (Encrypted)</td></tr></table>

# A.6.152 KDM with non-empty NonCriticalExtensions (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-with-non-crit-exts-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM with a non-empty NonCriticalExtensions element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted) (OBAE)</td></tr></table>

# A.6.153 KDM with expired Signer certificate (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-expired-signer-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM with an expired Signer&#x27;s Certificate and an ETM IssueDate later than Signer&#x27;s Certificate expiry date</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsKDM signer&#x27;s certificate&#x27;s Validity &quot;Not After&quot; date is earlier than ETM IssueDate</td></tr></table>

# A.6.154 KDM issued before certificate valid (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-issue-before-cert-valid-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM with a valid Signer&#x27;s Certificate,but ETM issue date before Signer&#x27;s Certificate issue date</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsThe&lt;lssueDate&gt; elementcontainsadate priorto thedateofthesignercerticate&#x27;s Validity&quot;NotBefore&quot; date.</td></tr></table>

# A.6.155 KDM validity exceeds signer validity (OBAE)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-malf-signer-cert-exp-before-kdm-expires-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM with a validity period that extends beyond the validity of Signer&#x27;s Certificate expiry date.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsThe KDM has a ContentKeysNotValidAfter value later than the signer certificate&#x27;s &quot;Not After&quot; value.</td></tr></table>

# A.6.156 KDM with corrupted CipherData block (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-CipherData-block-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM that contains an Invalid Structure ID field in the CipherData element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td>Malformations</td><td>The first byte of the Structure ID field contained in the &lt;enc:CipherValue&gt; element inside the &lt;enc:CipherData&gt; element has been changed from &quot;F1&quot; to &quot;1F&quot;</td></tr></table>

# A.6.157 KDM with incorrect signer thumbprint (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-signer-tp-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM for which the Thumbprint of the Signer&#x27;s Certificate does not match the Signer of the KDM</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td>Malformations</td><td>The thumbprint of the signer certificate as listed in the KDM is incorrect and does not match the thumbprint for the issuing certificate.</td></tr></table>

# A.6.158 KDM with KeyInfo mismatch (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-bad-keyinfo-obae.kdm.xml</td></tr><tr><td>Description</td><td>Keylnfo field of the audio EncryptedKey element does not match the Keylnfo field of the image EncryptedKey element.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>PrerequisitesKDM for 2K StEM (Encrypted) (OBAE)</td><td></td></tr><tr><td></td><td>MalformationsThe Keylnfo element of the audio encrypted keydata contains the correctIssuer Name andan incorect I ssuerSerial of the certificate of the recipient of the KDM.</td></tr></table>

# A.6.159 KDM with invalid MessageType (OBAE)

<table><tr><td>Type KDM</td><td></td></tr><tr><td>Filename</td><td>kdm-malf-bad-MessageType-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM with an Invalid MessageType element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted)(OBAE)</td></tr><tr><td></td><td>MalformationsMessageType element contains: &quot;htp://ww.smpte-qa.org/430-1/2006/KDM#kdm-key-type&quot;</td></tr></table>

# A.6.160 KDM with incorrect namespace name value (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-namespace-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM has the wrong namespace name.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for2K StEM (Encrypted) (OBAE)</td></tr><tr><td>Malformations</td><td>The namespace name corresponding to the top level XML element does not match the value given in SMPTE-430-3-2006.The bogus value http://www.smpte-qa.org/schemas/430-3/2001/ETMshal be used.</td></tr></table>

# A.6.161 KDM without signer certificate (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>kdm-malf-chain-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM in which the Certificate chain does not contain the Signer&#x27;s Certificate</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>MalformationsThe certificate that signed the KDM is not included in the KDM.</td></tr></table>

# A.6.162 KDM signed with incorrect signer certificate format (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-signer-format-obae.kdm.xml</td></tr><tr><td>Description</td><td> KDM which has been signed with a certificate not conforming with SMPTE-430-2-2006.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1], [SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesKDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td> MalformationsThe certificate that signed the KDM is Interop format.</td></tr></table>

A.6.163 KDM for DCI Malformed Test 6b: CPL with incorrect track file hashes (OBAE) (Encrypted)   

<table><tr><td>Type KDM</td><td></td></tr><tr><td> Filename</td><td>m06b_cpl_hash_error_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 6b: CPL with incorrect track file hashes (OBAE) (Encrypted)</td></tr></table>

# A.6.164 KDM for DCI Malformed Test 7b: CPL with an Invalid Signature (OBAE) (Encrypted)

<table><tr><td>Type</td><td> KDM</td></tr><tr><td>Filename</td><td>m07b_cpl_invalid_signature_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 7b: CPL with an Invalid Signature (OBAE) (Encrypted)</td></tr></table>

A.6.165 KDM for DCI Malformed Test 13b: CPL that references a non-existent track file (OBAE) (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m13b_cpl_missing_asset_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 13b: CPL that references a non-existent track file (OBAE) (Encrypted)</td></tr></table>

A.6.166 KDM for DCI Malformed Test 14b: CPL that does not conform to ST 429-7 (OBAE)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m14b_cpl_format_eror_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI Malformed Test 14b: CPL that does not conform to ST 429-7 (OBAE) (Encrypted)</td></tr></table>

# A.6.167 KDM for DCI Malformed Test 15b: CPL signed by a certificate not conforming to ST 430- 2 (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m15b_cpl_signer_format_error_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI Malformed Test 15b: CPL signed by acertificate not conforming to ST 430-2 (OBAE)(Encrypted)</td></tr></table>

# A.6.168 KDM with invalid ContentAuthenticator (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-malf-bad-ContentAuthenticator-obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM with an Invalid ContentAuthenticator element</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td></td><td>Malformationsthecontentofthe ContentAuthenticator element shallcontain atumbprintofa D-Cinema cert that does not match one in the signer chain of the CPL that the KDM references.</td></tr></table>

# A.6.169 KDM for DCI Malformed Test 16b: CPL signed with No Role Certificate (OBAE)

A.6.170 KDM for DCI Malformed Test 17b: CPL signed with Bad Role Certificate (OBAE) (Encrypted)   

<table><tr><td>Type</td><td>KDM</td></tr><tr><td> Filename</td><td>m16b_cpl_malf_signer_no_role_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 16b: CPL signed with No Role Certificate (OBAE) (Encrypted)</td></tr></table>

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m17b_cpl_malf_signer_bad_role_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI Malformed Test 17b: CPL signed with Bad Role Certificate (OBAE) (Encrypted)</td></tr></table>

# A.6.171 KDM for DCI Malformed Test 18b: KDM for CPL signed with Extra Role Certificate

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>m18b_cpl_malf_signer_extra_role_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr></table>

# A.6.172 KDM that has recently expired (OBAE)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>kdm-recent-expired_obae.kdm.xml</td></tr><tr><td>Description</td><td>KDM that has a validity period that has expired according to the ful ContentKeysNotValidAfter timestamp but that has not expired if te local offset is ignored.</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>KDM for 2K StEM (Encrypted) (OBAE)</td></tr><tr><td>Malformations </td><td>The value of the ContentKeysNotValidAfter element is a UTC timestamp between 4 and 6 hours in the past, with a local offset of +06:00.</td></tr></table>

# A.6.173 KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_sync_test_with_subs_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td> KDM for DCI 2K Sync Test with subtitles (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCl 2K Sync Test with subtitles (OBAE) (Encrypted)</td></tr></table>

# A.6.174 KDM for DCI 2K Image with Frame Number Burn In (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>frame_num_burn_in_obae_ct.kdm.xml</td></tr><tr><td>Description</td><td>KDM for DCl 2K Image with Frame Number Burn In (OBAE) (Encrypted).</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>DCI 2K Image with Frame Number Burn In (OBAE) (Encrypted)</td></tr></table>

# A.6.175 KDM for 2K DCI Maximum Bitrate Composition (OBAE) (Encrypted)

<table><tr><td>Type</td><td>KDM</td></tr><tr><td>Filename</td><td>2K_max_bitrate_obae_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>2K DCI Maximum Bitrate Composition (OBAE) (Encrypted)</td></tr></table>

# A.6.176 KDM for DCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)

<table><tr><td>Type</td><td> KDM mkey</td></tr><tr><td>Filename</td><td>2K_sync_test_mkey_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCI 2K Sync Test with KDM-Borne MIC Keys (Encrypted)</td></tr></table>

# A.6.177 KDM for Audio Tone Multi-Reel (Encrypted)

<table><tr><td>Type KDM mkey</td><td></td></tr><tr><td>Filename</td><td>audio_tone_multi_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td></td><td>PrerequisitesDCP for Audio Tone Multi-Reel (Encrypted)</td></tr></table>

# A.6.178 KDM for OBAE Tone Multi-Reel (Encrypted)

<table><tr><td>Type</td><td> KDM mkey</td></tr><tr><td>Filename</td><td>OBAE_tone_multi_ct.kdm.xml</td></tr><tr><td>Conforms to</td><td>[SMPTE-430-1],[SMPTE-430-3]</td></tr><tr><td>Prerequisites</td><td>中银 DCP for OBAE Tone Multi-Reel (Encrypted)</td></tr></table>

# APPENDIX B EQUIPMENT LIST

# B.1 Hardware

AES3 Audio Analyzer

Digital audio signal analyzer with AES-3 inputs.

# Sound System

5.1 or 7.1 sound system with calibrated level control.

# Computer with POSIX OS

Computer with POSIX-like Operating System (OS), such as Linux or Mac OS X. The system must support TCP/IP via 1000 Mb/s ethernet and be backward-compatible to support 100 Mb/ s Ethernet.

# Digital Clock

Digital quartz time-of-day clock displaying time accurate to the second

# Direct View Display

Light emission display comprised of a combination of individual display cabinets conjoined so as to form a single large display.

# Oscilloscope

Digital storage oscilloscope, 200 MHz or better, with two or more inputs plus external trigger.

# Accurate Real-Time Clock

A real-time clock that uses an external reference to maintain precise time (within 1 ms). The external reference should be WWV, GPS or NTP traceable to a trusted hardware clock.

# FM Decoder

Forensic mark decoder for image, sound or OBAE essence. The exact type of decoder is dependent upon the type of watermark to be decoded. This equipment is expected to collect the full payload of the forensic marking system.

# FM Detector

Forensic mark detector for image or sound essence. The exact type of detector is dependent upon the type of watermark to be detected. This equipment is expected to simply detect the presence of the forensic mark.

# Ethernet Switch

A 1000Base-T Ethernet switch capable of sustained full-rate throughput on at least two portpairs. The device must also be able to configure one or more ports as "monitor" ports (selected traffic on the switch can be copied to the monitor port to facilitate diagnostic capture).

# Photodiode

Photodiode, of the type most sensitive in the human visible electromagnetic spectrum (about 390 nm to 780 nm), fitted with suitable length of shielded cable, terminated in a BNC connector.

# Spectroradiometer

Spectroradiometer as described in [SMPTE-431-1].

# Stopwatch

Digital stopwatch with .01 second resolution.

# Still Camera

Digital still image camera.

# 48 fps Camera

Camera and recorder/reproducer system capable of 48fps (or better) capture rate.

# Type 2 SPB Access Tools

Tools, supplied by the manufacturer of an Type 2 SPB device, required to gain authorized access to the protected area of the Type 2 SPB.

# Dual-Link Monitor

Dual-link HD monitor.

# Bridge Tap Connector

Connector with a bridge tap takeoff point, e.g. a "BNC Tee".

# GPIO Test Fixture

A test fixture comprising L.E.D. indicators, switches and a power supply, per the schematic in Appendix E.

# DCI Projector

DCI-compliant standalone projector.

# DCI Server

DCI-compliant server (includes Image/Sound Media Block)

# LDB Monitor

LDB diagnostic utility

# Digital Audio Recorder

Audio recorder capable of bit-accurate capture of digital audio channels, e.g, AES/EBU channels.

# OBAE Sound System

Calibrated OBAE reproduction environment and system.

