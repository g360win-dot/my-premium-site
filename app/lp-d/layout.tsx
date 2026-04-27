import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upscent-nakasu-tenjin.com"),
  title: "語らなくても、伝わるものがある。 | UP SCENT",
  description:
    "香りが、その感情に火を灯し、静かに解き放っていく。空間の印象を変える香りの演出。",
  openGraph: {
    title: "語らなくても、伝わるものがある。 | UP SCENT",
    description:
      "香りが、その感情に火を灯し、静かに解き放っていく。空間の印象を変える香りの演出。",
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
    title: "語らなくても、伝わるものがある。 | UP SCENT",
    description:
      "香りが、その感情に火を灯し、静かに解き放っていく。空間の印象を変える香りの演出。",
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
