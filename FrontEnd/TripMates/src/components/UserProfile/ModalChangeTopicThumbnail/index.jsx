/* eslint-disable react/prop-types */

import { Button, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { uploadTopicThumbnail } from "../../../services/topic";
import { RiImageEditFill } from "react-icons/ri";
import "./style.css";

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
      const response = await uploadTopicThumbnail(topic._id, formData);
      setEditAvatar(response.data.topicUpdated.thumbnail)
      setLoading(false)
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
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
    <div>
        <div
        onClick={showModal}
        className="flex justify-end items-center gap-2 text-black"
      >
        <span className="font-semibold">Change Thumbnail</span>
        <RiImageEditFill className="text-[16px] " />
      </div>

      <Modal
        className="modal-topic-thumbnail bg-white"
        width="50rem"
        style={{                   
          borderRadius: "10px",
          top : 20
        }}
        closable={true}
        closeIcon={
          <div className=" text-black text-[30px]">
            <MdOutlineClose />
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form onFinish={onFinish}>
          <div className="flex flex-col justify-center items-center pt-[2rem]">
            <img
              className="w-[80%] h-[25rem] rounded object-fill"
              src={editAvatar}
              alt={country}
            />
          </div>
          <div
            className={`${userLogin._id === userCreated._id ? "" : "hidden"}`}
          >
            <div className="pt-[1rem] flex justify-center items-center">
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
                  <div className={`px-[15px] py-[5px]  cursor-pointer rounded-[8px] bg-[#5143d9] hover:opacity-90 text-[white] mr-[20px] ${loading ? 'hidden' : ''}`}>
                    Select Image
                  </div>
                </label>
              </div>
              <Button
              loading={loading}
                htmlType="submit"
                style={{
                  background: "blue",
                  border: "none",
                }}
                className="hover:opacity-80 overflow-hidden"
              >
                <p className="text-white">Save changes</p>
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalChangeTopicThumbnail;
