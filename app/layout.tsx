import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { localBusinessJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sree Selvanayaki Amman Oil & Flour Mill | Traditional Oils & Everyday Essentials",
    template: "%s | Sree Selvanayaki Amman Oil & Flour Mill",
  },
  description:
    "Explore Groundnut Oil, Gingelly Oil, Coconut Oil, Health Mix Powder, Turmeric Powder, Shikakai Powder and Green Gram Powder from Sree Selvanayaki Amman Oil & Flour Mill, Pidariyur, Erode.",
  keywords:
    "groundnut oil, gingelly oil, sesame oil, coconut oil, health mix powder, turmeric powder, shikakai powder, green gram powder, oil mill Pidariyur, traditional oils Tamil Nadu, Sree Selvanayaki Amman, oils Erode, traditional oil Tamil Nadu",
  metadataBase: new URL("https://selvanayaki-amman.vercel.app"),
  openGraph: {
    title: "Sree Selvanayaki Amman Oil & Flour Mill",
    description:
      "Traditional oils and everyday essentials from our mill in Pidariyur, Erode, Tamil Nadu. Order via WhatsApp.",
    type: "website",
    locale: "en_IN",
    siteName: "Sree Selvanayaki Amman Oil & Flour Mill",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = localBusinessJsonLd();
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-inter bg-[#FFFDF7] text-[#2B1812]">
        {children}
      </body>
    </html>
  );
}
