export const TOOLKIT_ASSETS = [
  {
    slug: "capability-statement-template",
    title: "Capability Statement Template",
  },
  {
    slug: "contact-tracker",
    title: "Contact Tracker",
  },
  {
    slug: "compliance-self-check",
    title: "Compliance Self-Check",
  },
  {
    slug: "event-calendar",
    title: "Event Calendar",
  },
  {
    slug: "set-aside-eligibility-decision-tree",
    title: "Set-Aside Eligibility Decision Tree",
  },
] as const;

export type ToolkitAssetSlug = (typeof TOOLKIT_ASSETS)[number]["slug"];
