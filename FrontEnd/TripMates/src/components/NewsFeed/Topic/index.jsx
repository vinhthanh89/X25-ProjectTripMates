/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router";

const Topic = ({ topic }) => {
  const navigate = useNavigate();
  const {
    _id,
    thumbnail,
    description,
    title,
    userCreated,
    location,
  } = topic;

  const {locationName , continent , country , locationThumbnail} = location

  return (

    <div className="flex flex-col gap-y-[1.2rem] rounded-lg shadow-xl cursor-pointer p-[10px]">

      <div className="relative" onClick={() => navigate(`/topic/${_id}`)}>
        <div className="absolute top-[5px] right-[5px] flex items-center gap-2">
          <div className="w-[3rem] h-[3rem]">
            <img
              src={userCreated.avatar}
              className="w-full h-full object-cover rounded-full border"
            />
          </div>
        </div>
        <img
          src={thumbnail ? thumbnail : locationThumbnail}
          alt={locationName}
          className="rounded-[8px] cursor-pointer w-full h-[200px] object-fill"
        />
      </div>
      <div className="flex flex-col gap-[10px] text-black">
        <h1 title={title} className="text-2xl font-bold text-ellipsis line-clamp-1">{title}</h1>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-1 font-medium text-gray-400">
            <MdPlace />
            <p>{locationName}</p>
          </div>
          <div className="text-sm text-[#5143d9]">
            {continent ? <span>#{continent}</span> : <></>}

            {country ? <span> - #{country}</span> : <></>}
            {/* <span>#{continent}</span>
            <span>#{country}</span> */}
          </div>
          <p title={description} className="text-sm font-medium text-ellipsis leading-[1.5rem] h-[3rem] overflow-hidden whitespace-nowrap">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
