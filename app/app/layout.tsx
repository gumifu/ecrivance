import type { Metadata } from "next";
import { AppShell } from "../../components/app/AppShell";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "App",
  ...noIndexMetadata
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
