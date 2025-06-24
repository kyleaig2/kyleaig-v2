import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Inter, Spectral } from "next/font/google";
import Link from "next/link";
import React from "react";

const header = Spectral({
  weight: "600",
  subsets: ["latin"],
});

const body = Inter({
  weight: "400",
  subsets: ["latin"],
})

function Header() {
  return (
    <header className="flex flex-col max-w-2xl">
      <div className={`${header.className} text-4xl font-bold mb-12`}>
        Hey, thanks for visiting my page! 👋
      </div>
      <div className="text-2xl mb-8">
        World-builder engineering with a diverse toolbox
      </div>
      <div className={`${body.className} text-sm mb-8`}>
        After graduating from the University of Georgia with a BS in Computer
        Science and minor in Music Performance I entered the sofware industry.
      </div>
      <div className={`${body.className} text-xl`}>
        Here are some of the technologies I have experience in
      </div>
      <div className="flex mb-8">
        <span>React</span>
        <span className="mx-4">|</span>
        <span>Next.js</span>
        <span className="mx-4">|</span>
        <span>Node.js</span>
        <span className="mx-4">|</span>
        <span>Python</span>
        <span className="mx-4">|</span>
        <span>Typescript</span>
      </div>
    </header>
  );
}

function CTA() {
  return (
    <div className="flex justify-center">
      <Link href="#about" className="flex flex-col items-center text-slate-700 font-bold w-fit">
        <div className="text-sm">Learn More</div>
        <ChevronDownIcon className="size-6 animate-[bounce_2s_ease-in-out_infinite]" />
      </Link>
    </div>
  );
}

function LandingHero() {
  return (
    <div>
      <Header />
      <CTA />
    </div>
  );
}

export default LandingHero;
