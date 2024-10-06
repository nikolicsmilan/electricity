/*import React from 'react';
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst

const Navbar: React.FC = () => {
  const { setHoveredItem} = useGeneralContext();

  const menuItems = [ 
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz',
    'ÉpületVillamoság',
  ];

  return (
    <nav className="relative flex space-x-6 text-lg font-bold">
      {menuItems.map((item) => (
        <div
          key={item}
          className="relative"
          onMouseEnter={() => setHoveredItem(item)}
          //onMouseLeave={() => setHoveredItem(null)}
        >
          <a href="#" className="text-black hover:text-gray-700">
            {item}
          </a>
        </div>
      ))}
      <Modal /> 
    </nav>
  );
};

export default Navbar;*/

/*
import React, { useState } from 'react';
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst
import { FaChevronDown } from 'react-icons/fa'; // Nyíl ikon

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz',
    'ÉpületVillamoság',
  ];

  return (
    <nav className="relative flex space-x-6 text-lg font-bold">
      {menuItems.map((item, index) => (
        <div
          key={item}
          className="relative flex items-center"
          onMouseEnter={() => {
            setHoveredItem(item);
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            setHoveredItem(null);
            setHoveredIndex(null);
          }}
        >
          <a href="#" className="text-black hover:text-gray-700 flex items-center space-x-2">
            <span>{item}</span>
           
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                hoveredIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </a>
        </div>
      ))}
      <Modal /> 
    </nav>
  );
};

export default Navbar;*/
/*
import React, { useState } from 'react';
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst
import { FaChevronDown } from 'react-icons/fa'; // Nyíl ikon

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lastHoverIndex, setLastHoverIndex] = useState<number | null>(null);

  const menuItems = [
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz',
    'ÉpületVillamoság',
  ];

  return (
    <nav className="relative flex space-x-6 text-lg font-bold">
      {menuItems.map((item, index) => (
        <div
          key={item}
          className="relative flex items-center"
          onMouseEnter={() => {
            setHoveredItem(item);
            setLastHoverIndex(hoveredIndex);
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            setHoveredItem(null);
            setHoveredIndex(null);
          }}
        >
          <a
            href="#"
            className="text-black hover:text-gray-700 flex items-center space-x-2 relative"
          >
            <span>{item}</span>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                hoveredIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            />
         
            <span
              className={`absolute bottom-[-2px] left-0 h-[2px] bg-black transition-transform duration-300 ${
                hoveredIndex === index
                  ? lastHoverIndex !== null && lastHoverIndex < index
                    ? 'transform translate-x-0 scale-x-100 origin-left'
                    : 'transform translate-x-0 scale-x-100 origin-right'
                  : 'transform scale-x-0'
              }`}
              style={{ width: '100%' }}
            ></span>
          </a>
        </div>
      ))}
      <Modal /> 
    </nav>
  );
};

export default Navbar;*/
/*
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Framer Motion importálása
import { useGeneralContext } from '../../context/GeneralContext';
import Modal from '../modal/Modal'; // Importáljuk a Modal komponenst
import { FaChevronDown } from 'react-icons/fa'; // Nyíl ikon

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    'Villamos alapismeretek',
    'Gépészeti alapismeretek',
    'Animációk',
    'Kapcsolási rajz',
    'ÉpületVillamoság',
  ];

  return (
    <nav className="relative flex space-x-6 text-lg font-bold">
      {menuItems.map((item, index) => (
        <div
          key={item}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href="#" className="text-black hover:text-gray-700 flex items-center space-x-2 relative">
            <span>{item}</span>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                hoveredIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            />
          
            <motion.span
              className="absolute bottom-[-2px] left-0 h-[2px] bg-black"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: hoveredIndex === index ? 1 : 0,
                originX: hoveredIndex === index && index > 0 ? 1 : 0,
              }}
              transition={{ duration: 10.3 }}
              style={{ width: '100%' }}
            ></motion.span>
          </a>
        </div>
      ))}
      <Modal />
    </nav>
  );
};

export default Navbar;*/
/*
import React, { useState } from "react";
import { motion } from "framer-motion"; // Framer Motion importálása
import { useGeneralContext } from "../../context/GeneralContext";
import Modal from "../modal/Modal"; // Importáljuk a Modal komponenst
import { FaChevronDown } from "react-icons/fa"; // Nyíl ikon

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    "Villamos alapismeretek",
    "Gépészeti alapismeretek",
    "Animációk",
    "Kapcsolási rajz",
    "ÉpületVillamoság",
  ];

  const handleMouseEnter = (item: string, index: number) => {
    setHoveredItem(item);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="relative flex flex-col  space-x-6 text-lg font-bold">
      <div className="flex space-x-6 ">
        {menuItems.map((item, index) => (
          <div
            key={item}
            className="relative flex flex-col items-center"
            // onMouseEnter={() => setHoveredIndex(index)}
            onMouseEnter={() => handleMouseEnter(item, index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <a
              href="#"
              className="text-black hover:text-gray-700 flex items-center space-x-2 relative "
            >
              <span>{item}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  hoveredIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
             
            </a>
            {hoveredIndex === index ? (
              <span className="h-[4px] bg-black w-full rounded"></span>
            ) : (
              <span className="h-[4px] opacity-0 w-full"></span>
            )}
          </div>
        ))}
      </div>

      <Modal />
    </nav>
  );
};

export default Navbar;*/

