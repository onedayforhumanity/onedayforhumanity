---
name: copywrite
description: Voice and style rules for every piece of prose in this repository. Use before writing or editing any markdown file, site copy, UI text, code comment, commit message, or research note. Also use when reviewing text someone else wrote. The short version: write like a careful person, not like a model; no em dashes, ever.
---

# Copywrite

One Day for Humanity is a movement, not a company. Its documents are read by engineers and by
people who have never opened a terminal, and they are signed by pull request. The writing has
to sound like a person who means it. This skill exists so that every contributor, human or
model, writes in the same voice.

Read the whole thing once. After that the checklist at the end is enough.

## Hard rules

These are not preferences. Text that breaks one of them is not finished.

1. **No em dashes.** Not one. Not in headings, tables, comments, or commit messages. Use a
   comma, a colon, a full stop, or parentheses. If the sentence only works with a dash, the
   sentence is doing too much. Split it.
2. **No en dashes in prose.** Write "5 to 9 people" and "2 to 5 bullets". In a table cell where
   space is tight, a plain hyphen is acceptable: `16-18px`.
3. **No exclamation marks.** The manifesto has none. Keep it that way.
4. **No emoji.** Anywhere. Including badges, commit messages, and comments.
5. **The interpunct `·` is the separator** for inline metadata: `ODH · Weekly`,
   `Status: pre-launch · Manifesto · Pledge`. Do not use pipes, bullets, or slashes for this.
6. **Sentence case for headings.** "How to join", not "How To Join".
7. **Oxford comma.** "merged, tested, documented, or learned."
8. **Bold is for the thing being defined or chosen**, once: the term in a definition, the left
   side of a value pair, the tier name. It is not for emphasis in running text.

## The voice

Serious, warm, plain. Closer to the Agile Manifesto or a good engineering README than to a
fundraising page. Say what we will do and what we will not. Trust the reader.

- **Short common words.** Give, build, keep, ship, fail, publish. Not leverage, empower,
  facilitate, utilize, foster, enable.
- **Concrete over abstract.** "Add one line to `DAYS.md`: date, name, what you did" beats
  "document your contribution."
- **Say who does what.** "The steward publishes a quarterly report" beats "a quarterly report is
  published." Passive voice is fine when the actor genuinely does not matter.
- **Numbers over adjectives.** "About twelve days a year" beats "a meaningful amount of time."
  "4,000+ forks" beats "widely adopted."
- **Admit limits in the same breath.** "Honor system, in public." "No shame, just accuracy."
  "We may never be the majority." The manifesto's credibility comes from this.
- **One idea per paragraph.** Paragraphs of one sentence are allowed. So are paragraphs of six.
  What is not allowed is every paragraph being three sentences long.

## What a model sounds like, and how to stop

These are the patterns that make text read as generated. Cut them on sight.

| Tell | Instead |
|---|---|
| The em dash reflex: "the cadence is yours (em dash) the commitment is public" | "The cadence is yours; the commitment is public." |
| "It's not X, it's Y" / "This isn't about X. It's about Y." | Say Y. If the contrast matters, one plain sentence: "We pledge time, not money." |
| Every paragraph ending on a punchy one-liner | Let most paragraphs end on an ordinary sentence. Save the short line for the one place it earns it. |
| Triplets by habit: "fast, reliable, and secure" | Use the real number of items. Two is fine. Four is fine. |
| Dramatic fragments: "Disease. Hunger. War." | A list inside a normal sentence: "Disease, hunger, war, exclusion: the problems that matter most are worked on by too few." |
| Signposting: "In this section", "Let's dive in", "Here's the thing", "It's worth noting" | Delete. Start with the content. |
| Hedge stacks: "may potentially help to" | "helps", or say what it does not do. |
| Praise words: robust, seamless, vibrant, cutting-edge, game-changing, impactful, powerful, crucial, pivotal, key | Delete, or replace with the fact that made you want to write it. |
| Landscape words: ecosystem, journey, tapestry, landscape, space, realm, navigate, unlock, harness, testament to | Name the actual thing. "The OpenAPS, AndroidAPS, Loop, and Nightscout projects" not "the open-source diabetes ecosystem." (In a technical sense, "ecosystem" for a group of interoperating projects is acceptable once.) |
| Rhetorical questions used as headings or transitions | Make it a statement. |
| Colon-before-list in every paragraph | Sometimes a list is a sentence with "and" in it. |
| Perfect parallelism in every list item | Let items be different lengths if they are different things. |
| Closing summaries that restate the section | End when the content ends. |
| "Delve", "underscore", "showcase", "elevate", "streamline", "comprehensive", "multifaceted", "nuanced", "holistic", "myriad" | Plain equivalents, or cut. |

A useful test: read the paragraph aloud. If you would be embarrassed to say it to a colleague
across a desk, rewrite it.

## Movement vocabulary

Use these words consistently. They are defined in `MANIFESTO.md`, `PLEDGE.md`, and
`GOVERNANCE.md`; do not invent synonyms.

| Say | Not |
|---|---|
| give a day, a day given | volunteer, donate time, contribute hours |
| mission | project, initiative, program, workstream |
| steward | lead, owner, PM, champion |
| cadence, tier (Weekly, Monthly, Quarterly, Yearly) | level, plan, package, commitment level |
| pledge (noun and verb) | sign up, commit to, join the program |
| public good | deliverable, asset, IP |
| the affected, people who live with the problem | end users, beneficiaries, stakeholders, target group |
| open source (two words as a noun, hyphenated as an adjective: open-source software) | OSS in prose, FOSS |
| a day counts when ... | credit, eligible hours |
| lapsed | churned, inactive, delinquent |

Never call the movement a company, a startup, a platform, a program, or a nonprofit. It is a
movement. Its legal home is undecided (`DESIGN_NOTES.md`, open question 2).

## Applying it outside the markdown

- **Site copy** lives in `web/src/content/site.ts`. The same rules apply. Button labels are
  verbs in sentence case: "Pledge one day", "Read the manifesto", "Sign as an individual".
- **Code comments** explain why, in full sentences, in this voice. No dashes, no jokes, no
  "TODO: fix later" without an issue link.
- **Commit messages**: imperative subject under 72 characters, a body that says what changed and
  why, in prose. No bullet lists of file names. Sign with `git commit -s` (DCO).
- **Research notes** in `research/` follow the same rules and must cite URLs inline. Say what
  the source actually says, then what we conclude, as two separate sentences.
- **Tables** may use fragments. Everything else uses full sentences.

## Checklist before you call it done

Run this on every file you touched:

```bash
grep -nP '\x{2014}' <file>      # em dashes: must be zero
grep -nP '\x{2013}' <file>      # en dashes: zero outside tight table cells
grep -n '!' <file>              # exclamation marks: zero in prose (shell/markdown syntax excepted)
grep -nP '[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' <file>   # emoji: zero
```

Then read it once more for these:

- Did any paragraph end on a zinger that the previous paragraph also ended on?
- Is there an "it's not X, it's Y" anywhere? Rewrite it as Y.
- Is every praise word backed by a number or a name? If not, cut the word.
- Would the sentence survive being read aloud to the person it is about?
- Did the meaning change? The rules in `MANIFESTO.md` and `GOVERNANCE.md` are canon. This
  skill changes how things are said, never what is promised.
