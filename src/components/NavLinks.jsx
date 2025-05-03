export default function NavLinks({ onClick, isMobile = false }) {
  const links = ["home", "about", "projects", "contact"];

  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={onClick}
          className={`nav-link group capitalize font-mono relative px-2 py-1 transition-all duration-300
            ${isMobile
              ? "text-black dark:text-white hover:text-red-400"
              : "text-gray-800 dark:text-white hover:text-red-500"
            }`}
        >
          {link}
          <span
            className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
      ))}
    </>
  );
}
