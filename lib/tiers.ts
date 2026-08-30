import { isPricingTierId, type PricingTierId } from "@/lib/site";
import type { EntitlementTier } from "@/lib/database";

export type EntitlementFlags = {
  hasGuide: boolean;
  hasToolkit: boolean;
  hasUpdates: boolean;
};

export type EntitlementSource = {
  tier: string;
  updates_expire_at?: string | null;
};

export function productTierFromPrice(price: PricingTierId): EntitlementTier {
  if (price === "199") {
    return "map";
  }
  if (price === "399") {
    return "toolkit";
  }
  return "updates";
}

export function flagsForProductTier(tier: EntitlementTier): EntitlementFlags {
  if (tier === "map") {
    return { hasGuide: true, hasToolkit: false, hasUpdates: false };
  }
  if (tier === "toolkit") {
    return { hasGuide: true, hasToolkit: true, hasUpdates: false };
  }
  return { hasGuide: true, hasToolkit: true, hasUpdates: true };
}

function updatesStillActive(
  expireAt: string | null | undefined,
  now: Date,
): boolean {
  if (!expireAt) {
    return true;
  }
  return expireAt >= now.toISOString().slice(0, 10);
}

export function flagsFromProductTiers(
  tiers: readonly string[],
): EntitlementFlags {
  return flagsFromEntitlementRows(tiers.map((tier) => ({ tier })));
}

export function flagsFromEntitlementRows(
  rows: readonly EntitlementSource[],
  now: Date = new Date(),
): EntitlementFlags {
  let hasGuide = false;
  let hasToolkit = false;
  let hasUpdates = false;

  for (const row of rows) {
    if (row.tier !== "map" && row.tier !== "toolkit" && row.tier !== "updates") {
      continue;
    }
    const flags = flagsForProductTier(row.tier);
    hasGuide = hasGuide || flags.hasGuide;
    hasToolkit = hasToolkit || flags.hasToolkit;
    if (flags.hasUpdates && updatesStillActive(row.updates_expire_at, now)) {
      hasUpdates = true;
    }
  }

  return { hasGuide, hasToolkit, hasUpdates };
}

export function plusTwelveUtcMonths(date: Date = new Date()): string {
  const next = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 12, date.getUTCDate()),
  );
  return next.toISOString().slice(0, 10);
}

export function isPriceTierMetadata(value: string): value is PricingTierId {
  return isPricingTierId(value);
}
