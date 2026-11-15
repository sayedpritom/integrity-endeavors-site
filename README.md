# Integrity Endeavors – website

A static, single-page website (HTML5, CSS3, no frameworks, no build step) converted from the
1600px-wide Illustrator design. Open `index.html` in a browser to test locally.

## Folder structure

```
website/
├── index.html          Page structure (hero, Our Core, The Endeavors, shield banner, footer)
├── css/style.css       All styling, organised in numbered sections with comments
├── js/script.js        Ends the loading screen and reveals sections on scroll (optional enhancement)
├── assets/
│   ├── fonts/          Outfit (400, 700) and EB Garamond Bold (stand-in for Sabon LT Pro)
│   ├── icons/          Core icons (SVG) + vertical divider + favicon.svg
│   ├── images/         Hero photo, shield banner (WebP), footer mountains (WebP)
│   └── logos/          Header/footer logos, the seven endeavor logos, logo divider
└── README.md
```

## How the layout works

* **Desktop (1100px and wider)** reproduces the 1600px artboard. Every value is written as
  `calc(N * var(--u))`, where `--u` is one design pixel (1px at a 1600px-wide page, and it scales
  smoothly down to 1100px). Above 1600px the content stays 1600px wide and centred.
* **Tablet (700–1099px)** and **mobile (under 700px)** use dedicated layouts: Our Core becomes a
  2 × 2 grid (then a single column), logo rows wrap or scale, and the footer stacks.
* To change a desktop measurement, edit the number inside `calc()`; to change a colour or font,
  edit the variables in section 2 (`:root`) of `css/style.css`.

## Motion and the loading screen

* A small script in the `<head>` of `index.html` switches motion on only when JavaScript is running
  and the visitor has not asked for reduced motion. Without it the page is simply shown as-is.
* The **loading screen** (the shield assembling itself) appears on the first page view of a browser
  session only. To preview it again, open the page in a new tab/private window. To remove it, delete
  the `has-loader` line in that head script.
* Any element with `class="reveal"` fades up when it scrolls into view; `style="--i:2"` sets its
  place in a staggered group. All animation styles are in sections 10–12 of `css/style.css`.

## Editing

* Text: edit `index.html`.
* Colours: `--color-*` variables at the top of `css/style.css`.
* Logos: replace the file in `assets/logos/` (keep the file name) or update the `<img>` in `index.html`.

## Deploying to Netlify

1. Go to <https://app.netlify.com/drop>.
2. Drag the whole `website` folder onto the page. `index.html` is at the folder root, so no
   settings or config files are needed.

## Known limitations / items to finish

1. **Sabon LT Pro Bold is not included** (commercial font). Headings use **EB Garamond Bold** as a
   stand-in, so the headline, "Our Core" and "The Endeavors" are close but not identical.
   To use Sabon: place a licensed web-font file at `assets/fonts/SabonLTPro-Bold.woff2` and
   un-comment the `"Sabon LT Pro"` `@font-face` block in `css/style.css` (section 1).
2. **Three logos contain live text, not outlines**, so browsers substitute a fallback font:
   `integrity-endeavors-footer.svg` (Sabon), `nature-capital.svg` (Gotham Medium) and
   `oversii.svg` (Raleway Bold). Re-export them from Illustrator with *Type → Create Outlines*
   and replace the files (same names). The footer logo's tagline also appears narrower in the
   supplied SVG than in the design.
3. **Bitmap-heavy artwork is served as WebP** for performance: `desert-parking.webp` (rebuilt at
   1224 × 846 from the bitmap inside the 1.1 MB `desert-parking.svg`), `tauer.webp`,
   `shield-banner.webp` and `footer-background.webp` (was a 1.4 MB PNG). To update one, export the
   new artwork to WebP with the same file name.
4. The small **globe icon** in the footer was not supplied; it is a simple inline SVG.
5. The **Nature Capital** logo link has an empty `href` in `index.html`; add its URL when available.
   The footer URL is plain text, as in the design.
6. The favicon is the shield from the header logo. No social-share image (`og:image`) was supplied,
   so none is included.
7. Icon positions in "Our Core" are slightly staggered (a few pixels) exactly as in the reference.
