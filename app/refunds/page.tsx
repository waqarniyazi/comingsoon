import type { Metadata } from "next";
import { PrivacyContent } from "@/app/refunds/content";

export const metadata: Metadata = {
  title: "Refunds - AIPortalX",
  description: "Refunds - AIPortalX",
  alternates: { canonical: "/refunds" },
};

export default function Page() {
  return <PrivacyContent />;
}
