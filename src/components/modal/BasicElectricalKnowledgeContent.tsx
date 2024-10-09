import knwoledge from "../../assets/images/knwoledge_400x400.jpg";
const linksb = [
  { link: "Kirchof I törvénye", route: "kirchof1" },
  { link: "Kirchof II törvénye", route: "kirchof2" },
  { link: "Kirchof III törvénye", route: "kirchof3" },
  { link: "Ohm törvénye", route: "ohm" },
];

const linksc = [
  { link: "Egyenirányítók", route: "kirchof1" },
  { link: "Kirchof II törvénye", route: "kirchof2" },
  { link: "Kirchof III törvénye", route: "kirchof3" },
  { link: "Ohm törvénye", route: "ohm" },
];

const links = [
  { link: "Törvények", route: "kirchof1" },
  { link: "Diódák", route: "kirchof2" },
  { link: "Kapcsolások", route: "kirchof3" },
  { link: "Ohm törvénye", route: "ohm" },
];

const BasicElectricalKnowledgeContent: React.FC = () => {
  return (
    <div className="flex border-0 bg-white w-full h-full p-6 rounded-xl">
      <div className="w-1/2 border-0">
        <h2 className="text-lg font-bold ">Alapvető Elektromos Ismeretek</h2>
        <p>
          {" "}
          Az elektromosság az egyik legfontosabb energiaforrás, amelyet számos
          iparágban és a mindennapi életben is alkalmazunk. . Az alapszintű
          ismeretek segíthetnek abban, hogy biztonságosan és hatékonyan kezeljük
          az elektromos berendezéseket.
        </p>
      </div>
      <div className="w-1/2 ">
        <img
          className="w-full h-full object-contain rounded-none"
          src={knwoledge}
        />
      </div>
    </div>
  );
};

export default BasicElectricalKnowledgeContent;

