

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
    <nav className="flex flex-col fixed top-0 h-20 left-1/2 transform -translate-x-1/2  w-full font-bold  items-center justify-center border-0 bg-stone-300 border-orange-400">
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
