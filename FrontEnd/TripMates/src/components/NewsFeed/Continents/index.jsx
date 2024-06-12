import {
  FaGlobeAfrica,
  FaGlobeEurope,
  FaGlobeAsia,
  FaGlobeAmericas,
  FaGlobe,
  FaMapMarkerAlt,
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
  const iconColor = { color: "#e6e6e64d" };
  return (
    <div>
      <div className="dropdown dropdown-hover dropdown-end">
        <div tabIndex={0} className="hover:cursor-pointer">
          <div className="flex items-center gap-2 font-bold p-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#303030] hover:text-white">
            <FaMapMarkerAlt />
            Continents
          </div>
        </div>
        <div className="menu dropdown-content z-[1] p-4 bg-white shadow-xl rounded-xl border-[1px] border-[#cccccc]">
          <div className="grid grid-rows-2 grid-cols-3 w-[17rem] h-[7rem] gap-[0.5rem]">
            {continents.map(({ icon: Icon, name }) => (
              <button
                key={name}
                className="flex flex-col items-center justify-center gap-1 bg-[#303030] rounded-lg hover_trans hover:scale-105"
              >
                <Icon
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xs">
                  {name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continents;
