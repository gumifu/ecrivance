import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://ecrivance.vercel.app";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, "");
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);

export const siteName = "Écrivance";

export const ogImage = {
  alt: "Écrivance — TCF Canada Writing, for your Express Entry",
  height: 537,
  path: "/og/ecrivance-og.png",
  width: 1024
} as const;

export const defaultSeoDescription =
  "Practice TCF Canada writing tasks with instant AI feedback, NCLC-level scoring, and clear corrections for Tasks 1, 2, and 3.";

export const noIndexMetadata: Pick<Metadata, "robots"> = {
  robots: {
    index: false,
    follow: false,
    nocache: true
  }
};
