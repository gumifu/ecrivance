import type { Metadata } from "next";
import EcrivanceLandingPage from "../components/landing/EcrivanceLandingPage";
import { defaultSeoDescription } from "../lib/seo";

export const metadata: Metadata = {
  title: "TCF Canada Writing Practice with Instant AI Feedback",
  description: defaultSeoDescription,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "TCF Canada Writing Practice with Instant AI Feedback",
    description: defaultSeoDescription,
    url: "/"
  },
  twitter: {
    title: "TCF Canada Writing Practice with Instant AI Feedback",
    description: defaultSeoDescription
  }
};

export default function Home() {
  return <EcrivanceLandingPage />;
}
