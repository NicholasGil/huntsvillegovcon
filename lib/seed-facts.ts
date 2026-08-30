import type {
  FactEntityType,
  VerificationMethod,
  WatchPriority,
} from "@/lib/database";

export type SeedFact = {
  entity_type: FactEntityType;
  entity_slug: string;
  field: string;
  value: string;
  source_url: string;
  verified_at: string;
  verification_method: VerificationMethod;
  watch_priority: WatchPriority;
};

export type SeedChange = {
  headline: string;
  detail: string;
  source_url: string;
  effective_date: string | null;
};

export const AGENCY_SLUGS = [
  "acc-rsa",
  "amcom",
  "smdc",
  "mda",
  "nasa-msfc",
  "amc",
  "usace",
  "dla",
] as const;

export const PRIME_SLUGS = [
  "boeing",
  "lockheed",
  "northrop",
  "leidos-dynetics",
  "rtx",
  "l3harris-aerojet",
  "sierra-space",
] as const;

export const FREE_HELP_SLUGS = [
  "apex-alabama",
  "uah-sbdc",
  "sba-alabama",
] as const;

export const FREE_HELP_SAMPLE_FIELDS = [
  "name",
  "address",
  "email",
  "phone",
  "advising_cost",
  "huntsville_satellite",
] as const;

export const FACT_FIELD_LABELS: Record<string, string> = {
  name: "Name",
  address: "Address",
  email: "Email",
  phone: "Phone",
  website: "Website",
  advising_cost: "Advising cost",
  huntsville_satellite: "Huntsville satellite",
  what_it_buys: "What it buys",
  sb_contact: "Small-business contact",
  registration_cost: "Registration cost",
  phase_ii_status: "Phase II status",
  self_certification: "Self-certification",
  social_disadvantage_rule: "Social-disadvantage rule",
  certification_portal: "Certification portal",
  fy2024_contracts: "FY2024 contracts",
};

export function fieldLabel(field: string): string {
  return FACT_FIELD_LABELS[field] ?? field.replaceAll("_", " ");
}

export function slugOrder(slug: string, order: readonly string[]): number {
  const index = order.findIndex((item) => item === slug);
  return index === -1 ? order.length : index;
}

export function factKey(
  fact: Pick<SeedFact, "entity_type" | "entity_slug" | "field">,
): string {
  return `${fact.entity_type}:${fact.entity_slug}:${fact.field}`;
}

export function isHttpUrl(value: string): boolean {
  return value.startsWith("https://") || value.startsWith("http://");
}

const AS_OF = "2026-08-30";

