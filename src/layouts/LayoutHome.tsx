import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useGeneralContext } from '../context/GeneralContext'; // A megfelelő útvonal megadása

const LayoutHome: React.FC = () => {
  const { toggle, setToggle } = useGeneralContext(); // Hozzáférés a kontextus adataihoz
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // A navigációs menü állapotának kezelése

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-100`}>
      {/* Navigációs Menü */}
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Elektromosság</h1>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? 'X' : '☰'} {/* Mobil menü ikon */}
        </button>
        <nav className={`flex-1 md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Főoldal
              </Link>
            </li>
            {/* Ide jöhetnek további linkek */}
          </ul>
          <button onClick={() => setToggle(!toggle)} className="mt-4 md:mt-0">
            Toggle Theme
          </button>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Outlet /> {/* Aloldalak megjelenítése */}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Elektromosság. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
};

export default LayoutHome;

