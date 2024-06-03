import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
const ModalChangePassword = () => {
  const iconSize = 20;
  const iconStyle = { background: "transparent" };
  // Handle Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Handle Form
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <div className="flex justify-start items-center btn_all gap-2 w-full transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-900 text-white text-sm">
        <RiLockPasswordFill className="" size={iconSize} style={iconStyle} />
        <button onClick={showModal}>Change password</button>
        <Modal
          title="User Profile"
          open={isModalOpen}
          onCancel={handleCancel}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <Form form={form} name="basic" onFinish={onFinish} labelAlign="left">
            <Form.Item label="Current password" name="oldPassword">
              <Input />
            </Form.Item>

            <Form.Item label="New password" name="newPassword">
              <Input />
            </Form.Item>

            <Form.Item label="Current password" name="confirmPassword">
              <Input />
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
