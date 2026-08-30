import type { Metadata } from "next";
import { AccessGate } from "@/components/gate";
import { PageShell } from "@/components/page-shell";
import { canReadToolkit, getEntitlement } from "@/lib/entitlement";
import { TOOLKIT_ASSETS } from "@/lib/toolkit-assets";

export const metadata: Metadata = {
  title: "Toolkit",
};

export default async function MapToolsPage() {
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
        Included with the $399 and $599 purchases. These five assets are
        placeholders in this edition. Nobody here submits bids, makes
        introductions, or reviews your package for award.
      </p>
      <ul className="mt-8 max-w-xl divide-y divide-rule border border-rule">
        {TOOLKIT_ASSETS.map((asset) => (
          <li key={asset.slug} className="px-5 py-4">
            <p className="font-serif text-xl text-ink">{asset.title}</p>
            <p className="mt-1 text-sm text-muted">
              Placeholder. No template body in this build.
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
