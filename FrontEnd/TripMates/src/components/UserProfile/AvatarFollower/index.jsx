/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";

const   AvatarFollower = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/user/${user._id}`)}
      className="flex items-center gap-3 cursor-pointer w-full h-[5rem] border-2 rounded-lg p-2"
    >
      <div>
        <img
          className="w-[55px] h-[55px] object-cover rounded-lg"
          src={user.avatar}
          alt=""
        />
      </div>

      <div className="w-[60%]">
        <p
          title={user.fullName}
          className="text-[16px] font-bold break-words"
        >
          {user.fullName}
        </p>
      </div>
    </div>
  );
};

export default AvatarFollower;
