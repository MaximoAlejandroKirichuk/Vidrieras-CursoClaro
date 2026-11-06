# Institute demos: independent finish review

Date: 2026-11-06. Reviewer: `ses_e4dc45dbfffe7ZHOkyxCpQtgqP`.

## Scope and evidence

The user explicitly approved a structural redesign of the three institute demos after clarifying that improving the index did not address their concern. The approved directions were a group-first Alondra timetable, a practical Bisagra course/reservation sheet, and a principal-training Casa Sauce prospectus with coherent editions.

Code-led implementation; no generated comp or catalog QUALITY BAR card was selected. The review assesses the user-pinned direction and craft floor, not fidelity to an unavailable visual reference.

Required rendered evidence lives here:

- `{idiomas,oficios,holistico}-full-desktop.png`
- `{idiomas,oficios,holistico}-full-mobile.png`
- `{idiomas,oficios,holistico}-checkout-mobile-confirmation.png`
- First-viewport captures and `verification-report.json` provide additional context.

The first review returned **recapture** because a modal capture was blank. The browser harness incorrectly clipped viewport screenshots at document origin after the page had scrolled. Viewport captures now omit the document clip; full-page captures retain explicit content-size clipping after fresh navigation. Valid replacement captures were opened before the full review resumed. The invalid evidence supported no approval.

## Full review

Disposition: **fix**, with one material truth finding.

- **Persistence:** PRODUCT.md and the three code-led surface contracts exist.
- **Fidelity:** All three route compositions match their approved directions. Alondra presents native course/level filters and a small timetable; Bisagra leads with a substantive orange course sheet and yellow reservation strip; Casa Sauce presents the principal training and its editions before related offerings. Mobile captures preserve those choices. Shared functional components do not impose one marketing composition.
- **Ceiling:** The transformation is structural and differentiated, not a palette swap. No catalog-card ceiling comparison is claimed. Technical test results do not establish aesthetic quality.
- **Material fix:** The confirmation still listed fictional email, WhatsApp, reminder, payment-link, and automatic-charge followups as expected actions. Remove those claims or clearly identify them as unimplemented examples.
- **Keep:** Distinct route identities, useful first-viewport choices, and the working simulated checkout.

## Correction and targeted verdict

The confirmation now lists only actual actions performed in the simulation: course/group/plan selection, review of fictitious form data, and simulated payment/confirmation without sending information or money. `datosCheckout` no longer serializes the inherited followup action list or legacy paid message.

The same reviewer checked the current source and all three refreshed confirmation captures and scored the material truth fix **resolved**, with disposition **ship** for that fix. This targeted verdict does not constitute a new full-surface review or extend the full review's scope.

Separate technical audit findings and their rechecks are recorded in `audit.md`; this visual review does not certify WCAG conformance, physical-device behavior, or field performance.
