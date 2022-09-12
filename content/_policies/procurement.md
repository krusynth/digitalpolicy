---
title: Procurement & Acquisition
layout: document
toc: true
order: 4
description: For even the simplest government acquisition, there are an astonishingly large number of rules to follow, approvals to seek, and forms to fill out.
---

Purchasing _anything_ in government can be especially daunting. There are an astonishingly large number of rules to follow, approvals to seek, and forms to fill out for even the simplest acquisition.

**@WARNING This is a massive topic, impossible to cover in a single article. You should consult with your acquisition team well in advance of any potential purchase. For very large contracts, you may need to start a year or more in advance!**
{:.notes}

The @18F team at @GSA maintains [a blog that is an excellent source of information on good procurement practices](https://18f.gsa.gov/blog/).
{:.notes}

The steps below maybe called different things at different agencies.  The following descriptions are using the [CDC's nomenclature](https://www.cdc.gov/contracts/process/index.html).

## Phase 1: Planning and Forecasting
{:#planning}

Whether it's a single pair of headphones, or a multi-billion dollar cloud contract, approval must be given by the proper authorities within an agency. Of course, the level of scrutiny increases as the dollar value goes up.

### Micro-Purchases

For small items or cheap services, there is a limit known as the [Micro-Purchase Threshold](https://www.acquisition.gov/far/subpart-13.2), below which only minimum reporting is required, and usually there is not much need for official purchase approval. In many cases, the agency will issue credit cards to specific agency officials to allow them to purchase small items, but receipts must still be submitted; these are generally known as **P-cards** or **GPCs** (Government Purchase Cards).

However, any hardware, software, or technology services are **still required** to meet any cybersecurity or enterprise architecture requirements, such as the items being on the [approved software or hardware list](/policies/cybersecurity/#approved-software-list). Due to the very low introductory cost of buying software licenses or cloud services, these have become a large source of "shadow IT" - unapproved and unregulated systems that can cause major security and support issues. It's generally best to go through the official routes - usually by contacting the IT Help desk – for requesting small devices or software.

### Major Investments

Above that, agencies divide investments into **Major** and **Non-Major**, and set a dollar threshold for the dividing line. Major investments trigger a series of approval and reporting processes, including reporting to @OMB via the @CPIC process and other means. As agency budgets differ, the threshold amount here will vary from agency to agency. Similarly, the specific pre-approval processes involved will vary, but it usually looks something like this:

* Budget Planning - a general estimate is prepared to be included in the [agency's budget](/policies/budget-finance/#agency-budgets) for the Fiscal Year the investment will be made (usually up to two years in advance)
* @ARB or @TRB approval - a governing body, typically run by the @CEA, reviews technology projects to reduce duplicative technologies and identify risks for the agency
* @IRB approval - the final decision-making body, often chaired by the @CFO and/or @CIO, which determines which investments to make from funds in a given year's budget

There are often additional steps, make sure to consult with your procurement and @CPIC teams!
{:.notes}

### Non-Major Investments

Non-Major investments will often feature a subset of reviews from the Major Investment process.  Again, this will vary from agency to agency.


## Phase 2: Contract Initiation
{:#contract-initiation}

Once all approvals have been made, the actual purchasing process begins. Although requirements have probably been gathered and documented as part of the budget and planning, these will usually need to be translated by the [Contracting Officer (CO)](#co) into formal contract language. There are several different types of contracts that can be generated, but the @SOO, @SOW, or @PWS are the most commonly-used ones in government.

In most cases, agencies should perform [market research](https://www.acquisition.gov/far/part-10) for the goods and services they are acquiring. This can include issuing a Request for Information (RFI), a document that outlines what the government intends to purchase that is sent to the vendor community. There is no obligation for the government to purchase the services in question from any vendor that responds to an RFI, it is entirely informational-only.
{:#market-research}

As part of any contract, the government must come up with an initial cost estimate, which is called the **Independent Government Cost Estimate (IGCE)**. For labor contracts, it can be useful to refer to the General Services Administration's published rates ([GSA Pricing Tool](https://buy.gsa.gov/pricing/)).
{:#igce}


## Phase 3: Contract Solicitation
{:#contract-solicitation}

Once the agency has the proper language for what they want to buy, the request is sent to the vendor community.  If the agency knows that they want to buy a specific item or well-defined service - say, software licenses - they will release a **Request for Quotation**, just asking for prices.  For other contracts – such as orders for software development or other labor – they will instead issue a **Request for Proposal**, asking for a full recommendation of how the vendor will fulfill the agency's need.

These requests are posted for a fixed amount of time, during which companies may submit their quotations/proposals, or any questions they might have. Sometimes the agency will also host an **"Industry Day"** to answer questions about a given request to the entire audience of potential vendors. The agency may also require presentations, not just written documents, as part of the proposal process - this is especially typical of technology labor contracts, or large dollar service contracts (e.g. [Enterprise Infrastructure Solutions (EIS) telecom contracts](https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services/enterprise-infrastructure-solutions).)

Usually these contracts are posted on [SAM.gov](https://sam.gov/content/home), but there are a number of methods to procure things through standard acquisition processes – see [Acquisition Vehicles](#acquisition-vehicles) and [Shared Services](#shared-services) below.

The solicitation can be published to either the general vendor community, or a subset of vendors. Most agencies are expected to award a percentage of their contracts to [small businesses](https://www.sba.gov/federal-contracting/contracting-guide), for instance most contracts with large cloud companies (such as Amazon or Microsoft) are passed through a **value-added reseller (VAR)**.
{:#vendors}

It is possible for an agency to skip the evaluation process entirely and make a [**Direct Award** to a small, minority-owned business](https://www.acquisition.gov/far/subpart-19.8) that has [8(a) status](https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program), but only with @SBA's explicit approval. However, the entire value of the contract [with options](#contract-extension) cannot exceed $4.5 million dollars, making this path only suitable for small contracts.

### Contract Types

There are many different types of contracts that can be used particularly for labor & service contracts, depending on _how_ the government wants to buy things. It's best to consult with your Contracting Officer for recommendations. The [FAR has an exhaustive list](https://www.acquisition.gov/far/part-16) but a few common ones used in IT include:

* Firm Fixed Price (FFP) - A type of contract that covers the entire cost of the work being done, regardless of labor hours.
* Time & Materials (T&M) - A type of contract where a vendor is paid based on labor hours.
* Indefinite Delivery, Indefinite Quantity (IDIQ) - A type of contract for services that does not have a value limit, only a time limit. Especially useful for agency-wide service contracts that might be used by different programs.
* Blanket Purchasing Agreement (BPA) - A type of _purchasing agreement_ where multiple orders can be made over time for recurring requests, avoiding the need for multiple small contracts. (Sometimes called a Bulk Purchasing Agreement.)

## Phase 4: Contract Evaluation
{:#contract-evaluation}

Once the submission window for proposals has closed, the agency must compare and evaluate the potential offerings. Again, there are a variety of methods to do this, which much be decided in advance. For instance, an agency may decide to reject offerings that do not meet their explicit requirements, or they may only choose to compare a few of the lowest-price proposals, or both (such as ["lowest price technically acceptable"](https://www.acquisition.gov/far/15.101-2)).

It is important to make sure there are no [conflicts of interest](https://www.acquisition.gov/far/subpart-9.5) among the staff evaluating any proposals. The evaluation process must also be documented, in case there are any questions later - particularly to prepare for any potential [Protests](#protests).

## Phase 5: Contract Award
{:#contract-award}

After a vendor is selected, the award is announced and contracts are finalized. If the new contract is to replace an old one with a new vendor, there is typically a transition period of overlap across both contracts, usually at least a month for labor contracts but often much longer. During this time, it is typical for the old contract to "ramp down" and reduce staff while the other contract gets employees onboarded.

It's important to note that most small business vendors do not keep a large group of technical staff on-hand just waiting for labor contracts, and often they will be hiring to fill these roles. Additionally, there are often very long delays waiting for background checks and other security reviews that the agency must perform on all new staff (even without requiring a [security clearance](/policies/data/#security-clearance)!), contractors or otherwise. As a result, onboarding can be a lengthy endeavor, and it is advisable to plan up to _6-10 weeks_ for this process, depending on the number of staff.

Also note that all government IT contracts, whether labor or licenses, will have agency-specific cybersecurity language.

### Protests

Vendors are legally allowed to protest awards for any number of reasons. If they can provide evidence that things were handled improperly, or that conflicts of interest exist. In these circumstances, @GAO is responsible for [adjudicating the protest](https://www.gao.gov/legal/bid-protests).

There have been several high-visibility protests in recent years, including @DOD's massive cloud contract, the Joint Enterprise Defense Infrastructure [(JEDI)](https://federalnewsnetwork.com/reporters-notebook-jason-miller/2018/09/10b-and-other-reasons-why-there-is-so-much-angst-around-dods-jedi-program/)

## Phase 6: Administration
{:#administration}

After the contract has been awarded, the administration phase begins.  It is the responsibility of the @COR to evaluate the performance of the vendor, and ensure that they meet any requirements in the contract. The @CO may also assist with any disputes.

Their performance is also reported officially and publicly. As "previous performance" is often a criteria element for contract evaluation in the acquisition process, vendors sometimes protest the evaluation they've been given.

## Extending the Contract
{:#contract-extension}

Since the [Antideficiency Act](/laws/antideficiency-act/) generally only allows agencies to spend money for the current fiscal year, contracts typically span only a single year. However, the procurement process is so labor-intensive and time-consuming, so it's not cost-effective to go through this process on every contract every year.

As a result, most contracts include **Option Periods**, allowing for agencies to _optionally_ extend the contract.  For larger contracts, these usually are a series of extra years, which individually can be activated. For smaller contracts - or to get through a transition that is not going well - option periods of months are also common.


## Federal Acquisition Regulations (FAR)
{:#far}

The [**Federal Acquisition Regulations (FAR)**](https://www.acquisition.gov/browse/index/far) is the primarily legal document that dictates how the government buys everything. Specifically when dealing with technology and software, [FAR part 12](https://www.acquisition.gov/far/part-12) covers the requirements for acquisition of commercial products & services, and [FAR part 39](https://www.acquisition.gov/far/part-39) covers IT.

It's important to note that the FAR, as well as most government guidance, [directs agencies to **"buy before build"** (12.101)](https://www.acquisition.gov/far/part-12#ariaid-title5), meaning that the government should generally prefer acquiring Commercial-Off-The-Shelf Software (COTS) before building a tool from scratch.
{:#cots}

@SOAPBOX With the rise of Platform-as-a-Service (PaaS) cloud offerings, @RPA, and so-called "low-code/no-code" solutions, this topic has become muddied. These types of tools can present a higher risk for vendor lock-in and are often "brittle" chains of dependencies between systems, which can present problems for government agencies in the long-term. Moreover, implementation of them can be more complex than vendors may promise, such that one might not even consider them COTS at all, and a custom solution may actually be more efficient. It is strongly recommended that agencies reflect on Sean Boots' ["One Day Rule" for COTS software](https://sboots.ca/2020/09/16/fake-cots-and-the-one-day-rule/):
{:.soapbox}
> If you can get a software solution to successfully meet your needs in one day, it’s a real COTS product.
>
> If it takes longer than that, it’s fake COTS.
{:.soapbox.pullquote}

Relatedly, this part generally directs agencies to accept existing technical reference materials and license agreements for COTS products, rather than asking vendors to create new ones. This generally means that agencies should not ask for custom Service Level Agreements (SLAs) from cloud vendors.

However, for custom-developed software, [the government can - _and should_ - require the vendor to produce the software as open source in the public domain, without license (FAR 27.404-4)](https://www.acquisition.gov/far/part-27#FAR_27_404_4). By [U.S. copyright law](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title17-section101&num=0&edition=prelim) all works created by the government are ineligible for copyright protection and thus are public domain assets. Most common open source licenses (GPL, MIT, etc.) rely on copyright and are *not* appropriate for the government to add to any works. ([A thorough discussion on this topic can be found on GitHub regarding the licensing of the Public Sans font.](https://github.com/uswds/public-sans/issues/30))
{:#open-source}

## Contracting Officers
{:#co}

The main acquisition phases within an agency are largely run by a dedicated team (or office) of acquisition professionals, known as **Contracting Officers (COs)**.  Usually one CO handles a contract end-to-end, though occasionally there will be a backup CO or two. For larger or more complicated procurements there may be more staff assigned, or leadership in the procurement team may be involved.

On the program office side, there will be someone who is directly responsible for making decisions about the contract, and after award will evaluate the performance of the vendor against the requirements in that document. This person is known as the **Contracting Officer's Representative (COR)**.  There is also usually at least one Alternate COR on every contract.
{:#COR}

To act as a COR or alternate, the staff member must become COR-certified, known as [**Federal Acquisition Certification (FAC)**](https://www.fai.gov/certification/fac-cor-certification-requirements).  There are three levels of certification, which map to the maximum dollar amount of a contract that you can oversee as the primary COR. Each progressive level requires both additional training and years of experience as a COR.

## Acquisition Vehicles

**Note:** The term "vehicle" is used in government to describe existing contracting channels for the procurement of various types of goods and services, not just automobile-vehicles.
{:.notes}

Agencies may acquire software, hardware, labor services, etc. via acquisition vehicles provided by other federal agencies. This gives agencies the ability to shop off of predetermined lists for commonly used items and services. This is a practice known as **Category Management**. The most common vehicles are listed below.

Moreover, for laptops and desktop computers, @OMB has [mandated that agencies _only_ use the three vehicles listed below](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m-16-02.pdf). However, exceptions have been made in the past due to supply shortages, such as during the computer chip shortage during the COVID-19 pandemic. Agencies seeking such an exception should contact OMB.

* [NASA Solutions for Enterprise-Wide Procurement (SEWP)](https://www.sewp.nasa.gov/contract_info.shtml)
* [General Services Administration (GSA) IT Schedule 70](https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology/buy-from-mas-information-technology/order-desktops-and-laptops-through-mas)
* [Department of Health and Human Services (HHS), National Institutes of Health (NIH), NIH Information Technology Acquisition and Assessment Center (NITAAC) Chief Information Officer-Commodities and Solutions (CIO-CS)](https://nitaac.nih.gov/gwacs/cio-cs)
{:#vehicles}

### Shared Services
{:#shared-services}

As most federal agencies are bound by the same laws & requirements, in many cases it is practical to have a single agency provide a service or platform to most or all of the other agencies. Usually it is within the mission of @GSA to provide these services, for instance most federal buildings are owned and/or managed by GSA.

As one would expect, GSA provides many shared technology services across the government, but they are not the only agency allowed to do so. The [Intergovernmental Cooperation Act of 1968](https://uscode.house.gov/view.xhtml?path=/prelim@title31/subtitle5/chapter65&edition=prelim) allows @OMB to designate _any_ agency as a shared service provider. There are many of these service offerings provided by various agencies, but a few popular shared services include:

* [cloud.gov](https://cloud.gov/) (GSA) - a fully-managed Amazon AWS platform.
* [login.gov](https://login.gov/) (GSA) - a government-run identity verification service used by many agencies
* [eRegulations](https://eregs.github.io/) (GSA) - a public platform for hosting regulations and rulemaking as part of the oversight process
* [CDM](https://www.cisa.gov/cdm) (@CISA) - a monitoring tool for government networks (**required**)
* [webTA](https://www.doi.gov/ibc/services/human-resources) (@DOI) - personnel time tracking used by most HR departments
* [SOC-as-a-Service](https://www.justice.gov/jmd/cybersecurity-services) (@DOJ) - a managed Security Operations Center solution.

@SOAPBOX Technically, the Intergovernmental Cooperation Act also allows these providers, once designated by OMB, to provide services to state, tribal, and local governments as well. However, there has been much reluctance to do so for political reasons. Specifically there has been lots of enthusiasm recently for GSA allowing cities and states to use Login.gov, but as of today they will only do so if the requesting department is funded by federal grant money, a provision not explicitly included in this law.
{:.soapbox}

The standard process for providing these services usually is via an Interagency Agreement (IAA), which authorizes the transfer of funds and explains the scope. For technology, these are typically signed by the CIO and CFO.
{:#iaa}

### Quality Service Management Offices (QSMOs)
{:#qsmo}

Over the last few years, @OMB has been designating specific agencies to run new or evolving shared service programs, to reduce redundancy in government. The goal is to move agencies over to these shared software platforms over the next few years. These programs are known as QSMOs. There are several programs currently in operation:

* @CISA runs several **cybersecurity** areas, including the CDM program previously discussed [website](https://ussm.gsa.gov/qsmo/)
* @USDT runs the **financial management** tools program [website](https://www.fiscal.treasury.gov/fmqsmo/)
* @HHS runs the **grants management** tools program [website](https://www.hhs.gov/grants/qsmo)
* @OPM has been pre-designated to run the **Civilian HR Services** program, but this has not been formalized yet
