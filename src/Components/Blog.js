import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blog1 from "../Images/blog-1.jpg";
import blog2 from "../Images/blog-2.jpg";
import blog3 from "../Images/blog-3.jpg";
import blog4 from "../Images/blog-3.jpg";
import Alert from "./Alert";

const Blog = () => {
  const posts = [
    {
      title: "Jak vybrat správnou barvu do obýváku",
      image: blog1,
      description:
        "Tipy a triky, jak vytvořit příjemnou atmosféru v obývacím pokoji.",
      date: "2025-09-11",
    },
    {
      title: "Malování kanceláří bez stresu",
      image: blog2,
      description:
        "Jak efektivně malovat pracovní prostory a udržet produktivitu zaměstnanců.",
      date: "2025-08-28",
    },
    {
      title: "Dekorativní techniky pro moderní interiéry",
      image: blog3,
      description: "Objevte moderní trendy a efektní způsoby dekorace stěn.",
      date: "2025-08-15",
    },
    {
      title: "Renovace starého domu krok za krokem",
      image: blog4,
      description: "Praktický průvodce renovací domu od návrhu po finální malbu.",
      date: "2025-07-30",
    },
  ];

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <section className="relative py-20" id="blog">
      <div className="container mx-auto px-8">
        <motion.h2
          className="relative text-[2.9rem] font-bold text-center mb-12 text-gray-900 mt-[60px] 
          after:content-[''] after:block after:w-28 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Náš blog
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-base">{post.description}</p>
                </div>
                <p className="text-gray-400 text-sm mt-4">{post.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAlert(true)}
            className="w-[400px] px-10 bg-blue-500 text-white font-bold py-4 rounded-[25px] text-[18px] shadow-lg hover:scale-105 transform transition"
          >
            Zobrazit více článků
          </button>
        </motion.div>
      </div>

      {showAlert && (
        <Alert msg="Operace zatím nelze provést, jelikož se jedná pouze o ukázku." />
      )}
    </section>
  );
};

export default Blog;
