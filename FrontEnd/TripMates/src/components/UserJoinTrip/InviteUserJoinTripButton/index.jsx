/* eslint-disable react/prop-types */
import { ConfigProvider, Modal } from "antd";
import { useState } from "react";
import InviteUserJoinTripContainer from "../InviteUserJoinTripContainer";
import UserInvitedList from "../UserInvitedList";

const InviteUserJoinTripButton = ({topicDetail , handleSetTopicDetail}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("search");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="hover:opacity-70 font-bold bg-[#5143d9] text-white p-3 rounded-xl"
      >
        Invite a trip mates
      </button>
      <ConfigProvider
  theme={{
    components: {
      Modal: {
        contentBg : "lightGray",
        headerBg : 'lighGray',
        titleFontSize :   18
      },
    },
  }}
>

      <Modal
        title='Invite a tripmates'
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closeIcon={null}
      >
        <div>
          <div className="flex justify-around  bg-[lightgray]">
            <button
              className={`p-2 w-[50%] ${
                activeTab === "search" ? "rounded-t-[10px]  bg-[white] underline" : ""
              }`}
              onClick={() => handleTabClick("search")}
            >
              <span className="text-[18px]">Invite</span>
            </button>
            <button
              className={`p-2 w-[50%] ${
                activeTab === "list" ? "rounded-t-[10px] bg-[white] underline" : ""
              }`}
              onClick={() => handleTabClick("list")}
            >
              <span className="text-[18px]">List</span>
            </button>
          </div>
          {activeTab === "search" && (
            <>
              <InviteUserJoinTripContainer topicId={topicDetail._id} handleCancel={handleCancel} handleSetTopicDetail={handleSetTopicDetail} />
            </>
          ) || activeTab === 'list' && (
            <>
              <UserInvitedList userJoinTrip={topicDetail.userJoinTrip} />
            </>
          )}
        </div>
      </Modal>
</ConfigProvider>

    </div>
  );
};

export default InviteUserJoinTripButton;
