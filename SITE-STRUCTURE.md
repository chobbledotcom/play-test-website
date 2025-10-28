# play-test Promotional Site Structure

## Summary

This is a promotional website for the play-test system, an open source inspection management tool for inflatable play equipment (BS EN 14960:2019).

Built with the Chobble Client Site Builder, it uses static markdown files for content and builds automatically via GitHub Actions.

## Key Messages

1. **Open Source Ownership** - Code owned by the commons, not manufacturers or industry bodies
2. **RPII Sponsorship** - Development sponsored by Recreational and Play Inspectors Ireland
3. **Standards Compliance** - Full BS EN 14960:2019, future plans for more standards
4. **Proven & Practical** - Live at play-test.co.uk with real-world usage

## Site Structure

### Configuration Files (`_data/`)

- `site.json` - Site name, URL, social links
- `meta.json` - Organisation metadata, SEO
- `homepage.json` - Controls which sections show on homepage

### Static Pages (`pages/`)

1. **index.md** - Homepage with hero, value proposition, featured products
2. **about.md** - What play-test is, open source philosophy, RPII partnership
3. **get-started.md** - How to try demo, self-host, or contribute
4. **rpii-partnership.md** - Details about RPII sponsorship
5. **roadmap.md** - Current standards support and future plans
6. **developers.md** - Technical docs for contributors
7. **support.md** - Getting help and supporting the project

### Features/Products (`products/`)

Each "product" is actually a feature of play-test:

1. **equipment-tracking.md** - Unit records, photos, inspection history, badge generation
2. **seven-assessment-types.md** - User height, slide, structure, anchorage, materials, enclosed, fan
3. **pdf-report-generation.md** - Professional reports with QR codes and branding
4. **company-management.md** - Multi-company support, user roles, branding
5. **standards-compliance.md** - BS EN 14960:2019 implementation and calculations
6. **open-source-community.md** - AGPLv3 license, community ownership, neutrality
7. **technical-excellence.md** - Test coverage, progressive enhancement, architecture

### Categories (`categories/`)

Organise features into groups:

1. **inspection-features.md** - Core inspection functionality
2. **management-tools.md** - Company and user management
3. **technical-features.md** - Developer-focused features
4. **compliance.md** - Standards and safety

### News (`news/`)

- **welcome-to-play-test.md** - Inaugural announcement (placeholder)
- **example-future-release.md** - Template for future releases

## Content Status

**Status: ALL FILES CREATED WITH PLACEHOLDER CONTENT**

Each file contains:
- ✅ Proper frontmatter (YAML metadata)
- ✅ Structured placeholder content
- ✅ Bullet-point guides explaining what to write
- ✅ Screenshot suggestions
- ❌ Actual written content (TO DO)
- ❌ Images/screenshots (TO DO)

## Navigation Structure

Main menu (auto-generated from `eleventyNavigation`):
1. Home
2. About
3. Get Started
4. RPII
5. Roadmap
6. Developers
7. Support

Products/features and categories are browsable but not in main nav.

## Writing Tone

- Simple, slightly informal British English
- Conversational but professional
- Focus on practical benefits
- Enthusiastic about open source values
- Emphasise community ownership

## Images Needed

### Critical Screenshots
1. Dashboard/main interface
2. Inspection form in progress
3. Seven assessment types overview
4. PDF report example
5. Equipment tracking page
6. Company branding settings
7. Mobile responsive view

### Supporting Screenshots
8. Dark/light theme comparison
9. Individual assessment forms
10. QR code badges
11. Search/filter interface
12. Standards documentation inline
13. Test coverage report
14. GitHub repository page

### Logos/Assets
- RPII logo
- Chobble logo
- GitHub icon/badge
- BS EN 14960 reference

## Next Steps for Content Writer

1. Read `CONTENT-GUIDE.md` for detailed writing instructions
2. Start with `pages/index.md` (homepage)
3. Then `pages/about.md` (core messaging)
4. Fill in the 7 product/feature pages
5. Complete supporting pages
6. Write inaugural news post
7. Gather and add screenshots
8. Review and refine

## Technical Notes

- Site builds automatically on push to GitHub
- Uses Eleventy static site generator
- Chobble Template provides styling (MVP.css)
- No custom CSS needed
- Semantic HTML only
- Responsive by default

## Links

- **play-test repo**: https://github.com/chobbledotcom/play-test
- **Live demo**: https://play-test.co.uk
- **Test coverage**: https://coverage.play-test.co.uk
- **Docker**: dockerstefn/play-test
- **OpenCollective**: opencollective.com/play-test
