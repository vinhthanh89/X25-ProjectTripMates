// import { IoIosNotificationsOutline } from "react-icons/io";
// import { FaUserFriends } from "react-icons/fa";
const Header = () => {
  // const iconSize = 30;
  return (
    <>
      <div className="grid grid-cols-5 p-[0.8rem] w-full border-b-[1.5px]">
        <div className="col-span-1 flex items-center gap-[5px]">
          <img
            src="../../../../public/tripmates-favicon-black.png"
            className="w-[3rem]"
          />
          <h1 className="text-2xl font-semibold text-[#5143d9]">TripMates</h1>
        </div>
        <div className="col-span-3 flex justify-center">
          <label className="input input-bordered flex items-center gap-2 bg-white w-[60%]">
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
        </div>
        {/* <div className="col-span-1 flex px-[2rem] gap-[1rem]">
          <button className="btn_all bg-white text-black hover:scale-105">
            <IoIosNotificationsOutline
              size={iconSize}
              className="bg-transparent"
            />
          </button>
          <button className="btn_all flex items-center justify-between bg-white text-black gap-1 w-[8rem] hover:scale-105">
            <FaUserFriends size={iconSize} className="bg-transparent" />
            <p>Friends</p>
          </button>
        </div> */}
      </div>
    </>
  );
};
export default Header;
