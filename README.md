# Afterword

The public site for Afterword Monthly: a $1,500/month productized editorial service for expert-led B2B companies. The repository keeps its original `adforgecreative` name.

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

The application form posts directly to the production engine's `/api/intake` (`NEXT_PUBLIC_ADFORGE_API_URL`, defaulting to the live Railway engine in `lib/brand.ts`). If the engine cannot be reached, the form keeps the answers and offers the same application as a prefilled email.

## Validation

```bash
npm run lint
npm run build
```

The generated Open Graph image lives at `public/og.png`. The previous static site is preserved under `legacy/index.html` for reference. Brand name, contact email, and canonical URL are centralized in `lib/brand.ts`.
