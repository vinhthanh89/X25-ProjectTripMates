import { BiSolidMoviePlay } from "react-icons/bi";
import { FaCompass, FaSignOutAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import User from "./User";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../../../services/user";

const LeftSideBar = () => {
  const iconSize = 20;
  const iconStyle = { background: "transparent" };
 
  const [userProfile, setUserProfile] = useState({
    email: "",
    fullName: "",
    avatar: "",
    age: null,
    birthday: "",
    gender: "",
    description: "",
  });
  const urlParam = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserById(urlParam.userId);
        setUserProfile(response.data.findUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [urlParam.userId, userProfile]);
  return (
    <>
      <div className="flex flex-col font-bold gap-[3rem] pt-[2rem] w-[85%]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <div className="dropdown dropdown-right dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="bg-white flex items-center gap-2 cursor-pointer btn_all hover:bg-[#e6e6e6] focus:bg-[#e6e6e6]"
              >
                <div className="w-[22px] h-[22px]">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={user.avatar}
                    alt=""
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate">{user.fullName}</p>
                  {/* <p className="text-xs text-[#717171]">{user.email}</p> */}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-52 gap-3 "
              >
                <button className="flex justify-start items-center btn_all gap-2 w-full hover:bg-[#e6e6e6] transition duration-300 ease-in-out text-sm">
                  <RiLockPasswordFill
                    className=""
                    size={iconSize}
                    style={iconStyle}
                  />
                  <p className="">Change password</p>
                </button>
                <button
                  className="flex justify-start items-center btn_all gap-2 w-full transition duration-300 ease-in-out bg-red-600 hover:bg-red-500 text-white text-sm"
                  onClick={handleLogOut}
                >
                  <FaSignOutAlt
                    className=""
                    size={iconSize}
                    style={iconStyle}
                  />
                  <p className="">Sign out</p>
                </button>
              </ul>
            </div>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <FaCompass
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="">Feeds</p>
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <BiSolidMoviePlay
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="">Shorts</p>
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <AiFillMessage
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="">Messages</p>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[grey]">Pages you like</h1>
            <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
              <div className="flex items-start gap-[5px] w-full">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-sm">Travel with Mark</p>
              </div>
            </button>
            <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
              <div className="flex items-start gap-2 w-full">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-sm">Travel with Grace</p>
              </div>
            </button>
            <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
              <div className="flex items-start gap-2 w-full">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-sm">Travel with Ethan</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftSideBar;
