import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-12 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start text-center md:text-left">
          <p className="text-gray-600">
            Jedná se o fiktivní web. Web nesbírá osobní údaje ani nenabízí služby. Údaje nejsou pravdivé.
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Vytvořil:</span> Michael Tvrdík
          </p>
          <p className="text-gray-500 text-sm">
            Všechny fotografie jsou ilustrativní a pocházejí ze{' '}
            <a href="https://www.freepik.com" className="underline hover:text-blue-500">
              Freepik
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
