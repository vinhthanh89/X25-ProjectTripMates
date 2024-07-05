/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getDataUserFollowing } from "../../../services/userFollowing"
import AvatarFollower from "../../UserProfile/AvatarFollower";



const Following = ({userProfile}) => {
    const [usersFollowing , setUsersFollowing] = useState([])

    console.log(userProfile);

    useEffect(() => {
        const fectchDataUsersFollowing = async () => {
            try {
                const response = await getDataUserFollowing(userProfile._id)
                console.log(response);
                setUsersFollowing(response.data.usersFollowing)
            } catch (error) {
                console.log(error);
            }
        }
        fectchDataUsersFollowing()
    } , [userProfile._id])

    const renderUserFollowing = usersFollowing.map((user) => {
        const userFollow = user.userFollow
        return (
          <div key={userFollow._id}>
            <AvatarFollower user={userFollow} />
          </div>
        );
      });

    return (
        <div>
      <div className="followers grid grid-cols-6 gap-[10px]">
        {renderUserFollowing}
      </div>
    </div>
    )
}
export default Following