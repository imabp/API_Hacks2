import React from "react";
import ROUTES from "../../config/routes";
import { motion } from "framer-motion";
import "./index.css";
import { WaveBTN } from "../../components";
function Nav({ Link }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div
      class="navbar"
      // style={{visibility:toggle}}
    >
      <input
        type="checkbox"
        id="navbar-toggle"
        checked={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <label for="navbar-toggle">
        <i></i>
      </label>

      <div className="h-screen absolute right-0 nav menu">
        <ul className="m-auto w-full h-screen flex flex-col justify-center text-center">
          <li className="text text-2xl">
            what you looking for?
            <br />
            might be here ;)
          </li>

          {ROUTES.map((route) => (
            <WaveBTN
              onClick={() => {
                window.scrollTo(0, 0);
                setToggle(!toggle);
              }}
              type="nav-btn"
              text={route.displayName}
              route={route}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
