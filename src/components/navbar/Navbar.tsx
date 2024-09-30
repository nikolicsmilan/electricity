/*import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex space-x-6 text-lg">
      <a href="#" className="text-black hover:text-gray-700">ÉpületVillamoság</a>
      <a href="#" className="text-black hover:text-gray-700">Villamos alapismeretek</a>
      <a href="#" className="text-black hover:text-gray-700">Gépészeti alapismeretek</a>
      <a href="#" className="text-black hover:text-gray-700">Animációk</a>
      <a href="#" className="text-black hover:text-gray-700">Kapcsolási rajz</a>
    </nav>
  );
};

export default Navbar;*/
/*
import React from 'react';
import { useGeneralContext } from '../../context/GeneralContext';

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();

  const menuItems = [
    'ÉpületVillamoság',
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz'
  ];

  return (
    <nav className="flex space-x-6 text-lg relative">
      {menuItems.map((item) => (
        <a
          key={item}
          href="#"
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)} // Modal eltűnik, ha nincs hover
          className="text-black hover:text-gray-700"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;*/
/*
import React from 'react';
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst

const Navbar: React.FC = () => {
  const { setHoveredItem, hoveredItem } = useGeneralContext();

  const menuItems = [
    'ÉpületVillamoság',
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz'
  ];

  return (
    <nav className="flex space-x-6 text-lg"> 
      {menuItems.map((item) => (
        <div
          key={item}
          className="relative" // Ez az elem lesz a referenciapont a modalhoz
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)} // Modal eltűnik, ha nincs hover
        >
          <a href="#" className="text-black hover:text-gray-700">
            {item}
          </a>
          {hoveredItem === item && <Modal />} 
        </div>
      ))}
    </nav>
  );
};

export default Navbar;*/
import React from 'react';
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst

const Navbar: React.FC = () => {
  const { setHoveredItem, hoveredItem } = useGeneralContext();

  const menuItems = [
    'ÉpületVillamoság',
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz'
  ];

  return (
    <nav className="relative flex space-x-6 text-lg"> {/* relative a navbar-hoz */}
      {menuItems.map((item) => (
        <div
          key={item}
          className="relative"
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <a href="#" className="text-black hover:text-gray-700">
            {item}
          </a>
        </div>
      ))}
      <Modal /> {/* Modal itt jelenik meg a Navbar alatt */}
    </nav>
  );
};

export default Navbar;




