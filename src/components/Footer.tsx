import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function Footer() {
  const footer = (
    <div className="lg:ml-[-50%] relative hover:before:bg-slate-400 dark:hover:before:bg-indigo-400 dark:before:bg-indigo-300 before:w-1 before:bg-slate-300 before:transition before:duration-300 before:absolute before:-left-2 pl-2 before:h-full my-6">
      Design inspired by Brittany Chiang&apos;s{" "}
      <a href="https://brittanychiang.com">v3 Website</a>. <br /> Developed by me, additional icons by Icons8
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
