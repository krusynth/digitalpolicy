---
title: Federal Budget & Finance
layout: document
toc: true
order: 3
---

The U.S. Federal Budget process is comprised of three, mostly-siloed processes. The first is each agency's internal budget process to determine what funding is needed. The second is a collaborative effort between each agency, @OMB, and the White House to produce the President’s Budget. The third is the Congressional process to create the actual Federal budget that will be appropriated.  

In most cases, the budget only contains funding for a single year's activities of the entire government.

## The Federal Budget Process

### The President's Budget

The [Resource Management Offices](/info/policymaking-offices/#rmos) within @OMB are primarily responsible for coordinating the budget process with agencies. They work to take requests from agencies, align them with the current president's priorities, and produce the President's Budget, which is then sent on to Congress to consider for [appropriations](#appropriations).

The government Fiscal Year (FY) begins on October 1st and ends on September 30th. However, the U.S. Federal Budget process is a multi-year activity, including many steps. At any given time, an agency is managing a budget for three different fiscal years simultaneously: The current operating year, negotiating on the coming year’s budget, and formulating the following year’s budget. The table below lists important dates for an example cycle for a single fiscal year's budget process - but again, keep in mind that three cycles will be overlapping at a time.)

{% assign CY = site.time | date: '%Y' -%}
{%- assign FY2 = site.time | date: '%y' | plus: 2 %}

| **Calendar Date** | **Description** |
| ---- | ----------- |
| March {{ CY }} | OMB Releases their Spring Guidance for agencies to implement the priorities in their budget for FY{{ FY2 }} |
| April-August {{ CY }} | Agencies formulate their budgets for FY{{ FY2 }} |
| June or August {{ CY }} | OMB issues updated [Circular A–11](https://www.whitehouse.gov/omb/information-for-agencies/circulars/#budget) to all Federal agencies for FY{{ FY2 }}. This Circular provides detailed instructions for submitting budget data and materials |
| September {{ CY }} | Agency budgets for FY{{ FY2 }} submitted to OMB |
| October-November {{ CY }} | OMB RMO/Desk Officer Review of Agency budgets for FY{{ FY2 }} |
| Late November {{ CY }} | OMB RMOs & Desk Officers brief senior White House leadership on agency budget requests for FY{{ FY2 }} |
| Late November, {{ CY }} | Based on leadership’s recommendations, OMB provides **Passback** - guidance to agencies on changes to their requested budgets - for FY{{ FY2 }} |
| December {{ CY }} | Agencies submit any budget appeals for FY{{ FY2 }}. |
| January {{ CY | plus: 1 }} | Agencies prepare their **Congressional Budget Justifications (CBJs) for FY{{ FY2 }} |
| February {{ CY | plus: 1 }} | The President sends their budget for FY{{ FY2 }} to Congress |
| October 1 {{ CY | plus: 1 }} | Beginning of FY{{ FY2 }}. Congress must issue the FY{{ FY2 }} budget (or a Continuing Resolution) before this date to avoid a shutdown |
{:#timeline}

### Congressional Appropriations
{:#appropriations}

In parallel to the President's budget, there are a series of committees in Congress in both the [House](https://appropriations.house.gov/) and [Senate](https://www.appropriations.senate.gov/) which determine what funding the agencies under their purview should receive. The primary method for approving funding for agencies is the Federal Budget, which is the final document that tells @USDT to send money to agencies. Although they receive the President's official request, they are under no obligation to fund any of the requests at the levels requested. They often may fund at higher or lower amounts than requested - or not fund items at all.

The House and Senate committees each come up with their own versions of these appropriations bills, and the chambers compare notes to produce a final version in a process known as **reconcilliation**. The separate appropriations bills can be passed individually or bundled together into an **omnibus** bill. As with all laws, these do not take effect until the President signs them.

The appropriations written into law are divided up into various categories for each agency, the most common being Salaries and Expenses. Particular programs are sometimes given their own funding, for instance usually the @OIG has a dedicated fund, or at the @SBA the disaster loans program receives an independent amount. (At @DOD, program categories are referred to as **"Color of Money."**) Usually there is also language stating how much of this funding can be moved around - "reprogrammed" in budget terms - to other program areas. For instance, a dedicated program may still need to contribute money to the pool for enterprise-wide systems in support of its mission functions, such as telecom service or email licenses. Often this amount is 5-10%, and usually Congress must be notified of any reprogramming.

The final budget is supposed to be passed by June 30th of each year, however this almost never happens. The budget *must* be passed by October 1st, the day the new Fiscal Year starts, but recently Congress has frequently failed to meet this deadline. In these cases, typically Congress will pass a **Continuing Resolution (CR)**, a document which effectively allows agencies to continue paying salaries and funding any investments/contracts at current levels, until Congress can pass the real budget. However, new investments or additional amounts are effectively frozen.

CRs have an expiration date as well - typically a few months out - but a series of CRs may be passed in sequence. For instance, the FY2022 budget was not passed by congress until March 10th 2022, almost halfway through the fiscal year!

@SOAPBOX Continuing resolutions are widely known to be very expensive for the government, as the lack of real funding paired with financial uncertainty forces agencies to make investments that are counterproductive. For instance, they may have to accept less-good terms on short-term contracts to cover immediate needs.
{:.soapbox}

If a CR is not passed, the [Antideficiency Act (ADA)](/laws/antideficiency-act) states that no money can be spent outside of the year(s) it was budgetted for, so the government **must** shut down if there is no new funding approved. Only **key personnel** report to work during a government shutdown, typically these are senior agency officers and those staff required to keep key areas running, such as data centers.

Unspent funds at the end of the year must be returned to the Treasury.  As a result, most agencies spend down all remaining funds at the end of the year - often on hardware investments such as servers, laptops, or printers. Unused funds are accounted for by the @CFO and re-allocated, typically in the last month or so of the fiscal year (September).

### Other Funding Sources

Congress can also fund programs and projects outside of the main appropriations bills. For instance, the [CARES Act](https://www.congress.gov/bill/116th-congress/senate-bill/3548/text) provided nearly $300 billion in emergency funding to the @SBA to fund loans to small businesses impacted by the COVID-19 pandemic.

There are also a very small number of funding sources that do not have the one-year restriction of standard appropriations.  For instance, the [Modernizing Government Technology Act](/laws/mgt-act/) established two sources of funding:

The [**Technology Modernization Fund (TMF)**](https://tmf.cio.gov/) is a fund which provides multi-year "loans" to agencies for IT improvement projects. Any agency can apply for these funds, and it is administered by @GSA at the direction of [a board](https://tmf.cio.gov/board/) which evaluates the investment requests.  In some cases, agencies can request approval to _not pay back_ these loans as well!
{:#tmf}

Agencies may also have various **Working Capital Funds (WCFs)** which often provide multi-year funding for different types of projects.  The MGT Act established IT-specific WCFs at _some_ of the [CFO Act agencies](/info/agency-scope/#cfo-act-agencies), to be directed by the @CIO of each agency.  However, the MGT Act was flawed, and [legal challenges exist to establishing these funds.](https://federalnewsnetwork.com/reporters-notebook-jason-miller/2022/04/treasury-joins-the-growing-ranks-of-agencies-with-it-working-capital-funds/). Typically, a IT WCF is funded via of cost savings and avoidance realized through IT improvements, capped at 3%-5% of the agency's salaries and expenses, and any amount saved must be spent within 3 years.

Beyond the MGT Act, there are a few other small sources of **no-year funding**, which can be used until expended. An example is the **Information Technology Oversight and Reform (ITOR) Fund** which funds @OFCIO at OMB. Since no-year funds by definition don't expire at the end of the year, staff salaries and contractors funded out of these funds continue working during a government shutdown.

### Agency Budgets

The agency budget process is typically overseen by the agency @CFO, coordinating with the agency head (typically the Secretary, Administrator, or Chair). A federated agency, such as @USDA or @DOJ, must coordinate its activities across the many component bureaus. The actual process will vary slightly from agency to agency, as each office or component has specific needs that will be accounted for based on the politics of a given organization.

[CFO Act agencies](/info/agency-scope/#cfo-act-agencies) are subject to [FITARA](/laws/FITARA/), giving the @CIO authority over the IT budget. In these agencies, the CIO and CFO typically work together with the program offices to identify and prioritize IT needs in a separate, parallel process from the main budget. At small agencies not subject to FITARA, the CIO usually does not have final say on how money is spent on IT at the agency, and the CFO retains that authority. In both cases, there is usually some sort of investment board that reviews proposed IT investments, both requests from the IT office and other program offices.

## Chief Financial Officers Act (CFO Act)
{:#cfo-act}

The @CFO Act, as the name implies, established the role of Chief Financial Officers (CFOs) at federal agencies. However, it only formalized the role at specific agencies - known as the [CFO Act Agencies](/info/agency-scope/#cfo-act-agencies). At agencies not covered by the CFO Act, including all smaller agencies, there still is almost always a CFO who is delegated authority by the administrator of that agency.

This act, as amended by the [Accountability of Tax Dollars Act of 2002](https://www.congress.gov/bill/107th-congress/house-bill/4685), requires agencies to create formal processes for financial management & reporting.

## Risk Management

Given all of the complexity in financial management, there are a large number of reports made to Congress on these topics. One key area of reporting is Risk Management, specifically regarding investments. [Circular A-123](https://www.whitehouse.gov/omb/information-for-agencies/circulars/) describes the coordinated process for risk management & reporting.

As described in [an older revision of A-123](https://obamawhitehouse.archives.gov/omb/circulars_a123_rev), this risk management process is designed to cohesively account for reporting and oversight compliance in accordance with the following interrelated laws:

* [Federal Managers Financial Integrity Act of 1982 (FMFIA)](https://www.congress.gov/bill/97th-congress/house-bill/1526)
* [Government Performance and Results Act of 1993](https://www.congress.gov/bill/103rd-congress/senate-bill/20)
* [Chief Financial Officers Act, as amended (CFO Act)](/laws/cfo-act/)
* [Inspector General Act of 1978, as amended (IG Act)](https://uscode.house.gov/view.xhtml?path=/prelim@title5/title5a/node20&edition=prelim)
* [Federal Financial Management Improvement Act of 1996 (FFMIA)](https://www.congress.gov/bill/104th-congress/house-bill/4319)
* [Federal Information Security Management Act of 2002 (FISMA)](/laws/fisma/)
* [Improper Payments Information Act of 2002 (IPIA)](https://www.congress.gov/bill/107th-congress/house-bill/4878)
* [Single Audit Act, as amended](https://www.congress.gov/bill/104th-congress/senate-bill/1579)
* [Clinger-Cohen Act of 1996](/laws/clinger-cohen/)

@SOAPBOX it most cases it is not important to know all of these laws, but it is important to note that Risk Management is a complex process mostly associated with Financial Management and Cybersecurity. However, each agency's risk management process may be slightly different. For instance, risk management may be siloed from IT investment management, so an agency may put **no priority** on buying down IT risks. Check with your leadership as to how the process works at your agency.
{:.soapbox}

## Capital Planning and Investment Control (CPIC)
{:#cpic}

The [Capital Planning and Investment Control](/policies/cpic/) process is required by the [Clinger-Cohen Act](/laws/clinger-cohen/). Agencies are required to report on their **major** IT investments _monthly_ to @OMB @OFCIO (which is a management-side office). The format is defined in [Circular A–11](https://www.whitehouse.gov/omb/information-for-agencies/circulars/#budget), and has slowly been moving into alignment with the @TBM framework.

In addition to dollar amounts being spent, the @CIO also must provide a risk rating for these investments, which is taken into account on the [FITARA Scorecard](/laws/fitara/#fitara-scorecard). Data submitted to OMB is published publicly on the [IT Dashboard](https://itdashboard.gov).

OMB states that Major IT Investments include those that meet _any_ of the following criteria:

* has importance to the mission or function of the agency;
* has significant program or policy implications;
* has high development, operating, or maintenance costs;
* is funded outside of direct appropriations; or
* is otherwised defined as "major" by the agency's own CPIC process.

This definition is rather vague, and generally allows agencies to define for themselves which of their IT investments are major.

@SOAPBOX Although the CPIC process involves finance data, it is almost completely separate from the Federal Budget process. It also largely is not connected to any sort of useful performance reporting mechanisms or any other oversight efforts, leaving it mainly in a silo from operational activities. In practice, it is a very laborious paperwork exercise used exclusively for government transparency purposes.
{:.soapbox}

