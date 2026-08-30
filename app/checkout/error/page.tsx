import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Checkout",
};

const messages: Record<string, string> = {
  "not-configured":
    "Stripe is not configured. Set STRIPE_SECRET_KEY before checkout can run.",
  "missing-price":
    "That price is not configured. Set the matching STRIPE_PRICE_ID_* variable.",
  "invalid-tier": "That checkout tier is not one of $199, $399, or $599.",
};

export default async function CheckoutErrorPage({
  searchParams,
}: PageProps<"/checkout/error">) {
  const query = await searchParams;
  const code = typeof query.checkout === "string" ? query.checkout : null;
  const message = (code && messages[code]) || "Checkout could not start.";

  return (
    <PageShell>
      <h1 className="font-serif text-4xl text-ink">Checkout did not start</h1>
      <p className="mt-4 max-w-xl text-muted" role="alert">
        {message}
      </p>
      <p className="mt-8">
        <Link href="/" className="text-brick hover:underline">
          Back to pricing
        </Link>
      </p>
    </PageShell>
  );
}
