import type { Metadata } from "next";
import StyleGuidePage from "../../components/style-guide/StyleGuidePage";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Style Guide - Écrivance",
  description: "UI style guide: colors, typography, components, and patterns from Figma.",
  ...noIndexMetadata
};

export default function StyleGuideRoute() {
  return <StyleGuidePage />;
}
