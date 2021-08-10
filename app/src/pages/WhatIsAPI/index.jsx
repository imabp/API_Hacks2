import React, { useState } from "react";
import { motion } from "framer-motion";
import page from "./data/pageData";
const pageData = page.pageData;
const WhatIsAPI = () => {
  const gifIndex = "gif";
  const textIndex = "text";
  const inferenceIndex = 'inference';

  const [currentPage, setCurrentPage] = useState(0);
  const [currentGIF, setCurrentGIF] = useState(pageData[0][gifIndex]);
  const [currentText, setCurrentText] = useState(pageData[0][textIndex]);
  const [apiInfo, setAPIInfo] = useState(pageData[0][inferenceIndex]);

  const nextPage = () => {
    if (currentPage < pageData.length) {
      setCurrentPage(currentPage + 1);
    }
    else {
      setCurrentPage(0);
    }
    getPageContent();
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    else {
      setCurrentPage(pageData.length - 1);
    }
    getPageContent();
  };

  const getPageContent = () => {

    if (pageData) {
      const getGIF = () => {
        setCurrentGIF(pageData[currentPage][gifIndex]);
      };

      const getText = () => {
        setCurrentText(pageData[currentPage][textIndex]);
      };

      const getAPIInfo = () => {
        setAPIInfo(pageData[currentPage][inferenceIndex]);
      };
      getGIF();
      getText();
      getAPIInfo();
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-12 overflow-x-visible my-8">
      <div className="mt-4 text-xl md:1xl lg:text-3xl">
        <b> What is an API ?</b> <br />
        <div className="mt-6 text-xs md:sm lg:text-2xl leading-6 md:leading-8 lg:leading-10">
          Hello World, If you are reading this, we certainly believe, you are
          new to the world of APIs.
          <br /> Do read this!!
          <br />
          <br />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2 }}
          className="flex flex-col md:flex-row items-center text-sm md:xl lg:text-2xl leading-6 md:leading-8 lg:leading-10"
        >
          <img
            src={currentGIF}
            alt="response"
            style={{ height: "200px", width: "300px" }}
          />,
          <span className="pt-6 md:pl-4">
            {currentText}{" "}
            <strong>{apiInfo}</strong>
          </span>
        </motion.div>
        {/* buttons */}
        <ul class="inline-flex space-x-2 mt-4">
          <li>
            <button
              className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
              onClick={prevPage}
              disabled={currentPage < 1}
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
        <div className="text-sm md:xl lg:text-2xl leading-6 md:leading-8 lg:leading-10 mt-8">
          Now it's your choice, what do you have to do with the data. You may
          perform some computation on it or show it right away.
        </div>
        <div className="mt-14 md:mt-20 flex flex-col items-center">
          A more detailed version is here for you
          <img
            src="https://cdn.discordapp.com/attachments/874607271848607754/874607940231905351/api-test-image.jpg"
            alt="working of API"
            className="mt-8"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatIsAPI;
