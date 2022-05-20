---
title: Policy Types
layout: document
toc: true
---

All federal policies are built on a basis in law. Executive branch agencies are established by law which sets their mission, and subsequent laws expand the scope of this mission. For instance, the Small Business Act in 1953 created the Small Business Administration to aid & counsel small businesses, and further laws expanded its authorities and abilities, creating different types of loan programs and other assistance, such as the COVID relief programs in the CARES Act.

When Congress passes a new law, it doesn’t always have direct implementation requirements for agencies. Often, the law will instead task @OMB, @DHS, and/or @OPM to direct agencies to do something. Those organizations will interpret the law and release their guidance - often in the form of memoranda, circulars, regulations, and so on. Agencies must then interpret that guidance and create their own policies, standard operating procedures (SOPs), regulations, and implementation plans. If you're at an agency, it can be helpful to start at the "local level" with these documents, then referring to the parent policies and so on.

For IT policy, Congress typically directs @OMB to create policy and provide oversight, which is then implemented at agencies sometimes in the form of regulation and guidance. A good example of this is the area of cybersecurity, where [FISMA](/laws/fisma/) sets the requirements of how agencies must operate securely, but @NIST sets the standards for what "secure" means, @CISA and @OFCIO oversee the implementation of that security by agencies, but ultimately an agency's @CIO (or the agency administrator for small agencies) owns the risk and will work with their CISO to determine what security controls should be used. And of course, the @GAO and each agency's @IG each have a role in overseeing and auditing the implementation of security controls.

