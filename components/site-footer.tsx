import Link from "next/link";
import { site } from "@/lib/site";

const legal = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/refunds", label: "Refunds" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p>
            {site.name}
            <span className="mx-2 text-rule">·</span>
            {site.domain}
          </p>
          <p className="mt-2 max-w-md">
            Independent reference. Not affiliated with or endorsed by the U.S.
            government, SAM.gov, GSA, SBA, the Department of War or Defense,
            the Army, NASA, or Redstone Arsenal.
          </p>
        </div>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
