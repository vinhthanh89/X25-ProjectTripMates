
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaCompass, FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoIosMail, IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";



const LeftSideBar = () => {
  const iconSize = 25;
  const iconStyle = { background: "transparent" };
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className="flex flex-col text-black font-bold gap-[3rem] h-[40rem] pt-[2rem] w-[85%]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <img
              className="w-[100px] h-[100px] object-cover rounded-full"
              src={user.avatar}
              alt=""
            />
            {/* <BiSolidUserCircle size={100} /> */}
            <h1 className="text-2xl text-center text-black font-bold">
              {user.fullName}
            </h1>
            <p className="text-[#717171] text-center text-sm font-normal">
              {user.email}
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
            <button className="flex justify-start items-center btn_all gap-2 w-full hover:bg-black hover:text-white transition duration-300 ease-in-out">
              <FaSignOutAlt
                className="group-hover:bg-black"
                size={iconSize}
                style={iconStyle}
              />
              Sign out
            </button>
          </div>
          {/* <div className="flex justify-center pt-8">
            <button className="bg-red-500 text-white btn_all w-[70%] hover:bg-red-700">
              Sign out
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default LeftSideBar;
