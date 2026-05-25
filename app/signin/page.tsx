import type { Metadata } from "next";
import SigninPage from "../../components/auth/SigninPage";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Sign In - Écrivance",
  description: "Sign in to Écrivance and continue your TCF Canada writing practice.",
  ...noIndexMetadata
};

export default function Page() {
  return <SigninPage />;
}
