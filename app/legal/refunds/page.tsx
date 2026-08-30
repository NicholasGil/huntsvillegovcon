import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { salesCopy } from "@/lib/sales";

export const metadata: Metadata = {
  title: "Refunds",
  description: "60-day unconditional refund and the Current Information Promise.",
};

export default function RefundsPage() {
  return (
    <LegalPage title="Refunds">
      <p>
        60-day unconditional money-back. If you want a refund, email us through
        the{" "}
        <Link href="/contact" className="text-brick hover:underline">
          contact form
        </Link>
        . You get a full refund.
      </p>
      <p>{salesCopy.currentInformationPromise}</p>
      <p>
        There is no performance-linked refund. This product does not promise an
        award, a certification, or revenue. There is no form to fill beyond
        that email. We do not keep a percentage. We do not ask you to return a
        file.
      </p>
      <p>
        The $599 updates tier is a one-time 12-month purchase. It does not
        auto-renew.
      </p>
    </LegalPage>
  );
}
