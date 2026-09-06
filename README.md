# One Day for Humanity

People and organizations give one day to humanity's hardest problems, every week, month,
quarter, or year, and give the results away.

**Status:** pre-launch, open for comment · **Site:** [onedayforhumanity.org](https://onedayforhumanity.org)

## What this is

A movement, not a company. Members pledge a recurring share of their working time, counted in
whole days and reported in public. The time goes into missions: open-source efforts with a named
steward, a backlog cut into day-sized tasks, and a definition of done. Everything built there is
a public good. Everyone may use it, forever.

The short text people sign is [MANIFESTO.md](MANIFESTO.md). The rules behind it are
[PRINCIPLES.md](PRINCIPLES.md). What you pledge, what counts, and how it is reported is
[PLEDGE.md](PLEDGE.md).

## Join

- **Read** the [manifesto](MANIFESTO.md) and the [principles](PRINCIPLES.md).
- **Sign** by [adding one line to SIGNATORIES.md](https://github.com/onedayforhumanity/onedayforhumanity/edit/main/SIGNATORIES.md):
  your name, your cadence, and the version you signed. If you do not use git,
  [open an issue](https://github.com/onedayforhumanity/onedayforhumanity/issues/new?template=sign.yml)
  and a maintainer will add you. Organizations publish a short pledge post first; the template
  is in [PLEDGE.md](PLEDGE.md).
- **Nominate a mission** with the
  [nomination form](https://github.com/onedayforhumanity/onedayforhumanity/issues/new?template=mission-nomination.yml).
  A mission is a problem we can finish, not a field we care about. To be recognized it needs a
  named steward, a council of people who live with the problem, an open license and an open data
  plan, a backlog cut into days with ten groomed before launch, and a definition of done.
  [GOVERNANCE.md](GOVERNANCE.md) has the process; every nomination and its outcome is published.
- **Give a day** once a mission is recognized: [CONTRIBUTING.md](CONTRIBUTING.md) says how, and
  what makes a day count.

## Founding mission, proposed

Open diabetes technology. Volunteers built OpenAPS, AndroidAPS, Loop, Trio, and Nightscout. A
randomized trial in the New England Journal of Medicine (2022) found the open algorithm gave
users 3 hours 21 minutes more time in range per day, and several thousand people rely on these
tools. We will recognize this mission when it has a named steward, a council from the T1D
community, and ten groomed `one-day` issues. Until then it is a proposal, and no other mission
is listed, on purpose. If you are inside one of these projects and could steward it, we want to
hear from you. We will never distribute builds of these apps; that would make us a device
manufacturer.

The research behind this choice, and behind every rule, is in [DESIGN_NOTES.md](DESIGN_NOTES.md)
and [research/](research/).

## In this repository

| | |
|---|---|
| `MANIFESTO.md`, `PRINCIPLES.md`, `CHANGELOG.md` | the signable text, its rules, and every version of both |
| `PLEDGE.md`, `GOVERNANCE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` | how the movement works |
| `SIGNATORIES.md`, `MISSION_TEMPLATE.md`, `templates/` | who has signed; how a mission starts, and the three files it keeps |
| `DESIGN_NOTES.md`, `research/` | why the rules are what they are |
| `web/`, `infra/`, `.github/` | the site, its hosting, and the deploy; the site is built from the documents above |
| `design/` | the mark, and kits for LinkedIn, GitHub, and X |
| `CLAUDE.md` | working notes for anyone using Claude Code here |

## License

Code: Apache-2.0 unless a mission states otherwise (OSI-approved licenses only).
Documents, including this README and the manifesto: CC BY 4.0.
