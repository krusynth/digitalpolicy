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


https://digital.gov/resources/checklist-of-requirements-for-federal-digital-services/

### Accessibility & Customer Experience




https://www.eeoc.gov/laws/guidance/americans-disabilities-act-and-use-software-algorithms-and-artificial-intelligence

### Agile

### Open Source

### Records

This is relevant if you want to, say, create a public Git repository that allows anyone to collaborate or post issues - those become records and must be treated the same as emails or other communications.

### Domain Names
