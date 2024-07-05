/* eslint-disable react/prop-types */
import { useState } from "react";
import RenderPickUserTag from "../RenderPickUserTag";
import RenderSearchUserJoinTrip from "../RenderSearchUserJoinTrip";

import { addInviteNotification, addNotification } from "../../../services/notification";
import { addUserJoinTrip } from "../../../services/userJoinTrip";

const InviteUserJoinTripContainer = ({ handleCancel, topicId , handleSetTopicDetail }) => {
  const [searchInput, setSearchInput] = useState("");
  const [pickedUser, setPickedUser] = useState([]);

  const onChangeSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const pickUserJoinTrip = (user) => {
    setPickedUser((prev) => [...prev, user]);
    setSearchInput("");
  };

  const removePickUser = (userEmail) => {
    setPickedUser((prev) => prev.filter((item) => item.email !== userEmail));
  };

  const handleCancelPicked = () => {
    setPickedUser([]);
    handleCancel();
  };

  const handleAddUserJoinTrip = async () => {
    try {
      const response = await addUserJoinTrip(topicId, pickedUser);
      await addInviteNotification(topicId , pickedUser)
      handleSetTopicDetail(response.data.findTopic)
      setPickedUser([]);
      handleCancel();
    } catch (error) {
      console.log(error);
      const errorResponse = error.response.data.error;
      if (errorResponse === "users exist") {
        const errorMessage = error.response.data.errorMessage;
        alert(errorMessage);
      }
    }
  };

  return (
    <div className="bg-white px-[10px] pb-[20px]">
      <div>
        <div className="pb-[5px] pt-[15px] mb-[10px] flex w-full flex-wrap gap-[5px]">
          <RenderPickUserTag
            pickedUser={pickedUser}
            removePickUser={removePickUser}
          />
        </div>
        <input
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Enter a username"
          type="text"
          className="input border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-full transition-colors duration-300"
        />
      </div>
      <div className="mt-[5px]">
        <RenderSearchUserJoinTrip
          searchInput={searchInput}
          pickUserJoinTrip={pickUserJoinTrip}
        />
      </div>
      <div className="flex justify-end mt-[20px]">
        <button
          onClick={handleCancelPicked}
          className="hover:opacity-70 font-bold bg-[lightgray] text-black rounded-[8px] py-[7px] px-[10px]"
        >
          Cancle
        </button>
        <button
          onClick={handleAddUserJoinTrip}
          className="hover:opacity-70 font-bold bg-[#5143d9] text-white rounded-[8px] py-[7px] px-[10px] ml-[15px]"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default InviteUserJoinTripContainer;
