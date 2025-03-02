import experienceData from "@/lib/experience.json";
import { BiBriefcase } from "react-icons/bi";

interface dataType {
	company: string;
	about: string;
	role: string;
	timeframe: string;
}

export default function Experience() {
	return (
		<div id="experience">
			<p
				className={` font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white`}
			>
				Experience
			</p>

			<div className="mt-6 md:grid-cols-2 gap-6 shadow-lg">
				{experienceData.map((e: dataType, i: number) => {
					return (
						<div
							key={i}
							className="p-4 border dark:border-neutral-800 duration-300 cursor-pointer rounded-md flex flex-col gap-8 w-fit"
						>
							<div>
								<div className="flex items-center gap-2">
									<BiBriefcase className="size-6 invert dark:invert-0" />
									<p className={`text-xl text-black dark:text-white`}>
										{e.role}
									</p>
								</div>
								<div className="flex justify-between mt-2 ">
									<p className="text-xl text-gray-500 dark:text-gray-400">
										{e.company}
									</p>
									<p className=" text-sm text-gray-500 dark:text-gray-400">
										{e.timeframe}
									</p>
								</div>
							</div>
							<p className={` text- text-zinc-700 dark:text-zinc-400`}>
								{e.about}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
