import React from 'react';

const LawPreview: React.FC = () => {
  return (
    <div className="">
      <h3 className="font-bold text-lg">Törvények</h3>
      <p>Ismerd meg a törvényeket, amelyek irányítják az elektromos áramköröket.</p>
      <img 
        className="mt-2 w-full h-32 object-cover rounded"
        src="../../../assets/images/law_image.jpg" // Cseréld ki a helyes kép URL-re
        alt="Törvények"
      />
    </div>
  );
};

export default LawPreview;
