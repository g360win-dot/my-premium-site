import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "語らなくても、伝わるものがある。";
const description =
  "それは、言葉を超えている。香りが、その感情に火を灯し、静かに解き放っていく。そして、その瞬間、未来を変えていく。";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upscent-nakasu-tenjin.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.upscent-nakasu-tenjin.com/lp-d",
    siteName: "UP SCENT",
    images: [
      {
        url: "/ogp-lp.jpg",
        width: 1200,
        height: 630,
        alt: "UP SCENT",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ogp-lp.jpg"],
  },
};

export default function LpDLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
