import type { Metadata } from "next";
import { defaultSeoDescription, ogImage, siteName, siteUrl } from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Écrivance - TCF Canada Writing Practice",
    template: `%s | ${siteName}`
  },
  description: defaultSeoDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "TCF Canada writing",
    "TCF Canada practice",
    "TCF writing practice",
    "NCLC writing score",
    "French writing feedback",
    "Express Entry French"
  ],
  openGraph: {
    title: "Écrivance - TCF Canada Writing Practice",
    description: defaultSeoDescription,
    url: "/",
    siteName,
    locale: "en_CA",
    type: "website",
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
    card: "summary_large_image",
    title: "Écrivance - TCF Canada Writing Practice",
    description: defaultSeoDescription,
    images: [ogImage.path]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
