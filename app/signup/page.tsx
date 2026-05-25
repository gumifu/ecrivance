import type { Metadata } from "next";
import SignupPage from "../../components/auth/SignupPage";
import { noIndexMetadata } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Sign Up - Écrivance",
  description: "Create a free Écrivance account to unlock full TCF Canada writing feedback.",
  ...noIndexMetadata
};

export default function Page() {
  return <SignupPage />;
}
