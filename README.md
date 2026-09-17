# Pune Brew House — Specialty Coffee Shop Website & Hands-on SEO Sandbox

A realistic, premium local business website for **Pune Brew House**, an independent specialty coffee shop based in Koregaon Park, Pune, Maharashtra, India.

This project is built directly as a genuine client-grade business website to serve as a **hands-on SEO practice laboratory**. There are **no** SEO dashboards, **no** checklists, and **no** fake analytics widgets. The website itself is the optimization target.

---

## ☕ Live Site Structure & Clean URLs

| Route | Source Directory | Content / Primary Keyword Target | Structured Data Schema |
| :--- | :--- | :--- | :--- |
| `/` | `index.html` | Specialty coffee roastery & cafe in Pune, menu highlights, location | `CafeOrCoffeeShop`, `LocalBusiness`, `WebSite` |
| `/about/` | `about/index.html` | Western Ghats estate sourcing (Coorg, Chikkamagaluru), brand philosophy | `Organization`, `BreadcrumbList` |
| `/menu/` | `menu/index.html` | Espresso bar, manual pour-overs, sourdough food, INR pricing | `Menu`, `BreadcrumbList` |
| `/coffee/` | `coffee/index.html` | Single-origin beans, extraction methods (V60, Aeropress), bean retail | `ItemList`, `BreadcrumbList` |
| `/breakfast/` | `breakfast/index.html` | 36-hour sourdough fermentation ethos, artisanal tartines, bakery | `Menu`, `BreadcrumbList` |
| `/work-study/` | `work-study/index.html` | 150 Mbps Wi-Fi, ergonomic seating, study policies, student discount | `FAQPage`, `BreadcrumbList` |
| `/contact/` | `contact/index.html` | Koregaon Park NAP, hours, transit directions, inquiry form | `CafeOrCoffeeShop`, `LocalBusiness` |
| `/blog/` | `blog/index.html` | Coffee journal, brew recipes, bean selection guides | `Blog`, `BreadcrumbList` |
| `/404.html` | `404.html` | Custom 404 page ("This Cup Has Run Dry") with recovery navigation | `noindex, follow` directive |

### 📰 In-Depth Blog Articles

1. **[`/blog/best-coffee-drinks-in-pune/`](blog/best-coffee-drinks-in-pune/index.html)** — *Best Coffee Drinks to Try in Pune: A Local Specialty Guide*
2. **[`/blog/coffee-vs-cold-brew/`](blog/coffee-vs-cold-brew/index.html)** — *Coffee vs Cold Brew: Extraction, Acidity & Chemistry Differences*
3. **[`/blog/best-coffee-for-studying/`](blog/best-coffee-for-studying/index.html)** — *Best Coffee for Studying: How to Maximize Focus Without the Crash*
4. **[`/blog/how-to-choose-coffee-beans/`](blog/how-to-choose-coffee-beans/index.html)** — *How to Choose Coffee Beans: Origin, Roast & Processing Guide*
5. **[`/blog/specialty-coffee-guide-for-beginners/`](blog/specialty-coffee-guide-for-beginners/index.html)** — *Specialty Coffee Guide for Beginners: Demystifying Third-Wave Coffee*

---

## 🛠️ Built-in Technical SEO Foundation

The code is clean, semantic, and organized for manual inspection and modification:

- **Unique Titles & Meta Descriptions**: Distinct, natural metadata on every page.
- **Strict Heading Hierarchy**: Single semantic `<h1>` per page with descending `<h2>` and `<h3>` tags.
- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` elements.
- **Clean Internal Linking**: Contextual internal cross-linking with descriptive anchor text.
- **Image SEO**: Descriptive filenames, descriptive alt text, explicit dimensions, and `loading="lazy"`.
- **Canonical Tags**: `<link rel="canonical">` defined on all index pages.
- **XML Sitemap**: Standard `sitemap.xml` listing all 13 canonical routes.
- **Robots Directives**: Standard `robots.txt` referencing the sitemap.
- **Structured Data (JSON-LD)**: Rich Schema.org markup across all pages (`CafeOrCoffeeShop`, `LocalBusiness`, `Organization`, `Menu`, `ItemList`, `FAQPage`, `Article`, `BreadcrumbList`).
- **Consistent Local NAP**:
  - **Business**: Pune Brew House
  - **Address**: Lane 6, Koregaon Park, Pune, Maharashtra 411001, India
  - **Phone**: +91 20 2615 4890
  - **WhatsApp**: +91 98220 12345
  - **Opening Hours**: Monday – Sunday: 7:30 AM – 11:00 PM

---

## 🚀 Deployment to Vercel & Netlify

### Deploy on Vercel
1. Go to [Vercel](https://vercel.com) and click **Add New Project**.
2. Select this GitHub repository.
3. Keep default settings (Framework preset: `Other`, Root directory: `./`).
4. Click **Deploy**. Vercel uses `vercel.json` for clean URLs and caching headers.

### Deploy on Netlify
1. Go to [Netlify](https://netlify.com) and click **Add new site** → **Import an existing project**.
2. Select this GitHub repository.
3. Publish directory: `.` (auto-configured via `netlify.toml`).
4. Click **Deploy Pune Brew House**.

---

## 🧪 Hands-On SEO Practice Checklist (To Perform on Live Site)

1. **Update Domain**: Replace `https://punebrewhouse.com` in `sitemap.xml`, `robots.txt`, and canonical tags with your live deployment URL.
2. **Google Search Console**: Verify site ownership, submit `sitemap.xml`, and inspect URL coverage.
3. **Google Rich Results Test**: Verify `LocalBusiness`, `Article`, `FAQPage`, and `BreadcrumbList` schemas.
4. **Google Lighthouse**: Check Core Web Vitals (LCP, FID/INP, CLS) and SEO audit scores.
5. **Screaming Frog Crawl**: Run a technical site crawl to check response codes, internal link silos, and image alt attributes.
6. **On-Page Optimization**: Test title length, meta description CTR hooks, and keyword placements.

---

## 💻 Local Development

```bash
# Serve locally using npx
npx serve -l 3000 .

# Or using Python
python -m http.server 8080
```
