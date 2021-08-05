import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

/* const containerVariants = {
  hidden:{
    opacity: 0,
    y: '-100vw'
  },
  visible:{
    opacity: 1,
    y: 0,
    zIndex: 1,
    transition: {
      type: 'spring', stiffness: 50,  duration: 3
    }
  }
} */

class Home extends React.Component {
  render() {
    return (

      <div className="home text-xl pl-12 pt-10 h-screen absolute">
        <motion.div
          className="circle"
          animate={{
            scale: [-10, 8, 12, 8, -11],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["50%", "20%", "10%", "80%", "50%"],
            zIndex: -2
          }}
        />

        <motion.div
          className="circleAnim"
          animate={{
            bottom: -280,
            left: -200,
            zIndex: -1
          }}
        />

        <motion.div className="text-5xl lg:text-6xl"
          initial={{
            opacity: 0,
            y: '-100vw'}}
          animate={{
            opacity: 1,
            y: 0,
            zIndex: 1,
            transition: {
              type: 'spring', stiffness: 50,  duration: 3, delay:0.5
            }
          }}
        >
            API Hacks
            <span className="font-black">2.0</span>{" "}
        </motion.div>

        <motion.div className="text-3xl lg:text-4xl mt-4"
          initial={{
            opacity: 0,
            y: '-100vw'}}
          animate={{
            opacity: 1,
            y: 0,
            zIndex: 1,
            transition: {
              type: 'spring', stiffness: 50,  duration: 3, delay:0.7
            }
          }}
        >    
            9th-10th October, 2021
        </motion.div>

        <motion.div className="mt-14 lg:mt-20 text-2xl lg:text-3xl"
          initial={{
            opacity: 0,
            y: '-100vw'}}
          animate={{
            opacity: 1,
            y: 0,
            zIndex: 1,
            transition: {
              type: 'spring', stiffness: 50,  duration: 3, delay:0.9
            }
          }}
        >
            Build your <br />
            Digital Footprint as <br />a Student Developer <br />
        </motion.div>

          <a href="http://discord.apihacks.co/">
            <motion.button class="py-2 button"
              initial={{
                opacity: 0,
                y: '-100vw'}}
              animate={{
                opacity: 1,
                y: 0,
                zIndex: 1,
                transition: {
                  type: 'spring', stiffness: 50,  duration: 3
                }
              }}
            >
                Interested? Join Us
            </motion.button>
          </a>

        <motion.div class="absolute bottom-0 pb-10"
          initial={{
            opacity: 0,
            y: '-100vw'}}
          animate={{
            opacity: 1,
            y: 0,
            zIndex: 1,
            transition: {
              type: 'spring', stiffness: 50,  duration: 3, delay:1.3
            }
          }}
        >
            {" "}
            Want to talk to us? <br></br>
            <span className="font-bold">staff@apihacks.co</span>
        </motion.div>
      </div>
    );
  }
}

export default Home;
