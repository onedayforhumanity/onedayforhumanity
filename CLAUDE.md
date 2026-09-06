# CLAUDE.md

Guidance for Claude Code, and for anyone else, working in this repository.

## Rules from the founder

These are standing instructions. They apply to every session and override defaults.

1. **Do not commit, push, open pull requests, or create branches on GitHub unless the current
   message explicitly asks for it.** Leave changes in the working tree and say so. "Do the rest"
   in an earlier message does not carry over.
2. **Do not create, change, or delete anything in Azure unless the current message explicitly
   asks for it.** That includes resources, deployments, secrets, GitHub secrets holding Azure
   tokens, and `az deployment ... create`. Read-only commands (`what-if`, `show`, `list`) are
   fine.
3. Verify locally instead: typecheck, lint, build, and the headless Chrome checks described
   under Verification.
4. **This repository is public.** Never write a subscription id, tenant id, token, API key,
   email address, local file path, or any personal data into a file here, including this one.
   Azure identifiers live in the founder's shell, not in the repository; the resource names
   below are enough to run every command once `az account set` has been done by hand.

## What this is

**One Day for Humanity** is a commitment by people and organizations to give a fixed, recurring
share of their working time to humanity's hardest problems, and to give the results away. It is
a movement, not a company, and it is pre-launch.

This repository holds three things:

1. **The governing documents** at the root: `MANIFESTO.md` (the short text people sign),
   `PRINCIPLES.md` (the rules behind it), `CHANGELOG.md`, `PLEDGE.md`, `GOVERNANCE.md`,
   `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `DESIGN_NOTES.md`, `MISSION_TEMPLATE.md`,
   `SIGNATORIES.md`, `SECURITY.md`, `README.md`, and the three files a mission copies from
   `templates/`. These are the movement's canon and the source of truth for anything the site
   says.
2. **The website** in `web/`: a landing page, a manifesto page, and a principles page, plus
   the infrastructure to host it.
3. **Research** in `research/`: the longer notes behind the decisions the founder has made, and
   the questions still open.

Joining the movement is a pull request against `SIGNATORIES.md`. The site therefore needs no
backend, no database, and no forms, and it stores nothing about a visitor. Google Analytics
runs without cookies or identifiers; see Analytics below.

`DESIGN_NOTES.md` is not a visual design document. It is the sourced rationale behind the
manifesto's rules. The visual system comes from Claude Design (see below), not from the repo.

## Writing anything

Load the `copywrite` skill (`.claude/skills/copywrite/SKILL.md`) before writing or editing
prose of any kind: markdown, site copy, UI labels, code comments, commit messages, research
notes. The short version: no em dashes, no exclamation marks, no emoji, sentence case, the
interpunct `·` as separator, and a voice that sounds like a careful person rather than a model.
The skill has the full list of patterns to cut and a grep checklist. Run the checklist on every
file you touch.

## Layout

```
onedayforhumanity/
├─ MANIFESTO.md, PRINCIPLES.md, CHANGELOG.md   the signable text, its rules, every version
├─ *.md                       the rest of the canon; read before changing site copy
├─ CLAUDE.md                  this file
├─ SECURITY.md                how to report a vulnerability
├─ .claude/skills/copywrite/  the voice rules, as a skill
├─ .github/ISSUE_TEMPLATE/    the sign and mission-nomination forms
├─ .github/dependabot.yml     weekly npm and actions updates, grouped
├─ research/                  research notes (missions, manifesto)
├─ templates/                 DAYS.md, RETRO.md, DATA_POLICY.md, copied into each mission
├─ design/                    brand kit: SVG marks, templates.html, render.mjs, LinkedIn, GitHub, X
├─ web/                       the site (Vite, React, TypeScript)
│  ├─ index.html              landing page document head
│  ├─ manifesto/index.html    manifesto page document head
│  ├─ principles/index.html   principles page document head
│  ├─ public/
│  │  ├─ favicon.svg          the five-dot mark, one square given
│  │  └─ staticwebapp.config.json   SWA routes and security headers (copied into dist/)
│  ├─ vite.config.ts          three entries, plus the markdownHtml() plugin
│  └─ src/
│     ├─ main.tsx             landing entry
│     ├─ manifesto.tsx        manifesto entry
│     ├─ principles.tsx       principles entry
│     ├─ pages/               LandingPage; DocumentPage and the two documents built on it
│     ├─ components/          one component and CSS module per landing section
│     ├─ content/site.ts      landing copy and derived data, typed
│     ├─ lib/cx.ts            class-name joiner
│     ├─ lib/useHashTarget.ts scrolls to the fragment once React has drawn the page
│     └─ styles/
│        ├─ tokens.css        design tokens; do not hand-edit (see below)
│        └─ global.css        font imports, reset, base, focus ring, skip link, print
├─ infra/
│  ├─ main.bicep              the Free-tier Static Web App (resource-group scope)
│  └─ main.bicepparam         concrete parameter values
└─ .github/workflows/
   └─ deploy.yml              build, lint, typecheck, bicep validate, deploy
