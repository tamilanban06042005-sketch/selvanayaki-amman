import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sree Selvanayaki Amman Oil & Flour Mill | Traditional Oils",
  description:
    "Pure traditional oils — Gingelly, Groundnut, and Coconut Oil — crafted with time-tested methods by Sree Selvanayaki Amman Oil & Flour Mill. Natural goodness for every South Indian kitchen.",
  keywords:
    "gingelly oil, sesame oil, groundnut oil, coconut oil, traditional oil, South Indian oil, Sree Selvanayaki Amman",
  openGraph: {
    title: "Sree Selvanayaki Amman Oil & Flour Mill",
    description: "Traditional oils crafted with care for every South Indian kitchen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
