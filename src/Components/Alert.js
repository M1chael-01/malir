import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Alert = ({ msg }) => {
  return (
    <section className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded shadow-md max-w-xl mx-auto my-6">
      <div className="flex items-start gap-3">
        <FaExclamationTriangle className="mt-1 text-yellow-600" size={24} />
        <div>
          <h2 className="text-lg font-semibold mb-1">Upozornění</h2>
          <p>
            {msg || 'Operace zatím nelze provést, jelikož se jedná pouze o ukázku.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Alert;
