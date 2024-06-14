/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import { useNavigate } from "react-router";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import { useState } from "react";
import CommentModal from "./Components/CommentModal";
import { useSelector } from "react-redux";

const Topic = ({ topic }) => {
  const iconSize = 25;
  const iconStyle = {
    background: "transparent",
  };
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const { _id, thumbnail, description, title, userCreated, location } = topic;
  const { locationName, continent, country, locationThumbnail } = location;

  return (
    <div className="flex flex-col gap-[1rem] rounded-lg bg-white px-[1rem] py-[1.5rem]">
      <div>
        {/* <div className="flex justify-between border-b-2 pb-[1rem]">
          <div className="user flex items-center gap-3">
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
          <div className="function flex gap-5 text-[#545454] font-medium text-sm">
            <span className="flex items-center gap-3 ">
              <IoIosHeart size={iconSize} style={iconStyle} />
              <p>1000+</p>
            </span>
            <span className="flex items-center gap-3">
              <BiSolidMessageSquareDetail size={iconSize} style={iconStyle} />
              <p>500+</p>
            </span>
          </div>
        </div> */}
        <img
          src={thumbnail ? thumbnail : locationThumbnail}
          alt={locationName}
          className="rounded-[8px] cursor-pointer w-full h-[200px] object-fill"
          onClick={() => navigate(`/topic/${_id}`)}
        />
        <div className="flex justify-between pt-[1rem]">
          <div
            className="user flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(`/user/${user._id}`)}
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
          <div className="function flex gap-5 text-[#545454] font-medium text-sm">
            <button className="flex items-center gap-3 ">
              <IoIosHeart
                size={iconSize}
                style={iconStyle}
                className="hover:text-red-500"
              />
              <p>1000+</p>
            </button>
            <CommentModal iconSize={iconSize} iconStyle={iconStyle}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        {/* USER INFO AND REACT + COMMENTS */}
        {/* <div className="flex justify-between border-b-2 py-2">
          <div className="user flex items-center gap-3">
            <div className="w-[3rem] h-[3rem]">
              <img
                src={userCreated.avatar}
                className="w-full h-full object-cover rounded-full border"
              />
            </div>
            <div>
              <p className="text-base font-medium">{userCreated.fullName}</p>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <MdPlace size={15}/>
                <p>{locationName}</p>
              </div>
            </div>
          </div>
          <div className="function flex gap-5 text-[#545454] font-medium text-sm">
            <span className="flex items-center gap-3 ">
              <IoIosHeart size={iconSize} style={iconStyle} />
              <p>1000+</p>
            </span>
            <span className="flex items-center gap-3">
              <BiSolidMessageSquareDetail size={iconSize} style={iconStyle} />
              <p>500+</p>
            </span>
          </div>
        </div> */}
        {/* USER INFO AND REACT + COMMENTS */}
        <div className="text-sm text-[#5143d9]">
          {continent ? <span>#{continent}</span> : <></>}
          {country ? <span> - #{country}</span> : <></>}
          {/* <span>#{continent}</span>
            <span>#{country}</span> */}
        </div>
        <h1
          title={title}
          className="text-2xl font-bold text-ellipsis line-clamp-1"
        >
          {title}
        </h1>

        <p
          title={description}
          className="text-[grey] font-medium text-ellipsis leading-[1.5rem] h-[3rem] overflow-hidden whitespace-nowrap"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Topic;
