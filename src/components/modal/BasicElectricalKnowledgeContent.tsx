import knwoledge from "../../assets/images/knwoledge_400x400.jpg";
const BasicElectricalKnowledgeContent: React.FC = () => {
  return (
    <div className="flex border-0 bg-white w-full h-full p-6 rounded-xl">
      <div className="w-1/2 border-0">
        <h2 className="text-lg font-bold ">Alapvető Elektromos Ismeretek</h2>
      <p>  Az elektromosság az egyik legfontosabb energiaforrás, amelyet számos
        iparágban és a mindennapi életben is alkalmazunk.
        . Az alapszintű ismeretek
        segíthetnek abban, hogy biztonságosan és hatékonyan kezeljük az
        elektromos berendezéseket.
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
/* Az elektromos áram két
        alapvető formája az egyenáram (DC) és a váltakozó áram (AC), amelyek
        különböző eszközök és berendezések működtetésére szolgálnak. Az
        elektromos áramkörök alapelemei közé tartoznak a vezetők, az
        ellenállások, a kondenzátorok és az induktorok. Az Ohm-törvény segít
        megérteni az elektromos áram, a feszültség és az ellenállás közötti
        összefüggést. Fontos, hogy mindig körültekintően járjunk el az
        elektromos rendszerekkel kapcsolatban, mert a nem megfelelő használat
        áramütést vagy egyéb balesetet okozhat */