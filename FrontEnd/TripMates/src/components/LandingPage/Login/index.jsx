import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../services/user";
import { loginAction } from "../../../features/user/userSlices.js";
import {
  saveAccessTokenToLocal,
  saveRefreshTokenToLocal,
  saveUserToLocal,
} from "../../../utils/localstorage";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading , setIsLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state) => state.user.user);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setIsLoading(true)
      const response = await login(values);
      saveAccessTokenToLocal(response.data.accessToken);
      saveRefreshTokenToLocal(response.data.refreshToken);
      saveUserToLocal(response.data.user);
      dispatch(loginAction({ user: response.data.user }));
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        const errorFields = error.response.data.validateError;
        form.setFields([
          {
            name: errorFields.name,
            errors: [errorFields.errorMessage],
          },
        ]);
      }
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
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
        <Form.Item>
          <Button
            loading={isLoading}
            htmlType="submit"
            className="flex justify-center btn_all w-[10rem] h-[3rem] bg-black hover:bg-[#505050] hover:scale-105 hover_trans text-white"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
