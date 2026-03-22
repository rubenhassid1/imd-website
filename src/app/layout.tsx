import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMD — Israeli Mention Defense",
  description:
    "Proactive reputation intelligence for political leaders. Built by former Israeli defense officers. Mention monitoring, threat detection, and defense-grade operations.",
  keywords: [
    "reputation defense for politicians",
    "political mention monitoring",
    "social media threat detection for public figures",
    "political intelligence service",
    "reputation risk management",
  ],
  openGraph: {
    title: "IMD — Israeli Mention Defense",
    description:
      "Proactive reputation intelligence for political leaders. Built by former Israeli defense officers.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
