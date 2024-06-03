/* eslint-disable react/prop-types */

import AvatarFollower from "../AvatarFollower";


const Followers = ({userProfile}) => {

  const renderFollower = userProfile.follower.map((user) => {
    return (
      <div key={user._id}>
        <AvatarFollower user={user} />
      </div>
    )
  })

  return (
    <div>
      <div className="followers grid grid-cols-4 gap-4">
      {renderFollower}
      </div>      
    </div>
  );
};

export default Followers;
