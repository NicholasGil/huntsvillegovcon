# Contributing

Huntsville Contract Map sells sourced facts about federal contracting in the Huntsville / Redstone market. Wrong data is a product defect.

## Do not invent

- No invented contact names, phones, emails, office locations, deadlines, dollar figures, or regulatory citations.
- Missing facts use the token `⟦VERIFY: description⟧`.
- No testimonials, star ratings, customer counts, fake urgency, or countdown timers.
- No earnings or outcome claims. Clarity is the product, not revenue.
- No government affiliation. The product name is Huntsville Contract Map.
- A buyer-facing fact ships with a source URL and an as-of date, or it does not ship.
- CMMC status lives in the facts table. Do not hardcode it.

## Stack

Next.js 16 App Router, TypeScript, Tailwind, Stripe Checkout, Supabase, Vercel. Do not add a Pages Router tree or `middleware.ts`.

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

`next build` is the gate for this repo. Stripe and Supabase keys are optional for the scaffold; route handlers return 503 until they are set.
