"use client";

import Content from "./content.mdx";
import { LegalPage } from "@/components/LegalPage";

export function PrivacyContent() {
  return (
    <LegalPage date="2025-03-11" title="Privacy Policy" content={<Content />} />
  );
}
