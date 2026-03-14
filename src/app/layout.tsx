import type { Metadata } from "next";
import { Crimson_Pro, Instrument_Sans } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xinrui Fang | The University of Tokyo",
  description:
    "PhD Student in Human-Computer Interaction at The University of Tokyo. Research in HCI, Human-AI Interaction, and AI for Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${instrument.variable}`}>
      <body className="font-serif antialiased bg-white text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
