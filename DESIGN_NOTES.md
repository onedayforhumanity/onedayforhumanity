# Design notes: the research behind the rules

Every rule in the manifesto, the principles, and the governance exists because something
before us broke without it. The longer research these notes draw on is in `research/`.

## Manifesto form

- **Short, frozen, on two pages.** The Agile Manifesto (2001) is four value pairs on one page
  and twelve principles on another. The text has never been revised. It was signed publicly
  from October 2001 until the list closed in 2016. Its "X over Y" pairs work because they
  force a choice instead of listing virtues. We copied the two-page form and the pairs, not
  the words. Sources: https://agilemanifesto.org · https://martinfowler.com/bliki/AgileSignatory.html
- **Vision, pledge, invitation.** The Mozilla Manifesto (2007) states principles, then a pledge
  from the foundation to act on them, then an invitation to others. Its stated goals:
  articulate a vision, speak to people without a technical background, make contributors
  proud, give others a framework. It carried a 0.9 label in 2007, went through a 1.0 process in
  2013 with translation into 35 languages as the test of the wording, and gained an addendum in
  2018 rather than a rewrite. It is not signable. We use the same three-part arc and the same
  habit of changing by addendum once the text settles.
  Sources: https://www.mozilla.org/about/manifesto/details/ · https://mitchellbaker.net/2013/04/mozilla-manifesto-towards-1-0/
- **A public annual report as the enforcement mechanism.** The Open Source Pledge asks companies
  for $2,000 per developer per year and enforces it only through a yearly public post; a company
  that stops posting is listed as a former member. The UN Global Compact goes further and
  publishes the names it delists. Pledge 1% does neither: it says "We do not formally audit or
  require reports to participate" and that its goal is to "inspire, educate and empower rather
  than certify or regulate." We took "report or lapse" from the first two, not the third.
  Sources: https://opensourcepledge.com/about/ · https://unglobalcompact.org/participation/report/cop/delisted · https://www.pledge1percent.org/how-it-works/

## Why "any cadence counts"

Pledge 1% grew past 20,000 companies on a deliberately small, flexible ask. Its December 2024
member survey, 228 responses from more than 8,000 members contacted, found 82% saying they were
actively working to fulfill their pledge, with time the most popular thing to pledge. Google's
20% time, by contrast, was used by "only about 10% of Googlers, last time the company checked,"
in Laszlo Bock's account; Bock's own view was that the idea of it mattered more than the
reality. Atlassian's 2008 experiment with 20% time delivered what it called "1.1% time" in its
first year (34 people, 48 projects, 248 days); the program that lasted was ShipIt, a quarterly
24-hour hackathon that produced Jira Service Desk. Salesforce gives every employee seven paid
volunteer days a year. The lesson we took: a small, countable, recurring ask outlives a large,
unstructured one.

Giving What We Can's 10% pledge, the best-instrumented individual pledge we found, has about
30% of pledgers still recording donations five years in. That is the honest baseline for any
individual pledge, and it is why organizations, not individuals, carry the annual report.

Sources: https://www.pledge1percent.org/insights-from-pledge-1-member-survey/ ·
https://sg.finance.yahoo.com/news/truth-google-famous-20-time-170219584.html ·
https://www.atlassian.com/blog/blog/archives/atlassians_20_time_a_year_in_review ·
https://www.salesforce.com/company/philanthropy/employee-volunteering-giving/ ·
https://www.givingwhatwecan.org/impact/2023-2024-impact-evaluation

## Why missions have stewards and day-sized backlogs

Unstructured time evaporates (Google). Hackathons produce demos: a 2020 study of Devpost
projects found only about 5% continued beyond five months. Code for America named the failure
mode itself in 2021: "a budding solutions engineer shows up to a Brigade weekly hack night, but
there are no active projects for their skills." Two years later it sunset a network of about 60
brigades (77 at the 2018 peak, with 25,000 volunteers), saying it could not raise the multi-year
funding to staff it. GitHub built its Digital Public Goods community manager program on the
finding that maintainers find it "too time consuming to find, vet and onboard potential
contributors." Hack for LA continues, and runs like an organization, with guided onboarding
before any role is offered. The conclusion: continuity needs a named, ideally funded, steward
and a backlog anyone can pick up on a Friday. It is also why we list no mission without a
steward, and why the founding mission is a proposal until it has one.

Sources: https://dl.acm.org/doi/10.1145/3415216 ·
https://codeforamerica.org/news/a-new-vision-for-the-code-for-america-network/ ·
https://codeforamerica.org/news/reflections-on-the-brigade-networks-next-chapter/ ·
https://socialimpact.github.com/tech-for-social-good/dpg-open-source-community-manager-program ·
https://www.hackforla.org/join

## Why open source, and why OSI licenses specifically

