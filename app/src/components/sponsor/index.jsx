import React from 'react'
import './index.css'
const SponsorCard = (props) => {
    let { type, organization, hashtags, img,url } = props;
    // type = "gold"
    // url=
    // organization = "Postman"
    // hashtags = ["postman", "postmanstudent"]
    // img = "https://cdn.discordapp.com/attachments/874607271848607754/880468346619985920/0637d6d4f97338fe45dfb7a8e4d19753.png"
    return (<>
        <div className="p-4 rounded-sm ">

            <div className="max-w-md rounded overflow-hidden shadow-lg pb-5">

                <div className="px-6 py-4">
                 
                    <p className={`text-center typebox-${type} sm:text-xs md:text-base rounded-sm`}>
                        {type} partner   </p>
                </div>
                <a href={url} target="_blank" rel="noopenner noreferrer"> <img className="px-4 object-scale-down w-full h-10 " src={img} alt={organization} /></a>
                {/* <div className="px-6 pt-4 pb-2">
                    {
                    hashtags &&  hashtags.map(item => (<>
                            <span className="text-xs  inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">{item}</span>
                        </>))
                    }
                </div> */}
            </div>
        </div>
    </>);
}
export default SponsorCard