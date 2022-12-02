import React, { useState } from "react";
import { Divider, Form, Button, Input, message } from "antd";
import { PageWrapper } from "../components/containers";
import { useHotelApiFetcher, hotelSWRKeys } from "../hooks/useApiFetcher";
import { hotelApiFetcher } from "../api";

const AdminHome = () => {
  const [form] = Form.useForm();
  const [isUpdating, setIsUpdating] = useState(false);

  // fetch data from jsonbin.io
  const {
    data: hotelById,
    isLoading: hotelByIdLoading,
    mutate,
  } = useHotelApiFetcher("hotelById", { id: "6386efe6a3c728450edb2e3d" });

  // form success
  const onFinish = ({ name, address, description }) => {
    const finalSendingData = {
      ...hotelById?.data?.record,
      name,
      address,
      description,
    };

    updateDatabaseHandler(finalSendingData);
  };

  const updateDatabaseHandler = async (data) => {
    try {
      const res = await hotelApiFetcher(hotelSWRKeys.hotelById, {
        id: "6386efe6a3c728450edb2e3d",
        method: "put",
        data,
      });

      const resStatus = await res.status;
      if (resStatus === 200) {
        setIsUpdating(false);
        message.success("Updated Database Successfully!");
        mutate();
      }
    } catch (error) {
      setIsUpdating(false);
      message.error(error.message);
    }
  };

  // form failure
  const onFinishFailed = (errorInfo) => {
    const firstError = errorInfo.errorFields[0].errors[0];
    message.error(firstError);
  };

  return (
    <PageWrapper hasNav pathTitle="Admin Home" isLoading={hotelByIdLoading}>
      <div className="w-screen h-[90vh] bg-white flex flex-col py-5 gap-5">
        <Divider
          orientation="left"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          ADMIN DASHBOARD
        </Divider>
        <div className="border border-neutral-900/20 flex-1 mx-10 rounded-lg p-4 overflow-auto">
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
              name: hotelById?.data?.record?.name,
              address: hotelById?.data?.record?.address,
              description: hotelById?.data?.record?.description,
            }}
          >
            <Form.Item label="Name" name="name">
              <Input placeholder="Hotel Name" />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input placeholder="Hotel Address" />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input.TextArea
                rows="18"
                cols="200"
                placeholder="Hotel Description"
                showCount
                allowClear
              />
            </Form.Item>

            <Button
              loading={isUpdating}
              block
              type="primary"
              htmlType="submit"
              className="bg-blue-500"
              onClick={() => {
                setIsUpdating(true);
              }}
            >
              Confirm Update
            </Button>
          </Form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AdminHome;
