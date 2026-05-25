import type { Metadata } from "next";
import DemoFlow from "../../components/flow/DemoFlow";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Practice Writing - Écrivance",
  description: "TCF Canada Task 1 email practice with exam timing.",
  ...noIndexMetadata
};

export default function PracticePage() {
  return <DemoFlow />;
}
