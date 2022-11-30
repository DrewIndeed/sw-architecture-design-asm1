import React from "react";
import { motion } from "framer-motion";
import { Button, Form, Input, message, Typography } from "antd";
import { PageWrapper } from "../components/containers";
import { useNavigate } from "react-router-dom";
import { localSet } from "../auth";
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
    const _onValidActions = ({
      username = "none",
      path = "/",
      type = "visitor",
    }) => {
      form.resetFields();
      message.success(`Welcome back, ${username.toUpperCase()}`);
      localSet({ username, path, type });
      navigate(path);
    };

    // if matched admin info
    if (
      username === TEST_ADMIN_1.username &&
      password === TEST_ADMIN_1.password
    ) {
      _onValidActions({ username, path: "/admin/home", type: "admin" });
      return;
    }

    // if matched visitor info
    if (
      username === TEST_VISITOR_1.username &&
      password === TEST_VISITOR_1.password
    ) {
      _onValidActions({ username, path: "/visitor/home", type: "visitor" });
      return;
    }

    message.error("No profile found. Check your info again.");
  };

  // form failure
  const onFinishFailed = (errorInfo) => {
    const firstError = errorInfo.errorFields[0].errors[0];
    message.error(firstError);
  };

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <CenterFlex
          className="w-screen h-screen bg-gradient-to-r from-purple-400 to-red-500"
          direction="column"
        >
          <div className="bg-[#fff] p-6 md:p-10 rounded-md transition-all duration-500 hover:shadow-xl m-10">
            <div className="text-blue-500 mb-6">
              Welcome to
              <Title level={4}>The Princess of Arena Cam Ranh Home</Title>
            </div>
            <Form
              form={form}
              layout="vertical"
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
                className="mb-[40px] mt-8"
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
                className="bg-blue-500"
              >
                Log In
              </Button>
            </Form>
          </div>
        </CenterFlex>
      </motion.div>
    </PageWrapper>
  );
};

export default Login;
