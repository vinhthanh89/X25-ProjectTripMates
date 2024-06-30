/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";

const AvatarFollower = ({ user }) => {
  const navigate = useNavigate();

  console.log(user);

  return (
    <div
      onClick={() => navigate(`/user/${user._id}`)}
      className="flex flex-col items-center gap-3 pt-[15px] cursor-pointer w-full  "
    >
      <div>
        <img
          className="w-[70px] h-[70px] object-cover rounded-full"
          src={user.avatar}
          alt=""
        />
      </div>

      <div className="w-full h-[50px]pb-[10px]">
        <p title={user.fullName} className="text-lg text-center font-bold line-clamp-2 break-words">
          {user.fullName}
        </p>
      </div>
    </div>
  );
};

export default AvatarFollower;
