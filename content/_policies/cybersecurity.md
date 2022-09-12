---
title: Cybersecurity
layout: document
toc: true
order: 1
description: Cybersecurity is a massive topic which evolves very rapidly in the government.
---


Cybersecurity is a massive topic.  It also evolves very rapidly in the government, not just from a constant increase in attack volume and types, but also from a stream of new policies and executive orders creating new requirements for agencies.

@WARNING **That is to say, always assume that this page is 1) a summary at best and 2) already out of date. Go ask your security team what's required.**
{:.notes}

Historically, government cybersecurity policy has been focused on networks and systems, but these days there is more attention being paid to data itself. **[Also see the main Data article.](/policies/data/)**

## Cybersecurity Law & Policy

There have been a flurry of cybersecurity laws over the last twenty years or so. The most important of these is @FISMA, which is the foundation of most cybersecurity policy in the U.S. today. This requires agencies to follow a series of processes to secure information systems created or used by the government. @OMB has issued [memoranda on many security topics](https://www.whitehouse.gov/omb/information-for-agencies/memoranda/), in addition to [the security standards](https://csrc.nist.gov/) created by the @NIST. The Inspector General (IG) of an agency is also required by FISMA to assess the overall cybersecurity program on an annual basis.

Under @FITARA, the agency @CIO is official responsible for cybersecurity (usually delegated to the agency @CISO); however, at [small agencies](/info/agency-scope/#small-agencies) this responsibility falls to the agency administrator, which is typically delegated to the CIO and then to the CISO if there is one.
{:#responsibility}

Recent federal cybersecurity policies of note include [M-22-09 (Zero Trust)](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf) and [Executive Order 14028 on general cybersecurity](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/).

Although these policies are intended to drive more modern, automation-based security practices, many government agencies still follow traditional, compliance-driven security approaches. The 2019 Federal Cloud Computing Strategy (Cloud Smart) identified cybersecurity as one of the major barriers to cloud adoption in government.

### Risk Management

Cybersecurity is closely tied to the concept of **Risk Management**.  The @NIST [Risk Management Framework (NIST 800-37)](https://csrc.nist.gov/projects/risk-management/about-rmf) outlines a process for assessing and managing cybersecurity risk related to technology.

This is related to [Financial Risk Management](/policies/budget-finance/#risk-management) but is usually a separate process.

## Security Teams

At most Federal agencies, the Cybersecurity team is typically one of the largest teams within the IT department. They are usually overseen by a dedicated @CISO, and responsible for multiple parts of the security process, including:

  * **Security Engineering** – designing security baselines for various tools and services
  * **Security Assessment and Authorization (SA&A)** – the process of reviewing a hardware or software package to make sure it's safe for an organization to use
  * **Penetration Testing** – actively attacking a test system to find vulnerabilities, often as part of SA&A
  * **Security Operations Center** – a team that actively monitors running systems to check for attacks and intrusion attempts. They work closely with the Network Operations Center.
  * **Physical Security** – the team responsible for clearance of personnel to work in a given agency. Although this team is usually separate from the cybersecurity team, they coordinate closely.

Security roles have their own job series in the federal government, [2210](https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-standards/0300/gs-2210-information-technology-management-series/). Since it's especially hard to hire these professionals into government, [a cybersecurity direct-hire authority](https://www.opm.gov/policy-data-oversight/hiring-information/direct-hire-authority/#url=Governmentwide-Authority) was created, as well as [special pay options](https://www.opm.gov/policy-data-oversight/pay-leave/reference-materials/handbooks/compensation-flexibilities-to-recruit-and-retain-cybersecurity-professionals.pdf). (Also see [Hiring](/policies/hiring/).)

## Security Lifecycle

At most federal agencies, the cybersecurity lifecycle of a product follows a predictable path due to requirements under @FISMA. @NIST has issued [guidance on the System Development Life Cycle (SDLC) process](https://www.nist.gov/publications/system-development-life-cycle-sdlc). The steps may have different names or be done a bit differently, but the main security touchpoints for a new system usually look something like this:

* Initial security review - before purchasing a solution, an amount of research is usually required to check for known vulnerabilities or supply chain risks (such as purchasing from a company located in a hostile foreign nation).
* Procurement - standard security language is added into most contracts.
* System Security Plan - the system owner documents how various security controls will be met. Categorization happens at this time as well, to determine the types of data that can be stored in the system.
* Authorization to Test (ATT) - *some* agencies have a pre-production authorization to allow development work to take place without all security controls in place.
* Baselining - the security engineering team works with the system owner to determine the operating parameters of the system. This feeds into the assessment and testing.
* Security Assessment and Authorization (SA&A) - the baseline created is tested. There may also be penetration testing at this time. This testing may be automated and will generally become part of the ongoing monitoring.
* Authorization to Operate (ATO) - after initial testing is complete, an ATO is issued for a system.
* Ongoing monitoring - the Security Operations Center monitors for attacks on various systems, and the assessment team may also provide ongoing monitoring.
* Regular Re-assessment – at least every three years the system's ATO must be re-evaluated.  Additional assessments might also be needed if new services are added or a new version released.

Agencies also maintain lists of their most critical systems, known as **High Value Assets (HVAs)**, and report on them to @OMB. OMB provided [updated guidance in 2018](https://www.whitehouse.gov/wp-content/uploads/2018/12/M-19-03.pdf) listing three categorizations of HVAs.
{:#hva}

## Security Assessment

All technology must be inventoried and evaluated by security for use in a government agency. @NIST provides in [FIPS 199](https://csrc.nist.gov/publications/detail/fips/199/final) several baselines of security depending on the level of impact to individuals, businesses, etc., that the exploitation of the system could cause - low, moderate, or high.

> The potential impact is LOW if − The loss of confidentiality, integrity, or availability could be expected to have a limited adverse
effect on organizational operations, organizational assets, or individuals.
> The potential impact is MODERATE if − The loss of confidentiality, integrity, or availability could be expected to have a serious adverse
effect on organizational operations, organizational assets, or individuals.
> The potential impact is HIGH if − The loss of confidentiality, integrity, or availability could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals.

By classifying the impact to each of **confidentiality, integrity, and availability** as defined in @FISMA (codified in [44 U.S.C. 3542](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3552&num=0&edition=prelim)) an overall classification for a system can be determined. @NIST publication [800-53 Security and Privacy Controls for Information Systems and Organizations](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final) lists the security controls that should be applied to a system, with an increasing number recommended in the baseline to accommodate each impact level.

This assessment usually involves the creation of a System Security Plan [SSP] by the system owner, listing how various security controls will be implemented, and after reviewing this an Authorization to Operate (ATO) will be issued by the Security team.  Some agencies allow for a partial evaluation in non-production environments, sometimes called a Lightweight ATO (LATO), Progressive ATO, or Authorization to Test (ATT).

All systems must be reassessed on a regular basis, which is typically done every three years. However, a few agencies have adopted a monitoring-based assessment approach, referred to as **continuous authorization**.

For most tools, a **security baseline** must be created, describing a series of practices that an implementation team must follow to meet the controls identified in the SSP. The security assessment team will validate the implementation of this baseline through various testing. Often this is a one-time activity, but may also be paired with ongoing monitoring when such automated testing can be performed.

### FedRAMP

As more agencies began adopting cloud technologies, the The Federal Risk and Authorization Management Program (FedRAMP) program was created in 2011 to assess cloud products for the government so that each agency would not need to perform their own assessment, saving time and money. The program uses third-party assessment organizations (3PAOs) outside of government to perform these evaluations. This is followed by a review from the Joint Authorization Board (JAB), a group consisting of cybersecurity experts from DOD, DHS, and GSA.

FedRAMP authorization is a very lengthy process, and it can take a year or two for a product to go through the full process.  It can also be very expensive for the vendor to modify their product to meet the requirements, and requires the company to have a government sponsor willing to go through it with them. As a result, many vendors are unable or unwilling to go through FedRAMP authorization.

@OMB has [mandated the use of FedRAMP for all cloud services](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/assets/egov_docs/fedrampmemo.pdf), but an agency can request exemption and annually notify OMB of the cloud products they're using which are not FedRAMP authorized. This is a route that should be considered particularly if the alternative is to build something from scratch, since the @FAR requires agencies to ["Buy Before Build"](/policies/procurement/#cots).

The big three cloud providers generally meet FIPS Moderate requirements for the controls they are responsible for, for a _subset_ of their service offerings in the public cloud. They may also have a separate, dedicated US government-only cloud region which supports up to FIPS High, but with fewer services supported. E.g. [Amazon AWS](https://aws.amazon.com/compliance/services-in-scope/), [Microsoft Azure & O365](https://docs.microsoft.com/en-us/compliance/regulatory/offering-fedramp), [Google Cloud Platform](https://cloud.google.com/security/compliance/fedramp).

The program has proven very successful, but there are some limitations to be aware of. Since most products require additional configuration by the purchaser to meet security requirements, FedRAMP only covers roughly two-thirds of the @NIST-specified controls to use the product in an agency. Also, because @FISMA was never modified to account for FedRAMP, the agency is still legally responsible for the risk. This means that even after a product is approved by FedRAMP, an agency that wishes to use the product must still perform a **complete assessment**. In most agencies, this means that the security process is identical for FedRAMP-approved and non-approved cloud tools.


### Approved Software & Hardware
{:#approved-software-list}

Each agency typically maintains an approved software and hardware list. This list (or _lists_) contains all of the technology tools currently-allowed to be used at that agency. This avoids having to do multiple security reviews any time that someone wants to use a given tool.

In practice, desktop tools can usually be installed without an additional security review (providing that you have are able to acquire any needed licenses) - but each tool installed on a server (on-premises or in the cloud) will often need a separate @ATO or security baseline for each project or program. A new @SORN may also be needed.

In addition to the security benefits of having a set of pre-approved tools to use, this also helps to eliminate duplicative technologies and "shadow IT" (unapproved and unregulated systems that can cause major security and support issues) - both of which are key parts of an Enterprise Architecture (EA) program. As a result, these lists are usually maintained by the EA team.

Some agencies maintain a comprehensive list that includes software explicitly _prohibited_ from use at the agency as well. For instance, [@VA maintains such a list](https://www.oit.va.gov/Services/TRM/ToolListSummaryPage.aspx).


### Supply Chain Risk Management (SCRM)
{:#scrm}

A long-standing concern for the federal government has been the purchase of software and devices from hostile foreign entities. Although @FAR [part 25](https://www.acquisition.gov/far/part-25) directs government agencies to buy U.S.-made products, [25-103(e)](https://www.acquisition.gov/far/part-25#FAR_25_103) specifically exempts technology products. However, due to recent national security concerns, Congress has passed laws prohibiting the procurement of products from specific foreign vendors, including [Huawei and ZTE due to security concerns regarding the Chinese government in @NDAA for 2019](https://www.congress.gov/bill/115th-congress/house-bill/5515/text) and [Kaspersky due to security concerns regarding the Russian government in the 2018 NDAA](https://www.congress.gov/bill/115th-congress/house-bill/2810/text). Cybersecurity teams will generally review country of origin as part of a product's security assessment as well.

However, supply chain risk management is about more than just a product's direct origins, as organizations also must take into account the sourcing of all of the individual components of a product. In the case of computer hardware, this includes processor chips and storage devices like hard drives; for software, this includes all dependent libraries that may be compiled in or linked to the primary code (referred to as a Software Bill of Materials (SBOM)).
{:#sbom}

[Executive Order 14017](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/02/24/executive-order-on-americas-supply-chains/) generally addressed a variety of supply chain-related concerns for America's industries, but [Executive Order 14028 in 2021](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) specifically addressed information technology supply chain in the federal government. Agencies are directed to report to @OMB on their plans to manage their supply chains. In accordance with the E.O., in 2022 [NIST issued guidance on software products](https://www.nist.gov/itl/executive-order-improving-nations-cybersecurity/software-supply-chain-security-guidance), directing agencies to:

> Accept first-party attestation of conformity with [Secure Software Development Framework (SSDF)] practices unless a risk-based approach determines that second or third-party attestation is required.

@SOAPBOX There is no question that accounting for all upstream materials in any software or hardware is an **extremely** difficult problem. However the NIST guidance largely punts on the problem entirely, and assumes that all vendors are trustworthy. This is, of course, ridiculous given the current international politics and the very recent issues Russian and Chinese manufacturers.
{:.soapbox}

@SOAPBOX Moreover, although all agencies generally acquire technology from many of the same providers, OMB has required every agency to duplicate the efforts to communicate with their vendors, and inspect and report on their software and hardware sources. The absence of a FedRAMP-like program for SCRM is a massive, and very expensive, gap.
{:.soapbox}

Although [agencies are required to only procure laptops and similar devices from specific government contracts](/policies/procurement/#acquisition-vehicles), these sources are not guaranteed to be secure for the entire supply chain - agencies are still individually responsible for validating the sources.

## Network Security

@CISA has some policymaking authority supplemental to @OMB's in the area of cybersecurity.  Moreover, it runs a series of network monitoring tools and programs that all agencies are mandated to use.

### Trusted Internet Connections (TIC) and EINSTEIN
{:#tic-einstein}

The Trusted Internet Connections (TIC) policy was created by @OMB in 2007 as a "castle-and-moat" approach to protecting federal systems, requiring all external traffic to cross through monitored access points run by network provider vendors, called Managed Trusted Internet Protocol Service (MTIPS). These control points would then route traffic to a @CISA monitoring tool called EINSTEIN.

With the growth of cloud technologies, the lack of scalability associated with a single monitoring point became a major chokepoint. As part of the Cloud Smart strategy, OMB created the [TIC 3.0](https://www.whitehouse.gov/wp-content/uploads/2019/09/M-19-26.pdf) policy, which tasked to CISA provide [updated reference architectures for secure connectivity in a cloud environment](https://www.cisa.gov/sites/default/files/publications/CISA_TIC%203.0%20Vol.%202%20Reference%20Architecture.pdf).

### Continuous Diagnostics and Mitigation (CDM)
{:#cdm}

[CISA's CDM tools](https://www.cisa.gov/cdm) as a complement to TIC, serving to monitor agencies' network from inside. Although these tools are mandated to be used at every agency, there have been limited pilots by a few agencies to provide CDM-like capabilities without using @CISA's tools. Notably, @SBA's implementation uses only commercial-off-the-shelf, cloud-native tools.

## Identity

There are a number of security controls based on identity. @NIST defines three different areas of concern in [Special Publication 800-63](https://www.nist.gov/special-publication-800-63), each with it's own related document laying out the **levels (1-3)** that can be applied for different purposes and contexts.

* **Identity Proofing** referred to as *IAL*, or how to verify a user is who they say they are ([SP 800-63A](https://pages.nist.gov/800-63-3/sp800-63a.html)),
* **Authentication** or *AAL*, regarding the credentials needed for a user to log into a system, such as a password or PIV card ([SP 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html)), and
* **Federated Access** or *FAL*, on sharing access tokens between systems ([SP 800-63C](https://pages.nist.gov/800-63-3/sp800-63c.html))

It may be useful to note that as of revision 3 (2017), 800-63B specifically states that agencies **should not** require passwords to be changed periodically. It also gives recommendations on password complexity, but again states that agencies **should not** explicitly require special characters in passwords. Most agencies have not yet implemented these new requirements on every system, and may still require users to change their passwords every 90 days as required under revision 2, even though this is considered a bad practice today.

One key aspect of modern government security is the use of @MFA, which requires multiple credentials to gain access to a system. This may include a username and password, and a keycard (such as a Personal Identity Verification (PIV) card for civilian agencies, or Common Access Card (CAC) for the Department of Defense). Alternatively, agencies may use a secure token generated from an authenticator application.
{:#mfa}

Identity is the cornerstone of a [Zero Trust Architecture (ZTA)](https://csrc.nist.gov/publications/detail/sp/800-207/final) approach to security, which involves validating a user's credentials each time they attempt to access data.
{:#zta}
