"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    deployed?: string;
    github: string;
    tech: string[];
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0 rounded-3xl">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/30 rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3 },
                  }}
                />
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-neutral-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 dark:group-hover:border-white/[0.2]">
            <div className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h4 className="text-zinc-700 dark:text-zinc-200 font-bold tracking-wide text-base">
                  {item.name}
                </h4>
              </div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {item.deployed && (
                  <Link
                    href={`https://${item.deployed}`}
                    target="_blank"
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                  >
                    Live Demo →
                  </Link>
                )}
                <Link
                  href={item.github}
                  target="_blank"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  GitHub →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
