import { Form, Input } from "antd";
import toast from "react-hot-toast";


import { login } from "../../../services/user";
import {
  saveAccessTokenToLocal,
  saveRefreshTokenToLocal,
  saveUserToLocal,
} from "../../../utils/localstorage";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const response = await login(values);
      console.log(response);
      saveAccessTokenToLocal(response.data.accessToken);
      saveRefreshTokenToLocal(response.data.refreshToken);
      saveUserToLocal(response.data.user)
      toast.success(response.data.message);
      navigate('/news-feed')
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Form onFinish={onFinish}>
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
          <button
            type="submit"
            className="flex justify-center btn_all w-[10rem] bg-black hover:bg-[#505050] hover:scale-105 hover_trans text-white"
          >
            Login
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
