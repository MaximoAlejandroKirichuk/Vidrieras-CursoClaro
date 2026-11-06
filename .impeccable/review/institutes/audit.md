# Technical audit: redesigned institute demos

Date: 2026-11-06. Scope: `/idiomas`, `/oficios`, `/holistico`, the shared shell, session picker, and simulated checkout. Independent audit agent: `ses_e4dc3e948ffedi0Rb6pch3mtvB`.

## Implementation integrity verdict

**Pass at the tested scope after corrections.** Three independent compositions use shared functional controls without recreating the old marketing-page assembly. Fictional proof and the static administrative panel are not rendered. Confirmation describes only actual simulated actions, not unbuilt message or payment integrations.

## Audit health score

| Dimension | Score | Evidence and limit |
|---|---|---|
| Accessibility | 3/4 | Skip/main links, native controls, labels, sampled target sizes, contrast, focus transitions, and persistent dialog close checked. No screen-reader conformance certification. |
| Performance | 3/4 | Production build passed; browser run recorded no runtime, console, or request failures. No throttled lab or field-performance assessment. |
| Theming | 3/4 | Route-specific palettes and fonts remain scoped; sampled text/background pairs passed. Not an exhaustive contrast assessment of every state. |
| Responsive design | 3/4 | Five viewport widths, 200% root-font proxy, and 320/390px dialog checks passed. No physical-device or cross-engine coverage. |
| Implementation integrity | 4/4 | Course/group filtering, empty reset, direct-file behavior, plans/kits, confirmation and cancellation verified after fixes. |
| **Total** | **16/20 — Good** | Technical assessment, not an aesthetic grade, Lighthouse score, or WCAG certification. |

## Verified behavior

- `npm run build` passed, including the existing relative-path conversion.
- Chrome 156: no horizontal overflow at 320, 390, 768, 1024, or 1440 CSS pixels across all three routes.
- The root-font-size 200% proxy at 390px had no horizontal overflow. This is not browser text-only zoom certification.
- Independent filter counts matched the source-backed rows for every course/group. Hidden rows did not expose focusable controls. Empty reset restored results and focus to a visible filter.
- A course link changed the picker selection, reset the other filter, and returned focus to the picker. Native filters remained operable by keyboard.
- Each route completed plan selection, prefilled example data, simulated payment, actual confirmation, final close, and focus restoration.
- Escape during processing, closing/reopening, and internal Back navigation cancelled pending processing without stale confirmations.
- All three built demo routes worked when opened directly through `file://`: course links and filtering, empty reset, enrollment, confirmation, close, and restored focus were exercised.
- On the Electricity course, selecting the optional kit with Seña kept today's amount at **$40,000** and disclosed **$88,000** added to the pending balance. Pago único charged the simulated **$491,200** (**$403,200 + $88,000**) and disclosed that the kit was included.
- At 320px and 390px, the close toolbar stayed inside the viewport after scrolling the checkout body to the bottom in Plan, Data, Payment, and Confirmation. Closing restored focus to the Electricity enrollment button.
- Sampled controls met the 24×24px WCAG 2.2 AA target minimum. Shared primary actions and the close button also meet their implemented 48px/44px heights.
- Sampled contrast passed, including Alondra's yellow-on-blue header focus and Bisagra's text on orange/yellow surfaces. This does not certify every rendered color pair.
- The browser harness recorded empty `consoleErrors`, `pageErrors`, and `failedRequests` arrays.

## Findings corrected

### P2: Direct-file picker was inert

Astro's processed picker script loaded as a separate ES module, which Chrome did not execute in the tested direct-file context. `SessionPicker.astro` now contains a plain JavaScript `is:inline` IIFE without TypeScript or module imports. Independent direct-file rechecks passed on all three routes.

### P2: Close control scrolled out of view

The close control originally belonged to the scrolling dialog content. It now sits in `.cc-toolbar`, outside the independently scrolling `#cc-cuerpo`. Independent Plan/Data/Payment/Confirmation tests at 320px and 390px confirmed it remained visible and operable.

### Additional reliability and truth corrections

- Internal navigation invalidates and cancels pending simulated payment timers.
- Empty-result reset moves focus away from the control it hides.
- Selected kits remain visible in summaries with immediate/deferred charge wording.
- Confirmation lists only completed demo actions. Legacy fictitious followup messages are not serialized into checkout data.
- Redundant brand accessibility-name overrides were removed; UI wording follows the existing Spanish interface consistently.

No remaining defect from the two independent P2 findings was identified in the targeted recheck. No P0/P1 defect was identified at the tested scope.

## Detector results and interpretation

The independent rendered scan found one advisory on Bisagra FAQ introductory copy: a one-word final line (“Straggler”). It was not classified as a functional or accessibility defect.

Final source scans returned `[]` for `src/pages`, `Checkout.astro`, and `SessionPicker.astro`. The picker initially produced typography-documentation advisories after the design-system merge omitted smaller shared type sizes; the actual intended sizes were documented in DESIGN.md and the repeated source scan returned `[]`. No source font sizes were changed just to satisfy the detector.

Clean detector output does not establish aesthetic success. The independent visual review and its targeted truth correction are recorded separately in `finish-review.md`.

## Remaining verification

- Manual screen-reader and voice-control use, real browser zoom, Safari/Firefox, and physical iOS/Android interaction.
- Throttled lab performance and deployed field metrics. No Lighthouse or Core Web Vitals pass is claimed.
- Recheck demo dates as time passes; these are explicit example fixtures, not live institute availability.

## Evidence and documentation

- `verification-report.json` — browser behavior, dimensions, and error arrays.
- `*-full-desktop.png`, `*-full-mobile.png`, and `*-checkout-mobile-confirmation.png` — validated production captures.
- The supplemental audit scripts were session-local: `institute-extra-audit.mjs` and `institute-targeted-rerun.mjs` in the approved temporary directory. Their verified outcomes are preserved above.
- `public/previews/provenance.json` and six image sidecars describe the newly captured homepage previews. Provenance scan: six rasters, zero missing.
- `DESIGN.md`, `.impeccable/design.json`, and the three surface briefs describe the finished scoped systems. README documents the actual demo boundaries rather than a universal-template cloning workflow.

## Recommended next checks

Run `/impeccable audit` on the deployed routes with additional browser engines and assistive technology before making broader conformance or performance claims. Use `/impeccable polish` only for concrete issues observed there; the one-word-line advisory does not justify restructuring an otherwise verified experience.
