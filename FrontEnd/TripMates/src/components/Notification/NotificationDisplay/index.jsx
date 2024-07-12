/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import { updateIsRead } from "../../../services/notification";
import InviteNotificationButtons from "../InviteNotificationButtons";

const NotificationDisplay = ({ notify, handleSetNotify }) => {
  const navigate = useNavigate();
  const [isRead, setIsRead] = useState(notify.isRead);
  const { interactUserId, topicId, interaction } = notify;

  const handleSetIsRead = async () => {
    try {
      const response = await updateIsRead(notify._id);
      console.log(response);
      handleSetNotify(response.data.notifications);
      setIsRead(true);
      navigate(`/topic/${topicId._id}`);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div
        onClick={handleSetIsRead}
        className={`w-[400px] p-[10px] flex items-center ${
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
          <div>
            <span className="font-bold text-[16px]">
              {interactUserId?.fullName}
            </span>
            {(interaction === "react" && (
              <span className="text-[16px]"> just like your topic </span>
            )) ||
              (interaction === "comment" && (
                <span className="text-[16px]">
                  {" "}
                  just commented on your topic{" "}
                </span>
              )) ||
              (interaction === "invite" && (
                <span className="text-[16px]"> invite you join the trip </span>
              ))}
            <span className="text-[16px] font-semibold">
              "{topicId?.title}"
            </span>
          </div>
        </div>
      </div>
      {interaction === "invite" && <InviteNotificationButtons notify={notify} />}
    </>
  );
};

export default NotificationDisplay;
