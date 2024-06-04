/* eslint-disable react/prop-types */
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect } from "react";
import toast from "react-hot-toast";

import { editUser } from "../../../services/user.js";
import { saveUserToLocal } from "../../../utils/localstorage.js";
import { useDispatch } from "react-redux";
import { editUserAction } from "../../../features/user/userSlices.js";

const ModalUser = ({ isModalOpen, handleCancel, userProfile  , handleEditUser}) => {
  const { fullName, birthday, gender, description } = userProfile;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue({
      fullName,
      gender,
      description,
      birthday: dayjs(birthday),
    });
  }, [fullName, gender, description, birthday, form]);

  const onFinish = async (values) => {
    try {
      const formData = {
        fullName: values.fullName,
        gender: values.gender,
        description: values.description,
        birthday: dayjs(values.birthday, "YYYY-MM-DD").format("DD-MMMM-YYYY"),
      };
      const response = await editUser(userProfile._id, formData);
      handleEditUser(response.data.userUpdated)
      dispatch(editUserAction({ user: response.data.userUpdated }));
      saveUserToLocal(response.data.userUpdated);
      handleCancel();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  return (
    <>
      <Modal
        title="User Profile"
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form form={form} name="basic" onFinish={onFinish}>
          <Form.Item label="Full Name" name="fullName">
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select
              options={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Birthday" name="birthday">
            <DatePicker format="DD-MM-YYYY" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={6} placeholder="Write something about you" />
          </Form.Item>
          <Form.Item>
            <div className="flex items-center justify-end">
              <Button
                className="text-black mr-[10px] bg-[lightgray]"
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
    </>
  );
};

export default ModalUser;
