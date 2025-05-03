import { useState } from "react";
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
import {
  SiVite,
  SiPhp,
  SiExpress,
  SiMysql,
  SiGithub as SiGithubAlt
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

import Sertifikat1 from "../assets/img/sertiudemyjs.jpg";

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
  { name: "Github", icon: <SiGithubAlt className="text-black" /> },
  { name: "Microsoft Word", icon: <FaFileWord className="text-blue-500" /> },
  { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-500" /> }
];

const certificates = [
  {
    name: "JavaScript Mastery",
    icon: <IoLogoJavascript className="text-yellow-400" />,
    image: Sertifikat1
  }
];

export default function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const data = showSkills ? skills : certificates;

  return (
    <div className="px-6 mt-8">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowSkills(true)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
          ${showSkills ? "bg-neutral-900 text-white" : "bg-gray-200 text-black dark:bg-neutral-800 dark:text-white"}`}
        >
          Skills
        </button>
        <button
          onClick={() => setShowSkills(false)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
          ${!showSkills ? "bg-neutral-900 text-white" : "bg-gray-200 text-black dark:bg-neutral-800 dark:text-white"}`}
        >
          Certificates
        </button>
      </div>

      {/* Cards Grid */}
      <div
        key={showSkills ? "skills" : "certificates"}
        className={`grid gap-8 animate-fadeIn ${
          showSkills ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => !showSkills && setSelectedCertificate(item)}
            className={`flex flex-col items-center justify-center bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-3xl transform ${
              !showSkills ? "cursor-pointer hover:scale-105 max-w-xl w-full mx-auto" : "hover:scale-105"
            } transition-transform ease-in-out`}
          >
            {showSkills ? (
              <>
                <div className="text-6xl mb-4">{item.icon}</div>
                <p className="text-base font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {item.name}
                </p>
              </>
            ) : (
              <>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-base font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {item.name}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl max-w-xl w-full relative shadow-xl animate-fadeInZoom">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-2 right-4 text-xl font-bold text-gray-700 dark:text-white"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
              {selectedCertificate.name}
            </h2>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
}
  