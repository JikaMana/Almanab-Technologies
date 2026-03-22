# Almanāb Technologies — Company Website

> Software architecture studio based in Nigeria, building scalable web applications, mobile apps, and SaaS platforms for ambitious founders worldwide.

**Live site:** [almanab.tech](https://www.almanab.tech)
**Instagram:** [@almanab.tech](https://www.instagram.com/almanab.tech)

---

## Tech Stack

| Layer         | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | React + Vite                        |
| Routing       | React Router DOM                    |
| Styling       | Tailwind CSS v4                     |
| UI Components | shadcn/ui                           |
| Animations    | Framer Motion                       |
| Data Fetching | TanStack Query                      |
| Icons         | Lucide React + React Icons          |
| Analytics     | Google Analytics 4 (`G-ZFE927JD19`) |

---

## Project Structure

```
almanab-tech/
├── public/
│   ├── almanab.svg          # Logo
│   ├── og-image.png         # Social share image (1200×630)
│   ├── robots.txt           # Crawler rules
│   └── sitemap.xml          # Pages sitemap
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── Navbar.tsx       # Site navigation
│   │   ├── HeroSection.tsx  # Home page hero
│   │   ├── ReasonsTab.tsx   # "Why Almanāb" tab content
│   │   └── WhyChooseUs.tsx  # "Why Almanāb" section wrapper
│   ├── hooks/
│   │   └── use-media-query.ts
│   ├── lib/
│   │   └── axios.ts         # Centralized Axios instance
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── ProjectCases.tsx
│   │   ├── AboutUs.tsx
│   │   └── Contact.tsx
│   ├── index.css            # Global styles + brand tokens
│   └── main.jsx             # App entry point
└── index.html               # Document head / SEO meta
```

---

## Brand

| Token          | Value     | Usage                      |
| -------------- | --------- | -------------------------- |
| `--gold`       | `#bf9b30` | Primary accent, CTAs, logo |
| `--dark`       | `#222222` | Brand dark / foreground    |
| `--white`      | `#ffffff` | Light surfaces             |
| `--light-gray` | `#f9f9f9` | Subtle backgrounds         |

Fonts: **Syne** (headings) · **JetBrains Mono** (labels, code, nav) · **DM Sans** (body)

The full token system lives in `src/index.css`. All shadcn/ui semantic tokens (`--primary`, `--accent`, `--ring`, etc.) are mapped to the brand palette — no component needs raw hex values.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/almanab-tech.git
cd almanab-tech

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy the contents of `dist/` to your hosting provider.

### Preview production build locally

```bash
npm run preview
```

---

## Environment

No `.env` file is required for the base site. If you add backend integrations (contact form, CMS, etc.), create a `.env` file at the root:

```env
VITE_API_BASE_URL=https://api.almanab.tech
```

All Vite env variables must be prefixed with `VITE_` to be accessible in the browser.

---

## SEO Checklist

- [x] Updated `<title>` and `<meta name="description">` for Almanāb Technologies
- [x] Canonical URL set to `https://www.almanab.tech/`
- [x] Open Graph tags with correct image, title, and description
- [x] Twitter/X card meta tags
- [x] JSON-LD structured data — `Organization` + `WebSite` schemas
- [x] `robots.txt` allowing full indexing
- [x] `sitemap.xml` listing all pages
- [x] Google Analytics 4 connected
- [ ] Submit sitemap in Google Search Console
- [ ] Set up 301 redirect from `codefloxx.com` → `almanab.tech`
- [ ] Create `og-image.png` (1200×630px) for social previews
- [ ] Add per-page `<title>` and `<meta description>` via react-helmet-async

---

## Pages & Routes

| Route            | Page            | Description                          |
| ---------------- | --------------- | ------------------------------------ |
| `/`              | Home            | Hero, Why Almanāb, services overview |
| `/services`      | Services        | Full services listing                |
| `/project-cases` | Project Cases   | Portfolio / case studies             |
| `/about-us`      | About Us        | Company story, team                  |
| `/contact`       | Contact & Quote | Enquiry form                         |

---

## Key Components

### `Navbar.tsx`

Fixed top navigation with a 2px gold top bar. Supports a desktop hover dropdown for the About section and a fully animated mobile menu. Closes on outside click.

### `HeroSection.tsx`

Full-screen dark hero with staggered Framer Motion reveals. Features a three-weight typographic headline, a vertical scrolling tech-stack marquee, and a metrics bar at the bottom. Requires `Syne` and `JetBrains Mono` fonts.

### `WhyChooseUs.tsx` + `ReasonsTab.tsx`

Tabbed section explaining the company's value proposition across three pillars: Scalability, Performance, and Innovation. Each tab shows a headline, body copy, and three supporting metrics. No images — the right column is purely data-driven.

### `index.css`

Full brand token system. Includes:

- Raw tokens: `--gold`, `--dark`, `--white`, `--light-gray`
- Mapped shadcn/ui tokens: `--primary`, `--accent`, `--ring`, `--border`, etc.
- Light and dark mode variants
- Sidebar tokens for dashboard layouts

---

## Rebranding Notes

This project was originally built under the name **Codefloxx**. It has been fully rebranded to **Almanāb Technologies**. If you find any remaining references to "Codefloxx" in the codebase, replace them with "Almanāb Technologies" or "Almanab Tech".

Key places to check:

- `index.html` — all meta tags (already updated)
- `src/` — any hardcoded strings, comments, or console logs
- Image alt text and aria labels
- Any analytics event names sent to GA4

---

## Deployment

The site is a standard Vite SPA. It can be deployed to:

- **Vercel** — connect the GitHub repo, zero config needed
- **Netlify** — drag and drop the `dist/` folder or connect via Git
- **Cloudflare Pages** — set build command to `npm run build`, output to `dist`

For any host, add a redirect rule so all routes fall back to `index.html` (required for client-side routing):

**Netlify (`public/_redirects`):**

```
/*  /index.html  200
```

**Vercel (`vercel.json`):**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## License

Private — © 2026 Almanāb Technologies. All rights reserved.
