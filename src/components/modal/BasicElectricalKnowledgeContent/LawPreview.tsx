import React from 'react';
import { NavLink } from 'react-router-dom';
import laws from "../../../assets/images/laws.webp"
const LawPreview: React.FC = () => {
  return (
    <div className="h-[300px]">
      <h3 className="font-bold text-lg">Törvények</h3>
      <p>Ismerd meg a törvényeket, amelyek irányítják az elektromos áramköröket.</p>
      
      <ul className="list-disc list-inside mt-4">
        <li>
          <NavLink 
            to="/law/ohms-law"
            className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-black'}>
            Ohm törvénye
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/law/kirchhoff1"
            className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-black'}>
            Kirchhoff I. törvénye
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/law/kirchhoff2"
            className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-black'}>
            Kirchhoff II. törvénye
          </NavLink>
        </li>
      </ul>
      
      <div className="flex-grow mt-2 overflow-hidden">
        <img 
          className="w-full h-full object-cover rounded"  // object-cover biztosítja, hogy a kép ne lógjon ki
          src={laws} 
          alt="Törvények"
        />
      </div>
    </div>
  );
};

export default LawPreview;

