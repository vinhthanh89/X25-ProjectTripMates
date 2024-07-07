import { useState, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import Continents from "../Continents";
import { useNavigate } from "react-router";
import { getDataUserFollowing } from "../../../services/userFollowing";
import { useSelector } from "react-redux";

const RightSideBar = () => {
  const navigate = useNavigate();
  const [followingUsers, setFollowingUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userFollowing = useSelector((state) => state.user.user);
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await getDataUserFollowing(userFollowing._id);
        console.log(response);
        const sortedUsers = response.data.usersFollowing.sort(
          (a, b) => new Date(b.followDate) - new Date(a.followDate)
        );
        setFollowingUsers(sortedUsers);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching following users:", error);
        setIsLoading(false);
      }
    };
    fetchFriends();
  }, [userFollowing._id]);


  return (
    <div className="flex flex-col gap-[2rem] font-bold pt-[1rem] w-full ">
      <div className="friend-list flex flex-col gap-[1rem]">
        <h1 className="text-lg font-bold">Recently </h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : followingUsers.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[8rem]">
            <p className="text-[13px]">You are not following anyone</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-[1rem] h-[8rem]">
            {followingUsers.slice(-3).reverse().map((user) => (
              <li
                key={user.userFollow._id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <div className="w-[2rem] h-[2rem] relative">
                    <img
                      src={user.userFollow.avatar || "./profile-user.png"}
                      alt={user.userFollow.fullName}
                      className="w-full h-full object-cover rounded-full border"
                    />
                  </div>
                  <p className="text-sm">{user.userFollow.fullName}</p>
                </div>
                <div>
                  <button
                    className="hover:scale-110"
                    onClick={() => navigate("/message")}
                  >
                    <AiFillMessage className="text-[#303030]" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-lg font-bold">Explore</h1>
        <Continents />
      </div>
    </div>
  );
};

export default RightSideBar;
