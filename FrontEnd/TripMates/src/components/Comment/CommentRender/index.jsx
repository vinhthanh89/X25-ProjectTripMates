/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import CommentDisplay from "../CommentDisplay";

const CommentRender = ({ usersComment }) => {

  useEffect(() => {
    scroll.scrollToBottom({
      containerId: "comments-container",
      duration: 100,
      delay: 0,
      smooth: true,
      isDynamic: true,
    });
  }, [usersComment]);

  const renderComments = usersComment.map((userComment) => {
    return (
      <div key={userComment._id}>
        <CommentDisplay userComment={userComment} />
      </div>
    );
  });

  return (
    <div
      id="comments-container"
      className="flex flex-col gap-[10px] pt-[5px] pb-[10px] max-h-[380px] overflow-y-auto mb-[5px]"
    >
      {renderComments}
    </div>
  );
};

export default CommentRender;
