/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import AvatarFollower from "../../UserProfile/AvatarFollower";
import { getDataUserFollower } from "../../../services/userFollowing";

const Followers = ({ userProfile }) => {  
  const [usersFollower , setUsersFollower] = useState([])

  useEffect(() => {
    const fetchDataUsersFollower = async () => {
      try {
        const response = await getDataUserFollower(userProfile._id)
        setUsersFollower(response.data.usersFollower)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataUsersFollower()
  } , [userProfile._id])

  
  const renderFollower = usersFollower.map((user) => {
    return (
      <div key={user._id}>
        <AvatarFollower user={user} />
      </div>
    );
  });

  return (
    <div>
      <div className="followers grid grid-cols-6 gap-[10px]">
        {renderFollower}
      </div>
    </div>
  );
};

export default Followers;
