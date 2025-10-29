# Content Writing Guide for play-test Promotional Site

## Overview

This site uses the Chobble Client Site Builder. Your content goes in markdown files in these directories:
- `pages/` - Static pages with navigation
- `products/` - Features of the play-test system (displayed as "products" but without prices)
- `categories/` - Groups for organising products/features
- `news/` - Blog posts and announcements
- `images/` - All images and screenshots

## Content Tone & Style

**Simple, slightly informal British English:**
- Use British spellings (organised, colour, catalogue)
- Be conversational but professional
- Avoid jargon where possible, or explain it when necessary
- Address the reader directly ("you" rather than "users")
- Be enthusiastic about open source without being preachy

**Key messages to emphasise:**
1. **Open source means code owned by the commons** - not tied to manufacturers or industry bodies
2. **RPII sponsorship** - shows industry backing and legitimacy
3. **Standards compliance** - BS EN 14960:2019 with plans for more
4. **Practical and proven** - live at play-test.co.uk with real usage

## File Structure

### Pages (`pages/`)

All pages have placeholders with bullet points explaining what to write. Each page includes:
- `header_text` - Main heading
- `subtitle` - Subheading
- `meta_title` - SEO title
- `meta_description` - SEO description
- `permalink` - URL path
- `eleventyNavigation` - Menu position

**Existing pages:**
1. `index.md` - Homepage (hero, introduction, value proposition)
2. `about.md` - What play-test is, why it exists, open source philosophy
3. `get-started.md` - How to try it, self-host, or contribute
4. `rpii-partnership.md` - About RPII sponsorship
5. `roadmap.md` - Current standards (BS EN 14960:2019) and future plans
6. `developers.md` - Technical documentation for contributors
7. `support.md` - Getting help, sponsoring the project

### Products (`products/`)

Each product represents a **feature** of play-test. They're displayed like products but without prices.

**Existing feature pages:**
1. `equipment-tracking.md` - Unit records, photos, inspection history
2. `seven-assessment-types.md` - The seven safety assessments
3. `pdf-report-generation.md` - Professional reports with branding
4. `company-management.md` - Multi-company support
5. `standards-compliance.md` - BS EN 14960:2019 implementation
6. `open-source-community.md` - AGPLv3, community ownership, RPII sponsorship
7. `technical-excellence.md` - Test coverage, progressive enhancement, architecture

Each product file includes:
- Suggested bullet points for content
- List of features to highlight
- Screenshot suggestions

### Categories (`categories/`)

Categories organise the features/products:
1. `inspection-features.md` - Core inspection functionality
2. `management-tools.md` - Company and user management
3. `technical-features.md` - Developer-focused features
4. `compliance.md` - Standards and safety compliance

### News (`news/`)

Blog posts and announcements. Includes:
- `welcome-to-play-test.md` - Inaugural post (placeholder)
- `example-future-release.md` - Template for future releases (delete when not needed)

## Screenshot Recommendations

Each file includes specific screenshot suggestions. General guidelines:

**Must-have screenshots:**
1. Dashboard/main interface
2. Inspection form in progress
3. PDF report example
4. Equipment list/search
5. Company branding settings
6. Mobile view (responsive design)

**Nice-to-have screenshots:**
1. Dark/light theme comparison
2. Each of the seven assessment types
3. QR code badges
4. Test coverage report
5. GitHub repository
6. Standards documentation inline

**Technical screenshots:**
1. Docker setup
2. Code examples
3. Test output
4. Coverage reports

## Image Guidelines

- Use PNG for UI screenshots
- Use JPG for photos
- Include descriptive filenames: `dashboard-main-view.png` not `screenshot1.png`
- Consider adding captions in the markdown
- Mobile screenshots should show the responsive design

## Writing Tips

### Headlines & Subheadings

- Keep them short and descriptive
- Use sentence case (not Title Case)
- Make them scannable

### Body Copy

- Short paragraphs (2-4 sentences)
- Use bullet points for lists
- Bold key phrases sparingly
- Link to relevant pages and external resources

### Calls to Action

Good CTAs for this site:
- "Try the demo at play-test.co.uk"
- "View on GitHub"
- "Get started today"
- "Support the project"
- "Join the community"

### Open Source Messaging

When explaining the open source aspect:
- ✅ "Code owned by the commons"
- ✅ "Not tied to any manufacturer or industry body"
- ✅ "Independent and neutral"
- ✅ "Transparent and auditable"
- ❌ Avoid: "free" (confusing - free as in freedom, not free beer)
- ❌ Avoid: overly technical explanations of AGPLv3

### RPII Sponsorship

When mentioning RPII:
- Full name first: "Recreational and Play Inspectors Ireland (RPII)"
- Then use: "RPII"
- Emphasise: "sponsoring development of BS EN 14960:2019 features"
- Frame as: industry backing, not commercial interest

## Next Steps

1. Start with the homepage (`pages/index.md`) - it sets the tone
2. Write the about page (`pages/about.md`) - explains the vision
3. Fill in the product/feature pages - these are your main content
4. Complete the supporting pages (get started, roadmap, etc.)
5. Write the inaugural news post
6. Add screenshots as you go or in a final pass

## Questions?

Each file has detailed placeholder content explaining what should go there. If you're unsure about anything, refer to:
- The play-test GitHub repository: https://github.com/chobbledotcom/play-test
- The live demo: https://play-test.co.uk
- The README.md in the play-test repo
