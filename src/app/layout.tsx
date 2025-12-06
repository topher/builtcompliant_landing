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
  title: "BUILT COMPLIANT - Governance That Closes Deals",
  description: "We help AI companies design governance systems that actually work in practice — systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.",
  keywords: ["AI governance", "compliance", "due diligence", "procurement", "risk management", "AI audit"],
  openGraph: {
    title: "BUILT COMPLIANT - Governance That Closes Deals",
    description: "We help AI companies design governance systems that actually work in practice — systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.",
    url: "https://builtcompliant.ai",
    siteName: "Built Compliant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUILT COMPLIANT - Governance That Closes Deals",
    description: "We help AI companies design governance systems that actually work in practice — systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
