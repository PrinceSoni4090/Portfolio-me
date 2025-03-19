"use client";
import navLinks from "@/lib/navlinks.json";
import {
	Sun
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import {  BsMoonFill } from "react-icons/bs";
export default function Navbar() {
	const { setTheme } = useTheme();
	const [active, setActive] = useState<"light" | "dark">("dark");
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [hoveredLink, setHoveredLink] = useState<number | null>(null);
	const [hoverWidth, setHoverWidth] = useState(0);
	const [hoverLeft, setHoverLeft] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerLeft, setContainerLeft] = useState(0);

	const toggleTheme = () => {
		const newTheme = active === "light" ? "dark" : "light";
		setActive(newTheme);
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			const currentScrollY = window.scrollY;
			
			if (currentScrollY > lastScrollY) { // scrolling down
				setVisible(false);
			} else { // scrolling up
				setVisible(true);
			}

			setLastScrollY(currentScrollY);
		}
	};

	const handleHover = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
		const linkRect = event.currentTarget.getBoundingClientRect();
		setHoveredLink(index);
		setHoverWidth(linkRect.width);
		setHoverLeft(linkRect.left - containerLeft + 0);
	};

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "dark";
		setActive(savedTheme as "light" | "dark");
		setTheme(savedTheme);
	}, [setTheme]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, [lastScrollY]);

	useEffect(() => {
		if (containerRef.current) {
			const rect = containerRef.current.getBoundingClientRect();
			setContainerLeft(rect.left);
		}
	}, []);

	return (
		<div className={`flex items-center justify-between fixed shadow-lg top-6 left-1/2 -translate-x-1/2 w-11/12 md:w-1/2 backdrop-blur-md bg-white/30 dark:bg-black/30 p-3 rounded-full border border-gray-200 dark:border-neutral-800 z-10 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 '}`}>
    {/* Theme Toggle Button - Left aligned */}
    <div className="flex-shrink-0">
        <div
            className="dark:bg-black rounded-full p-2 px-3 flex items-center dark:border-neutral-800 duration-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleTheme}
        >
            {active === "light" ? (
                <BsMoonFill className="w-4 h-4 text-blue-500 fill-black" /> 
            ) : (
                <Sun className="w-4 h-4 text-yellow-600 fill-current" />
            )}
        </div>
    </div>

    {/* Navigation Links - Centered */}
    <div className="flex justify-center flex-1">
        <div 
            ref={containerRef}
            className="flex gap-4 px-4 py-2 rounded-full text-sm font-medium bg-white text-black dark:bg-neutral-900 dark:text-white relative overflow-hidden"
        >
            <div 
                className={`absolute transition-all duration-300 ease-in-out h-10 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-neutral-800 ${
                    hoveredLink !== null ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    left: `${hoverLeft}px`,
                    width: `${hoverWidth}px`,
                }}
            />
            {navLinks.map((e, i: number) => (
                <a
                    href={e.link}
                    key={i}
                    onClick={(event) => handleScroll(event, e.link.replace('/#', ''))}
                    onMouseEnter={(event) => handleHover(i, event)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="hover:text-blue-500 cursor-pointer duration-500 px-4 py-1 relative z-10"
                >
                    {e.name}
                </a>
            ))}
        </div>
    </div>
</div>
	);
}
