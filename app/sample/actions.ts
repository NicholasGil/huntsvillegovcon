"use server";

import { redirect } from "next/navigation";
import { parseEmail } from "@/lib/email";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function safeReturnPath(value: unknown): "/" | "/sample" {
  return value === "/" ? "/" : "/sample";
}

export async function submitSampleOptIn(formData: FormData) {
  const next = safeReturnPath(formData.get("next"));
  const parsed = parseEmail(formData.get("email"));
  if (parsed.kind === "invalid") {
    redirect(`${next}#sample-invalid`);
  }

  const row = { email: parsed.email, source: "sample" };
  const admin = createSupabaseAdminClient();
  const writer = admin ?? (await createSupabaseServerClient());
  if (writer) {
    await writer.from("leads").insert(row);
  }

  redirect(`${next}#sample-received`);
}
