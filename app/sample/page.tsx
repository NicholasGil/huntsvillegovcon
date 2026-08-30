import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SampleOptInForm } from "@/components/sample-opt-in-form";
import { SourcedFact } from "@/components/sourced-fact";
import { fieldLabel, freeHelpSampleFacts } from "@/lib/seed-facts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free sample",
  description:
    "The free-help contacts from Huntsville Contract Map: APEX Accelerator of Alabama, UAH SBDC, and the SBA Alabama District Office.",
};

export default function SamplePage() {
  const facts = freeHelpSampleFacts();

  return (
    <PageShell>
      <h1 className="font-serif text-4xl text-ink">Free help, sourced</h1>
      <p className="mt-4 max-w-xl text-muted">
        This is the free-resources module. APEX and the UAH SBDC give
        procurement advising at no cost. The SBA Alabama District Office is in
        Birmingham. Confirm every number and address before you call. Every
        line has a source and the date it was verified.
      </p>
      <dl className="mt-10 max-w-xl space-y-5">
        {facts.map((fact) => (
          <div key={`${fact.entity_slug}:${fact.field}`}>
            <dt className="text-sm text-muted">
              {fact.entity_slug === "apex-alabama" ? "APEX / UAH SBDC" : "SBA Alabama"}{" "}
              · {fieldLabel(fact.field)}
            </dt>
            <dd className="mt-1 text-ink">
              <SourcedFact fact={fact} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 max-w-xl text-muted">
        Leave an email if you want this sample sent to you.
      </p>
      <SampleOptInForm />
    </PageShell>
  );
}
