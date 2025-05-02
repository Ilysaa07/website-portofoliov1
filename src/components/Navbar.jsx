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
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#121212] backdrop-blur-sm shadow-sm transition-bg-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-lg font-bold text-gray-900 dark:text-white">Portofolio</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLinks />
          <button
  onClick={toggleDark}
  className="text-xl transition-colors duration-300 hover:text-yellow-400 dark:text-white text-gray-800"
>
  {isDark ? <FaSun /> : <FaMoon />}
</button>

        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4 text-xl text-gray-800 dark:text-white">
          <button onClick={toggleDark} className="hover:text-yellow-400">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
    isOpen ? "max-h-[300px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
  } bg-[#e5e7eb]  dark:bg-[#1f1f1f]`}
>
  <div className="flex flex-col gap-4 p-4">
    <NavLinks onClick={() => setIsOpen(false)} isMobile />
  </div>
</div>

    </nav>
  );
}
