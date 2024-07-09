import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../../../services/user";
import AboutMe from "../../UserProfile/AboutMe";
import Followers from "../../Follow/Followers";
import MoadlChangeAvatar from "../../UserProfile/ModalChangeAvatar";
import UserCreatedTopic from "../../UserProfile/UserCreatedTopic";
import Following from "../../Follow/Following";
import UserSavedTopic from "../../UserProfile/UserSavedTopic";

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
        console.log(response);
        setUserProfile(response.data.findUser);
        setShowComponent("topic");
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
      <div className="userProfile bg-[#f2f2f2] text-black px-[3rem]">
        <div className="grid grid-cols-4 h-screen pt-[1rem]">
          <div className="col-span-1 flex flex-col gap-[10px] pr-[1rem] mr-[2rem]">
            <div className="flex flex-col items-center gap-3 bg-white rounded p-[1rem]">
              <div className="relative">
                <img
                  className="w-[90px] h-[90px] object-cover rounded-full"
                  src={userProfile.avatar}
                  alt=""
                />
                <MoadlChangeAvatar
                  userProfile={userProfile}
                  handleEditUser={handleEditUser}
                />
              </div>

              <h1 className="w-full flex justify-center text-lg font-bold truncate">
                {userProfile.fullName}
              </h1>

              <div className="w-full">
                <AboutMe
                  userProfile={userProfile}
                  handleEditUser={handleEditUser}
                />
              </div>
            </div>
          </div>

          <div className="col-span-3 flex flex-col text-sm font-semibold gap-[10px] p-[2rem] bg-white rounded">
            <div>
              <button
                onClick={() => setShowComponent("topic")}
                className={`relative px-[10px] py-[5px] ${
                  showComponent === "topic" ? "before:w-full" : ""
                } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
              >
                My topics
              </button>
              <button
                onClick={() => setShowComponent("saved")}
                className={`relative px-[10px] py-[5px] ${
                  showComponent === "saved" ? "before:w-full" : ""
                } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
              >
                Saved topics
              </button>
              <button
                onClick={() => setShowComponent("follower")}
                className={`relative px-[10px] py-[5px] ${
                  showComponent === "follower" ? "before:w-full" : ""
                } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
              >
                Followers
              </button>
              <button
                onClick={() => setShowComponent("following")}
                className={`relative px-[10px] py-[5px] ${
                  showComponent === "following" ? "before:w-full" : ""
                } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
              >
                Following
              </button>
            </div>
            <div className="px-[15px] overflow-hidden max-h-[600px] overflow-y-auto">
              {showComponent === "topic" && (
                <UserCreatedTopic userId={urlParam.userId} />
              )}
              {showComponent === "saved" && (
                <UserSavedTopic userProfile={userProfile} />
              )}
              {showComponent === "follower" && (
                <Followers userProfile={userProfile} />
              )}
              {showComponent === "following" && (
                <Following userProfile={userProfile} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

//! Code chưa fix phần lưu ý
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { getUserById } from "../../../services/user";
// import AboutMe from "../../UserProfile/AboutMe";
// import Followers from "../../Follow/Followers";
// import MoadlChangeAvatar from "../../UserProfile/ModalChangeAvatar";
// import UserCreatedTopic from "../../UserProfile/UserCreatedTopic";
// import Following from "../../Follow/Following";

// const UserProfile = () => {
//   const urlParam = useParams();
//   const [userProfile, setUserProfile] = useState({
//     email: "",
//     fullName: "",
//     avatar: "",
//     age: null,
//     birthday: "",
//     gender: "",
//     description: "",
//     follower: [],
//     // following: [],
//     // topics: [], 
//     //! Lưu ý: Fix chỗ này, thêm các field này cho user để sử dụng conditional rendering
//   });

//   const [showComponent, setShowComponent] = useState("topic");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await getUserById(urlParam.userId);
//         setUserProfile(response.data.findUser);
//         setShowComponent("topic");
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchUserData();
//   }, [urlParam.userId]);

//   const handleEditUser = (newUserProfile) => {
//     setUserProfile(newUserProfile);
//   };

//   return (
//     <>
//       <div className="userProfile bg-[#f2f2f2] text-black px-[3rem]">
//         <div className="grid grid-cols-4 h-screen pt-[1rem]">
//           <div className="col-span-1 flex flex-col gap-[10px] pr-[1rem] mr-[2rem]">
//             <div className="flex flex-col items-center gap-3 bg-white rounded p-[1rem]">
//               <div className="relative">
//                 <img
//                   className="w-[90px] h-[90px] object-cover rounded-full"
//                   src={userProfile.avatar}
//                   alt=""
//                 />
//                 <MoadlChangeAvatar
//                   userProfile={userProfile}
//                   handleEditUser={handleEditUser}
//                 />
//               </div>

//               <h1 className="w-full flex justify-center text-lg font-bold truncate">
//                 {userProfile.fullName}
//               </h1>

//               <div className="w-full">
//                 <AboutMe
//                   userProfile={userProfile}
//                   handleEditUser={handleEditUser}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-span-3 flex flex-col text-sm font-semibold gap-[10px] p-[2rem] bg-white rounded">
//             <div>
//               <button
//                 onClick={() => setShowComponent("topic")}
//                 className={`relative px-[10px] py-[5px] ${
//                   showComponent === "topic" ? "before:w-full" : ""
//                 } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
//               >
//                 Topics
//               </button>
//               <button
//                 onClick={() => setShowComponent("follower")}
//                 className={`relative px-[10px] py-[5px] ${
//                   showComponent === "follower" ? "before:w-full" : ""
//                 } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
//               >
//                 Followers
//               </button>
//               <button
//                 onClick={() => setShowComponent("following")}
//                 className={`relative px-[10px] py-[5px] ${
//                   showComponent === "following" ? "before:w-full" : ""
//                 } before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full`}
//               >
//                 Following
//               </button>
//             </div>
//             <div className="px-[15px] pt-[5px] overflow-hidden max-h-[600px] overflow-y-auto">
//               {isLoading ? (
//                 <p>Loading...</p>
//               ) : error ? (
//                 <p>{error}</p>
//               ) : (
//                 <>
//                   {showComponent === "topic" &&
//                     (userProfile.topics.length > 0 ? (
//                       <UserCreatedTopic userId={urlParam.userId} />
//                     ) : (
//                       <p>You have no topics</p>
//                     ))}
//                   {showComponent === "follower" &&
//                     (userProfile.follower.length > 0 ? (
//                       <Followers userProfile={userProfile} />
//                     ) : (
//                       <p>You have no followers</p>
//                     ))}
//                   {showComponent === "following" &&
//                     (userProfile.following.length > 0 ? (
//                       <Following userProfile={userProfile} />
//                     ) : (
//                       <p>You have not followed anyone</p>
//                     ))}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserProfile;
