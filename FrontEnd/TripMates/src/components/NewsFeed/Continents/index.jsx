import {
  FaGlobe,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
} from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { MdSouthAmerica } from "react-icons/md";
import { Link } from "react-router-dom";

const Continents = () => {
  const continents = [
    { icon: FaGlobe, name: "All" },
    { icon: FaGlobeAfrica, name: "Africa", query: "Africa" },
    { icon: FaEarthOceania, name: "Oceania", query: "Oceania" },
    { icon: FaGlobeEurope, name: "Europe", query: "Europe" },
    { icon: FaGlobeAsia, name: "Asia", query: "Asia" },
    { icon: FaGlobeAmericas, name: "N/A", query: "North America" },
    { icon: MdSouthAmerica, name: "S/A", query: "South America" },
    { icon: HiGlobeAsiaAustralia, name: "Australia", query: "Australia" },
  ];
  const iconStyle = { color: "#e6e6e64d" };
  const iconSize = 30;
  return (
    <div>
      <div className="grid grid-rows-3 grid-cols-2 gap-4 ">
        {continents.map(({ icon: Icon, name, query }) => (
          <Link
            to={`${query ? `/search?continent=${query}` : ""}`}
            key={name}
            className="flex flex-col items-center justify-center p-2 gap-2 bg-[#303030] rounded-lg hover_trans hover:scale-105"
            title={name}
          >
            <Icon
              style={iconStyle}
              className="bg-transparent "
              size={iconSize}
            />
            <p className="bg-transparent text-white font-semibold text-sm line-clamp-1 text-center">
              {name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Continents;
