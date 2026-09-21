import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "./providers";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AbstractBackground from "@/components/abstract-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "Justine Tobithe Doloiras | Full Stack Developer",
  description:
    "Full stack developer building e-commerce platforms, custom CMS and client portals with Next.js, Laravel and Supabase for clients in Israel, Germany, the US, Mexico and Australia."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${grotesk.variable}`}>
      <body className="font-sans">
        <Providers>
          <AbstractBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-6xl flex-1 overflow-x-clip px-4 py-10">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
