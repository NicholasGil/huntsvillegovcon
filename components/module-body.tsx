import { MODULE_COPY } from "@/lib/map-copy";
import type { GuideModuleSlug } from "@/lib/guide-modules";
import { isHttpUrl } from "@/lib/seed-facts";

function TextWithUrls({ text }: { text: string }) {
  const parts = text.split(/(https:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (!isHttpUrl(part)) {
          return <span key={`${part}-${index}`}>{part}</span>;
        }
        const href = part.replace(/[.,)]+$/, "");
        const trailing = part.slice(href.length);
        return (
          <span key={`${part}-${index}`}>
            <a href={href} className="break-all text-brick hover:underline">
              {href}
            </a>
            {trailing}
          </span>
        );
      })}
    </>
  );
}

export function ModuleBody({ slug }: { slug: GuideModuleSlug }) {
  const copy = MODULE_COPY[slug];

  return (
    <div className="mt-8 space-y-10">
      <p className="max-w-xl text-ink">{copy.lead}</p>
      {copy.warnings
        ? copy.warnings.map((warning) => (
            <p
              key={warning}
              className="max-w-xl border border-brick bg-paper-raised px-4 py-3 text-ink"
            >
              <TextWithUrls text={warning} />
            </p>
          ))
        : null}
      {copy.checks ? (
        <section>
          <h2 className="font-serif text-2xl text-ink">Readiness snapshot</h2>
          <ol className="mt-4 max-w-xl space-y-5">
            {copy.checks.map((check, index) => (
              <li key={check.question} className="border border-rule px-4 py-4">
                <p className="text-ink">
                  {index + 1}. {check.question}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Yes. <TextWithUrls text={check.ifYes} />
                </p>
                <p className="mt-1 text-sm text-muted">
                  No. <TextWithUrls text={check.ifNo} />
                </p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
      {copy.paths ? (
        <section>
          <h2 className="font-serif text-2xl text-ink">Four paths</h2>
          <ol className="mt-4 max-w-xl space-y-6">
            {copy.paths.map((path) => (
              <li key={path.title}>
                <h3 className="font-serif text-xl text-ink">{path.title}</h3>
                <p className="mt-2 text-muted">{path.when}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-ink">
                  {path.then.map((step) => (
                    <li key={step}>
                      <TextWithUrls text={step} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
      {copy.table ? (
        <section className="overflow-x-auto">
          <h2 id={`${slug}-table`} className="font-serif text-2xl text-ink">
            {copy.table.caption}
          </h2>
          <table
            aria-labelledby={`${slug}-table`}
            className="mt-4 w-full min-w-[40rem] border-collapse text-left text-sm"
          >
            <thead>
              <tr className="border-b border-rule">
                {copy.table.headers.map((header) => (
                  <th key={header} className="py-2 pr-4 font-medium text-ink">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.table.rows.map((row) => (
                <tr key={row.join("|")} className="border-b border-rule align-top">
                  {row.map((cell, cellIndex) => (
                    <td key={`${cell}-${cellIndex}`} className="py-3 pr-4 text-ink">
                      <TextWithUrls text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}
      {copy.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 max-w-xl text-ink">
              <TextWithUrls text={paragraph} />
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
