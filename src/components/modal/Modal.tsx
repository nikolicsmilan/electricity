import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";

const Modal: React.FC = () => {
  const { hoveredItem } = useGeneralContext();

  if (!hoveredItem) return null; // Csak akkor jelenjen meg a modal, ha van hovered item

  return (
    <div className="absolute top-full mt-10 left-1/2 transform -translate-x-1/2 bg-white p-6 shadow-lg rounded w-[800px] h-[400px]">
      <p className="text-black font-semibold">{hoveredItem}</p>
      <p className="text-gray-600">Ez egy dinamikus tartalom a "{hoveredItem}" menüponthoz.</p>
    </div>
  );
};

export default Modal;


