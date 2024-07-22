/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { deleteTopic } from "../../../services/topic";

const ModalDeleteTopic = ({ topic }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      // eslint-disable-next-line react/prop-types
      setLoading(true);
      await deleteTopic(topic._id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={showModal}
        className="flex justify-start items-center gap-2 text-red-500"
      >
        <span className="font-semibold">Delete topic</span>
        <MdDelete className="text-[16px] " />
      </div>
      <Modal
        title="Do you want to delete this topic?"
        open={isModalOpen}
        footer={null}
        closeIcon={null}
        onCancel={handleCancel}
      >
        <div className="flex justify-end">
          <Button
            disabled={loading}
            onClick={handleCancel}
            className="font-semibold px-[15px] rounded-[7px] bg-[lightgray] hover:bg-opacity-75"
          >
            Cancel
          </Button>
          <Button
            loading={loading}
            onClick={handleOk}
            type="primary"
            danger
            className="font-semibold ml-[15px]"
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDeleteTopic;
