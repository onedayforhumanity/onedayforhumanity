# Founding missions: research and a recommendation

*Research note, 6 September 2026. Written for the founder's question about the four missions
named in README.md and on the landing page: "Not sure that we should be that explicit yet, or
should we add more candidates?" This is a recommendation. Nothing in it has been applied to the
canon or the site.*

## The short answer

Be less explicit, not more. Name one founding mission, say plainly that it is a proposal
seeking a steward, publish the criteria a mission has to meet, and open a public nomination
process. Do not list the other three domains as missions, and do not add more.

The reason is the manifesto's own. Principle 3 says no mission without a steward. Principle 4
says work is cut into days. The manifesto says enthusiasm is not a plan. The README then lists
four "candidate founding missions", none of which has a steward, a repository, or a single
`one-day` issue, and tells newcomers to pick one. The readers the movement most wants, the
maintainers of the projects it names, are exactly the readers who will notice.

Method note. Repository figures below (license, stars, forks, open issues plus pull requests,
last push, "good first issue" counts) come from the GitHub REST API queried on 6 September 2026
unless a page URL is given instead. GitHub's `open_issues_count` includes open pull requests.
"Good first issue" counts are for open issues carrying exactly that label; projects that use
other newcomer labels are noted where found.

## 1. Each of the four named missions, assessed

### 1.1 Open diabetes technology

