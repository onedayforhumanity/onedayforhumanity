/*
 * Copy and derived data for the landing page.
 *
 * The prose is versioned movement text from the documents at the repository
 * root, by way of the Landing.dc.html design file. The ten principles are not
 * here: the landing page reads them from PRINCIPLES.md at build time, so the
 * only copies of the canon are the documents themselves.
 */

/* ------------------------------------------------------------------ links */

const REPO = 'https://github.com/onedayforhumanity/onedayforhumanity'

/**
 * Every GitHub URL on the site comes from here. The design pointed at the
 * organization, `https://github.com/onedayforhumanity`; its namesake repository
 * is where the canon lives and where people sign. The design's
 * `Manifesto.dc.html` is the manifesto page of this site, rendered from
 * MANIFESTO.md.
 */
export const links = {
  repo: REPO,
  manifesto: '/manifesto/',
  manifestoSource: `${REPO}/blob/main/MANIFESTO.md`,
  manifestoEdit: `${REPO}/edit/main/MANIFESTO.md`,
  principles: '/principles/',
  principlesSource: `${REPO}/blob/main/PRINCIPLES.md`,
  principlesEdit: `${REPO}/edit/main/PRINCIPLES.md`,
  changelog: `${REPO}/blob/main/CHANGELOG.md`,
  pledge: `${REPO}/blob/main/PLEDGE.md`,
  badges: `${REPO}/blob/main/PLEDGE.md#show-the-badge`,
  signatories: `${REPO}/blob/main/SIGNATORIES.md`,
  signatoriesEdit: `${REPO}/edit/main/SIGNATORIES.md`,
  signIssue: `${REPO}/issues/new?template=sign.yml`,
  nominate: `${REPO}/issues/new?template=mission-nomination.yml`,
  governance: `${REPO}/blob/main/GOVERNANCE.md`,
} as const

/* ------------------------------------------------------------------ props */

export type HeroCadence = 'monthly' | 'weekly'

/* ------------------------------------------------------------------ tiers */

/** Whether a grain cell is the pledged day or one of the rest. */
export type CellTone = 'pledged' | 'dim'

export type TierName = 'Weekly' | 'Monthly' | 'Quarterly' | 'Yearly'

export interface Tier {
  readonly name: TierName
  /** Share of working time given, e.g. `1/20`. */
  readonly fraction: string
  readonly desc: string
  /**
   * One cell per working day in the period; exactly one is `pledged`. The grid
   * geometry that arranges them (columns and gap, which differ per tier) lives
   * in Cadences.module.css, so no colour or layout value is set from here.
   */
  readonly cells: readonly CellTone[]
}

/**
 * One cell per day in the period, with a single day marked as pledged.
 * The 0.62 offset is the design's: it puts the marked day off-centre and
 * low-right, so no two tier cards read as the same picture.
 */
function grain(total: number): readonly CellTone[] {
  const pledgedIndex = Math.floor(total * 0.62)
  return Array.from({ length: total }, (_, i): CellTone =>
    i === pledgedIndex ? 'pledged' : 'dim',
  )
}

export const tiers: readonly Tier[] = [
  {
    name: 'Weekly',
    fraction: '1/5',
    desc: 'One day per week. About fifty days a year.',
    cells: grain(5),
  },
  {
    name: 'Monthly',
    fraction: '1/20',
    desc: 'One day per month. About twelve days a year.',
    cells: grain(20),
  },
  {
    name: 'Quarterly',
    fraction: '1/60',
    desc: 'One day per quarter. Four days a year.',
    cells: grain(60),
  },
  {
    name: 'Yearly',
    fraction: '1/250',
    desc: 'One day per year. One day, kept.',
    cells: grain(250),
  },
]

/* ---------------------------------------------------------- hero calendar */

export interface CalendarDay {
  /** 1-based day number shown in the cell. */
  readonly n: number
  readonly pledged: boolean
}

interface HeroCalendar {
  readonly days: readonly CalendarDay[]
  readonly caption: string
}

/** The hero's calendar block, for whichever cadence the page is rendered at. */
export function heroCalendar(cadence: HeroCadence): HeroCalendar {
  const total = cadence === 'weekly' ? 5 : 20
  const pledgedIndex = cadence === 'weekly' ? 2 : 11
  return {
    days: Array.from({ length: total }, (_, i) => ({ n: i + 1, pledged: i === pledgedIndex })),
    caption:
      cadence === 'weekly'
        ? 'One working week. One day is yours to give.'
        : 'Twenty working days. One of them is for humanity.',
  }
}

/* ----------------------------------------------------------------- values */

/** Agile-Manifesto-style pairs from MANIFESTO.md: we choose the thing on the left. */
export interface ValuePair {
  readonly left: string
  readonly right: string
}

export const values: readonly ValuePair[] = [
  { left: 'Shipped', right: 'promised' },
  { left: 'Open', right: 'owned' },
  { left: 'Useful and unglamorous', right: 'impressive and unused' },
  { left: 'Continuity', right: 'intensity' },
  { left: 'The people affected', right: 'the people building' },
  { left: 'Evidence', right: 'applause' },
]

/* --------------------------------------------------------------- missions */

export interface Mission {
  readonly label: string
  readonly title: string
  readonly body: string
  /** `founding` is the filled terracotta card; `plain` cards are white. */
  readonly tone: 'founding' | 'plain'
  readonly link?: { readonly label: string; readonly href: string }
}

/**
 * One proposed mission and the two things the reader can do about missions.
 * The movement lists no mission without a steward, so the founding mission is
 * shown as a proposal, and the former candidate domains are gone on purpose
 * (see research/founding-missions.md).
 */
export const missions: readonly Mission[] = [
  {
    label: 'Founding mission · proposed',
    title: 'Open diabetes technology',
    body: 'Volunteers built OpenAPS, AndroidAPS, Loop, Trio, and Nightscout, and a randomized trial (NEJM, 2022) found 3 hours 21 minutes more time in range per day. Several thousand people rely on these tools. We will recognize this mission when it has a named steward, a council from the T1D community, and ten groomed one-day issues. We will never distribute builds; that would make us a device manufacturer.',
    tone: 'founding',
    link: { label: 'Offer to steward it', href: links.nominate },
  },
  {
    label: 'How missions are chosen',
    title: 'A problem we can finish, not a field we care about',
    body: 'A named steward. A council of people who live with the problem, with a blocking vote on scope, data, and release. An open license and an open data plan. A backlog cut into days, ten groomed before launch. A definition of done, and of stop.',
    tone: 'plain',
  },
  {
    label: 'Nominate a mission',
    title: 'Propose the next one',
    body: 'Say who suffers and how we know, which open projects the work would feed, and who could steward it. Nominations from people who live with the problem, and from maintainers of the projects concerned, carry the most weight. Every nomination and our reasoning is published, accepted or not.',
    tone: 'plain',
    link: { label: 'Open a nomination', href: links.nominate },
  },
]

/* ------------------------------------------------------------------- misc */

export const site = {
  name: 'One Day for Humanity',
  eyebrow: 'Every week, month, quarter, or year',
  headline: "Give one day to humanity's hardest problems. Give the results away.",
  lede: 'People and organizations pledge a recurring share of working time, counted in whole days, to open-source missions with a named steward and day-sized tasks. Everything built there is a public good.',
  orgNote:
    'For organizations the commitment is per full-time-equivalent employee who opts in, not per company. Pledging Monthly with 40 opted-in staff means about 480 days a year.',
} as const
