import React, { useState } from 'react'

function WhatIsAPI() {
    const [currentPage, setCurrentPage] = useState(0)

    const pageData = [
        [<img src="https://cdn.discordapp.com/attachments/874607271848607754/874608902963085372/request-new.gif" alt="request" style={{ height: "200px", width: "300px" }} />, "Carl asked his driver to help him reach carl santos.", "(API called)"],
        [<img src="https://cdn.discordapp.com/attachments/874607271848607754/874611343444049920/working-new.gif" alt="working" style={{ height: "200px", width: "300px" }} />, "Carl's driver took him way too fast.", "(Carl's Driver = API Working)"],
        [<img src="https://cdn.discordapp.com/attachments/874607271848607754/874611305875656724/response-new.gif" alt="response" style={{ height: "200px", width: "300px" }} />, "Carl finally reached Los Santos within 2 hours.", "(Response Received from API)"]
    ]

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }


    return (
        <div className="flex flex-col justify-center items-center px-6 md:px-12 overflow-x-visible my-8">

            <div className="mt-10 text-xl md:2xl lg:text-3xl">
                What is an API ? <br />
                <div className="mt-6 text-sm md:xl lg:text-2xl leading-6 md:leading-8 lg:leading-10">
                    API stands for Application Programming Interface. <br />
                    This is basically an intermediate between your Application and servers/databases. <br />
                    Haven't understood it yet, click on the next/previous button to know what actually happens with API.
                </div>

                {/* buttons */}
                <ul class="inline-flex space-x-2 mt-4">
                    <li><button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
                        onClick={goToPreviousPage}
                        disabled={currentPage < 1 ? true : false}
                    >
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                    </li>
                    <li><button class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
                        onClick={goToNextPage}
                        disabled={currentPage >= 2 ? true : false}
                    >
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                    </li>
                </ul>

                <div className="flex flex-col md:flex-row items-center text-sm md:xl lg:text-2xl leading-6 md:leading-8 lg:leading-10">
                    {pageData[currentPage][0]}
                    <span className="pt-6 md:pl-4"> {pageData[currentPage][1]} <strong>{pageData[currentPage][2]}</strong></span>
                </div>

                <div className="text-sm md:xl lg:text-2xl leading-6 md:leading-8 lg:leading-10 mt-8">
                    Now it's your choice, what do you have to do with the data. You may show perform some computation on it or show it right away.
                </div>


                <div className="mt-14 md:mt-20 flex flex-col items-center">
                    A more detailed version is here for you
                    < img src="https://cdn.discordapp.com/attachments/874607271848607754/874607940231905351/api-test-image.jpg" alt="working of API" className="mt-8" />
                </div>
            </div>

        </div>
    )
}

export default WhatIsAPI
