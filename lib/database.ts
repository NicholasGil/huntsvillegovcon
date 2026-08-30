export type EntitlementTier = "guide" | "toolkit" | "updates";
export type FactEntityType =
  | "agency"
  | "prime"
  | "program"
  | "regulation"
  | "event"
  | "resource";
export type VerificationMethod = "official_page" | "phone" | "secondary";
export type WatchPriority = "normal" | "high";

export type EntitlementRow = {
  id: string;
  user_id: string | null;
  email: string;
  tier: EntitlementTier;
  stripe_session_id: string;
  stripe_payment_intent: string | null;
  purchased_at: string;
  updates_expire_at: string | null;
  refunded_at: string | null;
};

export type ProcessedEventRow = {
  event_id: string;
  processed_at: string;
};

export type FactRow = {
  id: string;
  entity_type: FactEntityType;
  entity_slug: string;
  field: string;
  value: string;
  source_url: string;
  verified_at: string;
  verification_method: VerificationMethod;
  watch_priority: WatchPriority;
  notes: string | null;
};

export type ChangeRow = {
  id: string;
  fact_id: string | null;
  headline: string;
  detail: string;
  source_url: string;
  effective_date: string | null;
  published_at: string;
};

export type CorrectionRow = {
  id: string;
  fact_id: string | null;
  reporter_email: string | null;
  message: string;
  created_at: string;
  resolved_at: string | null;
};

export type LeadRow = {
  id: string;
  email: string;
  source: string | null;
  created_at: string;
};

type TableDef<Row, Insert, Update> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      entitlements: TableDef<
        EntitlementRow,
        {
          id?: string;
          user_id?: string | null;
          email: string;
          tier: EntitlementTier;
          stripe_session_id: string;
          stripe_payment_intent?: string | null;
          purchased_at?: string;
          updates_expire_at?: string | null;
          refunded_at?: string | null;
        },
        {
          user_id?: string | null;
          email?: string;
          stripe_payment_intent?: string | null;
          updates_expire_at?: string | null;
          refunded_at?: string | null;
        }
      >;
      processed_events: TableDef<
        ProcessedEventRow,
        { event_id: string; processed_at?: string },
        { processed_at?: string }
      >;
      facts: TableDef<
        FactRow,
        {
          id?: string;
          entity_type: FactEntityType;
          entity_slug: string;
          field: string;
          value: string;
          source_url: string;
          verified_at: string;
          verification_method: VerificationMethod;
          watch_priority?: WatchPriority;
          notes?: string | null;
        },
        {
          entity_type?: FactEntityType;
          entity_slug?: string;
          field?: string;
          value?: string;
          source_url?: string;
          verified_at?: string;
          verification_method?: VerificationMethod;
          watch_priority?: WatchPriority;
          notes?: string | null;
        }
      >;
      changes: TableDef<
        ChangeRow,
        {
          id?: string;
          fact_id?: string | null;
          headline: string;
          detail: string;
          source_url: string;
          effective_date?: string | null;
          published_at?: string;
        },
        {
          fact_id?: string | null;
          headline?: string;
          detail?: string;
          source_url?: string;
          effective_date?: string | null;
        }
      >;
      corrections: TableDef<
        CorrectionRow,
        {
          id?: string;
          fact_id?: string | null;
          reporter_email?: string | null;
          message: string;
          created_at?: string;
          resolved_at?: string | null;
        },
        { resolved_at?: string | null; fact_id?: string | null }
      >;
      leads: TableDef<
        LeadRow,
        {
          id?: string;
          email: string;
          source?: string | null;
          created_at?: string;
        },
        { source?: string | null }
      >;
    };
    Views: {
      stale_facts: {
        Row: FactRow;
        Relationships: [];
      };
    };
    Functions: {
      link_my_entitlements: {
        Args: Record<string, never>;
        Returns: undefined;
      };
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      has_guide_access: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      has_toolkit_access: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      has_updates_access: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      jwt_email: {
        Args: Record<string, never>;
        Returns: string;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
