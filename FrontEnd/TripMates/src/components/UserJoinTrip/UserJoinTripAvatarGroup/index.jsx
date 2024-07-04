/* eslint-disable react/prop-types */
import { Avatar } from "antd";

const UserJoinTripAvatarGroup = ({topicDetail}) => {
  
  const userJoinTrip = topicDetail.userJoinTrip
  const userJoinTripFilter = userJoinTrip.filter(user => user.status === 'accept')

  const renderUserJoinTripAvatar = userJoinTripFilter.map(user => {
    return (
      <div key={user.userId._id}>
          <Avatar size={40} src={user.userId.avatar} />
      </div>
    )
  })

  return (
    <div className="inline-block ml-[5px]">
      <Avatar.Group
        maxCount={5}
        maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf'}}
      >
        {renderUserJoinTripAvatar}
      </Avatar.Group>
    </div>
  );
};

export default UserJoinTripAvatarGroup;
