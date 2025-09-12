import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WhereWeWork = () => {
  const regions = [
    "Praha",
    "Brno",
    "Ostrava",
    "Plzeň",
    "Liberec",
    "Hradec Králové",
    "Olomouc",
    "České Budějovice",
    "Zlín",
    "Ústí nad Labem",
  ];

  // Animace pro jednotlivé karty
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="py-20" id = "kde-malujeme">
      <div className="container mx-auto px-8 mb-[130px]">
        {/* Nadpis */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-[5px] relative text-[2.9rem] font-bold text-center mb-6 text-gray-900 after:content-[''] after:block after:w-28 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4"
        >
          Kde malujeme – po celé ČR
        </motion.h2>

        {/* Úvodní popisek */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12"
        >
          Naše malířské a renovační služby poskytujeme po celé České republice – ve velkých městech i menších obcích. 
          Díky síti ověřených profesionálů jsme vždy blízko.
        </motion.p>

        {/* Města */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-xl p-6 border transform transition-all duration-300 group
                ${
                  index % 2 === 0
                    ? 'bg-white text-gray-800 border-gray-100 hover:shadow-xl hover:-translate-y-1'
                    : 'bg-gradient-to-br from-purple-100 to-purple-200 text-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-1'
                }
              `}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <FiMapPin
                  className={`text-4xl transition group-hover:text-yellow-500 ${
                    index % 2 === 0 ? 'text-blue-500' : 'text-purple-600'
                  }`}
                />
                <h3 className="text-lg font-semibold">{region}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;
