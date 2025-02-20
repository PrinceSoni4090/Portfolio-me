import { PiGraduationCapBold } from "react-icons/pi";

export default function Education() {
  return (
    <div id="education">
      <p
        className="font-bold text-2xl md:text-4xl tracking-tight mt- text-black dark:text-white"
      >
        Education
      </p>

      <div className="mt-6 md:grid-cols-2 gap-6">
        <div className="p-4 border-[1px] border-slate-400 dark:border-neutral-800 duration-300 cursor-pointer rounded-md flex flex-col gap-8 w-fit">
          <div>
            <div className="flex items-center gap-2">
              <PiGraduationCapBold className="size-6 invert dark:invert-0" />
              <p className="text-xl text-black dark:text-white">
                Bachelor of Technology - BTech
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Lakhmi Chand Institute of Technology, Bilaspur
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Oct 2020 - Sep 2024
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Computer Science and Engineering
            </p>
            <p className="font-medium text-blue-500 mt-2">Grade: 8.4 CGPA</p>
          </div>
          <p className="text-gray-700 dark:text-gray-400">
            I have completed my Bachelor degree in Computer Science and Engineering from Lakhmi Chand Institute of Technology, Bilaspur. I have completed with a CGPA of 8.44. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
