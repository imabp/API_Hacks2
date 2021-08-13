import React from "react";
import { WaveBTN } from "../../components";
const Workshops = () => {
  return (
    <div className="text-xl pl-6 md:pl-12 pt-10 h-screen">
      <h1>👩‍🚀 speakers and workshops</h1><br />
      <p>conversing your skills help you to add to your digital footprint . . .
        <br />
        speaking at api hacks can help you to learn, build and network with other prominent speakers from
        our hackathon network.<br />
        <br />
        call for speakers are open! <br />let us know about abour your speaker
        proposal.<br />
        <WaveBTN type="btn-fade" text="submit your proposal" />
      </p>

    </div>
  );
};
export default Workshops;
