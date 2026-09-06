# The Pledge

## What you pledge

A recurring share of working time, counted in whole days, given to One Day for Humanity missions.

| Tier | Commitment | Badge |
|---|---|---|
| Weekly | One day per week | `ODH · Weekly` |
| Monthly | One day per month | `ODH · Monthly` |
| Quarterly | One day per quarter | `ODH · Quarterly` |
| Yearly | One day per year | `ODH · Yearly` |

For organizations the commitment is per full-time-equivalent employee who opts in, not per
company. Pledging Monthly with 40 opted-in staff means about 480 days a year.

## Whose time it is

Work done in an employer's time usually belongs to the employer, and every contribution is
signed under the Developer Certificate of Origin, which certifies that you have the right to
submit it. So:

- If your day comes from an employer's time, your employer pledges with you. An organization's
  pledge post authorizes its employees to contribute work done on pledged days under each
  mission's license.
- If your day is your own time, say so when you sign. It is yours to give.

## What counts

- Time spent on tasks in a recognized mission repository: code, data, design, documentation,
  research, testing, translation, support, maintenance.
- Time spent stewarding a mission: backlog grooming, onboarding, reviews.
- Compute, infrastructure, or cash given to a mission or to the movement's fund. This is
  reported separately and does not replace time.

## What does not count

- Work whose output is not released under an open license.
- Work on a member's own products, even if it is "for good".
- Marketing, recruiting, or internal training dressed up as mission work.

## Reporting

Once a year, each organization publishes a short public post:

```
In <year>, <organization> pledged <tier>.
<N> people took part and gave approximately <D> days.
Missions we worked on: <list>.
What we shipped: <2 to 5 bullets>.
What we failed at or dropped: <1 to 3 bullets>.
```

Post the link in a PR to [SIGNATORIES.md](SIGNATORIES.md). Organizations without a report for
18 months are moved to "lapsed", and the badge goes with the report. No shame, just accuracy.

Individuals do not report. They are counted by the days they log in each mission's `DAYS.md`.

## Verification

Honor system, in public. The report is the verification. Stewards may add a note confirming or
questioning an organization's reported contribution. A steward employed by that organization
says so in the note.

## Show the badge

An organization on the signatory list may show its tier badge on its website, in a README, or
in its pledge post while its latest report is under 18 months old. The badge says that you
pledged; it does not say that the movement endorses what you make. When the report lapses, the
badge comes down with it.

![One Day · Weekly](https://onedayforhumanity.org/badges/weekly.svg)
![One Day · Monthly](https://onedayforhumanity.org/badges/monthly.svg)
![One Day · Quarterly](https://onedayforhumanity.org/badges/quarterly.svg)
![One Day · Yearly](https://onedayforhumanity.org/badges/yearly.svg)

The images are served by the site, so they follow the design if it changes. Link the badge to
onedayforhumanity.org so a reader can find out what it means. In a README:

```markdown
[![One Day · Monthly](https://onedayforhumanity.org/badges/monthly.svg)](https://onedayforhumanity.org)
```

On a web page:

```html
<a href="https://onedayforhumanity.org"><img src="https://onedayforhumanity.org/badges/monthly.svg" alt="One Day · Monthly" height="22"></a>
```

Swap `monthly` for `weekly`, `quarterly`, or `yearly` to match your tier. Use the file as it
is; the source is `design/badges.mjs` in the movement's repository.

## Suggested pledge announcement for organizations

> Today, <organization> joins One Day for Humanity at the <tier> tier.
> Starting <date>, <N> of our engineers will give one day per <period> to <mission(s)>.
> We authorize them to contribute work done on those days under each mission's license.
> Everything we build there is open source and belongs to no one, including us.
> We'll report back in a year, wins and misses alike.
