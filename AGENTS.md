# Product rules

This is a paid Huntsville / Redstone contracting reference. Agents and humans ship sourced facts only.

- Never invent a contact name, email, phone, office location, deadline, dollar figure, or regulatory citation. If a fact is missing, write `⟦VERIFY: description⟧`.
- Never invent social proof: no testimonials, star ratings, customer counts, fake urgency, or countdown timers.
- Never make an earnings or outcome claim. No win-a-contract, no revenue promises, no "guaranteed" outcome. The dream outcome is clarity, not revenue.
- Never imply government affiliation. No agency seals, no .gov-styled branding, no product name containing SBA, GSA, SAM, DoD, Army, or Official. The product name is Huntsville Contract Map. Do not use a Redstone-containing product name.
- Every buyer-facing fact needs a source URL and an as-of date. CMMC status belongs in the facts table with a verification date. Do not hardcode it as static copy.
- App Router only. No `pages/`, no `getServerSideProps`, no `getStaticProps`, no `middleware.ts`. Request interception is `proxy.ts` with `export function proxy` on the Node.js runtime.
- Gated buyer routes are `/map`, `/map/[module]`, and `/map/tools`. Do not revive `/guide`.
- Stored entitlement values are `map`, `toolkit`, and `updates`. TypeScript flags stay `hasGuide`, `hasToolkit`, and `hasUpdates`. There is no `hasCall` and no consulting-call tier.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
