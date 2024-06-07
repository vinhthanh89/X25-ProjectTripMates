/* eslint-disable react/prop-types */
import { Button, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "../../../services/user";
import { editUserAction } from "../../../features/user/userSlices.js";
import { FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";



const MoadlChangeAvatar = ({ userProfile, handleEditUser }) => {
  const iconSize = 15
  const userLogin = useSelector((state) => state.user.user);
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAvatar, setEditAvatar] = useState(userLogin.avatar);
  const [uploadFile, setUploadFile] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      editAvatar && URL.revokeObjectURL(editAvatar.preview);
    };
  }, [editAvatar]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setEditAvatar(userLogin.avatar);
    setIsModalOpen(false);
  };

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setUploadFile(file);
    console.log(uploadFile);
    file.preview = URL.createObjectURL(file);
    setEditAvatar(file.preview);
  };

  const handleOk = async () => {
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append("avatar", uploadFile);
      formData.append('userId' , userLogin._id);
      const response = await uploadAvatar(formData)
      dispatch(editUserAction({user : response.data.userUploaded}))
      handleEditUser(response.data.userUploaded)
      console.log(response);      
      setIsModalOpen(false);
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error("Update failed!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {userLogin._id === userProfile._id && (
        <div
          onClick={showModal}
          className="w-[25px] h-[25px] flex items-center justify-center bg-[#cecece] rounded-full text-[25px] absolute right-[-10px] bottom-[-5px] hover:scale-105"
        >
          <label htmlFor="file" className="cursor-pointer">
            <FaCamera size={iconSize} />
          </label>
        </div>
      )}
      <Modal
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleCancel}
        width={330}
      >
        <Form onFinish={handleOk} initialValues={{}}>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[200px] h-[200px] object-cover rounded-full"
              src={editAvatar}
              alt=""
            />
          </div>
          <div className="mt-[10px] flex justify-center items-center ">
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
                <div className="px-[15px] py-[5px]  cursor-pointer rounded-[8px] bg-[#5143d9] text-[white] mr-[10px]">
                  Upload
                </div>
              </label>
            </div>
            <Button
              htmlType="submit"
              style={{ background: "black" }}
              loading={loading}
            >
              <p className="text-white">Save changes</p>
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default MoadlChangeAvatar;
