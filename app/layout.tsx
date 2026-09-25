import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { localBusinessJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sree Selvanayaki Amman Oil & Flour Mill | Traditional Oils & Everyday Essentials",
    template: "%s | Sree Selvanayaki Amman Oil & Flour Mill",
  },
  description:
    "Shop traditional Groundnut Oil, Gingelly Oil, Coconut Oil, Health Mix Powder and more directly from Sree Selvanayaki Amman Oil & Flour Mill, Pidariyur, Tamil Nadu. Order online via WhatsApp.",
  keywords:
    "groundnut oil, gingelly oil, sesame oil, coconut oil, health mix powder, turmeric powder, shikakai powder, oil mill Pidariyur, traditional oils Tamil Nadu, Sree Selvanayaki Amman",
  metadataBase: new URL("https://selvanayaki-amman.vercel.app"),
  openGraph: {
    title: "Sree Selvanayaki Amman Oil & Flour Mill",
    description:
      "Traditional oils and everyday essentials from Pidariyur, Tamil Nadu. Order online via WhatsApp.",
    type: "website",
    locale: "en_IN",
    siteName: "Sree Selvanayaki Amman Oil & Flour Mill",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = localBusinessJsonLd();
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-inter bg-white text-stone-800">
        {children}
      </body>
    </html>
  );
}
