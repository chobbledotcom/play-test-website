---
header_text: For Developers
subtitle: Technical documentation and contribution guide
meta_title: Developer Documentation - play-test
meta_description: Technical information for developers who want to contribute to or deploy play-test
permalink: /developers/
eleventyNavigation:
  key: Developers
  order: 6
---

<!-- WRITE: Developer-focused page -->

## Content to write:

### Tech Stack

- Rails 8.0+
- Ruby 3.0+
- SQLite database
- RSpec & Capybara testing
- Semantic HTML + MVP.css
- Turbo for progressive enhancement
- Minimal dependencies philosophy

### Architecture Overview

- Model structure (Inspections, Units, Assessments, Companies, Users)
- Assessment types and how they work
- PDF generation and caching
- Photo storage with Active Storage
- ID generation system (badges)

### Test Coverage

- Currently 90%+ line and branch coverage
- Link to coverage.play-test.co.uk
- Testing philosophy
- How to run tests
- How to contribute tests

### Development Setup

Link to detailed setup instructions in GitHub:
- Nix flake (recommended)
- Docker development environment
- Traditional Ruby/Rails setup
- Environment variables needed
- Database setup

### Contributing

- How to fork and clone
- Development workflow
- Code standards (StandardRB)
- Test requirements
- Pull request process
- CLAUDE.md file guidance

### Code Style & Philosophy

- Semantic HTML only (no CSS classes)
- Progressive enhancement
- Internationalisation (all strings via i18n)
- Modern Ruby syntax
- No defensive coding
- Test-driven development

### Deployment

- Docker images
- Environment variables
- S3/object storage for PDFs (optional)
- PDF caching configuration
- Nix deployment

### Links & Resources

- GitHub: github.com/chobbledotcom/play-test
- Docker Hub: dockerstefn/play-test
- Coverage: coverage.play-test.co.uk
- Live demo: play-test.co.uk
- Issues: GitHub issues
- License: AGPLv3

## Screenshot suggestions:

- Code screenshot showing Ruby/Rails code
- Screenshot of test coverage report
- Screenshot of GitHub repository
- Architecture diagram (if available)
