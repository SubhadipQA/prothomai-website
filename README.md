# Prothom Analytica India

Marketing site and insights platform for Prothom Analytica India, built with Next.js App Router. The site presents the company narrative, showcases the YPark ecosystem, publishes research-driven insight posts from MDX files, and handles contact form submissions through a server-side email route.

## What This Project Does

- Renders a branded multi-page company website using Next.js 16 and React 19.
- Publishes insight articles from local `.mdx` files without a CMS.
- Generates insight listing pages, category pages, and single article pages from frontmatter.
- Shows the latest 3 insight posts on the homepage automatically.
- Sends contact form submissions through Resend using a server route.

## Tech Stack

- Next.js 16.2.6
- React 19.2.6
- App Router
- MDX content parsing with `gray-matter`
- Read-time generation with `reading-time`
- Email sending with `resend`
- ESLint 9

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment variables

Create a `.env.local` file in the project root.

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_inbox@example.com
```

Notes:

- `RESEND_API_KEY` is required for the contact form API.
- `CONTACT_EMAIL` is optional. If omitted, the route falls back to the default recipient in the source code.

### 3. Start development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
	layout.tsx                 Global metadata, fonts, and layout shell
	page.js                    Homepage
	about/page.js              About page
	contact/page.js            Contact page
	privacy/page.js            Privacy page
	terms/page.js              Terms page
	cookies/page.js            Cookies page
	insights/page.js           Insight listing page
	insights/[slug]/page.js    Single insight page
	insights/category/[slug]/page.js   Category archive page
	api/contact/route.js       Contact email endpoint
	content/insights/*.mdx     Insight content files

components/sections/         Homepage and shared sections
lib/constants.js             Categories, nav links, footer links, ecosystem data
lib/mdx.js                   MDX parsing and insight data helpers
public/images/insights/      Blog cover images and inline post assets
```

## Dynamic Insights System

The insight/blog system is file-based.

- Add a new `.mdx` file to `app/content/insights/`
- Add any related images to `public/images/insights/`
- The homepage, insights listing, category pages, and article page update automatically

### Supported Frontmatter

The MDX loader supports both the current preferred keys and legacy aliases.

Preferred format:

```yaml
---
title: "Your article title"
summary: "Short summary shown on cards and metadata."
category: "research"
publishedAt: "May 2026"
cover: "/images/insights/example-cover.png"
author: "Prothom AI"
tags:
	- research
	- urban-mobility
featured: false
---
```

Also supported:

- `description` as an alternative to `summary`
- `date` as an alternative to `publishedAt`
- `image` as an alternative to `cover`
- `slug` as an optional custom route slug

### Category Values

Use one of these category slugs:

- `parking-industry`
- `urban-mobility`
- `product`
- `company`
- `smart-cities`
- `research`

### Writing Rules For New Posts

- Keep the filename lowercase and hyphen-separated.
- Put the cover image in `public/images/insights/`.
- Reference cover images with a root-relative path such as `/images/insights/file-name.png`.
- Keep `summary` short. It is used in cards, metadata, and previews.
- If you use a custom `slug`, make sure it is unique.
- Use valid Markdown or MDX body content after the closing `---`.

## Contact API

The project currently exposes one server route:

- `POST /api/contact`

Expected request body:

```json
{
	"name": "Your Name",
	"email": "you@example.com",
	"phone": "+91...",
	"message": "Your message"
}
```

Behavior:

- validates required fields
- validates email format
- sends an email to the configured inbox
- sends an auto-reply to the sender

## Build And Deploy

### Production build

```bash
npm run build
npm run start
```

### Deployment notes

- Make sure `RESEND_API_KEY` is configured in the deployment environment.
- Make sure `CONTACT_EMAIL` is configured if you want a custom inbox.
- All insight content is bundled from local MDX files during build/runtime, so the content folder must be present in the deployed app.

## Common Content Mistakes

- Wrong image path: use `/images/insights/...`, not relative paths.
- Wrong category label: prefer category slugs from the supported list.
- Missing summary: cards and previews will feel incomplete.
- Conflicting slug and filename: supported, but make sure the slug is intentional and unique.

## Additional Documentation

See `Project_guide.md` for a more detailed walkthrough of the architecture, content flow, dynamic behavior, and maintenance process.
