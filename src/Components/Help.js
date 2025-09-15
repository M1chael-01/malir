import React from "react";
import { Home, Building2, Store, Warehouse } from "lucide-react";
import { motion } from "framer-motion";

const Help = () => {
  const items = [
    {
      icon: <Home />,
      title: "Malování domů a bytů",
      description: "Svěží a moderní vzhled vašeho domova.",
      color: "text-sky-600",
    },
    {
      icon: <Warehouse />,
      title: "Malování průmyslových prostor",
      description: "Odolné povrchy pro náročné prostředí.",
      color: "text-purple-600",
    },
    {
      icon: <Building2 />,
      title: "Výmalba kanceláří",
      description: "Příjemné a produktivní pracovní prostředí.",
      color: "text-sky-600",
    },
    {
      icon: <Store />,
      title: "Malování obchodů a restaurací",
      description: "Barvy přizpůsobené vašemu podnikání.",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="bg-white py-20 px-6" id="sluzby">
      <div className="max-w-6xl mx-auto mt-[4rem]">
     <h2 className="text-[8.2rem] md:text-[2.9rem] font-bold text-center mb-16 text-gray-900 relative after:content-[''] after:block after:w-28 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4">
  S čím vám můžeme pomoci
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="group flex items-start gap-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-md cursor-pointer hover:from-sky-600 hover:to-sky-700 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-white shadow-md group-hover:bg-sky-500 transition-colors duration-300">
                {React.cloneElement(item.icon, {
                  className: `w-12 h-12 transition-colors duration-300 ${item.color} group-hover:text-white`,
                })}
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </p>
                <p className="text-gray-700 group-hover:text-sky-200 mt-1 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
