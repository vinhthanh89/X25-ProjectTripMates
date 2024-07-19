/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useState } from "react";
import { deleteComment } from "../../../services/comment";

const DeleteComment = ({ userComment, topicId, handleSetUsersComment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      const response = await deleteComment(topicId, userComment._id);
      handleSetUsersComment(response.data.usersComment);
    } catch (error) {
      console.log(error);
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>Delete Comment</div>
      <Modal
        title="Do you want to delete this comment?"
        open={isModalOpen}
        onCancel={handleCancel}
        closeIcon={null}
        footer={null}
      >
        <div className="flex justify-end">
          <button
            disabled={loading}
            onClick={handleCancel}
            type="button"
            className="font-semibold px-[15px] rounded-[7px] bg-[lightgray] hover:bg-opacity-75"
          >
            Cancel
          </button>
          <Button
            loading={loading}
            onClick={handleConfirmDelete}
            type="primary"
            danger
            className="font-semibold ml-[15px]"
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteComment;
