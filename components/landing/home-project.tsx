"use client";

import projectsData from "@/lib/allProjects.json";
import { HoverEffect } from "../ui/card-hover-effect";


export default function HomeProjects() {
  return (
    <div id="projects">
      <p className="font-bold text-2xl md:text-4xl tracking-tight mt- text-black dark:text-white">Projects</p>
      <HoverEffect items={projectsData} />
    </div>
  );
}
