/* eslint-disable react/prop-types */
import { Avatar, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const UserJoinTripAvatarGroup = ({ topicDetail }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const userJoinTrip = topicDetail.userJoinTrip;

  const userJoinTripFilter = userJoinTrip.filter(
    (user) => user.status === "accept"
  );

  const numberOfUserJoin = userJoinTripFilter.length;
  if (numberOfUserJoin === 0) {
    return <div className="ml-[5px]">None</div>;
  }

  const renderUserJoinTripAvatar = userJoinTripFilter.map((user) => (
    <Avatar key={user.userId._id} size={40} src={user.userId.avatar} />
  ));

  return (
    <>
      <div className="inline-block ml-[5px] cursor-pointer" onClick={showModal}>
        <Avatar.Group
          maxCount={5}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {renderUserJoinTripAvatar}
        </Avatar.Group>
      </div>
      <Modal
        title={
          <div className="flex gap-1">
            <span className="text-[#5143d9]">{numberOfUserJoin}</span>
            TripMate(s) joined this trip
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="grid grid-cols-2 gap-2">
          {userJoinTrip.map((user) => (
            <div
              key={user.userId._id}
              className="flex items-center gap-3 mb-2 cursor-pointer border-2 rounded-lg p-2"
              onClick={() => navigate(`/user/${user.userId._id}`)}
            >
              <Avatar size={40} src={user.userId.avatar} />
              <span className="font-bold">{user.userId.fullName}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default UserJoinTripAvatarGroup;
