# Data policy: <mission>

*Copy this file into the mission repository and fill every section. It records the mission's
decisions about data; it does not replace legal advice. A mission that processes health data
about people in the EU needs a lawful basis that someone qualified to judge it has confirmed.*

The floor for every mission is in
[PRINCIPLES.md](https://github.com/onedayforhumanity/onedayforhumanity/blob/main/PRINCIPLES.md):
health data is handled to GDPR Article 9 standards wherever the person lives, with HIPAA Security
Rule safeguards wherever protected health information is touched, and the mission states which
medical-device rules apply to what it ships. The council holds a blocking vote on the mission's
use of data
([GOVERNANCE.md](https://github.com/onedayforhumanity/onedayforhumanity/blob/main/GOVERNANCE.md),
section 1).

## 1. What data the mission touches

One row per kind of data. "None" is a valid and welcome answer: if the mission touches no
personal data, say so here, fill in section 9, and leave the rest out.

| Data | Category | Source | Where it lives | Who can access it | Kept for |
|---|---|---|---|---|---|
| *(glucose readings, say)* | health · other personal · none | *(who provides it, and how)* | *(system and region)* | *(roles, not names)* | *(a period, then what happens)* |

## 2. Lawful basis and consent

Which GDPR Article 9(2) exception the mission relies on: explicit consent under 9(2)(a), research
under 9(2)(j), or another, named. How consent is asked for and in which languages, how a person
withdraws it, and what happens to their data when they do.

## 3. HIPAA, and the US rule that applies when HIPAA does not

Whether any party to the mission is a covered entity or a business associate under HIPAA. If yes,
list the administrative, physical, and technical safeguards the Security Rule requires and where
each is implemented. If no, the FTC Health Breach Notification Rule is the US rule that applies
to a vendor of personal health records, and this section says how the mission meets it.

## 4. De-identification

The method, who performs it, what is published, and what is never published however
de-identified.

## 5. Storage and access

Where the data is stored and in which region, how it is encrypted at rest and in transit, the
roles with access, how access is logged, and how often the log is reviewed.

## 6. Breach

Who is told, in what order, and by whom: the people affected, the mission council, the Steering
Circle, and, where GDPR applies, the supervisory authority within 72 hours. Who decides that an
incident is a breach.

## 7. Devices and dosing

Which medical-device rules apply to what the mission ships, in which jurisdictions. Whether
anything a dosing or treatment decision could depend on is in scope, and if so, what is said
about it wherever it is shipped. No mission under the movement's name distributes builds of
anything that would make the movement a device manufacturer.

## 8. Council decision

The date the council voted on this policy, the outcome, and a link to the record. The policy is
not in force until this section is filled.

## 9. What contributors never do

Commit personal data, credentials, or patient records. Paste real data into an issue, a pull
request, a screenshot, or a log. Test with anything but synthetic or de-identified fixtures.

## 10. Review

This file is updated whenever data handling changes, and at least once a year. Date of the last
review: <date>.

Digital Public Goods Standard:

- [ ] Indicator 7: the mission complies with privacy law and other applicable laws.
- [ ] Indicator 9a: the mission can show how personal data is kept private and secure.
