import AboutLanding from "@/components/landing/about-landing";
import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import { gabarito } from "@/public/font";
import GhActivityCard from "gh-activity-card/components/gh-activity-card";
import Footer from "@/components/landing/footer";
import Skills from "@/components/landing/skiils";

export default function Home() {
	return (
		<>
			<div className="mx-auto mt-12 flex flex-col gap-24">
				<AboutLanding />
				<Experience />
				<HomeProjects />
				<Skills />
				<div className="flex flex-col gap-6">
					<p
						className={`${gabarito.className} text-2xl text-black dark:text-white`}
					>
						Github Contribution
					</p>
					<GhActivityCard
						username="PrinceSoni4090"
						className="text-black dark:text-white"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
