import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { gabarito } from "@/public/font";
import { RiBearSmileFill } from "react-icons/ri";

import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiGit,
  SiMongoose,
  SiPrisma,
  SiRecoil,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiSocketdotio,
  SiNextdns,
  SiHono,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiBootstrap,
  SiPassport,
  SiNpm,
} from "react-icons/si";
const skills = [
  {
    title: "Javascript",
    icon: <SiJavascript className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="size-6 text-black dark:text-white" />,
  },
  {
    title: "React",
    icon: <SiReact className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Nextjs",
    icon: <SiNextdotjs className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Node js",
    icon: <SiNodedotjs className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Express.js",
    icon: <SiExpress className="size-6 text-black dark:text-white" />,
  },
  {
    title: "PostgresSQL",
    icon: <SiPostgresql className="size-6 text-black dark:text-white" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Docker",
    icon: <SiDocker className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma className="size-6 text-black dark:text-white" />,
  },

  {
    title: "Git",
    icon: <SiGit className="size-6 text-black dark:text-white" />,
  },

  {
    title: "Zustand",
    icon: <RiBearSmileFill className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Auth.js",
    icon: <SiNextdns className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Mongoose",
    icon: <SiMongoose className="size-6 text-black dark:text-white" />,
  },

  {
    title: "Npm",
    icon: <SiNpm className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Github",
    icon: <SiGithub className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Zod",
    icon: <SiZod className="size-6 text-black dark:text-white" />,
  },
];

export default function Skills() {
  return (
    <div>
      <p
        className={`font-bold text-2xl md:text-4xl tracking-tight  text-black dark:text-white`}
      >
        Skills
      </p>
      <InfiniteMovingCards items={skills} direction="left" speed="normal" />
    </div>
  );
}
