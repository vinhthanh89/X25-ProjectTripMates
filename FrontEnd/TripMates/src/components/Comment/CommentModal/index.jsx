/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

import { getUsersComment } from "../../../services/comment";
import CommentRender from "../CommentRender";
import CommentTextArea from "../CommentTextArea";

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
    setUsersComment(newUsersComment);
  };

  const numberOfComment = usersComment.length;
  const displayNumberOfComment =
    numberOfComment > 100 ? "100+" : numberOfComment;

  return (
    <div className="flex items-center">
      <button className="flex items-center gap-1" onClick={showModal}>
        <BiSolidMessageSquareDetail
          size={iconSize}
          style={iconStyle}
          className="hover:text-[#5143d9]"
        />
        <p className="w-6">{displayNumberOfComment}</p>
      </button>
      <Modal
        title={
          <div className="flex gap-1">
            Comment
            <span>({displayNumberOfComment})</span>
          </div>
        }
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
