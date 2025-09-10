import type { Metadata } from "next";
import Script from "next/script";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top Up Game Termurah & Tercepat | VCGamers",
  description:
    "Top up Free Fire, Mobile Legends, PUBG, Valorant, dan game favorit lainnya dengan harga termurah, bayar bisa pakai pulsa! Gercep, aman, dan terpercaya.",
  keywords:
    "top up game, top up FF, top up Mobile Legends, top up PUBG, top up Valorant, vcgamers",
  robots: "index, follow",
  openGraph: {
    title: "Top Up Game Termurah & Tercepat",
    description:
      "Top up game favorit lebih mudah, bisa bayar pulsa, aman, dan terpercaya.",
    url: "https://www.vcgamers.com/",
    type: "website",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "VCGamers Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={rajdhani.variable}>
      <body>
        <Navbar />
        {children}
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "VCGamers",
          url: "https://www.vcgamers.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://localhost:3000/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      <Script
        id="schema-corporation"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          name: "VCGamers",
          url: "https://www.vcgamers.com",
          logo: "https://www.vcgamers.com/logo.png",
          sameAs: [
            "https://www.facebook.com/vcgamers",
            "https://twitter.com/vcgamers",
            "https://www.instagram.com/vcgamers",
            "https://www.youtube.com/c/vcgamers",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+62-21-1234567",
              contactType: "customer service",
              availableLanguage: ["Indonesian", "English"],
            },
          ],
        })}
      </Script>
      </body>
    </html>
  );
}
