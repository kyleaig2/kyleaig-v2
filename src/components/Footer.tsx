import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function Footer() {
  const footer = (
    <div className="relative before:bg-slate-400 before:w-1 hover:before:bg-slate-300 before:transition before:duration-300 before:absolute before:-left-2 pl-2 before:h-full my-12">
      Inspired by Brittany Chiang&apos;s{" "}
      <a href="https://brittanychiang.com">v3 Website</a>. <br /> Developed in
      Next.js and designed in Figma by me
    </div>
  );
  return (
    <div
      className={`${inter.className} text-sm text-zinc-600 dark:text-zinc-200 flex justify-center my-12`}
    >
      {footer}
    </div>
  );
}

export default Footer;
