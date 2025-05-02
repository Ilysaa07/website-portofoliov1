import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CardProjek() {
  return (
    <div className="bodycontainer grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ x: card.x, opacity: 0, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
          animate={{ x: 0, opacity: 1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="card dark:bg-[#212121] bg-[#e4e6eb] rounded-lg"
        >
          <div className="card-body">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
            <div className="flex justify-center gap-4">
              <a href={card.link} className="btn btn-primary">
                <FaGithub />
              </a>
              <a href={card.demo} className="btn btn-primary">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const cards = [
  {
    title: "Card title",
    image: "https://picsum.photos/200/300",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
    demo: "#",
    x: -100,
  },
  {
    title: "Card title",
    image: "https://picsum.photos/200/301",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
    demo: "#",
    x: 100,
  },
  {
    title: "Card title",
    image: "https://picsum.photos/200/302",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
    demo: "#",
    x: -100,
  },
  {
    title: "Card title",
    image: "https://picsum.photos/200/303",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
    demo: "#",
    x: 100,
  },
];

