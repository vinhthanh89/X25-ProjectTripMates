import { useState } from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { Modal } from "antd";
import CommentDisplay from "../CommentDisplay";

// eslint-disable-next-line react/prop-types
const CommentModal = ({ iconSize, iconStyle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const addComment = (delta) => {
    setCommentCount(commentCount + delta);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-3" onClick={showModal}>
        <BiSolidMessageSquareDetail
          size={iconSize}
          style={iconStyle}
          className="hover:text-[#5143d9]"
        />
        <p className="w-2">{commentCount}</p>
      </button>
      <Modal
        title="Comments"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} 
      >
        <div className="comment-container">
          <CommentDisplay addComment={addComment} />
        </div>
      </Modal>
    </div>
  );
};

export default CommentModal;
