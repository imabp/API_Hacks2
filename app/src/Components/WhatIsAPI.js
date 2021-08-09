import React from 'react'
import APIworking from "../assets/api-test-image.jpg"

function WhatIsAPI() {
    return (
        <div className="h-full flex flex-col justify-center items-center px-6 md:px-12">
            <img src={APIworking} alt="working of API" />
            <div className="mt-10 text-xl md:2xl lg:text-3xl">
                What is an API ?
                <div className="mt-6 text-sm md:xl lg:text-2xl leading-6 md:leading-8 lg:leading-10">
                API stands for Application Programming Interface. <br />
                This is basically an intermediate between your Application and servers/databases. <br />
                The API's just get/send data whenever they are called by your Application. <br /><br />
                Head over to
                <a href="https://imabp.github.io/api_hacks/start.html" className="text-blue-600"> this</a> link for more easy example.
                </div>
            </div>

        </div>
    )
}

export default WhatIsAPI
