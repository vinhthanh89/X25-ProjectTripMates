// import { useSelector } from "react-redux";
// import { IoIosMail, IoMdTransgender } from "react-icons/io";
// import { FaBirthdayCake } from "react-icons/fa";
// import { MdPlace } from "react-icons/md";
// import Post from "../Post";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getUserById } from "../../../services/user";
import UserCreatedTopic from "../../UserCreatedTopic";
import AboutMe from "../../AboutMe";

const UserProfile = () => {
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
      <div className="userProfile">
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[100px] h-[100px] object-cover rounded-full"
            src={userProfile.avatar}
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">{userProfile.fullName}</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] pt-[30px]">
          <div className="col-span-1 flex flex-col gap-2 px-[10px] border rounded-xl py-[1rem]">
            <AboutMe userProfile={userProfile} />
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-bold">Topics</h1>
              <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
                <div className="flex items-start gap-2 w-full">
                  <img
                    className="w-[25px] h-[25px] object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <p className="text-base">I travel to London</p>
                </div>
              </button>
              <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
                <div className="flex items-start gap-2 w-full">
                  <img
                    className="w-[25px] h-[25px] object-cover rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <p className="text-base">Vietnam: top 10 things</p>
                </div>
              </button>
              <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
                <div className="flex items-start gap-2 w-full">
                  <img
                    className="w-[25px] h-[25px] object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <p className="text-base">Traveling the world</p>
                </div>
              </button>
            </div>
          </div>
          <div className="col-span-2 gap-[10px]">
            <button className="relative px-[10px] py-[5px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full ring-1">
              Post
            </button>
            <button className="relative px-[10px] py-[5px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full">
              Followers
            </button>
            <button className="relative px-[10px] py-[5px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full">
              Following
            </button>
            <div className="px-[5px] border rounded-xl h-auto">
              <UserCreatedTopic userId={urlParam.userId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
