"use client"

import { ArrowUpRight } from "lucide-react"
import { ReactNode } from "react"

interface HoverButtonProps {
  children: ReactNode;
}

export default function HoverButton({ children }: HoverButtonProps) {
  return (
    <button className="bg-gray-100 text-black dark:text-white dark:bg-neutral-800 px-4 py-2 rounded-md flex justify-center items-center group/btn relative overflow-hidden"> 
   
      <span className="group-hover/btn:translate-x-40 text-center transition duration-500">{children}</span>
      <div className="absolute inset-0 flex items-center justify-center -translate-x-40 group-hover/btn:translate-x-0 transition duration-500">
        <ArrowUpRight/>
      </div>
    </button>
  )
}
