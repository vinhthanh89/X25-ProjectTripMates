/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import { updateIsRead } from "../../../services/notification";
import {
  handleUserAcceptJoinTrip,
  handleUserDeclineJoinTrip,
} from "../../../services/userJoinTrip";
import { useSelector } from "react-redux";

const NotificationDisplay = ({ notify, handleSetNotify }) => {
  const userLogin = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [isRead, setIsRead] = useState(notify.isRead);
  const [isPending, setIsPending] = useState(true);
  const { interactUserId, topicId } = notify;

  const handleClickItems = async () => {
    try {
      const response = await updateIsRead(notify._id);
      handleSetNotify(response.data.notifications);
      setIsRead(true);
      navigate(`/topic/${notify.topicId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccpet = async () => {
    try {
      const response = await handleUserAcceptJoinTrip(topicId, {
        userId: userLogin._id,
      });
      console.log(response);
      setIsPending(false)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await handleUserDeclineJoinTrip(topicId, {
        userId: userLogin._id,
      });
      console.log(response);
      setIsPending(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        onClick={handleClickItems}
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
          <p>
            {(notify.interaction === "comment" && (
              <>
                <span className="font-bold text-[16px]">
                  {interactUserId?.fullName}
                </span>
                <span className="text-[16px]">
                  {" "}
                  just commented on your topic{" "}
                </span>
              </>
            )) ||
              (notify.interaction === "react" && (
                <>
                  <span className="font-bold text-[16px]">
                    {interactUserId?.fullName}
                  </span>
                  <span className="text-[16px]"> just like your topic </span>
                </>
              )) ||
              (notify.interaction === "invite" && (
                <>
                  <span className="font-bold text-[16px]">
                    {interactUserId?.fullName}
                  </span>
                  <span className="text-[16px]">
                    {" "}
                    invite you join the trip{" "}
                  </span>
                </>
              ))}
          </p>
        </div>
      </div>
      {notify.interaction === "invite" && isPending && (
        <div className="flex justify-end gap-[10px] py-[5px]">
          <button
            onClick={handleAccpet}
            className="px-[10px] py-[5px] font-bold hover:bg-opacity-80 bg-[#5143d9] text-[white] rounded-[8px]"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-[10px] py-[5px] font-bold hover:bg-opacity-80 bg-[lightgray] rounded-[8px] "
          >
            Decline
          </button>
        </div>
      )}
    </>
  );
};

export default NotificationDisplay;
