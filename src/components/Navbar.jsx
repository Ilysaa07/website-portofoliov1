import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const link = document.querySelector(`.nav-link[href='#${section.id}']`);
        const scrollY = window.scrollY;
        link?.classList.toggle("text-primary", scrollY > top && scrollY <= bottom);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300">
          <span className="text-red-400 dark:text-red-500">My</span>Portfolio
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <button
            onClick={toggleDark}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 text-xl text-gray-800 dark:text-white">
          <button onClick={toggleDark} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700">
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-neutral-700">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-[300px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        } bg-gray-100 dark:bg-neutral-900`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          <NavLinks onClick={() => setIsOpen(false)} isMobile />
        </div>
      </div>
    </nav>
  );
}
