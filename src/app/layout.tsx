import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Built Compliant - Governance That Closes Deals",
  description: "We help AI companies build governance systems that pass procurement and due diligence. Technical PM, CIPP/E certified, translating regulatory requirements into engineering specs.",
  keywords: ["AI governance", "compliance", "due diligence", "procurement", "risk management", "AI audit"],
  authors: [{ name: "Chris Williams" }],
  creator: "Chris Williams",
  metadataBase: new URL('https://builtcompliant.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Built Compliant - Governance That Closes Deals",
    description: "We help AI companies build governance systems that pass procurement and due diligence. Technical PM, CIPP/E certified, translating regulatory requirements into engineering specs.",
    url: "https://builtcompliant.ai",
    siteName: "Built Compliant",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Built Compliant - AI Governance Consulting',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built Compliant - Governance That Closes Deals",
    description: "We help AI companies build governance systems that pass procurement and due diligence. Technical PM, CIPP/E certified, translating regulatory requirements into engineering specs.",
    creator: "@cafwilliams",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/bc-logo.svg',
    shortcut: '/bc-logo.svg',
    apple: '/bc-logo.svg',
  },
  verification: {
    google: 'your-google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
