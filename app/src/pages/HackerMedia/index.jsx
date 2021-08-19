import React from 'react'
import { WaveBTN } from '../../components'

const HackerMedia = () => {
    const URI = "https://imabp.github.io/API_Hacks2/data/HackerMedia.json"
    const [Media, setMedia] = React.useState({ "data": [] });
    React.useEffect(() => {
        fetch(URI)
            .then((response) => response.json())
            .then((data) => { setMedia(data) })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="text-xl px-6 md:px-12 pt-10 h-screen">
            📌  our hacker media
            {/* card container */}
            <div className="flex flex-wrap justify-evenly m-2">
                {
                    Media.data && Media.data.map((mediaData, id) => {
                        return (
                            // for cards
                            <div key={id}>
                                <div className="flex flex-col items-center p-2 md:p-4 bg-white border-2 rounded-lg shadow-sm m-2">
                                    <img alt="img" className="rounded-md w-28 h-28 sm:w-40 sm:h-40 lg:w-44 lg:h-44" src={mediaData.img} />
                                    <div className="flex flex-col mt-2 md:mt-4">
                                        <div className="text-xl">
                                            {mediaData.title}
                                        </div>
                                        <div className="text-base">
                                            {mediaData.text}
                                        </div>
                                        <a rel="noreferrer" href={mediaData.link} target="_blank">
                                            <WaveBTN type="btn-fade" text="Read More" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default HackerMedia