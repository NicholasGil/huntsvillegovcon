import type { GuideModuleSlug } from "@/lib/guide-modules";

export type ReadinessCheck = {
  question: string;
  ifYes: string;
  ifNo: string;
};

export type DecisionPath = {
  title: string;
  when: string;
  then: readonly string[];
};

export type ModuleSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type ModuleTable = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

export type ModulePageCopy = {
  lead: string;
  checks?: readonly ReadinessCheck[];
  paths?: readonly DecisionPath[];
  table?: ModuleTable;
  warnings?: readonly string[];
  sections: readonly ModuleSection[];
};

export const MODULE_COPY = {
  "start-here": {
    lead:
      "Use this page as a 10-minute snapshot. Check the boxes, pick one of the four paths, then open the sourced facts below. This is not a downloadable worksheet.",
    checks: [
      {
        question: "Do you have an active SAM.gov registration?",
        ifYes: "Stay on this page and read certification and compliance next.",
        ifNo: "Take path 1. Register on SAM.gov first. It is always free.",
      },
      {
        question: "Do you need a socioeconomic set-aside certification?",
        ifYes: "Take path 3. None of those certifications are self-certified.",
        ifNo: "You can still sell as a small business without a set-aside label.",
      },
      {
        question: "Will you handle CUI or are you looking at CMMC Phase II?",
        ifYes:
          "Take path 4. Phase II is suspended. Level 1 and DFARS 7012/7019/7020 are still in force.",
        ifNo: "You still need an active SAM record before you answer sources sought.",
      },
      {
        question: "Are you planning to sell through a prime?",
        ifYes:
          "A capability statement helps a prime meet a FAR 19.7 subcontracting plan. It is not a favor.",
        ifNo:
          "If you are going direct to an agency, start with who-buys and sources sought, not a GSA Schedule.",
      },
      {
        question: "Have you called a free program yet?",
        ifYes: "Keep APEX on the calendar between notices.",
        ifNo: "Call APEX first. Advising is free. SCORE, 7(j), and DAU stay unverified locally.",
      },
    ],
    paths: [
      {
        title: "Path 1. Not registered",
        when: "You do not have an active SAM.gov Unique Entity ID and CAGE.",
        then: [
          "Register at https://sam.gov/entity-registration. Registration is always free.",
          "Do not pay a third party to register, update, or renew.",
          "After the record is active, call APEX at UAH before you write a capability statement.",
        ],
      },
      {
        title: "Path 2. Registered, no set-aside, not handling CUI",
        when: "SAM is active. You are not applying for 8(a), HUBZone, WOSB, or SDVOSB. You are not touching CUI.",
        then: [
          "Call APEX first. That is the free procurement program we can source locally.",
          "Read sources sought on SAM.gov before you chase solicitations.",
          "Decide prime versus agency. A capability statement is a plan-compliance tool for primes, not a courtesy.",
          "Do not chase a GSA Schedule as a first move.",
        ],
      },
      {
        title: "Path 3. Possible set-aside eligibility",
        when: "You think 8(a), HUBZone, WOSB/EDWOSB, or SDVOSB might apply.",
        then: [
          "Apply at https://certifications.sba.gov. Do not use certify.sba.gov.",
          "None of those programs are self-certified.",
          "HUBZone is a live map, not a static Huntsville tract list. https://maps.certify.sba.gov/hubzone/map",
          "8(a) rule sequence is proposed 2026-06-11, final 2026-08-11, effective 2026-09-10. Confirm litigation and whether that effective date held before you write it in the past tense.",
        ],
      },
      {
        title: "Path 4. CUI or CMMC Phase II",
        when: "You expect covered defense information, or someone told you to get CMMC Level 2 now.",
        then: [
          "Phase II was suspended July 13, 2026. New procurements currently cannot designate a Level 2 or Level 3 assessment requirement.",
          "Level 1 self-assessment and DFARS 252.204-7012/7019/7020 remain in force.",
          "DCAA-approved accounting is not required for most firm-fixed-price small-business awards. The published exception is FFP over $10 million.",
          "This map does not publish C3PAO cost figures.",
        ],
      },
    ],
    sections: [
      {
        heading: "Who to call first",
        paragraphs: [
          "APEX Accelerator of Alabama is the first free call we can source in Huntsville. Advising is provided at no cost. Start at https://apexal.org and confirm the intake path on that page.",
          "The SBA Alabama District Office is in Birmingham. There is no Huntsville satellite.",
          "SCORE Huntsville booking, 7(j) enrollment, and DAU courses for new vendors stay unmarked until checked.",
        ],
      },
    ],
  },
  "free-help": {
    lead:
      "Advising from the programs we can source is free. Book the ones with a page. Leave the rest marked until someone opens the current intake URL.",
    sections: [
      {
        heading: "Call APEX first",
        paragraphs: [
          "APEX Accelerator of Alabama sits at UAH. Advising is provided at no cost. The official site is https://apexal.org. Use the contact path on that page and confirm the current appointment step before you call.",
          "The APEX email we have is on the UAH SBDC APEX page. Confirm it before you send anything.",
        ],
      },
      {
        heading: "UAH SBDC",
        paragraphs: [
          "The UAH Small Business Development Center is at https://www.uah.edu/sbdc. APEX operates out of that building. The SBDC booking path is still unmarked.",
        ],
      },
      {
        heading: "SBA Alabama District Office",
        paragraphs: [
          "The district office is at 2 North Twentieth Street, Suite 325, Birmingham, AL 35203. Phone (205) 290-7101. Official page https://www.sba.gov. There is no Huntsville satellite. Confirm hours before you drive.",
        ],
      },
      {
        heading: "Still unmarked",
        paragraphs: [
          "SCORE mentoring is free on the national site https://www.score.org. The Huntsville booking path is unmarked.",
          "SBA 7(j) has an official program page at https://www.sba.gov/federal-contracting/contracting-assistance-programs/7j-management-technical-assistance-program. Current enrollment, including Empower to Grow, is unmarked.",
          "Defense Acquisition University is at https://www.dau.edu/. The public course list that matters to a new vendor is unmarked.",
        ],
      },
    ],
  },
  "getting-registered": {
    lead:
      "These are the registration steps a new vendor actually needs. Official URLs only. Registration is always free.",
    warnings: [
      "Registration is always free. The government will never ask you to pay to register, update, or renew.",
    ],
    table: {
      caption: "Registration steps",
      headers: ["Step", "Cost", "Timing", "Official page"],
      rows: [
        [
          "UEI (replaced DUNS April 2022)",
          "Free",
          "Issued through SAM.gov",
          "https://sam.gov/entity-registration",
        ],
        [
          "CAGE",
          "Free",
          "Concurrent with SAM registration",
          "https://www.acquisition.gov/far/52.204-16",
        ],
        [
          "SAM.gov registration",
          "Free always",
          "Up to 10 business days",
          "https://sam.gov/entity-registration",
        ],
        [
          "Annual renewal",
          "Free",
          "Every 365 days or ineligible",
          "https://sam.gov/entity-registration",
        ],
        [
          "NAICS",
          "Free",
          "Choose the codes that match the work",
          "https://www.census.gov/naics/",
        ],
        [
          "Size standard",
          "Free",
          "Tied to the NAICS code",
          "https://legacy.sba.gov/document/support-table-size-standards",
        ],
      ],
    },
    sections: [
      {
        heading: "SAM.gov checklist and phishing",
        paragraphs: [
          "Entity checklist PDF. https://sam.gov/sites/default/files/2024-11/entity-checklist.pdf",
          "GSA warning. https://content.govdelivery.com/accounts/USGSA/bulletins/358af1f",
          "Recognize phishing. https://sam.gov/alerts/recognize-and-avoid-phishing-emails",
          "Size standard regulation. https://www.law.cornell.edu/cfr/text/13/121.101",
        ],
      },
    ],
  },
  "who-buys": {
    lead:
      "Each agency below is listed with what it buys and the page that said so. Confirm every contact on that page before you call. Names rotate.",
    warnings: [
      "ACC-RSA publishes no individual small-business contact on its own site. It points to a general Small Business Office portal with appointment booking.",
    ],
    sections: [
      {
        heading: "Sourced agencies",
        paragraphs: [
          "ACC-RSA. Largest contracting center in the Army. Weapon systems, SETA, prototyping, FMS, installation and range support. https://www.army.mil/acc-rsa",
          "AMCOM. Aircraft manufacturing, guided missile and space vehicle manufacturing, engineering services, aviation transportation support, R&D. https://www.amcom.army.mil",
          "SMDC. R&D in physical, engineering, and life sciences, engineering services, facilities support, security and patrol services, computer facilities management. https://www.smdc.army.mil",
          "MDA. Missile Defense System requirements and components. https://www.mda.mil/business/opportunities.html",
          "NASA MSFC. Space vehicle manufacturing, propulsion, R&D, engineering and facilities support. https://doingbusiness.msfc.nasa.gov",
          "Army Materiel Command. Headquarters at Redstone. Global Army supply chain, logistics, sustainment. https://www.amc.army.mil",
        ],
      },
      {
        heading: "Not sourced here",
        paragraphs: [
          "USACE and DLA Redstone-specific buying descriptions are unmarked. Do not invent a buy list for them.",
          "Individual small-business contact names for AMC, AMCOM, SMDC, MDA, and NASA MSFC are unmarked. Confirm on the source page before you call.",
        ],
      },
    ],
  },
  "the-primes": {
    lead:
      "A capability statement is how a prime shows it tried to find small businesses for a subcontracting plan. It is not a favor they grant you.",
    sections: [
      {
        heading: "FAR 19.7",
        paragraphs: [
          "A prime that is not itself a small business and that is above the FAR 19.7 subcontracting-plan threshold must have a plan. Read https://www.acquisition.gov/far/subpart-19.7. Current dollar thresholds stay unmarked.",
          "Send the statement because it helps them document outreach. Do not wait to be invited as a courtesy.",
        ],
      },
      {
        heading: "Portals that exist",
        paragraphs: [
          "Boeing. https://www.boeingsuppliers.com/supplier_diversity.html",
          "Lockheed Martin. https://www.lockheedmartin.com/en-us/suppliers/small-business-programs.html",
          "Northrop Grumman. https://www.northropgrumman.com/suppliers/osbp",
          "Leidos / Dynetics. https://www.leidos.com/suppliers/small-business-relationships",
          "RTX. https://www.rtx.com/suppliers/small-business",
          "L3Harris / Aerojet Rocketdyne. https://arsuppliernet.l3harris.com/suppliernet/doing-business-ar/small-business-and-small-business-liaison-officers-sblo",
          "Sierra Space. https://www.sierraspace.com/suppliers/",
        ],
      },
      {
        heading: "No public small-business portal found",
        paragraphs: [
          "Blue Origin, Torch, COLSA, Quantum Research International, and Davidson Technologies. No public small-business supplier portal was found. Confirm on each company site before you send anything. Official homepage URLs stay unmarked.",
        ],
      },
    ],
  },
  "set-asides": {
    lead:
      "None of the major socioeconomic set-asides are self-certified. Use certifications.sba.gov, not certify.sba.gov.",
    warnings: [
      "HUBZone is a live map link-out. This page will not publish a static Huntsville tract list.",
    ],
    sections: [
      {
        heading: "Where to apply",
        paragraphs: [
          "Applications run through https://certifications.sba.gov.",
          "WOSB and EDWOSB. https://www.sba.gov/wosb",
          "SDVOSB certification moved to SBA on January 1, 2023.",
          "HUBZone live map. https://maps.certify.sba.gov/hubzone/map",
        ],
      },
      {
        heading: "8(a) rule sequence",
        paragraphs: [
          "Proposed 2026-06-11. Final 2026-08-11. Effective 2026-09-10.",
          "Confirm litigation and whether that effective date held before you write any of this in the past tense. https://www.sba.gov/article/2026/06/11/sba-reforms-8a-business-development-program-end-racial-discrimination-federal-contracting",
        ],
      },
    ],
  },
  "compliance-floor": {
    lead:
      "Read CMMC, DFARS, and SPRS from the facts table with the dates attached. Do not treat a blog post as current.",
    warnings: [
      "This map does not publish C3PAO cost figures.",
    ],
    sections: [
      {
        heading: "CMMC right now",
        paragraphs: [
          "Phase II was suspended July 13, 2026. New procurements currently cannot designate a Level 2 or Level 3 assessment requirement, and waiver procedures are halted pending a 60-day CIO review.",
          "Level 1 self-assessment remains in force. Source. https://dodcio.defense.gov/Portals/0/Documents/Library/ImplementingSuspensionCMMC-PhaseII.pdf",
          "NIST SP 800-171 Rev 3 transition timing is unmarked. CMMC L2 still maps to Rev 2 in the cited DoD CIO material.",
        ],
      },
      {
        heading: "DFARS clauses still in force",
        paragraphs: [
          "252.204-7012 safeguarding and cyber incident reporting. https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.",
          "252.204-7019 notice of NIST SP 800-171 DoD assessment requirements. https://www.acquisition.gov/dfars/252.204-7019-notice-nist-sp-800-171-dod-assessment-requirements.",
          "252.204-7020 NIST SP 800-171 DoD assessment requirements. https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171-dod-assessment-requirements.",
          "Report incidents on DIBNet. https://dibnet.dod.mil",
          "SPRS is where assessment scores are posted. https://www.sprs.csd.disa.mil/",
        ],
      },
      {
        heading: "DCAA accounting",
        paragraphs: [
          "DCAA-approved accounting is not required for most firm-fixed-price small-business awards. The published exception is FFP over $10 million.",
          "https://www.dcaa.mil/Small-Business/Small-Business-FAQs/",
          "https://www.dcaa.mil/Portals/88/From%20a%20DCAA%20Perspective%20Breaking%20Into%20GovCon.pdf",
        ],
      },
    ],
  },
  "finding-work": {
    lead:
      "Sources sought come before solicitations. Do not chase a GSA Schedule first. This page will not publish a time-to-first-award statistic.",
    sections: [
      {
        heading: "Read notices in this order",
        paragraphs: [
          "SAM.gov opportunities. https://sam.gov",
          "Sources sought before solicitations. FAR Part 5. https://www.acquisition.gov/far/part-5",
          "Rule of Two. FAR 19.502-2. https://www.acquisition.gov/far/19.502-2",
        ],
      },
      {
        heading: "Find subcontracting and who already holds work",
        paragraphs: [
          "SubNet. https://subnet.sba.gov/client/dsp_Landing1.cfm",
          "DSBS / SBA certifications search. https://search.certifications.sba.gov/",
          "USAspending. https://www.usaspending.gov/",
          "USAspending analyst guide. https://www.usaspending.gov/analyst-guide",
        ],
      },
      {
        heading: "GSA Schedule is later",
        paragraphs: [
          "A new business should not chase a GSA Schedule as the first move. Read https://www.gsa.gov/small-business/small-business-resources/training-resources/getting-on-the-gsa-schedule after you can point to work.",
        ],
      },
    ],
  },
  "showing-up": {
    lead:
      "These are the events the spec named. Dates stay unmarked until the current notice is open. Do not call Chamber programs free until the fee line is checked.",
    sections: [
      {
        heading: "APBI",
        paragraphs: [
          "AMCOM / Team Redstone Advance Planning Briefings to Industry. Historically March. Confirm current dates on AMCOM news releases. https://www.amcom.army.mil/News/News-Releases/",
          "Prior notice. https://www.amcom.army.mil/News/News-Releases/Article/3275579/team-redstones-advance-planning-briefings-to-industry-slated-for-march-21-23/",
        ],
      },
      {
        heading: "NDIA Tennessee Valley",
        paragraphs: [
          "Chapter site. https://www.ndiatennvalley.org/",
          "Referral code on that site. NDITVC. Year-round dates stay unmarked.",
        ],
      },
      {
        heading: "SMD Symposium",
        paragraphs: [
          "Space and Missile Defense Symposium. https://smdsymposium.org",
          "Next-occurrence dates stay unmarked. A brief cites Aug 10-12, 2027. Confirm on the site before you plan travel.",
        ],
      },
      {
        heading: "Chamber Team Redstone",
        paragraphs: [
          "https://hsvchamber.org/team-redstone",
          "Chamber programs are often membership- or fee-based. Do not describe them as free without checking.",
        ],
      },
    ],
  },
} as const satisfies Record<GuideModuleSlug, ModulePageCopy>;
