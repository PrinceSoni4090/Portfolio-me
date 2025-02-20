"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HoverButton from "./hover-button";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-5 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0 rounded-xl">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 dark:bg-blue-900/30 rounded-2xl"
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
          
          <div className="relative p-4 rounded-lg h-full w-full overflow-hidden  border border-gray-300 dark:border-zinc-800 group-hover:border-blue-500/50 dark:group-hover:border-blue-500/50 transition-colors duration-300">
            <div className="w-full h-[200px] relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h4 className="text-gray-900 dark:text-gray-100 font-bold tracking-wide text-base">
                {item.name}
              </h4>
              <p className="mt-4 text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 justify-center">
                {item.deployed && (
                  <Link
                    href={item.deployed}
                    target="_blank"
                    className="text-sm font-medium"
                  >
                    <HoverButton>Live Demo</HoverButton>
                  </Link>
                )}
                <Link
                  href={item.github}
                  target="_blank"
                  className="text-sm font-medium"
                >
                  <HoverButton>GitHub</HoverButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