```

## Commands

All app commands run from `web/`:

```bash
cd web
npm install        # first time
npm run dev        # dev server on http://localhost:5173, /manifesto/, /principles/
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsc -b && vite build  ->  web/dist
npm run preview    # serve the built output
```

From the repository root, `node design/render.mjs` regenerates every PNG in `design/` and
`web/public/og.png` from `design/brand/templates.html`, using the Chrome on the machine (set
`CHROME` if it is not at the default Windows path). Run it after changing a token or the
template.

CI gates on `typecheck`, `lint`, and `build`. Run all three before handing work back.

There is no test runner. The deliverable is three static pages with no branching logic worth
asserting on; the type checker and the build cover the failure modes that actually occur. If
real logic appears (a form, a router, date handling), add Vitest then.

## The design is upstream

The landing page is a port of a Claude Design artboard. That file, not this repo, is the source
of truth for how it looks.

| | |
|---|---|
| Project | `b8ae3cd1-a073-48dc-9b8e-9af556d4d4ad` |
| File | `Landing.dc.html` |
| Brief | `uploads/DESIGN_BRIEF.md` in the same project |
| Also present | `Explorations.dc.html` (not ported) |

To re-sync after the design changes:

1. Run `/design-login`. The `DesignSync` tool refuses to read anything until you do.
2. `DesignSync get_file` on `Landing.dc.html`.
3. Re-extract the `:root` custom properties into `web/src/styles/tokens.css`.
4. Diff the section markup against `web/src/components/`.

**Never hand-edit `web/src/styles/tokens.css`.** Change the value in Claude Design and
re-import, or the two drift apart with nothing to catch it. Nothing outside that file may
hardcode a colour. If you find yourself typing a hex anywhere else, the token is missing.

### The document pages are not from Claude Design

There is no manifesto or principles artboard in the project. `web/src/pages/DocumentPage.tsx`
was designed here, in the landing page's tokens and type, following the brief's line
"long-form, readable, signable (PR link)". `ManifestoPage.tsx` and `PrinciplesPage.tsx` are
that component with a document and an end panel each. If an artboard for either appears in
Claude Design later, port it and replace the page.

The pages render `MANIFESTO.md` and `PRINCIPLES.md` from the repository root. `markdownHtml()`
in `vite.config.ts` converts them at build time. `?html` gives the whole document: GitHub-style
ids on headings so every section has a permalink, relative `.md` links pointed at the repository
on GitHub, and everything before the first `h2` wrapped in a `<header>` so the title block can
be styled apart from the body. `?sections` splits a document at each `h2` and returns the
pieces, which is how the landing page's "We commit" grid shows the ten principles without a
second copy of them. `?signatories` reads the three tables in `SIGNATORIES.md`, drops the two
template rows, and feeds the list on the manifesto page. The markdown parser never ships to the browser, and no page can drift from
its document. Editing the markdown is editing the site. Raw HTML in a document is rendered as
the text that was typed, and only relative, `http`, `https`, and `mailto` links become anchors;
any other destination leaves its label as plain text.

### Conventions

- **CSS Modules, not Tailwind.** The design file is hand-written CSS. Utility classes would make
  the port unverifiable against its source.
- **Landing copy lives in `src/content/site.ts`**, not inline in JSX, except the ten principle
  cards, which come from `PRINCIPLES.md?sections`. Manifesto and principles copy lives in the
  markdown. Nothing is duplicated between them by hand.
- **Fonts are self-hosted** via `@fontsource-variable/work-sans` and
  `@fontsource-variable/jetbrains-mono`. The design linked Google Fonts; self-hosting means the
  only third-party requests a page makes are the analytics ones described below, and the CSP
  names only Google's analytics hosts. All unicode
  subsets are kept. `unicode-range` means a Latin page never downloads the Cyrillic or Greek
  files, and a movement that funds translation work should not have them stripped out.
- **No inline `style` attributes.** The deployed CSP omits `'unsafe-inline'`, and `style`
  attributes are governed by `style-src`. The tier grain diagrams get their column count and
  gap from modifier classes in `Cadences.module.css`, not from props.
- **Three documents, no client router.** `/`, `/manifesto/`, and `/principles/` are separate
  Vite entries. `staticwebapp.config.json` rewrites `/manifesto` and `/principles` to their
  documents ahead of the SPA fallback. **Exactly one route rule per document:** SWA normalizes
  trailing slashes, so a second rule for `/manifesto/` is a duplicate and fails validation,
  which is how the first deployment of the manifesto page broke. Without the rules at all, SWA
  would serve the landing page for those paths and nothing would look wrong.

### Where the port deviates from the design, and why

Everything here is deliberate. Do not "fix" one without reading the reason.

1. **Links.** The design points at `https://github.com/onedayforhumanity` and at a
   `Manifesto.dc.html` page. The first is the organization's namesake repository,
   `onedayforhumanity/onedayforhumanity`, where the canon lives and where people sign; the
   second is `/manifesto/` on this site. Every GitHub URL on the site comes from the `links`
   object at the top of `src/content/site.ts`.
