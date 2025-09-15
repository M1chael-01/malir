import React from "react";
import { FiGlobe, FiCheckCircle, FiUsers, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const Impressive = () => {
  const cards = [
    {
      icon: <FiGlobe className="text-yellow-500 text-5xl" />,
      title: "95% spokojenost",
      text: "Spokojenost je u nás na #1",
      bg: "from-yellow-100 to-yellow-200",
    },
    {
      icon: <FiCheckCircle className="text-green-500 text-5xl" />,
      title: "20 000+ projektů",
      text: "Důraz na kvalitu a detail",
      bg: "from-green-100 to-green-200",
    },
    {
      icon: <FiUsers className="text-blue-500 text-5xl" />,
      title: "Profesionál",
      text: "Hodnocení na Google i jinde",
      bg: "from-blue-100 to-blue-200",
    },
    {
      icon: <FiAward className="text-purple-500 text-5xl" />,
      title: "Ověření malíři",
      text: "Hodnocení na Google i jinde",
      bg: "from-purple-100 to-purple-200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="text-[2.5rem] md:text-[2.9rem] font-bold text-center mb-16 text-gray-900 relative after:content-[''] after:block after:w-28 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4">
          Naše přednosti
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center space-y-4 bg-gradient-to-br ${card.bg} shadow-lg p-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-[280px] md:w-[320px]`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {card.icon}
              <h3 className="text-2xl font-bold text-gray-800 text-center">{card.title}</h3>
              <p className="text-gray-600 text-center">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impressive;
