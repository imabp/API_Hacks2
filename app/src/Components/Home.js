import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home text-xl pl-12 pt-10 h-screen absolute">
            <div className="text-5xl lg:text-6xl">
                API Hacks<br></br>
                <span className="font-black">2.0</span>
            </div>

            <div className="text-3xl lg:text-4xl mt-4">
                9th-10th October, 2021
            </div>

            <div className="mt-14 lg:mt-20 text-2xl lg:text-3xl">
                Build your <br></br>
                Digital Footprint as <br></br>
                a Student Developer <br></br>
            </div>

            <a href="http://discord.apihacks.co/" >
            <button class="text-base lg:text-lg text-black mt-4 py-2 px-4 btn">
                Interested? Join Us
            </button> </a>

            <div class="absolute bottom-0 pb-10">
                Want to talk to us? <br></br>
                <span className="font-bold">staff@apihacks.co</span>
            </div>

        </div>
    )
}

export default Home;