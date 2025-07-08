import React, { useEffect, useRef, useState } from "react";
import TimelineCard, { ITimelineEntry } from "./TimelineCard";

function Timeline({ entries }: { entries: ITimelineEntry[] }) {
  const observer = useRef<IntersectionObserver | null>(undefined);
  const [activeCard, setActiveCard] = useState<string>();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.intersectionRatio >= 0.4)
          setActiveCard(e.target.id);
        else setActiveCard((prev) => (prev === e.target.id ? undefined : prev));
      })
    }, {
      rootMargin: "-30% 0px",
      threshold: 0.4,
    });

    const elements = entries.reduce((arr, e) => {
      const x = document.getElementById(e.id);
      if (x) arr.push(x);
      return arr;
    }, new Array<HTMLElement>);

    elements.forEach((e) => observer.current?.observe(e));
  }, [entries]);

  return (
    <div className="relative ml-10 after:-ml-10 my-10 after:w-1 after:bg-zinc-800 dark:after:bg-zinc-300 after:absolute after:top-0 after:bottom-0 after:opacity-50 flex flex-col gap-20">
      {entries.map((e) => (
        <TimelineCard
          key={e.id}
          focused={activeCard === e.id}
          {...e}
        ></TimelineCard>
      ))}
    </div>
  );
}

export default Timeline;
