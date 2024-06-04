/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router";

const Topic = ({ topic }) => {
  const navigate = useNavigate();
  const {
    _id,
    thumbnail,
    description,
    country,
    continent,
    title,
  } = topic;

  return (
    <>
      <div
        className="topic flex gap-[10px] rounded-[15px] border-2"
        onClick={() => navigate(`/topic/${_id}`)}
          >
              
        <div className="bgImage">
          <img
            src={thumbnail}
            alt={country}
            className="rounded-[15px] cursor-pointer w-[250px] h-[150px] object-fill"
          />
        </div>
        <div className="info flex flex-col gap-2 p-2">
          <h1 className="text-2xl font-bold">{title}</h1>{" "}
          <div className="flex flex-col gap-[5px]">
            {" "}
            <div className="flex items-center gap-1 font-medium text-gray-400">
              <MdPlace />
              <p>{country}</p>{" "}
            </div>{" "}
            <div className="text-sm text-[#5143d9]">
              <span>#{continent}</span>
              <span>#{country}</span>{" "}
            </div>
            <p className="text-sm font-medium">{description}</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
