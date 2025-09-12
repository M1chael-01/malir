import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const References = () => {
  const references = [
    {
      testimonial:
        "Skvělá práce! Interiéry vypadají fantasticky, doporučuji všem.",
    },
    {
      testimonial:
        "Profesionalita a preciznost, vše dokončeno v termínu. Děkuji!",
    },
    {
      testimonial:
        "Výborné malířské služby a nádherný výsledek, všem doporučuji.",
    },
    {
      testimonial: "Perfektní realizace, vše proběhlo hladce a s úsměvem.",
    },
  ];

  return (
   <section className="py-20 " id="reference">
      <div className="container mx-auto px-8">
        <motion.h2
          className="relative text-[2.9rem] font-bold text-center mb-12 text-gray-900  mt-[80px]
          after:content-[''] after:block after:w-28 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Reference našich spokojených zákazníků
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center
                ${
                  index % 2 === 0
                    ? "bg-white text-gray-700"
                    : "bg-gradient-to-br from-purple-100 to-purple-200 text-gray-900"
                }
              `}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-4xl mb-4 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg italic">"{ref.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
