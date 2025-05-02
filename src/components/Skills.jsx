import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaNpm,
  FaFileWord,
  FaFileExcel
} from "react-icons/fa";

import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiExpress, SiGithub, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-400" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Vite", icon: <SiVite className="text-yellow-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Github", icon: <SiGithub className="text-black" /> },
  { name: "Microsoft Word", icon: <FaFileWord className="text-blue-500" /> },
  { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-500" /> }
];

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8 px-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 rounded-3xl transform hover:scale-110 transition-transform ease-in-out"
        >
          <div className="text-6xl mb-4">{skill.icon}</div>
          <p className="text-base font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

