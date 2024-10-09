import React from "react";
import { Link } from "react-router-dom";
interface HomeHeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onStartClick: () => void; // Új prop a görgetési funkcióhoz
}

const HomeHero: React.FC<HomeHeroProps> = ({ title, subtitle, buttonText,onStartClick  }) => {
  return (
    <div className="flex flex-col w-[900px] text-center border-0  border-red-400">
      <div className="p-2">
        <h1 className="text-2xl lg:text-6xl font-bold">{title}</h1>
        <p className="text-xl hidden">{subtitle}</p>
        <div className="flex items-center justify-center w-full my-10 border-0">
          <Link to="#home-introduction">
            <button   onClick={onStartClick} className="flex items-center justify-center lg:text-2xl text-white bg-primary hover:bg-accent w-40 lg:w-64 h-12 m-2 p-2 rounded">
              <p>Kezdjük!</p>
            </button>
          </Link>
        </div>
      </div>
      fffffffffffffffffff


      <button onClick={() => document.getElementById("home-introduction")?.scrollIntoView({ behavior: "smooth" })}>ez</button>
      <fieldset>sdf sdff sdfsd f</fieldset>f describ sdf sd f fdsfsd'
    
     
    </div>
  );
};

export default HomeHero;
/*  <div className="h-96 bg-red-400 my-10"></div>
      <div className="h-96 bg-red-400 my-10"></div>
      <div className="h-96 bg-red-400 my-10"></div>
      <div className="h-96 bg-red-400 my-10"></div> */