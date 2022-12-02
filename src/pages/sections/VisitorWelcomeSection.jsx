import React from "react";
import { ClockCircleFilled, HomeFilled, PhoneFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import { UTILITIES_MAP } from "../../constants";

const VisitorWelcomeSection = ({ record }) => {
  const { name, address, checkInTime, checkOutTime, owner, utilities } = record;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[90vh] w-screen bg-gray-600/10 overflow-y-clip"
    >
      <div className="relative w-full h-full flex overflow-hidden">
        <div className="basis-full md:basis-[60%] lg:basis-[55%] bg-[#F7AB0A]/0 z-[20] p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full rounded-lg flex flex-col justify-center text-white px-0 md:pl-10 md:pr-16"
          >
            <p className="text-base md:text-[1.75rem]">Welcome to</p>
            <p className="text-[3rem] lg:text-[4.25rem] font-semibold underline decoration-[#ff6052]/80">
              {name}
            </p>

            <div className="flex gap-4 align-middle mt-[30px] md:mt-[40px]">
              <HomeFilled className="text-[1rem] lg:text-[1.25rem] pt-[3px]" />
              <p className="text-[1rem] lg:text-[1.25rem] leading-[2rem]">
                {address.slice(10, 10 + 55)}, Vietnam
              </p>
            </div>

            <div className="flex gap-4 align-middle mt-[20px]">
              <ClockCircleFilled className="text-[1rem] lg:text-[1.25rem] pt-[4px]" />
              <p className="text-[1rem] lg:text-[1.25rem] leading-[2rem]">
                Check In: {checkInTime.from} - {checkInTime.to}
                &nbsp;&nbsp;•&nbsp;&nbsp;Check Out: {checkOutTime.from} -{" "}
                {checkOutTime.to}
              </p>
            </div>

            <div className="flex gap-4 align-middle mt-[20px]">
              <PhoneFilled className="text-[1rem] lg:text-[1.25rem] pt-[3px]" />
              <p className="text-[1rem] lg:text-[1.25rem] leading-[2rem] tracking-wider">
                Front Desk: {owner.phone}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="flex mt-[4rem] justify-center md:justify-start gap-[1.5rem] md:mt-[20px]">
                {utilities
                  .slice(0, parseInt(utilities.length / 2, 10))
                  .map((uti) => {
                    const Icon = UTILITIES_MAP[uti];
                    return (
                      <div className="flex gap-[10px]" key={uti}>
                        <Icon className="text-[1.75rem]" />
                        <p>{uti}</p>
                      </div>
                    );
                  })}
              </div>

              <div className="flex justify-center md:justify-start gap-[1.5rem] mt-[20px]">
                {utilities
                  .slice(parseInt(utilities.length / 2, 10))
                  .map((uti) => {
                    const Icon = UTILITIES_MAP[uti];
                    return (
                      <div className="flex gap-[10px]" key={uti}>
                        <Icon className="text-[1.75rem]" />
                        <p>{uti}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="basis-[40%] lg:basis-[45%] hidden md:flex items-center z-[20] px-5">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: -120 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="rounded-lg object-cover shadow-2xl absolute h-[575px]"
            src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/395730739.jpg?k=99ffbf868fe633a05a618cb7001e7fd29fc4be724870944921c7ba67026d8de5&o=&hp=1"
            alt=""
          />

          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: -95 }}
            transition={{ duration: 1.5, delay: 2 }}
            viewport={{ once: true }}
            className="rounded-lg object-cover shadow-2xl absolute h-[650px]"
            src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/395730734.jpg?k=a2214f33ed97a47aeea01d2811b05eccd66c209a47d7cd748bd8a9e6ff7730f0&o=&hp=1"
            alt=""
          />

          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: -70 }}
            transition={{ duration: 1.5, delay: 4 }}
            viewport={{ once: true }}
            className="rounded-lg object-cover shadow-2xl absolute h-[725px]"
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/285657421_109698695102362_5977931359669394541_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6VHqPypc3LAAX9aDwC-&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfB9JaW6blXVU_ae1czF6hh9_R_XCBZYs7X46oRE1ONpVA&oe=638E2009"
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full absolute top-[70%] bg-[#29353a]/40 z-[5] left-0 h-[700px] skew-y-[22deg]"
        />
      </div>
    </motion.div>
  );
};

export default VisitorWelcomeSection;
