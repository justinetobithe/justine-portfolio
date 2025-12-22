import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Justine Tobithe Doloiras | Portfolio",
  description: "Portfolio of Justine Tobithe Doloiras"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-mesh">
        <Providers>
          <div className="min-h-screen">
            <SiteHeader />
            <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
