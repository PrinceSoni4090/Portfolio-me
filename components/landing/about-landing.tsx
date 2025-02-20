import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { Footer } from "./footer";
import HoverButton from "../ui/hover-button";

export default function AboutLanding() {
	return (
		<div className="flex flex-col gap-3" id="about">
			<div className="flex justify-between items-center -mb-3">
				<span className="relative text-lg md:text-5xl bg-clip-text text-black dark:text-white font-sans font-bold h-fit">
					Prince Soni
				</span>

				<div className="relative flex-shrink-1 p-4 md:pt-6 md:p-4 md:order-last order-first">
					<div className="flex flex-col items-end gap-4">
						{/* Twitter Profile Link */}
						<Link
							href="https://www.linkedin.com/in/prince-soni-102682270/"
							target="_blank"
							rel="noopener noreferrer"
							className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
						>
							{/* Profile Image */}
							<span className="block w-full h-full relative">
								<Image
									src="/HeroImage1.jpg" // Replace with your image path
									alt="Profile Avatar"
									fill
									className="transition duration-500 blur-0 scale-100 bg-gray-100 object-cover"
									sizes="150vw"
									quality={100}
									priority
								/>
							</span>
						</Link>

						<div className="z-10 absolute top-40 right-1">
							<Footer />
						</div>
					</div>

					{/* Decorative Lines and Gradients */}
					<div className="z-0">
						{/* Horizontal Lines */}
						<div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
						<div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

						{/* Vertical Lines */}
						<div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
						<div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

						{/* Gradient Decoration */}
						<div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
							<div className="flex -mb-px h-[2px] w-40 -scale-x-100">
								<div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
								<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div className={`text-zinc-600 dark:text-zinc-500 text-base max-w-xl -mt-2`}>
				I&apos;m a Full Stack Developer and Open Source Contributor. <br/>
				Passionate about clean code and scalable solutions.
			
			</div>
			

			<div className="flex gap-6">
				<Link
					href={"mailto:prince4090@gmail.com?subject=Work Enquiry"}
				>
					<HoverButton>
						<div className="flex gap-2 items-center">
							<FaEnvelope />
							<p>Email Me</p>
						</div>
					</HoverButton>
				</Link>

				<Link
					href={
						"https://drive.google.com/file/d/1GsBhcDCVi13icY2LoOLrtcJo8aNqMRq4/view?usp=sharing"
					}
				>
					<HoverButton>
						<div className="flex gap-2 items-center">
							<BiDownload />
							<p>Resume</p>						
						</div>
					</HoverButton>
				</Link>
			</div>
		</div>
	);
}
