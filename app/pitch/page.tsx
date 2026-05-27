import type { Metadata } from "next";
import PitchDeckPage from "../../components/pitch/PitchDeckPage";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Final Project Presentation - Écrivance",
  description: "UX redesign case study presentation for Écrivance.",
  ...noIndexMetadata
};

export default function Page() {
  return <PitchDeckPage />;
}
