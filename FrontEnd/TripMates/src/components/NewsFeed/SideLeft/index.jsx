import { BiSolidMoviePlay } from "react-icons/bi";
import { FaCompass, FaSignOutAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../features/user/userSlices";
import { useNavigate } from "react-router";

const LeftSideBar = () => {
  const iconSize = 20;
  const iconStyle = { background: "transparent" };


  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logoutAction())
    navigate('/')
  }

  return (
    <>
      <div className="flex flex-col font-bold gap-[3rem] pt-[2rem] w-[85%]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5 navigation-btn">
            <div className="flex items-center btn_all gap-2 w-full hover:bg-[#f2f2f2] cursor-pointer transition duration-300 ease-in-out">
              <div className="w-[25px] h-[25px]">
                <img
                  className="w-full h-full object-cover rounded-full "
                  src={user.avatar}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <p> {user.fullName} sdsadsaddsad</p>
                {/* <p className="text-xs text-[#717171]">{user.email}</p> */}
              </div>
            </div>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <FaCompass
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="text-base">Feeds</p>
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <BiSolidMoviePlay
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="text-base">Shorts</p>
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <IoIosMail
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="text-base">Messages</p>
            </button>
            <button className="flex justify-start items-center btn_all gap-2 w-full hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out" onClick={handleLogOut}>
              <FaSignOutAlt
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="text-base">Sign out</p>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[grey]">Pages you like</h1>
            <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
              <div className="flex items-start gap-2 w-full">
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
