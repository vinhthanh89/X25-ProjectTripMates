import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCompass } from "react-icons/fa";
import { IoIosMail, IoIosSettings } from "react-icons/io";
const LeftSideBar = () => {
  const [selected, setSelected] = useState(0);
  const handleButtonClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  const iconSize = 25;
  const iconStyle = { background: "transparent" };
  return (
    <>
      <div className="flex flex-col text-black font-bold gap-[1rem] w-[85%] h-[40rem] pt-[2rem]">
        <div className="flex justify-center items-center gap-[5px]">
          <img src="./tripmates-favicon-color.png" className="w-[3rem]" />
          <h1 className="text-2xl text-black font-semibold">TripMates</h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <BiSolidUserCircle size={100} />
            <h1 className="text-2xl text-black font-bold">Quoc Chau</h1>
            <p className="text-[#717171] text-sm font-normal">
              quocchau@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-5 navigation-btn">
            <button
              className={`group flex justify-start items-center btn_all gap-2 w-full ${
                selected === 0 ? "bg-black text-white" : ""
              } hover:bg-black hover:text-white transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(0)}
            >
              <FaCompass
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Feeds
            </button>
            <button
              className={`group flex justify-start items-center btn_all gap-2 w-full ${
                selected === 1 ? "bg-black text-white" : ""
              } hover:bg-black hover:text-white transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(1)}
            >
              <IoIosMail
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Messages
            </button>
            <button
              className={`group flex justify-start items-center btn_all gap-2 w-full ${
                selected === 2 ? "bg-black text-white" : ""
              } hover:bg-black hover:text-white transition duration-300 ease-in-out`}
              onClick={() => handleButtonClick(2)}
            >
              <IoIosSettings
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftSideBar;
