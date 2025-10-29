---
header_text: Standards & Roadmap
subtitle: Current features and future plans
meta_description: Current BS EN 14960:2019 support and future plans for
  additional play structure standards
meta_title: Standards & Roadmap - play-test
eleventyNavigation:
  key: Roadmap
  order: 5
permalink: /roadmap/
---
As of November 2025, the Play-Test system only supports testing against **BS EN 14960** tests for inflatable play equipment.

However, there are many other standards which the system could easily be adapted to - assessments are defined in a strict, modular way which means future standards can be supported by transcribing their specs into the system's configuration format. The next easiest examples would be:

- BS EN 14960-2 - Bouncing pillows
- BS EN 14960-3 - Snappies

**We need volunteer experts in other tests to help convert their specifications into the configurations needed for the Play-Test system.**

The system's form / inspection functionality is provided by a Gem I made called [chobble-forms](https://github.com/chobbledotcom/chobble-forms). This defines a strict approach for laying out forms that ensures that the fields match the database which matches the i18n strings which matches the PDFs. This should make future specs relatively easy to support.