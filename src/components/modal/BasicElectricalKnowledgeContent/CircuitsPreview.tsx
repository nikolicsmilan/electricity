import React from 'react';
import laws from "../../../assets/images/laws.webp"

const CircuitsPreview: React.FC = () => {
  return (
    <div className=" bg-red-400">
      <h3 className="font-bold text-lg">Kapcsolások</h3>
      <p>Tanuld meg, hogyan működnek az elektromos kapcsolásoks.</p>
      <img 
        className="mt-2 w-full h-32 object-cover rounded"
        src={laws} 
        alt="Kapcsolások"
      />
    </div>
  );
};

export default CircuitsPreview;
