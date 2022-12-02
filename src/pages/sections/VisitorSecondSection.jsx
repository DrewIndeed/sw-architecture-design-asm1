import React from "react";
import { motion } from "framer-motion";

const VisitorSecondSection = ({ record }) => {
  const roomPhotos = [3, 4, 5];
  const roomTitles = [
    "Take a look at this!",
    "Not elite? Tell us again!", 
    "Love at first sight is real ❤️",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col md:flex-row justify-evenly mx-auto items-center bg-[#ff6052]/10"
    >
      <div
        className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {roomPhotos.map((r, i) => {
          return (
            <div
              key={`showcase-${i + 1}`}
              className="w-screen h-screen flex-shrink-0 
          items-center justify-center
          snap-center flex flex-col space-y-5 
           p-20 md:p-44"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="rounded-lg w-[700px] h-[550px] object-cover mb-5"
                src={record?.photos[r]}
                alt="project dummy picture"
              />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-white text-4xl text-center font-semibold">
                  <span className="underline decoration-[#F7AB0A]/80">
                    {roomTitles[i]}
                  </span>{" "}
                </h4>
                <p className="text-xl text-white text-center">
                  We always commit to provide the best services and care in the
                  business. Most of all, YOUR feedback is the best treasure that
                  we can ever ask for. If there is something that displeases
                  you, you will be returned for FREE! So what are you waiting
                  for? Pack it up and adventures await!
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.5, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="w-full absolute top-[10%] bg-[#F7AB0A]/20 left-0 h-[550px] -skew-y-[20deg]"
      />
    </motion.div>
  );
};

export default VisitorSecondSection;
