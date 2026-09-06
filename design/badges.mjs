/**
 * Writes the four tier badges as SVG, for READMEs and websites, from the
 * site's own tokens and tiers. No Chrome and no npm dependency; Node 24, which
 * the site already needs, reads the TypeScript tiers file directly.
 *
 *   node design/badges.mjs        from the repository root
 *
 * The shape is the chip in the Join section: "One Day" on paper, the tier and
 * its fraction on terracotta, 22 pixels high with the chip radius. A README
 * viewer cannot load the site's font, so the text is set in Verdana, which
 * most machines have, with DejaVu Sans as the metric-compatible fallback, and
 * every text element carries its measured length so that a different font is
 * spaced to fit rather than spilling out of the chip.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tiers } from '../web/src/content/site.ts'

const here = dirname(fileURLToPath(import.meta.url))
const out = resolve(here, '../web/public/badges')

const tokens = readFileSync(resolve(here, '../web/src/styles/tokens.css'), 'utf8')
const token = (name) => {
  const m = new RegExp(`--odh-${name}:\\s*([^;]+);`).exec(tokens)
  if (!m) throw new Error(`token --odh-${name} not found in tokens.css`)
  return m[1].trim()
}
const paper = token('paper')
const ink = token('ink')
const accent = token('accent')
const surface = token('surface')
const radius = Number.parseFloat(token('radius-chip'))

/*
 * Advance widths of Verdana at 11 pixels, measured in Chrome. A character that
 * is not here gets the average lowercase width and a warning, which keeps a
 * renamed tier from failing the build; add it to the table the same way.
 */
const widths = {
  ' ': 3.87, '/': 5, '·': 4,
  0: 6.99, 1: 6.99, 2: 6.99, 3: 6.99, 4: 6.99, 5: 6.99, 6: 6.99, 7: 6.99, 8: 6.99, 9: 6.99,
  a: 6.61, b: 6.85, c: 5.73, d: 6.85, e: 6.55, f: 3.87, g: 6.85, h: 6.96, i: 3.02, j: 3.79,
  k: 6.51, l: 3.02, m: 10.7, n: 6.96, o: 6.68, p: 6.85, q: 6.85, r: 4.69, s: 5.73, t: 4.33,
  u: 6.96, v: 6.51, w: 9, x: 6.51, y: 6.51, z: 5.78,
  A: 7.52, B: 7.54, C: 7.68, D: 8.48, E: 6.96, F: 6.32, G: 8.53, H: 8.27, I: 4.63, J: 5,
  K: 7.62, L: 6.12, M: 9.27, N: 8.23, O: 8.66, P: 6.63, Q: 8.66, R: 7.65, S: 7.52, T: 6.78,
  U: 8.05, V: 7.52, W: 10.88, X: 7.54, Y: 6.77, Z: 7.54,
}
const textWidth = (text) =>
  [...text].reduce((sum, ch) => {
    if (!(ch in widths)) console.warn(`No width for "${ch}"; using an average.`)
    return sum + (widths[ch] ?? 6.6)
  }, 0)

const HEIGHT = 22
const PAD = 9
const BASELINE = 15
const FONT = 'Verdana,Geneva,DejaVu Sans,sans-serif'

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function badge(label, value) {
  const lw = textWidth(label)
  const vw = textWidth(value)
  const labelBox = Math.ceil(lw + PAD * 2)
  const valueBox = Math.ceil(vw + PAD * 2)
  const width = labelBox + valueBox
  const title = escapeXml(`${label} · ${value}`)
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${HEIGHT}" viewBox="0 0 ${width} ${HEIGHT}" role="img" aria-label="${title}">`,
    '  <!-- Written by design/badges.mjs from web/src/styles/tokens.css. Do not edit by hand. -->',
    `  <title>${title}</title>`,
    `  <clipPath id="chip"><rect width="${width}" height="${HEIGHT}" rx="${radius}"/></clipPath>`,
    '  <g clip-path="url(#chip)">',
    `    <rect width="${labelBox}" height="${HEIGHT}" fill="${paper}"/>`,
    `    <rect x="${labelBox}" width="${valueBox}" height="${HEIGHT}" fill="${accent}"/>`,
    '  </g>',
    `  <g font-family="${FONT}" font-size="11" text-anchor="middle">`,
    `    <text x="${labelBox / 2}" y="${BASELINE}" fill="${ink}" textLength="${lw.toFixed(1)}" lengthAdjust="spacing">${escapeXml(label)}</text>`,
    `    <text x="${labelBox + valueBox / 2}" y="${BASELINE}" fill="${surface}" textLength="${vw.toFixed(1)}" lengthAdjust="spacing">${escapeXml(value)}</text>`,
    '  </g>',
    '</svg>',
    '',
  ].join('\n')
}

mkdirSync(out, { recursive: true })
for (const tier of tiers) {
  const name = tier.name.toLowerCase()
  writeFileSync(resolve(out, `${name}.svg`), badge('One Day', `${tier.name} · ${tier.fraction}`))
  console.log(`web/public/badges/${name}.svg`)
}
