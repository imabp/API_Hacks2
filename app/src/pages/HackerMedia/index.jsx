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
            <div className="text-3xl"> 📸 hacker media</div>
             <div className="fontLight">browse our hacker collections and their amazing work here. <br/>
                want to see your project here? <br /></div>
            <a style={{ marginRight: '4px' }} href="http://discord.apihacks.co/" target="_blank" rel="noopenner noreferrer">
                <WaveBTN type="btn-discord" text="join us on discord" />

            </a>
            <br/><br/>
            {/* card container */}
            <div className="flex flex-wrap justify-evenly m-2">
                {
                    Media.data && Media.data.map((mediaData, id) => {
                        return (
                            // for cards
                            <div key={id}>
                                <div className="flex flex-col items-center p-2 w-52 sm:w-60 sm:w-64 md:p-4 bg-white border-2 rounded-lg shadow-sm m-2">
                                    <img alt="img" className="rounded-md w-28 h-28 sm:w-40 sm:h-40 lg:w-44 lg:h-44" src={mediaData.img} />
                                    <div className="flex flex-col mt-2 md:mt-4">
                                        <div className="text-xl">
                                            {mediaData.title.toLowerCase()}
                                        </div>
                                        <div className="text-base">
                                            {mediaData.text.toLowerCase()}
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