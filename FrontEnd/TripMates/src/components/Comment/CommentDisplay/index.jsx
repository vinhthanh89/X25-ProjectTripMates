/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

  const CommentDisplay = ({ userComment }) => {
      const [isExpanded, setIsExpanded] = useState(false);
      const [isOverflowing, setIsOverflowing] = useState(false);
      const commentRef = useRef(null);

      const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
      };

      useEffect(() => {
        if (commentRef.current) {
          const lineHeight = parseInt(window.getComputedStyle(commentRef.current).lineHeight, 10);
          const maxLinesHeight = lineHeight * 3;
          if (commentRef.current.scrollHeight > maxLinesHeight) {
            setIsOverflowing(true);
          }
        }
      }, []);

    const { userId, comment } = userComment;

    return (
      <div className="flex">
        <div className="w-[40px]">
          <img
            className="w-[30px] h-[30px] rounded-full object-cover"
            src={userId.avatar}
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="py-[8px] px-[10px] inline-block rounded-[8px] bg-[#d9d9d9] bg-opacity-60">
            <div className="font-black cursor-pointer">{userId.fullName}</div>
            <div ref={commentRef} className={`font-normal text-[15px] ${isExpanded ? '' : 'line-clamp-3'} `}>{comment}</div>
            {isOverflowing && !isExpanded && (
            <div className="cursor-pointer text-blue-500 float-right" onClick={toggleExpanded}>
              See more
            </div>
          )}
          {isExpanded && (
            <div className="cursor-pointer text-blue-500 float-right" onClick={toggleExpanded}>
              Show less
            </div>
          )}
          </div>
          
        </div>
      </div>
    );
  };

export default CommentDisplay;
