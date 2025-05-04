import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import logoZahir from "../assets/img/Logo-Zahir-Red.png";
import smkcoding from "../assets/img/smkcoding-light.webp";

const experiences = [
  {
    title: "Internship as a Fullstack Developer",
    image: logoZahir,
    description:
      "PT. Zahir Accounting | Aug–Dec 2024. Built web apps using React, Express.js, and Tailwind CSS.",
  },
  {
    title: "SMK Coding Competition by Alkademi",
    image: smkcoding,
    description:
      "Represented SMK Yadika Soreang as a team leader. Developed creative web apps using HTML, CSS, and JavaScript.",
  },
];

export default function CardExp() {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#121212] py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          My Experiences
        </motion.h2>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <Marquee
            direction="right"
            gradient
            gradientColor={[17, 24, 39]}
            speed={30}
            pauseOnHover
            className="no-scrollbar"
            style={{ maxWidth: "100%" }}
          >
            {experiences.map((experience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="w-72 h-64 bg-white dark:bg-[#1f1f1f] bg-opacity-10 dark:bg-opacity-30 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-xl mr-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="h-14 mx-auto mb-4 object-contain"
                />
                <h3 className="text-base font-semibold text-center text-gray-800 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
