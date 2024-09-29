import React from 'react';
import { Link } from 'react-router-dom'; // Link importálása a navigációhoz

const Error: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Hiba történt!</h1>
      <p className="mt-4 text-lg">Sajnáljuk, de valami elromlott.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Vissza a kezdőlapra
      </Link>
    </div>
  );
};

export default Error;
