---
title: Management Tools
featured: true
meta_title: Admin / management Tools - Play-Test
meta_description: Server and user management features
header_text: Management Tools
subtitle: Multi-company support with role-based access
---

**Play-Test is designed to be easy to manage, for administrators of inspection bodies or for team leaders who want to run a private instance for their staff.**

To assign admins once you've got the system running you just need to set the `ADMIN_EMAILS_PATTERN` environment variable to a regular expression which matches your admin emails - eg `^admin@example\.com$`, and then when you sign up with that address, you'll be an admin.

**If that last sentence didn't make sense to you, you should probably get someone to administrate a Play-Test instance for you. [Chobble](https://chobble.com) can do this for £200 per month, but so can any competent tech company.**

Admin users have some extra permissions beyond normal users, like being able to **impersonate a user** to diagnose a problem from their point of view, or **reset their password** if they're locked out.

Admin users can **view all units** or **all uploaded files** to get a better overview of their system, or **download a database backup** for their own peace of mind.

Of course, if you don't want to be an admin or manage a team, or learn anything technical, but you still want to use Play-Test, you can just sign up to Chobble's public instance at [play-test.co.uk/register](https://play-test.co.uk/register), or contact the RPII to use their instance.
