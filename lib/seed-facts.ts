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

export const MID_TIER_SLUGS = [
  "blue-origin",
  "torch",
  "colsa",
  "quantum",
  "davidson",
] as const;

export const ALL_PRIME_SLUGS = [...PRIME_SLUGS, ...MID_TIER_SLUGS] as const;

export const FREE_HELP_SLUGS = [
  "apex-alabama",
  "uah-sbdc",
  "sba-alabama",
  "score",
  "sba-7j",
  "dau",
] as const;

export const REGISTRATION_SLUGS = [
  "uei",
  "cage",
  "sam-gov",
  "naics",
  "size-standard",
] as const;

export const SET_ASIDE_SLUGS = [
  "set-asides",
  "hubzone",
  "wosb",
  "sdvosb",
] as const;

export const COMPLIANCE_SLUGS = [
  "cmmc",
  "nist-800-171",
  "dfars-7012",
  "dfars-7019",
  "dfars-7020",
  "dcaa",
] as const;

export const COMPLIANCE_RESOURCE_SLUGS = ["sprs", "dibnet"] as const;

export const FINDING_WORK_SLUGS = [
  "sam-opportunities",
  "sources-sought",
  "rule-of-two",
  "subnet",
  "dsbs",
  "usaspending",
  "gsa-schedule",
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
  dates: "Dates",
  referral_code: "Referral code",
  cost: "Cost",
  revision: "Revision",
  portal_urls: "Portal URLs",
  website: "Website",
  booking: "How to book",
  sb_portal: "Small-business portal",
  no_public_portal: "Public SB portal",
  processing_time: "Processing time",
  renewal: "Annual renewal",
  gsa_warning: "GSA warning",
  checklist: "Entity checklist",
  what_it_is: "What it is",
  official_url: "Official URL",
  rule: "Rule",
  sequence: "Rule sequence",
  map_url: "Live map",
  ffp_exception: "FFP accounting exception",
  in_force: "Still in force",
  subcontracting_plan: "Subcontracting plan",
  new_business_note: "New-business note",
  phishing_alert: "Phishing alert",
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
    entity_type: "regulation",
    entity_slug: "nist-800-171",
    field: "revision",
    value:
      "⟦VERIFY: NIST SP 800-171 Rev 3 transition timing. CMMC L2 still maps to Rev 2 in the cited DoD CIO material.⟧",
    source_url: "https://dodcio.defense.gov/CMMC/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "resource",
    entity_slug: "dod-portals",
    field: "portal_urls",
    value:
      "DoD is officially the Department of War. Sites and portal URLs are mid-transition across dodcio.defense.gov, war.gov, and business.defense.gov.",
    source_url:
      "https://www.whitehouse.gov/presidential-actions/2025/09/restoring-the-united-states-department-of-war/",
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
    entity_slug: "apex-alabama",
    field: "website",
    value: "https://apexal.org",
    source_url: "https://apexal.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "apex-alabama",
    field: "booking",
    value:
      "Use the contact path on apexal.org. Confirm the current appointment or intake step on that page before you call.",
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
    entity_type: "resource",
    entity_slug: "sba-alabama",
    field: "website",
    value: "https://www.sba.gov",
    source_url: "https://www.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-alabama",
    field: "booking",
    value:
      "The district office is in Birmingham. Confirm hours and intake on sba.gov before you call. There is no Huntsville satellite.",
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
    source_url:
      "https://www.lockheedmartin.com/en-us/suppliers/small-business-programs.html",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "northrop",
    field: "name",
    value: "Northrop Grumman",
    source_url: "https://www.northropgrumman.com/suppliers/osbp",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "leidos-dynetics",
    field: "name",
    value: "Leidos / Dynetics",
    source_url: "https://www.leidos.com/suppliers/small-business-relationships",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "rtx",
    field: "name",
    value: "RTX",
    source_url: "https://www.rtx.com/suppliers/small-business",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "l3harris-aerojet",
    field: "name",
    value: "L3Harris / Aerojet Rocketdyne",
    source_url:
      "https://arsuppliernet.l3harris.com/suppliernet/doing-business-ar/small-business-and-small-business-liaison-officers-sblo",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "sierra-space",
    field: "name",
    value: "Sierra Space",
    source_url: "https://www.sierraspace.com/suppliers/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "apbi",
    field: "name",
    value: "AMCOM / Team Redstone APBI",
    source_url:
      "https://www.amcom.army.mil/News/News-Releases/Article/3275579/team-redstones-advance-planning-briefings-to-industry-slated-for-march-21-23/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "apbi",
    field: "dates",
    value:
      "Historically March. ⟦VERIFY: current dates via AMCOM news releases⟧",
    source_url: "https://www.amcom.army.mil/News/News-Releases/",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "ndia-tennessee-valley",
    field: "name",
    value: "NDIA Tennessee Valley Chapter",
    source_url: "https://www.ndiatennvalley.org/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "ndia-tennessee-valley",
    field: "referral_code",
    value: "NDITVC",
    source_url: "https://www.ndiatennvalley.org/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "event",
    entity_slug: "ndia-tennessee-valley",
    field: "dates",
    value: "Year-round. ⟦VERIFY: current chapter dates⟧",
    source_url: "https://www.ndiatennvalley.org/",
    verified_at: AS_OF,
    verification_method: "secondary",
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
  {
    entity_type: "event",
    entity_slug: "hsv-chamber",
    field: "cost",
    value:
      "⟦VERIFY: Chamber programs are often membership- or fee-based. Do not describe them as free without checking.⟧",
    source_url: "https://hsvchamber.org/team-redstone",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "uah-sbdc",
    field: "name",
    value: "UAH Small Business Development Center",
    source_url: "https://www.uah.edu/sbdc",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "uah-sbdc",
    field: "website",
    value: "https://www.uah.edu/sbdc",
    source_url: "https://www.uah.edu/sbdc",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "uah-sbdc",
    field: "booking",
    value: "⟦VERIFY: UAH SBDC booking path⟧",
    source_url: "https://www.uah.edu/sbdc",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "score",
    field: "name",
    value: "SCORE",
    source_url: "https://www.score.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "score",
    field: "website",
    value: "https://www.score.org",
    source_url: "https://www.score.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "score",
    field: "advising_cost",
    value: "SCORE mentoring is offered at no cost on the national site.",
    source_url: "https://www.score.org",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "score",
    field: "booking",
    value: "⟦VERIFY: SCORE Huntsville booking path⟧",
    source_url: "https://www.score.org",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-7j",
    field: "name",
    value: "SBA 7(j) Management and Technical Assistance Program",
    source_url:
      "https://www.sba.gov/federal-contracting/contracting-assistance-programs/7j-management-technical-assistance-program",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-7j",
    field: "website",
    value:
      "https://www.sba.gov/federal-contracting/contracting-assistance-programs/7j-management-technical-assistance-program",
    source_url:
      "https://www.sba.gov/federal-contracting/contracting-assistance-programs/7j-management-technical-assistance-program",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sba-7j",
    field: "booking",
    value: "⟦VERIFY: SBA 7(j) / Empower to Grow current enrollment URL⟧",
    source_url:
      "https://www.sba.gov/federal-contracting/contracting-assistance-programs/7j-management-technical-assistance-program",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "dau",
    field: "name",
    value: "Defense Acquisition University",
    source_url: "https://www.dau.edu/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "dau",
    field: "website",
    value: "https://www.dau.edu/",
    source_url: "https://www.dau.edu/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "dau",
    field: "booking",
    value: "⟦VERIFY: DAU public course list relevant to new vendors⟧",
    source_url: "https://www.dau.edu/",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "uei",
    field: "what_it_is",
    value:
      "Unique Entity ID. Replaced DUNS in April 2022. Free. Issued through SAM.gov entity registration.",
    source_url: "https://sam.gov/entity-registration",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "cage",
    field: "what_it_is",
    value:
      "Commercial and Government Entity code. Free. Issued concurrently with SAM registration.",
    source_url: "https://www.acquisition.gov/far/52.204-16",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "sam-gov",
    field: "processing_time",
    value:
      "SAM.gov registration is free. Processing can take up to 10 business days.",
    source_url: "https://sam.gov/entity-registration",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "sam-gov",
    field: "checklist",
    value: "https://sam.gov/sites/default/files/2024-11/entity-checklist.pdf",
    source_url: "https://sam.gov/entity-registration",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "sam-gov",
    field: "renewal",
    value:
      "Annual renewal is free. Required every 365 days or the entity is ineligible for award.",
    source_url: "https://sam.gov/entity-registration",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "sam-gov",
    field: "gsa_warning",
    value:
      "Registration is always free. The government will never ask you to pay to register, update, or renew.",
    source_url: "https://content.govdelivery.com/accounts/USGSA/bulletins/358af1f",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "program",
    entity_slug: "sam-gov",
    field: "phishing_alert",
    value: "https://sam.gov/alerts/recognize-and-avoid-phishing-emails",
    source_url: "https://sam.gov/alerts/recognize-and-avoid-phishing-emails",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "naics",
    field: "what_it_is",
    value:
      "North American Industry Classification System codes used to classify the work you do.",
    source_url: "https://www.census.gov/naics/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "size-standard",
    field: "what_it_is",
    value:
      "SBA size standards determine small-business status for a NAICS code.",
    source_url: "https://legacy.sba.gov/document/support-table-size-standards",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "size-standard",
    field: "official_url",
    value: "https://www.law.cornell.edu/cfr/text/13/121.101",
    source_url: "https://www.law.cornell.edu/cfr/text/13/121.101",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "regulation",
    entity_slug: "far-19-7",
    field: "subcontracting_plan",
    value:
      "A prime that is not itself a small business and that is above the FAR 19.7 subcontracting-plan threshold must have a plan. A capability statement helps that prime meet the plan. It is not a favor. ⟦VERIFY: current FAR 19.702 dollar thresholds⟧",
    source_url: "https://www.acquisition.gov/far/subpart-19.7",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "boeing",
    field: "sb_portal",
    value: "https://www.boeingsuppliers.com/supplier_diversity.html",
    source_url: "https://www.boeingsuppliers.com/supplier_diversity.html",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "lockheed",
    field: "sb_portal",
    value:
      "https://www.lockheedmartin.com/en-us/suppliers/small-business-programs.html",
    source_url:
      "https://www.lockheedmartin.com/en-us/suppliers/small-business-programs.html",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "northrop",
    field: "sb_portal",
    value: "https://www.northropgrumman.com/suppliers/osbp",
    source_url: "https://www.northropgrumman.com/suppliers/osbp",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "leidos-dynetics",
    field: "sb_portal",
    value: "https://www.leidos.com/suppliers/small-business-relationships",
    source_url: "https://www.leidos.com/suppliers/small-business-relationships",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "rtx",
    field: "sb_portal",
    value: "https://www.rtx.com/suppliers/small-business",
    source_url: "https://www.rtx.com/suppliers/small-business",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "l3harris-aerojet",
    field: "sb_portal",
    value:
      "https://arsuppliernet.l3harris.com/suppliernet/doing-business-ar/small-business-and-small-business-liaison-officers-sblo",
    source_url:
      "https://arsuppliernet.l3harris.com/suppliernet/doing-business-ar/small-business-and-small-business-liaison-officers-sblo",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "sierra-space",
    field: "sb_portal",
    value: "https://www.sierraspace.com/suppliers/",
    source_url: "https://www.sierraspace.com/suppliers/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "blue-origin",
    field: "name",
    value: "Blue Origin",
    source_url: "⟦VERIFY: official Blue Origin site URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "blue-origin",
    field: "no_public_portal",
    value:
      "No public small-business supplier portal was found. Confirm on the company site before you send anything.",
    source_url: "⟦VERIFY: official Blue Origin site URL used for the portal search⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "torch",
    field: "name",
    value: "Torch Technologies",
    source_url: "⟦VERIFY: official Torch Technologies site URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "torch",
    field: "no_public_portal",
    value:
      "No public small-business supplier portal was found. Confirm on the company site before you send anything.",
    source_url: "⟦VERIFY: official Torch Technologies site URL used for the portal search⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "colsa",
    field: "name",
    value: "COLSA",
    source_url: "⟦VERIFY: official COLSA site URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "colsa",
    field: "no_public_portal",
    value:
      "No public small-business supplier portal was found. Confirm on the company site before you send anything.",
    source_url: "⟦VERIFY: official COLSA site URL used for the portal search⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "quantum",
    field: "name",
    value: "Quantum Research International",
    source_url: "⟦VERIFY: official Quantum Research International site URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "quantum",
    field: "no_public_portal",
    value:
      "No public small-business supplier portal was found. Confirm on the company site before you send anything.",
    source_url:
      "⟦VERIFY: official Quantum Research International site URL used for the portal search⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "davidson",
    field: "name",
    value: "Davidson Technologies",
    source_url: "⟦VERIFY: official Davidson Technologies site URL⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "prime",
    entity_slug: "davidson",
    field: "no_public_portal",
    value:
      "No public small-business supplier portal was found. Confirm on the company site before you send anything.",
    source_url:
      "⟦VERIFY: official Davidson Technologies site URL used for the portal search⟧",
    verified_at: AS_OF,
    verification_method: "secondary",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "hubzone",
    field: "map_url",
    value: "https://maps.certify.sba.gov/hubzone/map",
    source_url: "https://maps.certify.sba.gov/hubzone/map",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "program",
    entity_slug: "hubzone",
    field: "what_it_is",
    value:
      "HUBZone status is determined on SBA's live map. This map does not publish a static Huntsville tract list.",
    source_url: "https://maps.certify.sba.gov/hubzone/map",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "program",
    entity_slug: "wosb",
    field: "official_url",
    value: "https://www.sba.gov/wosb",
    source_url: "https://www.sba.gov/wosb",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "wosb",
    field: "what_it_is",
    value:
      "Women-Owned Small Business and EDWOSB certification runs through SBA. It is not self-certified.",
    source_url: "https://www.sba.gov/wosb",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "program",
    entity_slug: "sdvosb",
    field: "what_it_is",
    value:
      "Service-Disabled Veteran-Owned Small Business certification moved to SBA on January 1, 2023. It is not self-certified.",
    source_url: "https://certifications.sba.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "regulation",
    entity_slug: "8a",
    field: "sequence",
    value:
      "Proposed 2026-06-11. Final 2026-08-11. Effective 2026-09-10. ⟦VERIFY: litigation and whether the effective date held⟧",
    source_url:
      "https://www.sba.gov/article/2026/06/11/sba-reforms-8a-business-development-program-end-racial-discrimination-federal-contracting",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "regulation",
    entity_slug: "dfars-7012",
    field: "in_force",
    value:
      "DFARS 252.204-7012 (safeguarding covered defense information and cyber incident reporting) remains in force while CMMC Phase II is suspended.",
    source_url:
      "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "regulation",
    entity_slug: "dfars-7019",
    field: "in_force",
    value:
      "DFARS 252.204-7019 (notice of NIST SP 800-171 DoD assessment requirements) remains in force.",
    source_url:
      "https://www.acquisition.gov/dfars/252.204-7019-notice-nist-sp-800-171-dod-assessment-requirements.",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "regulation",
    entity_slug: "dfars-7020",
    field: "in_force",
    value:
      "DFARS 252.204-7020 (NIST SP 800-171 DoD assessment requirements) remains in force.",
    source_url:
      "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171-dod-assessment-requirements.",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "resource",
    entity_slug: "sprs",
    field: "what_it_is",
    value:
      "Supplier Performance Risk System is where DoD NIST SP 800-171 assessment scores are posted under DFARS 7019/7020.",
    source_url: "https://www.sprs.csd.disa.mil/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "high",
  },
  {
    entity_type: "resource",
    entity_slug: "sprs",
    field: "official_url",
    value: "https://www.sprs.csd.disa.mil/",
    source_url: "https://www.sprs.csd.disa.mil/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "dibnet",
    field: "official_url",
    value: "https://dibnet.dod.mil",
    source_url: "https://dibnet.dod.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "dibnet",
    field: "what_it_is",
    value:
      "DIBNet is the DoD cyber incident reporting portal used with DFARS 252.204-7012.",
    source_url: "https://dibnet.dod.mil",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "regulation",
    entity_slug: "dcaa",
    field: "ffp_exception",
    value:
      "DCAA-approved accounting is not required for most firm-fixed-price small-business awards. Exception: FFP over $10 million.",
    source_url: "https://www.dcaa.mil/Small-Business/Small-Business-FAQs/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sam-opportunities",
    field: "official_url",
    value: "https://sam.gov",
    source_url: "https://sam.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sam-opportunities",
    field: "what_it_is",
    value:
      "SAM.gov is the official place to read federal opportunities, including sources sought notices and solicitations.",
    source_url: "https://sam.gov",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "sources-sought",
    field: "rule",
    value:
      "Sources sought notices come before solicitations. Read FAR Part 5 before you treat a solicitation as the first signal.",
    source_url: "https://www.acquisition.gov/far/part-5",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "rule-of-two",
    field: "rule",
    value:
      "FAR 19.502-2 (the Rule of Two) tells a contracting officer to set an acquisition aside for small business when there is a reasonable expectation of two or more responsible small-business offers at fair market price.",
    source_url: "https://www.acquisition.gov/far/19.502-2",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "subnet",
    field: "official_url",
    value: "https://subnet.sba.gov/client/dsp_Landing1.cfm",
    source_url: "https://subnet.sba.gov/client/dsp_Landing1.cfm",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "dsbs",
    field: "official_url",
    value: "https://search.certifications.sba.gov/",
    source_url: "https://search.certifications.sba.gov/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "usaspending",
    field: "official_url",
    value: "https://www.usaspending.gov/",
    source_url: "https://www.usaspending.gov/",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "usaspending",
    field: "what_it_is",
    value:
      "USAspending publishes federal award data. Use it to see who already holds work, not as a forecast of your first award.",
    source_url: "https://www.usaspending.gov/analyst-guide",
    verified_at: AS_OF,
    verification_method: "official_page",
    watch_priority: "normal",
  },
  {
    entity_type: "resource",
    entity_slug: "gsa-schedule",
    field: "new_business_note",
    value:
      "Do not chase a GSA Schedule as a first move. Learn the Schedule path after you can point to work and a NAICS story.",
    source_url:
      "https://www.gsa.gov/small-business/small-business-resources/training-resources/getting-on-the-gsa-schedule",
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

export const START_HERE_KEYS = new Set([
  "program:sam-gov:registration_cost",
  "program:set-asides:self_certification",
  "regulation:cmmc:phase_ii_status",
  "regulation:far-19-7:subcontracting_plan",
  "resource:apex-alabama:advising_cost",
  "resource:apex-alabama:booking",
  "regulation:dcaa:ffp_exception",
]);

export function isStartHereFact(fact: SeedFact): boolean {
  return START_HERE_KEYS.has(factKey(fact));
}

export function assertUniqueSeedFacts(facts: readonly SeedFact[]): void {
  const seen = new Set<string>();
  for (const fact of facts) {
    const key = factKey(fact);
    if (seen.has(key)) {
      throw new Error(`Duplicate seed fact ${key}`);
    }
    seen.add(key);
  }
}

function sqlQuote(value: string): string {
  return `'${value.replaceAll("'", "''")}'`;
}

export function emitSeedSql(): string {
  assertUniqueSeedFacts(seedFacts);
  const factRows = seedFacts.map(
    (fact) =>
      `  (${sqlQuote(fact.entity_type)}, ${sqlQuote(fact.entity_slug)}, ${sqlQuote(fact.field)}, ${sqlQuote(fact.value)}, ${sqlQuote(fact.source_url)}, ${sqlQuote(fact.verified_at)}, ${sqlQuote(fact.verification_method)}, ${sqlQuote(fact.watch_priority)})`,
  );
  const changeRows = seedChanges.map((change) => {
    const date =
      change.effective_date === null ? "null" : sqlQuote(change.effective_date);
    return `  (${sqlQuote(change.headline)}, ${sqlQuote(change.detail)}, ${sqlQuote(change.source_url)}, ${date})`;
  });
  return `-- Mirrors lib/seed-facts.ts.
insert into public.facts (entity_type, entity_slug, field, value, source_url, verified_at, verification_method, watch_priority) values
${factRows.join(",\n")};

insert into public.changes (headline, detail, source_url, effective_date) values
${changeRows.join(",\n")};
`;
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
