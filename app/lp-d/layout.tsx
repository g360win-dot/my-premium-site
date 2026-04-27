import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "香りで空間の価値を変える | UP SCENT",
  description:
    "語らなくても伝わる価値を、香りで。博多・天神周辺エリア限定で無料デモ受付中。",
  openGraph: {
    title: "香りで空間の価値を変える | UP SCENT",
    description:
      "語らなくても伝わる価値を、香りで。空間の印象を変える香りの演出。",
    url: "https://www.upscent-nakasu-tenjin.com/lp-d",
    siteName: "UP SCENT",
    images: [
      {
        url: "https://www.upscent-nakasu-tenjin.com/ogp-lp.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "香りで空間の価値を変える | UP SCENT",
    description:
      "語らなくても伝わる価値を、香りで。博多・天神周辺エリア限定で無料デモ受付中。",
    images: ["https://www.upscent-nakasu-tenjin.com/ogp-lp.jpg"],
  },
};

export default function LpDLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
