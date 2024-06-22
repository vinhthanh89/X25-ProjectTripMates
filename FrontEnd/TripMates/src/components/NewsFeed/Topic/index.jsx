/* eslint-disable react/prop-types */
import { IoIosHeart } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router";
import CommentModal from "./CommentModal";
import { useEffect, useState } from "react";
import { getReactByTopicId } from "../../../services/react";
import TopicReact from "./TopicReact";

const Topic = ({ topic }) => {
  const navigate = useNavigate();
  const iconSize = 25;
  const iconStyle = {
    background: "transparent",
  };

  const { _id, thumbnail, description, title, userCreated, location } = topic;
  const { locationName, continent, country, locationThumbnail } = location;

  

  
  return (
    <div className="flex flex-col gap-[0.5rem] rounded-lg bg-white px-[1rem] py-[1.5rem] ">
      <div>
        <img
          src={thumbnail ? thumbnail : locationThumbnail}
          alt={locationName}
          className="rounded-[8px] cursor-pointer w-full h-[200px] object-fill"
          onClick={() => navigate(`/topic/${_id}`)}
        />
        <div className="flex justify-between pt-[1rem]">
          <div
            className="user flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(`/user/${userCreated._id}`)}
          >
            <div className="w-[3rem] h-[3rem]">
              <img
                src={userCreated.avatar}
                className="w-full h-full object-cover rounded-full border"
              />
            </div>
            <div>
              <p className="text-base font-medium">{userCreated.fullName}</p>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <MdPlace size={15} />
                <p>{locationName}</p>
              </div>
            </div>
          </div>
          <div className="reactCmt flex gap-5 text-[#545454] font-medium text-sm">
            <TopicReact topic={topic} />
            <CommentModal iconSize={iconSize} iconStyle={iconStyle} />
          </div>
        </div>
      </div>

      <div className="avatar-group -space-x-3">
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
      </div>

      <div className=" flex flex-col gap-[0.5rem]">
        <div className="text-sm text-[#5143d9]">
          {continent ? <span>#{continent}</span> : <></>}
          {country ? <span> - #{country}</span> : <></>}
        </div>
        <div>
          <h1
            onClick={() => navigate(`/topic/${_id}`)}
            title={title}
            className="text-2xl font-bold text-ellipsis line-clamp-1 cursor-pointer"
          >
            {title}
          </h1>

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
