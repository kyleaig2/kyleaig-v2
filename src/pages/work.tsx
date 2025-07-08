import Timeline from "@/components/timeline/Timeline";
import { work_timeline } from "@/content/work";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Work() {
  return (
    <section id="work" className={`${inter.className} py-10 text-md`}>
      <div className="max-w-full items-center justify-center mb-20">
        <Timeline entries={work_timeline} />
      </div>
    </section>
  );
}
