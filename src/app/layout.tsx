import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/site.config";
import { Bubbles } from "@/components/Bubbles";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "MADEBYLICO — Ideas, shipped early.",
    template: "%s — MADEBYLICO",
  },
  description: site.description,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    siteName: site.name,
    type: "website",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-ink font-sans text-paper antialiased">
        <Bubbles />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 sm:px-8">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
