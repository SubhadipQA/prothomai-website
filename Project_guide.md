# Project Guide

## Overview

Prothom Analytica India is a research-first company site built on Next.js App Router. The project combines three responsibilities in one codebase:

- company website and brand narrative
- ecosystem and product presentation for YPark and future tools
- a local MDX-powered insights publishing system

The project is intentionally lightweight. It does not depend on a headless CMS. Content editors can publish insight posts by adding `.mdx` files and images to the repository.

## Core Goals Of The Site

- explain what Prothom Analytica India does
- direct users toward YPark and contact flows
- publish insight content from structured local files
- keep the editing workflow simple for non-backend contributors

## Tech Choices And Why They Matter

### Next.js App Router

The app uses the `app/` directory and route-based page files. This keeps page structure predictable and makes it easy to add static and dynamic routes.

### Local MDX Instead Of CMS

Insight content is stored in `app/content/insights/`. This keeps publishing simple:

- write Markdown/MDX
- add frontmatter
- add an image
- commit and deploy

### Gray Matter

`gray-matter` extracts frontmatter metadata such as title, summary, category, dates, slug, and cover image.

### Reading Time

`reading-time` derives the estimated read time automatically from the article body.

### Resend

The contact form uses Resend from the server route in `app/api/contact/route.js`.

## High-Level Architecture

### Static pages

These are mostly presentational pages:

- `/`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/cookies`

### Dynamic insight pages

These are generated from MDX content:

- `/insights`
- `/insights/[slug]`
- `/insights/category/[slug]`

### Server route

- `/api/contact`

## Important Files And What They Control

### `app/layout.tsx`

Controls:

- global metadata
- fonts
- top-level HTML shell
- Open Graph and SEO defaults

### `app/page.js`

Controls:

- homepage assembly
- latest insight cards on the homepage

It uses `getLatestInsights(3)` from `lib/mdx.js` so the homepage always shows the latest 3 posts automatically.

### `lib/constants.js`

Controls reusable configuration:

- categories
- category colors and icons
- nav links
- footer links
- ecosystem products

If a new content category is introduced, this file should be updated so category pages and badges stay consistent.

### `lib/mdx.js`

This is the core content loader.

Responsibilities:

- find the insights content directory
- read `.mdx` files
- parse frontmatter
- normalize category labels/slugs
- support both preferred and legacy frontmatter keys
- calculate read time
- sort posts by featured state and date
- resolve single posts by slug
- provide slugs for static params generation

### `app/insights/page.js`

Builds the main insights listing page from `getAllInsights()`.

### `app/insights/[slug]/page.js`

Builds the individual insight article page. It:

- reads the post by slug
- renders frontmatter-derived metadata
- renders the MDX body
- shows related posts

### `app/insights/category/[slug]/page.js`

Builds category archive pages using the category slug and filtered post list.

### `app/api/contact/route.js`

Processes contact submissions. It:

- parses JSON body
- validates input
- sanitizes values
- sends an internal email
- sends an auto-reply

## Dynamic Blog System: Full Flow

### Step 1: Add content file

Create a file in:

```text
app/content/insights/your-post-name.mdx
```

### Step 2: Add frontmatter

Recommended frontmatter:

```yaml
---
title: "Your Blog Title"
summary: "Short summary for cards, previews, and metadata."
category: "research"
publishedAt: "May 2026"
cover: "/images/insights/your-cover.png"
author: "Prothom AI"
tags:
  - research
  - mobility
featured: false
---
```

### Step 3: Add image asset

Put the image in:

```text
public/images/insights/
```

Use a root-relative path in frontmatter:

```yaml
cover: "/images/insights/your-cover.png"
```

### Step 4: Write article body

After the frontmatter separator, write regular Markdown or MDX.

### Step 5: Automatic site updates

Once the file is valid:

- the homepage latest insights section can include it
- `/insights` will list it
- `/insights/[slug]` will render it
- `/insights/category/[slug]` will include it under the correct category

## Supported Frontmatter Keys

### Preferred keys

- `title`
- `summary`
- `category`
- `publishedAt`
- `cover`
- `author`
- `tags`
- `featured`
- `slug` optional

### Legacy keys still supported

- `description` maps to `summary`
- `date` maps to `publishedAt`
- `image` maps to `cover`

This compatibility exists so older content formats do not immediately break the site.

## Category System

Current supported categories:

- `parking-industry`
- `urban-mobility`
- `product`
- `company`
- `smart-cities`
- `research`

If someone wants to add a new category, they should update:

- `lib/constants.js`
- any page-level local category maps still present in route files

## Recommended Authoring Rules

### Filenames

- lowercase only
- use hyphens
- no spaces
- no special characters unless clearly safe in URLs

Example:

```text
future-of-urban-parking-in-india.mdx
```

### Slugs

If you do not provide `slug`, the filename becomes the slug.

If you do provide `slug`, make sure:

- it is unique
- it is stable
- it matches the intended public URL

### Summary

Keep it short and useful. It appears in:

- cards
- page metadata
- previews
- some route descriptions

### Cover image

Use consistent aspect ratios when possible. Large landscape images usually look best.

Recommended size:

- 1200 x 630
- or a similar wide ratio

## Contact Form Integration

### Endpoint

`POST /api/contact`

### Required environment variables

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_inbox@example.com
```

### Expected payload

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9999999999",
  "message": "I want to know more about YPark."
}
```

### Validation behavior

- name required
- email required and must be valid
- message required
- phone optional

## SEO And Metadata

Global SEO defaults live in `app/layout.tsx`.

The project already defines:

- metadata base URL
- default title and title template
- description
- keywords
- Open Graph defaults
- Twitter card defaults
- robots rules
- icons

Insight pages can extend metadata from the article itself.

## How A New Contributor Should Understand The Project

If someone joins the project, the quickest mental model is:

1. `app/` contains routes and page composition.
2. `components/sections/` contains reusable UI sections.
3. `lib/constants.js` contains shared site configuration.
4. `lib/mdx.js` powers the insight system.
5. `public/` contains static assets.
6. `app/content/insights/` contains blog content.

## Common Problems And How To Avoid Them

### Image not showing

Usually caused by one of these:

- wrong file path in frontmatter
- image not actually present in `public/images/insights/`
- using a relative file path instead of a root-relative path

Correct:

```yaml
cover: "/images/insights/example.png"
```

Wrong:

```yaml
cover: "images/example.png"
cover: "./example.png"
```

### Post not showing on the site

Usually caused by:

- invalid frontmatter formatting
- unsupported category value
- malformed `.mdx` file
- duplicate or conflicting slug assumptions

### Summary missing

If `summary` is empty and `description` is also missing, cards and metadata will feel incomplete.

## Suggested Content Workflow

For non-developers or content contributors:

1. Write the article in plain Markdown first.
2. Add the required frontmatter.
3. Move the file into `app/content/insights/` with a clean filename.
4. Add the cover image into `public/images/insights/`.
5. Run the app locally and check:
   - `/insights`
   - the article page
   - the category page
6. Build once before deploying.

## Quality Check Before Deployment

Run:

```bash
npm run lint
npm run build
```

Check:

- homepage still renders
- latest insights section shows valid posts
- article pages open correctly
- category pages show expected posts
- contact form environment variables are set in production

## Maintenance Notes

- Keep category definitions centralized and in sync.
- Prefer one frontmatter format for all new content.
- Use the detailed guide here as the onboarding document for new contributors.
- If the project later outgrows local MDX, `lib/mdx.js` is the main place that would be replaced by a CMS-backed loader.