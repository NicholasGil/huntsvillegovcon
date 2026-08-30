import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { isHttpUrl, seedChanges } from "@/lib/seed-facts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What's changed",
  description:
    "Public log of 2026 regulatory changes that affect Huntsville / Redstone contracting. Each entry has a source and a date.",
};

export default function WhatsChangedPage() {
  const changes = seedChanges;

  return (
    <PageShell>
      <h1 className="font-serif text-4xl text-ink">What&apos;s changed</h1>
      <p className="mt-4 max-w-xl text-muted">
        Public, ungated. This is a running log of 2026 regulatory changes with
        sources. It is not a promise that any buyer will win work.
      </p>
      <ol className="mt-10 max-w-xl space-y-8">
        {changes.map((entry) => (
          <li key={entry.id ?? `${entry.headline}:${entry.effective_date}`}>
            <h2 className="font-serif text-2xl text-ink">{entry.headline}</h2>
            {entry.effective_date ? (
              <p className="mt-2 text-sm text-muted">
                Effective {entry.effective_date}
              </p>
            ) : null}
            <p className="mt-3 leading-relaxed text-muted">{entry.detail}</p>
            <p className="mt-2 text-sm text-muted">
              {isHttpUrl(entry.source_url) ? (
                <a href={entry.source_url} className="text-brick hover:underline">
                  source
                </a>
              ) : (
                entry.source_url
              )}
            </p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
