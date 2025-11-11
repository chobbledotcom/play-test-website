---
title: Standards & Compliance
featured: true
meta_title: Standards & Compliance - play-test
meta_description: BS EN 14960:2019 compliance and safety standards
header_text: Standards & Compliance
subtitle: Built to meet BS EN 14960:2019 requirements
---

The Play-Test system currently lets users create **BS EN 14960** inspections, but [future plans](/roadmap/) include covering more standards.

"Inspections" are created from combinations of a few types of object:

## Assessments

Each "Inspection" is made of multiple "Assessments". For example, on **BS EN 14960** there are assessments for the structure, for anchorage, for the fan, etc. For units with a slide, there's a slide assessment, and for totally enclosed units there's an enclosed structure assessment.

This turns a single large Inspection, which would run to many pages, into a few more easily digested pages of Assessments.

## Fields

Each Assessment is made of multiple fields, which are things like:

- Just a pass/fail
- A pass/fail with a number
- A pass/fail with a number and a comment
- Just a number
- Just a comment

The system is set up so that each pass/fail, number, comment, and combination of those is stored in the database, translated, and displayed in PDFs in a very strict and consistent way.

This means the system can be easily adapted to future changes to the **BS EN 14960** specification, or to support more Assessment or Inspection types.

## Calculators

As users fill out Inspections, they will see the calculations associated with certain fields. These calculators let the inspector quickly verify that the values that they have entered match their associated pass/fails.

User autonomy is at the heart of the Play-Test system. Regardless of the calculator result, the pass/fail status of fields is a decision for the inspector to make - not the system. Calculators are provided for information only.

# Record-keeping

The Play-Test system logs the changes made to Units, Inspections, and Assessments. This audit log ensures transparency about the provenance of each inspection.

# Open source

The code of the Play-Test system is available for anyone to inspect or to run themselves - the Github link is [github.com/chobbledotcom/play-test](https://github.com/chobbledotcom/play-test/).

Its open source development provides full transparency about the system's operation and allows any user to find and report bugs, suggest fixes to the code, or even implement their own version if they like - without any money needing to change hands.

Its open source license ensures that all modifications to the system must be also be released publicly, if the modifier run a platform online for others to use. This protects the system from developments that do not benefit its users as the modifier would be obliged to share their workings and any other party could "fork" the platform and continue it under the original ethos as an independent system developed for the betterment of the inflatable testing industry.

The system has been developed using Ruby on Rails, an easy to use programming language that does not require any complicated or expensive infrastructure, and full hosting instructions are included in the source code repository.

This structure creates strong guardrails that protect the platform, its users, and any organisations that rely on it from exploitation, both now and into the future.
