# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Institutes exploring examples of what they could have built. The creator also uses this collection to show their work. Specific buyer roles and institute sizes have not been established.

## Product Purpose

A collection of working references that showcases the creator's work and lets an institute explore a simulation of a possible product. Visitors should be able to see both what an example looks like and how its demonstrated interactions work.

This collection is not a single generic product or a universal template. The current examples are institute storefronts; they do not define or exhaust the possible future product offering.

## Operating Context

The collection currently links to three fictional institute examples: Alondra Idiomas (`/idiomas`), Bisagra Escuela de Oficios (`/oficios`), and Casa Sauce (`/holistico`). These are demonstrations, not client case studies.

## Capabilities and Constraints

- Preserve the distinction between the reference collection and the fictional institute experiences inside it.
- Demonstrate behavior using the implemented flows; do not imply that a visual mockup is a functioning integration or production system.
- Payment is simulated. The README states that the demonstration does not charge money or request payment credentials.
- Do not invent capabilities, testimonials, customers, results, or evidence of commercial success. Fictional content must not be presented as real proof of the creator's work.
- Additional product categories, production integrations, and commercial terms are undecided.

## Brand Commitments

The existing collection uses the CursoClaro name and Spanish-language interface copy. Preserve the real identity and purpose rather than replacing them with generic product marketing.

## Evidence on Hand

- `src/pages/index.astro`: current collection entry point.
- `src/pages/idiomas.astro`, `src/pages/oficios.astro`, and `src/pages/holistico.astro`: existing example routes.
- `src/layouts/Vidriera.astro`: shared composition of the example experiences, including a checkout component.
- `README.md`: documents fictional institutes and simulated payments. Its template-cloning framing is implementation context, not the authority for the user-confirmed purpose of this collection.

## Product Principles

1. Show the work through explorable examples, not unsupported claims.
2. Make each example's context and demonstrated behavior understandable.
3. Clearly separate simulation from real-world operation and evidence.
4. Preserve differences between examples without promising unbuilt products.
