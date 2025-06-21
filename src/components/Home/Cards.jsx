import { useEffect, useState } from "react"; // Import React hooks
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Using react-router for navigation
const Cards = () => {
  return (
    <div className="w-full  px-[2vw]">
      <div className="flex xl:justify-between justify-center md:items-center xl:flex-row flex-col xl:w-full w-fit md:py-[121px] xl:gap-0 gap-[40px] md:gap-[80px]">
        <div className="relative left-10 self-start xl:right-auto">
          <motion.div
            initial={{ rotate: 0, x: 10, y: 0 }}
            whileInView={{ rotate: -7, x: 0, y: 10 }}
            transition={{ duration: 0.8 }}
            className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] top-0 bg-slate-100 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/61/ad/7d/61ad7da338c359a3a9a5d593ebf5780d.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0, x: -50 }}
            whileInView={{ rotate: 2, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[108px] left-[40px] bg-slate-200 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/assets/images/student.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0, x: -100 }}
            whileInView={{ rotate: 9, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[205px] left-[80px] bg-slate-400"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/56/67/93/5667936906181a6fbe0501b471e2b5bd.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0, x: -150 }}
            whileInView={{ rotate: 14, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[273px] left-[108px] bg-slate-300 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/assets/images/teach.jpg"
              alt=""
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:gap-[30px] gap-[10px] items-start relative sm:pl-0 pl-[4vw]">
          <h1 className="md:text-[30px] text-[20px]">Learner's Arc</h1>
          <h4 className="md:w-[435px] w-[260px] text-[12px] md:text-[20px] md:leading-[30px]">
            Learner’s Arc offers free, beginner-friendly coding bootcamps that
            teach in-demand skills through hands-on learning. We’re dedicated to
            helping students build real-world projects and succeed in the tech
            industry.
          </h4>
          <a href="https://woc.learnersarc.com/">
            <div className="flex justify-center items-center gap-[15.5px] md:px-[18px] px-[14px] py-[8px] bg-filledBg md:py-[10px] rounded-full border-primary border-[1px] w-fit text-[12px] md:text-[16px]">
              <h3 className="text-textColor">Join Now</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
