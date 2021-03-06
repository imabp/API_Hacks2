import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import page from "./data/pageData";

const pageData = page.pageData;

const WhatIsAPI = () => {
  const gifIndex = "gif";
  const textIndex = "text";
  const inferenceIndex = 'inference';

  const [currentPage, setCurrentPage] = useState(0);
  const currentGIF = pageData[currentPage][gifIndex]
  const currentText = pageData[currentPage][textIndex]
  const apiInfo = pageData[currentPage][inferenceIndex]

  const nextPage = () => {
    if (currentPage < pageData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };


  return (
    <div className="w-full flex flex-col justify-center items-center px-6 md:px-12 my-8 text-base md:text-xl lg:text-2xl leading-6 md:leading-8 lg:leading-10">

      <div className="mt-4">
        <div className="text-4xl"> <b>🧩 what's an api ?</b> </div>

        <div className="fontLight mt-6">
          if you are reading this, we certainly believe, you are
          new to the world of apis.
          <br /> lets see this story...
          <br />
          <br />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2 }}
          className="flex flex-col md:flex-row items-center"
        >
          <img
            src={currentGIF}
            alt="response"
            style={{ height: "200px", width: "300px" }}
          />
          <span className="pt-6 md:pl-4">
            {currentText.toLowerCase()}{" "}<br />
            <strong>{apiInfo.toLowerCase()}</strong><br />
            {currentPage === pageData.length - 1}
          </span>
        </motion.div>
        {/* buttons */}
        <ul class="inline-flex space-x-2 mt-4">
          <li>
            <button
              className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
              onClick={prevPage}
              disabled={currentPage < 0}
            >
              <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button
              class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
              onClick={nextPage}
              disabled={currentPage >= pageData.length}
            >
              <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>

        <div className="mt-14 md:mt-20 flex flex-col ">
          🚀 diving bit deeper . . .<br /><br />why api first approach?
          <div className="fontLight mt-6 text-lg md:text-xl lg:text-2xl leading-6 md:leading-8 lg:leading-10 ml-4 md:ml-8 lg:ml-12">
            <li>ensures good developer experiences </li>
            <li>development teams can work in parallel and share the same code </li>
            <li>reduces the cost of developing apps </li>
            <li>increases the speed to market </li>
            <li>reduces the risk of failure </li>
          </div>
        </div>

        <div className="mt-14 md:mt-20 flex flex-col ">
          🚀 why api hacks?
          <div className="fontLight mt-6">
            be it a beginner, or an expert, api hacks focusses on helping developers
            to know the power of apis and work on building api literacy among students
            and professionals.
            <br /><br />
            what are you waiting for?<br />
          </div>
            <Link to="/">
              <div className="font-medium">join the hackathon!
              </div>
            </Link>

        </div>


      </div>
    </div>
  );
}

export default WhatIsAPI;
