import React from "react";
import Navbar from "../navbar/Navbar"; // A Navbar komponens importálása

interface HeaderProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  toggle,
  setToggle,
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <header className=" py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer   ">
          <div className="bg-primary rounded p-2">
            <img
              className="bg-primary h-10 "
              src="/electricitysuper3.png" // Helyes útvonal
              alt="Electricity logo"
            />{" "}
            {/* Helyes útvonal */}
          </div>
          <p className="text-dark mx-2 text-xl font-bold">Villanyszerelő</p>
        </div>
        <Navbar /> {/* Navbar beillesztése */}
        <div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? "X" : "☰"} {/* Mobil menü ikon */}
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Kezdjük!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
