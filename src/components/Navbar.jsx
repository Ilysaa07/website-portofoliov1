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
        const top = section.offsetTop - 80;
        const bottom = top + section.offsetHeight;
        const link = document.querySelector(`.nav-link[href='#${section.id}']`);
        const scrollY = window.scrollY;
        link?.classList.toggle("text-red-500", scrollY > top && scrollY <= bottom);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#212121] backdrop-blur-md shadow-md py-3 px-4 flex justify-center items-center">
      <div className="max-w-7xl w-full flex justify-center">
        {/* Mobile Buttons */}
        <div className="md:hidden flex gap-4 text-xl text-gray-800 dark:text-white self-center">
          <button onClick={toggleDark} className="hover:text-yellow-300">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 self-center">
          <NavLinks />
        </div>

        {/* Dark Toggle for Desktop */}
        <div className="hidden md:flex text-xl text-gray-800 dark:text-white self-center">
          <button onClick={toggleDark} className="hover:text-yellow-300">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-800 text-white font-mono transition-all duration-300 z-40 ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 px-6">
          <NavLinks onClick={() => setIsOpen(false)} isMobile />
        </div>
      </div>
    </nav>
  );
}

