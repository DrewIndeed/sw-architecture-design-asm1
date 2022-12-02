import React, { useState } from "react";
import moment from "moment";
import { Form, message } from "antd";
import { PageWrapper } from "../components/containers";
import { BookingModal } from "../components/individual";
import { TEST_DATA } from "../constants";
import { useHotelApiFetcher } from "../hooks/useApiFetcher";
import {
  VisitorWelcomeSection,
  VisitorFirstSection,
  VisitorSecondSection,
} from "./sections";

const VisitorHome = () => {
  const [form] = Form.useForm();
  const [retrievedData, setRetrievedData] = useState({});
  const [isModalOn, setModalOn] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isBookedSuccess, setBookedSuccess] = useState(false);

  // fetch data from jsonbin.io
  // const { data: hotelById, isLoading: hotelByIdLoading } = useHotelApiFetcher(
  //   "hotelById",
  //   { id: "6386efe6a3c728450edb2e3d" }
  // );

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

    setTimeout(() => {
      form.resetFields();
      setSubmitting(false);
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
    updateRoomData({ formData, data: TEST_DATA });
  };

  // form failure
  const onFinishFailed = (errorInfo) => {
    const firstError = errorInfo.errorFields[0].errors[0];
    message.error(firstError);
    setIsSubmitting(false);
  };

  // TODO: record?.data?.record for TEST_DATA
  return (
    <PageWrapper
      hasNav
      pathTitle="Visitor Home"
      setModalOn={setModalOn}
      // isLoading={hotelByIdLoading}
    >
      {/* {!hotelByIdLoading && hotelById && ( */}
      <div className="relative">
        <BookingModal
          {...{
            form,
            onFinish,
            onFinishFailed,
            isModalOn,
            setModalOn,
            isSubmitting,
            setSubmitting,
            isBookedSuccess,
            setBookedSuccess,
          }}
        />
        <VisitorWelcomeSection record={TEST_DATA} />
        <VisitorFirstSection record={TEST_DATA} />
        <VisitorSecondSection record={TEST_DATA} />
      </div>
      {/* )} */}
    </PageWrapper>
  );
};

export default VisitorHome;
