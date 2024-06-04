import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutAction } from "../../../../features/user/userSlices";
import { FaSignOutAlt } from "react-icons/fa";
import ModalChangePassword from "../../../UserProfile/ModalChangePassword";

const User = () => {
  const iconSize = 20;
  const iconStyle = { background: "transparent" };
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  return (
    <>
      <div>
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
            className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-52 gap-3 ring-1"
          >
            <ModalChangePassword user={user} />
            <button
              className="flex justify-start items-center btn_all gap-2 w-full transition duration-300 ease-in-out bg-red-600 hover:bg-red-500 text-white text-sm"
              onClick={handleLogOut}
            >
              <FaSignOutAlt className="" size={iconSize} style={iconStyle} />
              <p className="">Sign out</p>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default User;
