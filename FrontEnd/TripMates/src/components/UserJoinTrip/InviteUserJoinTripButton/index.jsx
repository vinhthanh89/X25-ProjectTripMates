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
              contentBg: "white",
              titleFontSize: 18,
            },
          },
        }}
      >
        <Modal
          title="Invite a TripMate"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          closeIcon={null}
        >
          <div>
            <div className="flex justify-around border-b-2 py-2">
              <button
                className={`p-2 w-[50%] ${
                  activeTab === "search"
                    ? "rounded-lg bg-[#5143d9] text-white"
                    : ""
                }`}
                onClick={() => handleTabClick("search")}
              >
                <span className="text-lg ">Invite</span>
              </button>
              <button
                className={`p-2 w-[50%] ${
                  activeTab === "list"
                    ? "rounded-lg bg-[#5143d9] text-white"
                    : ""
                }`}
                onClick={() => handleTabClick("list")}
              >
                <span className="text-lg ">List</span>
              </button>
            </div>
            {(activeTab === "search" && (
              <>
                <InviteUserJoinTripContainer
                  topicId={topicDetail._id}
                  handleCancel={handleCancel}
                  handleSetTopicDetail={handleSetTopicDetail}
                />
              </>
            )) ||
              (activeTab === "list" && (
                <>
                  <UserInvitedList userJoinTrip={topicDetail.userJoinTrip} />
                </>
              ))}
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default InviteUserJoinTripButton;
