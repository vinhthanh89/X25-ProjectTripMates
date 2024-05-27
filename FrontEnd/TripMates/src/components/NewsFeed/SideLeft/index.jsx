import { BiSolidUserCircle, BiSolidMoviePlay } from "react-icons/bi";
import { FaCompass, FaUser } from "react-icons/fa";
import { IoIosMail, IoIosSettings } from "react-icons/io";
const LeftSideBar = () => {
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
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
              <FaUser
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              My profile
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
              <FaCompass
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Feeds
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
              <BiSolidMoviePlay
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Shorts
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
              <IoIosMail
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Messages
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
              <IoIosSettings
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Settings
            </button>
          </div>
          <div className="flex justify-center pt-8">
            <button className="text-white btn_all w-[70%] hover:bg-red-700">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftSideBar;
