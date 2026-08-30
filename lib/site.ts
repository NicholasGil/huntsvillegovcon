export const site = {
  name: "Huntsville Contract Map",
  domain: "huntsvillecontractmap.com",
  url: "https://huntsvillecontractmap.com",
  client: "Nicholas Gil",
} as const;

export const hero = {
  headline:
    "Everything you were told about selling to Redstone changed in 2026. Most of what's published still says otherwise.",
  cta: "Get the Map — $199",
  guarantee: "60-day money-back guarantee",
  credibility:
    "Every contact, requirement, and deadline in this guide links to the official page it came from. No rankings, no secrets, no system.",
  description:
    "A sourced, dated map of who buys what at Redstone Arsenal, who to contact, and what you have to comply with right now.",
} as const;

export const pricingTiers = [
  {
    id: "199",
    amountUsd: 199,
    prominence: "default",
    name: "The Map",
    includes: [
      "Full directory and all nine modules.",
      "Current edition. Lifetime access to that edition.",
    ],
  },
  {
    id: "399",
    amountUsd: 399,
    prominence: "target",
    name: "Map + Toolkit",
    includes: [
      "Everything in The Map.",
      "Capability Statement Template.",
      "Contact Tracker.",
      "Compliance Self-Check worksheet.",
      "Event Calendar.",
      "Set-Aside Eligibility Decision Tree.",
    ],
  },
  {
    id: "599",
    amountUsd: 599,
    prominence: "default",
    name: "Map + Toolkit + 12 Months of Updates",
    includes: [
      "Everything in The Map and Toolkit.",
      "One-time 12-month purchase. No auto-renew.",
      "Quarterly re-verified editions.",
      "Alert email when a tracked fact changes.",
    ],
  },
] as const;

export type PricingTierId = (typeof pricingTiers)[number]["id"];

export function isPricingTierId(value: string): value is PricingTierId {
  return value === "199" || value === "399" || value === "599";
}
