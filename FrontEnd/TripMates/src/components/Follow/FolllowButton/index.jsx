/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { checkIsFollow, followUser, unfollowUser } from "../../../services/userFollowing";

const FollowButton = ({ userProfile }) => {
  const [isFollow, setIsFollow] = useState(null);
  console.log(userProfile);

  useEffect(() => {
    const checkUserIsFollow = async () => {
      try {
        const response = await checkIsFollow(userProfile._id);
        console.log(response);
        setIsFollow(response.data.isFollow);
      } catch (error) {
        console.log(error);
      }
    };
    checkUserIsFollow();
  }, [userProfile._id]);

  const handleFollowUser = async () => {
    try {
      const response = await followUser(userProfile._id);
      console.log(response);
      const usersFollowing = response.data.usersFollowing;
      setIsFollow(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollowUser = async () => {
    try {
      const response = await unfollowUser(userProfile._id)
      console.log(response);
      setIsFollow(false)
    } catch (error) {
      console.log(error);
    }
  }

  if (isFollow === null) {
    // Hiển thị trạng thái tải
    return (
      <button className="bg-gray-300 text-gray-500 font-bold rounded px-2 py-1 w-full" disabled>
        Loading...
      </button>
    );
  }

  return (
    <div>
      {isFollow ? (
        <button 
        onClick={handleUnfollowUser}
        className="bg-black hover:bg-[#303030] hover:scale-105 text-white font-bold rounded px-2 py-1 w-full">
          Unfollow
        </button>
      ) : (
        <button
          onClick={handleFollowUser}
          className="bg-black hover:bg-[#303030] hover:scale-105 text-white font-bold rounded px-2 py-1 w-full"
        >
          + Follow
        </button>
      )}
    </div>
  );
};

export default FollowButton;
