import type {
  ChangeRow,
  CorrectionRow,
  EntitlementRow,
  FactRow,
} from "@/lib/database";
import { isAdminUser } from "@/lib/entitlement";
import { seedChanges, seedFactsMatching, type SeedChange, type SeedFact } from "@/lib/seed-facts";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type PublishedFact = SeedFact & {
  id?: string;
  notes?: string | null;
};

export type PublishedChange = SeedChange & {
  id?: string;
  fact_id?: string | null;
  published_at?: string;
};

export function isSecondaryFact(
  fact: Pick<FactRow, "verification_method">,
): boolean {
  return fact.verification_method === "secondary";
}

export async function getSignedInAdminState(): Promise<{
  email: string | null;
  isAdmin: boolean;
}> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { email: null, isAdmin: false };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { email: null, isAdmin: false };
  }

  return {
    email: user.email ?? null,
    isAdmin: isAdminUser(user),
  };
}

export async function getOwnEntitlements(): Promise<EntitlementRow[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data } = await supabase
    .from("entitlements")
    .select(
      "id, user_id, email, tier, stripe_session_id, stripe_payment_intent, purchased_at, updates_expire_at, refunded_at",
    )
    .order("purchased_at", { ascending: false });

  return data ?? [];
}

export async function getStaleFacts(): Promise<FactRow[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data } = await supabase
    .from("stale_facts")
    .select(
      "id, entity_type, entity_slug, field, value, source_url, verified_at, verification_method, watch_priority, notes",
    )
    .order("watch_priority", { ascending: true })
    .order("verified_at", { ascending: true });

  return data ?? [];
}

const FACT_COLUMNS =
  "id, entity_type, entity_slug, field, value, source_url, verified_at, verification_method, watch_priority, notes";

export async function getPublishedFacts(
  matches: (fact: SeedFact) => boolean,
): Promise<PublishedFact[]> {
  const fallback = seedFactsMatching(matches);
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return fallback;
  }

  const { data, error } = await supabase.from("facts").select(FACT_COLUMNS);

  if (error || !data) {
    return fallback;
  }

  const published = data.filter(matches);
  return published.length > 0 ? published : fallback;
}

export async function getPublishedChanges(): Promise<PublishedChange[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [...seedChanges];
  }

  const { data, error } = await supabase
    .from("changes")
    .select("id, fact_id, headline, detail, source_url, effective_date, published_at")
    .order("published_at", { ascending: false });

  if (error || !data || data.length === 0) {
    return [...seedChanges];
  }

  return data;
}

export async function getAdminCorrections(): Promise<CorrectionRow[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data } = await supabase
    .from("corrections")
    .select("id, fact_id, reporter_email, message, created_at, resolved_at")
    .order("created_at", { ascending: false });

  return data ?? [];
}
