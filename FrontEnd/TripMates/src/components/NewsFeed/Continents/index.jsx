import {
  FaGlobeAfrica,
  FaGlobeEurope,
  FaGlobeAsia,
  FaGlobeAmericas,
  FaGlobe,
} from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";

const Continents = () => {
  const continents = [
    { icon: FaGlobe, name: "Others..." },
    { icon: FaGlobeAfrica, name: "Africa" },
    { icon: FaEarthOceania, name: "Oceania" },
    { icon: FaGlobeEurope, name: "Europe" },
    { icon: FaGlobeAsia, name: "Asia" },
    { icon: FaGlobeAmericas, name: "Americas" },
  ];
  const iconStyle = { color: "#e6e6e64d", width: "3rem", height: "3rem" };
  return (
    <div>        
        <div className="grid grid-rows-3 grid-cols-2 h-[20rem] gap-4">
          {continents.map(({ icon: Icon, name }) => (
            <button
              key={name}
              className="flex flex-col items-center justify-center gap-2 bg-[#303030] rounded-lg hover_trans hover:scale-105"
            >
              <Icon style={iconStyle} className="bg-transparent" />
              <p className="bg-transparent text-white font-semibold text-sm">
                {name}
              </p>
            </button>
          ))}
        </div>
      </div>
  );
};

export default Continents;
