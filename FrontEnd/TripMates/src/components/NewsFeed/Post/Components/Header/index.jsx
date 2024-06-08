import { FaUserCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Header = () => {
  const iconSize = 25;
  return (
    <div className="flex flex-col gap-5 border-b-2 pb-4">
      <button className="flex items-center gap-2 hover:underline">
        <FaLongArrowAltLeft />
        Return
      </button>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-base">
          <FaUserCircle size={iconSize} />
          <p>Quoc Chau</p>
        </div>
        <div className="flex gap-2">
          <span className="text-red-500 font-bold">
            Asia
          </span>
          |<span>09 June 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
