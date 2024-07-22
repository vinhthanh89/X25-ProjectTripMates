/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import AvatarFollower from "../../UserProfile/AvatarFollower";
import { getDataUserFollower } from "../../../services/userFollowing";

const Followers = ({ userProfile }) => {
  const [usersFollower, setUsersFollower] = useState(null);

  useEffect(() => {
    const fetchDataUsersFollower = async () => {
      try {
        const response = await getDataUserFollower(userProfile._id);
        setUsersFollower(response.data.usersFollower);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataUsersFollower();
  }, [userProfile._id]);

  const renderFollower =
    usersFollower === null ? (
      <p>Loading...</p>
    ) : usersFollower.length === 0 ? (
      <div className="h-[400px] col-span-6 flex justify-center items-center">
        <p className="text-2xl">User has no folowers</p>
      </div>
    ) : (
      usersFollower.map((user) => (
        <div className="py-2" key={user._id}>
          <AvatarFollower user={user} />
        </div>
      ))
    );
    const totalFollowers = usersFollower ? usersFollower.length : 0;

  return (
    <div>
      <h1 className="text-lg">Total: {totalFollowers}</h1>
      <div className="followers grid grid-cols-4 gap-2 py-2">
        {renderFollower}
      </div>
    </div>
  );
};

export default Followers;
