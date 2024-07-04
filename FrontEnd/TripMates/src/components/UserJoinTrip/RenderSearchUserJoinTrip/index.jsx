/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getDataUserFollowing } from "../../../services/userFollowing";
import { useSelector } from "react-redux";

const RenderSearchUserJoinTrip = ({ searchInput , pickUserJoinTrip }) => {
  const userLogin = useSelector((state) => state.user.user);
  const [usersFollowing, setUsersFollowing] = useState([]);

  useEffect(() => {
    const fetchUserFollowing = async () => {
      try {
        const response = await getDataUserFollowing(userLogin._id);
        const usersFollowingResponse = response.data.usersFollowing;
        const usersFollow = usersFollowingResponse.map(
          (item) => item.userFollow
        );
        setUsersFollowing(usersFollow);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserFollowing();
  }, [userLogin._id]);

  const usersFollowFilter = usersFollowing.filter((user) => {
    const userFullName = user.fullName.toLowerCase();
    const searchInputLower = searchInput.toLowerCase() || " ";
    return userFullName.startsWith(searchInputLower);
  });

  const handlePickUserJoinTrip = (user) => {
    pickUserJoinTrip(user)
  }

  const renderSearchUserJoinTrip = usersFollowFilter.map((user) => {
    return (
      <div
        key={user._id}
        onClick={() => handlePickUserJoinTrip(user)}
        className="flex w-full items-center h-[70px] py-[10px] pl-[5px] rounded-[8px]  hover:bg-[#d7d5d5] cursor-pointer"
      >
        <div className="w-[50px] h-full">
          <img
            className="w-full h-full object-cover rounded-[8px]"
            src={user.avatar}
            alt=""
          />
        </div>
        <div className="ml-[18px]">
          <p className="font-bold text-[16px]">{user.fullName}</p>
          <p>{user.email}</p>
        </div>
      </div>
    );
  });

  return <div>{renderSearchUserJoinTrip}</div>;
};

export default RenderSearchUserJoinTrip;
