import React from "react";
import TimelineEntry, { TimelineEntryProps } from "./TimelineEntrySimple";

function Timeline({ entries }: { entries: TimelineEntryProps[] }) {
  // const activeEntry = useMemo(() => {
  //   return "agriadapt"

  // }, []);

  return (
    <div className="relative ml-10 after:-ml-10 my-10 after:w-1 after:bg-zinc-800 dark:after:bg-zinc-300 after:absolute after:top-0 after:bottom-0 after:opacity-50 flex flex-col gap-20">
      {entries.map((e) => (
        <TimelineEntry
          key={e.id}
          // focused={activeEntry === e.id}
          {...e}
        ></TimelineEntry>
      ))}
    </div>
  );
}

export default Timeline;
