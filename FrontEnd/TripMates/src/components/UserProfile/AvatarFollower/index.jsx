/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";

const AvatarFollower = ({ user }) => {
  const navigate = useNavigate();

  return (

      <div onClick={() => navigate(`/user/${user._id}`)} className="flex flex-col items-center gap-3 pt-[15px] cursor-pointer">
        <img
          className="w-[70px] h-[70px] object-cover rounded-full"
          src={user.avatar}
          alt=""
        />
        <div>
          <h1 className="text-lg font-bold">{user.fullName}</h1>
        </div>
      </div>
  );
};

export default AvatarFollower;