export const seedFacts: readonly SeedFact[] = [
  {
    entity_type: "regulation",
    entity_slug: "cmmc",
    field: "phase_ii_status",
    value:
      "Phase II suspended July 13, 2026. New procurements currently cannot designate a Level 2 or Level 3 assessment requirement, and waiver procedures are halted pending a 60-day CIO review. Level 1 self-assessment and DFARS 252.204-7012/7019/7020 remain in force.",
    source_url:
      "https://dodcio.defense.gov/Portals/0/Documents/Library/ImplementingSuspensionCMMC-PhaseII.pdf",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "regulation",
    entity_slug: "8a",
    field: "social_disadvantage_rule",
    value:
      "⟦VERIFY: high-priority Regulatory Watch. Proposed rule June 11, 2026; final rule August 11, 2026; effective September 10, 2026. Confirm the rule took effect as scheduled and check for litigation before publishing anything in the past tense.⟧",
    source_url:
      "https://www.sba.gov/article/2026/06/11/sba-reforms-8a-business-development-program-end-racial-discrimination-federal-contracting",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "program",
    entity_slug: "set-asides",
    field: "self_certification",
    value:
      "None of the major socioeconomic set-asides are self-certified. Applications run through certifications.sba.gov, not certify.sba.gov.",
    source_url: "https://certifications.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "program",
    entity_slug: "sam-gov",
    field: "registration_cost",
    value:
      "Registration in SAM.gov is always free. The government will never ask you to pay to register, update, or renew.",
    source_url: "https://sam.gov/entity-registration",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "apex-alabama",
    field: "name",
    value: "APEX Accelerator of Alabama",
    source_url: "https://apexal.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "apex-alabama",
    field: "address",
    value:
      "Business Administration Building, 800 Ben Graves Drive NW, Suite 126, Huntsville, AL 35816",
    source_url: "https://apexal.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "apex-alabama",
    field: "email",
    value: "sbdc@uah.edu",
    source_url: "https://www.uah.edu/sbdc/apex",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "apex-alabama",
    field: "phone",
    value: "⟦VERIFY: 256-824-7232 (SBDC) / 256-824-2739 (APEX)⟧",
    source_url: "https://apexal.org",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "apex-alabama",
    field: "advising_cost",
    value: "Advising is provided at no cost.",
    source_url: "https://apexal.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-alabama",
    field: "name",
    value: "SBA Alabama District Office",
    source_url: "https://www.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-alabama",
    field: "address",
    value: "2 North Twentieth Street, Suite 325, Birmingham, AL 35203",
    source_url: "https://www.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-alabama",
    field: "phone",
    value: "(205) 290-7101",
    source_url: "https://www.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-alabama",
    field: "huntsville_satellite",
    value: "No Huntsville satellite. Local delivery runs through SBDC/APEX and SCORE.",
    source_url: "https://www.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "acc-rsa",
    field: "name",
    value: "Army Contracting Command–Redstone Arsenal (ACC-RSA)",
    source_url: "https://www.army.mil/acc-rsa",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "acc-rsa",
    field: "what_it_buys",
    value:
      "Largest contracting center in the Army. 900+ acquisition professionals; 29 ACAT I programs. Weapon systems, SETA, prototyping, FMS, installation and range support.",
    source_url: "https://www.army.mil/acc-rsa",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "acc-rsa",
    field: "fy2024_contracts",
    value: "14,380+ contracts worth $28B+ in FY2024.",
    source_url: "https://www.army.mil/acc-rsa",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "acc-rsa",
    field: "sb_contact",
    value:
      "ACC-RSA publishes no individual small-business contact on its own site, only a general Small Business Office portal with appointment booking.",
    source_url: "https://www.army.mil/acc-rsa",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "amcom",
    field: "name",
    value: "AMCOM",
    source_url: "https://www.amcom.army.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "amcom",
    field: "what_it_buys",
    value:
      "Aircraft manufacturing, guided missile and space vehicle manufacturing, engineering services, aviation transportation support, R&D.",
    source_url: "https://www.amcom.army.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "smdc",
    field: "name",
    value: "SMDC",
    source_url: "https://www.smdc.army.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "smdc",
    field: "what_it_buys",
    value:
      "R&D in physical/engineering/life sciences, engineering services, facilities support, security and patrol services, computer facilities management.",
    source_url: "https://www.smdc.army.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "mda",
    field: "name",
    value: "MDA",
    source_url: "https://www.mda.mil/business/opportunities.html",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "mda",
    field: "what_it_buys",
    value: "Missile Defense System requirements and components.",
    source_url: "https://www.mda.mil/business/opportunities.html",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "nasa-msfc",
    field: "name",
    value: "NASA MSFC",
    source_url: "https://doingbusiness.msfc.nasa.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "nasa-msfc",
    field: "what_it_buys",
    value: "Space vehicle manufacturing, propulsion, R&D, engineering and facilities support.",
    source_url: "https://doingbusiness.msfc.nasa.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "amc",
    field: "name",
    value: "Army Materiel Command",
    source_url: "https://www.amc.army.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "agency",
    entity_slug: "amc",
    field: "what_it_buys",
    value: "HQ at Redstone. Global Army supply chain, logistics, sustainment.",
    source_url: "https://www.amc.army.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "boeing",
    field: "name",
    value: "Boeing",
    source_url: "https://www.boeingsuppliers.com/supplier_diversity.html",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "lockheed",
    field: "name",
    value: "Lockheed Martin",
    source_url: "⟦VERIFY: Lockheed Martin small business programs URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "northrop",
    field: "name",
    value: "Northrop Grumman",
    source_url: "⟦VERIFY: Northrop Grumman OSBP and supplier registration guide URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "leidos-dynetics",
    field: "name",
    value: "Leidos / Dynetics",
    source_url: "⟦VERIFY: Leidos small business relationships URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "rtx",
    field: "name",
    value: "RTX",
    source_url: "⟦VERIFY: RTX small business URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "l3harris-aerojet",
    field: "name",
    value: "L3Harris / Aerojet Rocketdyne",
    source_url: "⟦VERIFY: L3Harris SBLO page URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "sierra-space",
    field: "name",
    value: "Sierra Space",
    source_url: "⟦VERIFY: Sierra Space suppliers URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "apbi",
    field: "name",
    value: "AMCOM / Team Redstone APBI",
    source_url: "⟦VERIFY: current APBI dates via AMCOM news releases⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "ndia-tennessee-valley",
    field: "name",
    value: "NDIA Tennessee Valley Chapter",
    source_url: "https://ndiatennesseevalley.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "smd-symposium",
    field: "name",
    value: "Space and Missile Defense Symposium",
    source_url: "https://smdsymposium.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "smd-symposium",
    field: "dates",
    value: "⟦VERIFY: next occurrence dates; brief cites Aug 10–12, 2027⟧",
    source_url: "https://smdsymposium.org",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "hsv-chamber",
    field: "name",
    value: "Huntsville/Madison County Chamber — Team Redstone",
    source_url: "https://hsvchamber.org/team-redstone",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
];

export const seedChanges: readonly SeedChange[] = [
  {
    headline: "CMMC Phase II suspended",
    detail:
      "The November 10, 2026 deadline for mandatory Level 2 third-party (C3PAO) certification is no longer in effect. Level 1 self-assessment and DFARS 252.204-7012/7019/7020 remain in force.",
    source_url:
      "https://dodcio.defense.gov/Portals/0/Documents/Library/ImplementingSuspensionCMMC-PhaseII.pdf",
    effective_date: "2026-07-13",
  },
  {
    headline: "8(a) social-disadvantage presumption under rule change",
    detail:
      "⟦VERIFY: high-priority Regulatory Watch. Confirm the rule took effect as scheduled and check for litigation before publishing anything in the past tense.⟧",
    source_url:
      "https://www.sba.gov/article/2026/06/11/sba-reforms-8a-business-development-program-end-racial-discrimination-federal-contracting",
    effective_date: "2026-09-10",
  },
  {
    headline: "Department of War rebrand",
    detail:
      "DoD is officially the Department of War. Sites and portal URLs are mid-transition across dodcio.defense.gov, war.gov, and business.defense.gov.",
    source_url:
      "https://www.whitehouse.gov/presidential-actions/2025/09/restoring-the-united-states-department-of-war/",
    effective_date: "2025-09-01",
  },
];

export function seedFactsMatching(
  matches: (fact: SeedFact) => boolean,
): SeedFact[] {
  return seedFacts.filter(matches);
}

export function findSeedFact(
  entityType: FactEntityType,
  entitySlug: string,
  field: string,
): SeedFact | null {
  return (
    seedFacts.find(
      (fact) =>
        fact.entity_type === entityType &&
        fact.entity_slug === entitySlug &&
        fact.field === field,
    ) ?? null
  );
}

export function freeHelpSampleFacts(): SeedFact[] {
  const wanted = new Set<string>(FREE_HELP_SAMPLE_FIELDS);
  const found = seedFactsMatching(
    (fact) =>
      fact.entity_type === "resource" &&
      (fact.entity_slug === "apex-alabama" || fact.entity_slug === "sba-alabama") &&
      wanted.has(fact.field),
  );
  const order = [
    "apex-alabama:name",
    "apex-alabama:address",
    "apex-alabama:email",
    "apex-alabama:phone",
    "apex-alabama:advising_cost",
    "sba-alabama:name",
    "sba-alabama:address",
    "sba-alabama:phone",
    "sba-alabama:huntsville_satellite",
  ];
  return [...found].sort(
    (a, b) =>
      order.indexOf(`${a.entity_slug}:${a.field}`) -
      order.indexOf(`${b.entity_slug}:${b.field}`),
  );
}
