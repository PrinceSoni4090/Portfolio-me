"use client"
import AboutLanding from "@/components/landing/about-landing";
import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import Skills from "@/components/landing/skiils";
import Education from "@/components/landing/education";
import GhActivity from "@/components/gh-activity";
import { useTheme } from "next-themes";

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<div className="mx-auto mt-12 flex flex-col gap-24 mb-10">
				<AboutLanding />
				<Experience />
				<HomeProjects />
				
				<div className="flex flex-col gap-6">
					<p
						className={`font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white`}
					>
						Github Contribution
					</p>
					<GhActivity
						username="PrinceSoni4090"
						className="text-black dark:text-white"
						colorTheme={theme === 'light' ? 'light' : 'dark'}
					/>
				</div>
				<Education />
				<Skills />
			</div>
		</>
	);
}
