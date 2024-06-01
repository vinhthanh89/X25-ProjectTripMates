/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router";

const Post = ({ topic }) => {
  const navigate = useNavigate()
  const {_id, thumbnail, description, country, continent, title, userCreated } =
    topic;

  return (
    <div
     className="flex flex-col gap-y-[1.2rem] rounded-lg shadow-xl p-4 cursor-pointer">
      <div className="relative" onClick={() => navigate(`/topic/${_id}`)}>
        <div className="absolute top-[5px] right-[5px] flex items-center gap-2">
          <div className="w-[4rem] h-[4rem]">
            <img
              src={userCreated.avatar}
              className="w-full h-full object-cover rounded-full border"
            />
          </div>
        </div>
        <img
          src={thumbnail}
          alt={country}
          className="rounded-[12px] cursor-pointer w-full h-[220px] object-fill"
        />
      </div>
      <div className="flex flex-col gap-[10px] text-black">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-1 font-medium text-gray-400">
            <MdPlace />
            <p>{country}</p>
          </div>
          <div className="text-sm text-[#5143d9]">
            <span>#{continent}</span>
            <span>#{country}</span>
          </div>
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