- The Digital Public Goods Alliance (UN-endorsed) defines digital public goods as open-source
  software, open data, open AI models, open standards, and open content that follow privacy best
  practices, do no harm, and serve the SDGs. They are assessed against a nine-indicator standard
  maintained on GitHub. Adopting it gives us an external, credible bar. Indicator 3 requires
  clear ownership of what a project produces, which is why the principles say the licenses
  cannot be revoked rather than that nobody owns the output.
  Source: https://github.com/DPGAlliance/DPG-Standard
- "Ethical" licenses such as the Hippocratic License are attractive for a humanity-focused
  movement, but the OSI does not recognize them as open source because they restrict fields of
  use. We keep ethics in mission selection and governance, not in the license.
  Sources: https://opensource.org/osd · https://firstdonoharm.dev/
- The DPGA requires datasets to be fully openly licensed since September 2024; mixed licensing
  is no longer accepted. That is why the data plan is mandatory in the mission template.
  Source: https://www.digitalpublicgoods.net/blog/enhancing-openness-and-usability-of-digital-public-goods-by-accepting-only-fully-open-licensed-content-collections-and-data-sets

## Why diabetes is the proposed founding mission

The #WeAreNotWaiting hashtag was coined at the DiabetesMine D-Data ExChange in November 2013.
OpenAPS followed in December 2014, and Loop, AndroidAPS, Trio, and Nightscout grew around it.
As of March 2024 more than 3,262 people had self-reported using an open-source automated
insulin delivery system, and the 2022 international consensus in The Lancet Diabetes &
Endocrinology estimates several thousand active users worldwide and gives clinicians guidance
for supporting them. The CREATE trial (New England Journal of Medicine, 2022) found the open
algorithm gave users 3 hours 21 minutes more time in range per day. AndroidAPS is AGPL-3.0 with
more than 6,000 forks. This is the existence proof that volunteer, GitHub-hosted work changes
lives in exactly the domain the movement cares about.

Two constraints follow. These systems are not authorized medical devices: the FDA warned against
unauthorized devices for diabetes management in May 2019, and AndroidAPS explains that
distributing a build, even for free, is illegal under EU device rules, which is why every user
builds their own. No mission under this movement's name will ever distribute builds. And the
four main repositories carry no newcomer-labelled issues today; the first steward's first month
is grooming.

Sources: https://openaps.org/outcomes/ · https://pubmed.ncbi.nlm.nih.gov/34785000/ ·
https://www.nejm.org/doi/full/10.1056/NEJMoa2203913 · https://github.com/nightscout/AndroidAPS ·
https://www.fda.gov/news-events/press-announcements/fda-warns-against-use-unauthorized-devices-diabetes-management ·
https://androidaps.readthedocs.io/en/3.1/Getting-Started/FAQ.html

## Why governance is lightweight

GitHub's Minimum Viable Governance provides a two-tier model (a steering committee over
consensus-run projects), defaults to the Contributor Covenant and an OSI-approved license, and
is designed to be upgraded to a foundation "typically when your organization begins holding
money." We adapted it, adding the affected-community seat, the blocking vote, the
non-relicensing clause, and an interim clause for the time before the Steering Circle exists.

Two fiscal-host collapses shape the urgency of open question 2: Code for America ended
sponsorship of about 60 brigades in 2023, and the Open Collective Foundation, host to more than
600 collectives, dissolved at the end of 2024. Pledge 1% has been hosted by Tides since 2016.

Sources: https://github.com/github/MVG ·
https://statescoop.com/code-for-america-local-brigades-ending/ ·
https://opencollective.com/foundation/updates/announcement-we-are-dissolving-open-collective-foundation-at-the-end-of-this-year ·
https://www.tides.org/project/fiscally-sponsored-project/pledge-1-2/

## Why an employer clause

Under US law, work an employee does within the scope of employment belongs to the employer, and
the Developer Certificate of Origin has each contributor certify they have the right to submit
under the license. A salaried engineer contributing employer-owned code without authorization
certifies something false. Apache uses a corporate CLA for this; Google routes it through an
internal review; the Open Source Pledge avoids it entirely by moving cash rather than code. Our
answer is in the principles and the pledge: an employer's day is pledged with the employer's
authorization, and your own time is your own.

Sources: https://www.law.cornell.edu/uscode/text/17/101 · https://developercertificate.org/ ·
https://www.apache.org/licenses/contributor-agreements.html

## Open questions for the community

1. Should cash pledges be required (the Open Source Pledge model) or optional (our current draft)?
2. Who is the legal home: a new foundation, a fiscal sponsor such as Tides (which hosts
   Pledge 1%), or an existing open-source foundation?
3. The principles name GDPR Article 9 and HIPAA safeguards as the floor for health data. Which
   country's device rules bind a mission whose users are everywhere?
4. Should the "shared global day" be fixed (Fridays, say) or left to each mission?
5. How do we prevent purpose-washing beyond public reports? Audits, steward attestations?
6. Permissive or copyleft by default? Apache-2.0 allows proprietary forks; AndroidAPS chose
   AGPL-3.0 to prevent them. The principles promise no relicensing to a non-open license, which
   both allow. Anything stronger is only true under copyleft.
