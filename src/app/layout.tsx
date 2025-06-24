import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesContainer from "@/components/Particles";
import LeftNavigation from "@/components/LeftNavigation";

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
        <ParticlesContainer />
          <div className="@container animate-appear flex flex-col md:flex-row justify-between px-8 max-w-5xl m-auto">
            <LeftNavigation />
            <div className="max-w-xl flex-1 md:pt-32">{children}</div>
          </div>
      </body>
    </html>
  );
}