**State of the projects.** The `nightscout` GitHub organization describes itself as
"#WeAreNotWaiting Open Source, Open Data, Open Hearts", is a verified organization, and holds 39
repositories including the three that matter most (https://github.com/nightscout):

| Repo | License | Stars | Forks | Open issues + PRs | Last push | Good first issue |
|---|---|---|---|---|---|---|
| nightscout/cgm-remote-monitor | AGPL-3.0 | 2,814 | 73,345 | 154 | 2026-09-05 | 0 |
| nightscout/AndroidAPS | AGPL-3.0 | 1,168 | 6,193 | 350 | 2026-09-05 | 0 |
| nightscout/Trio | MIT | 378 | 2,085 | 116 | 2026-09-05 | 1 |
| LoopKit/Loop | MIT | 1,718 | 1,430 | 79 | 2026-09-05 | 0 |
| openaps/oref0 | MIT | 479 | 403 | 87 | 2026-07-18 | 0 |

The fork counts are inflated by design: users fork to build their own copy, because the projects
refuse to distribute binaries. Loop's README calls the app "highly experimental" and "not
approved for therapy" (https://github.com/LoopKit/Loop). Trio's README says it is "not CE or FDA
approved for therapy" and is backed by the Nightscout Foundation (https://github.com/nightscout/Trio).
oref0 says it is "not a set and forget system" (https://github.com/openaps/oref0). The Nightscout
project's Wikipedia entry reports the "CGM in the Cloud" Facebook group at over 39,000 members in
February 2026 (https://en.wikipedia.org/wiki/Nightscout).

**Evidence base.** The CREATE trial (NEJM, 8 September 2022) randomised 97 children and adults to
a modified AndroidAPS 2.8 running OpenAPS 0.7.0 versus sensor-augmented pump therapy, found
3 hours 21 minutes more time in range per day, and recorded no severe hypoglycaemia or DKA in
either arm (https://www.nejm.org/doi/full/10.1056/NEJMoa2203913, summary at
https://openaps.org/2022/09/08/news-nejm-publishes-rct-on-open-source-automated-insulin-delivery-using-openaps-algorithm/).
The Lancet Diabetes & Endocrinology consensus statement (Braune et al., January 2022) estimates
"several thousand active users worldwide" and gives clinicians practical guidance for supporting
them (https://pubmed.ncbi.nlm.nih.gov/34785000/). This is the strongest evidence base of any of
the four named areas.

**Regulatory and liability position.** The FDA warned in May 2019 against "unauthorized devices
for diabetes management", after a case report of an insulin overdose, stating that use "could
result in inaccurate glucose level readings or unsafe insulin dosing, which can lead to injury
requiring medical intervention or death"
(https://www.fda.gov/news-events/press-announcements/fda-warns-against-use-unauthorized-devices-diabetes-management;
ADA response at https://diabetes.org/newsroom/statement-fda-warning-diy-diabetes-devices). The
AndroidAPS FAQ explains why no APK is distributed: "Under current regulations in Europe, all
systems classed as IIa or IIb are medical devices that require regulatory approval (a CE mark)...
Distributing an unregulated device is illegal. This regulation is not restricted just to sales...
but applies to any distribution (even giving away for free). Building a medical device for
yourself is the only way to use the app within these regulations"
(https://androidaps.readthedocs.io/en/3.1/Getting-Started/FAQ.html). The regulated path exists
but belongs to others: Tidepool Loop received FDA clearance on 24 January 2023
(https://www.tidepool.org/blog/tidepool-loop-has-received-fda-clearance), Medtronic and Tidepool
later dropped their pump integration (https://www.tidepool.org/blog/tidepool-loop-development-update),
and the algorithm reached patients through Sequel's twiist pump, launched 7 July 2025 and
nationwide in the US from March 2026
(https://diatribe.org/diabetes-technology/fda-clears-twiist-automated-insulin-delivery-system;
https://www.globenewswire.com/news-release/2026/03/09/3251786/0/en/Sequel-Brings-twiist-Nationwide-Redefining-Automated-Insulin-Delivery-Category-with-Industry-First-Innovation.html).

What this means for the movement: contributors can write code under the existing project
licenses (MIT and AGPL carry no warranty), but a movement-branded organisation must never host
builds, publish APKs, or run a "we build it for you" service, or it becomes a device
distributor. Anything the movement produces in this area must go upstream to repositories the
existing communities own. A pharmacy case report on liability shows the same tension on the
clinical side (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12571788/).

**Backlog and onboarding.** Zero of the four main repos carry a "good first issue" label today.
The AndroidAPS "How to help" page says "Look at the issues and ask in the discord channel - there
is always a lot to do. Pick a small task at first and do your first pull request", and lists
non-code needs: graphic design, UX, translators, wiki editors, and answering questions on Discord
and Facebook "to allow developers the time and space to focus on the harder stuff"
(https://androidaps.readthedocs.io/en/latest/Getting-Started/How-can-I-help.html). AndroidAPS's
CONTRIBUTING.md says "Start small, it is easier to review smaller changes" and asks contributors
to talk on Discord before starting
(https://github.com/nightscout/AndroidAPS/blob/master/CONTRIBUTING.md). OpenAPS's "Ways to
contribute" page asks for fresh-install testing, documentation PRs, and issue reports
(https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/contribute.html).
Loop's wiki only describes the branch and PR mechanics and says a PR "will be merged by a user
with write access" (https://github.com/LoopKit/Loop/wiki). Conclusion: the work exists but is
not groomed. Nobody has cut it into days. Doing that grooming is exactly the steward's first job
under the mission template, and it is roughly a month of work for someone already trusted in
the community.

Friction is high for code and low for everything else. Loop and Trio need a Mac, Xcode, and an
Apple developer account. AndroidAPS needs Android Studio. Meaningful testing needs a pump, a CGM,
and a person willing to risk their own therapy. Nightscout (Node.js, MongoDB, React) needs none
of that and is the natural code entry point. Translation runs through Crowdin for both the app
and the docs (https://androidaps.readthedocs.io/en/latest/SupportingAaps/Translations.html).

**Would they welcome an outside movement?** The community asks for help in writing, so yes, for
individuals who coordinate first. The risk is review load. A handful of people with write access
already gate every change, and a wave of uncoordinated PRs from a pledge drive would cost them
time. The Trio project itself was born from a split with iAPS over "differing views on
development, open source, and peer review" (https://triodocs.org/help/faq/), which tells you how
seriously this community takes review and how quickly governance disputes become forks. The
Nightscout Foundation, a 501(c)(3) formed in 2014, funds Visionary Awards and conference travel
and runs a resource-request form for developers (https://www.nightscoutfoundation.org/about;
https://www.nightscoutfoundation.org/resource-request). Conclusion: this is the only one of the
four areas where a steward organisation already exists to partner with. The movement should not
steward these projects; it should ask the Nightscout Foundation or a named maintainer to steward
a mission that feeds them.

### 1.2 Open tooling for cancer research

The README describes this as "data pipelines, annotation tools, reproducible-analysis
infrastructure for labs that can't afford engineers." The concrete projects tell a different
story.

| Project | What | License | Stars | Open issues + PRs | Good first issue | Funder / maintainer |
|---|---|---|---|---|---|---|
| galaxyproject/galaxy | Workflow platform | MIT since 2026-02-25 | 1,850 | 2,820 | 0 | Galaxy community |
| cBioPortal/cbioportal | Cancer genomics portal | AGPL-3.0 | 1,031 | 325 | 20 | MSK and partners |
| OHIF/Viewers | DICOM web viewer | MIT | 4,316 | 550 | 0 (has "Community PR") | NCI ITCR grant to MGH |
| Slicer/Slicer | 3D imaging | BSD-style | 2,613 | 667 | 16 | Slicer community |
| Project-MONAI/MONAI | Medical imaging deep learning | Apache-2.0 | 8,653 | 537 | 1 (plus "Contribution wanted") | NVIDIA and academic partners |
| qupath/qupath | Digital pathology | GPL-3.0 | 1,435 | 32 | 0 | 3 named maintainers, Wellcome and CZI |
| nf-core/sarek | Germline and somatic variant calling | MIT | 599 | 297 | 1 | nf-core community |
| IARC-CSU/CanReg5 | Population cancer registry software for LMICs | GPL-3.0 | 36 | 30 | n/a | IARC (WHO) |
| d3b-center/OpenPedCan-analysis | Open paediatric cancer analyses | open, see repo | 27 | 3 | n/a | CHOP D3b, Alex's Lemonade Stand |

Sources: https://github.com/galaxyproject/galaxy and its license file
(https://github.com/galaxyproject/galaxy/blob/dev/LICENSE.txt), https://github.com/cBioPortal/cbioportal,
https://github.com/OHIF/Viewers, https://github.com/Slicer/Slicer, https://github.com/Project-MONAI/MONAI,
https://github.com/qupath/qupath, https://github.com/nf-core/sarek, https://github.com/IARC-CSU/CanReg5,
https://github.com/d3b-center/OpenPedCan-analysis.

Observations from these sources. cBioPortal asks anyone planning a feature to email or join its
Slack "for feature coordination" and is mid-migration to a ClickHouse-only v7
(https://github.com/cBioPortal/cbioportal). OHIF's funding is an NCI Informatics Technology for
Cancer Research grant to Massachusetts General Hospital, with NCI Imaging Data Commons funding
features (https://github.com/OHIF/Viewers). MONAI Label plugs into 3D Slicer, OHIF, QuPath, and
Digital Slide Archive (https://github.com/project-monai/monailabel). nf-core runs hackathons and
mentorship and sarek lists 50+ contributors (https://github.com/nf-core/sarek). OpenPedCan takes
analyses by pull request against issues that propose them, but its last push was July 2025
(https://github.com/d3b-center/OpenPedCan-analysis). OpenSAFELY, sometimes mentioned as open
health research infrastructure, states outright: "we aren't currently accepting external
contributions" (https://github.com/opensafely-core). Orthanc, the DICOM server that runs on a
Raspberry Pi and is common in small hospitals, dropped its contributor licence agreement in
February 2024 and is GPLv3+ (https://orthanc.uclouvain.be/book/faq/licensing.html;
https://pmc.ncbi.nlm.nih.gov/articles/PMC5959835/). GA4GH is a standards body whose "starter kit"
reference servers are the code entry point (https://github.com/ga4gh/ga4gh-starter-kit-beacon).

Conclusions. First, the mainstream cancer tooling is not starved of engineers; it is funded by
NCI, Wellcome, CZI, NVIDIA, and university groups, and newcomer-labelled backlogs are thin (20,
16, 1, 0, 0, 0, 0). A movement contributor would be a small fish in each. Second, the part of
this domain that matches "suffering reduced over attention" and "labs that can't afford
engineers" is elsewhere: CanReg5, the IARC registry software used to count cancer in low- and
middle-income countries (https://www.ncbi.nlm.nih.gov/books/NBK566958/), has 36 stars, zero open
PRs, and a last push of 18 August 2026; Orthanc for cheap imaging archives; OpenMRS oncology
workflows in clinics. Third, "cancer research tooling" has no definition of done, so it cannot be
a mission under the manifesto. Regulatory risk is lower than diabetes (research software is not
a device unless used for diagnosis), but data-protection risk is real wherever patient images or
genomes are touched. If the movement keeps this area at all, rename it to something a steward
could finish, such as "registry and imaging infrastructure for low-resource cancer services",
and recruit the steward from IARC, a hospital, or the Orthanc group first.

### 1.3 Humanitarian digital infrastructure

| Project | License | Stars | Open issues + PRs | Last push | Good first issue | Notes |
|---|---|---|---|---|---|---|
| hotosm/tasking-manager | BSD-2-Clause | 602 | 458 | 2026-09-04 | 3 | Also "outreachy" label; monthly collective meet-up |
| kobotoolbox/kpi | AGPL-3.0 | 181 | 565 | 2026-09-05 | 0 | "We're open for contributions" |
| getodk/central | Apache-2.0 | 223 | 471 | 2026-09-04 | 0 | Forum-first; "Ideas board" |
| medic/cht-core | AGPL-3.0 | 554 | 664 | 2026-09-04 | 3 | First Time Contributors Guide |
| bellingcat/auto-archiver | MIT | 1,112 | 11 | 2026-09-01 | n/a | 150,000 items preserved |
| ushahidi/platform | AGPL-3.0 per README | 725 | 19 | 2026-08-10 | 0 | Sporadic commits |
| sahana/eden | see repo | 30 | 6 | 2026-09-01 | n/a | Mostly one committer |
| signalapp/Signal-Android | AGPL-3.0 | 29,295 | 496 | 2026-09-04 | 0 | Features go to the forum first |

Sources: https://github.com/hotosm/tasking-manager, https://github.com/kobotoolbox/kpi,
https://github.com/getodk/central, https://github.com/medic/cht-core,
https://github.com/bellingcat/auto-archiver and
https://www.bellingcat.com/resources/2025/08/13/the-open-source-tool-that-has-preserved-150000-pieces-of-online-evidence/,
https://github.com/ushahidi/platform/commits/develop (commit clusters in July 2026, April 2026,
October 2025, and September to December 2024), https://github.com/sahana/eden/commits/master
(about 40 commits December 2025 to January 2026, almost all by one person),
https://github.com/signalapp/Signal-Android.

Scale of the mapping side. HOT's 2020 Audacious Project grant set the goal of one million
volunteers mapping places home to one billion people across 94 countries, on a base of 200,000
volunteers already engaged (https://www.audaciousproject.org/grantees/humanitarian-openstreetmap-team).
Missing Maps reports 188,000+ contributors, 108 million edits, and 66 million building edits as
of 5 September 2026, with members including IFRC, several Red Cross societies, MSF-adjacent
groups, HeiGIT, and YouthMappers (https://www.missingmaps.org/). The Sahana Software Foundation is
still a live 501(c)(3), but its 2024 revenue was $11,661
(https://www.causeiq.com/organizations/sahana-software-foundation,270596562/), and Eden ASP became
the main branch in May 2025 with a "loose community" in Germany, Sweden, and Poland
(https://sahanafoundation.org/eden/).

Conclusions. Mapping is the one activity in the entire survey where day-sized tasks already
exist by the tens of thousands, because the Tasking Manager splits areas into squares precisely
so a stranger can finish one in an afternoon. That is data work, which the pledge counts. Code
work on the humanitarian tools is a different matter: KoboToolbox and ODK want discussion first,
Ushahidi and Sahana are small core teams keeping the lights on, and Signal will take a bug fix
but not an unsolicited feature. "Verification tools" for conflict raise safety questions for
both the people mapped and the people mapping, which principle 11 (neutral ground) and
principle 5 (do no harm) both touch. A credible steward would be HOT itself, a Missing Maps
member, or Medic. As a domain label, "humanitarian digital infrastructure" is too broad to have
a definition of done.

### 1.4 Open AI for underserved health and languages

This bundles two different things.

**Languages.** Masakhane's flagship MT repo is MIT, says "NONE of the trained models are suitable
for production usage", and asks newcomers to join Slack, email leadership with their target
language, and start from a Colab notebook (https://github.com/masakhane-io/masakhane-mt). That
repo's last push was 14 June 2022, but the organisation is active: afriscience_mt was pushed in
June 2026 and masakhane-ner in October 2025 (https://github.com/masakhane-io). A 2025 talk summary
credits Masakhane with more than 400 models and more than 20 datasets
(https://ellisalicante.org/StudentTalks/2025-01-24-empowering-african-languages/), and AfricaNLP
2025 was its sixth workshop (https://sites.google.com/view/africanlp2025/home). Common Voice
remains CC0 and volunteer-driven; since October 2025 its datasets are distributed only through
Mozilla Data Collective, and Mozilla is piloting a community-centred licence for one language
community (https://www.mozillafoundation.org/en/common-voice/). AI4Bharat at IIT Madras runs
Bhashini's data unit toward 15,000 hours of transcribed speech across 22 languages, mostly under
CC or MIT licences (https://ai4bharat.iitm.ac.in/;
https://indicnlp.ai4bharat.org/static/documents/DMU_Data_Report_May_2022.pdf).

Licensing is contested in exactly the way the manifesto cannot absorb. Carnegie documents African
NLP researchers finding that datasets in African languages carried copyright held by foreign
companies (https://carnegieendowment.org/research/2024/04/how-african-nlp-experts-are-navigating-the-challenges-of-copyright-innovation-and-access).
The NOODL licence was drafted to keep African datasets usable by African researchers while
restricting others (https://infojustice.org/archives/46434), and Lanfrica lists licensing as a
barrier to dataset use (https://lanfrica.com/en/blog/licensing-as-a-barrier-to-the-usability-of-african-language-datasets).
The DPG Standard now requires AI systems to publish training data under Open Definition
licences, and the DPGA's own blog concedes this "could result in fewer AI systems meeting the
DPG Standard" (https://www.digitalpublicgoods.net/blog/ai-systems-as-dpgs; discussion at
https://github.com/DPGAlliance/DPG-Standard/issues/193; Creative Commons's argument at
https://creativecommons.org/2025/01/27/why-digital-public-goods-including-ai-should-depend-on-open-data/).
Conclusion: language data work is day-sized by nature (an hour of transcription, a review
session), but a movement whose rules say "fully open licence" would be taking a side in a live
dispute about who owns African language data. Principle 6 (the affected lead) means Masakhane's
community, not the movement, decides that.

**Health AI.** Ersilia Model Hub is GPL-3.0, a recognised DPG, and GitHub's blog reports 100+
developers and 10,000+ commits (https://github.com/ersilia-os/ersilia;
https://github.blog/open-source/social-impact/automating-open-source-how-ersilia-distributes-ai-models-to-advance-global-health-equity/).
It has 12 open issues and a clean model-request template, which makes it unusually approachable.
Meditron (EPFL with Yale and the ICRC) is Apache-2.0 with 2,210 stars, but its main repo's last
push was April 2024, with a successor "FullyOpenMeditron" corpus effort
(https://github.com/epfLLM/meditron;
https://ai.meta.com/blog/llama-2-3-meditron-yale-medicine-epfl-open-source-llm/;
https://github.com/EPFLiGHT/FullyOpenMeditron). Clinical decision support drifts toward
medical-device regulation the moment it advises a clinician, and the do-no-harm principle bites
hard here. Conclusion: this half is research-grade, expertise-heavy, and not groomable into days
for generalist engineers, with Ersilia as the exception.

## 2. Other candidate mission areas that fit the criteria

Twenty-plus projects, same lens. Figures from the GitHub API on 6 September 2026 unless noted.

| Project | Domain | License | Stars | Open issues + PRs | Good first issue | Onboarding notes | Day-sized fit |
|---|---|---|---|---|---|---|---|
| openmrs/openmrs-core | EMR, 6,500+ facilities, 80+ countries | MPL-2.0 with health-data clause | 1,909 | 289 | 0 on GitHub; "Ready For Work" intro issues in JIRA | GSoC org since 2007; 12 project ideas, 8 slots in 2025 | Good, with a mentor |
| dhis2/dhis2-core | National HMIS, 70+ countries | BSD-3 | 353 | 93 | 0 | Every PR needs a JIRA issue, two core approvals, submitted 2 months before a major release | Poor for drop-in code; good for apps and docs |
| Bahmni | Hospital EMR, 50+ countries | AGPL-3.0; CLA to OpenMRS Inc | 153 (bahmniapps) | 94 | n/a | Coalition since 2017; commercial licence ended Oct 2025 | Moderate |
| I-TECH-UW/OpenELIS-Global-2 | Lab systems, 25+ countries | MPL-2.0 | 251 | 447 | n/a | UW DIGI stewards; CDC funds; "actively welcomes new open-source contributors" | Moderate |
| medic/cht-core | Community health workers | AGPL-3.0 | 554 | 664 | 3 | First Time Contributors Guide; on For Good First Issue | Good |
| opencrvs/opencrvs-core | Civil registration, DPG | MPL-2.0 plus disclaimer | 120 | 1,126 | 0 | Structured PR flow; forum | Moderate |
| simpledotorg/simple-android | Hypertension, about 7M patients in 5 countries, DPG | MIT | 247 | 7 | n/a | Small tight team | Low volume |
| hotosm/tasking-manager | Humanitarian mapping | BSD-2 | 602 | 458 | 3 | Monthly meet-up; Outreachy | Code moderate; mapping excellent |
| ushahidi/platform | Crisis reporting | AGPL-3.0 | 725 | 19 | 0 | Small core; sporadic commits | Low |
| sahana/eden | Disaster management | see repo | 30 | 6 | n/a | One main committer; $11.7k revenue 2024 | Needs a rescue, not days |
| learningequality/kolibri | Offline education | MIT | 1,112 | 527 | 1 (label "help wanted") | Max two assignments; "we cannot guide contributors step by step"; no Windows dev | Moderate, self-directed only |
| oppia/oppia | Offline-friendly lessons | Apache-2.0 | 6,794 | 1,797 | 67 | Wiki onboarding, CLA | Excellent |
| openfoodfacts/openfoodfacts-server | Food transparency, 25,000+ data contributors | AGPL-3.0 | 1,149 | 1,835 | 43 | Weekly Monday meeting, Slack, Gitpod | Excellent |
| mWater | WASH data, 198 countries | LGPL-3.0 components only | 1,211 (minimongo) | n/a | n/a | Core platform not in public repos | Not open enough |
| nvaccess/nvda | Screen reader | GPL-2.0 modified | 2,630 | 2,218 | 61 | Contributing guide covers code, docs, add-ons, translation | Excellent |
| GNOME Orca | Linux screen reader | GPL | n/a | n/a | n/a | Igalia-funded; release 48.1 May 2025 | Moderate |
| OpenDyslexic | Font | SIL-OFL | n/a | n/a | n/a | Mostly one designer | Little code to do |
| signalapp/Signal-Android | Secure messaging | AGPL-3.0 | 29,295 | 496 | 0 | "pick a simple bug"; features to forum first | Low |
| Tor Project | Anonymity | mixed | n/a | n/a | "First Contribution" label on GitLab | Community portal | Moderate |
| ooni/probe-cli | Censorship measurement | GPL-3.0 | 289 | 49 | n/a | Volunteers mostly run probes | Data yes, code moderate |
| openclimatefix | Solar forecasting | MIT/Apache-2.0 | 154 (quartz) | 69 | Yes, with easy/difficult tags | Must request assignment; AI-tool policy | Good |
| emoncms/emoncms | Energy monitoring | AGPL-3.0 | 1,300 | 69 | n/a | Two lead devs ask you to talk first | Moderate |
| apache/fineract | Core banking for the unbanked | Apache-2.0 | 2,429 | 111 | 0 on GitHub (JIRA) | Quarterly releases, mailing list | Deep expertise |
| the-turing-way/the-turing-way | Open research practice handbook | CC-BY 4.0 | 2,175 | 608 | 77 | 576 contributors; Book Dashes | Excellent, non-code |
| masakhane-io | African language NLP | MIT/Apache | 323 (MT) | 35 | n/a | Slack, email, Colab | Data good; models deep |
| ersilia-os/ersilia | AI for drug discovery in the Global South, DPG | GPL-3.0 | 307 | 12 | 0 | Model-request template; 100+ devs | Good |
| bellingcat/auto-archiver | Evidence preservation | MIT | 1,112 | 11 | n/a | Discord, contribution guide | Good but small |

Sources beyond the API: OpenMRS GSoC
(https://talk.openmrs.org/t/openmrs-accepted-as-a-gsoc-2025-org-watch-our-getting-started-guide/45074),
DHIS2 contribution rules (https://developers.dhis2.org/community/contribute), DHIS2 reach
(https://en.wikipedia.org/wiki/DHIS2), Bahmni licence and CLA (https://www.bahmni.org/license-faq;
https://bahmni.atlassian.net/wiki/spaces/BAH/pages/740392961/Contributor+License+Agreement),
OpenELIS (https://openelis-global.org/about/), Simple (https://www.simple.org/about/), Kolibri
rules (https://learningequality.org/contributing-to-our-open-code-base/), Open Food Facts
contributors (https://openfoodfacts.github.io/), mWater (https://www.mwater.co/;
https://github.com/mWater), Orca (https://gitlab.gnome.org/GNOME/orca;
https://en.wikipedia.org/wiki/Orca_(assistive_technology)), OpenDyslexic
(https://github.com/antijingoist/opendyslexic), Tor (https://community.torproject.org/), OONI
(https://ooni.org/partners/tor-project/), Open Climate Fix (https://github.com/openclimatefix;
https://www.openclimatefix.org/community), emoncms (https://github.com/emoncms/emoncms), Fineract
(https://github.com/apache/fineract), The Turing Way
(https://github.com/the-turing-way/the-turing-way).

Two registries do the curation already. The DPG Registry lists 250 digital public goods across
software, data, AI, and content, each reassessed yearly
(https://www.digitalpublicgoods.net/registry). GitHub's "For Good First Issue" site lists DPG
repos with newcomer issues, currently featuring CHT, ODK Collect, the Open Food Facts app,
Nextcloud, Synapse, and others (https://forgoodfirstissue.github.com/; launch post at
https://github.blog/open-source/social-impact/for-good-first-issue-introducing-a-new-way-to-contribute/).

What the table says. The projects that would benefit most from recurring day-sized
contributions are the ones that already label work for newcomers and meet on a schedule: Open
Food Facts (43 labelled issues, weekly meeting), Oppia (67), NVDA (61), The Turing Way (77),
CHT, Open Climate Fix, cBioPortal (20), 3D Slicer (16), plus the two pure-data pipelines, HOT
mapping and Common Voice. The projects that need long-term deep expertise are the AID apps,
DHIS2 core, Fineract, MONAI, Signal, Galaxy, and every model-training effort. Two are not open
enough to qualify at all under the manifesto: OpenSAFELY refuses contributions and mWater's core
is not public.

## 3. How comparable movements handle mission selection and disclosure pre-launch

**Pledge 1%** launched on Giving Tuesday 2014 with four founding organisations (Atlassian, Rally,
the Salesforce Foundation, the Entrepreneurs Foundation of Colorado) and a single public target:
500 companies by the next Giving Tuesday. It named no causes then and names none now; it
describes itself as "a flexible foundational framework" and reports about 20,000 companies
(https://www.pledge1percent.org/about-us/; first-year result at
https://www.prnewswire.com/news-releases/more-than-500-companies-join-pledge-1-movement-in-first-year-300185809.html).

**Open Source Pledge** launched on 8 October 2024, initiated by Sentry. It sets one number
($2,000 per developer per year), leaves the choice of recipient entirely to members, never
handles funds, and enforces membership through an annual public post
(https://opensourcepledge.com/about/). It now lists 43 members, $7,270,139 paid since launch,
and $3,698,830 in the past year (https://opensourcepledge.com/members/). Both pledges launched
with a mechanism and named signatories, not named beneficiaries.

**Code for America** is the cautionary case. Its own 2021 "new vision" post named the failure
mode precisely: "a budding solutions engineer shows up to a Brigade weekly hack night, but there
are no active projects for their skills" and "not everyone sees their place in the movement"
(https://codeforamerica.org/news/a-new-vision-for-the-code-for-america-network/). Two years later
it sunset the network of roughly 60 brigades, saying it was "not best suited to serve as a
central supporting organization for a network of volunteers" and could not "raise and sustain
multi-year investments" to staff it
(https://codeforamerica.org/news/reflections-on-the-brigade-networks-next-chapter/). The
survivors formed the Alliance of Civic Technologists, now 19 groups, which supports volunteers
and does not build products (https://www.civictechnologists.org/;
https://statescoop.com/code-for-america-former-brigades-regroup/). Hack for LA survived by running
like an organisation: 5,000 volunteers, guided onboarding of 1.5 to 3 hours, and open roles
listed only at the end of onboarding (https://www.hackforla.org/join;
https://www.hackforla.org/about/). Code for All is a network of 31 organisations that shares
practice rather than assigning work (https://codeforall.org/about-us/).

**GitHub Social Impact** ran a DPG Open Source Community Manager Program in 2023 for seven DPGs,
one part-time manager each for six months, on the stated premise that "DPG maintainers face
considerable challenges because it is too time consuming to find, vet and onboard potential
contributors" (https://socialimpact.github.com/tech-for-social-good/dpg-open-source-community-manager-program).
That is the same bottleneck the movement's steward role exists to fill.

**Digital Public Goods Alliance** does not nominate projects; only "an authorised representative
of the digital solution" can apply, applications go through a two-stage review against the nine
indicators, and status expires after a year
(https://www.digitalpublicgoods.net/frequently-asked-questions;
https://github.com/DPGAlliance/publicgoods-candidates/blob/main/help-center/dpg-review-policy.md).
The DPGA published the standard first and the registry filled in behind it.

**80,000 Hours** publishes a framework (scale, neglectedness, solvability, personal fit, on a log
scale where two points is tenfold) and cautions that estimates involve "very high levels of
uncertainty" (https://80000hours.org/articles/problem-framework/). When challenged on
transparency, its research lead said rankings come from staff and advisor surveys, that one
person is "the point person for ultimately deciding how to combine this information", and that
they "moved away" from numerical weights because those "seemed to suggest misleading precision"
(https://forum.effectivealtruism.org/posts/cD7fHYE5vQx6RwmvD/should-80-000-hours-be-more-transparent-about-how-they-rank).
Its ranked list has changed substantially over the years and now leads with risks from
transformative AI (https://80000hours.org/problem-profiles/).

**GiveWell** runs a funnel: shallow reviews of many programs, deep reviews of few, and
eligibility restricted to pre-declared "priority programs"
(https://www.givewell.org/how-we-work/process; https://www.givewell.org/how-we-work/criteria).
It tells donors even top charities "are not a 'sure thing.'" Its founding-year lesson is about
credibility, not selection: in December 2007 the two founders promoted GiveWell under fake
identities on Metafilter and Lifehacker; the board fined each $5,000 and demoted them, and the
record is still on GiveWell's site
(https://blog.givewell.org/2008/01/11/updated-statement-from-the-givewell-board-of-directors/;
https://www.givewell.org/about/official-records/board-meeting-3/FAQ-on-inappropriate-marketing).
Overclaiming before you have earned it is expensive.

**Founders Pledge** states it is "neutral about the causes we address" and applies a three-step
method (problem, solution, organisation); members choose from vetted options with an adviser. In
2022 it advised 136 members and 60% followed the recommendations
(https://www.founderspledge.com/our-methodology; https://app.founderspledge.com/2022-impact).

**DataKind** accepts projects only after a volunteer Scoping and Impact committee reviews every
application for feasibility and lasting impact, and it scopes with the partner before recruiting
a team (https://www.datakind.org/2021/01/06/data-science-for-good-project-scoping-identifying-your-data-scienceable-problem/;
https://datakind.github.io/social-impact/scoping/).

**Hackathons for good.** Nolte, Chounta, and Herbsleb (CSCW 2020) analysed Devpost projects and
found that more than a third show some activity after the event but only about 5% are continued
beyond five months (https://dl.acm.org/doi/10.1145/3415216). Random Hacks of Kindness, founded in
2009 by Google, Microsoft, Yahoo, NASA, and the World Bank, had 2,000 participants in 2017; the
global body faded and local chapters carry on (https://en.wikipedia.org/wiki/Random_Hacks_of_Kindness).

The pattern across all of them: pledges launched with named signatories and a mechanism, never
with named beneficiaries; evaluators launched with published criteria and let names come out of
the process; and the volunteer networks that lost engineers did so because people arrived and
found no groomed work. Naming a cause before you can staff it is the Code for America failure in
miniature.

## 4. Recommendation

The founder's instinct is right. The current README is too explicit, and adding more candidates
would make it worse.

**The consistency problem is real.** Principle 3 says "No mission without a steward." Principle 4
says work is cut into days. The manifesto says "Enthusiasm is not a plan." The README then lists
four "candidate founding missions" with a column headed "Why it's first", none of which has a
steward, a repository, or a single `one-day` issue. The "How to join" section tells an
individual to "Pick a mission and an issue labelled `one-day`", which today points at nothing. A
careful reader will notice, and the readers the movement most wants (maintainers of the projects
named) are the most careful readers of all.

**Recommended option: (b) plus (d).** Name one founding mission as proposed and seeking a
steward, publish the selection criteria the manifesto already implies, and open a public
nomination process. Do not list the other three domains as missions. Optionally show a short,
clearly labelled list of example projects that would qualify, so nominators know the bar.

Reasons:

1. Diabetes earns its place on the evidence (NEJM 2022, Lancet 2022, active repos pushed this
   week, a 501(c)(3) already funding developers). None of the other three has an equivalent.
   Listing them beside it dilutes the one strong claim.
2. Three of the four are domains, not missions. A domain has no definition of done, so it cannot
   pass section 5 of the mission template. The cancer entry in particular describes a gap ("labs
   that can't afford engineers") that the actual projects do not have, while the LMIC gap that
   does exist (CanReg5, Orthanc) goes unnamed.
3. Even the founding mission has zero newcomer-labelled issues across its four main repos. The
   first steward's first month is grooming. Publishing that fact is more credible than
   publishing a table.
4. Every comparable pledge that scaled launched with a mechanism and signatories, not
   beneficiaries. Every evaluator that earned trust published criteria first. The network that
   lost engineers did so by having no work ready when they showed up.
5. A nomination process gives the affected a way in before launch, which principle 6 requires
   anyway, and it lets a steward self-identify, which is the only way a mission actually starts.

**How many missions at launch.** One, with the steward named. A second only if a second steward
exists on launch day. The Open Source Pledge reached $7.3 million with one number and no named
recipients; the movement's first quarterly report from one real mission will be worth more than
four promises.

### Concrete wording changes for README.md

Replace the "Candidate founding missions (IT-first)" section with three short sections:

> ## Founding mission (proposed, seeking a steward)
>
> **Open diabetes technology.** Volunteers built OpenAPS, AndroidAPS, Loop, Trio, and
> Nightscout; a randomised trial in the New England Journal of Medicine (2022) found the open
> algorithm gave users 3 hours 21 minutes more time in range per day. Several thousand people
> rely on these tools. The projects need documentation, testing, translation, support, and
> reviewed code, and they need it every month, not once.
>
> We will recognise this mission when it has a named steward, a council from the T1D community,
> and ten groomed `one-day` issues. Until then it is a proposal. We are talking to people inside
> these projects about stewarding it. We will never distribute builds of these apps; that would
> make us a device manufacturer.
>
> ## How missions are chosen
>
> A mission is a problem we can finish, not a field we care about. To be recognised it must
> have: a named steward; a council of people who live with the problem, with a veto; an
> OSI-approved licence and an open data plan; a backlog cut into days, with at least ten groomed
> before launch; a definition of done and a definition of stop; and a credible path to the
> Digital Public Goods Standard. Missions are chosen for the suffering they can reduce, not the
> attention they attract.
>
> ## Nominate a mission
>
> Open an issue using the mission nomination template. Say who suffers and how we know, which
> existing open projects the work would feed, and who could steward it. Nominations from people
> who live with the problem, and from maintainers of the projects concerned, carry the most
> weight. We will publish every nomination and our reasoning, accepted or not.

Then fix "How to join" for individuals: replace step 3 with "Help groom the founding mission's
backlog, or nominate a mission. When a mission is recognised, pick an issue labelled `one-day`
and give your first day."

In the precedent table, keep the OpenAPS / Nightscout row but change the right-hand cell from
"we start where it already works" to "the existence proof that volunteer open source changes
lives; our proposed founding mission feeds these projects rather than replacing them." The
current phrasing reads as if the movement owns or runs them.

If the founder wants a list of examples under "How missions are chosen", keep it to named
projects, not domains, and label it: "Examples of projects that already meet most of the bar:
Nightscout and AndroidAPS, OpenMRS, Open Food Facts, HOT Tasking Manager, Community Health
Toolkit, Oppia, NVDA, Masakhane, Ersilia, CanReg5. None of these is a mission until someone
steps up to steward it."

### Two follow-ups for DESIGN_NOTES.md

Add a note under "Why missions have stewards" citing the Code for America line about engineers
finding "no active projects for their skills" and GitHub's finding that DPG maintainers find
onboarding "too time consuming", since both are the direct research behind the steward rule.
Add a note under the diabetes section recording the AndroidAPS legal position on distribution,
because it constrains what any health mission may ever ship under the movement's name.

### What this means for the landing page

The Missions section on the landing page shows the same four cards, one filled terracotta and
three white. The design already has a `showCandidateMissions` prop that hides the three
candidates; the port carries it as a prop on `LandingPage`. Setting it to `false` and changing
the founding card's label from "Founding mission" to "Founding mission, proposed" is a two-line
change once the founder decides. A nomination call to action would be a new element and should
go through Claude Design first.
