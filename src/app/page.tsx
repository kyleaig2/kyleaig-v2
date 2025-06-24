"use client";

import Footer from "@/components/Footer";
import Gallery from "@/pages/gallery";
import Landing from "@/pages/landing";
import Projects from "@/pages/projects";
import Work from "@/pages/work";

export default function Home() {
  return (
    <>
      <Landing />
      {/* <About /> */}
      <Work />
      <Projects />
      <Gallery />
      <Footer />
    </>
  );
}
