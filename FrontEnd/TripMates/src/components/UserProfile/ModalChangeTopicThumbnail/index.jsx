/* eslint-disable react/prop-types */

import "./style.css";
import { Button, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { uploadTopicThumbnail } from "../../../services/topic";

// eslint-disable-next-line react/prop-types
const ModalChangeTopicThumbnail = ({ topic }) => {
  const userLogin = useSelector((state) => state.user.user);
  const { thumbnail, location, userCreated } = topic;
  const { locationThumbnail, country } = location;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAvatar, setEditAvatar] = useState(
    thumbnail ? thumbnail : locationThumbnail
  );
  const [uploadFile, setUploadFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      editAvatar && URL.revokeObjectURL(editAvatar.preview);
    };
  }, [editAvatar]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("thumbnail", uploadFile);
      console.log(uploadFile);
      const uploadFileSize = uploadFile.size;
      if (uploadFileSize > 5000000) {
        alert(
          "Can't upload file larger than 5MB , please select another picture"
        );
      }
      await uploadTopicThumbnail(topic._id, formData);

      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditAvatar(thumbnail ? thumbnail : locationThumbnail);
  };

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    setUploadFile(file);
    file.preview = URL.createObjectURL(file);
    setEditAvatar(file.preview);
  };

  return (
    <>
      <img
        onClick={showModal}
        src={thumbnail ? thumbnail : locationThumbnail}
        alt={country}
        className="rounded-l-[15px] cursor-pointer w-full h-full object-fill"
      />
      <Modal
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
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form onFinish={onFinish}>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-full h-[400px] object-fill"
              src={editAvatar}
              alt={country}
            />
          </div>
          <div
            className={`${userLogin._id === userCreated._id ? "" : "hidden"}`}
          >
            <div className="py-[20px] bg-[none] flex justify-center items-center">
              <div>
                <div className="hidden">
                  <input
                    onChange={handlePreviewAvatar}
                    type="file"
                    id="upload"
                    name="avatar"
                  />
                </div>

                <label htmlFor="upload">
                  <div className="px-[15px] py-[5px]  cursor-pointer rounded-[8px] bg-[#5143d9] hover:opacity-90 text-[white] mr-[20px]">
                    Choose Image
                  </div>
                </label>
              </div>
              <Button
                htmlType="submit"
                style={{
                  background: "blue",
                  border: "none",
                }}
                loading={loading}
                className="hover:opacity-80 overflow-hidden"
              >
                <p className="text-white">Save changes</p>
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalChangeTopicThumbnail;