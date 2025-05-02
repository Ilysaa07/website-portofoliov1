export default function NavLinks({ onClick, isMobile = false }) {
  const links = ["home", "about", "projects", "contact"];

  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={onClick}
          className={`nav-link capitalize font-mono transition-all duration-300 relative ${
            isMobile
              ? "text-black dark:text-white hover:text-red-400"
              : "text-gray-800 dark:text-white hover:text-red-500"
          }`}
        >
          {link}
          <span
            className={`absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full`}
          ></span>
        </a>
      ))}
    </>
  );
}
