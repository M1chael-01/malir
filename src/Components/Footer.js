import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
          <p className="text-center md:text-left text-gray-600">
            Jedná se o fiktivní web. Vytvořil <span className="font-bold">Michael Tvrdík</span>. Údaje nejsou pravdivé
          </p>
          <p className="text-center md:text-left text-gray-500 text-sm">
            Všechny použité fotografie jsou ilustrativní a pocházejí ze <a href="https://www.freepik.com" className="underline hover:text-blue-500">Freepik</a>.
          </p>
        </div>

        {/* Sociální ikony */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-700 transition">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
