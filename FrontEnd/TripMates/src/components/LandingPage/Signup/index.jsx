import { Form, Input } from "antd";
import { signup } from "../../../services/user";
import toast from "react-hot-toast";
import {
  saveAccessTokenToLocal,
  saveRefreshTokenToLocal,
  saveUserToLocal,
} from "../../../utils/localstorage";
import { loginAction } from "../../../features/user/userSlices";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await signup(values);
      console.log(response);
      saveAccessTokenToLocal(response.data.accessToken);
      saveRefreshTokenToLocal(response.data.refreshToken);
      saveUserToLocal(response.data.user);
      dispatch(loginAction({ user: response.data.user }));
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      if(error.response.status === 403){
        const errorFields = error.response.data.validateError
        form.setFields([
          {
            name: errorFields.name,
            errors: [errorFields.errorMessage]
          },
        ]
         
       )
      }
    }
  };



  return (
    <>
      <Form form={form} onFinish={onFinish}>
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
          dependencies={['password']}
          
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            ({ getFieldValue }) => ({
            validator(_, value) {
              if (getFieldValue('password') === value) {
                console.log(value)
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
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
export default SignUp;
