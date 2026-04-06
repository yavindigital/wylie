import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Wylie for County Commissioner",
  description:
    "David Wylie is running for Denton County Commissioner, Precinct 4. Republican fighter for better roads, safer communities, and responsible government.",
  openGraph: {
    title: "David Wylie for County Commissioner",
    description: "Republican Fighter — Denton County Commissioner, Precinct 4",
    url: "https://wyliefordenton.com",
    siteName: "David Wylie for County Commissioner",
    images: [
      {
        url: "https://wyliefordenton.com/wp-content/uploads/2026/03/David-Wyle-Kick-off-105.jpg",
        width: 1500,
        height: 1000,
        alt: "David Wylie Campaign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
