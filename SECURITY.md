# Security

The site has no backend, sets no cookies, and stores nothing about a visitor. Most of what can
go wrong lives in this repository: the build, the workflow that deploys it, and the documents
that people edit by pull request.

## Reporting a vulnerability

Use GitHub's private vulnerability reporting on this repository: the Security tab, then
"Report a vulnerability". Do not open a public issue for it. Security reports are one of the
two things the movement keeps confidential ([GOVERNANCE.md](GOVERNANCE.md), section 9).

A maintainer replies within 7 days, the same window as a pull request review. When a report is
confirmed, the fix is published with credit to the reporter, unless the reporter asks to be
left out.

## Scope

In scope: this repository, the site at onedayforhumanity.org, and the workflow that deploys it.
Out of scope: Azure Static Web Apps and GitHub themselves, which run their own programs, and
mission repositories, which their stewards maintain.

## What is in place

The pages are built from the markdown in this repository at build time. Raw HTML in a document
is rendered as text, and only relative, http, https, and mailto links become anchors. The
hosting configuration sets a Content Security Policy that allows no inline script or style, and
sets Strict-Transport-Security, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, and
Cross-Origin-Opener-Policy. The deploy workflow pins every action to a commit and never exposes
its deploy token to a pull request from a fork. Dependabot keeps the dependencies and the pins
current.
