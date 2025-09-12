  import React from 'react';
  import { Brush } from 'lucide-react';

  const CTAVisitingCard = () => {
    return (
      <section className="py-20  flex justify-center items-center ">
  <div className="relative bg-white rounded-2xl shadow-2xl w-4/5 flex flex-col items-center gap-12 overflow-hidden px-[100px] py-20">
          {/* Dekorativní pozadí */}
          <Brush className="absolute top-0 left-0 w-32 h-32 text-blue-200 opacity-20 rotate-12" />
          <Brush className="absolute bottom-0 right-0 w-32 h-32 text-pink-200 opacity-20 -rotate-12" />

          {/* Textová část */}
          <div className="flex flex-col justify-center items-center gap-6 text-center">
            <h2 className="text-[43px] font-bold text-gray-800 leading-tight">
              Proměňte svůj prostor s námi
            </h2>
            <p className="text-gray-600 text-lg ">
              Profesionální malířské služby pro domovy, kanceláře a komerční prostory. 
              Precizní práce, moderní barvy a spolehlivý tým.
            </p>
            <a
              href="#kontakt"
            className="w-[400px] inline-block px-10 bg-blue-500 text-white font-bold py-4 rounded-[25px] text-[18px]  shadow-lg hover:scale-105 transform transition text-center"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default CTAVisitingCard;
