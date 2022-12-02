import React from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "../components/containers";
import { TEST_DATA } from "../constants";
import { useHotelApiFetcher } from "../hooks/useApiFetcher";
import {
  VisitorWelcomeSection,
  VisitorFirstSection,
  VisitorSecondSection,
} from "./sections";

const VisitorHome = () => {
  // fetch data from jsonbin.io
  // const { data: hotelById, isLoading: hotelByIdLoading } = useHotelApiFetcher(
  //   "hotelById",
  //   { id: "6386efe6a3c728450edb2e3d" }
  // );

  // TODO: record?.data?.record for TEST_DATA
  return (
    <PageWrapper hasNav pathTitle="Visitor Home">
      <VisitorWelcomeSection record={TEST_DATA} />
      <VisitorFirstSection record={TEST_DATA} />
      <VisitorSecondSection record={TEST_DATA} />
    </PageWrapper>
  );
};

export default VisitorHome;
