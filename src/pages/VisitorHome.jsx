import React from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "../components/containers";
import { TEST_DATA } from "../constants";

const VisitorHome = () => {
  const pros = [0, 3, 6];
  const sentences = TEST_DATA.description.split(". ");
  const compoundAdjs = [
    "Absolutely Stunning",
    "Truly Breathtaking",
    "Amazingly Chilling",
  ];
  const nouns = ["View", "Landspace", "Breeze"];

  const roomPhotos = [3, 4, 5];
  const roomTitles = [
    "Take a look at this!",
    "Not elite? Tell us again!",
    "Love at first sight is real ❤️",
  ];
  return (
    <PageWrapper hasNav pathTitle="Visitor Home">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-[90vh] relative flex flex-col md:flex-row justify-evenly mx-auto items-center"
      >
        <div
          className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
          scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff6052]/80"
        >
          {pros.map((p, i) => {
            return (
              <div
                key={`showcase-${i + 1}`}
                className="w-[97vw] h-[90vh] flex-shrink-0 
                items-center justify-center
                snap-center flex flex-col space-y-5 
                 p-20 md:p-44"
              >
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="rounded-lg w-[750px] h-[550px] object-cover"
                  src={TEST_DATA.photos[i]}
                  alt="project dummy picture"
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-white text-4xl text-center font-semibold">
                    <span className="underline decoration-[#ff6052]/80">
                      {compoundAdjs[i]}
                    </span>{" "}
                    {nouns[i]}
                  </h4>
                  <p className="text-xl text-white text-center">
                    {`${sentences[p]}. ${sentences[p + 1]}. ${
                      sentences[p + 2]
                    }`}
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
          className="w-full absolute top-[10%] bg-[#ff2d2d]/20 left-0 h-[550px] skew-y-[20deg]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col md:flex-row justify-evenly mx-auto items-center"
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
                  className="rounded-lg w-[700px] h-[550px] object-fit"
                  src={TEST_DATA.photos[r]}
                  alt="project dummy picture"
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-white text-4xl text-center font-semibold">
                    <span className="underline decoration-[#F7AB0A]/80">
                      {roomTitles[i]}
                    </span>{" "}
                  </h4>
                  <p className="text-xl text-white text-center">
                    We always commit to provide the best services and care in
                    the business. Most of all, YOUR feedback is the best
                    treasure that we can ever ask for. If there is something
                    that displeases you, you will be returned for FREE! So what
                    are you waiting for? Pack it up and adventures await!
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
    </PageWrapper>
  );
};

export default VisitorHome;
