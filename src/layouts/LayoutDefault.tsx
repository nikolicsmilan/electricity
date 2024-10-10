import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useGeneralContext } from "../context/GeneralContext";
import Header from "../components/header/Header"; 

const LayoutDefault: React.FC = () => {
  const { toggle, setToggle, setHoveredItem } = useGeneralContext();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className={`flex flex-col min-h-screen bg-gray-100 relative `}>
<Header
    toggle={toggle}
    setToggle={setToggle}
    isMenuOpen={isMenuOpen}
    toggleMenu={toggleMenu}
  />

  <main
    className="  bg-gray-100 flex-grow p-4 relative 
    "
    onMouseEnter={() => setHoveredItem(null)}
    onMouseLeave={() => setHoveredItem(null)}
  >
    <Outlet />
  </main>

  <footer className="bg-gray-800 text-white p-4 text-center ">
    <p>© 2024 Villanyszerelő. Minden jog fenntartva.</p>
  </footer>
</div>

  );
};

export default LayoutDefault;