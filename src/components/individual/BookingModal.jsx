import React from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Select,
  DatePicker,
} from "antd";

const { RangePicker } = DatePicker;

const BookingModal = ({
  form,
  onFinish,
  onFinishFailed,
  isModalOn,
  setModalOn,
  isSubmitting,
  setSubmitting,
  isBookedSuccess,
  setBookedSuccess,
}) => {
  return (
    <Modal
      bodyStyle={{ height: "60vh", overflow: "auto" }}
      open={isModalOn}
      maskClosable
      closable
      onCancel={() => {
        setModalOn(false);
      }}
      onOk={() => {
        setModalOn(false);
      }}
      footer={null}
    >
      <Divider
        orientation="center"
        style={{ fontSize: "1.75rem", fontWeight: "bold" }}
      >
        Booking Now is Too Simple!
      </Divider>

      <Form
        form={form}
        layout="vertical"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Room Type"
          name="roomType"
          rules={[
            {
              required: true,
              message: "Please select desired room type",
            },
          ]}
        >
          <Select
            disabled={isSubmitting}
            defaultValue=""
            options={[
              {
                value: "",
                label: "Please select a room type",
                disabled: true,
              },
              {
                value: "single",
                label: "Single",
              },
              {
                value: "double",
                label: "Double",
              },
              {
                value: "seaView",
                label: "Sea View",
              },
              {
                value: "parkView",
                label: "Park View",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          className="mt-8"
          name="dates"
          label="Reserving Date Range"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please select reserving date range!",
            },
          ]}
        >
          <RangePicker
            disabled={isSubmitting}
            className="w-full"
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          className="mt-8"
          name="numberOfPeople"
          label="Number of People"
          rules={[
            {
              required: true,
              message: "Valid number of people: 1 to 40",
            },
          ]}
        >
          <Input
            disabled={isSubmitting}
            type="number"
            min={1}
            max={40}
            className="w-full"
            defaultValue={0}
          />
        </Form.Item>

        <Button
          loading={isSubmitting}
          type="primary"
          htmlType="submit"
          className="bg-blue-500 mt-[40px]"
          onClick={() => setSubmitting(true)}
          block
        >
          Confirm Booking
        </Button>

        <Button disabled={!isBookedSuccess} className="mt-[20px]" block>
          Show Current Booking
        </Button>

        <Button
          disabled={!isBookedSuccess}
          type="primary"
          className="mt-[20px]"
          onClick={() => {
            message.success("Looking great! Let's proceed to payment ...");
            setBookedSuccess(false);
            // setModalOn(false);
          }}
          danger
          block
        >
          Check Out
        </Button>
      </Form>
      {/* <Spin size="large" /> */}
    </Modal>
  );
};

export default BookingModal;
