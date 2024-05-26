

import { Form, Input } from "antd";
import { signup } from "../../../services/user";
import toast from "react-hot-toast";


const SignUp = () => {

  const onFinish = async (values) => {
    try {
      const response = await signup(values)
      console.log(response);
      toast.success(response.data.message)
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }


  return (
    <>
      <Form
      onFinish={onFinish}
      >
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="w-[24rem] h-[3rem]" placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input className="w-[24rem] h-[3rem]" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="w-[24rem] h-[3rem]"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="w-[24rem] h-[3rem]"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            className="flex justify-center btn_all w-[10rem] bg-black hover:bg-[#505050] hover:scale-105 hover_trans text-white"
          >
            Sign Up
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SignUp