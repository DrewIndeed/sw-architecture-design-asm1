import React, { useState, useEffect } from "react";
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
  const [currentBookings, setCurrentBookings] = useState([]);
  const [isModalOn, setModalOn] = useState(false);

  // useEffect(() => {
  //   console.log(currentBookings);
  // }, [currentBookings]);

  // fetch data from jsonbin.io
  const { data: hotelById, isLoading: hotelByIdLoading } = useHotelApiFetcher(
    "hotelById",
    { id: "6386efe6a3c728450edb2e3d" }
  );

  // TODO: hotelById?.data?.record for TEST_DATA
  return (
    <PageWrapper
      hasNav
      pathTitle="Visitor Home"
      setModalOn={setModalOn}
      isLoading={hotelByIdLoading}
    >
      {!hotelByIdLoading && hotelById && (
        <div className="relative">
          <BookingModal
            {...{
              setModalOn,
              isModalOn,
              setCurrentBookings,
              currentBookings,
              data: hotelById?.data?.record,
            }}
          />
          <VisitorWelcomeSection record={hotelById?.data?.record} />
          <VisitorFirstSection record={hotelById?.data?.record} />
          <VisitorSecondSection record={hotelById?.data?.record} />
        </div>
      )}
    </PageWrapper>
  );
};

export default VisitorHome;
