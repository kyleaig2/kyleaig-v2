"use client";

import Footer from "@/components/Footer";
import LeftNavigation from "@/components/LeftNavigation";
import ParticlesContainer from "@/components/Particles";
// import Gallery from "@/pages/gallery";
import Landing from "@/pages/landing";
import Projects from "@/pages/projects";
import Work from "@/pages/work";

export default function Home() {
  return (
    <>
      <ParticlesContainer />
      <div className="animate-appear flex flex-col md:flex-row justify-between px-8 max-w-5xl m-auto">
        <LeftNavigation />
        <main role="main" className="max-w-xl flex-1 md:pt-32">
          <Landing />
          {/* <About /> */}
          <Work />
          <Projects />
          {/* <Gallery /> */}
          <Footer />
        </main>
      </div>
    </>
  );
}
