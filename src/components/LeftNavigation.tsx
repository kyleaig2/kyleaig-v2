"use client";

import React from "react";
import { Spectral } from "next/font/google";
import {
  ArrowDownLeftIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import classnames from "classnames";
import useHashNavigation from "@/hooks/useHashScroll";

const header = Spectral({
  weight: "600",
  subsets: ["latin"],
});

const subheader = Spectral({
  weight: "400",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className="mb-24 animate-appear">
      <header role="banner">
        <div className={`${header.className} text-3xl text-zinc-800`}>
          Kyle Aig-Imoukhuede
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className={`${subheader.className} text-2xl text-slate-800`}>
            Full Stack Developer
          </div>
          <CodeBracketIcon className="size-5 text-black animate-pulse" />
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
      icon: GlobeAltIcon,
    },
    {
      name: "Email",
      href: "mailto:kyle.o.aig@gmail.com",
      icon: EnvelopeIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/aigimoukhuede",
      icon: ArrowDownLeftIcon,
    },
    {
      name: "Music",
      href: "https://untitled.stream/library",
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
            className="size-5 text-slate-600 link"
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
    // {
    //   name: "About",
    //   href: "/#about",
    // },
    {
      name: "Work",
      hash: "work",
    },
    {
      name: "Projects",
      hash: "projects",
    },
    // {
    //   name: "Gallery",
    //   hash: "gallery",
    // },
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
    // {
    //   name: "Blog",
    //   href: "/blog",
    // },
  ];

  return (
    <nav role="navigation" className="flex flex-col gap-4 text-slate-600">
      {links.map((link) => {
          return (
            <a
              key={link.name}
              href={link.href || `#${link.hash}`}
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
      <Links />
    </div>
  );
}
