/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CommentThreeDotsDropDown from "../CommentThreeDotsDropDown";

const CommentDisplay = ({ userComment , topicId }) => {
  const userLogin = useSelector((state) => state.user.user);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const commentRef = useRef(null);
  const navigate = useNavigate();
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (commentRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(commentRef.current).lineHeight,
        10
      );
      const maxLinesHeight = lineHeight * 3;
      if (commentRef.current.scrollHeight > maxLinesHeight) {
        setIsOverflowing(true);
      }
    }
  }, []);

  const { userId, comment } = userComment;

  return (
    <div className="flex gap-2 group">
      <div
        className="cursor-pointer flex-none"
        onClick={() => navigate(`/user/${userId._id}`)}
      >
        <img
          className="w-[35px] h-[35px] rounded-full object-cover"
          src={userId.avatar}
        />
      </div>
      <div>
        <div className="py-[8px] px-[10px] inline-block rounded-[8px] bg-[#dfdfdf] bg-opacity-60">
          <div
            onClick={() => navigate(`/user/${userId._id}`)}
            className="font-black cursor-pointer"
          >
            {userId.fullName}
          </div>
          <div
            ref={commentRef}
            className={`font-normal text-[15px] ${
              isExpanded ? "" : "line-clamp-3"
            } `}
          >
            {comment}
          </div>
          {isOverflowing && !isExpanded && (
            <div
              className="cursor-pointer text-blue-500 float-right"
              onClick={toggleExpanded}
            >
              See more
            </div>
          )}
          {isExpanded && (
            <div
              className="cursor-pointer text-blue-500 float-right"
              onClick={toggleExpanded}
            >
              Show less
            </div>
          )}
        </div>
      </div>
      {userLogin._id === userId._id && (
        <div className="my-auto invisible cursor-pointer group-hover:visible">
          <CommentThreeDotsDropDown userComment={userComment} topicId={topicId} />
        </div>
      )}
    </div>
  );
};

export default CommentDisplay;
