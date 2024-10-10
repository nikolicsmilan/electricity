import React from 'react';

const DiodesPreview: React.FC = () => {
  return (
    <div className="">
      <h3 className="font-bold text-lg">Diódák</h3>
      <p>Fedezd fel a diódák működését és alkalmazásait az áramkörökben.</p>
      <img 
        className="mt-2 w-full h-32 object-cover rounded"
        src="../../../assets/images/diodes_image.jpg" // Cseréld ki a helyes kép URL-re
        alt="Diódák"
      />
    </div>
  );
};

export default DiodesPreview;
