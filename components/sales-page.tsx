import { Suspense } from "react";
import Link from "next/link";
import { CheckoutForm } from "@/components/checkout-form";
import { CheckoutNotice } from "@/components/checkout-notice";
import { Pricing } from "@/components/pricing";
import { SampleOptInForm } from "@/components/sample-opt-in-form";
import { SourcedFact } from "@/components/sourced-fact";
import { GUIDE_MODULES } from "@/lib/guide-modules";
import { salesCopy } from "@/lib/sales";
import { findSeedFact, freeHelpSampleFacts } from "@/lib/seed-facts";
import { hero, site } from "@/lib/site";

function FactLine({
  entityType,
  slug,
  field,
}: {
  entityType: "regulation" | "program" | "resource";
  slug: string;
  field: string;
}) {
  const fact = findSeedFact(entityType, slug, field);
  if (!fact) {
    return null;
  }
  return <SourcedFact fact={fact} />;
}

export function SalesPage() {
  const freeHelp = freeHelpSampleFacts();

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <Suspense fallback={null}>
        <CheckoutNotice />
      </Suspense>
      <section aria-labelledby="hero-heading">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">{site.name}</p>
        <h1
          id="hero-heading"
          className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl"
        >
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          <FactLine entityType="regulation" slug="cmmc" field="phase_ii_status" />
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          <FactLine
            entityType="regulation"
            slug="8a"
            field="social_disadvantage_rule"
          />
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          <FactLine
            entityType="program"
            slug="set-asides"
            field="self_certification"
          />
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {hero.credibility}
        </p>
        <div className="mt-8">
          <p className="font-serif text-3xl text-ink">$199</p>
          <CheckoutForm
            tierId="199"
            label={hero.cta}
            variant="brick"
            className="mt-4"
          />
          <p className="mt-3 text-sm text-muted">{hero.guarantee}</p>
        </div>
      </section>

      <section aria-labelledby="changed-heading" className="mt-20">
        <h2 id="changed-heading" className="font-serif text-2xl text-ink">
          What changed in 2026
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Three regulatory changes hit this subject between September 2025 and
          July 2026. Guides written before mid-2026 are stale. The public log
          is on{" "}
          <Link href="/whats-changed" className="text-brick hover:underline">
            What&apos;s changed
          </Link>
          .
        </p>
        <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 text-muted">
          <li>
            CMMC Phase II.{" "}
            <FactLine entityType="regulation" slug="cmmc" field="phase_ii_status" />
          </li>
          <li>
            8(a) social-disadvantage rule.{" "}
            <FactLine
              entityType="regulation"
              slug="8a"
              field="social_disadvantage_rule"
            />
          </li>
          <li>
            Set-aside self-certification.{" "}
            <FactLine
              entityType="program"
              slug="set-asides"
              field="self_certification"
            />
          </li>
        </ul>
      </section>

      <section aria-labelledby="not-this-heading" className="mt-20">
        <h2 id="not-this-heading" className="font-serif text-2xl text-ink">
          What this is not
        </h2>
        {salesCopy.notThis.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-2xl leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section aria-labelledby="free-help-heading" className="mt-20">
        <h2 id="free-help-heading" className="font-serif text-2xl text-ink">
          The free help you should use first
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          APEX Accelerator of Alabama sits with the UAH Small Business
          Development Center. apexal.org states advising is at no cost. Call
          them before you buy a paid map. The SBA Alabama District Office is in
          Birmingham. There is no Huntsville satellite.
        </p>
        <dl className="mt-6 max-w-2xl space-y-4">
          {freeHelp.map((fact) => (
            <div key={`${fact.entity_slug}:${fact.field}`}>
              <dt className="text-sm text-muted">
                {fact.entity_slug === "apex-alabama" ? "APEX / UAH SBDC" : "SBA Alabama"}{" "}
                · {fact.field.replaceAll("_", " ")}
              </dt>
              <dd className="mt-1 text-ink">
                <SourcedFact fact={fact} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="mechanism-heading" className="mt-20">
        <h2 id="mechanism-heading" className="font-serif text-2xl text-ink">
          How this is built
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{salesCopy.mechanism}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          SAM.gov registration is always free.{" "}
          <FactLine entityType="program" slug="sam-gov" field="registration_cost" />
        </p>
      </section>

      <section aria-labelledby="modules-heading" className="mt-20">
        <h2 id="modules-heading" className="font-serif text-2xl text-ink">
          Nine modules
        </h2>
        <ol className="mt-6 max-w-2xl list-decimal space-y-4 pl-6 text-muted">
          {GUIDE_MODULES.map((entry) => (
            <li key={entry.slug}>
              <span className="text-ink">{entry.title}</span>
              <span className="mt-1 block text-sm">{entry.purpose}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="sample-heading" className="mt-20">
        <h2 id="sample-heading" className="font-serif text-2xl text-ink">
          Free sample
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Leave an email and get the free-help module: APEX, UAH SBDC, and the
          SBA Alabama District Office, each with a source and a date. You can
          also read it on the{" "}
          <Link href="/sample" className="text-brick hover:underline">
            sample page
          </Link>
          .
        </p>
        <SampleOptInForm className="mt-6 max-w-md" />
      </section>

      <section aria-labelledby="who-heading" className="mt-20">
        <h2 id="who-heading" className="font-serif text-2xl text-ink">
          Who built this
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{salesCopy.whoBuiltThis}</p>
      </section>

      <section aria-labelledby="objections-heading" className="mt-20">
        <h2 id="objections-heading" className="font-serif text-2xl text-ink">
          Objections
        </h2>
        <dl className="mt-6 max-w-2xl space-y-8">
          {salesCopy.objections.map((item) => (
            <div key={item.question}>
              <dt className="font-serif text-xl text-ink">{item.question}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Pricing />

      <section aria-labelledby="guarantee-heading" className="mt-20">
        <h2 id="guarantee-heading" className="font-serif text-2xl text-ink">
          Guarantee
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          60-day unconditional money-back. If you want a refund, email us
          through the{" "}
          <Link href="/contact" className="text-brick hover:underline">
            contact form
          </Link>
          . You get the full amount back. There is no performance-linked
          promise. This product does not promise an award, a certification, or
          revenue.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {salesCopy.currentInformationPromise}
        </p>
      </section>

      <section aria-labelledby="faq-heading" className="mt-20">
        <h2 id="faq-heading" className="font-serif text-2xl text-ink">
          FAQ
        </h2>
        <dl className="mt-6 max-w-2xl space-y-8">
          {salesCopy.faq.map((item) => (
            <div key={item.question}>
              <dt className="font-serif text-xl text-ink">{item.question}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="final-cta-heading" className="mt-20 border-t border-rule pt-16">
        <h2 id="final-cta-heading" className="font-serif text-2xl text-ink">
          Get the Map
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{hero.credibility}</p>
        <CheckoutForm
          tierId="199"
          label={hero.cta}
          variant="brick"
          className="mt-6"
        />
        <p className="mt-3 text-sm text-muted">{hero.guarantee}</p>
      </section>
    </div>
  );
}
