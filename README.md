# AdForge Creative

The public site for AdForge Monthly: a $1,500/month productized content service for expert-led B2B companies.

## Positioning

**One expert session. One month of content.**

Each monthly source becomes one premium guide, eight LinkedIn posts, three nurture emails, and landing-page copy, with the first delivery within 48 hours after complete intake and one consolidated revision round.

The site deliberately sells accountable delivery rather than access to AI. It explains source traceability, reusable brand memory, editorial QA, and finished assets as the reasons to buy instead of managing ChatGPT internally.

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. Configure `.env` from `.env.example`.

When `NEXT_PUBLIC_ADFORGE_API_URL` points to a deployed production engine, the application form posts directly to `/api/intake`. Without it, the same form opens a prefilled email so the call to action remains functional before the backend is deployed.

## Validation

```bash
npm run lint
npm run build
```

The generated Open Graph image lives at `public/og.png`. The previous static site is preserved under `legacy/index.html` for reference.
