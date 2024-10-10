import React from "react";
import professorImage from "../../../assets/images/profimage.webp"; // Kép importálása

const HomeIntroduction: React.FC = () => {
  return (
    <div id="home-introduction" className="flex flex-col items-center text-center my-10">
      <h2 className="text-3xl font-semibold">Ismerje meg a professzort!</h2>
      <p className="text-lg text-gray-600 my-5 max-w-2xl">
        Üdvözöljük a Villanyszerelés tanfolyam Home oldalán! A professzorunk széleskörű
        tapasztalattal rendelkezik a villanyszerelés terén, és elkötelezett a
        tudás átadása iránt. Célja, hogy a tanulók a legfrissebb és legfontosabb
        ismeretekkel gazdagodjanak, miközben gyakorlati tapasztalatot is
        szereznek.
      </p>
      <img
        src={professorImage}
        alt="Professzor"
        className="rounded-lg w-64 h-64 object-cover border-2 border-gray-300"
      />
    </div>
  );
};

export default HomeIntroduction;
