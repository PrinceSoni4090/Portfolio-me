import { cousine, gabarito } from "@/public/font";
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
        className={`${gabarito.className} text-2xl text-black dark:text-white`}
      >
        Experience
      </p>

      <div className="mt-12 md:grid-cols-2 gap-6">
        {experienceData.map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-4 border hover:border-slate-400 dark:border-neutral-900 dark:hover:border-neutral-800 duration-300 cursor-pointer rounded-md flex flex-col gap-8 w-fit"
            >
              <div>
                <div className="flex items-center gap-2">
                  <BiBriefcase className="size-6 invert dark:invert-0" />
                  <p
                    className={`${gabarito.className} text-xl text-black dark:text-white`}
                  >
                    {e.role}
                  </p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-400 text-sm">{e.company}</p>
                  <p className="text-gray-400 text-sm">{e.timeframe}</p>
                </div>
              </div>
              <p
                className={`${cousine.className} text-sm text-gray-600 dark:text-gray-400`}
              >
                {e.about}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