2. **Focus ring and skip link** were added. The design specifies no focus treatment, which
   leaves keyboard-only visitors with nothing. Both are additive and never alter the resting
   state.
3. **Semantic elements.** The design builds headings and lists out of `div`s and `span`s. The
   port uses `h1`, `h2`, `h3`, `ol`, `li`, `nav`, `main`, and `footer`, with default margins
   zeroed so the rendering is unchanged. Purely decorative diagrams (the logo dots, the hero
   calendar, the tier grains) are `aria-hidden`; adjacent text already carries their meaning.
4. **Contrast.** Seven text pairs in the design fall below WCAG AA for normal text. They are
   left exactly as designed. This is flagged, not changed, because it is a brand decision:

   | Element | Ratio | |
   |---|---|---|
   | Hero lede, 16 to 18px | 3.96 | cream at 88% on terracotta |
   | Hero eyebrow, 12px mono | 3.55 | cream at 80% on terracotta |
   | Hero calendar caption and cells, 12 to 13px mono | 3.31 | cream at 75% on terracotta |
   | Mission card label (founding), 12px mono | 3.55 | cream at 80% on terracotta |
   | Mission card body (founding), 15px | 3.45 | cream at 78% on terracotta |
   | Cadence organization note, 14px | 3.78 | ink at 55% on paper |
   | Footer body, 13px | 4.42 | ink at 60% on paper |

   Everything else passes; the hero headline and the terracotta-on-white marks sit between 4.6
   and 4.9. Raising the four terracotta-ground opacities to about 0.95 would clear AA without
   changing the palette, if the movement decides accessibility outranks the design's softness.
5. **Content decisions the founder made on 6 September 2026**, after the research in
   `research/`. The Missions section shows one proposed mission and two cards about how missions
   are chosen and nominated, instead of the design's one founding and three candidate cards; the
   design's `showCandidateMissions` prop has no equivalent any more. The "We commit" section
   shows the ten principles instead of the design's six commitments. Mission cards may carry one
   link. The footer gained a Principles link and, on 6 September 2026, one sentence stating
   that the site sets no cookies. All of it uses the design's card grammar and tokens; none of
   it is in the artboard.
6. **The hero's id is `hero`, not the design's `top`.** The logo links to `/#top` as in the
   design; with no element of that id, browsers scroll to the very top of the document, header
   included, instead of to the hero and past the menu.
7. **Fragment links glide, and every band offers a way back**, added on 6 September 2026. The
   design draws a menu but says nothing about what a click does. `scroll-behavior: smooth` on
   the root in `global.css` makes the menu, the hero button and the new links animate instead
   of jumping, and `Section` ends every band below the hero with a quiet mono link to `#top`,
   so the menu is one click from the end of any section. Both are additive: the reduced-motion
   block already in `global.css` turns the animation off for anyone who asks, and the link
   carries `odh-chrome`, so it does not print. The link's target is `#top` for the reason in
   item 6.
