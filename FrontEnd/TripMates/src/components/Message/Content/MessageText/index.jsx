/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

const MessageText = ({ chat }) => {
  const userLogin = useSelector((state) => state.user.user);
  const { userAvatar, chatText, userId } = chat;

  const isUserLogin = userLogin._id === userId;

  return (
    <div className={`flex gap-[10px] ${isUserLogin ? "flex-row-reverse" : ""}`}>
      <div className="cursor-pointer w-[40px] h-[40px]">
        <img
          className="w-[35px] h-[35px] rounded-full object-cover flex-row-reverse"
          src={userAvatar}
        />
      </div>
      <div className="max-w-[90%]">
        <div
          className={`py-[8px] inline-block px-[10px] rounded-[8px] ${
            isUserLogin ? "bg-[#5143d9]" : "bg-[#dfdfdf] "
          }  bg-opacity-60`}
        >
          <span>{chatText}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageText;
