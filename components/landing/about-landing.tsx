import { cousine, gabarito } from "@/public/font";
import Link from "next/link";
import { BiDownload, BiNotepad } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";

export default function AboutLanding() {
	return (
		<div className="flex flex-col gap-3" id="about">
			<div className="flex justify-between">
				<p className={` text-black dark:text-white`}>
					<span className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-800 dark:from-neutral-200 dark:to-neutral-300 text-center font-sans font-bold">
						Prince Soni
					</span>
				</p>

				<p className="animate-wave">&#128075;</p>
			</div>
			<p className={`text-zinc-600 dark:text-zinc-500 text-lg  `}>
				I&apos;m a Full Stack Developer and Open Source Contributor with
				expertise in building scalable applications. Passionate about clean code
				and scalable solutions.
			</p>

			<div className="flex gap-6">
				<Link
					href={"mailto:prince4090@gmail.com?subject=Work Enquiry"}
					className="flex gap-2 font-base px-4 items-center bg-[#0879E7] dark:bg-[#0c1c32] text-white dark:text-[#0879E7]  p-2 w-fit text-sm rounded-md"
				>
					<FaBriefcase />
					<p>Open For Work</p>
					<BsArrowRight />
				</Link>

				<Link
					href={
						"https://drive.google.com/file/d/1GsBhcDCVi13icY2LoOLrtcJo8aNqMRq4/view?usp=sharing"
					}
					className="flex gap-2  px-4 items-center  p-2 w-fit bg-[#0879E7] dark:bg-[#0c1c32] text-white dark:text-[#0879E7] text-sm rounded-md"
					target="_blank"
					rel="noopener noreferre"
					download
				>
					<BiNotepad />
					<p>Resume</p>
					<BiDownload />
				</Link>
			</div>
		</div>
	);
}
