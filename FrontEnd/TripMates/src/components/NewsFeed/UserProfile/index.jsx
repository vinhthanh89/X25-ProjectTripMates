// import { useSelector } from "react-redux";
// import { IoIosMail, IoMdTransgender } from "react-icons/io";
// import { FaBirthdayCake } from "react-icons/fa";
// import { MdPlace } from "react-icons/md";
// import Post from "../Post";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getUserById } from "../../../services/user";
import UserCreatedTopic from "../../UserProfile/UserCreatedTopic";
import AboutMe from "../../UserProfile/AboutMe";
import Followers from "../../UserProfile/Followers";

const UserProfile = () => {
  const urlParam = useParams();
  const [userProfile, setUserProfile] = useState({
    email: "",
    fullName: "",
    avatar: "",
    age: null,
    birthday: "",
    gender: "",
    description: "",
    follower: [],
  });

  const [showComponent, setShowComponent] = useState("topic");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserById(urlParam.userId);
        setUserProfile(response.data.findUser);
        setShowComponent('topic')
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [urlParam.userId]);

  const handleEditUser = (newUserProfile) => {
    setUserProfile(newUserProfile);
  };

  return (
    <>
      <div className="userProfile h-full bg-[#f2f2f2] text-black px-[6rem] pt-[1rem]">
        {/* <div className="py-[2rem] px-[2.5rem] bg-white rounded">
          <div className="flex justify-center gap-[5rem]">
            <div className="flex flex-col gap-2">
              <img
                className="w-[90px] h-[90px] object-cover rounded-full"
                src={userProfile.avatar}
                alt=""
              />
              <h1 className="text-lg font-bold">{userProfile.fullName}</h1>
              <button className="bg-black hover:bg-[#303030] hover:scale-105 text-white font-bold btn_all">
                + Follow
              </button>
            </div>
            <div className="flex items-center gap-[5rem] text-xl font-bold">
              <div className="flex flex-col">
                Followers
                <span>0</span>
              </div>
              <div className="flex flex-col">
                Following<span>0</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex items-center justify-end ">
            <button className="bg-black hover:bg-[#303030] hover:scale-105 text-white font-bold btn_all">
              + Follow
            </button>
          </div>

        </div> */}
        <div className="grid grid-cols-4 gap-[20px] pt-[1rem]">
          <div className="col-span-1 flex flex-col gap-[20px] p-[2rem] bg-white rounded">
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-[90px] h-[90px] object-cover rounded-full"
                src={userProfile.avatar}
                alt=""
              />
              <h1 className="w-full flex justify-center text-lg font-bold truncate">
                {userProfile.fullName}
              </h1>

              <button className="bg-black hover:bg-[#303030] hover:scale-105 text-white font-bold btn_all">
                + Follow
              </button>
            </div>
            <AboutMe
              userProfile={userProfile}
              handleEditUser={handleEditUser}
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-base font-bold">Topics</h1>
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
          <div className="col-span-3 flex flex-col text-sm font-semibold gap-[10px] p-[2rem] bg-white rounded">
            <div>
              <button
                onClick={() => setShowComponent("topic")}
                className="relative px-[10px] py-[5px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full"
              >
                Topics
              </button>
              <button
                onClick={() => setShowComponent("follower")}
                className="relative px-[10px] py-[5px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full"
              >
                Followers
              </button>
              <button className="relative px-[10px] py-[5px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full">
                Following
              </button>
            </div>
            <div className="px-[15px] pt-[5px] overflow-hidden max-h-[600px] overflow-y-auto">
              {(showComponent === "topic" && (
                <UserCreatedTopic userId={urlParam.userId} />
              )) ||
                (showComponent === "follower" && (
                  <Followers userProfile={userProfile} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
