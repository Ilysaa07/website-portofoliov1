import { useState, useEffect } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

import Profil from "../assets/img/anomali.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    const root = document.documentElement;
    const newMode = !isDark;
    root.classList.toggle("dark", newMode);
    setIsDark(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <>
      {/* Toggle Sidebar Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 rounded-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg hover:scale-110 transition"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#121212] text-gray-800 dark:text-white shadow-xl z-40 flex flex-col justify-between py-6 px-5"
          >
            {/* Avatar & Name */}
            <div className="text-center space-y-3">
              <img
                src={Profil}
                className="mx-auto rounded-full border-4 shadow-lg hover:scale-105 transition w-32 h-32 object-cover"
              />
              <div className="text-xl font-bold font-poppins">Ilyasa Meydiansyah</div>
              <div className="text-sm text-[#1DA1F2] dark:text-blue-300 font-poppins">Junior Web Developer</div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-5 mt-10 font-poppins">
              <NavLinks onClick={() => setIsOpen(false)} />
            </nav>

            {/* Toggle Dark Mode */}
            <div className="flex justify-center mt-auto">
              <button
                onClick={toggleDark}
                className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition shadow-md"
              >
                {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-800" />}
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}