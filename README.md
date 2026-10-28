# ABNOX — personal site

A monochrome, neumorphic personal site for **ABNOX**: Linux, Rust, cybersecurity, robotics and the occasional terminal toy. Built with React, TypeScript and Vite, with four languages, two real themes, site-wide search, accessible dialogs and a print stylesheet.

No tracker, no analytics, no cookie banner pretending otherwise.

---

## Quick start

Requirements: **Node.js 20.19+ or 22.12+** and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

```bash
npm run typecheck   # TypeScript only
npm run build       # typecheck + production build into dist/
npm run preview     # serve the production build locally
```

The app is a single page. All navigation uses in-page anchors, so no router or
`404.html` fallback is needed on GitHub Pages.

---

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site
whenever `main` is pushed. It sets the Vite base path automatically:

- project repository → `/<repository-name>/`
- user/organization repository ending in `.github.io` → `/`

### First deployment

1. Create a repository on GitHub and push this project to its `main` branch.

   ```bash
   git init
   git add .
   git commit -m "Initial ABNOX site"
   git branch -M main
   git remote add origin https://github.com/<user>/<repository>.git
   git push -u origin main
   ```

2. Open the repository on GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.
   The site URL appears in the deployment environment and in **Settings → Pages**.

The repository name is used as the base path, so a repository named
`abnox-site` is served at `https://<user>.github.io/abnox-site/`.

### Custom domain

GitHub Pages with a custom domain serves from the root (`/`), not from
`/<repository>/`. Add a `CNAME` file containing the domain to `public/`, then
change the **Resolve base path** step in the workflow to write:

```bash
echo "BASE_PATH=/" >> "$GITHUB_ENV"
```

Commit and push again.

### Manual project-path build

To reproduce the GitHub Pages build locally:

```bash
BASE_PATH=/abnox-site/ npm run build
BASE_PATH=/abnox-site/ npm run preview
```

`BASE_PATH` is read by `vite.config.ts`; without it, the build targets `/`.
Inspect `dist/index.html` after a build to confirm that asset URLs start with
the expected base path.

`.nojekyll` is committed in `public/`, so Vite copies it into `dist/` and GitHub
Pages does not run Jekyll over the build.

---

## What is in the site

- Animated hero, About, skills/interests, project journey, projects, memes and contact.
- Five projects with honest statuses: `released`, `experimental`, `planned`
  (`active` remains supported for future work).
- Search across sections, projects, descriptions, tech, skills and interests
  (`Ctrl`/`Cmd` + `K`, or `/` when not typing in a field).
- Project filters for Linux, Rust, Robotics, Hardware and Tools.
- Project detail dialogs and copy buttons for repository URLs.
- Light and dark themes; the first visit follows the OS preference, then the
  choice is persisted. An inline script applies the theme before paint.
- English, French, Arabic (RTL) and Moroccan Darija (Latin script, LTR).
- Privacy banner with Accept, Reject, Settings and clear-preferences actions.
- Reduced-motion support, keyboard navigation, visible focus and a print stylesheet.

---

## Editing content

Everything repetitive lives in data files; components should not need edits for
normal content changes.

| What | Where |
| --- | --- |
| Name, handle, location, social URLs, storage keys | `src/config/site.ts` |
| Projects, statuses, tech, categories, verified links, artwork | `src/data/projects.ts` |
| Skills, interests and learning list | `src/data/skills.ts` |
| Meme images and dimensions | `src/data/memes.ts` |
| Header/footer navigation | `src/data/navigation.ts` |
| UI copy, all four languages | `src/i18n/locales/{en,fr,ar,darija}.ts` |
| Design tokens and themes | `src/styles/tokens.css` |
| Section copy | the locale files (`hero`, `about`, `skills`, …) |

### Project honesty rules

- Add a `repo` or `demo` URL only after checking that it resolves.
- Do not describe downloads, releases or features that do not exist.
- Use the status that matches reality:
  - `released` — usable and published
  - `active` — being worked on now
  - `experimental` — a working experiment, not a product
  - `planned` — an idea, not implemented
- Projects without a link intentionally show “no public source” instead of a
  made-up URL.

The current public links are the ABNOX GitHub profile, the `tuxmp`,
`abno-deck` and `ABNORA` repositories, and the `@abnox-n9l` YouTube channel.
Other projects deliberately have no link.

### Adding a language

1. Copy `src/i18n/locales/en.ts` to a new locale file and translate every value.
   `Messages = typeof en` keeps the shape honest — TypeScript will report
   missing or extra keys.
2. Add the code to `LocaleCode`, `localeMeta`, `localeOrder` and
   `messagesByLocale` in `src/i18n/index.tsx`.
3. Add the code, `lang` and `dir` to the small `locales` map in the inline
   script in `index.html`. This only prevents a direction/language flash before
   React loads.
4. Add the option to the language selector (it reads `localeOrder`).
5. Check long strings at 320 px and test RTL if the language is right-to-left.

