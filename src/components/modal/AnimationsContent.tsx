import animation from "../../assets/images/animation_400_400.JPG"
const AnimationsContent: React.FC = () => {
  return (
   <div className="flex border-0 bg-white w-full h-full p-6 rounded-xl">
      <div className="w-1/2 border-0">szöveg</div>
      <div className="w-1/2 ">
        <img className="w-full h-full object-contain rounded-none" src={animation} />
      </div>
    </div>
  );
};

export default AnimationsContent;
