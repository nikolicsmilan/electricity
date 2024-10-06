import React from "react";

// Egyszerű komponens típussal
const Home: React.FC = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="flex flex-col w-[900px]  text-center border-0 border-0 border-red-400">
        <div className=" bg-blac p-2">
          <h1 className="text-2xl lg:text-6xl font-bold "> Üdvözöllünk a  Villanyszerelés tanfolyamon !</h1>
      <p className="text-xl hidden">Hasznos anyagok a villanszerelést tanulni vágyók számára</p>
      <div className="flex items-center justify-center w-full my-10 border-0">
            <button className="flex items-center justify-center lg:text-2xl text-white  bg-primary w-40 lg:w-64 h-12 m-2 p-2 rounded">
            <p>  Kezdjük!</p>
            </button>
          </div>
        </div>

        <div className="border-0  border-orange-400 flex justify-center hidden">
          <div className="hidde cursor-pointer hover:scale-110 transition duration-300 p-6  border-0 flex flex-col  justify-center items-center my-5 w-1/2 ">
            <p
              className="text-2xl font-bold  
         text-gray-400 rounded   "
            >
              Ezen weboldal  a célja, hogy hasznos információkat
              nyújtsak számodra, miközben építem a saját portfóliómat. Kérlek,
              vedd figyelembe, hogy csak tanuló vagyok és a tartalomért felelősséget nem vállalok!
            </p>
            <button className="uppercase text-2xl font-bold text-white bg-red-500 hover:bg-lime-400 w-64 p-2 m-2 rounded"> Értettem!</button>
          </div>
          <div className="flex items-center justify-center w-1/2 ">
            <button className="flex items-center justify-center text-2xl text-white bg-primary hover:bg-accent w-64 h-12 m-2 p-2 rounded">
            <p>  Kezdjük!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
