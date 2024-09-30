
import React from 'react';
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst

const Navbar: React.FC = () => {
  const { setHoveredItem} = useGeneralContext();

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




