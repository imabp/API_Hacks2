import React from "react";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home text-xl pl-6 md:pl-12 pt-10 h-screen absolute">
        <motion.div
          className="circle"
          animate={{
            scale: [-10, 8, 12, 8, -11],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["50%", "20%", "10%", "80%", "50%"],
          }}
        />
        <motion.div
          className="circleAnim"
          animate={{
            bottom: -280,
            left: -200,
          }}
        />
        <div className="text-5xl md:text-6xl">
          <Fade left cascade>
            API Hacks
            <span className="font-black">2.0</span>
          </Fade>
        </div>

        <div className="text-2xl md:text-4xl mt-2">
          <Fade left cascade>
            9th-10th October, 2021
          </Fade>
        </div>

        <div className="mt-12 md:mt-20 text-2xl md:text-3xl">

          <Fade left cascade>
            Build your{""}
            Digital Footprint as{""}
            a Student Developer
          </Fade>

        </div>

        <Fade left cascade>
          <a href="http://discord.apihacks.co/">
            <button class="text-base md:text-lg text-black mt-4 py-2 px-4 btn">
              <Fade left cascade>
                Interested? Join Us
              </Fade>
            </button>
          </a>
        </Fade>

        <div class="absolute bottom-0 pb-6">
          <Fade left cascade>
            Want to talk to us? {""}
            <span className="font-bold">staff@apihacks.co</span>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;
