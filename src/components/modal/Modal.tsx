/*import React from "react";
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

export default Modal;*/

// Modal.tsx
import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";
import ElectricalEngineeringContent from './ElectricalEngineeringContent';
import BasicElectricalKnowledgeContent from './BasicElectricalKnowledgeContent';
import BasicMechanicalKnowledgeContent from './BasicMechanicalKnowledgeContent';
import AnimationsContent from './AnimationsContent';
import WiringDiagramsContent from './WiringDiagramsContent';

const Modal: React.FC = () => {
  const { hoveredItem } = useGeneralContext();

  if (!hoveredItem) return null; // Csak akkor jelenjen meg a modal, ha van hovered item

  const renderContent = () => {
    switch (hoveredItem) {
      case 'ÉpületVillamoság':
        return <ElectricalEngineeringContent />;
      case 'Villamos alapismeretek':
        return <BasicElectricalKnowledgeContent />;
      case 'Gépészeti alapismeretek':
        return <BasicMechanicalKnowledgeContent />;
      case 'Animációk':
        return <AnimationsContent />;
      case 'Kapcsolási rajz':
        return <WiringDiagramsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute top-full mt-10 left-1/2 transform -translate-x-1/2  p-0 shadow-lg  w-[800px] ">
      {renderContent()}
    </div>
  );
};

export default Modal;



