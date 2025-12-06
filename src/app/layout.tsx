import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Built Compliant - Governance That Closes Deals",
  description: "We help AI companies design governance systems that actually work in practice — systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.",
  keywords: ["AI governance", "compliance", "due diligence", "procurement", "risk management", "AI audit"],
  openGraph: {
    title: "Built Compliant - Governance That Closes Deals",
    description: "We help AI companies design governance systems that actually work in practice — systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.",
    url: "https://builtcompliant.ai",
    siteName: "Built Compliant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built Compliant - Governance That Closes Deals",
    description: "We help AI companies design governance systems that actually work in practice — systems that scale with complexity, support innovation, and unlock revenue by passing procurement and due diligence.",
  },
  icons: {
    icon: '/bc-logo.svg',
    shortcut: '/bc-logo.svg',
    apple: '/bc-logo.svg',
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
