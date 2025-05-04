import { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const icons = {
  home: <FaHome />,
  about: <FaUserAlt />,
  projects: <FaProjectDiagram />,
  contact: <FaEnvelope />,
};

export default function NavLinks({ onClick }) {
  const links = ["home", "about", "projects", "contact"];
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let link of links) {
        const section = document.getElementById(link);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(link);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={onClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                     font-poppins text-sm tracking-wide capitalize
                     hover:bg-[#e5e7eb] dark:hover:bg-[#212121] hover:shadow-lg hover:scale-105 relative`}
        >
          <span className="text-lg">{icons[link]}</span>
          <span>{link}</span>

          
        </a>
      ))}
    </>
  );
}