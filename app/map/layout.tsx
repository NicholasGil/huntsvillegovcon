import type { ReactNode } from "react";
import { getEntitlement } from "@/lib/entitlement";

export const dynamic = "force-dynamic";

export default async function GuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  await getEntitlement();
  return children;
}
