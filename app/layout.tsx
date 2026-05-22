import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Écrivance - TCF Canada Writing Practice",
  description: "Mobile-first prototype for TCF Canada Written Expression practice."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
