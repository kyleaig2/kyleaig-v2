import React from 'react'

function CardTag({ tag }: { tag: string }) {
  return (
    <span
      key={tag}
      className="text-xs bg-zinc-300/50 dark:bg-indigo-400/50 font-bold text-zinc-500 dark:text-indigo-200 px-3 py-1 rounded-full"
    >
      {tag}
    </span>
  );
}

export default CardTag