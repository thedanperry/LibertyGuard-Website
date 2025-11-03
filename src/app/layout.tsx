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
  title: "LibertyGuard – Activism Alerts, Secure Communication & Democracy Protection App",
  description: "Real-time threat alerts, secure encrypted chat, and civil rights resources for activists and citizens. Get democracy health monitoring, protest coordination tools, legal rights guides, and emergency protocols. Download free 7-day trial.",
  keywords: "activism app, protest app, civil rights app, democracy alerts, threat intelligence, secure messaging, encrypted chat, protest organizer, activism toolkit, democracy protection, legal rights app, protest safety, police accountability, emergency scanner, resistance app, democracy tracker, civil unrest app, mutual aid app, organizer tools, secure communication",
  authors: [{ name: "LibertyGuard" }],
  openGraph: {
    title: "LibertyGuard – Real-Time Threat Alerts & Activism Toolkit",
    description: "Defend democracy with real-time threat alerts, secure encrypted messaging, protest coordination, and legal rights protection. Download LibertyGuard – free 7-day trial.",
    type: "website",
    url: "https://libertyguard.app",
    siteName: "LibertyGuard",
    images: [
      {
        url: "https://libertyguard.app/images/libertyguard-logo.png",
        width: 1200,
        height: 630,
        alt: "LibertyGuard - Democracy Protection & Resistance App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LibertyGuard – Activism Alerts & Secure Organizing Tools",
    description: "Real-time threat alerts, secure messaging, and civil rights resources for activists. Defend democracy – download free.",
    images: ["https://libertyguard.app/images/libertyguard-logo.png"],
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
