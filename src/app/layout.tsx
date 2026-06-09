import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onesite.iclouds.work"),
  title: "OneSite — AI Website Builder",
  description:
    "Describe your site in natural language, get a production-ready Next.js project. Blueprint-driven AI generation with iterative refinement.",
  openGraph: {
    title: "OneSite — AI Website Builder",
    description:
      "Describe your site in natural language, get a production-ready Next.js project.",
    url: "https://onesite.iclouds.work",
    siteName: "OneSite",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneSite — Describe it. Ship it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneSite — AI Website Builder",
    description:
      "Describe your site in natural language, get a production-ready Next.js project.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#09090b] text-white font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
