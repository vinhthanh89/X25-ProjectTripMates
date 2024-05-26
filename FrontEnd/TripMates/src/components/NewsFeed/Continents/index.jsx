import {
  FaGlobeAfrica,
  FaGlobeEurope,
  FaGlobeAsia,
  FaGlobeAmericas,
  FaGlobe,
} from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
const Continents = () => {
  const iconSize = 50;
  const iconColor = { color: "#e6e6e64d" };
  return (
    <>
      <div className="continents flex justify-between">
        <div className="dropdown dropdown-hover dm-sans text-black">
          <div tabIndex={0} className="flex items-center hover:cursor-pointer">
            <p className="text-lg">Continents</p>
            <RiArrowDropDownLine size={iconSize} />
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-4 bg-white shadow-xl rounded-xl border-[1px] border-[#cccccc]"
          >
            <div className="grid grid-rows-2 grid-cols-3 w-[40rem] gap-[2rem]">
              <button className="p-5 flex flex-col items-center gap-[5px] bg-black rounded-lg hover_trans hover:scale-105">
                <FaGlobe
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xl">
                  Other...
                </p>
              </button>
              <button className="p-5 flex flex-col items-center gap-[5px] bg-black rounded-lg hover_trans hover:scale-105">
                <FaGlobeAfrica
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xl">
                  Africa
                </p>
              </button>
              <button className="p-5 flex flex-col items-center gap-[5px] bg-black rounded-lg hover_trans hover:scale-105">
                <FaEarthOceania
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xl">
                  Oceania
                </p>
              </button>
              <button className="p-5 flex flex-col items-center gap-[5px] bg-black rounded-lg hover_trans hover:scale-105">
                <FaGlobeEurope
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xl">
                  Europe
                </p>
              </button>
              <button className="p-5 flex flex-col items-center gap-[5px] bg-black rounded-lg hover_trans hover:scale-105">
                <FaGlobeAsia
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xl">
                  Asia
                </p>
              </button>
              <button className="p-5 flex flex-col items-center gap-[5px] bg-black rounded-lg hover_trans hover:scale-105">
                <FaGlobeAmericas
                  size={iconSize}
                  style={iconColor}
                  className="bg-transparent"
                />
                <p className="bg-transparent text-white font-semibold text-xl">
                  Americas
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Continents;
