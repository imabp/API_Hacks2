import React from 'react'
import './index.css'
const SponsorCard = (props) => {
    let { type } = props;
    type="gold"


    return (<>
        <div className="flex-1 sponsorcard h-1/2 w-full p-4">
        <div className={`text-right `}>
            <h3 className={`text-base typebox-${type} pr-2`}>{type}</h3>
        </div>
        </div>
    </>);
}
export default SponsorCard