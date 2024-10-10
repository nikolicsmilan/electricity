import React, { useRef } from "react";
import HomeHero from "./components/HomeHero";
import HomeIntroduction from "./components/HomeIntroduction";

const Home: React.FC = () => {

  const introductionRef = useRef<HTMLDivElement | null>(null);

  // Görgetési funkció
  const scrollToIntroduction = () => {
    introductionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full flex flex-col ">

      <div className=" h-screen flex flex-col justify-center items-center  bg-mybackground bg-no-repeat bg-center bg-cover  bg-blend-multiply">
      <HomeHero
        title="Üdvözöllünk a Villanyszerelés tanfolyamon!"
        subtitle="Hasznos anyagok a villanyszerelést tanulni vágyók számára"
        onStartClick={scrollToIntroduction}
      />
      </div>
    
      <div ref={introductionRef}>
        <HomeIntroduction />
      </div>
    </div>
  );
};

export default Home;

