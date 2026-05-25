import type { Metadata } from "next";
import EcrivanceLandingPage from "../components/landing/EcrivanceLandingPage";
import { defaultSeoDescription, ogImage } from "../lib/seo";

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
    url: "/",
    images: [
      {
        url: ogImage.path,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt
      }
    ]
  },
  twitter: {
    title: "TCF Canada Writing Practice with Instant AI Feedback",
    description: defaultSeoDescription,
    images: [ogImage.path]
  }
};

export default function Home() {
  return <EcrivanceLandingPage />;
}
