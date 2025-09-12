import React, { useState, useEffect } from "react";
import { Brush, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Služby", href: "#sluzby" },
    { name: "Naše práce", href: "#prace" },
    { name: "Reference", href: "#reference" },
    { name: "Kde malujeme", href: "#kde-malujeme" },
    { name: "Blog", href: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 px-6 md:px-12 py-4 md:py-6 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-white/80 shadow-md" : "bg-white/50"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 flex items-center space-x-2">
          <a href = "/"><span>Malíř</span></a>
          <Brush className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden custom:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-black font-medium text-lg md:text-xl group hover:text-blue-500 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden custom:flex">
          <button className="bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-lg md:text-xl font-medium hover:bg-blue-600 transition shadow-md hover:shadow-lg">
            Kolik to stojí?
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="custom:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="custom:hidden mt-4 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-black text-xl font-medium hover:text-blue-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-600 transition mt-2">
              Kolik to stojí?
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
