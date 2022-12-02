import React from "react";
import { motion } from "framer-motion";

const VisitorFirstSection = ({ record }) => {
  const slides = [0, 3, 6];
  const sentences = record?.description.split(". ");
  const compoundAdjs = [
    "Absolutely Stunning",
    "Truly Breathtaking",
    "Amazingly Chilling",
  ];
  const nouns = ["View", "Landspace", "Breeze"];

  return (
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
        {slides.map((p, i) => {
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
                className="rounded-lg w-[750px] h-[550px] object-cover mb-5"
                src={record?.photos[i]}
                alt="project dummy picture"
              />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-white text-4xl text-center font-semibold">
                  <span className="underline decoration-[#ff6052]/80">
                    {compoundAdjs[i]}
                  </span>{" "}
                  {nouns[i]}
                </h4>
                <p className="text-xl text-white text-center">
                  {`${sentences[p]}. ${sentences[p + 1]}. ${sentences[p + 2]}`}
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
  );
};

export default VisitorFirstSection;
