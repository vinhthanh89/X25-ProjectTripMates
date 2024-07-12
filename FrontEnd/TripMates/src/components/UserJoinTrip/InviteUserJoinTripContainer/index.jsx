/* eslint-disable react/prop-types */
import { useState } from "react";
import RenderPickUserTag from "../RenderPickUserTag";
import RenderSearchUserJoinTrip from "../RenderSearchUserJoinTrip";
import toast from "react-hot-toast";

import { addInviteNotification } from "../../../services/notification";
import { addUserJoinTrip } from "../../../services/userJoinTrip";

const InviteUserJoinTripContainer = ({
  handleCancel,
  topicId,
  handleSetTopicDetail,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [pickedUser, setPickedUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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
      await addInviteNotification(topicId, pickedUser);
      handleSetTopicDetail(response.data.findTopic);
      setPickedUser([]);
      toast.success("User invited!");
      handleCancel();
    } catch (error) {
      const errorResponse = error.response.data.error;
      if (errorResponse === "users exist") {
        const errorMessage = error.response.data.errorMessage;
        setErrorMessage(errorMessage);
      }
    }
  };

  return (
    <div className="px-[10px] pb-[20px]">
      <div>
        <div className="pb-[5px] pt-[15px] mb-[10px] flex w-full flex-wrap gap-[5px]">
          <RenderPickUserTag
            pickedUser={pickedUser}
            removePickUser={removePickUser}
          />
        </div>
        <input
          name=""
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Enter a username"
          type="text"
          className="input border-[#d2d2d2] hover:border-[#4096ff] focus:border-[#4096ff] bg-white font-bold w-full transition-colors duration-300"
        />
        {errorMessage && <p className="mt-[15px] text-[red]">{errorMessage}</p>}
      </div>
      <div className="mt-[5px]">
        <RenderSearchUserJoinTrip
          searchInput={searchInput}
          pickUserJoinTrip={pickUserJoinTrip}
        />
      </div>
      <div className="flex justify-end gap-5 mt-[20px]">
        <button
          onClick={handleCancelPicked}
          className="hover:opacity-70 font-bold bg-red-500 text-white rounded-lg p-[10px]"
        >
          Cancel
        </button>
        <button
          onClick={handleAddUserJoinTrip}
          className="hover:opacity-70 font-bold bg-[#5143d9] text-white rounded-lg p-[10px]"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default InviteUserJoinTripContainer;
