import AboutLanding from "@/components/landing/about-landing";
import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import { gabarito } from "@/public/font";
import GhActivityCard from "gh-activity-card/components/gh-activity-card";
import Skills from "@/components/landing/skiils";
import { Footer } from "@/components/landing/footer";
import Education from "@/components/landing/education";

export default function Home() {
	return (
		<>
			<div className="mx-auto mt-12 flex flex-col gap-24">
				<AboutLanding />
				<Experience />
				<HomeProjects />
				
				<div className="flex flex-col gap-6">
					<p
						className={`font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white`}
					>
						Github Contribution
					</p>
					<GhActivityCard
						username="PrinceSoni4090"
						className="text-black dark:text-white"
					/>
				</div>
				<Education />
				<Skills />
			</div>
		</>
	);
}
