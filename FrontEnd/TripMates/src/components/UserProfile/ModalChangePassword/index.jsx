/* eslint-disable react/prop-types */

import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiLockPasswordFill } from "react-icons/ri";

import { changeUserPassword } from "../../../services/user";

const ModalChangePassword = ({ user }) => {
  const iconSize = 20;
  const iconStyle = { background: "transparent" };
  // Handle Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();
  // Handle Form
  const onFinish = async (values) => {
    try {
      const response = await changeUserPassword(user._id, values);
      form.resetFields();
      setIsModalOpen(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex items-center btn_all gap-2 w-full transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-900 text-white text-base font-bold">
        <RiLockPasswordFill size={iconSize} style={iconStyle} />
        <button onClick={showModal}>Change password</button>

        <Modal
          title="User Profile"
          open={isModalOpen}
          onCancel={handleCancel}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <Form form={form} name="basic" onFinish={onFinish} labelAlign="left">
            <Form.Item label="Current Password" name="oldPassword">
              <Input.Password />
            </Form.Item>

            <Form.Item label="New Password" name="newPassword">
              <Input.Password />
            </Form.Item>

            <Form.Item label="Confirm Password" name="confirmPassword">
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <div className="flex items-center justify-end">
                <Button
                  className="mr-[10px]"
                  htmlType="button"
                  onClick={handleCancel}
                >
                  <p>Cancel</p>
                </Button>
                <Button type="primary" htmlType="submit">
                  <p className="text-white">Save changes</p>
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default ModalChangePassword;