8. **`useHashTarget` restores what a fragment in the address bar should do.** React draws every
   page, so when the browser handles the fragment of a fresh navigation the target does not
   exist yet and nothing moves. Following Cadences in the menu from `/manifesto/`, or opening a
   link to a heading inside a document, used to land at the top of the page. The hook scrolls
   once the page has rendered, without animation, which is what the browser would have done on
   its own. It leaves an already-scrolled page alone, so a reload part-way down still restores
   its position.

### Not in the design

The brief asks for these. Only the landing page was drawn, so the port does not invent them.

- A **logo or wordmark asset** was not drawn. `design/brand/` now holds the mark as SVG and the
  lockups and avatars as PNG, generated from the site's tokens and fonts, not from Claude Design.
- **Tier badge assets** for READMEs. The badges render in HTML and CSS inside the Join section.
- A **social image** (brief deliverable 5) was not drawn. `web/public/og.png` is the 1200 by 630
  card from `design/brand/templates.html`, and every document head references it with `og:url`
  and a canonical link on `onedayforhumanity.org`. Regenerate it with `node design/render.mjs`.
- **Dark mode.** The brief asks for it; the landing artboard is light-only, so all pages
  declare `color-scheme: light`. Adding it means adding tokens in Claude Design first.

## Azure

| | |
|---|---|
| Subscription | Set with `az account set` before any command; not recorded here |
| Resource group | `rg-onedayforhumanity-prod` (created by hand, not managed by Bicep) |
| Static Web App | `swa-onedayforhumanity-prod` |
| Default hostname | `agreeable-moss-02151e003.6.azurestaticapps.net` |
| Custom domain | `onedayforhumanity.org`, apex only; `www` is not configured and does not resolve |
| Region | `westeurope` |
| SKU | Free |

`Microsoft.Web/staticSites` is offered in Central US, East US 2, West US 2, West Europe, and
East Asia only; `infra/main.bicep` restricts `location` to those five. The region decides where
deployment metadata lives, not where the site is served from. The CDN in front of it is global.

Free-tier limits that constrain the site: 100 GB bandwidth a month, 250 MB app size (the
current build is under 1 MB), 2 custom domains, 3 staging environments, no SLA, no
enterprise-grade CDN, no private endpoints.

`infra/main.bicep` deliberately omits `repositoryUrl` and `repositoryToken` and sets
`provider: 'Custom'`. Setting them makes Azure generate and commit its own workflow, which
would then race `.github/workflows/deploy.yml`.

### Provisioning, for the record

This has been done once. Repeating it requires an explicit request (see the rules at the top).

```bash
az account set --subscription <the founder's subscription>
az group create --name rg-onedayforhumanity-prod --location westeurope \
  --tags project="One Day for Humanity" environment=prod managedBy=manual

az bicep build --file infra/main.bicep --stdout > /dev/null       # validate
az deployment group what-if -g rg-onedayforhumanity-prod -f infra/main.bicep -p infra/main.bicepparam
az deployment group create  -g rg-onedayforhumanity-prod -f infra/main.bicep -p infra/main.bicepparam

az staticwebapp secrets list -n swa-onedayforhumanity-prod -g rg-onedayforhumanity-prod \
  --query properties.apiKey -o tsv | gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN \
  --repo onedayforhumanity/onedayforhumanity
```

To rotate the token: `az staticwebapp secrets reset-api-key` with the same name and group, then
the `gh secret set` line again. The repository is `onedayforhumanity/onedayforhumanity` in the
`onedayforhumanity` GitHub organization; the Static Web App has no link to it on purpose, so a
repository move never touches Azure. The API key is intentionally not a Bicep output, because outputs
are retained in deployment history.

## Analytics

Google Analytics 4, measurement id `G-FBW9K9TNSK`, loaded by `web/src/analytics.ts` from each
page entry. It runs in Consent Mode with every storage type denied before `gtag.js` loads, so
it sets no cookies and stores no identifier, and no consent banner is shown. The cost, chosen
by the founder on 6 September 2026 over a full count: Google only surfaces cookieless visits
through behavioral modeling, which needs roughly 1,000 events a day for a week; below that,
the visits are sent but not reported. Ad blockers remove a further share regardless.

The module is a no-op in development and for visitors whose browser sends Global Privacy
Control or Do Not Track. The footer says so in one sentence. There is no inline script; the
init lives in the bundle, which is why the CSP still has no `'unsafe-inline'`. The CSP allows
`www.googletagmanager.com` for scripts and Google's analytics hosts for connections and
images, and nothing else off-origin.

