import draw from "../../assets/images/draw_400_400.JPG";
const WiringDiagramsContent: React.FC = () => {
  return (
    <div className="flex border-0 bg-white w-full h-full p-6 rounded-xl">
      <div className="w-1/2 border-0">szöveg</div>
      <div className="w-1/2 ">
        <img className="w-full h-full object-contain rounded-none" src={draw} />
      </div>
    </div>
  );
};

export default WiringDiagramsContent;
