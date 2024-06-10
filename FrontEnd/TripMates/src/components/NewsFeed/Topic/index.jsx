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

  const {locationName , locationDependent , locationThumbnail} = location

  return (
    <div className="flex flex-col gap-y-[1.2rem] rounded-lg shadow-xl cursor-pointer p-[2rem]">
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
          alt={location.location}
          className="rounded-[12px] cursor-pointer w-full h-[270px] object-fill"
        />
      </div>
      <div className="flex flex-col gap-[10px] text-black">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-1 font-medium text-gray-400">
            <MdPlace />
            <p>{locationName}</p>
          </div>
          <div className="text-sm text-[#5143d9]">
            {locationDependent.continent ? <span>#{location.locationDependent.continent}</span> : <></>}
            {locationDependent.country ? <span> - #{locationDependent.country}</span> : <></>}
            {/* <span>#{continent}</span>
            <span>#{country}</span> */}
          </div>
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
