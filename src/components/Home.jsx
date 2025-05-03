import RotatingText from "../components/RotatingText";
import SplitText from "../components/SplitText";
import About from "../components/About";
import AboutTitle from "../components/AboutTitle";
import CardExp from "../components/CardExp";
import Dock from "../components/Dock";
import Skills from "../components/Skills";
import CardProjek from "../components/CardProjek";
import Lanyard from "../components/Lanyard";
import Contact from "../components/Contact";
import { Toaster } from 'react-hot-toast';
import "../App.css";

import Profil from "../assets/img/anomali.png";

import { motion } from "framer-motion";
import { FaFileAlt, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const handleAnimationComplete = () => console.log("Wellcome! To My Website");
  const items = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/ilyasa-meydiansyah/"),
    },
    {
      icon: <FaGithub />,
      label: "Github",
      onClick: () => window.open("https://www.github.com/ilysaa07/"),
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/ilyasaalfrdzi/"),
    },
    {
      icon: <FaFileAlt />,
      label: "Download CV",
      onClick: () => alert("Coming Soon"),
    },
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-[#121212] dark:text-white transition-colors duration-300">
      <Toaster position="top-center" reverseOrder={false} />
      <section
        id="home"
        className="min-h-full pt-32 px-4 text-center space-y-4 flex flex-col items-center justify-center"
      >
        <SplitText
          text="Hello, I'm"
          className="text-lg font-semibold font-mono "
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold transition-all duration-300">
          Ilyasa Meydiansyah
        </h1>

        <RotatingText
          texts={["Web Developer", "Frontend Developer", "Tech Enthusiast"]}
          mainClassName="px-4 font-mono overflow-hidden py-2 rounded-lg mt-2 font-bold text-lg bg-gray-200 text-gray-900 dark:bg-[#212121] dark:text-white"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </section>

      <section className="mt-[6rem]">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </section>

      <section
        className="mt-80 rounded-xl shadow-md border mx-auto max-w-3xl my-16 p-6 text-center space-y-4 bg-gray-100 border-gray-300 dark:bg-[#212121] dark:border-black transition-all"
        id="about"
      >
        <div className="w-full text-3xl md:text-4xl font-bold">
          <AboutTitle
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Me
          </AboutTitle>
        </div>
        <div className=" flex flex-col md:flex-row gap-4 font-mono text-gray-900 dark:text-white">
          <img
            src={Profil}
            alt="profile"
            className="w-full max-w-xs h-[15rem] mt-[2rem] rounded-lg mx-auto md:mx-0 object-cover shadow-md border border-gray-300 dark:border-black transition-all"
          />

          <About
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={20}
          >
            I am a 17-year-old student from Bandung, West Java, Indonesia, with
            a strong interest in the rapidly expanding field of technology. I
            focus especially on software engineering and web development, where
            I constantly learn new things and hone my craft. I have a natural
            desire for learning and actively participate in a variety of coding
            projects. I also keep up with the most recent advancements in
            technology. Beyond academics, I have hobbies like gaming, coding,
            and kickboxing, all of which enhance my creative and problem-solving
            skills.
          </About>
        </div>
      </section>

      <section className="w-full max-w-3xl mx-auto my-10 space-y-4   px-4 ">
        <div className="text-3xl md:text-4xl font-bold text-left md:ml-10">
          <AboutTitle
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Experience
          </AboutTitle>
        </div>
        <CardExp />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-3xl mx-auto my-24 px-4 md:px-10 py-5 bg-gray-100 border border-gray-300 dark:bg-[#212121] dark:border-black rounded-3xl shadow-lg transition-all"
      >
        <div className="text-3xl md:text-4xl font-bold text-left flex justify-center">
          <AboutTitle
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Skills
          </AboutTitle>
        </div>

        <Skills />
      </motion.section>
      <section className="projek">
        <div className="text-3xl md:text-4xl font-bold text-left flex justify-center">
          <AboutTitle
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Recent Project
          </AboutTitle>
        </div>
      </section>
      <CardProjek />
      <div className="containerProjek flex flex-col lg:flex-row items-center justify-center gap-10 px-4">
        <section className="kontak dark:bg-[#212121] dark:text-white bg-[#e4e6eb] text-black rounded-3xl w-full max-w-5xl h-auto p-6 lg:rounded-r-full lg:w-[60rem] lg:h-[30rem] mt-20">
          <div className="text-3xl md:text-4xl font-bold text-left ml-10 ">
            <AboutTitle
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Contact
            </AboutTitle>
          </div>
          <Contact />
        </section>

        <section className="lanyard">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </section>
      </div>
    </div>
  );
}
