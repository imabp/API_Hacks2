import React from "react";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
// import Socials from "../Socials/Socials";
import "./LandingComponent.css";

function LandingComponent() {
  return (
    <div className="landing">
      <Navbar />
      <Heading />
      <a href="https://discord.apihacks.co" target="_blank" rel="noopener noreferrer"className="btn">Join Discord</a>
    </div>
  );
}

export default LandingComponent;
