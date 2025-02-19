"use client";
import { cousine, gabarito } from "@/public/font";
import projectsData from "@/lib/allProjects.json";
import { HoverEffect } from "../ui/card-hover-effect";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

interface dataType {
  name: string;
  description: string;
  deployed: string;
  github: string;
  tech: string[];
  image: string;
}

export default function HomeProjects() {
  return (
    <div id="projects">
      <p className="font-bold text-2xl md:text-4xl tracking-tight mt- text-black dark:text-white">Projects</p>
      <HoverEffect items={projectsData} />
    </div>
  );
}
