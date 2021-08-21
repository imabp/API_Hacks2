import React from "react";
import { WaveBTN } from "../../components";
import HIDDEN_ROUTES from "../../config/hidden.routes";
const Workshops = () => {
  return (
    <div className="text-xl pl-6 md:pl-12 pt-10 h-screen">
      <div className="text-4xl">👩‍🚀 speakers and workshops</div><br /> 
 
        <div className="fontLight">conversing your skills help you to add to your digital footprint . . .<br/> speaking at api hacks can help you to learn, build and network with<br /> other prominent speakers from
          our hackathon network.<br /></div>
       
        <br />
        call for speakers are open! <br />let us know about abour your speaker
        proposal.<br />
        <a href={HIDDEN_ROUTES.sessionize.path} target="_blank" rel="noopenner noreferrer">
          <WaveBTN type="btn-fade" text="submit your proposal" />
        </a>
      <br /><br/>
      <b>important dates</b>
      <div className="fontLight">

        speaker proposals:<br /> 1st august 2021 - 2nd october 2021<br /><br />
        workshops starting from:<br /> 20th august 2021 - 10th october 2021<br /><br />
        hackathon dates:<br />15th october 2021 - 16th october 2021
      </div>
    </div>
  );
};
export default Workshops;