It's important to note that the laws which set policies usually do not contain funding. In many cases, IT policies are written by members of Congress who do not sit on the committees which provide [appropriations](/info/federal-budget/#appropriations) to the agencies which must implement them. Similarly, the President or other empowered agencies may create a policy which is not accounted for in the [President's Budget](/info/federal-budget/#presidents-budget). As a result, these laws and policies often come as **unfunded mandates** which may negatively impact implementation.

It's also worth noting that Congress frequently makes multiple attempts to refine and revise on any given topic. For instance, IT investment management was covered first in the Brooks ADP Act, then Clinger-Cohen, followed by FITARA and the FITARA Enhancement Act. In some cases, the original laws are repealed, such as Brooks ADP was by Clinger-Cohen, while in others the original laws are only extended or modified, such as FITARA enhanced Clinger-Cohen.

White House policy documents typically must be published in the [Federal Register] for public feedback for 30 days.



## Executive Orders (EOs)
{:eo}

The President has the authority to direct agencies in a variety of ways, most often via [Executive Orders](https://www.whitehouse.gov/briefing-room/presidential-actions/). These are often complete policy documents themselves, though they may also be supplemented with [memoranda](#memoranda) from @OMB explaining how they shall be implemented.  Executive Orders are generally referred to by title, though they do have a unique identifier and are numbered sequentially (EO #####).

## President's Management Agenda (PMA)
{:#pma}

Each President typically issues a [President's Management Agenda (PMA)](https://www.performance.gov/pma/) in the first year of their administration. This sets a small number of priorities, usually with an associated set of Cross-Agency Priority Goals (CAP Goals) for most or all federal agencies, with a small number of agencies as the leads in each area.

## Regulations

Many federal agencies produce regulations, which govern a variety of different topics. These are codified in the [Code of Federal Regulations (CFR)](https://www.govinfo.gov/app/collection/cfr). One notable part of the CFR is Title 48, the Federal Acquisition Regulations (FAR), which governs all [procurements](/info/procurement/) in the Federal Government.

## Memoranda

The [White House](/info/policymaking-offices/#eop) offices put out a variety of policy documents in addition to regulations, notably memoranda. These are often small, single-topic documents.

@OMB-issued Memoranda have a title and identifier (_M-##-##_), and are numbered with the fiscal year the memo was issued, followed by a sequential number. Since there may be multiple memos on a given topic, the number can help to disamibuglate the various revisions. (E.g. @DCOI was originally defined in M-16-19 and later replaced by M-19-19

In most cases they are removed ("rescinded" in legal parlance) and replaced as these topics change, but in rare cases they may be updated. For instance [M-18-32](https://www.whitehouse.gov/wp-content/uploads/2018/08/M-18-23.pdf) rescinded many older, outdated memoranda; meanwhile [M-21-05](https://www.whitehouse.gov/wp-content/uploads/2020/11/M-21-05.pdf) merely moved out the sunset date of [M-19-19](https://www.whitehouse.gov/wp-content/uploads/2019/06/M-19-19-Data-Centers.pdf). When such a modification occurs, the original document itself is *not* updated, which can make tracking topics especially difficult. _Very rarely_ OMB has rescinded specific portions of entire documents, or even paused requirements within a document. Examples of this can be seen in [M-17-26 Reducing Burden for Federal Agencies by Rescinding and Modifying OMB Memoranda](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/M-17-26.pdf).

@SOAPBOX Although memoranda continue to be in effect until explictily rescinded or sunsetted, over time they may not be enforced as strictly, as the White House's priorities change. Any memo older than five or ten years often is not considered "current." For instance, [M-13-13](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2013/m-13-13.pdf) sets requirements on [open data](/policies/data/#open-data), but most agencies have long since stopped producing the regular strategic plans required by this memo.
{:.soapbox}

### Presidential Memoranda

The president occasionally issues memoranda directly in lieu of executive orders; these are distinct from memoranda as issued by @OMB and other organizations. Notably, they *do not* have to go through the Federal Register process and do not have an identifying number. This is a very effective means to issue policy with less oversight or accountability, but also can be used for simple expediency. As such, they are often used by presidents to issue policy on their first day in office,  which would otherwise require a longer process, to set pieces of their policy agenda.

## Circulars

White House offices also produce circulars. These are larger, multi-topic documents on a given theme. Unlike Memoranda, they are updated regularly (sometimes as often as annually) and rarely rescinded. The most noteworthy circulars include [OMB A-11](https://www.whitehouse.gov/wp-content/uploads/2018/06/a11.pdf) which governs the entire Federal Budget process, but includes several technology-related topics such as [Customer Experience (CX)](/policies/customer-experience/) requirements. Another important circular is [OMB A-130](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/circulars/A130/a130revised.pdf) which covers a variety of IT management topics.

Circulars are usually referred to by number (_A-##_).

## President's Budget
{:#budget}

The President also sends an annual federal budget request to Congress, the preparation of which is @OMB's primary function. This in itself can be considered a policy document, highlighting those elements that the Administration considers a priority in need of funding.  During the creation of this document, OMB will communicate these priorities to agencies so that they can properly incorporate them in their individual asks.  Refer to the [article on the Federal Budget](/info/federal-budget/) for more info.

## Directives

@CISA has the authority to issue [directives](https://www.cisa.gov/directives) on cybersecurity topics, directing agencies to take specific actions. These include Binding Operational Directives and Emergency Directives, which require agencies to take specific actions or collect data that is submitted to CISA.

## Guidance

@OMB and other agencies may also issue guidance documents, supplementary implementation guides which may be related to specific policies.  For instance, [@CPIC reporting guidance](https://www.whitehouse.gov/omb/management/egov/#A3) that OMB issues annually.

## Special Publications

@NIST typically issues large guidance documents called Special Publications, divided into logical groupings known as "series." For instance, cybersecurity policies fall under the [800 series](https://www.nist.gov/itl/publications-0/nist-special-publication-800-series-general-information). NIST special publication documents are referred to by number (most commonly _NIST ###-##_ or occasionally _SP ###-##_).

## Other Communications

Although these are the most common types of policy documents, just about any statement issued by @EOP (or any other agency with the proper authority) can be considered a binding policy. Emails from @OMB desk officers to agency @CIOs can be sufficient as a directive to implement some process change, and will hold up to scrutiny from @GAO or the agency's @IG. This also works internally at agencies, following the delegation of authorities - often a CIO can set policy by merit of their position, without formal review. This can be a superpower to get things done.

## Standard Operating Procedures (SOPs)
{:#sop}

All agencies will have agency-specific implementations of policies directed from @EOP, etc.  These typically are issued by the @CIO or agency's chief political officer (Secretary, Administrator, Chair, or otherwise). These define how the higher-level policies are to be specifically implemented at that agency.

The naming and reference of these varies wildly from agency to agency, but in general if you ask for the agency's Standard Operating Procedures or agency-specific policies, most folks will know what you're talking about.  For instance, @SBA calls these SOPs (e.g. "SOP 50 10 6"), but the U.S. Securities and Exchange Commission calls them SECRs (e.g. "SECR 18-3").