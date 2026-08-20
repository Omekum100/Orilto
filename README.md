# Orilto Website

Premium, multi-route Next.js 16 website for Orilto, a product engineering and responsible AI partner.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` when needed.

- `NEXT_PUBLIC_SITE_URL`: canonical production URL.
- `TURNSTILE_SECRET_KEY`: enables server-side spam-token requirement.
- `TRANSACTIONAL_EMAIL_PROVIDER`: `console`, `resend`, or `postmark` abstraction target.
- `TRANSACTIONAL_EMAIL_API_KEY`: provider API key, when configured.

## Development

Content is stored in typed files under `content/` so services and case studies can be updated without changing component structure. This keeps a clean migration path to a CMS later.

## Testing

```bash
npm run typecheck
npm test
npm run test:e2e
npm run build
```

The Playwright suite covers the core home page, mobile navigation, contact validation, and axe accessibility checks.

## Contact Form

The contact route validates submissions server-side with Zod, applies an in-memory rate limit, supports Cloudflare Turnstile configuration, and sends through a transactional email provider abstraction. The default local provider logs safe enquiry metadata.

## Deployment

Build with `npm run build`. Configure environment variables in the hosting environment before production deployment.
