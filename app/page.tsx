"use client";
import AboutLanding from "@/components/landing/about-landing";
import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import Skills from "@/components/landing/skiils";
import Education from "@/components/landing/education";
import GhActivity from "@/components/gh-activity";
import { useTheme } from "next-themes";
import { EmailCopyButton } from "@/components/ui/email-copy-button";
import { Mail } from "lucide-react";

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<div className="mx-auto mt-12 flex flex-col gap-24 mb-12">
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
						className="text-black dark:text-white shadow-lg"
						colorTheme={theme === "light" ? "light" : "dark"}
					/>
				</div>
				<Education />
				<Skills />
				<main className="flex items-center justify-center mt-[-3rem] gap-3">
					<Mail className="w-6 h-6 text-zinc-700 dark:text-zinc-400" />
					<EmailCopyButton email="prince4090@gmail.com" />
				</main>
			</div>
		</>
	);
}
