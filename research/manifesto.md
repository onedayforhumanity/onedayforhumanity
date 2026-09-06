# The manifesto: research and recommendations

*Research note, 6 September 2026. Written for the founder's request for deep research on
MANIFESTO.md before it went up as a page on the site. This is a set of recommendations. Nothing
in it has been applied to the manifesto, the other documents, or the site.*

## The short answer

The manifesto is shorter than most of its precedents (about 760 words, three to four minutes)
and its value pairs are as good as anything in the genre. Its weaknesses are structural and
factual, not stylistic. It asks the reader to hold 27 separate items where the manifestos that
lasted hold 10 to 16; eight of its twelve principles restate one of its six commitments; and it
makes several present-tense claims that are not yet true (that nobody built a door, that no one
owns the output, that the movement holds anything in trust) or that cannot be tested ("strictest
applicable standard", "we do not take sides"). Twelve places contradict PLEDGE.md, GOVERNANCE.md,
CONTRIBUTING.md, or MISSION_TEMPLATE.md. The employer question (whose time and whose copyright a
salaried engineer is pledging) is not addressed anywhere and undermines the DCO the governance
relies on.

The fact-check of DESIGN_NOTES.md found most claims correct, four wrong or out of date, and five
overstated. Details are in section 3.

Method note. I read MANIFESTO.md, DESIGN_NOTES.md, PLEDGE.md, GOVERNANCE.md, README.md,
SIGNATORIES.md, CONTRIBUTING.md, MISSION_TEMPLATE.md, CLAUDE.md and the `web/` source, then
fetched or searched roughly 90 URLs. Word counts for other manifestos come from the fetched pages
and are approximate. Where quoted repository text contained dashes, the punctuation has been
adjusted. Pages that refused the fetcher (qz.com, perens.com, hackforla.org, the Smithsonian
article, the deep TMEP link) are marked "found, not fetched" and backed by a fetched secondary
source where possible.

## 1. What enduring manifestos and pledges actually look like

### The documents, one by one

**Agile Manifesto (2001).** Four value pairs in about 65 words plus a framing sentence, then
twelve principles of about 214 words on a separate page (https://agilemanifesto.org/ and
https://agilemanifesto.org/principles.html). Written by 17 people at Snowbird, Utah, February 11
to 13, 2001 (https://agilemanifesto.org/history.html). The text has never changed; the copyright
notice says it "may be freely copied in any form, but only in its entirety through this notice."
Signing: a form was added in October 2001; each signatory supplied "a name, a URI, and a short
statement," and Ward Cunningham audited them by hand; the count was 10,104 in 2011 and Fowler
notes "There's never been any particular push to add signatures"
(https://martinfowler.com/bliki/AgileSignatory.html). The public signatory index is bucketed by
date from 10 October 2001 to 10 July 2016 and stops there, so signing is effectively closed
(https://agilemanifesto.org/display/index.html). Translations: 70+ languages at
`/iso/<code>/manifesto.html`, community-made, uncredited
(https://agilemanifesto.org/iso/en/manifesto.html). What spread it: the extreme brevity of the
core, the "X over Y" form, and the fact that 17 already-known method authors put their names on
it. The signature list did not sustain it; the institutions and the industry around it did.

**Mozilla Manifesto (2007, addendum 2018).** Ten principles on the main page (about 1,200 words
with the addendum), and a longer "details" page (about 1,850 words) that adds an introduction,
the four stated goals, a pledge section and an invitation
(https://www.mozilla.org/en-US/about/manifesto/ and
https://www.mozilla.org/en-US/about/manifesto/details/). The goals are explicit: "1. articulate a
vision ... 2. speak to people whether or not they have a technical background; 3. make Mozilla
contributors proud ... 4. provide a framework for other people to advance this vision."
Versioning: Mitchell Baker gave it a "0.9" designation in 2007 and used translation into 35
languages as the test of whether the wording held; in 2013 she proposed exactly three changes
toward 1.0 after twelve months of community workshops
(https://mitchellbaker.net/2013/04/mozilla-manifesto-towards-1-0/). The "Pledge for a Healthy
Internet" (four commitments) is dated 2017 on the details page and was announced March 29, 2018
as "our first major addition"
(https://blog.mozilla.org/blog/2018/03/29/mozilla-marks-20th-anniversary-commitment-better-human-experiences-online/).
Signing: none; the 2018 launch invited people to "share your support ... via Twitter."
Translations are served at locale paths such as `/de/about/manifesto/`, and every principle has
an anchor, `#principles-01` to `#principles-10`, plus `#commitment-01` to `#commitment-04`
(https://www.mozilla.org/de/about/manifesto/). What made it last: the Mozilla Foundation holds
it, changes are made by addendum rather than rewrite, and it is deliberately readable by
non-engineers.

**GNU Manifesto (1985).** About 5,500 words in eight sections, by Richard Stallman. Its own
header: "Through 1987, it was updated in minor ways to account for developments; since then, it
seems best to leave it unchanged ... Footnotes added since 1993 help clarify these points."
Verbatim copying is allowed; modified versions are not. 20 translations. Calls to action point
to gnu.org/help (https://www.gnu.org/gnu/manifesto.html). The stall risk it shows: long
argumentative essays age; the FSF handled that with footnotes, not edits.

**Cluetrain Manifesto (1999).** 95 numbered theses (roughly 3,500 to 4,000 words), four authors,
launched April 1999. Signing was an open web form; each signer entry shows name, title,
organization and a personal statement, and the list is a frozen snapshot
(https://www.cluetrain.com/signers.html). Licence notice: "world rights granted for
non-commercial use on condition that this page remains intact. Rip it, steal it, web it, mail
it, post it," with a CC BY-SA 4.0 licence added in 2015; a "New Clues" follow-up appeared in
2015; 14 translations (https://www.cluetrain.com/). It spread as a book and a slogan ("markets
are conversations"); 95 items is too many to remember, and the community around it did not
outlive the authors' attention.

**Open Source Pledge (launched October 8, 2024).** The rule: "$2000 per year per full-time
equivalent developer on the company's staff," cash only, paid to maintainers or foundations,
with exclusions for projects the company owns or that only benefit its ecosystem
(https://opensourcepledge.com/about/). The join flow is Pay, Publish (a blog post with year,
developer count, total, and per-project breakdown), Promote (a GitHub issue with the post link,
a description under 600 characters and an SVG logo), Renew ("publish a new post at some point
each year, and let us know about it") (https://opensourcepledge.com/join/). Status as of this
week: 43 members, $7,270,139 paid in total, $3,698,830 in the past year, and a "Former Member
Companies" list of four (Laravel, Pixee, Browserbase, Rector)
(https://opensourcepledge.com/members/ and https://opensourcepledge.com/). Initiated by Sentry;
not versioned as a text; no translations. What works: a single countable number per member and
a public per-member page showing dollars per developer.

**Pledge 1% (launched Giving Tuesday 2014).** "Atlassian and Salesforce challenged 500 companies
to Pledge 1% by Giving Tuesday 2015" (https://www.pledge1percent.org/about-us/); Rally and the
Entrepreneurs Foundation of Colorado were co-founders
(https://www.atlassian.com/company/news/press-releases/pledge-one-program-launched-to-celebrate-foster-and-inspire-early-stage-corporate-philanthropy,
found). It joined Tides as a fiscally sponsored initiative on April 12, 2016
(https://www.tides.org/project/fiscally-sponsored-project/pledge-1-2/, found). Today: "20,000"
companies, "130+ Countries," "$3B" of equity, four pledge types (time, product, equity, profit)
(https://pledge1percent.org/). Accountability, in its own words: "We do not formally audit or
require reports to participate" and "Our goal is to inspire, educate and empower rather than
certify or regulate" (https://www.pledge1percent.org/how-it-works/). Its member survey
(December 19, 2024) had 228 responses from 226 companies out of more than 8,000 members
contacted; "82% companies say they are actively working to fulfill their pledge," and the time
pledge is the most popular type
(https://www.pledge1percent.org/insights-from-pledge-1-member-survey/). It spread because the
ask is tiny, flexible and free, and because two well-known CEOs fronted it. The trade-off is
that nobody knows how many of the 20,000 actually give.

**Giving What We Can 10% Pledge (2009).** "A public commitment to give at least 10% of income to
the organisations you believe can most effectively use it," until retirement; also a Trial
Pledge (any percentage, 6 months to 5 years) and a Further Pledge. Signing is an online form that
creates a personal dashboard; 11,224 pledgers from 118 countries
(https://www.givingwhatwecan.org/pledge). Retention: "only about 30%" of 10% pledgers are
recording donations five years in; reporting is optional, but surveys of non-reporters "didn't
find a meaningful signal that most of these pledgers are, in fact, donating"
(https://www.givingwhatwecan.org/impact/2023-2024-impact-evaluation), and the 2025 evaluation
says "10% Pledge attrition is faster than we previously estimated"
(https://www.givingwhatwecan.org/impact/2025-impact-evaluation). A clear number plus a dashboard
is the best-instrumented pledge in this list, and it still loses most pledgers within five years.

**The Giving Pledge (2010).** Founded by Bill Gates, Melinda French Gates and Warren Buffett;
signatories commit "the majority of their wealth to charitable causes in their lifetime or
wills," join "through making a public commitment," and most publish a letter
(https://givingpledge.org/about). "More than 250 donors from 30 countries," each shown with
photo, name, year and region (https://givingpledge.org/pledgers). It is a moral commitment, not
a legal contract (https://en.wikipedia.org/wiki/The_Giving_Pledge, found). The letter is the
whole enforcement mechanism.

**Reactive Manifesto (2013, v2.0 2014).** First published July 18, 2013; "endorsements by more
than 23,000 technologists" by July 2018
(https://www.globenewswire.com/news-release/2018/07/24/1541116/0/en/Five-Years-of-Innovation-Reactive-Manifesto-Reaches-Key-Milestone.html).
Version 2.0 is dated September 16, 2014; about 1,100 words in four sections (Responsive,
Resilient, Elastic, Message Driven); signing requires logging in with GitHub, Google or
LinkedIn; 17 translations; four named authors (https://www.reactivemanifesto.org/). It is the
only one in this list that both versions the text and keeps signing open, and the login
requirement is how it avoids the hand-auditing Cunningham did.

**The Twelve-Factor App (2011).** Written by Adam Wiggins at Heroku; twelve factors as twelve
short pages; "last updated 2017"; 18 translations; not signable (https://12factor.net/). Heroku
handed it to community governance on November 12, 2024
(https://12factor.net/blog/open-source-announcement); the repository is CC BY 4.0, has
MAINTAINERS.md and GOVERNANCE.md, and changes are developed on a `next` branch "until
maintainers reach consensus" (https://github.com/twelve-factor/twelve-factor). Longevity here
came from the twelve nouns being memorable and from the text being left alone for thirteen
years.

**Dieter Rams' ten principles (late 1970s).** Ten one-line principles, each with one to three
sentences of gloss, about 1,100 words in total; not signable, never versioned; kept alive by
Vitsoe (https://www.vitsoe.com/gb/about/good-design). It shows that a list of ten short
assertions with a custodian survives without any pledge machinery at all.

**Contributor Covenant (2014, v3.0 2025).** Created by Coraline Ada Ehmke, transferred to the
Organization for Ethical Source in 2021; v3.0 released July 28, 2025 by an eight-person working
group using consensus, after surveys and interviews; adopted by "9 of the 10 largest open source
projects" (https://ethicalsource.dev/blog/contributor-covenant-3/ and
https://www.contributor-covenant.org/). Every version has a permanent URL
(`/version/3/0/code_of_conduct/`), the text is CC BY-SA 4.0 and runs about 1,800 to 2,000 words
in eight sections (https://www.contributor-covenant.org/version/3/0/code_of_conduct/).
Translations are listed per version: 9 languages for 3.0, 10 for 2.1, 14 for 1.4, submitted by
volunteers via GitHub (https://www.contributor-covenant.org/translations/). Not signable;
adoption is by copying the file into a repository. This is the best model for versioning and
translation of a text that projects depend on.

**Digital Public Goods Standard (2020).** Nine indicators (SDG relevance, open licensing, clear
ownership, platform independence, documentation, non-PII data extraction, privacy and
applicable laws, standards and best practices, do no harm by design with sub-indicators 9a to
9c) (https://github.com/DPGAlliance/DPG-Standard/blob/main/standard.md). Versioned with a
changelog: 1.0.0 on 2020-09-15, 1.1.7 on 2025-06-26
(https://github.com/DPGAlliance/DPG-Standard/blob/main/CHANGELOG.md); note the standard.md
header still says "1.1.4, 2021-01-04," so even the DPGA has version drift. Governed by the DPGA
Secretariat, CC BY-SA 4.0, changes proposed as GitHub issues
(https://www.digitalpublicgoods.net/standard). It is not signed; products are assessed against
it, which is a different mechanism from a pledge.

### Summary table

| Document | Year | Approx. length | Core structure | Signable | Versioned | Translations |
|---|---|---|---|---|---|---|
| Agile | 2001 | 65 + 214 words | 4 pairs, 12 principles | Was (2001 to 2016), name + URL + statement | No, text frozen | 70+, `/iso/xx/` |
| Mozilla | 2007 | ~1,200 / ~1,850 | 10 principles, 4 commitments, pledge, invitation | No | 0.9 then addendum 2018 | Locale paths, 35+ |
| GNU | 1985 | ~5,500 | Essay, 8 sections | No | Frozen since 1987, footnotes since 1993 | 20 |
| Cluetrain | 1999 | ~3,500 to 4,000 | 95 theses | Was, with statements | No; 2015 follow-up | 14 |
| Open Source Pledge | 2024 | Short rules page | $2,000 per dev per year, annual post | Companies, via GitHub issue | No | None |
| Pledge 1% | 2014 | Short | 1% of time, product, equity or profit | Companies, web form | No | None |
| GWWC 10% | 2009 | One sentence | 10% of income | Individuals, web form + dashboard | Wording revised | Multiple |
| Giving Pledge | 2010 | One sentence | Majority of wealth | Individuals, public letter | No | None |
| Reactive | 2013 | ~1,100 | 4 traits | Yes, OAuth login | v2.0 dated | 17 |
| Twelve-Factor | 2011 | 12 short pages | 12 factors | No | Community since 2024, `next` branch | 18 |
| Rams | 1970s | ~1,100 | 10 principles | No | No | Many, informal |
| Contributor Covenant | 2014 | ~1,900 | 8 sections | No, adopted by copying | Yes, permanent URL per version | 40+, per version |
| DPG Standard | 2020 | Indicator table | 9 indicators | No, assessed | Yes, changelog | Some |

### Patterns among the ones that lasted

1. A very short core and a longer text kept apart. Agile is 65 words with 214 words of
   principles on another page; Mozilla has a ten-principle page and a details page;
   Twelve-Factor is twelve nouns. Nobody memorises 24 items.
2. The core text does not move. Agile is frozen; GNU adds footnotes; Mozilla waited eleven years
   and then added rather than edited; Twelve-Factor was untouched for thirteen years. When the
   text does change, the old version keeps its URL (Contributor Covenant, DPG Standard).
3. A custodian shows up within a few years: Mozilla Foundation, FSF, Organization for Ethical
   Source, DPGA Secretariat, Sentry, Tides for Pledge 1%, Vitsoe for Rams. The manifesto without
   one (Cluetrain) became a snapshot.
4. Pledges that are enforced have one countable unit per member: $2,000 per developer, 10% of
   income, a majority of wealth, an annual Communication on Progress. Pledge 1% has no count and
   no audit, and says so.
5. Signature lists are cheap to start and decay anyway. Agile's list closed in 2016; Cluetrain's
   is frozen; GWWC keeps a dashboard and still sees about 30% recording after five years.
   Signing spreads the text; it does not sustain the work.
6. Translations are volunteer pull requests into a fixed URL scheme, and are pinned to a
   version (Contributor Covenant) or used as a quality check on the original (Mozilla).
7. Almost all of them let you copy the text but not alter the canonical copy: Agile "only in its
   entirety," GNU "verbatim," Cluetrain "this page remains intact." ODH's CC BY 4.0 permits
   modified copies as long as the modifier indicates the changes (section 3(a)(1)(B),
   https://creativecommons.org/licenses/by/4.0/legalcode.en). That is more permissive than any
   of the precedents.

## 2. Critique of the ODH manifesto as written

### Length and reading time

`MANIFESTO.md` is 762 words including the title block, of which about 700 are body. By section:
opening 116, "We commit" 203, "We value" 64, "Principles" 323, "Join" 56. At 200 to 250 words per
minute that is three to four minutes. That is shorter than Mozilla and Reactive and longer than
Agile. The problem is not the word count but the item count: 6 commitments, 6 value pairs, 12
principles and 3 join paths make 27 discrete things to hold. Agile has 16, Mozilla 14, Rams 10,
Twelve-Factor 12.

### Structure

The arc (opening, commit, value, principles, join) copies Mozilla's vision, pledge, invitation
and Agile's pairs plus principles at the same time. The two forms fight: "We commit" reads as a
pledge, "Principles" reads as rules, and eight of the twelve principles restate a commitment. The
value pairs are the strongest part and sit in the middle where a reader who stops early never
reaches them. Mozilla put the ten principles first and everything else on a second page.

### Overlap between commitments and principles

| Commitment | Restated by |
|---|---|
| 1. We give one day | Principle 1, The unit is one day |
| 2. We build in the open, "No one owns it" | Principle 2, Every output is a public good; Principle 7, No one owns the output |
| 3. We choose problems; "The people who live with a problem help decide" | Principle 6, The affected lead; value pair 5 |
| 4. We finish things: steward, backlog, definition of done | Principle 3, No mission without a steward; Principle 4, Work is cut into days |
| 5. We measure honestly | Principle 10, We publish the retrospective; value pair 6, Evidence over applause |
| 6. We show up, "We are not the majority" | Principle 12, We are a fraction, on purpose |

Only Principles 5 (do no harm), 8 (time is the pledge, money is fuel), 9 (maintain) and 11
(neutral ground) say something the commitments do not. Either the commitments are the manifesto
and the principles are the rulebook, or the other way around. Right now the reader gets both
and cannot tell which one they are signing.

### Rhetoric versus testable claims

Testable and good: "counted in whole days, reported in public, renewed every year"; "Code under
an OSI-approved license"; "When the steward steps down, the mission pauses"; "A share of every
day goes to keeping earlier work alive"; "Every mission keeps a public log." Rhetorical and
unfalsifiable: "Most of the world's technical talent spends every working hour on problems that
pay"; "nobody asked, and nobody built the door"; "a fraction that shows up, every time, is
enough to move the world"; "We are the ones who do." The second of these is also wrong on the
facts: Pledge 1% has 20,000 companies and its most popular pledge type is time
(https://www.pledge1percent.org/insights-from-pledge-1-member-survey/); Salesforce gives every
employee seven paid volunteer days a year
(https://www.salesforce.com/company/philanthropy/employee-volunteering-giving/); Code for
America ran 77 brigades with 25,000 volunteers at its 2018 peak
(https://codeforamerica.org/news/strengthening-the-national-brigade-network/); Humanitarian
OpenStreetMap Team has done this for a decade. People have asked, and doors exist. The honest
claim is that the existing doors lose people (section 3 of research/founding-missions.md has the
numbers), and ODH is designed around why.

### Clarity for a non-technical reader

Mozilla's second stated goal is to "speak to people whether or not they have a technical
background." The ODH text assumes a reader who knows: merged, backlog, groomed, definition of
done, OSI-approved license, Digital Public Goods Standard, vendor lock, relicensing, compute,
dependencies, repositories, marks, pull request, `SIGNATORIES.md`, and `one-day` issue.
`CONTRIBUTING.md` says many days need no code; the manifesto's vocabulary says otherwise. A
clinician or a caregiver reading Principle 6 would find themselves named in a document they
cannot otherwise parse.

### Internal consistency with PLEDGE.md and GOVERNANCE.md

1. Principle 1 says the pledge is "renewed every year" for everyone. `PLEDGE.md` only defines
   reporting for organizations; the individuals table in `SIGNATORIES.md` has Name, Tier, Since
   and no report or renewal column; "lapsed" applies to organizations only. Individuals never
   renew, never report, never lapse.
2. Principle 3: "When the steward steps down, the mission pauses until another steps up."
   `GOVERNANCE.md` section 2: a mission "is paused if it has no steward for 60 days." Pick one.
3. Three reporting cadences appear in four files: a quarterly steward report (Principle 3), an
   annual organization post (`PLEDGE.md`), quarterly metrics and a quarterly retro
   (`MISSION_TEMPLATE.md` 10 and 12), quarterly accounts (`GOVERNANCE.md` 7). None of them is
   listed together.
4. Principle 6 and `MISSION_TEMPLATE.md` section 3 grant the council "a veto on direction."
   `GOVERNANCE.md` section 3 defines decisions as lazy consensus with a simple-majority fallback
   and never mentions a veto; section 1 says missions decide "by consensus of maintainers."
   "Direction" is undefined.
5. Principle 7 says "no relicensing." `GOVERNANCE.md` section 5 says "No relicensing to a
   non-open license." The manifesto version would forbid moving a mission from Apache-2.0 to
   AGPL-3.0; the governance version allows it.
6. Principle 7 says names, marks and repositories "are held in trust by the movement, never by a
   member company." `GOVERNANCE.md` section 6 says "(and, once it exists, its foundation)." The
   repository was on a personal account when this was written; it has since moved to the
   founder's GitHub organization, which is not a legal entity either. Today nothing is held in
   trust by anyone.
7. Commitment 2 says "No one owns it." Principle 2 says missions aim to meet the DPG Standard,
   whose indicator 3 requires that "Ownership of assets that the digital public good produces
   must be clearly defined and documented"
   (https://github.com/DPGAlliance/DPG-Standard/blob/main/standard.md).
8. Commitment 4 counts a day as "merged, tested, documented, or learned." `CONTRIBUTING.md`
   counts "merged, reviewed, tested, learned." Documented and reviewed are different things.
9. Principle 9 says "A share of every day goes to keeping earlier work alive."
   `MISSION_TEMPLATE.md` 11 makes this a per-mission fraction, default 25%. A single day given by
   one person cannot be 25% maintenance; the mission's days can.
10. `GOVERNANCE.md` section 3 says manifesto changes need two-thirds of the Steering Circle after
    a 30-day comment period. No Steering Circle exists. The website's "Propose a change to the
    text" button (`web/src/pages/ManifestoPage.tsx`) leads to a GitHub edit with no stated rule
    for who decides during v0.x.
11. `README.md` says "Cash pledges fund stewards and infrastructure." `DESIGN_NOTES.md` open
    question 1 says whether cash is required is undecided. The README asserts a funding model
    the notes say is open.
12. The GOVERNANCE default licence is Apache-2.0, which permits proprietary derivatives.
    Principle 7 promises "no vendor lock." AndroidAPS chose AGPL-3.0
    (https://github.com/nightscout/AndroidAPS) for exactly this reason. Permissive versus
    copyleft is a real decision the documents have not made on purpose.

### Lines that sound like marketing

"This is the door." "We are the ones who do." "a fraction that shows up, every time, is enough to
move the world." The tier badges (`ODH · Weekly`) belong in `PLEDGE.md`, not in a manifesto.
"Failure is published too, in the same place, in the same font" and "Enthusiasm is not a plan"
are the two lines that earn their rhetoric, because each is a checkable promise.

### Legally or practically naive points, examined

**The employer problem.** Under US law a "work made for hire" is "a work prepared by an employee
within the scope of his or her employment" and belongs to the employer (17 U.S.C. 101,
https://www.law.cornell.edu/uscode/text/17/101). California's employee-friendly exception
protects only inventions "developed entirely on his or her own time without using the
employer's equipment, supplies, facilities, or trade secret information" and unrelated to the
employer's business (Cal. Lab. Code 2870,
https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=2870).
ODH asks for "a share of their working time," which is the one category no exception covers.
`GOVERNANCE.md` accepts contributions under the DCO, whose clause (a) has the contributor
certify "I have the right to submit it under the open source license indicated in the file"
(https://developercertificate.org/). A salaried engineer signing off employer-owned code without
authorization certifies something false. This is why the Apache Software Foundation has a
Corporate CLA "to cover contributing intellectual property via the corporation that may have
been assigned as part of an employment agreement"
(https://www.apache.org/licenses/contributor-agreements.html), why Google employees must file
with the Invention Assignment Review Committee for a copyright waiver and are told "never sign a
CLA without approval" (https://opensource.google/documentation/reference/creating), and why
GitHub published the Balanced Employee IP Agreement, under which "The company gets exclusive
control of IP created in the scope of an employee's job" and personal-time work related to the
business stays with the employee subject to a company licence
(https://github.com/github/balanced-employee-ip-agreement). How the precedents avoid the
problem: the Open Source Pledge moves company cash, not employee code, so no IP question arises
(https://opensourcepledge.com/about/). Google's 20% time was company-sanctioned from the 2004
IPO letter ("to spend 20% of their time working on what they think will most benefit Google,"
https://abc.xyz/investor/founders-letters/ipo-letter/), so the output was Google's. Atlassian's
20% projects went into Jira, Confluence and Bamboo
(https://www.atlassian.com/blog/blog/archives/atlassians_20_time_a_year_in_review). Salesforce's
seven paid VTO days are for volunteering with nonprofits, where no code IP is at stake
(https://www.salesforce.com/company/philanthropy/employee-volunteering-giving/). Conclusion: an
individual signatory without employer sign-off is really pledging personal time, and the
documents should say so; an organizational pledge must include an explicit licence
authorization for its employees' contributions, or the DCO does not hold.

**"No one owns the output ... held in trust by the movement" with no legal entity.** Copyright
always has an owner; open licences grant permission, they do not remove ownership. Apache-2.0
section 2 gives "a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable
copyright license" (https://www.apache.org/licenses/LICENSE-2.0). The accurate statement is that
the licence cannot be revoked, not that nobody owns the work. Trademarks need an owner: US
applications must identify the applicant's legal entity (TMEP 803.03,
https://tmep.uspto.gov/RDMS/TMEP/current, section found via
https://www.altlegal.com/tmep/tmep-0800/). A trust needs a trustee. GitHub's MVG, which
GOVERNANCE.md adapts, says the move to a corporate home comes "typically when your organization
begins holding money" (https://github.com/github/MVG), and `GOVERNANCE.md` section 7 already
says the movement "may accept cash pledges." Two recent failures show what happens when the home
is borrowed: Code for America ended fiscal sponsorship for about 60 brigades in 2023
(https://statescoop.com/code-for-america-local-brigades-ending/), and the Open Collective
Foundation, fiscal host to over 600 collectives, announced dissolution on February 28, 2024 and
closed December 31, 2024
(https://opencollective.com/foundation/updates/announcement-we-are-dissolving-open-collective-foundation-at-the-end-of-this-year).
Pledge 1% solved this by joining Tides in 2016
(https://www.tides.org/project/fiscally-sponsored-project/pledge-1-2/, found). Conclusion: the
principle is coherent only as a promise about the future ("will be held by a non-profit home the
movement chooses") plus an interim fact ("today the repositories are owned by named people").
Written as a present-tense fact it is not true.

**"The affected lead ... can veto direction."** OpenAPS describes itself as "not an organization"
but "an open source project," founded by Dana Lewis (a person with T1D), Scott Leibrand and Ben
West; every user builds and runs their own system (https://openaps.org/). The Nightscout
Foundation is a 501(c)(3) formed in 2014 whose board is people with T1D (Gail deVore, Tim Gunn,
Theresa Hastings) and parents of children with T1D (James Wedding, Kate Farnsworth, Weston
Nordgren) (https://www.nightscoutfoundation.org/about and
https://www.nightscoutfoundation.org/leadership). Tidepool, a patient-founded nonprofit, took
Loop through FDA clearance on January 24, 2023
(https://www.tidepool.org/blog/tidepool-loop-has-received-fda-clearance, found;
https://www.medtechdive.com/news/tidepool-loop-clearance-diy-diabetes-device/646413/, found). In
none of these does a separate council of affected people hold a veto over builders; the
affected people are the builders and the board. The Lancet Diabetes & Endocrinology consensus
(January 2022) calls these systems "co-created and supported by an online community who were
directly affected"
(https://kclpure.kcl.ac.uk/portal/en/publications/open-source-automated-insulin-delivery-international-consensus-st/).
A veto is realistic only if it says who holds it (how many people, how appointed), over what
(scope, data use, release to users), and what happens on deadlock. As written, `GOVERNANCE.md`
gives maintainers lazy consensus and a majority fallback, so the veto has no procedural home.
The stronger and more precedent-backed version is to give affected people maintainer rights and
seats on the Steering Circle (which GOVERNANCE.md already does, "at least two people who live
with a problem"), and to pay them from the cash pledges.

**"Health data handled to the strictest applicable standard."** The two regimes differ in scope,
not just strictness. GDPR Article 9(1) prohibits processing "data concerning health" unless an
exception applies, such as explicit consent (9(2)(a)) or research under Article 89 (9(2)(j)),
and it applies to anyone processing EU residents' data (https://gdpr-info.eu/art-9-gdpr/). HIPAA
applies to covered entities ("health plans, clearinghouses, and certain health care providers"
who transmit claims electronically) and their business associates
(https://www.cms.gov/priorities/key-initiatives/burden-reduction/administrative-simplification/hipaa/covered-entities);
a volunteer project distributing software is usually neither, in which case the FTC Health
Breach Notification Rule for "vendors of personal health records and related entities" not
covered by HIPAA is the US rule that actually bites
(https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule). The DPG
Standard adds indicator 7 (comply with privacy and applicable laws) and 9a (demonstrate how PII
is kept private and secure). For the founding diabetes mission, the strictest applicable
standard is not a data law at all: the FDA warned on May 16, 2019 against "unapproved or
unauthorized devices for diabetes management," citing an insulin overdose report
(https://www.fda.gov/news-events/press-announcements/fda-warns-against-use-unauthorized-devices-diabetes-management,
found; https://diabetes.org/newsroom/statement-fda-warning-diy-diabetes-devices, found).
`DESIGN_NOTES.md` open question 3 leaves GDPR versus HIPAA open; `CLAUDE.md` notes the website
collects no personal data, which settles it for the site and not for missions. Conclusion: name
the floor. "GDPR Article 9 treatment for all health data wherever the person lives, HIPAA
Security Rule safeguards where protected health information is touched, and no mission ships
software that dosing decisions depend on without saying which device regulation applies" is
testable; "strictest applicable" is not.

**"We stand on neutral ground."** The ICRC's principle: "the Movement may not take sides in
hostilities or engage at any time in controversies of a political, racial, religious or
ideological nature," adopted unanimously in Vienna on October 8, 1965
(https://www.icrc.org/en/document/fundamental-principles-red-cross-and-red-crescent and
https://blogs.icrc.org/cross-files/the-fundamental-principles-of-the-international-red-cross-and-red-crescent-movement/).
MSF's charter says it "observes neutrality and impartiality in the name of universal medical
ethics" (https://www.msf.org/msf-charter), and MSF also practises témoignage, "raising
awareness, either in private or in public, about what we see," including to "denounce abuse"
(https://www.msf.org/how-we-work). So the two best-known neutral actors disagree about whether
neutrality means silence. HOT states the four humanitarian principles (humanity, neutrality,
impartiality, independence) and then, on May 9, 2022, suspended all mapping in Ukraine because
the local community believed OSM data "was being used by military actors to harm the
population," concluding that "the protection of populations from direct harm resulting from our
activities takes precedence" (https://www.hotosm.org/en/news/mapping-in-conflict/). HOT's Ivan
Gayton put the problem plainly: if your job is to run an artillery campaign, "what better gift
could someone give you than daily feedback on how your campaign is going?"
(https://restofworld.org/2022/ukrainians-osint-maps-russia/, found). On "verification and early
warning" specifically: Hala Systems' Sentry warned civilians of airstrikes in northwest Syria
(Idlib, https://www.overtureglobal.io/story/early-airstrike-warning-system-helps-save-syrian-lives),
reached over 2.3 million people in 2017 to 2018
(https://www.nesta.org.uk/feature/collective-crisis-intelligence-case-studies/sentry-syria/),
and lists the UK Foreign and Commonwealth Office, Global Affairs Canada, the Dutch and Danish
ministries, the German Federal Foreign Office and the EU as supporters
(https://www.halasystems.com/). A system that warns one side's civilians about the other side's
aircraft, funded by governments opposed to that other side, is humanitarian and impartial in
the needs-based sense and is not neutral in the ICRC sense, and partisan outlets said so
(https://www.mintpressnews.com/white-helmets-hala-systems-militarization-humanitarianism-syria/262115/,
found; low-reliability source, cited only as evidence that the accusation gets made).
Conclusion: neutrality is a property of who deploys a tool and to whom, not of the code. "We do
not take sides" cannot be promised by a group that builds early-warning tools. What can be
promised is impartiality (needs-based selection), a harm assessment before any conflict-zone
data work, and HOT's rule that protecting people from harm caused by the mission's own data
comes first.

**The lapsed rule and honor-system verification.** Precedents that report or lapse: the Open
Source Pledge requires a new public post each year and lists former members, four of 47 within
two years (https://opensourcepledge.com/join/ and https://opensourcepledge.com/members/). The UN
Global Compact marks participants "Non-Communicating" if they miss the July 31 report deadline
and delists them publicly on January 1 if they have not reported by December 31; delisted names
are published
(https://www.consultancy.eu/news/13764/submitting-the-communication-on-progress-to-the-ungc-questions-and-answers);
the running total of delisted participants is 20,797
(https://unglobalcompact.org/participation/report/cop/delisted). The Science Based Targets
initiative removed 239 companies' net-zero commitments on March 7, 2024 for missing the deadline
to set targets, 60% of which had near-term targets
(https://sciencebasedtargets.org/blog/final-campaign-evaluation-report-published); Microsoft
published a public response
(https://blogs.microsoft.com/on-the-issues/2024/03/14/on-science-based-targets-initiatives-removal-of-net-zero-commitment/,
found). The failure modes these show: self-report inflates (Pledge 1%'s 82% comes from 228
respondents out of 8,000+ contacted, and even that is "say they are actively working"); silent
attrition is the norm (GWWC's 30% at five years); the lapse check needs an owner and a date, or
nobody runs it; and a large lapsed member will contest the label in public. Specific to ODH: 18
months means a badge can be shown for six months after a report is overdue; individuals cannot
lapse because they never report; `PLEDGE.md` lets stewards "add a note confirming or
questioning" a contribution, which is a conflict of interest when the steward is employed by the
organization being questioned, and organizations are the ones who fund stewards (Principle 8).

## 3. Fact-check of DESIGN_NOTES.md

| Claim in DESIGN_NOTES.md | Verdict | What the sources say |
|---|---|---|
| Agile Manifesto (2001) is four value pairs plus twelve principles | Correct | https://agilemanifesto.org/ and https://agilemanifesto.org/principles.html |
| "has never been revised" | Correct | Text unchanged since February 2001; 2001 copyright notice, https://agilemanifesto.org/history.html |
| "is signed publicly" | Out of date | Signatures were collected from October 2001 to July 2016 and stopped; the list is a public archive, not an open form, https://agilemanifesto.org/display/index.html and https://martinfowler.com/bliki/AgileSignatory.html |
| Mozilla Manifesto (2007): principles, then a pledge from the foundation, then an invitation | Correct | Details page has principles, "Pledge for a Healthy Internet," and "We Need You To Advance the Manifesto," https://www.mozilla.org/en-US/about/manifesto/details/ |
| Stated goals: speak to non-technical people, make contributors proud, give others a framework | Correct, one goal omitted | The four goals include "articulate a vision" first; the other three are as stated, same URL |
| Mozilla is unrevised (implied by "short, unrevised, signable" heading) | Wrong for Mozilla | Designated 0.9 in 2007, a 1.0 process in 2013, an addendum announced March 29, 2018, https://mitchellbaker.net/2013/04/mozilla-manifesto-towards-1-0/ and https://blog.mozilla.org/blog/2018/03/29/mozilla-marks-20th-anniversary-commitment-better-human-experiences-online/. Also not signable |
| Open Source Pledge: $2,000/dev/year, enforced only by a yearly public post, non-posters stop being members | Correct | "$2000 per year per full-time equivalent developer"; "publish a new post at some point each year"; four former members listed, https://opensourcepledge.com/about/, https://opensourcepledge.com/join/, https://opensourcepledge.com/members/ |
| "Pledge 1% works the same way" (report or lapse) | Wrong | "We do not formally audit or require reports to participate," https://www.pledge1percent.org/how-it-works/ |
| Pledge 1% "grew past 19,000 companies" | Correct, now 20,000 | https://pledge1percent.org/ |
| Survey found "82% actively fulfilling pledges and time the most popular pledge type" | Overstated | 82% "say they are actively working to fulfill their pledge," from 228 responses out of more than 8,000 members contacted (about 3%); time is the most popular type, https://www.pledge1percent.org/insights-from-pledge-1-member-survey/ |
| Google 20% time: "roughly 10% of engineers used it consistently" | Sourced but misquoted | Laszlo Bock, Work Rules! (2015): "Only about 10% of Googlers are using it, last time the company checked," and "the idea of 20 percent time is more important than the reality of it." Googlers, not engineers; no word "consistently," https://sg.finance.yahoo.com/news/truth-google-famous-20-time-170219584.html |
| "eventually throttled by requiring manager approval" | Contested press claim | Quartz (August 2013) reported approval was required and discouraged; Googlers disputed it publicly ("requires no manager approval"), https://www.infoq.com/news/2013/08/google-20-time; original at https://qz.com/115831/googles-20-time-which-brought-you-gmail-and-adsense-is-now-as-good-as-dead (found, not fetched) |
| 20% time was "too large a bite" | Interpretation, not in the sources | Bock's explanation is different; the origin is the 2004 IPO letter, https://abc.xyz/investor/founders-letters/ipo-letter/ |
| "Atlassian kept its version alive by letting each team choose one day a week or one week a quarter" | Unsourced; the specifics do not match | Atlassian's 2008 experiment ($1M, 70+ engineers) delivered "1.1% Time" (34 people, 48 projects, 248 days) in its first year, with scheduling negotiated per team, https://www.atlassian.com/blog/blog/archives/atlassians_20_time_a_year_in_review. The October 2008 rules: over 5 days needs three developer supporters, over 10 days needs founder sign-off, https://www.atlassian.com/blog/archives/atlassians_20_time_now_out_of_beta-2. One security team runs "1 week every 5 weeks" (2021), https://community.atlassian.com/forums/Trust-Security-articles/Innovation-Week-Atlassian-Security-Team-s-20-Time-Ritual/ba-p/1714481. The company-wide program is ShipIt, a quarterly 24-hour hackathon that grew to 300 teams and 1,000+ people and produced Jira Service Desk, https://web.stanford.edu/dept/gsb-ds/Inkling/Atlassian_Scaling_Innovation/ops/s9ml/chapter01/reader_22.xhtml |
| "One-off hackathons produce demos, not products" | Opinion, with a counter-example | Jira Service Desk came out of ShipIt (same Stanford source). Atlassian's own finding was that hackathons plus normal product process shipped, and unstructured 20% did not |
| Code for America brigade network, "70+ volunteer chapters," was sunset | Roughly right | 77 brigades and 25,000 people in 2018 (https://codeforamerica.org/news/strengthening-the-national-brigade-network/); about 60 groups when CfA announced the end of fiscal sponsorship in February to March 2023 (https://statescoop.com/code-for-america-local-brigades-ending/ and https://codeforamerica.org/news/reflections-on-the-brigade-networks-next-chapter/). CfA's stated reasons: volunteerism down, privacy and security concerns, harder to raise multi-year funding, mission tension |
| Hack for LA "150+ meetings a month, its own volunteer-retention tooling" | Plausible, thinly sourced | hackforla.org refused the fetcher; the search excerpt of its homepage reads "attending over 150 meetings every month"; VRMS exists (https://github.com/hackforla/VRMS); Hack for LA continues under Civic Tech Structure, Inc. (https://www.hackforla.org/, found). "Survived by running like an organization" is the author's inference |
| DPGA is "UN-endorsed"; DPG definition as quoted | Correct | The Secretary-General's Roadmap for Digital Cooperation calls for "open source software, open data, open AI models, open standards and open content" that "adhere to privacy and other applicable laws and best practices, do no harm, and help attain the SDGs," https://www.un.org/en/content/digital-cooperation-roadmap/ |
| "nine-indicator standard maintained on GitHub" | Correct, with a wrinkle | Nine indicators, 9 has sub-indicators 9a to 9c; CHANGELOG is at 1.1.7 (2025-06-26) while standard.md's header still says 1.1.4 (2021), https://github.com/DPGAlliance/DPG-Standard/blob/main/CHANGELOG.md |
| Hippocratic License "not recognized as open source by the OSI because they restrict fields of use" | Correct in substance | OSD clauses 5 and 6 (https://opensource.org/osd); OSI co-founder Bruce Perens' September 23, 2019 post (https://perens.com/2019/09/23/sorry-ms-ehmke-the-hippocratic-license-cant-work/, found, not fetched; summarized in https://www.dwt.com/insights/2020/03/ffos-ethical-source-licenses). The HL3 site does not claim OSI approval (https://firstdonoharm.dev/). No formal OSI license-review decision was found, so "not recognized" is accurate and "rejected" would not be |
| "they deter corporate contributors" | Plausible, unsourced | Law-firm commentary discusses corporate risk (DWT above); no adoption data cited |
| "DPGA now requires datasets to be fully openly licensed; mixed licensing is no longer accepted" | Correct | Effective September 1, 2024; existing DPGs must re-license or lose status, https://www.digitalpublicgoods.net/blog/enhancing-openness-and-usability-of-digital-public-goods-by-accepting-only-fully-open-licensed-content-collections-and-data-sets |
| "#WeAreNotWaiting community (2013) produced OpenAPS and Loop" | Correct | Hashtag coined at the DiabetesMine D-Data ExChange, Stanford, November 2013 (https://ddataexchange.com/about/, found; https://www.diabetes.co.uk/blog/2016/07/the-wearenotwaiting-movement-is-helping-people-with-diabetes-improve-their-health-now-not-later/, found); OpenAPS by Lewis, Leibrand and West from December 2014 (https://openaps.org/) |
| "several thousand people with type 1 diabetes use open-source artificial pancreas systems worldwide" | Correct | 3,262+ self-reported as of March 26, 2024, "likely larger" (https://openaps.org/outcomes/); "several thousand active users worldwide" (Lancet Diabetes & Endocrinology, January 2022, https://kclpure.kcl.ac.uk/portal/en/publications/open-source-automated-insulin-delivery-international-consensus-st/) |
| "clinics have adopted them because outcomes were good and costs lower than commercial options" | Overstated | The 2022 consensus gives clinicians guidance for supporting people who choose these systems; that is support, not adoption. The CREATE trial (NEJM 2022) showed efficacy (https://openaps.org/outcomes/). DIY systems remain unauthorized in the US (FDA, May 16, 2019); the cleared product is Tidepool Loop (January 24, 2023). Cost claims in the literature are "potentially more cost-effective" (https://www.nature.com/articles/s41746-019-0202-1, found), not measured savings |
| "AndroidAPS is AGPL-3.0 with 4,000+ forks" | Correct, understated | AGPL-3.0, 6.2k forks, https://github.com/nightscout/AndroidAPS |
| Source given: nightscout.github.io/nightscout/close_loop/ | Weak source | That page is a settings guide and contains no history or user counts, https://nightscout.github.io/nightscout/close_loop/ |
| GitHub MVG: two-tier model, "defaults to the Contributor Covenant and OSI-approved licenses," foundation "when your organization begins holding money" | Mostly correct | Two tiers and Contributor Covenant 2.0 confirmed; the licence template suggests MIT and says "Choose a license"; the quote is "typically when your organization begins holding money," https://github.com/github/MVG |
| "We adopted it nearly verbatim" | Overstated | GOVERNANCE.md is 442 words with its own voting rules; MVG is a set of charter and policy files. "Adapted from" (GOVERNANCE.md's own wording) is right |
| Tides "hosts Pledge 1%" | Correct | Fiscally sponsored project since April 12, 2016, https://www.tides.org/project/fiscally-sponsored-project/pledge-1-2/ (found) |

Things `DESIGN_NOTES.md` should also carry, since the rules rest on them: Salesforce's 7 paid
VTO days per year as the corporate-time precedent; GWWC's 30%-at-five-years figure as the honest
baseline for any individual pledge; and the Open Collective Foundation and Code for America
fiscal-host collapses as the reason the legal home cannot wait.

## 4. Recommendations

### (a) Edits to the manifesto text

1. Split the text into a short core and a details page. Keep the opening, the six value pairs
   and the Join section as the manifesto (about 250 words, comparable to Agile's 279). Move the
   commitments and principles, merged into one list, to a "Principles" page. Rationale: every
   lasting manifesto separates the memorable part from the rulebook; the current 27 items are
   too many to sign.
2. Merge each commitment with the principle that restates it (table in section 2) so the list
   is at most ten items. Keep Principles 5, 8, 9 and 11, which are the only ones adding content.
3. Change "No one owns it. Everyone may use it. No pledge, no license, no contract can take it
   back" to "Everyone may use it, forever. The licences we use cannot be revoked." Rationale:
   copyright has owners; what is irrevocable is the grant (Apache-2.0 section 2), and DPG
   indicator 3 requires clear ownership.
4. Rewrite Principle 7 as a future-tense promise with a present-tense fact: "Names, marks and
   repositories will be held by a non-profit home the movement chooses, never by a member
   company. Until then they are owned by the named people in `GOVERNANCE.md`." Rationale:
   section 2, trademarks, MVG, and the two fiscal-host collapses.
5. Add an employer sentence to Commitment 1 or `PLEDGE.md`: "If your day comes from an
   employer's time, your employer pledges with you and authorises the licence. If it comes from
   your own time, say so." Add to the organizational pledge post template: "We authorise our
   employees to contribute work done on pledged days under the mission's licence." Rationale:
   17 U.S.C. 101, the DCO clause (a), Apache's CCLA, Google's IARC rule.
6. Name the health-data floor in Principle 5: "Health data is handled to GDPR Article 9
   standards wherever the person lives, with HIPAA Security Rule safeguards where protected
   health information is touched, and every mission states which medical-device rules apply to
   what it ships." Rationale: "strictest applicable" is untestable; GDPR and HIPAA differ in
   scope; the FDA 2019 warning shows device law is the binding one for the founding mission.
7. Replace "can veto direction" in Principle 6 with a defined mechanism, for example: "hold a
   blocking vote on a mission's scope, its use of data, and any release to the people it
   serves. A block is resolved by the Steering Circle within 30 days." Then add the same text to
   `GOVERNANCE.md` section 3 and `MISSION_TEMPLATE.md` section 3. Alternatively drop the veto and
   require that affected people are maintainers with merge rights, which is how OpenAPS and
   Nightscout actually work. Rationale: section 2, veto.
8. Rewrite Principle 11 around the four humanitarian principles and drop "we do not take
   sides." Suggested: "We are impartial: we choose conflict work by need, not by side. Before
   any mission touches conflict data we ask who it could harm, and protecting people from harm
   caused by our own work comes first." Rationale: ICRC, MSF, HOT's Ukraine decision, Hala
   Systems.
9. Align Principle 1 with `PLEDGE.md` and `SIGNATORIES.md`: either individuals re-sign each year
   (add a "Renewed" column) or the manifesto says "organizations report and renew every year;
   individuals are counted by the days they log." Rationale: consistency item 1.
10. Align Principle 3 with `GOVERNANCE.md` on pausing (immediately versus 60 days) and state all
    reporting cadences in one sentence: quarterly mission report, annual organization post,
    quarterly accounts.
11. Change Principle 9 to "A share of every mission's days, one in four by default, goes to
    keeping earlier work alive." Rationale: matches `MISSION_TEMPLATE.md` 11 and is countable.
12. Narrow or widen the relicensing promise so Principle 7 and `GOVERNANCE.md` section 5 say the
    same thing. Decide, and say, whether the default licence is permissive (Apache-2.0, allows
    proprietary forks) or copyleft (AGPL-3.0, as AndroidAPS chose). "No vendor lock" is only true
    under copyleft.
13. Replace "nobody asked, and nobody built the door" with a sentence that names predecessors
    and what ODH does differently, in the manner of the README table. Suggested: "Others have
    asked. Pledge 1% counts 20,000 companies and its most common pledge is time. Most of that
    time is scattered and unreported. We pool it into missions and publish what came of it."
    Rationale: credibility with the people who already run those doors.
14. Cut "This is the door," "We are the ones who do," and "enough to move the world." Keep
    "Enthusiasm is not a plan" and "in the same place, in the same font." Rationale: the ones
    kept are checkable.
15. Align Commitment 4 with `CONTRIBUTING.md`: "merged, reviewed, tested, or learned."
16. Add one plain-language gloss where the jargon is unavoidable, or a link to a short glossary:
    for "OSI-approved license," "Digital Public Goods Standard," "merged," "backlog." Rationale:
    Mozilla's second goal; `CONTRIBUTING.md` says many days need no code.
17. Rewrite the Join section for the web page rather than the repository: "Individuals: sign at
    onedayforhumanity.org/sign. Organizations: publish your pledge post, then sign." Keep the
    file paths in the README. Rationale: a manifesto that names `SIGNATORIES.md` dates itself
    and excludes non-git readers.
18. Add a changes line under the version: "Changes to this text: two-thirds of the Steering
    Circle after 30 days of public comment. Until the Circle exists, the founding stewards named
    in `GOVERNANCE.md` decide, in public, on the pull request." Rationale: consistency item 10.
19. Keep CC BY 4.0 but add the Agile-style norm: "Copy it whole. If you change it, say so, and
    do not call the result the One Day for Humanity manifesto." Rationale: CC BY 4.0 section
    3(a)(1)(B) already requires indicating modifications; the naming norm protects the canon
    without a trademark.
20. Make the value pairs bare, like Agile's: drop the explanatory clause from "Continuity over
    intensity" and put the explanation on the details page.
21. Fix the README claims that outrun the notes: "about 10% of engineers" should be "about 10%
    of Googlers, by Google's own account"; "Cash pledges fund stewards" should say cash is
    optional until open question 1 is closed.

### (b) How the manifesto page on the website should work

What exists: `web/manifesto/index.html` renders `MANIFESTO.md` at build time through a Vite
plugin that gives every heading a GitHub-style id, points relative `.md` links at the
repository, and appends a signing panel with two buttons (edit `SIGNATORIES.md`, edit
`MANIFESTO.md`) and a footer line "Version 0.1 · Draft for public comment · CC BY 4.0 · Source on
GitHub" (`web/vite.config.ts`, `web/src/pages/ManifestoPage.tsx`). The CSP forbids inline
scripts and styles and the site has no backend (`web/public/staticwebapp.config.json`,
`CLAUDE.md`). All of the following fits inside those constraints.

**Signing flow.** Keep the pull request as the record; it is the movement's DCO culture and it
collects no personal data server-side, which `CLAUDE.md` gives as the reason the GDPR question
does not arise for the site. Lower the friction the way the precedents did. Agile asked for
exactly three fields, "a name, a URI, and a short statement," and one person audited them
(https://martinfowler.com/bliki/AgileSignatory.html). Cluetrain showed name, title, organization
and statement (https://www.cluetrain.com/signers.html). The Open Source Pledge joins through a
GitHub issue with a fixed template rather than a PR (https://opensourcepledge.com/join/).
Recommended: a "Sign" button that opens a prefilled GitHub issue form (name, cadence, optional
URL, optional one-line statement, a checkbox "my employer has agreed" or "this is my own time");
a maintainer or a small Action converts approved issues into one-line PRs to `SIGNATORIES.md`.
Non-git readers can then sign without learning to fork. Show the signatories on the page, built
from `SIGNATORIES.md` at build time (the same plugin can parse the tables), with organizations
first, individuals second, and "Lapsed" as a visible third list rather than a footnote, which is
the UNGC rule of publishing delisted names
(https://www.consultancy.eu/news/13764/submitting-the-communication-on-progress-to-the-ungc-questions-and-answers).
Record the manifesto version each signature was made against, as a column.

**Versioning and changelog.** Add `version` and `date` to the top of `MANIFESTO.md` and a
`CHANGELOG.md` in the DPG Standard's format
(https://github.com/DPGAlliance/DPG-Standard/blob/main/CHANGELOG.md). Keep every released version
at a permanent URL, `/manifesto/v0.1/`, `/manifesto/v1.0/`, with `/manifesto/` always the
current one, as the Contributor Covenant does with `/version/3/0/`
(https://www.contributor-covenant.org/version/3/0/code_of_conduct/). Show a "Changed since you
signed" notice by comparing the version column in `SIGNATORIES.md` with the current version.
After 1.0, change by addendum rather than edit, as Mozilla did in 2018 and GNU did with
footnotes; before 1.0, follow Mozilla's 0.9 approach and use the first translations as the test
of the wording.

**Translations.** Put translations at `/<lang>/manifesto/` (Mozilla's `/de/about/manifesto/`) or
`/iso/<code>/` (Agile's scheme), sourced from `i18n/MANIFESTO.<code>.md` files contributed by
pull request. Each translation carries the version it translates and a line "translation of
v0.1; English is canonical," which is how Contributor Covenant lists translations per version
(https://www.contributor-covenant.org/translations/). Credit translators in the file; Agile's
uncredited 70 languages are the one thing about that site nobody copies. The self-hosted fonts
already keep Cyrillic, Greek and Vietnamese subsets for this reason (`CLAUDE.md`).

**Permalinks per principle.** The plugin gives ids to headings only; the commitments and
principles are list items, so `#we-commit` exists and `#principle-6` does not. Render each
numbered item with an id (`#commit-1`, `#value-3`, `#principle-6`) and a hover anchor, matching
Mozilla's `#principles-01` to `#principles-10` and `#commitment-01` to `#commitment-04`
(https://www.mozilla.org/de/about/manifesto/). If recommendation 1 is taken and principles
become headings on their own page, the existing slug function does this for free. Keep ids
stable across versions so links in pledge posts do not break.

**Print and PDF.** Add a `@media print` stylesheet that drops the header, the signing panel and
the footer and prints the version and URL in the page footer. Generate a PDF in CI from the
built page (headless Chromium in the `build` job) and publish it at `/manifesto/v0.1.pdf` so the
file matches the text by construction, the same reason the page is rendered from the Markdown
at build time. None of the precedents offers a PDF; Agile relies on people printing the page,
and the GNU Manifesto is offered in several formats by the FSF. A signed, dated PDF per version
is what an organization will attach to its pledge post.

**Two more things the page should say.** First, who decides on proposed changes during v0.x
(edit 18), next to the "Propose a change to the text" button. Second, a line under the version
telling organizations that the badge in `PLEDGE.md` is tied to the "Latest report" column, so
the lapse rule is visible at the point of signing. Both are copy changes in `MANIFESTO.md` and
`web/src/pages/ManifestoPage.tsx`, not new features.

### Files referenced

`MANIFESTO.md`, `DESIGN_NOTES.md`, `PLEDGE.md`, `GOVERNANCE.md`, `README.md`, `SIGNATORIES.md`,
`CONTRIBUTING.md`, `MISSION_TEMPLATE.md`, `CLAUDE.md`, `web/vite.config.ts`,
`web/src/pages/ManifestoPage.tsx`, `web/src/content/site.ts`,
`web/public/staticwebapp.config.json`.
