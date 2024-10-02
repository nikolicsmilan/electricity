import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";
import BuildingElectricityContent from './BuildingElectricityContent';
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
        return <BuildingElectricityContent />;
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
    <div className="absolute top-full mt-7 left-1/2 transform -translate-x-1/2  p-0 shadow-lg  w-[1000px] z-50">
      {renderContent()}
    </div>
  );
};

export default Modal;



