# GitHub kit

Files: `avatar-500.png` (organization avatar) and `social-preview-1280x640.png` (the image
GitHub shows when the repository is linked). Both are set in the web interface: the avatar under
the organization's Profile settings, the social preview under the repository's Settings, General,
Social preview.

## Organization profile

| Field | Proposal |
|---|---|
| Display name | One Day for Humanity |
| Description (160 characters) | People and organizations give one day to humanity's hardest problems, every week, month, quarter, or year, and give the results away. |
| URL | https://onedayforhumanity.org |
| Email | Leave empty until `conduct@` exists |
| Location | Your city, or leave empty |
| Social accounts | The X account, once it exists |
| Pinned repositories | onedayforhumanity/onedayforhumanity |

## Organization README

GitHub shows a README on the organization's page if a public repository named `.github` holds
it at `profile/README.md`. Create that repository in the organization and add this file:

```markdown
# One Day for Humanity

People and organizations give one day to humanity's hardest problems, every week, month,
quarter, or year, and give the results away.

The unit is one day. The time goes into missions: open-source efforts with a named steward, a
backlog cut into day-sized tasks, and a definition of done. Everything built there is a public
good. Everyone may use it, forever.

- Read the [manifesto](https://onedayforhumanity.org/manifesto/) and the
  [principles](https://onedayforhumanity.org/principles/).
- Sign by pull request to
  [SIGNATORIES.md](https://github.com/onedayforhumanity/onedayforhumanity/blob/main/SIGNATORIES.md),
  or [open an issue](https://github.com/onedayforhumanity/onedayforhumanity/issues/new?template=sign.yml)
  if you do not use git.
- [Nominate a mission](https://github.com/onedayforhumanity/onedayforhumanity/issues/new?template=mission-nomination.yml).

Status: pre-launch. The founding mission, open diabetes technology, is a proposal until it has a
steward. If you are inside OpenAPS, AndroidAPS, Loop, Trio, or Nightscout and could steward it,
we want to hear from you.

Code is Apache-2.0 unless a mission states otherwise. Everything written is CC BY 4.0.
```

## The main repository

| Field | Proposal |
|---|---|
| Description | The One Day for Humanity manifesto, principles, pledge, and site. Sign by pull request. |
| Website | https://onedayforhumanity.org |
| Topics | `manifesto`, `pledge`, `open-source`, `digital-public-goods`, `public-goods`, `volunteering`, `diabetes` |
| Social preview | `social-preview-1280x640.png` |
| Issues | On (the sign and nomination forms need them) |
| Discussions | Off until there is a steward to read them |

## The mark in READMEs

For a small mark in a README, link the SVG from the repository so it follows any token change:

```markdown
<img src="https://raw.githubusercontent.com/onedayforhumanity/onedayforhumanity/main/design/brand/mark.svg" width="76" alt="One Day for Humanity">
```
