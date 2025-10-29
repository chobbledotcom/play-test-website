---
header_text: Play-Test - online test database for inflatable play equipment
subtitle: Professional inflatable play equipment inspection management
meta_description: Open source safety inspection logging for inflatable play
  equipment. Compliant with BS EN 14960:2019. Multi-company support, PDF
  reports, and comprehensive assessment tools.
meta_title: play-test - Open Source BS EN 14960:2019 Inspection Software
eleventyNavigation:
  key: Home
  order: 1
layout: home
permalink: /
---
**Play-Test is an online test database for play equipment. Users can store inspections to the BS EN 14960 standard and share PDF reports for units or inspections.**

The platform is **open source and available to all** ([here's the source code on Github](https://github.com/chobbledotcom/play-test)). Its development processes are collaborative, transparent, and independent.

The lead developer is [Stefan from Chobble.com](https://chobble.com), formerly a developer at [The Bouncy Castle Network](https://www.bouncycastlenetwork.com) and [Bandcamp.com](https://bandcamp.com).

![Screenshot of the Play-Test system in the process of editing an inspection](/images/screenshot.png)

## Public instances

You can register for **Chobble's hosted instance** of Play-Test at [play-test.co.uk/register](https://play-test.co.uk/register/). This version costs **£5 per month for unlimited test hosting**, payable to Chobble.

If you're an RPII inspector, you can contact them to register for their hosted instance - public URL coming soon!

## User features

Play-Test is simple to use with a clear and obvious interface. Its main user-facing features are:

- BS EN 14960 inspection logging
- PDF reports and sharing
- User login and password resets
- CSV exports
- Image uploads

## Admin features

Admin users are granted a few more abilities:

- Approve user accounts
- Reset passwords
- Replace text strings
- View all units
- View all uploads
- Impersonate users
- Create badges / batches of batches

## Technical features

The platform has been designed to be very scalable and easy to develop on. It's a Ruby on Rails app using a sqlite database which means its code is very straightforward, plus niceties like:

- S3 uploads
- Docker containerisation
- Nix Flake for repoducible dev environments
- Sorbet type checking
- [90%+ test coverage](https://coverage.play-test.co.uk)
- Capybara tests
- Simple federation via cross-search capabilities
