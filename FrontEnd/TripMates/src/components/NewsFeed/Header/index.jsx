import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutAction } from "../../../features/user/userSlices.js";
import NotificationContainer from "../../Notification/NotificationContainer/index.jsx";
import ModalChangePassword from "../../UserProfile/ModalChangePassword";
import SearchBar from "../SearchBar/index.jsx";
import TopicForm from "../TopicForm/index.jsx";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  // Handle Modal
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };

  const iconSize = 20;
  const iconStyle = { background: "transparent"};
  return (
    <>

      <div className="grid grid-cols-5 p-[0.8rem] w-full border-b-[1.5px] bg-white sticky top-0 z-10">

        <button
          onClick={() => navigate("/")}
          className="col-span-1 flex items-center gap-[5px]"
        >
          <img
            src="../../../../public/tripmates-favicon-color.png"
            className="w-[3rem]"
          />
          <h1 className="text-2xl font-semibold text-[#303030]">TripMates</h1>
        </button>
        <div className="col-span-3 flex justify-center gap-[25px]">
       <SearchBar />
          <button
            className="font-bold bg-[#5143d9] text-white p-3 rounded-xl"
            onClick={showDrawer}
          >
            Start a new trip
          </button>
          {open && <TopicForm onClose={onClose} open={open} />}
        </div>
        <div className="col-span-1 flex justify-end items-center gap-[0.5rem] pr-5">
          {/* <button className="btn_all hover:scale-105 text-[#545454]">
            <AiFillMessage size={iconSize} style={iconStyle} />
          </button> */}
          {/* <button className="btn_all hover:scale-105 text-[#545454]">
            <FaBell size={iconSize} style={iconStyle} />
          </button> */}
          <NotificationContainer />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div>
                <button className="btn_all hover:scale-105 text-[#545454]">
                  <IoMdSettings size={iconSize} style={iconStyle} />
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-20 menu p-4 shadow bg-white rounded-box w-56 gap-3"
            >
              <ModalChangePassword user={user} />
              <div className="flex items-center btn_all gap-2 w-full transition duration-300 ease-in-out bg-red-600 hover:bg-red-500 text-white text-base font-bold">
                <FaSignOutAlt size={20} style={iconStyle} />
                <button onClick={handleLogOut}>Sign out</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
