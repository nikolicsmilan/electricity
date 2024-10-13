import React from "react";
import { NavLink } from "react-router-dom";
import laws from "../../../assets/images/laws.webp";
const LawPreview: React.FC = () => {
  return (
    <div className="bg-red-400 border-2 border-lime-400">
      <h3 className="font-bold text-lg">Törvények</h3>
      <p>
        Ismerd meg a törvényeket, 
        amelyek irányítják az elektromos áramköröket.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>
          <NavLink
            to="/law/ohms-law"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            Ohm törvénye
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/law/kirchhoff1"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            Kirchhoff I. törvénye
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/law/kirchhoff2"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-black"
            }
          >
            Kirchhoff II. törvénye
          </NavLink>
        </li>
      </ul>
     
      <div className="h-60 w-full flex justify-center items-center border-2 border-lime-400">
        <img
          className="w-60 h-60  rounded" // object-cover biztosítja, hogy a kép ne lógjon ki
          src={laws}
          alt="Törvények"
        />
      </div>
    </div>
  );
};

export default LawPreview;
