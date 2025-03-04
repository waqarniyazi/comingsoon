import type { Metadata } from "next";
import { PrivacyContent } from "@/app/privacy/content";

export const metadata: Metadata = {
  title: "Privacy Policy - AIPortalX",
  description: "Privacy Policy - AIPortalX",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyContent />;
}
