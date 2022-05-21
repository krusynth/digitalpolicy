---
title: How to Develop Software in Government
layout: document
toc: true
---

> If you think your job is writing code and not understanding politics and the political implications of technology not only are you bad at your job, you are dangerously bad at your job and a threat to others
{:.pullquote}
> – [Aurynn Shaw](https://cloudisland.nz/@aurynn)
{:.quote-author}

@WARNING First off, you probably shouldn't be on this page. In general creating an entirely _new_ tool should be the last option in govvernment, you should look for policy solutions first. For instance, instead of digitizing a form, can you remove the policy requirement for the form entirely, and make the service more accessible to everyone?

If you can't fix it through policy, you should look for [a solution you can buy](/policies/procurement/). Sure, it's tempting to just quickly work up a little demo proof-of-concept, but the @FAR section [12.101](https://www.acquisition.gov/far/part-12#ariaid-title5) requires agencies to "buy before build," meaning you should look for @COTS whenever possible before writing a line of code. ([See the full article on procurement & acquisition for more details.](/info/procurement))

Building a pilot project is easy, but the long-term costs to sustain a piece of software can be considerable. It's important to remember that most of the "legacy systems" in government started out as someone's personal pet project, years or even decades ago - all the old mainframe-based applications, databases, and other outdated tools. Many of them are still in use today because no one knows them well enough to replace them. Either hiring or contracting for the proper talent to manage upkeep indefinitely can be extremely daunting. Your project will _likely_ join these ranks as yet another piece of technical debt for the organization; without a clear plan for decommissioning, your code will be legacy before it even launches. ([Trust me on this.](https://billhunt.dev/blog/2016/11/23/lessons-from-the-sunset-of-sunlight-labs/))

It's not too late to turn back from this dark path - but if you must proceed, here are a few guideposts.


## Getting Software Tools

To start, it's a good idea to check your ageny's [Approved Software List](/policies/cybersecurity/#approved-software-list) to see what tools are already allowed to be used. If the tool you want to use is not on that list, you'll either need to choose one that is, or get it added through your agency's governance process. That process can be very lengthy and typically requires a lot of documentation, so you'll need to plan for this in your timelines.

After that, you'll need to make sure [you have funding for any needed licenses or other costs](/policies/procurement/#planning). All tools have some sort of upkeep around them - even just for account management - so in most cases you'll probably need a labor contract to support anything new, or anything you're building.

Open source tools – such as various flavors of unix/linux, or databases like MySQL/MariaDB – can usually be used at most agencies, but some large agencies will only allow them if there's a support contract that can be acquired for them. Again, the standard governance process will apply here. It can be useful to have an agency-hosted repository that only has "secure" versions of packages, or at a minimum a version-control tool that scans for insecure packages in build lists.

### Popular Government Tools

However, tools provided by other government agencies can often be approved through streamlined processes. In some cases, an @ATO may not even be needed, simply an @MOU.

If you're building a web app of any sort, you should probably be using the [U.S. Web Design System](https://designsystem.digital.gov/) as your template.  This is the government-standard framework for all websites, and brings a consistent look and feel to all sites.
{:#uswds}

There are several other popular tools from GSA, but most come with a fee:

* [Federalist](https://federalist.18f.gov/) - A simple static website publishing platform
* [Cloud.gov](https://www.cloud.gov/) - A platfrom-as-a-service offering that wraps AWS, designed to handle security and compliance for the customer.
* [Login.gov](https://login.gov/) - An identity verification service used at many agencies
* [Touchpoints](https://touchpoints.digital.gov/) - A platform for user surveys that requires no additional authorization to meet @PRA requirements.

### Free Commerical Tools

Although it can be attractive to use SaaS tools that have free options, this can be dangerous in government. Any such tools still must go through governance and approval, to avoid creating shadow IT. You absolutely **should not** sign up for a personal account and use it for government work:

1. [The Antideficiency Act](/laws/antideficiency-act/) prohibits the use of personal resources for government business, or staff to enter into a contract on behalf of the government without the authority to do so
2. @FISMA requires protection of government data, no matter how innoculous-seeming the content
3. [The Federal Records Act](/policies/data/#records-management) requires official copies of government records to be preserved.

Even if it's just a small task-tracking tool, do not use these services without official approval.


### Installing Tools
{:#developer-tools}

One of the biggest hurdles that new developers in government will face is the dreaded task of trying to get a development environment of some sort. At almost every agency [only pre-approved software is allowed to be installed on agency computers](/policies/cybersecurity/#approved-software--hardware). As a result, agencies roughly fall into one of three camps:

1. Agencies that allow development software to be installed by the IT help desk;
2. Agencies that require the use of computers *outside* of the local network to do any development (less common); or
3. Agencies that allow developers to install software directly on their machines, usually by giving administrative privileges to users (very uncommon).

Determining which of these your agency falls into will tell you a lot about how paranoid or permissive the agency's security team is.

## Requirements

There are a large number of federal requirements for creating any new tools or websites in the governnment.  @GSA maintains [a rather comprehensive list](https://digital.gov/resources/checklist-of-requirements-for-federal-digital-services/), but a few of the most important topics are covered below. Also note the requirements for websites introduced by the [21st Century IDEA Act](/laws/21st-century-idea-act/).

### Cybersecurity

Any tools created by the government still are subject to the same [cybersecurity requirements](/policies/cybersecurity/) as any other software. Contact both the IT Governance and Security teams as early as possible to make sure you're following the lifecycle for your agency.

### Accessibility

In government, you'll often here mention of **Section 508 compliance**, which specifically is referring to [Section 508 of the Rehabilitation Act of 1978](http://www.gpo.gov/fdsys/pkg/USCODE-2011-title29/html/USCODE-2011-title29-chap16-subchapV-sec794d.htm). This statute requires that all government tools, both internal and public-facing, must be accessible to everyone. This includes folks with vision impairment, motor control issues, and so on.

There are a number of tools to help automate accessibility testing, for instance [pa11y](https://pa11y.org/) can be used in CI/CD pipelines. However, these tools are not a replacement for testing with real humans (using screen readers, etc.), which should always be performed.

Relatedly, it is important to not use algorithmic analysis, such as artificial intelligence or machine learning, for determination of eligibility of benefits or other human-impacting decision making. Recently, the U.S. Equal Employment Opportunity Commission (EEOC) [recommended agencies to not use these tools for assessing job applicants for government roles](https://www.eeoc.gov/laws/guidance/americans-disabilities-act-and-use-software-algorithms-and-artificial-intelligence).

If an agency fails to meet accessibility requirements or introduces bias through algorithms they can be sued for damages by the public.

### Customer Experience (CX)
{:#cx}

Much work in accessibility comes from a **human-centered design** framework, which is also a large part of **Customer Experience (CX)**. [Section 280 of OMB Circular A-11](https://www.performance.gov/cx/assets/files/a11_2020_sec280.pdf) lists requirements for agencies that are High-Impact Service Providers (HISPs). [Executive Order 14058](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/) further expands on this guidance for HISPs and also directs all agencies to incorporate CX into their strategic plans. As such, all projects should apply CX principles, to ensure that the services provided by agencies meet the requirements of the public.

ACT-IAC has produced a handy [playbook for implementing CX practices at agencies](https://www.actiac.org/documents/act-iac-white-paper-customer-experience-playbook-guide-transform-service-delivery).

Customer experience should not be confused with User Experience, which is primarily concerned with application interfaces.

### Agile

Agile methodologies are the standard for private sector software development. However, the government has been very slow to adopt these practices, and most projects still use waterfall or hybrid approaches.

@FITARA states that software development projects _should_ use Agile development practices (called "incremental development" in the law), but stops just short of requiring it. Moreover, @OMB's annual [Capital Planning Guidance](https://www.whitehouse.gov/wp-content/uploads/2020/11/FY22ITBudget_CapitalPlanningGuidance.pdf) has consistently defined agile **only** as releasing software every six months, a limited definition that has allowed most agencies to report waterfall projects as agile. By contrast, @DOD's guide [Detecting Agile BS](https://media.defense.gov/2018/Oct/09/2002049591/-1/-1/0/DIB_DETECTING_AGILE_BS_2018.10.05.PDF) has a more thorough approach to assessing agile.

This is all to say, agile methodologies are strongly recommend and generally just a good idea - but not usually required by federal agencies. Each agency will have its own guidance on the topic, of course.

### Open Source

In 2016, @OMB directed agencies to [proactively release custom-developed software code as open source](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m_16_21.pdf).

GSA maintains a central list of open source projects in government at [code.gov](https://code.gov/) but the list is generally incomplete. It is still recommended that agencies submit their projects to the list, however. Since most federal agencies share their code on GitHub, it can be useful to search for projects there as well.

By [U.S. copyright law](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title17-section101&num=0&edition=prelim) all works created by the government are ineligible for copyright protection and thus are public domain assets. Most common open source licenses (GPL, MIT, etc.) rely on copyright and are *not* appropriate for the government to add to any works. ([A thorough discussion on this topic can be found on GitHub regarding the licensing of the Public Sans font.](https://github.com/uswds/public-sans/issues/30)) Instead, agencies should [publish projects explicitly as public domain code](https://github.com/18F/18f.gsa.gov/blob/main/LICENSE.md).

Note that even if the work is being outsourced to contractors, [the government can still require any custom code to be released as public domain](/policies/procurement/#open-source).

### Data & Records

If the project will be collecting data about individuals in the public, you may also need to submit a @SORN.

Projects should also follow any relevant [Records Management processes](/policies/data/#records-management). Since working in a public git repo - committing code, responding to issues, etc. – generally is considered a legal record, your agency may require extra steps when working with GitHub or similar. One common solution is to require the use of a government-specific account with a government-associated email address which receives email notifications for all activity, thereby automatically providing a copy to the official records management tools already enabled for email.

### Domain Names

You may determine that you want a custom domain name for the project, particularly if you're working on a website. As a general rule, such projects should be hosted at a `.gov`, `.mil` or similar official address. @CISA manages the [**dotgov** program](https://home.dotgov.gov/) and handles all [registrations of new domain names](https://home.dotgov.gov/registration/) for all government agences - federal, state, tribal, or local. Registration is free.

All requests for registrations are reviewed by the White House, which may choose to deny the request for any reason. Previously there had been a large proliferation of new domain names, and some registrations have recently been rejected in an attempt to reduce the sprawl. Whenever possible, it's generally a better idea to use either a subdomain under the agency's primary domain (e.g. [cloud.cio.gov](https://cloud.cio.gov/)), or at a subdirectory under the agency's main website (e.g. [SBA's EIDL loan program](https://www.sba.gov/funding-programs/loans/covid-19-relief-options/eidl)).

### Mobile Friendly

The [Connected Government Act](https://uscode.house.gov/statviewer.htm?volume=131&page=2278) ([44 USC 3359](https://uscode.house.gov/view.xhtml?req=%28title:44%20section:3559%20edition:prelim%29)) and the [21st Century IDEA Act](https://www.congress.gov/115/plaws/publ336/PLAW-115publ336.pdf) ([44 USC 3501 note](https://uscode.house.gov/view.xhtml?req=%28title:44%20section:3501%20edition:prelim%29)) both require that all federal websites must also be mobile-friendly.
