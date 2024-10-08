// Home.tsx
import React from "react";
import HomeHero from "./components/HomeHero";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <HomeHero
        title="Üdvözöllünk a Villanyszerelés tanfolyamon!"
        subtitle="Hasznos anyagok a villanyszerelést tanulni vágyók számára"
        buttonText="Kezdjük!"
      />
    </div>
  );
};

export default Home;

