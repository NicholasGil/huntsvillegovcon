import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Independent reference. Not government affiliated. Not legal advice. No award promise.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        {site.name} is an independent product. It is informational only. It is
        not legal, accounting, procurement, or cybersecurity advice.
      </p>
      <p>
        It is not affiliated with or endorsed by the U.S. government, SAM.gov,
        GSA, SBA, the Department of War or Defense, the Army, NASA, Redstone
        Arsenal, ACC-RSA, AMCOM, SMDC, MDA, NASA MSFC, AMC, USACE, DLA, or any
        named prime, including Boeing, Lockheed Martin, Northrop Grumman,
        Leidos, Dynetics, RTX, L3Harris, Aerojet, or Sierra Space.
      </p>
      <p>
        SAM.gov registration and SBA certifications are free through official
        portals. This product charges nothing for those filings and provides no
        registration service.
      </p>
      <p>
        Regulations and contacts change. Verify every fact with the issuing
        office and on the source page before you rely on it. The date on a fact
        is the date we checked the source, not a promise that the source is
        still current.
      </p>
      <p>
        No outcome of any kind is promised. This site does not promise an
        award, a certification, a contract, introductions, leads, or bid
        submission.
      </p>
      <p>
        If a sourced fact is wrong, use the{" "}
        <Link href="/contact" className="text-brick hover:underline">
          contact form
        </Link>
        . We treat a sourced error as a defect and correct it for everyone.
      </p>
    </LegalPage>
  );
}
