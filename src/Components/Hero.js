import React from "react";
import { Brush } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Dekorativní ikona */}
      <Brush className="absolute top-10 left-4 md:left-10 w-24 md:w-32 h-24 md:h-32 text-blue-300 opacity-30 rotate-12" />

      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center md:items-end justify-between mt-[120px] md:mt-[140px]">
        {/* Textová část */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900" style={{ lineHeight: "5.2rem" }}>
  Profesionální malířské služby pro Vás
</h1>

          <p className="text-lg sm:text-xl text-gray-700">
            Proměňte vaše prostory s moderními barvami, precizními technikami a
            zkušeným týmem. Kvalita, na kterou se můžete spolehnout.
          </p>

          {/* CTA tlačítka */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="w-full sm:w-auto bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:scale-105 transform transition">
              Zjistit cenu
            </button>
            <button className="w-full sm:w-auto bg-blue-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:bg-blue-500 transition-colors duration-300">
              Naše práce
            </button>
          </motion.div>
        </motion.div>

        {/* Obrázek / vizuální prvek */}
        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-200 rounded-xl shadow-lg flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className="text-6xl sm:text-8xl md:text-9xl text-white opacity-20">🎨</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
