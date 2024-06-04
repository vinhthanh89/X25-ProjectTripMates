import { IoIosNotificationsOutline, IoIosSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { logoutAction } from "../../../features/user/userSlices.js";
import { useNavigate } from "react-router";
import ModalChangePassword from "../../UserProfile/ModalChangePassword";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  const iconSize = 30;
  const iconStyle = { background: "transparent" };

  return (
    <>
      <div className="grid grid-cols-5 p-[0.8rem] w-full border-b-[1.5px] bg-white">
        <button
          onClick={() => navigate("/")}
          className="col-span-1 flex items-center gap-[5px]"
        >
          <img
            src="../../../../public/tripmates-favicon-color.png"
            className="w-[3rem]"
          />
          <h1 className="text-2xl font-semibold text-black">TripMates</h1>
        </button>
        <div className="col-span-3 flex justify-center gap-[25px]">
          <label className="input input-bordered flex items-center gap-2 bg-white w-[65%]">
            <input
              type="text"
              className="grow text-black font-semibold"
              placeholder="Search anything..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="black"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="font-bold bg-[#5143d9] text-white p-3 rounded-xl">
            Start a new trip
          </button>
        </div>
        <div className="col-span-1 flex justify-end gap-[0.5rem]">
          <button className="btn_all  text-[#545454] hover:scale-105">
            <IoIosNotificationsOutline
              size={iconSize}
              className="bg-transparent"
            />
          </button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <button className="btn_all text-[#545454] hover:scale-105">
                <IoIosSettings size={iconSize} className="bg-transparent" />
              </button>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-52 gap-3 "
            >
              <ModalChangePassword user={user} />
              <button
                className="flex justify-start items-center btn_all gap-2 w-full transition duration-300 ease-in-out bg-red-600 hover:bg-red-500 text-white text-sm"
                onClick={handleLogOut}
              >
                <FaSignOutAlt size={20} style={iconStyle} />
                <p className="">Sign out</p>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
