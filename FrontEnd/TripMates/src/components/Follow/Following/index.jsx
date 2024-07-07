/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getDataUserFollowing } from "../../../services/userFollowing"
import AvatarFollower from "../../UserProfile/AvatarFollower";

const Following = ({ userProfile }) => {
  const [usersFollowing, setUsersFollowing] = useState(null);

  useEffect(() => {
    const fetchDataUsersFollowing = async () => {
      try {
        const response = await getDataUserFollowing(userProfile._id);
        console.log(response);
        setUsersFollowing(response.data.usersFollowing);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataUsersFollowing();
  }, [userProfile._id]);

  const renderUserFollowing =
    usersFollowing === null ? (
      <p>Loading...</p>
    ) : usersFollowing.length === 0 ? (
      <div className="h-[400px] col-span-6 flex justify-center items-center">
        <p className="text-2xl">You are not following anyone</p>
      </div>
    ) : (
      usersFollowing.map((user) => {
        const userFollow = user.userFollow;
        return (
          <div key={userFollow._id}>
            <AvatarFollower user={userFollow} />
          </div>
        );
      })
    );
    const totalFollowing = usersFollowing ? usersFollowing.length : 0;

  return (
    <div>
      <h1 className="text-lg">Total: {totalFollowing}</h1>
      <div className="followers grid grid-cols-4 gap-2 py-2">
        {renderUserFollowing}
      </div>
    </div>
  );
};
export default Following