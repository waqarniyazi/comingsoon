import type { Metadata } from "next";
import { PrivacyContent } from "@/app/terms/content";

export const metadata: Metadata = {
  title: "Terms & Conditions - AIPortalX",
  description: "Terms & Conditions - AIPortalX",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <PrivacyContent />;
}
