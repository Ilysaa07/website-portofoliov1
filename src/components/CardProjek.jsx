import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CardProjek() {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Ilysaa07/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) =>
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      });
  }, []);

  // Filter repos berdasarkan searchQuery
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 py-8">
      {/* Pencarian */}
      <input
        type="text"
        placeholder="Cari proyek..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-6 p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#1e1e1e] dark:text-white"
      />

      {/* Grid Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredRepos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`https://picsum.photos/seed/${repo.name}/400/300`}
              alt={repo.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {repo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {repo.description || "Tidak ada deskripsi"}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                >
                  <FaGithub /> GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-green-500 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
