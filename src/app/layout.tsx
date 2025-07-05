import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "kyleaig",
  description: "Kyle Aig-Imoukhuede: Full Stack Developer",
};

const GA_ID = process.env.GA_ID ?? "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV !== "development" && <GoogleAnalytics gaId={GA_ID} />}
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
