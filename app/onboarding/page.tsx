import type { Metadata } from "next";
import DemoFlow from "../../components/flow/DemoFlow";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Get Started - Écrivance",
  description: "Set up your TCF Canada writing practice in three quick steps.",
  ...noIndexMetadata
};

export default function OnboardingPage() {
  return <DemoFlow />;
}
