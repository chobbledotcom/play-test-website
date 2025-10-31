---
header_text: Log Inspections with Play-Test
meta_title: Get Started with Play-Test
meta_description: How to get started with Play-Test - try the demo, self-host, or contribute
permalink: /get-started/
eleventyNavigation:
  key: Get Started
  order: 3
---

This page explains how to get started using or contributing to the **Play-Test** system. You can click these shortcuts to jump to the relevant section:

- [I am a bouncy castle inspector](#inspector)
- [I inspect some other type of play equipment](#other)
- [I am a developer](#developer)
- [I can help with translations](#translate)

<h2 id="inspector">I am a bouncy castle inspector</h2>

If you're **registered with the RPII** then you should get in touch with them to gain access to the official RPII instance of Play-Test. Their team will manage your access, and that's who you should contact for support.

If you're **not an RPII inspector** you might like to register on Chobble's hosted instance of Play-Test, at [play-test.co.uk/register](https://play-test.co.uk/register/).

**In either case, you might want to [click here to read about the various things you can with on the system](/features/).**

<h2 id="other">I inspect some other type of play equipment</h2>

If you think Play-Test could be useful for your inspections, then perhaps you'd like to help spec out those inspections so we can support them in a future release.

Because Play-Test is open source and released under the AGPLv3 license, you can add support for any other types of assessment - as long as you share your changes so everyone can benefit!

This model benefits the whole testing / inspection industry, by creating a single, open, transparent, and expandable system which anyone can use for a low cost.

[Get in touch](/contact/) to learn how to help!

<h2 id="developer">I am a software developer</h2>

Awesome! The Github repository is at [github.com/chobbledotcom/play-test](https://github.com/chobbledotcom/play-test) where you can create a Pull Request. You might want to check out [the "Developers" page](/developers/) first.

The code behind Play-Test is straightforward Ruby on Rails, and (aside from the Sorbet type signatures) is generally pleasant to read and understand. It uses minimal dependencies and is not tied to any specific vendor.

The repository includes plenty of tests and linters to help nudge your code into shape.

<h2 id="translate">I can help with translations</h2>

At the moment, the Play-Test system only exists in English. But it uses the built-in Rails internationalisation support basically everywhere - there are very few hard-coded strings.

If you're able to help tranlate Play-Test into other languages and have experience with i18n strings, your help would be much appreciated.
