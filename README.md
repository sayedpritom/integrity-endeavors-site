# Integrity Endeavors – website

A static, single-page website (HTML5, CSS3, no frameworks, no build step) converted from the
1600px-wide Illustrator design. Open `index.html` in a browser to test locally.

## Folder structure

```
website/
├── index.html          Page structure (hero, Our Core, The Endeavors, shield banner, footer)
├── css/style.css       All styling, organised in numbered sections with comments
├── js/script.js        Placeholder – the design has no interactive elements
├── assets/
│   ├── fonts/          Outfit (400, 700) and EB Garamond Bold (stand-in for Sabon LT Pro)
│   ├── icons/          Core icons (SVG) + vertical divider
│   ├── images/         Hero photo, shield banner (WebP), footer mountains
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

## Editing

* Text: edit `index.html`.
* Colours: `--color-*` variables at the top of `css/style.css`.
* Logos: replace the file in `assets/logos/` (keep the file name) or update the `<img>` in `index.html`.

## Deploying to Netlify

1. Go to[ <https://app.netlify.com/drop>.](https://candid-rolypoly-d77798.netlify.app)
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
3. **Three heavy SVGs were converted to WebP** for performance: `desert-parking.webp`
   (was a 12 MB SVG with 16 embedded bitmaps), `tauer.webp` and `shield-banner.webp`.
   They are rendered at high resolution so they look identical.
4. The small **globe icon** in the footer was not supplied; it is a simple inline SVG.
5. The design shows **no links**, so logos and the footer URL are not clickable. Wrap an `<img>` or
   the URL in an `<a href="…">` if you want them to link somewhere.
6. No favicon or social-share image was supplied, so none is included.
7. Icon positions in "Our Core" are slightly staggered (a few pixels) exactly as in the reference.
