/* eslint-disable react/prop-types */
import { useState } from "react";
import {useNavigate} from 'react-router'
import { updateIsRead } from "../../../services/notification";

const NotificationDisplay = ({ notify , handleSetNotify }) => {
  const navigate = useNavigate()
  const [isRead , setIsRead] = useState(notify.isRead)
  const { interactUserId} = notify;

  const handleClickItems = async () => {
    try {
      const response = await updateIsRead(notify._id)
      console.log(response);
      handleSetNotify(response.data.notifications)
      setIsRead(true)
      navigate(`/topic/${notify.topicId}`)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div
    onClick={handleClickItems}
      className={`w-[400px] pl-[10px] py-[5px] flex items-center ${
        isRead ? "" : "bg-[lightgray] bg-opacity-55"
      }`}
    >
      <div className="w-[50px] h-[50px] mr-[8px]">
        <img
          className="w-full h-full object-cover rounded-[8px]"
          src={interactUserId?.avatar}
        />
      </div>
      <div className="flex-1">
        <p>
          <span className="font-bold text-[16px]">
            {interactUserId?.fullName}
          </span>

          {(notify.interaction === "comment" && (
            <span className="text-[16px]"> just commented on your topic </span>
          )) ||
            (notify.interaction === "react" && (
              <span className="text-[16px]"> just like your topic </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default NotificationDisplay;
