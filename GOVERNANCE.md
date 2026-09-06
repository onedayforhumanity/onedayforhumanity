# Governance

*Adapted from GitHub's Minimum Viable Governance (MVG) two-tier model.*

## 1. Structure

**Steering Circle** (movement level)
- 5 to 9 people: a mix of mission stewards, pledged-organization representatives, and
  at least two people who live with a problem a mission addresses.
- Decides which missions are recognized, holds the name and marks in trust, and approves
  changes to this document, the manifesto, and the principles.

**Missions** (project level)
- Each mission has one accountable **Steward** and a **Mission Council** that must
  include affected people. Missions make their own technical decisions by consensus
  of maintainers.
- The council holds a blocking vote on the mission's scope, its use of data, and any release
  to the people it serves.

## 2. Recognizing a mission

A proposal becomes a recognized mission when it has:
1. A completed [MISSION_TEMPLATE.md](MISSION_TEMPLATE.md).
2. A named steward and at least two other maintainers from at least two organizations.
3. At least one affected-community representative on its council.
4. An OSI-approved license and an open-data plan.
5. Steering Circle approval by consensus (lazy consensus, 14-day comment window).

Anyone may nominate a mission by opening an issue with the nomination template. Every
nomination and the reasoning behind its outcome is published.

A mission is **paused** if it has no steward for 60 days, and **archived** if paused for a year.
Archived repositories stay public forever.

## 3. Decisions

- Default: lazy consensus. A proposal passes if no maintainer objects within 7 days.
- If consensus fails: simple majority of maintainers (missions) or Steering Circle members (movement).
- A block by a mission council is resolved by the Steering Circle within 30 days.
- Manifesto, principles, and governance changes: two-thirds of the Steering Circle, after a
  30-day public comment period.

## 4. Roles

- **Contributor:** anyone who has given a day.
- **Maintainer:** a contributor granted merge rights by existing maintainers.
- **Steward:** the maintainer accountable for the mission's backlog, reporting, and health.
- **Steering Circle member:** elected annually by stewards and organization representatives.

## 5. Licensing policy

- Software: OSI-approved licenses only; default Apache-2.0.
- Data and content: licenses that conform to the Open Definition; default CC BY 4.0, or ODbL for databases.
- Contributions are accepted under the Developer Certificate of Origin (DCO). There is no CLA.
  Organizations authorize their employees' contributions in their pledge post
  (see [PLEDGE.md](PLEDGE.md)).
- No relicensing to a non-open license, ever. This clause cannot be amended.

## 6. Name and marks

The name "One Day for Humanity" and its logos will be held by the non-profit home the movement
chooses. Members may use the tier badge while their latest report is under 18 months old.

## 7. Money

The movement may accept cash pledges. Money funds stewards, infrastructure, compute,
and community operations. It never funds a member company's own products. Accounts are
published quarterly.

## 8. Code of conduct

The Contributor Covenant applies to every mission and every space. Reports go to
`conduct@` (address set at launch); the Steering Circle handles escalations.

## 9. Transparency and reporting

Meetings are minuted in public. Nothing shared with the movement is confidential,
except personal data and security reports.

Three things are published on a schedule: a quarterly report and a public retrospective log
from each mission, an annual post from each pledged organization, and quarterly accounts from
the movement.

## 10. Before the Steering Circle exists

Until the Steering Circle is formed, the repository's maintainers decide, in public, on pull
requests to this document, the manifesto, and the principles. Today that is the founder, who
also holds the name, marks, and repositories, through the `onedayforhumanity` GitHub
organization, until the movement chooses its non-profit home.
Every decision made this way is recorded in the pull request that made it.
