---
layout: page
title: Data
order: 2
---

There are many interrelated aspect of data governance and management that Federal Agencies are responsible for.  Here are a few of the most common policy elements that you may encounter in dealing with IT systems. Key considerations include how data is **collected, stored, archived** as well as **public access to government data**

This topic is also a major concern for IT security.  [Main Cybersecurity Article](/policies/cybersecurity/).

## Personally Identifiable Information (PII)
{:#pii}

The [Privacy Act of 1974](/laws/privacy-act/) requires that federal agencies protect access to personal information collected about individuals.

@OMB defined Personally Identifiable Information (PII) in [M-07-16 Safeguarding Against and Responding to the Breach of Personally Identifiable Information](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2007/m07-16.pdf):

> _information which can be used to distinguish or trace an individual's identity, such as their name, social security number, biometric records, etc. alone, or when combined with other personal or identifying information which is linked or linkable to a specific individual, such as date and place of birth, mother’s maiden name, etc._

This memo further requires agencies to only keep the minimum amount of personal information necessary to carry out the agency's function.

[M-10-23 Guidance for Agency Use of Third-Party Websites and Applications](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2010/m10-23.pdf) extends this guidance to practices for websites, and specifically addresses [Privacy Impact Assessments (PIAs)](#pia)

### Health Insurance Portability and Accountability Act of 1996 (HIPAA)
{:#hipaa}

The @HIPAA sets privacy requirements specifically for healthcare-related businesses or organizations dealing with healthcare records of individuals. Under the [Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html), these entities cannot disclose health information without the owner's explicit consent. There are [several exceptions](https://www.cdc.gov/phlp/publications/topic/hipaa.html#three) where authorization is not needed, such as in law enforcement and court cases, as well as any "essential government functions," for instance in preventing a pandemic. Employee information tracked as part of official employment records also are not covered, even if the employer is a covered healthcare entity.

HIPAA also does not cover non-healthcare related entities, for instance health information entered into a mobile app on your phone or given to a DNA testing company.

@SOAPBOX In short, HIPAA usually does not apply to Federal agencies for most practical purposes.
{:.soapbox}


## Data Collection & Privacy
{:#data-collection}

There area lots of hurdles to jump when collecting data from the public at a federal agency.  The [Paperwork Reduction Act of 1995](/laws/paperwork-reduction-act/) requires that before agencies collect any data from the public – PII or not – the collection must be reviewed in advance by @OIRA.
{:#pra}

[Exceptions to this include](https://pra.digital.gov/about/#when-doesnt-the-pra-apply):

* collecting data from less than ten people,
* collecting data from federal employees as part of their official duties,
* requests for feedback such as user surveys, and
* comments and discussions gathered at public hearings or online meeting.

The [Privacy Act](/laws/privacy-act/) further requires that a federal agency must file a System of Records Notice (SORN) in the [Federal Register] if personal information is going to be collected about individuals, to notify the public of such collections.
{:#sorn}

The [E-Gov Act](/laws/e-government-act/) also requires the agency to perform a Privacy Impact Assessment (PIA) before creating or purchasing a new information system.
{:#pia}

[OMB M-22-10](https://www.whitehouse.gov/wp-content/uploads/2022/04/M-22-10.pdf) was recently issued directing agencies to reduce the burden on the public to supply data for benefit programs, including the psychological burden on individuals. It also states that agencies should be doing user testing in alignment with @CX principles, and clarifies the lowered requirements for this testing.

Given the amount of time and hassle involved in these approval and review processes, agencies typically will write the notices/requests broadly, to avoid going through the whole process repeatedly for small changes, system migrations, etc.

In 2016, [Executive Order 13719](https://obamawhitehouse.archives.gov/the-press-office/2016/02/09/executive-order-establishment-federal-privacy-council) created Senior Agency Officials for Privacy (SAOP) at federal agencies, responsible for the collection and handling of information gathered about individuals – but [responsibility for protection of this information typically remains with @CIOs.](/policies/cybersecurity/#responsibility)  [OMB M-16-24](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m_16_24_0.pdf) gives implementation details for this EO.

## Data Classification

There are two primary types of data control classification in government. The first, and most well-known, is **Classified National Security Information**. When you hear people talk about "Top Secret" documents or clearance, this is what they are referring to. The specific guidance on classification of this nature has changed several times over the years. The most recent guidance released in 2009 in [Executive Order 13526](https://www.archives.gov/isoo/policy-documents/cnsi-eo.html) defines three levels:

> _(1) "Top Secret" shall be applied to information, the unauthorized disclosure of which reasonably could be expected to cause exceptionally grave damage to the national security that the original classification authority is able to identify or describe._
>
> _(2) "Secret" shall be applied to information, the unauthorized disclosure of which reasonably could be expected to cause serious damage to the national security that the original classification authority is able to identify or describe._
>
> _(3) "Confidential" shall be applied to information, the unauthorized disclosure of which reasonably could be expected to cause damage to the national security that the original classification authority is able to identify or describe._

Top Secret documents may also be marked for additional controls, commonly referred to as **Sensitive Compartmented Information (TS/SCI)**.

If a federal employee or contractor must deal with these classified documents, they must obtain the matching clearance from their agency, which involves a security investigation and background check. Outside of @DOD, @DHS, or specific Cybersecurity roles, these clearances are not common - even most staff at @OMB do not possess a clearance, and they usually aren't needed for day-to-day technology work. Note that for most government roles, employees must at a minimum possess a **Public Trust** review and approval, but this is not actually considered a security clearance. It can still take weeks - or months - to receive this clearance.
{:#security-clearance}

These materials typically must be viewed only within a , to ensure that the data is protected.  Each main agency office typically has a SCIF.  Staff without clearance may enter a SCIF, but specific procedures must be followed - usually they must be escorted.  Electronic devices such as agency cellphones are typically not allowed to be brought into a SCIF.
{:#scif}

[Executive Order 13556](https://obamawhitehouse.archives.gov/the-press-office/2010/11/04/executive-order-13556-controlled-unclassified-information) created the designation of Controlled Unclassified Information (CUI), which replaced the older designation of @FOUO. This is information that does not require the protections of classified information, and thus a security clearance is not required for viewing this information, but special protections are required specifically for storage and dissemination. As such, the designation is important for cybersecurity and records management purposes. Examples of this type of data can include agency-specific internal policy documents or "deliberative" drafts that have not been finalized.
{:#cui}

The second type of data control classification is for *systems* which host any government data. See the main [Security Assessment article](/policies/cybersecurity/#security-assessment) for more details.

## Open Data

For more information on open data, readers should refer to [Open Government Data: The Book](https://opengovdata.io/).
{:.notes}

The government has a duty to be transparent to the public in its operations. This is a fundamental tenet of democracy, but is also incorporated in law and policy. One method to provide transparency is through providing **Open Data**, data which is provided for use by the public without license or restriction.

The most recent official @OMB policy on Open Data is [M-13-13](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2013/m-13-13.pdf) issued in 2013. This memo directs agencies to be more proactive in publishing open data sets, and requires them to keep and publish an inventory of these on the agency website at the url `/data`. Additionally, a catalog of open data provided by the federal government is hosted on [**data.gov**](https://data.gov/). In 2010, the OMB [Open Government Directive (M-10-06)](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2010/m10-06.pdf) required Agencies agencies to create a strategic plan for open data, updated every two years, hosted on the angecy's website at the url `/open`. However, many agencies have not updated their plans in quite some time - notably [the @VA has **never** updated theirs](https://www.va.gov/open/). Many of the requirements under M-13-13 were made permanent by the [Open, Public, Electronic and Necessary (OPEN) Government Data Act](/laws/evidence-based-policymaking-act/#open-government-data-act) in 2017.

Open data laws at the federal, state, and local levels are often referred to as, or explicitly named, "sunshine laws." An example is the [Government in the Sunshine Act of 1976](https://www.govinfo.gov/link/statute/90/1241?link-type=pdf). In addition to procedural information, budget, contracts, and procurement data is also a key area of interest for watchdog groups.

Note that Open Data can refer to things beyond just statistical data & spreadsheets; it often refers to policies and procedures as well. For instance, agencies are required by the [GPRA Modernization Act of 2010](https://www.congress.gov/bill/111th-congress/house-bill/2142) to publish strategic plans on how they are achieving their mission requirements, and those plans must be published on the agency's public website.

### Freedom of Information Act (FOIA)
{:#foia}

The [Freedom Of Information Act (FOIA)](/laws/foia/) requires that all agencies publish publicly their policies and procedures. Moreover, it establishes the right of the public to request any records the agency might possess.  There are [exceptions to this](https://www.foia.gov/faq.html#b-a17), for instance agencies do not have to release information if it contains issues of national security, trade secrets, or personal information on individuals. Agencies may charge a reasonable fee for the production of these records, but it may take months - or even years - for these to be returned to the requester. In an agency, these requests are commonly known as **FOIA requests**.

In general, agencies respond to FOIA requests directly back to the requestor. However, for many years many agencies have been pressured by watchdog groups to adopt a "Release to One, Release to All" policy, in which responses to all FOIA requests are made openly available online for the public to review. Although a limited six-month pilot was performed during the Obama administration in 2015, these were not formalized in most agencies.

## Records Management

The Federal Records Act of 1950 established a requirement for federal agencies to keep copies of key records. This was augmented by the Presidential Records Act of 1978, which specifically applies to the records of the president and their political appointees. By these laws, @NARA is responsible for overseeing records management, and agencies also send copies of their records to NARA for preservation.

Records may include policies and procedures, emails, and other information. In general, most records are kept for seven years, except for records of historical importance which may be kept permanently. (Refer to [NARA's records schedule](https://www.archives.gov/about/records-schedule) for more details.)  [OMB M-19-21](https://www.whitehouse.gov/wp-content/uploads/2019/08/M-19-21-new-2.pdf) requires all agencies to move away from paper-based records, and by the end of calendar year 2022 they must only submit electronic records to NARA.

[Title 44 of the U.S. Code](http://uscode.house.gov/view.xhtml?path=/prelim@title44&edition=prelim) deals with records management; specifically chapters [29](http://uscode.house.gov/view.xhtml?path=/prelim@title44/chapter29&edition=prelim), [31](http://uscode.house.gov/view.xhtml?path=/prelim@title44/chapter31&edition=prelim), and [33](http://uscode.house.gov/view.xhtml?path=/prelim@title44/chapter33&edition=prelim) deal with federal records and [chapter 22](http://uscode.house.gov/view.xhtml?path=/prelim@title44/chapter22&edition=prelim) deals with presidential records.

## Chief Data Officer (CDO)
{:#cdo}

Given the large number of data-oriented tasks at an agency, the [Foundations for Evidence-Based Policymaking Act](/laws/evidence-based-policymaking-act/) created the position of the Chief Data Officer (CDO) at each agency. This role shares some responsibilities for technology management and security with the @CIO and @CISO, though in most cases the CIO retains the primary authority.

However, the CDO may be positioned anywhere in the organization - sometimes reporting to the CIO, but just as often in an arbitrary other office, such as at @SBA they're part of the CFO's office. Due to no funding being provided with the Act - and thus no additional staff slots - in many agencies the CDO role was assinged as an additional title for an existing staff member. For instance, at @DOJ the CIO is also the CDO.

The creation of the CDO role also tied closely to other presidential initiatives around 2018 under the [**Federal Data Strategy**](https://strategy.data.gov/). Although the strategy was intended to be a 10-year plan with annual updates from agencies, it has received less attention in the current administration.