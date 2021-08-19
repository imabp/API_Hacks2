import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import { WaveBTN } from "../../components";
import { Notification } from "../../core";

const Landing = () => {

  return (<><div className="home text-xl pl-6 md:pl-12 pt-2 h-screen ">
    <motion.div
      className="circle"
      animate={{
        scale: [-10, 8, 12, 8, -11],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "20%", "10%", "80%", "50%"],
        zIndex: -2,
      }}
    />

    <motion.div
      className="circleAnim"
      animate={{
        bottom: -280,
        left: -200,
        zIndex: -1,
      }}
    />
    <motion.div
      className="text-2xl md:text-2xl mt-5"
      initial={{
        opacity: 0,
        y: "-100vw",
      }}
      animate={{
        opacity: 1,
        y: 0,
        zIndex: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          duration: 3,
          delay: 0.7,
        },
      }}
    >
      on <br /> 15th-16th october, 2021
    </motion.div>
    <motion.div
      className="text-6xl md:text-8xl pt-5"
      initial={{
        opacity: 0,
        y: "-100vw",
      }}
      animate={{
        opacity: 1,
        y: 0,
        zIndex: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          duration: 3,
          delay: 0.5,
        },
      }}
    >
      api hacks
      <br />
      <motion.span className="font-black">2.0</motion.span>
    </motion.div>
    <motion.div
      className="mt-5 md: text-2xl md:text-3xl"
      initial={{
        opacity: 0,
        y: "-100vw",
      }}
      animate={{
        opacity: 1,
        y: 0,
        zIndex: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          duration: 3,
          delay: 0.9,
        },
      }}
    >
      build your <br />
      digital footprint as <br />a student developer
    </motion.div>
    <a href="http://discord.apihacks.co/" target="_blank" rel="noopenner noreferrer">
      <WaveBTN type="btn" text="interested? join us" />

    </a>
    <br />  <br />
    <motion.div
      className="absolute bottom-5 pb-6"
      initial={{
        opacity: 0,
        y: "-98vw",
      }}
      animate={{
        opacity: 1,
        y: 0,
        zIndex: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          duration: 3,
          delay: 1.3,
        },
      }}
    ><br /><br />
      want to talk to us? <br />
      <span className="font-bold">
        <a href="mailto:staff@apihacks.co">staff@apihacks.co</a>
      </span><br /><br />

    </motion.div>
  </div></>
  );

}

export default Landing;
