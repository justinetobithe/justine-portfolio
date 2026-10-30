import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, DM_Sans, JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AbstractBackground from "@/components/abstract-background";
import { yearsOfExperience } from "@/lib/career";

const heading = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const code = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" });
const script = Caveat({ subsets: ["latin"], variable: "--font-script", display: "swap" });

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return {
    title: "Justine Tobithe Doloiras | Full Stack and Mobile Developer",
    description: `Full stack and mobile developer in Davao City with ${yearsOfExperience()}+ years of experience, open to remote work (full-time or part-time). Laravel, Next.js, Flutter and React Native, for clients in Germany, Austria, Israel, the US, Mexico and Australia.`
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${code.variable} ${script.variable}`}>
      <body className="font-sans">
        <Providers>
          <AbstractBackground />
          <div className="relative z-10 flex min-h-screen flex-col overflow-x-clip">
            <SiteHeader />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 md:py-14">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
