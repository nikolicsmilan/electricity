import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import knwoledge from "../../../assets/images/knwoledge_400x400.jpg"; 
import LawPreview from "./LawPreview"; // Importáljuk a LawPreview komponenst
import DiodesPreview from "./DiodesPreview"; // Importáljuk a DiodesPreview komponenst
import CircuitsPreview from "./CircuitsPreview"; // Importáljuk a CircuitsPreview komponenst

const BasicElectricalKnowledgeContent: React.FC = () => {
  const [currentPreview, setCurrentPreview] = useState<string | null>(null); 

  return (
    <div className="flex border-0 bg-white w-full h-full p-6 rounded-xl font-normal relative">
      <div className="w-1/2 border-0">
        <h2 className="text-lg font-bold">Alapvető Elektromos Ismeretek</h2>
        <p>
          Itt megtalálod azokat a főbb témaköröket, amik megértése alapvetően
          fontos, hogy megértsd, hogyan viselkedik az elektromos áram.
        </p>
        <div className="flex flex-col mt-4">
          <Link 
            to="law" 
            className="text-blue-500 hover:underline my-1"
            onMouseEnter={() => setCurrentPreview("law")} 
            onMouseLeave={() => setCurrentPreview(null)} 
          >
            Törvények
          </Link>
          <Link 
            to="diodes" 
            className="text-blue-500 hover:underline my-1"
            onMouseEnter={() => setCurrentPreview("diodes")} 
            onMouseLeave={() => setCurrentPreview(null)} 
          >
            Diódák
          </Link>
          <Link 
            to="circuits" 
            className="text-blue-500 hover:underline my-1"
            onMouseEnter={() => setCurrentPreview("circuits")} 
            onMouseLeave={() => setCurrentPreview(null)} 
          >
            Kapcsolások
          </Link>
        </div>

        {/* Különböző preview komponensek renderelése */}
      
      </div>
    
      <div className="w-1/2">
        {/* Az alap kép csak akkor jelenik meg, ha nincs hoverálva */}
        {!currentPreview && (
          <img
            className="w-full h-full object-contain rounded-none"
            src={knwoledge}
            alt="Knowledge"
          />
        )}
          {currentPreview === "law" && <LawPreview />}
        {currentPreview === "diodes" && <DiodesPreview />}
        {currentPreview === "circuits" && <CircuitsPreview />}
      </div>
    </div>
  );
};

export default BasicElectricalKnowledgeContent;



/*const linksb = [
  { link: "Kirchof I törvénye", route: "kirchof1" },
  { link: "Kirchof II törvénye", route: "kirchof2" },
  { link: "Ohm törvénye", route: "ohm" },
];

const linksc = [
  { link: "Egyenirányítók", route: "kirchof1" },
  { link: "Kirchof II törvénye", route: "kirchof2" },
  { link: "Kirchof III törvénye", route: "kirchof3" },
  { link: "Ohm törvénye", route: "ohm" },
];
 */
