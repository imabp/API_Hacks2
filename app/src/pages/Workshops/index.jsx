import React from "react";
import { WaveBTN } from "../../components";
import HIDDEN_ROUTES from "../../config/hidden.routes";
const Workshops = () => {
  return (
    <div className="text-xl pl-6 md:pl-12 pt-10 h-screen">
      <h1>👩‍🚀 speakers and workshops</h1><br />
      <p>conversing your skills help you to add to your digital footprint . . .
        <br />
        speaking at api hacks can help you to learn, build and network with<br /> other prominent speakers from
        our hackathon network.<br />
        <br />
        call for speakers are open! <br />let us know about abour your speaker
        proposal.<br />
        <a href={HIDDEN_ROUTES.sessionize.path} target="_blank" rel="noopenner noreferrer">
          <WaveBTN type="btn-fade" text="submit your proposal" />
        </a>
      </p><br />
      <b>important dates</b>
      <div className="fontLight">

        speaker proposals:<br /> 1st August 2021 - 2nd October 2021<br /><br />
        workshops starting from:<br /> 20th August 2021 - 10th October 2021<br /><br />
        hackathon dates:<br />15th October 2021 - 16th October 2021
      </div>
    </div>
  );
};
export default Workshops;
