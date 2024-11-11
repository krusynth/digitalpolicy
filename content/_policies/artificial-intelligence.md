---
title: Artificial Intelligence
layout: document
order: 4
description: A summary of policies relating to Artificial Intelligence usage and acquisition in the Federal Government.
---

Both the [Trump Administration](https://trumpwhitehouse.archives.gov/ai/executive-order-ai/) and [Biden Administration](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) sought to speed up the widespread purchasing of Artificial Intelligence in the Federal Government.

## First OMB AI Memo

@OMB memorandum [M-24-10](https://www.whitehouse.gov/wp-content/uploads/2024/03/M-24-10-Advancing-Governance-Innovation-and-Risk-Management-for-Agency-Use-of-Artificial-Intelligence.pdf) set definitions for AI, and requires every agency to designate a Chief AI Officer and create an AI Governance Board. It also establishes the Chief AI Officers Council, a government-wide body to provide coordination on AI impementation.
{:#M-24-10}

Each agency must develop a plan for "removing barriers to the use of AI and advancing agency AI maturity," as well as produce an inventory of all the use cases for AI across the agency.

This memo differentiates between "safety-impacting and rights-impacting AI" and all other uses of AI in government, and provides additional requirements around the former including additional monitoring for bias and providing means for the public to opt-out of AI-based processes in favor of human-based processing & assessment on an individual basis.

It also states that agencies "must proactively share their custom-developed code—including models and model weights—for AI applications in
active use and must release and maintain that code as open source software on a public repository." It also highlights the requirements of the [OPEN Government Data Act](/policies/data/#open-government-data-act), reiterating that agencies should be proactively publishing the data they are using to train AI models.

## OMB Memo on AI Acquisition

OMB memorandum [M-24-18](https://www.whitehouse.gov/wp-content/uploads/2024/10/M-24-18-AI-Acquisition-Memorandum.pdf) further extends the provisions of M-24-10 but focuses on the acquisition of AI technology. It reiterates the requirement from the [Federal Source Code Policy](/info/software-development/#open-source) for agencies to include language in software development contracts which states that any vendor-produced code must be open source. It also introduces new requirements for contracts with AI vendors requiring data management practices, and disclosures as to the use of copyrighted materials in training data, as this could put the government at significant legal risk.
{:#M-24-18}

Notably, this memo *does not* cover the use of open source models which have not been purchased.

@WARNING It is important to note that almost all of the most popular AI models have End-User License Agreements (EULAs) and/or Terms of Service (TOS) that the federal government cannot legally agree to, as they contain provisions requiring indemnification (a violation of the Anti-Deficiency Act ([31 USC 1341](https://uscode.house.gov/view.xhtml?path=/prelim@title31/subtitle2/chapter13/subchapter3&edition=prelim)), agreeing to arbitration, and other restrictions. Even for open source models, the EULAs and TOS are agreed to simply by being used and would be illegal. It is strongly suggested that agencies consult their general counsels, and negotiate individual terms with their vendors before using any AI models.
{:.notes}

@SOAPBOX In these memos, OMB once again made the decision to put acqusition requirements on individual agencies, rather than the more practical implementation of having GSA Category Management negotiate the terms with vendors for the government as a whole, as previously was done for cloud-related service providers on Service Level Agreements and Terms of Service. As such, large amounts of effort will be duplicated from agency to agency as each must re-negotiate with each vendor individually.
{:.soapbox}

## NIST AI Risk Management Framework

In early 2023, NIST published their [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework). This is a high-level framework that describes considerations for the governance, testing, and management of AI systems in general. Unlike many other NIST publicatsion, there are no legal requirements here for federal agencies - these are just guidelines.