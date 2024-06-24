/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

import { getUsersComment } from "../../../services/comment";
import CommentRender from "../CommentRender";
import CommentTextArea from "../CommentTextArea";

// eslint-disable-next-line react/prop-types
const CommentModal = ({ iconSize, iconStyle, topic }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersComment, setUsersComment] = useState([]);

  useEffect(() => {
      const fetchDataUsersComment = async () => {
        try {
          const response = await getUsersComment(topic._id);
          setUsersComment(response.data.usersComment);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataUsersComment();
    }, [topic._id]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addUserComment = (newUsersComment) => {
    setUsersComment(newUsersComment)
  }

  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-3" onClick={showModal}>
        <BiSolidMessageSquareDetail
          size={iconSize}
          style={iconStyle}
          className="hover:text-[#5143d9]"
        />
        <p className="w-2">{usersComment.length}</p>
      </button>
      <Modal
        title="Comments"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{
          top: 5,
        }}
      >
        <div className="comment-container">
          <CommentRender usersComment={usersComment} />
          <CommentTextArea topic={topic} addUserComment={addUserComment} />
        </div>
      </Modal>
    </div>
  );
};

export default CommentModal;
