"use client";
import Footer from "@/components/Footer";
import LeftNavigation from "@/components/LeftNavigation";
// import ParticlesContainer from "@/components/Particles";
// import Gallery from "@/pages/gallery";
import Landing from "@/pages/landing";
import Projects from "@/pages/projects";
import Work from "@/pages/work";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {

  const Background = dynamic(() => import("@/components/Background"), {
    ssr: false,
  });

  const { theme } = useTheme();

  return (
    <Suspense fallback={null}>
      {/* <ParticlesContainer /> */}
      <Background theme={theme} />
      <div className="animate-appear flex flex-col md:flex-row justify-between px-8 md:px-12 md:gap-24 lg:gap-36 max-w-6xl m-auto">
        <LeftNavigation />
        <main role="main" className="flex-1 md:pt-32 w-full">
          <Landing />
          <Work />
          <Projects />
          <Footer />
        </main>
      </div>
    </Suspense>
  );
}
