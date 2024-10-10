import React from "react";
import { Link } from "react-router-dom";
import knwoledge from "../../assets/images/knwoledge_400x400.jpg";

const links = [
  { link: "Törvények", route: "law" },     // Törvények -> law
  { link: "Diódák", route: "diodes" },     // Diódák -> diodes
  { link: "Kapcsolások", route: "circuits" }, // Kapcsolások -> circuits
];

const BasicElectricalKnowledgeContent: React.FC = () => {
  return (
    <div className="flex border-0 bg-white w-full h-full p-6 rounded-xl font-normal ">
      <div className="w-1/2 border-0">
        <h2 className="text-lg font-bold ">Alapvető Elektromos Ismeretek</h2>
        <p>
          Itt megtalálod azokat a főbb témaköröket, amik megértése alapvetően
          fontos, hogy megértsd hogyan viselkedik az az elektromos áram.
        </p>
        <div className="flex flex-col mt-4">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.route} 
              className="text-blue-500 hover:underline my-1"
            >
              {link.link}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/2 ">
        <img
          className="w-full h-full object-contain rounded-none"
          src={knwoledge}
          alt="Knowledge"
        />
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
