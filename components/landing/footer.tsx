"use client";
import React from "react";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { BsLinkedin } from "react-icons/bs";
import { FloatingDock } from "../ui/floating-dock";

export function Footer() {
	const links = [
		{
			title: "LinkedIn",
			icon: (
				<BsLinkedin className="h-full w-full text-neutral-800 dark:text-neutral-300" />
			),
			href: "https://www.linkedin.com/in/prince-soni-102682270/",
		},

		{
			title: "Twitter",
			icon: (
				<IconBrandX className="h-full w-full text-neutral-800 dark:text-neutral-300" />
			),
			href: "https://x.com/soniPrince4090",
		},
		{
			title: "GitHub",
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-800 dark:text-neutral-300" />
			),
			href: "https://github.com/PrinceSoni4090",
		},
	];
	return (
		<div className="flex items-center justify-end w-fit">
			<FloatingDock
				mobileClassName="translate-y-20"
				items={links}
				desktopClassName={undefined}
			/>
		</div>
	);
}
