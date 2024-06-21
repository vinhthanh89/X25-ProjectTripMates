import { Modal } from "antd";
import { MdOutlineClose } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const ModalShowImg = ({ isModalOpen, handleCancel, img }) => {
  return (
    <Modal
      open={isModalOpen}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      onCancel={handleCancel}
      className="modal-topic-thumbnail"
      width="700px"
      style={{
        top: 60,
      }}
      closable={true}
      closeIcon={
        <div className=" text-black bg-[lightgray] text-[30px] bg-opacity-0">
          <MdOutlineClose />
        </div>
      }
    >
      {img}
    </Modal>
  );
};

export default ModalShowImg;
