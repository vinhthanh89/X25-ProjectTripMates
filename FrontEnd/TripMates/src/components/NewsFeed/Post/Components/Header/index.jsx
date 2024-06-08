import { FaUserCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
const Header = () => {
  const iconSize = 25;
  return (
    //! Design 1
    // <div className="flex flex-col gap-5 border-b-2 pb-4">
    //   <h1 className="text-4xl font-bold">
    //     Top 10 places you should visit in Vietnam and make sure to take photos
    //   </h1>
    //   <div className="flex justify-between items-center">
    //     <div className="flex items-center gap-2 text-base">
    //       <FaUserCircle size={iconSize} />
    //       <p>Quoc Chau</p>
    //     </div>
    //     <div className="flex gap-2">
    //       <span className="flex items-center gap-2 font-bold">
    //         <MdPlace />
    //         Vietnam
    //       </span>|
    //       <span className="text-red-500 font-bold">Asia</span>|
    //       <span>09 June 2024</span>
    //     </div>
    //   </div>
    // </div>

    //! Design 2
    // <div className="flex flex-col gap-5 border-b-2 pb-4">
    //   <button className="flex items-center gap-2 hover:underline">
    //     <FaLongArrowAltLeft />
    //     Back
    //   </button>
    //   <div className="flex justify-between items-center">
    //     <div className="flex items-center gap-2 text-base">
    //       <FaUserCircle size={iconSize} />
    //       <p>Quoc Chau</p>
    //     </div>
    //     <div className="flex gap-2">
    //       <span className="flex items-center gap-2 font-bold">
    //         <MdPlace />
    //         Vietnam
    //       </span>
    //       |<span className="text-red-500 font-bold">Asia</span>|
    //       <span>09 June 2024</span>
    //     </div>
    //   </div>
    //   <h1 className="text-4xl font-bold">
    //     Top 10 places you should visit in Vietnam and make sure to take photos
    //   </h1>
    // </div>
    //! Design 3
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-5 border-b-2 pb-4">
        <button className="flex items-center gap-2 hover:underline">
          <FaLongArrowAltLeft />
          Back
        </button>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-base">
            <FaUserCircle size={iconSize} />
            <p>Quoc Chau</p>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center gap-2 font-bold">
              <MdPlace />
              Vietnam
            </span>
            |<span className="text-red-500 font-bold">Asia</span>|
            <span>09 June 2024</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold">
        Top 10 places you should visit in Vietnam and make sure to take photos
      </h1>
    </div>
  );
};

export default Header;