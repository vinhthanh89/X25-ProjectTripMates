import { Form, Input } from "antd";
const SignUp = () => {
  return (
    <>
      <Form>
        <Form.Item
          name="text"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="w-[24rem] h-[3rem]" placeholder="Username" />
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
      </Form>
    </>
  );
};
export default SignUp