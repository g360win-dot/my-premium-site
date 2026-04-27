import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upscent-nakasu-tenjin.com"),
  title: "UP SCENT | 香りで空間の価値を変える",
  description:
    "博多・天神周辺エリア向け。店舗・ラウンジ・サロンの空間価値を香りで高めるフレグランスサービス。",
  openGraph: {
    title: "UP SCENT | 香りで空間の価値を変える",
    description:
      "博多・天神周辺エリア向け。店舗・ラウンジ・サロンの空間価値を香りで高めるフレグランスサービス。",
    url: "https://www.upscent-nakasu-tenjin.com",
    siteName: "UP SCENT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RB2BK9ECTB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RB2BK9ECTB');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJP.variable} w-full min-w-0 max-w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
