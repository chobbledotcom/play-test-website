---
header_text: For Developers
subtitle: Technical documentation and contribution guide
meta_title: Developer Documentation - Play-Test
meta_description: Technical information for developers who want to contribute to or deploy the Play-Test inspection system
permalink: /developers/
eleventyNavigation:
  key: Developers
  order: 6
---

**The Play-Test system is designed to be easy for developers to get stuck into.**

Its tech stack is nothing unusual - it's a **Ruby on Rails** app using very straightforward tools like **Rspec** and **Capybara** for testing, deployed using a **Docker container**.

Ruby (and Rails) is really easy to read and understand - the only thing that makes the codebase a bit messier is the use of **Sorbet** type signatures, which I'm not 100% sold on.

## Getting it running

The quickest way to get Play-Test running locally is with **Docker**:

```
docker pull dockerstefn/play-test
docker run -p 3000:3000 dockerstefn/play-test
```

Then visit [localhost:3000](http://localhost:3000) in your browser.

For **development**, clone the repository and use the included Nix flake for a reproducible environment:

```
git clone https://github.com/chobbledotcom/play-test.git
cd play-test
direnv allow   # or: nix develop
bundle install
rails db:create db:migrate db:seed
rails server
```

Or set up **traditionally** with Ruby 3.0+ and SQLite installed:

```
bundle install
rails db:setup
rails server
```

## Testing

The codebase maintains **90%+ test coverage** using RSpec and Capybara. Run the full test suite with:

```
bin/test
```

This generates an HTML coverage report at `coverage/index.html`. You can also check coverage for specific files with `bin/coverage_check`.

## Build process

The development so far has been all my (Stefan from Chobble) work, supplemented by LLM code generators. Every line of code is reviewed and checked - although I'm less fussy about code tidiness in tests.

If you want to get stuck in, the existing tests and checkers should be pretty good at letting you know when your code isn't sticking to the house style.

## Reporting bugs

If you get the system up and running you'll find a feedback link on the admin side where you can report bugs. Or you can contact Chobble. Or leave a Github issue - all are fine!

## Links & Resources

- GitHub: [github.com/chobbledotcom/play-test](https://github.com/chobbledotcom/play-test/)
- Docker Hub: [dockerstefn/play-test](https://hub.docker.com/r/dockerstefn/play-test)
- Coverage: [coverage.play-test.co.uk](https://coverage.play-test.co.uk)
- Chobble's hosted instance: [play-test.co.uk](https://play-test.co.uk)
- License: AGPLv3
