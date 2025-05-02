import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Internship as a Fullstack Developer",
    image: "/src/assets/img/Logo-Zahir-Red.png",
    description:
      "Interned at PT. Zahir Accounting from Aug 2024 to Dec 2024, developing web apps using React, Express.js, and Tailwind CSS.",
  },
  {
    title: "SMK Coding Competition by Alkademi",
    image: "/src/assets/img/smkcoding-light.webp",
    description:
      "Led a team in the SMK Coding Competition representing SMK Yadika Soreang, developing web apps with HTML, CSS, and JavaScript.",
  },
  {
    title: "Internship as a Fullstack Developer",
    image: "/src/assets/img/Logo-Zahir-Red.png",
    description:
      "Interned at PT. Zahir Accounting from Aug 2024 to Dec 2024, developing web apps using React, Express.js, and Tailwind CSS.",
  },
  {
    title: "SMK Coding Competition by Alkademi",
    image: "/src/assets/img/smkcoding-light.webp",
    description:
      "Led a team in the SMK Coding Competition representing SMK Yadika Soreang, developing web apps with HTML, CSS, and JavaScript.",
  },
];

export default function CardExp() {
  return (
    <div className="container mx-auto">
      <Marquee
        direction="right"
        gradient={true}
        gradientColor={[31, 41, 55]}
        speed={27}
        pauseOnHover={true}
      >
        {experiences.map((exp, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="w-72 h-60 bg-[#f3f4f6] dark:bg-[#212121] rounded-xl p-4 shadow-lg mr-6 transition-transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer">

            <img
              src={exp.image}
              alt={exp.title}
              className="h-12 mx-auto mb-3 object-contain"
            />
            <h2 className="text-base font-semibold text-gray-800 dark:text-white text-center mb-2">
              {exp.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{exp.description}</p>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}
