/**
 * Renders the brand kit to PNG with the Chrome already on this machine, over
 * the DevTools protocol. No npm dependency.
 *
 *   node design/render.mjs                       from the repository root
 *   CHROME=/path/to/chrome node design/render.mjs   if Chrome is not at the default Windows path
 *
 * Every asset is an element in brand/templates.html with an id; the list
 * below maps ids to output files. Sizes and colours live in the template,
 * which imports the site's own token file and font files.
 */
import { spawn } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const PORT = 9241
const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe'

const assets = [
  ['avatar-1000', 'brand/avatar-1000.png'],
  ['avatar-ink-1000', 'brand/avatar-on-ink-1000.png'],
  ['lockup', 'brand/lockup.png'],
  ['lockup-ink', 'brand/lockup-on-ink.png'],
  ['social-1200', 'brand/social-1200x630.png'],
  ['avatar-300', 'linkedin/logo-300.png'],
  ['linkedin-cover', 'linkedin/cover-1128x191.png'],
  ['linkedin-post', 'linkedin/post-1200x627.png'],
  ['avatar-500', 'github/avatar-500.png'],
  ['social-1280', 'github/social-preview-1280x640.png'],
  ['avatar-400', 'x/profile-400.png'],
  ['x-header', 'x/header-1500x500.png'],
]

const profile = mkdtempSync(join(tmpdir(), 'odh-render-'))
const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    `--remote-debugging-port=${String(PORT)}`,
    `--user-data-dir=${profile}`,
    'about:blank',
  ],
  { stdio: 'ignore' },
)

async function waitForChrome() {
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`http://127.0.0.1:${String(PORT)}/json/version`)
      return
    } catch {
      await new Promise((r) => setTimeout(r, 200))
    }
  }
  throw new Error(`Chrome did not open port ${String(PORT)}. Set CHROME to the browser executable.`)
}

try {
  await waitForChrome()
  const url = pathToFileURL(resolve(here, 'brand/templates.html')).href
  const target = await (
    await fetch(`http://127.0.0.1:${String(PORT)}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })
  ).json()
  const ws = new WebSocket(target.webSocketDebuggerUrl)
  let id = 0
  const pending = new Map()
  await new Promise((r) => {
    ws.onopen = r
  })
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m)
      pending.delete(m.id)
    }
  }
  const send = (method, params) =>
    new Promise((res) => {
      const i = ++id
      pending.set(i, res)
      ws.send(JSON.stringify({ id: i, method, params }))
    })
  const evaluate = async (expression) =>
    (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.result
      .value

  await send('Page.enable')
  await send('Runtime.enable')
  await send('Emulation.setDeviceMetricsOverride', {
    width: 2200,
    height: 1400,
    deviceScaleFactor: 1,
    mobile: false,
  })
  await send('Page.navigate', { url })
  await new Promise((r) => setTimeout(r, 500))
  await evaluate('document.fonts.ready.then(() => document.fonts.size)')
  await new Promise((r) => setTimeout(r, 300))

  for (const [elementId, out] of assets) {
    const rect = JSON.parse(
      await evaluate(
        `JSON.stringify(document.getElementById(${JSON.stringify(elementId)}).getBoundingClientRect())`,
      ),
    )
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        scale: 1,
      },
    })
    const file = resolve(here, out)
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, Buffer.from(shot.result.data, 'base64'))
    console.log(`${out}  ${String(Math.round(rect.width))}x${String(Math.round(rect.height))}`)
  }
  ws.close()

  // The site's own social image is the 1200x630 card.
  copyFileSync(resolve(here, 'brand/social-1200x630.png'), resolve(here, '../web/public/og.png'))
  console.log('web/public/og.png  copied from brand/social-1200x630.png')
} finally {
  chrome.kill()
}
