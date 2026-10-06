# Portfolio — Fehizoro Rajonhson

Personal portfolio of Fehizoro Rajonhson — backend-leaning full-stack developer, Mauritius.
Live at [fehizoro-dev.netlify.app](https://fehizoro-dev.netlify.app).

Built with [Astro](https://astro.build) and Tailwind CSS. Statically generated, no client-side
framework, one small script each for the theme toggle and the mobile menu.

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check, then build to dist/
npm run preview  # serve the production build
```

## Editing the content

Everything shown on the site lives in [`src/config/cv.json`](src/config/cv.json) — headline,
case studies, stack, experience, education, contact details. The components read from it, so
content changes never require touching markup.

| Key | Renders in |
|---|---|
| `basic` | hero, contact, footer, page metadata |
| `work` | the case-study cards |
| `howIWork` | the approach section |
| `stack` | the stack section, grouped by depth of experience |
| `experience`, `education`, `languages` | the background section |
| `menuItems`, `socialLinks` | header, footer |

The CV served by the hero button lives in `public/cv/` and is referenced by
`basic.cv_file_name`. Keep the two in sync — a mismatch turns the main call to action into a 404.

## Theming

Colours are CSS custom properties in [`src/styles/theme.css`](src/styles/theme.css), one block
per theme, exposed to Tailwind as named colours in
[`tailwind.config.mjs`](tailwind.config.mjs). `accent` is the display amber; `accent-text` is a
darkened variant used wherever amber carries text, so it stays above the WCAG AA contrast
threshold on the light canvas.

## Deployment

Static output, deployed on Netlify from `main`. The canonical domain is set in one place —
`site` in [`astro.config.mjs`](astro.config.mjs) — and canonical URLs, Open Graph image URLs
and the sitemap all derive from it. Switching to a custom domain means editing that line and
the sitemap URL in [`public/robots.txt`](public/robots.txt), then pointing DNS at Netlify.
