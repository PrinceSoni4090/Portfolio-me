"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import navLinks from "@/lib/navlinks.json";
import {
	LucideMoon,
	Moon,
	MoonIcon,
	MoonStar,
	Sun,
	SunDimIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonClearFill } from "react-icons/ri";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { CgMoon } from "react-icons/cg";

export default function Navbar() {
	const { setTheme, resolvedTheme } = useTheme();
	const [active, setActive] = useState<"light" | "dark">("dark");

	const toggleTheme = () => {
		const newTheme = active === "light" ? "dark" : "light";
		setActive(newTheme);
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "dark";
		setActive(savedTheme as "light" | "dark");
		setTheme(savedTheme);
	}, [setTheme]);

	return (
		<div className="flex justify-between items-center fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-1/2">
			{/* Theme Toggle Button */}
			<div
				className="dark:bg-black rounded-full p-2 px-3 flex items-center border dark:border-neutral-800 duration-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
				onClick={toggleTheme}
			>
				{active === "light" ? (
					<BsMoonFill className="w-4 h-4 text-blue-500 fill-black" /> // Colorful sun icon for light mode
				) : (
					<Sun className="w-4 h-4 text-yellow-600 fill-current" />
					// Colorful moon icon for dark mode
				)}
			</div>

			{/* Navigation Links */}
			<div className="flex gap-6 px-4 py-2 rounded-full text-sm font-medium bg-white text-black dark:bg-neutral-900 dark:text-white">
				{navLinks.map((e, i: number) => (
					<Link
						href={e.link}
						key={i}
						className={`hover:text-blue-500 cursor-pointer duration-500`}
					>
						{e.name}
					</Link>
				))}
			</div>

			{/* GitHub Link */}
			<Link
				href={"https://github.com/Kashyap1ankit"}
				className="hover:text-sky-700 invert dark:invert-0"
			>
				<FaGithub className="size-6" />
			</Link>
		</div>
	);
}
