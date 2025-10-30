import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LibertyGuard - Democracy Protection & Resistance App",
  description: "Your comprehensive democracy protection and resistance companion. Real-time threat monitoring, protest coordination, encrypted documentation, and resistance guides. Defend democracy, protect rights. Free 7-day trial available.",
  keywords: "protest app, resistance app, democracy protection, civil rights app, activist tools, protest organizer, police accountability, emergency scanner, resistance guides, legal rights app, protest safety, police encounters app, democracy tracker, civil unrest app",
  authors: [{ name: "LibertyGuard" }],
  openGraph: {
    title: "LibertyGuard - Democracy Protection & Resistance App",
    description: "Defend democracy, protect rights. Real-time threat monitoring, protest coordination, and resistance guides. Free 7-day trial.",
    type: "website",
    url: "https://libertyguard.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "LibertyGuard - Democracy Protection & Resistance App",
    description: "Defend democracy, protect rights. Real-time threat monitoring, protest coordination, and resistance guides.",
  },
  icons: {
    icon: '/libertyguard-icon-new.png',
    shortcut: '/libertyguard-icon-new.png',
    apple: '/libertyguard-icon-new.png',
  },
  alternates: {
    canonical: "https://libertyguard.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
