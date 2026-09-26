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
      {/* 
        bg color changed to parchment beige (#F3EFE6) to match the new moodboard.
        Text color changed to dark green or very dark brown. 
      */}
      <body className="antialiased font-inter bg-[#F3EFE6] text-[#2B1812] relative min-h-screen selection:bg-[#164A32] selection:text-white">

        {/* Global Architectural Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          {/* Top Left Leaf Abstract */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#164A32]/5 rounded-full blur-3xl rounded-tr-[100px] transform rotate-12"></div>
          {/* Bottom Right Leaf Abstract */}
          <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-[#B88745]/10 rounded-[120px] blur-3xl transform -rotate-12"></div>
          {/* Large faint SSA monogram placeholder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] max-w-[800px] max-h-[800px] opacity-[0.03] mix-blend-multiply flex items-center justify-center">
            <span className="font-cormorant font-bold text-[30vw] md:text-[20vw] italic text-[#164A32]">SSA</span>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
