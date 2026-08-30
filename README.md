# Huntsville Contract Map

Paid digital reference for small businesses navigating federal contracting in the Huntsville / Redstone Arsenal market. Sourced facts, dated. Not a course. Not coaching. Not government affiliated.

Companion technical pattern: [Zoned Huntsville](https://github.com/NicholasGil/Zoned-Huntsville).

## Stack

Next.js 16 App Router, TypeScript, Tailwind 4, Stripe Checkout, Supabase Auth, Vercel. Node 20.9 or newer.

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

`next build` is the gate for this repo. Stripe and Supabase keys are optional for the scaffold. Route handlers return 503 until they are set. Do not commit live keys.

## Tiers

| Amount | Row tier | Flags | Notes |
| --- | --- | --- | --- |
| $199 | `map` | `hasGuide` | Current edition. Lifetime access to that edition. |
| $399 | `toolkit` | `hasGuide` + `hasToolkit` | Target tier. Worksheets the buyer fills in. |
| $599 | `updates` | those plus `hasUpdates` | One-time 12-month purchase. No auto-renew. |

Gated routes are `/map`, `/map/[module]`, and `/map/tools`.

There is no consulting-call tier.

## Rules

See `AGENTS.md`. Missing facts stay `⟦VERIFY: description⟧`.
