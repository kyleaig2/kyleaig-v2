"use client";

import { useEffect, useState } from "react";

export default function useHashNavigation() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveHash(hash);
    };

    // Run on mount
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return activeHash;
}
