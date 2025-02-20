"use client";
import React from "react";
import {
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { BsLinkedin } from "react-icons/bs";
import { FloatingDock } from "../ui/floating-dock";

export function Footer() {
  const links = [
   
    {
      title: "LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-neutral-800 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-800 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-800 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-end w-fit">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links} desktopClassName={undefined}      />
    </div>
  );
}
