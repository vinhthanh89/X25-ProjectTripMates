import { Input, Modal, Space, Button } from "antd";
import { useState } from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useNavigate } from "react-router";
import CommentDisplay from "../CommentDisplay";

const CommentModal = ({ iconSize, iconStyle, user }) => {
  const navigate = useNavigate();
  const fakeUser = {
    fullname: <p>User</p>,
    avatar: (
      <img
        src="./public/profile-user.png"
        className="w-[2rem] h-[2rem] object-cover rounded-full border"
        alt="User Avatar"
      />
    ),
  };

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

  return (
    <div className="flex items-center gap-3 ">
      <button className="flex items-center gap-3" onClick={showModal}>
        <BiSolidMessageSquareDetail
          size={iconSize}
          style={iconStyle}
          className="hover:text-[#5143d9]"
        />
        <p>500+</p>
      </button>
      <Modal
        title="Comments"
        open={isModalOpen}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className="user flex items-center gap-3">
            <Space.Compact
              style={{
                width: "100%",
                height: "3rem",
              }}
            >
              <Input
                prefix={fakeUser.avatar}
                placeholder="What's in your mind?"
              />
              <Button className="font-bold bg-[#5143d9] text-white rounded-xl h-full">
                Send
              </Button>
            </Space.Compact>
          </div>
          <div className="comment-container">
            <CommentDisplay />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CommentModal;
