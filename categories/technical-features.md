---
title: Technical Features
featured: true
meta_title: Technical Features - play-test
meta_description: Developer-focused features and technical capabilities
header_text: Technical Features
subtitle: Built for reliability, performance, and extensibility
---

**Warning: The content on this page is very nerdy and technical and probably a pain to read.**

Play-Test is a Ruby on Rails app, deployed in a Docker container. I (Stefan, from Chobble) have tried to keep its code very straightforward, and it doesn't require many dependencies, but it does use Sorbet type checking which is slightly unusual, and it has very high test coverage which can be a bit painful.

It uses the built-in Rails i18n support for string translations, but so far only exists in English. Nearly every string uses i18n, and in the context of forms the i18n strings are tightly bound to the column names, and the column names themselves are strictly defined by their relationship to other columns (eg pass/fails and the numbers and comment associated with those). The forms are built from yaml configs, and tests verify that those configs match the database columns.

I split the form-validation-i18n-pass-fail-etc part out into [Chobble Forms](https://github.com/chobbledotcom/chobble-forms/) because it felt like that was pretty static and could be useful elsewhere, and because it was a hefty bit of code that is separate, really, from the implementation details of those forms which makes up Play-Test. Phew!

**Long story short, this means that column names, related columns, translations, column types, and Sorbet type checks are all tightly bound to one another.** This means there's a bit of work to do to get your head around how things work, but once you do, all new code fits into a very strict structure.

This is useful for developing with LLMs and for writing tests which check the actual structure of the codebase, as well as its implementation.

If you want to get stuck in with building Play-Test - awesome! I would appreciate the help. Check out the [developers](/developers/) page for more links.
