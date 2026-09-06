# Design kit

Everything here is generated from the site's own tokens and fonts, so the mark, the colours, and
the type are the same ones a visitor sees at onedayforhumanity.org.

## What is here

```
design/
├─ brand/
│  ├─ mark.svg                    the mark, for paper or white grounds
│  ├─ mark-on-ink.svg             the mark, for dark grounds
│  ├─ mark-on-terracotta.svg      the mark, for the terracotta ground
│  ├─ templates.html              every PNG below, as an element on one page
│  ├─ avatar-1000.png             square avatar on paper (master; platforms get sized copies)
│  ├─ avatar-on-ink-1000.png      square avatar on ink
│  ├─ lockup.png                  mark and wordmark, on paper
│  ├─ lockup-on-ink.png           mark and wordmark, on ink
│  └─ social-1200x630.png         the link-preview card; also web/public/og.png
├─ linkedin/                      logo, cover, first-post image, and README.md with the text
├─ github/                        avatar, social preview, and README.md with the org profile text
├─ x/                             profile photo, header, and README.md with the bio and posts
└─ render.mjs                     regenerates every PNG from templates.html
```

## The mark

Five squares: five working days, and the first one is given. It is the same shape that sits in
the site header and in the favicon, and the same idea as the hero calendar, where one day in
twenty is the one for humanity. On paper the given day is terracotta and the rest are ink at
30%. On the terracotta ground the given day is cream. The SVGs carry the hex values; they mirror
`web/src/styles/tokens.css`, and if a token changes the SVGs are updated by hand and the PNGs by
running the renderer.

The wordmark is "One Day for Humanity" in Work Sans at weight 600 with letter-spacing of
minus one hundredth of an em, exactly as in the header. There is no separate logotype file with
text as vector paths; the PNG lockups are the wordmark, and `templates.html` is the source.

## Regenerating

From the repository root, with `web/node_modules` installed:

```bash
node design/render.mjs
```

It opens `brand/templates.html` in the Chrome already on the machine (set `CHROME` to the
executable if it is not at the default Windows path), screenshots each element at its exact
size, writes the PNGs into the folders above, and copies the 1200 by 630 card to
`web/public/og.png`. Change a size or a line of copy in the template, run it again, and every
platform gets the new version.

## Using the mark and the name

The files are CC BY 4.0, like every document in this repository. The name and the mark are held
as `GOVERNANCE.md` section 6 says: by the founder, through the GitHub organization, until the
movement chooses its non-profit home. Use them to talk about the movement. Members may use the
tier badge described in `PLEDGE.md` while their latest report is under 18 months old. Do not use
the mark in a way that suggests the movement endorses a product or an employer.

## Sizes

| Platform | File | Size | Platform guidance |
|---|---|---|---|
| LinkedIn page logo | `linkedin/logo-300.png` | 300 × 300 | LinkedIn recommends 300 × 300 and shows it in a rounded square |
| LinkedIn page cover | `linkedin/cover-1128x191.png` | 1128 × 191 | The logo overlaps the bottom-left corner, which the cover keeps empty |
| LinkedIn post image | `linkedin/post-1200x627.png` | 1200 × 627 | The size LinkedIn renders without cropping in the feed |
| GitHub organization avatar | `github/avatar-500.png` | 500 × 500 | GitHub asks for at least 500 × 500, PNG under 1 MB |
| GitHub social preview | `github/social-preview-1280x640.png` | 1280 × 640 | Repository settings, Social preview |
| X profile photo | `x/profile-400.png` | 400 × 400 | Shown as a circle; the mark sits in the middle 76% |
| X header | `x/header-1500x500.png` | 1500 × 500 | The profile photo overlaps the bottom-left, which the header keeps empty |
| Link previews everywhere | `web/public/og.png` | 1200 × 630 | Referenced by every page's `og:image` |
