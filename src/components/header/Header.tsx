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
    <header className="hidden lg:block absolute py-4 border-0 w-full rounded-full z-50">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer   mx-4 fixed top-5 left-0">
          <div className="bg-primary rounded p-2">
            <img
              className="bg-primary h-10  transition duration-300 hover:scale-125"
              src="/electricitysuper3.png" // Helyes útvonal
              alt="Electricity logo"
            />{" "}
            {/* Helyes útvonal */}
          </div>
          <p className="text-dark mx-2 text-xl font-bold">Villanyszerelő</p>
        </div>
        <Navbar /> {/* Navbar beillesztése */}
        <div className="fixed right-0 top-5">
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? "X" : "☰"} {/* Mobil menü ikon */}
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className=" hover:bg-white hover:text-primary hover:border-2
             border-primary mx-4 bg-primary text-white px-4
              py-2 rounded hover:bg-gray-800 transition"
          >
            Kezdjük!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
