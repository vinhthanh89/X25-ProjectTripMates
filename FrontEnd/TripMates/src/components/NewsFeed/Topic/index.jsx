/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
import CommentModal from "../../Comment/CommentModal";
import TopicReact from "./TopicReact";
import TopicSaved from "./TopicSaved";
import { calculateDifferenceDays } from "../../../utils/calculateDifferenceDays";

const Topic = ({ topic }) => {
  const {
    _id,
    thumbnail,
    description,
    title,
    userCreated,
    location,
    createdAt,
  } = topic;
  const { locationName, continent, country, locationThumbnail } = location;

  const daysDifference = calculateDifferenceDays(createdAt);

  return (
    <div className="flex flex-col gap-[0.5rem] rounded-lg bg-white px-[1rem] py-[1.5rem] ">
      <Link to={`/topic/${_id}`}>
        <img
          src={thumbnail ? thumbnail : locationThumbnail}
          alt={locationName}
          className="rounded-[8px] cursor-pointer w-full h-[200px] object-cover"
        />
      </Link>

      <div className="flex justify-between pt-[1rem]">
        <Link
          to={`/user/${userCreated._id}`}
          className="user flex items-center gap-3 cursor-pointer"
        >
          <div className="w-[3rem] h-[3rem]">
            <img
              src={userCreated.avatar}
              className="w-full h-full object-cover rounded-full border"
            />
          </div>
          <div>
            <p className="text-base font-bold">{userCreated.fullName}</p>
            <div className="flex items-center text-gray-400 text-xs">
              <MdPlace size={15} />
              <div className="flex gap-1">
                <p>{locationName}</p>
                <span>|</span>
                <p>{daysDifference}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="reactCmt flex gap-3 items-center text-[#545454] font-medium text-sm">
          <TopicReact topic={topic} />
          <TopicSaved topic={topic} />

          <CommentModal topic={topic} />
        </div>
      </div>
      {/* <UserJoinTripAvatarGroup topicDetail={topic} /> */}
      {/* <div className="avatar-group -space-x-3">
        <div className="avatar w-9 border-white">
          <div className="w-full rounded-full">
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-fill"
            />
          </div>
        </div>
        <div className="avatar w-9 border-white">
          <div className="w-full rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-full object-fill"
            />
          </div>
        </div>
        <div className="avatar placeholder w-9 border-white">
          <div className="w-full bg-[#f2f2f2] border-transparent text-[0.7rem]">
            <span>+2</span>
          </div>
        </div>
      </div> */}

      <div className=" flex flex-col gap-[0.5rem]">
        <div className="text-sm text-[#5143d9]">
          {continent ? <span>#{continent}</span> : <></>}
          {country ? <span> - #{country}</span> : <></>}
        </div>
        <div>
          <Link
            to={`/topic/${_id}`}
            title={title}
            className="text-2xl font-bold text-ellipsis line-clamp-1 cursor-pointer"
          >
            {title}
          </Link>

          <p
            title={description}
            className="text-[grey] font-medium line-clamp-2 h-[3rem] mt-[10px]"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
