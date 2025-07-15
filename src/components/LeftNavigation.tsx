"use client";

import React from "react";
import { Spectral } from "next/font/google";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import classnames from "classnames";
import useHashNavigation from "@/hooks/useHashScroll";
import InstaIcon from "./icons/InstaIcon";
import GithubIcon from "./icons/GithubIcon";
import { useTheme } from "next-themes";
import { sendThemeToggle } from "@/utils/analytics";
// import Music from "./Music";

const header = Spectral({
  weight: "600",
  subsets: ["latin"],
});

const subheader = Spectral({
  weight: "400",
  subsets: ["latin"],
});

function Hero() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    sendThemeToggle(newTheme);
  };
  
  return (
    <div className="max-md:mt-24 max-md:mb-8 md:mb-24 animate-appear">
      <header role="banner">
        <div className={`${header.className} text-2xl lg:text-3xl text-zinc-800 dark:text-zinc-200`}>
          Kyle Aig-Imoukhuede
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className={`${subheader.className} text-2xl text-slate-800 dark:text-zinc-200`}>
            Full Stack Developer
          </div>
          <CodeBracketIcon onClick={handleThemeToggle} className="size-5 text-black animate-pulse dark:text-indigo-300 cursor-pointer" />
        </div>
      </header>
      <Contact />
    </div>
  );
}

function Contact() {
  const socials = [
    {
      name: "Github",
      href: "https://github.com/kyleaig2",
      icon: GithubIcon,
    },
    {
      name: "Email",
      href: "mailto:hey@kyleaig.com",
      icon: EnvelopeIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/aigimoukhuede",
      icon: InstaIcon,
    },
    {
      name: "Music",
      href: "https://untitled.stream/library/project/Ive0aeyUPlTx1EEGFw5cQ",
      icon: MusicalNoteIcon,
    },
  ];
  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          aria-label={social.name}
          target="_blank"
          className="w-fit"
        >
          <social.icon
            aria-label={social.name}
            className="size-5 text-slate-600 dark:text-indigo-300 link"
          />
        </a>
      ))}
    </div>
  );
}

function Links() {
  const activeHash = useHashNavigation();
  const links = [
    {
      name: "Home",
      hash: "",
    },
    {
      name: "Work",
      hash: "work",
    },
    {
      name: "Projects",
      hash: "projects",
    },
    // {
    //   name: "Blog",
    //   href: "/blog",
    // },
  ];

  return (
    <nav role="navigation" className="flex flex-col gap-4 text-slate-600 dark:text-zinc-200 max-md:hidden">
      {links.map((link) => {
          return (
            <a
              key={link.name}
              // href={link.href || `#${link.hash}`}
              href={`#${link.hash}`}
              className={classnames(
                "nav-link uppercase text-sm w-fit cursor-pointer",
                {
                  active: activeHash === link.hash,
                }
              )}
            >
              {link.name}
            </a>
          );
      })}
    </nav>
  );
}

export default function LeftNavigation() {
  return (
    <div className="md:h-screen md:pt-32 md:sticky md:top-0">
      <Hero />
      {/* <Music /> */}
      <Links />
    </div>
  );
}