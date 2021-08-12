import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import { WaveBTN } from "../../Components";


class Landing extends React.Component {
  render() {
    return (
      <div className="home text-xl pl-6 md:pl-12 pt-10 h-screen absolute">
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
          className="text-5xl md:text-6xl"
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
          API Hacks
          <br />
          <motion.span className="font-black">2.0</motion.span>
        </motion.div>

        <motion.div
          className="text-2xl md:text-4xl mt-20"
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
          9th-10th October, 2021
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
          Build your <br />
          Digital Footprint as <br />a Student Developer
        </motion.div>
        <a href="http://discord.apihacks.co/">
          <WaveBTN type="btn" text="Interested? Join Us" />
        </a>

        <motion.div
          class="absolute bottom-0 pb-6"
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
              delay: 1.3,
            },
          }}
        >
          Want to talk to us? <br />
          <span className="font-bold">
            <a href="mailto:staff@apihacks.co">staff@apihacks.co</a>
          </span>
        </motion.div>
      </div>
    );
  }
}

export default Landing;
