"use client";

import { useEffect, useRef, useState } from "react";

export default function useHashNavigation() {
  const [activeHash, setActiveHash] = useState("");

  const observer = useRef<IntersectionObserver | undefined>(undefined);

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveHash(hash);
    };

    // Run on mount
    updateHash();

    const elements = document
      .querySelector("main")
      ?.querySelectorAll("section");

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            const id = entry.target.getAttribute("id") ?? "";
            // window.history.replaceState(null, "", `#${id}`);
            setActiveHash(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements?.forEach((e) => observer.current?.observe(e));

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    return () => {
      observer.current?.disconnect();
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return activeHash;
}
