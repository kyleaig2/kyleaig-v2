"use client";

import { sendPageView } from "@/utils/analytics";
import { useEffect, useRef, useState } from "react";

export default function useHashNavigation() {
  const [activeHash, setActiveHash] = useState("");

  const observer = useRef<IntersectionObserver | undefined>(undefined);

  /**
   * Google Analytics Page View Capture
   */
  useEffect(() => {
    sendPageView(activeHash);
  }, [activeHash]);

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
          if (entry.intersectionRatio >= 0.4) {
            const id = entry.target.getAttribute("id") ?? "";
            setActiveHash(id);
          }
        });
      },
      { threshold: 0.4 }
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
