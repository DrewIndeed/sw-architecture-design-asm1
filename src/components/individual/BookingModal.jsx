import React, { useState } from "react";
import moment from "moment";
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
  setModalOn,
  isModalOn,
  data,
  setCurrentBookings,
  currentBookings,
}) => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookedSuccess, setBookedSuccess] = useState(false);
  const [roomTypeTracking, setRoomTypeTracking] = useState("");

  // make new body with updated data before PUT to database
  const updateRoomData = ({ data, formData }) => {
    const copyAllRooms = { ...data.allRooms };
    const roomTypeData = copyAllRooms[formData.roomType];

    // 1. check if there is enough space
    const isEnoughSpace = roomTypeData.capacity >= formData.numberOfPeople;

    // 2. check if available
    const availableRooms = roomTypeData.data.filter(
      (room) => room.status === 0
    );
    const isAvailable = availableRooms.length > 0;

    if (!isAvailable) {
      message.error(
        "We're so sorry. No available room matches your needs at the moment"
      );
      return;
    }

    // 3. calculate the price
    const calculatedPriceUSD = roomTypeData.rate * formData.duration;
    const calculatedPriceVND = calculatedPriceUSD * 23000;

    // 4. update the available room data
    const targetAvaiRoomCopy = (isAvailable && availableRooms[0]) || {};
    const targetAvaiRoomIndx = roomTypeData.data.indexOf(targetAvaiRoomCopy);
    const finalAvaiRoomData = {
      ...targetAvaiRoomCopy,
      startDate: formData.dates.startDate,
      endDate: formData.dates.endDate,
      status: 1,
    };

    // 5. update the room data in the whole hotel data
    const available = roomTypeData.available - 1;
    data.allRooms[formData.roomType].available = available;
    data.allRooms[formData.roomType].data[targetAvaiRoomIndx] = {
      ...finalAvaiRoomData,
    };

    const trackingBooking = {
      fullDesStr: `A ${formData.roomType} room for ${formData.numberOfPeople} people from ${formData.dates.startDate} to ${formData.dates.endDate}, meaning ${formData.duration} day(s).`,
      dateStr: `From ${formData.dates.startDate} to ${formData.dates.endDate}`,
      durationStr: `${formData.duration} days`,
      roomType: formData.roomType,
      payUsd: calculatedPriceUSD,
      payVnd: calculatedPriceVND,
      size: data.allRooms[formData.roomType].size,
    };
    setCurrentBookings([...currentBookings, trackingBooking]);

    setTimeout(() => {
      form.resetFields();
      setIsSubmitting(false);
      setBookedSuccess(true);
      message.success("Successfully booked your room ❤️");
      console.log(data.allRooms[formData.roomType]);
    }, 2000);
  };

  // form success
  const onFinish = (values) => {
    const startDate = values.dates[0].format("YYYY-MM-DD");
    const endStart = values.dates[1].format("YYYY-MM-DD");
    const processedStartTime = moment(startDate);
    const processedEndTime = moment(endStart);
    const duration = moment
      .duration(processedEndTime.diff(processedStartTime))
      .asDays();

    const formData = {
      ...values,
      numberOfPeople: parseInt(values.numberOfPeople, 10),
      dates: {
        startDate: values.dates[0].format("YYYY-MM-DD"),
        endDate: values.dates[1].format("YYYY-MM-DD"),
      },
      duration,
    };

    // console.log(formData);
    updateRoomData({ formData, data });
  };

  // form failure
  const onFinishFailed = (errorInfo) => {
    const firstError = errorInfo.errorFields[0].errors[0];
    message.error(firstError);
    setIsSubmitting(false);
  };

  // handle when room type is changed
  const handleRoomTypeChange = (value) => {
    setRoomTypeTracking(value);
    form.resetFields(["dates", "numberOfPeople"]);
  };

  // handle when people try to input number of people wrongly
  const handleNumberOfPeopleChange = (e) => {
    if (
      parseInt(e.target.value, 10) >
      parseInt(data?.allRooms[roomTypeTracking]?.capacity || 0, 10)
    ) {
      form.setFieldValue(
        "numberOfPeople",
        parseInt(data?.allRooms[roomTypeTracking]?.capacity || 0, 10)
      );
      return;
    }

    if (parseInt(e.target.value, 10) < 1) {
      form.setFieldValue("numberOfPeople", 1);
      return;
    }
  };

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
            onChange={handleRoomTypeChange}
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
              message: `Valid number for a ${roomTypeTracking} room: 1 to ${
                data?.allRooms[roomTypeTracking]?.capacity || 0
              } people`,
              min: 1,
              max: parseInt(
                data?.allRooms[roomTypeTracking]?.capacity || 0,
                10
              ),
            },
          ]}
        >
          <Input
            disabled={isSubmitting || roomTypeTracking === ""}
            onChange={handleNumberOfPeopleChange}
            type="number"
            min={1}
            max={parseInt(data?.allRooms[roomTypeTracking]?.capacity || 0, 10)}
            className="w-full"
            defaultValue={0}
          />
        </Form.Item>

        <Button
          loading={isSubmitting}
          type="primary"
          htmlType="submit"
          className="bg-blue-500 mt-[40px]"
          onClick={() => setIsSubmitting(true)}
          block
        >
          Confirm New Booking
        </Button>

        <Button
          disabled={isSubmitting || !isBookedSuccess}
          className="mt-[20px]"
          block
        >
          Show Current Bookings
        </Button>

        <Button
          disabled={isSubmitting || !isBookedSuccess}
          type="primary"
          className="mt-[20px]"
          onClick={() => {
            message.success("Looking great! Let's proceed to payment ...");
            setBookedSuccess(false);
            setTimeout(() => {
              setModalOn(false);
            }, 1000);
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
