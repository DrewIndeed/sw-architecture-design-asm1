import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, message } from "antd";
import { CenterFlex } from "../components/containers";
import { TEST_ADMIN_1, TEST_VISITOR_1 } from "../constants";

const { Title } = Typography;

const Login = () => {
  // hooks
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // form success
  const onFinish = ({ username, password }) => {
    // actions to handle input data, shwo msg and navigate
    const _onValidActions = ({ username, path }) => {
      message.success(`Welcome back, ${username.toUpperCase()}`);
      navigate(path);
    };

    // if matched admin info
    if (
      username === TEST_ADMIN_1.username &&
      password === TEST_ADMIN_1.password
    ) {
      _onValidActions({ username, path: "/admin/home" });
      return;
    }

    // if matched visitor info
    if (
      username === TEST_VISITOR_1.username &&
      password === TEST_VISITOR_1.password
    ) {
      _onValidActions({ username, path: "/visitor/home" });
      return;
    }

    message.error("No profile found. Check your info again.");
    form.resetFields();
  };

  // form failure
  const onFinishFailed = (errorInfo) => {
    const firstError = errorInfo.errorFields[0].errors[0];
    message.error(firstError);
  };

  // form layout
  const formLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };

  return (
    <CenterFlex
      className="w-screen h-screen bg-blue-900"
      direction="column"
      gap="20px"
    >
      <div className="bg-[#fff] p-10 rounded-md transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="text-blue-500 mb-8">
          Welcome to
          <Title level={4}>The Princess of Arena Cam Ranh Home</Title>
        </div>
        <Form
          {...formLayout}
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            className="mb-[50px] mt-8"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button
            block
            type="primary"
            htmlType="submit"
            className="bg-blue-600"
          >
            Log In
          </Button>
        </Form>
      </div>
    </CenterFlex>
  );
};

export default Login;
