"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { CiMonitor } from "react-icons/ci";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
	const socials = [
		{
			link: "https://x.com/kashyap_tweetts",
			icon: FaTwitter,
		},
		{
			link: "https://www.linkedin.com/in/ankit-kashyap-coder/",
			icon: FaGithub,
		},

		{
			link: "mailto:kashyap25ankit@gmail.com?subject=Work Enquiry",
			icon: CgMail,
		},
	];

	return (
		<div className="mt-24 mb-12 flex justify-center">
			<div className="flex gap-4 ">
				{socials.map((e, i: number) => {
					return (
						<Link key={i} href={e.link}>
							<e.icon className="size-6 text-black dark:text-white  hover:text-gray-400 dark:hover:text-gray-700" />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
