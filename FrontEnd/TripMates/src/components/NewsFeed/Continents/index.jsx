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

  const iconSize = 50;
  const iconColor = { color: "#e6e6e64d" };

  return (
    <div className="continents flex justify-between">
      <div className="dropdown dropdown-hover dropdown-end dm-sans">
        <div tabIndex={0} className="flex items-center hover:cursor-pointer">
          <p className="font-bold p-2 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Continents
          </p>
        </div>
        <div className="menu dropdown-content z-[1] p-4 bg-white shadow-xl rounded-xl border-[1px] border-[#cccccc]">
          <div className="grid grid-rows-2 grid-cols-3 w-[40rem] gap-[2rem]">
            {continents.map(({ icon: Icon, name }) => (
              <button
                key={name}
                className="p-5 flex flex-col items-center gap-[15px] bg-black rounded-lg hover_trans hover:scale-105"
              >
                <Icon
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-lg">
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
