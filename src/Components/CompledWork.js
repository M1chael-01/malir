import React, { useState, useEffect } from 'react';
import { Brush } from 'lucide-react';
import { motion } from 'framer-motion';
import image1 from "../Images/work-1.jpg";
import image2 from "../Images/work-2.jpg";
import image3 from "../Images/work-3.jpg";
import image4 from "../Images/work-4.jpg";
import Alert from './Alert';

const CompletedWork = () => {
  const [showAlert, setShowAlert] = useState(false);

  const works = [
    {
      title: "Moderní byt v centru",
      image: image1,
      description: "Kompletní malování a renovace interiéru.",
    },
    {
      title: "Kancelářské prostory",
      image: image2,
      description: "Výmalba kanceláří a open space.",
    },
    {
      title: "Rodinný dům",
      image: image3,
      description: "Interiéry pokojů, kuchyně a chodby.",
    },
    {
      title: "Starší byt",
      image: image4,
      description: "Malování a dekorace interiéru.",
    },
  ];

  // Animace pro grid items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  // Skrýt alert po 2 sekundách
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <section className="relative py-20 overflow-hidden" id="prace">
      {/* Dekorativní ikony */}
      <Brush className="absolute top-10 left-10 w-32 h-32 text-blue-200 opacity-30 rotate-12" />
      <Brush className="absolute bottom-10 right-10 w-32 h-32 text-pink-200 opacity-30 -rotate-12" />

      <div className="container mx-auto px-8 w-full">
        {/* Nadpis sekce */}
        <h2 className="mt-[55px] relative text-[2.9rem] font-bold text-center mb-12 text-gray-900 after:content-[''] after:block after:w-28 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4">
          Hotové práce
        </h2>

        {/* Grid s pracemi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-4xl transform hover:-translate-y-3 transition-all duration-500"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <div className="relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-3xl"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-gray-700">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA tlačítko */}
        <div className="text-center mt-12">
          <motion.button
            onClick={() => setShowAlert(true)}
            className="w-[400px] inline-block px-10 bg-blue-500 text-white font-bold py-4 rounded-[25px] text-[18px] shadow-lg hover:scale-105 transform transition text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Chci taky vymalovat
          </motion.button>
        </div>
      </div>

      {/* Alert */}
      {showAlert && (
        <Alert msg="Operace zatím nelze provést, jelikož se jedná pouze o ukázku." />
      )}
    </section>
  );
};

export default CompletedWork;
