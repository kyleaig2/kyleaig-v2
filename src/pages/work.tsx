import Timeline from "@/components/timeline/Timeline";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Work() {
  return (
    <div id="work" className={`${inter.className} py-10 text-md text-zinc-600`}>
      <div>
        <p>Here are some of the projects I&apos;ve worked on</p>
      </div>
      <div className="w-fit flex items-center justify-center">
        <Timeline />
      </div>
    </div>
  );
}
