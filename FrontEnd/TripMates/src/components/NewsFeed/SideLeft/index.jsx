import { BiSolidMoviePlay } from "react-icons/bi";
import { FaCompass } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { getUserById } from "../../../services/user";

const LeftSideBar = () => {
  const iconSize = 20;
  const iconStyle = { background: "transparent" };
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  // const [userProfile, setUserProfile] = useState({
  //   email: "",
  //   fullName: "",
  //   avatar: "",
  //   age: null,
  //   birthday: "",
  //   gender: "",
  //   description: "",
  // });
  // const urlParam = useParams();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       console.log('abc' , urlParam);
  //       const response = await getUserById(urlParam.userId);
  //       console.log(response);
  //       setUserProfile(response.data.findUser);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserData();
  // }, [urlParam.userId, userProfile]);
  return (
    <>
      <div className="flex flex-col font-bold gap-[3rem] pt-[2rem] w-[85%]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center btn_all cursor-pointer gap-2" onClick={() => navigate(`/user/${user._id}`)}>
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

            <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
              <FaCompass
                className="group-hover:bg-[#303030]"
                size={iconSize}
                style={iconStyle}
              />
              <p className="">Feeds</p>
            </button>
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
