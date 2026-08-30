import {
  AGENCY_SLUGS,
  ALL_PRIME_SLUGS,
  COMPLIANCE_RESOURCE_SLUGS,
  COMPLIANCE_SLUGS,
  FINDING_WORK_SLUGS,
  FREE_HELP_SLUGS,
  REGISTRATION_SLUGS,
  SET_ASIDE_SLUGS,
  isStartHereFact,
  type SeedFact,
} from "@/lib/seed-facts";

export type GuideModule = {
  slug: string;
  number: number;
  title: string;
  purpose: string;
  unverified: readonly string[];
  matchesFact: (fact: SeedFact) => boolean;
};

const agencySlugs: readonly string[] = AGENCY_SLUGS;
const primeSlugs: readonly string[] = ALL_PRIME_SLUGS;
const freeHelpSlugs: readonly string[] = FREE_HELP_SLUGS;
const registrationSlugs: readonly string[] = REGISTRATION_SLUGS;
const setAsideSlugs: readonly string[] = SET_ASIDE_SLUGS;
const complianceSlugs: readonly string[] = COMPLIANCE_SLUGS;
const complianceResourceSlugs: readonly string[] = COMPLIANCE_RESOURCE_SLUGS;
const findingWorkSlugs: readonly string[] = FINDING_WORK_SLUGS;

export const GUIDE_MODULES: readonly GuideModule[] = [
  {
    slug: "start-here",
    number: 1,
    title: "Start Here: Where You Actually Are",
    purpose:
      "Readiness snapshot in the first 10 minutes: registered or not, certification eligibility, compliance floor, prime vs. sub, which free program to call first.",
    unverified: [],
    matchesFact: isStartHereFact,
  },
  {
    slug: "free-help",
    number: 2,
    title: "The Free Help You Should Use First",
    purpose:
      "APEX Accelerator, SBDC, SCORE, SBA 7(j), DAU. What each does, what it costs (nothing), how to book. Deliberately module 2.",
    unverified: [
      "SCORE Huntsville booking path",
      "SBA 7(j) / Empower to Grow current enrollment URL",
      "DAU public course list relevant to new vendors",
      "UAH SBDC booking path",
    ],
    matchesFact: (fact) =>
      fact.entity_type === "resource" && freeHelpSlugs.includes(fact.entity_slug),
  },
  {
    slug: "getting-registered",
    number: 3,
    title: "Getting Registered",
    purpose:
      "UEI, CAGE, SAM.gov (always free), NAICS, size standards. Registration is always free.",
    unverified: [],
    matchesFact: (fact) =>
      fact.entity_type === "program" &&
      registrationSlugs.includes(fact.entity_slug),
  },
  {
    slug: "who-buys",
    number: 4,
    title: "Who Buys What at Redstone",
    purpose:
      "ACC-RSA, AMCOM, SMDC, MDA, NASA MSFC, AMC, USACE, DLA. Honest gap: ACC-RSA publishes no individual small-business contact.",
    unverified: [
      "USACE and DLA Redstone-specific buying descriptions",
      "AMC/AMCOM/SMDC/MDA/NASA MSFC individual small-business contacts (names rotate; confirm before you call)",
    ],
    matchesFact: (fact) =>
      fact.entity_type === "agency" && agencySlugs.includes(fact.entity_slug),
  },
  {
    slug: "the-primes",
    number: 5,
    title: "The Primes",
    purpose:
      "Boeing, Lockheed, Northrop, Leidos/Dynetics, RTX, L3Harris/Aerojet, Sierra Space, and Huntsville mid-tiers. FAR 19.7 reframe. Portal gaps stated plainly.",
    unverified: [
      "current FAR 19.702 dollar thresholds",
      "official homepage URLs for Blue Origin, Torch, COLSA, Quantum, and Davidson",
    ],
    matchesFact: (fact) =>
      (fact.entity_type === "prime" && primeSlugs.includes(fact.entity_slug)) ||
      (fact.entity_type === "regulation" && fact.entity_slug === "far-19-7"),
  },
  {
    slug: "set-asides",
    number: 6,
    title: "Set-Asides and Certifications",
    purpose:
      "8(a) post-June-2026 rules, HUBZone, WOSB/EDWOSB, SDVOSB. None are self-certified. Use certifications.sba.gov, not certify.sba.gov.",
    unverified: [
      "8(a) social-disadvantage rule effective date and any litigation",
    ],
    matchesFact: (fact) =>
      (fact.entity_type === "program" &&
        setAsideSlugs.includes(fact.entity_slug)) ||
      (fact.entity_type === "regulation" && fact.entity_slug === "8a"),
  },
  {
    slug: "compliance-floor",
    number: 7,
    title: "The Compliance Floor",
    purpose:
      "CMMC current status from the facts table, DFARS 7012/7019/7020, SPRS, NIST 800-171. Phase II suspended July 13, 2026; L1 and DFARS still in force.",
    unverified: ["NIST SP 800-171 Rev 3 transition timing"],
    matchesFact: (fact) =>
      (fact.entity_type === "regulation" &&
        complianceSlugs.includes(fact.entity_slug)) ||
      (fact.entity_type === "resource" &&
        complianceResourceSlugs.includes(fact.entity_slug)),
  },
  {
    slug: "finding-work",
    number: 8,
    title: "Finding Work",
    purpose:
      "SAM.gov, sources sought over solicitations, SubNet, DSBS, USAspending, Rule of Two. Do not chase GSA Schedule first.",
    unverified: [],
    matchesFact: (fact) =>
      fact.entity_type === "resource" &&
      (findingWorkSlugs.includes(fact.entity_slug) ||
        fact.entity_slug === "dod-portals"),
  },
  {
    slug: "showing-up",
    number: 9,
    title: "Showing Up",
    purpose:
      "APBI, NDIA Tennessee Valley, SMD Symposium, Chamber. Dates stay unverified until checked.",
    unverified: [
      "current APBI dates via AMCOM news releases",
      "NDIA Tennessee Valley year-round dates",
      "SMD Symposium next-occurrence dates",
      "Chamber Team Redstone fee or membership status",
    ],
    matchesFact: (fact) => fact.entity_type === "event",
  },
];

export type GuideModuleSlug = (typeof GUIDE_MODULES)[number]["slug"];

export function getGuideModule(slug: string): GuideModule | null {
  return GUIDE_MODULES.find((module) => module.slug === slug) ?? null;
}

export function isGuideModuleSlug(slug: string): slug is GuideModuleSlug {
  return getGuideModule(slug) !== null;
}