Arabic uses the system Arabic font stack and switches the whole document to
`dir="rtl"`. Darija is written in Latin script (`ar-MA-Latn`) and stays LTR;
both are stored independently. Switching language never reloads the page.

---

## Artwork and attribution

The site’s visual identity is original: monochrome palette, neumorphic panels,
bespoke SVG project art and generated meme loops. Third-party pieces are kept
local and deliberately minimal:

- **ABNORA** screenshot and logo, the **ATOM** logo and the **Abno Deck** SVG
  come from ABNOX’s own project repositories. They are converted to grayscale
  by `scripts/prepare-media.py` to fit the palette.
- The three meme animations, favicon, app icons and social card are generated
  locally by `scripts/generate-assets.py` using Pillow.
- **Space Grotesk** is self-hosted through `@fontsource-variable/space-grotesk`
  (SIL Open Font License). No font request goes to Google.
- Arabic text uses locally installed system fonts (Noto Sans Arabic, Geeza Pro,
  Segoe UI, Tahoma); no Arabic webfont is downloaded.

The image scripts use local absolute paths because the original repositories
live next to this one during development. The generated files are committed, so
a normal build does **not** need Python or the source repositories. To
regenerate them, install Pillow, adjust the `SOURCES` paths in
`scripts/prepare-media.py`, then run:

```bash
python3 scripts/prepare-media.py
python3 scripts/generate-assets.py
```

---

## Privacy

There are no cookies, analytics, advertising pixels, remote fonts or third-party
scripts. The only persistence is `localStorage`:

| Key | Purpose |
| --- | --- |
| `abnox-theme` | `light` or `dark` |
| `abnox-locale` | selected language |
| `abnox-consent` | versioned consent choice and timestamp |

Accept and Reject store the same essential-only preference; the site has no
non-essential storage to enable. The choice only stops the banner from
reappearing and keeps the decision visible in **Privacy settings**. Clearing
preferences removes all three keys and reloads with system defaults.

No private address, school, phone number or email is published. `siteConfig.email`
is `null` on purpose, and the contact section does not render an email card.

---

## Accessibility and UX notes

- Semantic landmarks, one `h1`, ordered headings, skip link and visible focus.
- Native `<dialog>` elements for search, project details, privacy settings and
  the mobile menu, with Escape handling, focus management and scroll locking.
- Search results are keyboard-selectable; section results move focus to the
  target heading instead of only scrolling.
- Theme, language and consent controls are buttons or labelled selects, not
  hover-only affordances.
- Motion is restrained and disabled under `prefers-reduced-motion`; memes swap
  to static images and loops are limited rather than endless.
- Images have alt text or are marked decorative; memes keep captions when an
  image fails.
- Print CSS removes navigation, banners, dialogs and decoration, forces black on
  white, avoids breaking cards across pages and prints external URLs after links.

### Print check

Open the site, press **Ctrl/Cmd + P**, and preview. The result should contain
the text content, project list, timeline and contact details — no header,
search, cookie banner, floating buttons or meme animations.

---

## Project structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages build + deploy
├── index.html                     # pre-paint theme/locale scripts, metadata
├── public/                        # favicon, icons, manifest, media, .nojekyll
├── scripts/                       # local asset generation (not used by build)
├── src/
│   ├── components/
│   │   ├── consent/               # privacy banner + settings dialog
│   │   ├── layout/                # header, mobile menu, footer
│   │   ├── projects/              # cards, filters, detail dialog, artwork
│   │   ├── search/                # site-wide search dialog and index
│   │   ├── sections/              # hero, about, skills, journey, moments, contact
│   │   └── ui/                    # buttons, icons, copy, reveal, headings
│   ├── config/site.ts             # identity and storage keys
│   ├── consent/                   # consent state and persistence
│   ├── data/                      # projects, skills, memes, navigation
│   ├── hooks/                     # copy, scroll spy, reduced motion, scroll lock
│   ├── i18n/                      # four locale files + runtime
│   ├── styles/                    # tokens, base, layout, sections, dialogs, print
│   ├── theme/                     # theme provider
│   └── utils/                     # assets, navigation, search text helpers
├── vite.config.ts                 # BASE_PATH support
└── package.json
```

No router, state library, CSS framework, icon package or search dependency is
used. Runtime dependencies are React, React DOM and the self-hosted font.

---

## Verification checklist

Before publishing changes:

```bash
npm run build
BASE_PATH=/abnox-site/ npm run build
```

Then check in a browser:

- both themes, including first visit with no stored preference;
- all four languages, especially Arabic RTL and the mobile drawer;
- search with `Ctrl/Cmd + K`, `/`, Escape, no-results and keyboard selection;
- project filters, detail dialogs and copy success/failure feedback;
- privacy Accept/Reject/Settings/reopen/clear persistence;
- 320 px, tablet, laptop and wide desktop widths with no horizontal scroll;
- keyboard-only traversal and reduced-motion mode;
- print preview;
- all external links.

The production build has no server-side component. If a real multi-page route
is added later, GitHub Pages will need a `404.html` fallback or a router with a
matching base path.
