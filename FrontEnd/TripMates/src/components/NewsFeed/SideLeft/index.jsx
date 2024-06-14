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

   const ImageStories = [
     {
       name: "John Smith",
       imageUrl:
         "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
     {
       name: "Mary Jane",
       imageUrl:
         "https://plus.unsplash.com/premium_photo-1661964344898-c5bfe7b6cb06?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
     {
       name: "Jake Paul",
       imageUrl:
         "https://plus.unsplash.com/premium_photo-1661964414899-6528336922d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
     {
       name: "Amanda",
       imageUrl:
         "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
   ];
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
      <div className="flex flex-col font-bold w-[85%] h-full pt-[2rem] overflow-y-scroll">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">

            <div
              className="flex items-center btn_all cursor-pointer gap-4 bg-[#5143d9]"
              onClick={() => navigate(`/user/${user._id}`)}
            >
              <div className="w-[35px] h-[35px] rounded-full bg-white">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={user.avatar}
                  alt=""
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-white">{user.fullName}</p>
                {/* <p className="text-xs text-[#717171]">{user.email}</p> */}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
                <FaCompass
                  className="group-hover:bg-[#303030]"
                  size={iconSize}
                  style={iconStyle}
                />
                <p>Feeds</p>
              </button>
              <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
                <BiSolidMoviePlay
                  className="group-hover:bg-[#303030]"
                  size={iconSize}
                  style={iconStyle}
                />
                <p>Shorts</p>
              </button>
              <button className="flex justify-start items-center btn_all gap-2 w-full focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
                <AiFillMessage
                  className="group-hover:bg-[#303030]"
                  size={iconSize}
                  style={iconStyle}
                />
                <p>Messages</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="recommend-list">
              <h1 className="text-lg font-bold">Top travelers</h1>
              <div className="grid grid-cols-2 gap-4 pt-[1rem]">
                {ImageStories.slice(0, 4).map((story, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-md transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={story.imageUrl}
                      alt={`Traveler Story ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end px-4 pb-4 bg-[#303030] bg-opacity-50 text-white">
                      <p className="text-sm font-semibold">{`  ${story.name}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <h1 className="text-[grey]">Pages you like</h1>
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
            </button> */}
        </div>
      </div>
    </>
  );
};
export default LeftSideBar;
