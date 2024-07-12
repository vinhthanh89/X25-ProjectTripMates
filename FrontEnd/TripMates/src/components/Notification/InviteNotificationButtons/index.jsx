/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  getUserJoinTripStatus,
  handleUserAcceptJoinTrip,
  handleUserDeclineJoinTrip,
} from "../../../services/userJoinTrip";
import { useSelector } from "react-redux";

const InviteNotificationButtons = ({ notify }) => {
  const userLogin = useSelector((state) => state.user.user);

  const { topicId} = notify;
  const [isPending, setIsPending] = useState(null);

  useEffect(() => {
    const checkUserJoinTripstatus = async () => {
      try {
        const response = await getUserJoinTripStatus(
          topicId._id,
          userLogin._id
        );
        setIsPending(response.data.userJoinTripStatus);
      } catch (error) {
        console.log(error);
      }
    };
    checkUserJoinTripstatus();
  }, [topicId, userLogin]);

  const handleAccpet = async () => {
    try {
      const response = await handleUserAcceptJoinTrip(topicId._id, {
        userId: userLogin._id,
      });
      console.log(response);
      setIsPending('accpet');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await handleUserDeclineJoinTrip(topicId._id, {
        userId: userLogin._id,
      });
      console.log(response);
      setIsPending('decline');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {isPending === 'pending' && ( <div className="flex justify-end gap-[10px] py-[5px]">
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
      </div>)}
     
    </>
  );
};

export default InviteNotificationButtons;
