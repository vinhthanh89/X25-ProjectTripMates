import { Modal, Tag } from "antd";
import { useState } from "react";
import RenderSearchUserJoinTrip from "../RenderSearchUserJoinTrip";
import RenderPickUserTag from "../RenderPickUserTag";

const InviteUserJoinTripButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [pickedUser, setPickedUser] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPickedUser([])
  };

  const onChangeSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const pickUserJoinTrip = (user) => {
    setPickedUser((prev) => [...prev, user]);
    setSearchInput('')
  };

  const removePickUser = (userEmail) => {
    setPickedUser((prev) => prev.filter((item) => item.email !== userEmail));
  };  

  return (
    <div>
      <button
        onClick={showModal}
        className="hover:opacity-70 font-bold bg-[#5143d9] text-white p-3 rounded-xl"
      >
        Invite a trip mates
      </button>
      <Modal
        title="Invite a trip mates"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div className="py-[5px] mb-[10px] flex w-full flex-wrap gap-[5px]">
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
        <div>
          <RenderSearchUserJoinTrip
            searchInput={searchInput}
            pickUserJoinTrip={pickUserJoinTrip}
          />
        </div>
        <div className="flex justify-end mt-[20px]">
          <button
            onClick={handleCancel}
            className="hover:opacity-70 font-bold bg-[lightgray] text-black rounded-[8px] py-[7px] px-[10px]"
          >
            Cancle
          </button>
          <button className="hover:opacity-70 font-bold bg-[#5143d9] text-white rounded-[8px] py-[7px] px-[10px] ml-[15px]">
            Invite
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default InviteUserJoinTripButton;
