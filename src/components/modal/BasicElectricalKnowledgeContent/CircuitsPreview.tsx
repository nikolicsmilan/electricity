import React from 'react';

const CircuitsPreview: React.FC = () => {
  return (
    <div className=" bg-red-400">
      <h3 className="font-bold text-lg">Kapcsolások</h3>
      <p>Tanuld meg, hogyan működnek az elektromos kapcsolások.</p>
      <img 
        className="mt-2 w-full h-32 object-cover rounded"
        src="../../../assets/images/circuits_image.jpg" // Cseréld ki a helyes kép URL-re
        alt="Kapcsolások"
      />
    </div>
  );
};

export default CircuitsPreview;
