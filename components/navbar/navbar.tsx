import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import navLinks from "@/lib/navlinks.json";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center  fixed top-4 left-1/2 -translate-x-1/2  w-11/12 md:w-1/2  ">
      <Link href={"/"}>
        <Image
          src={"/HeroImage1.jpg"}
          width={500}
          height={500}
          className="w-10 rounded-full border border-neutral-900"
          alt="my-img"
        />
      </Link>

      <div className="flex gap-6 px-4 py-2 rounded-full text-sm font-medium  bg-white text-black dark:bg-neutral-900 dark:text-white">
        {navLinks.map((e, i: number) => {
          return (
            <Link
              href={e.link}
              key={i}
              className={` hover:text-blue-500 cursor-pointer duration-500 `}
            >
              {e.name}
            </Link>
          );
        })}
      </div>

      <Link
        href={"https://github.com/Kashyap1ankit"}
        className="hover:text-sky-700 invert dark:invert-0"
      >
        <FaGithub className="size-6" />
      </Link>
    </div>
  );
}
