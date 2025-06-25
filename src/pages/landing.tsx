// import LandingHero from "@/components/LandingHero";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <section
      className={`${inter.className} text-md flex flex-col justify-center mb-16`}
    >
      {/* <LandingHero /> */}
      <div className="text-justify text-zinc-600">
        <p>
          I earned my B.S. in Computer Science from the University of Georgia,
          with a minor in Music Performance. Since then, I&apos;ve explored the
          intersections of technology, data, and design — building intuitive
          frontends, scalable backend systems, and diving into the world of GIS
          and data visualization along the way.
        </p>
        <br />
        <p>
          What drives me is the space where code meets creativity. Whether
          it&apos;s creating powerful interfaces or architecting infrastructure
          behind to power it behind the scenes, I aim to build tools that
          resonate — both functionally and emotionally.
        </p>
        <br />
        <p>
          In my free time, I&apos;m learning several different ways to play
          Autumn Leaves on piano and perfecting my tennis serve. I&apos;m
          especially drawn to projects that blend art, music, or storytelling
          with tech. If you&apos;re doing work like that I&apos;d love to
          contribute!
        </p>
      </div>
    </section>
  );
}
