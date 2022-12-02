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
  Card,
} from "antd";
import { MdSingleBed, MdKingBed, MdAttachMoney } from "react-icons/md";
import { hotelSWRKeys } from "../../hooks/useApiFetcher";
import { hotelApiFetcher } from "../../api";
import { localGet } from "../../auth";

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
  const [isBookingsModalOn, setBookingsModalOn] = useState(false);
  const [finalUpdateData, setFinalUpdateData] = useState({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // make new body with updated data before PUT to database
  const updateRoomData = ({ data, formData }) => {
    const currentUser = localGet("currentUser");
    const copyAllRooms = { ...data.allRooms };
    const roomTypeData = copyAllRooms[formData.roomType];

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
      customerId: currentUser.username,
    };

    // 5. update the room data in the whole hotel data
    const available = roomTypeData.available - 1;
    data.allRooms[formData.roomType].available = available;
    data.allRooms[formData.roomType].data[targetAvaiRoomIndx] = {
      ...finalAvaiRoomData,
    };

    // compute booking ticket
    const trackingBooking = {
      customerId: currentUser.username,
      fullDesStr: `A ${formData.roomType} room for ${formData.numberOfPeople} people from ${formData.dates.startDate} to ${formData.dates.endDate}, meaning ${formData.duration} day(s).`,
      dateStr: `From ${formData.dates.startDate} to ${formData.dates.endDate}`,
      durationStr: `${formData.duration} days`,
      durationValue: formData.duration,
      roomType: formData.roomType,
      payUsd: calculatedPriceUSD,
      payVnd: calculatedPriceVND,
      size: data.allRooms[formData.roomType].size,
      rate: data.allRooms[formData.roomType].rate,
    };
    setCurrentBookings([...currentBookings, trackingBooking]);

    setTimeout(() => {
      form.resetFields();
      setIsSubmitting(false);
      setBookedSuccess(true);
      message.success("Successfully booked your room ❤️");
      // console.log(data);
      setFinalUpdateData(data);
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
    const processValue =
      e.target.value.length > 1 ? e.target.value[0] : e.target.value;
    if (
      parseInt(processValue, 10) >
      parseInt(data?.allRooms[roomTypeTracking]?.capacity || 0, 10)
    ) {
      form.setFieldValue(
        "numberOfPeople",
        parseInt(data?.allRooms[roomTypeTracking]?.capacity || 0, 10)
      );
      return;
    }

    if (parseInt(processValue, 10) < 1) {
      form.setFieldValue("numberOfPeople", 1);
      return;
    }
  };

  // [IMPORTANT] Update database
  const updateRoomDatabase = async (data) => {
    try {
      const res = await hotelApiFetcher(hotelSWRKeys.hotelById, {
        id: "6386efe6a3c728450edb2e3d",
        method: "put",
        data,
      });

      const resStatus = await res.status;
      if (resStatus === 200) {
        setIsCheckingOut(false);
        message.success("Updated Rooms Successfully!");
      }
    } catch (error) {
      setIsCheckingOut(false);
      message.error(error.message);
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
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "rgb(59,130,246)",
        }}
      >
        Booking Now is Too Simple!
      </Divider>

      <Modal
        bodyStyle={{ height: "60vh", overflow: "auto" }}
        open={isBookingsModalOn}
        onCancel={() => {
          setBookingsModalOn(false);
        }}
        onOk={() => {
          setBookingsModalOn(false);
        }}
        maskClosable
        closable
        footer={null}
      >
        <div className="w-full h-full flex flex-col gap-2 py-4 pr-4 overflow-y-auto">
          <Divider
            orientation="center"
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "rgb(59,130,246)",
            }}
          >
            Current Bookings Overview
          </Divider>
          <div className="w-full h-full flex flex-col gap-8 overflow-y-auto shadow-md p-5 rounded-lg">
            {currentBookings &&
              currentBookings.map(
                (
                  { fullDesStr, payUsd, payVnd, roomType, durationValue, rate },
                  idx
                ) => {
                  return (
                    <Card
                      title={`Booking #${idx + 1}`}
                      key={`Booking #${idx + 1}`}
                      className="hover:shadow-md transition-shadow duration-300"
                      bordered
                    >
                      <p className="flex gap-4">
                        {roomType === "single" ? (
                          <MdSingleBed className="text-[2.5rem]" />
                        ) : (
                          <MdKingBed className="text-[2.5rem]" />
                        )}

                        {fullDesStr}
                      </p>
                      <p className="flex gap-4 mt-2">
                        <MdAttachMoney className="text-[1.5rem]" />
                        <span>
                          {`${rate} x ${durationValue} = ${payUsd}`}{" "}
                          <strong>USD</strong>
                        </span>
                      </p>
                      <p className="flex gap-4 mt-2">
                        <MdAttachMoney className="text-[1.5rem]" />
                        <span>
                          {payVnd} <strong>VND</strong>
                        </span>
                      </p>
                    </Card>
                  );
                }
              )}
          </div>
        </div>
      </Modal>

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
          onClick={() => {
            setBookingsModalOn(true);
          }}
          block
        >
          Show Current Bookings
        </Button>

        <Button
          disabled={isSubmitting || !isBookedSuccess}
          type="primary"
          className="mt-[20px]"
          onClick={() => {
            setIsCheckingOut(true);
            updateRoomDatabase(finalUpdateData);
            message.success("Looking great! Let's proceed to payment ...");
            setBookedSuccess(false);
            setCurrentBookings([]);
            setRoomTypeTracking(false);
            setBookingsModalOn(false);
            setTimeout(() => {
              setModalOn(false);
              window.location.reload();
            }, 1200);
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
