import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function Footer() {
  const footer = (
    <div>
      Inspired by Brittany Chiang&apos;s{" "}
      <a href="https://brittanychiang.com">v3 Website</a>. <br /> Developed with
      Next.js and designed in Figma by me
    </div>
  );
  return (
    <div
      className={`${inter.className} text-sm text-zinc-600 flex justify-center my-12`}
    >
      {footer}
    </div>
  );
}

export default Footer;