/*
import React, { useState } from "react";
import { motion } from "framer-motion"; // Framer Motion importálása
import { useGeneralContext } from "../../context/GeneralContext";
import Modal from "../modal/Modal"; // Modal komponenst importáljuk
import { FaChevronDown } from "react-icons/fa"; // Nyíl ikon

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mouseX, setMouseX] = useState<number>(0); // Egér pozíciójának követése

  const menuItems = [
    "Villamos alapismeretek",
    "Gépészeti alapismeretek",
    "Animációk",
    "Kapcsolási rajz",
    "ÉpületVillamoság",
  ];

  // Egér belépésének kezelése és pozíció tárolása
  const handleMouseEnter = (e: React.MouseEvent, item: string, index: number) => {
    setHoveredItem(item);
    setHoveredIndex(index);
    setMouseX(e.clientX); // Az aktuális egérpozíció tárolása
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="relative flex flex-col space-x-6 text-lg font-bold">
      <div className="flex space-x-6">
        {menuItems.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === menuItems.length - 1;

          return (
            <div
              key={item}
              className="relative flex flex-col items-center"
              onMouseEnter={(e) => handleMouseEnter(e, item, index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="text-black hover:text-gray-700 flex items-center space-x-2 relative"
              >
                <span>{item}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    hoveredIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </a>
              
   
              {hoveredIndex === index && (
                <motion.span
                  className="h-[4px] bg-black w-full rounded"
                  initial={{ width: 0, x: mouseX < window.innerWidth / 2 ? -100 : 100 }} // A kezdő pozíció az egér helyzetétől függ
                  animate={{ width: "100%", x: 0 }} // Animáció a teljes szélességig
                  transition={{ duration: 0.3 }} // Az animáció sebessége
                  exit={{ width: 0, x: mouseX < window.innerWidth / 2 ? 100 : -100 }} // Kifelé mozgás az egér irányával ellentétesen
                  style={{
                    originX: isFirst || isLast ? 0.5 : mouseX < window.innerWidth / 2 ? 0 : 1, // Első és utolsó menüpontnál középre igazítjuk
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <Modal />
    </nav>
  );
};

export default Navbar;*/

import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; // Framer Motion importálása
import { useGeneralContext } from "../../context/GeneralContext";
import Modal from "../modal/Modal"; // Modal komponenst importáljuk
import { FaChevronDown } from "react-icons/fa"; // Nyíl ikon

const Navbar: React.FC = () => {
  const { setHoveredItem } = useGeneralContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [underlineProps, setUnderlineProps] = useState<{
    width: number;
    x: number;
  }>({
    width: 0,
    x: 0,
  });

  const menuRefs = useRef<(HTMLDivElement | null)[]>([]); // Referenciák a menüpontokra

  const menuItems = [
    "Villamos alapismeretek",
    "Gépészeti alapismeretek",
    "Animációk",
    "Kapcsolási rajz",
    "ÉpületVillamoság",
  ];

  // Egér belépésének kezelése és pozíció tárolása
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setHoveredItem(menuItems[index]);

    // Számoljuk ki a vonal szélességét és pozícióját
    if (menuRefs.current[index]) {
      const { offsetWidth, offsetLeft } = menuRefs.current[index]!;
      setUnderlineProps({
        width: offsetWidth,
        x: offsetLeft,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="flex flex-col fixed top-5 left-1/2 transform -translate-x-1/2  w-[900px] font-bold border-0 items-center justify-center border-0 h-12 border-orange-400">
      <div className="  flex space-x-6 relative border-0 border-lime-400">
        {menuItems.map((item, index) => (
          <div
            key={item}
            className="relative flex flex-col items-center"
            ref={(el) => (menuRefs.current[index] = el)} // Menü elem referencia
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className=" p-1 flex items-center space-x-2 relative"
            >
              <span>{item}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  hoveredIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </a>
          </div>
        ))}

        {/* Egyetlen vonal, amely követi a menüpontokat */}
        <motion.div
          className="absolute top-8  h-[4px] bg-black rounded"
          animate={{
            width: underlineProps.width,
            x: underlineProps.x - 30,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <Modal />
    </nav>
  );
};

export default Navbar;

/*

  <motion.span
              className="absolute bottom-[-2px] left-0 h-[2px] bg-orange-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredIndex === index ? 1 : 1,
                originX: 
                  index === 0
                    ? 0 // Az első menüpontnál csak megjelenik
                    : hoveredIndex !== null && hoveredIndex > index
                    ? 1 // Ha balról jövünk, jobbról balra csúszik
                    : 0, // Ha jobbról jövünk, balról jobbra csúszik
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{ width: '100%' }}
            ></motion.span>
*/
