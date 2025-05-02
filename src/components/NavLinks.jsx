export default function NavLinks({ onClick, isMobile = false }) {
    const links = ["home", "about", "projects", "contact"];
  
    return (
      <>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={onClick}
            className={`nav-link capitalize transition font-mono  ${
              isMobile
                ? "text-white hover:text-red-400"
                : "text-gray-800 dark:text-white hover:text-red-500"
            }`}
          >
            {link}
          </a>
        ))}
      </>
    );
  }
  