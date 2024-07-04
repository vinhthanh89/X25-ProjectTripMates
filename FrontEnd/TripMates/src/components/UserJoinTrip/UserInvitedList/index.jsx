/* eslint-disable react/prop-types */

const UserInvitedList = ({ userJoinTrip }) => {
  console.log(userJoinTrip);
  const renderUserJoinTrip = userJoinTrip.map((user) => {
    return (
      <div
        key={user.userId._id}
        className="flex justify-between w-full items-center h-[70px] py-[10px] px-[5px] rounded-[8px]"
      >
        <div className="flex h-full">
          <div className="w-[50px] h-full">
            <img
              className="w-full h-full object-cover rounded-[8px]"
              src={user.userId.avatar}
            />
          </div>
          <div className="ml-[18px]">
            <p className="font-bold text-[16px]">{user.userId.fullName}</p>
            <p>{user.userId.email}</p>
          </div>
        </div>
        <div>
          <span 
          className={`text-[16px]
          ${user.status === 'pending' && 'text-[lightgray]' ||
          user.status === 'accept' && 'text-[lightgreen]' ||
          user.status === 'đecline' && 'text-[#c1121f]'
          }
          `}>
          {user.status}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white px-[10px] py-[20px]">{renderUserJoinTrip}</div>
  );
};

export default UserInvitedList;
