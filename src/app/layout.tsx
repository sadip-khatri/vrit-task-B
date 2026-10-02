import type { Metadata } from "next";
import { Figtree, Outfit, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const oakesStandIn = Figtree({ variable: "--font-oakes-standin", subsets: ["latin"], weight: ["500", "700"] });
const nohemiStandIn = Sora({ variable: "--font-nohemi-standin", subsets: ["latin"], weight: ["700"] });
const outfit = Outfit({ variable: "--font-outfit-family", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Services & Courses",
  description: "Expert design, development and blockchain services, plus trending courses.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oakesStandIn.variable} ${nohemiStandIn.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white text-t2-ink">
        <main>{children}</main>
      </body>
    </html>
  );
}
