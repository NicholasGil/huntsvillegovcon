import type { Metadata } from "next";
import { AccessGate } from "@/components/gate";
import { PageShell } from "@/components/page-shell";
import { canReadToolkit, getEntitlement } from "@/lib/entitlement";
import { pricingTiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Toolkit",
};

const toolkitTier = pricingTiers.find((tier) => tier.id === "399");

export default async function GuideToolsPage() {
  const entitlement = await getEntitlement();

  if (!canReadToolkit(entitlement)) {
    return (
      <PageShell>
        <AccessGate entitlement={entitlement} need="toolkit" />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <h1 className="font-serif text-4xl text-ink">Toolkit</h1>
      <p className="mt-4 max-w-xl text-muted">
        Included with the $399 and $599 purchases. These are worksheets you
        fill in. Nobody here submits bids, makes introductions, or reviews your
        package for award.
      </p>
      {toolkitTier ? (
        <ul className="mt-6 max-w-xl list-disc space-y-2 pl-5 text-muted">
          {toolkitTier.includes.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
    </PageShell>
  );
}
