/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router";

const Topic = ({ topic }) => {
  const navigate = useNavigate();
  const { _id, thumbnail, description, title, location } = topic;

  const { continent, country, locationThumbnail } = location;

  return (
    <>
      <div
        className="topic flex gap-[10px] rounded border-2"
        onClick={() => navigate(`/topic/${_id}`)}
      >
        <div className="bgImage">
          <img
            src={thumbnail ? thumbnail : locationThumbnail}
            alt={country}
            className="rounded-l-[15px] cursor-pointer w-[300px] h-[180px] object-fill"
          />
        </div>
        <div className="info flex flex-col gap-2 p-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-1 font-medium text-gray-400 text-base">
              <MdPlace />
              <p>{country}</p>
            </div>
            <div className="text-base text-[#5143d9] flex gap-2">
              <span>#{continent}</span>
              <span>#{country}</span>
            </div>
            <p className="text-sm font-light">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
