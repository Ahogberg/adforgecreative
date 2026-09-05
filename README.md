# Afterword

The public site for Afterword Monthly: a $1,500/month productized editorial service for
expert-led B2B companies. Formerly AdForge Creative — the rebrand landed with the
Afterword redesign; the repository and the `NEXT_PUBLIC_ADFORGE_API_URL` variable keep
their old names for now.

## Positioning

**One expert session. One month of content.**

Each monthly source becomes one premium guide, eight LinkedIn posts, three nurture emails, and landing-page copy, with the first delivery within 48 hours after complete intake and one consolidated revision round.

The site deliberately sells accountable delivery rather than access to AI. It explains source traceability, reusable brand memory, editorial QA, and finished assets as the reasons to buy instead of managing ChatGPT internally.

## Routes

| Route | What it is |
| --- | --- |
| `/` | Home. Section flags live in `lib/site-config.ts`. |
| `/apply` | Application form. Field names match the intake API. |
| `/thank-you` | Post-submit screen; reads `email` and `ref` from the query string. |
| `/sample` | A worked example month for a fictional client. |
| `/review` | How the review link works, with a static mock of it. |
| `/kit` | Internal production standard. Not linked from the site, `noindex`. |

`public/emails/application-confirmation.html` is the send-ready confirmation email
(table-based, inline styles). Merge fields: `{{first_name}}`, `{{company}}`,
`{{source_type}}`, `{{sender_address}}`.

`{{sender_address}}` is the sender's legal entity and postal address. It has no default
on purpose — the confirmation is a transactional message, but the three nurture emails
the service sells are commercial, and those need a real postal address in the footer.
Populate it at send time rather than hardcoding one here.

## Design

Cream paper and forest green, Libre Caslon Text for display and Figtree for UI text, both
self-hosted through `next/font`. Tokens and components live in `app/globals.css`; the type
stacks are declared on `body` because that is where `next/font` puts its variables.

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. Configure `.env` from `.env.example`.

When `NEXT_PUBLIC_ADFORGE_API_URL` points to a deployed production engine, the application form posts directly to `/api/intake` and then routes to `/thank-you`. Without it, the same form opens a prefilled email so the call to action remains functional before the backend is deployed.

## Validation

```bash
npm run lint
npm run build
```

Copy is US English throughout, and the guide format defaults to US Letter. The A4 layout
in the Claude Design guide template still needs re-laying out to Letter.

The Open Graph image at `public/og.png` is still AdForge-branded and needs redesigning for
the new name. The previous static site is preserved under `legacy/index.html` for reference.