To switch to a full count: grant `analytics_storage` after a consent banner, and add the
banner as a component in the Join panel's grammar. Nothing else changes. The measurement id is
public by nature (it ships in the page) and is fine in this repository.

## CI

`.github/workflows/deploy.yml` runs on pushes to `main` and on pull requests, filtered to
`web/**`, `infra/**`, the workflow itself, and the three documents the site is built from:
`MANIFESTO.md`, `PRINCIPLES.md`, `SIGNATORIES.md`. A merged signing PR deploys the new list by
itself.

| Job | Runs for | Does |
|---|---|---|
| `build` | everything, forks included | `npm ci`, typecheck, lint, build, upload `web/dist` |
| `bicep` | everything, forks included | `az bicep build`, which needs no Azure credentials |
| `deploy` | pushes to `main`, manual runs, and PRs from this repo other than Dependabot's | downloads the artifact, uploads to SWA |
| `close_preview` | PRs from this repo, on close | releases the staging environment |

The deploy jobs are guarded on `github.event.pull_request.head.repo.full_name ==
github.repository` because GitHub does not expose secrets to workflows triggered from a fork.
This repository expects contributions from people who are not members, so an unguarded deploy
job would fail on every external pull request. The `build` and `bicep` jobs are deliberately
not guarded, so fork PRs still get full validation; they just do not get a preview URL.

The site is built in CI rather than by Oryx inside the deploy action, so a type error fails
the pull request instead of the deployment.

Every action is pinned to a commit SHA, with its version in a trailing comment.
`.github/dependabot.yml` keeps those pins and the npm dependencies current, weekly, with minor
and patch updates grouped into one pull request per ecosystem. Dependabot's pull requests get
the build and bicep jobs but no deploy, because GitHub runs them without the deploy token. A
newer push to a pull request cancels that pull request's build in progress; a push to `main`
never cancels anything, so a production deploy always finishes. The workflow also has a
`workflow_dispatch` trigger, so a production deploy can be started by hand from the Actions tab
without a code change. GitHub skips the push run when it cannot list the changed files, which
happens after a force push; the manual trigger covers that case.

## Verification

For anything that touches `web/`, after the three commands above:

1. `npx vite preview --port 4179 --strictPort`, then drive the installed Chrome headless over
   CDP (`--remote-debugging-port`) to load `/`, `/manifesto/`, and `/principles/` at 1440px and
   390px. Check:
   zero console errors, no requests to any origin other than the preview server and Google's
   analytics hosts, `document.cookie` empty after load, zero elements with a `style` attribute, `scrollWidth` equal to the viewport width, one `h1` per
   page, and `document.fonts` reporting both variable fonts loaded. Screenshot both widths and
   look at them.
2. Sample pixels from the screenshot against the tokens: page ground `#fbf8f3`, terracotta
   `#b8532f`, ink `#1f1b17`.
3. `grep` for em dashes, en dashes, and exclamation marks in every file you touched.

The Chrome extension for Claude in Chrome is often not connected in this environment; the CDP
route above needs nothing but the Chrome that is already installed.

## Licensing and process

- Code: **Apache-2.0**. Documents, including this site: **CC BY 4.0**. No relicensing to a
  non-open license, ever. `GOVERNANCE.md` says that clause cannot be amended.
- Contributions are under the **DCO, not a CLA**. Sign commits with `git commit -s`.
- Keep changes small and explain who a change helps, not just what it does (`CONTRIBUTING.md`).

## Known gaps

- `conduct@` appears in `GOVERNANCE.md`, `CODE_OF_CONDUCT.md`, and `CONTRIBUTING.md`, each
  marked "(address set at launch)". No domain is registered in-repo. The brief names
  `onedayforhumanity.org` as the intended primary domain.
- There is no `LICENSE` file; licensing is described in prose only.
- `SECURITY.md` routes reports through GitHub's private vulnerability reporting, because no
  mailbox exists yet. It is enabled on the repository; if it is ever turned off, the file points
  nowhere.
- No fixed "shared global day" exists (`DESIGN_NOTES.md`, open question 4), so nothing on the
  site can count down to one.
- `research/` holds the research behind the founding-mission structure and the 0.2 manifesto.
  The founder adopted its recommendations on 6 September 2026; `CHANGELOG.md` lists what
  changed. Still open from `research/manifesto.md` section 4(b): a PDF per version built in CI,
  translations, and versioned URLs.
