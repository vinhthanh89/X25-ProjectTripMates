/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { deleteTopic } from "../../../services/topic";

const ModalDeleteTopic = ({topic}) => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
        // eslint-disable-next-line react/prop-types
        const response = await deleteTopic(topic._id)
        console.log(response);
        setIsModalOpen(false);
    } catch (error) {
        console.log(error);
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
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
};

export default ModalDeleteTopic;
