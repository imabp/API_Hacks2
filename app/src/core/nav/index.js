import React from "react";
import ROUTES from "../../config/routes";
import { motion } from "framer-motion";
import "./index.css";

function Nav({ Link }) {
  return (
    <div className="h-screen absolute right-0 flex nav">
      <ul className="m-auto w-full flex flex-col justify-center text-center">
        <li className="text text-2xl">
          What you Looking for?
          <br></br>
          Might be here ;)
        </li>
        {ROUTES.map((route) => (
          <motion.li
            whileHover={{
              scale: 1.2,
              originX: 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <Link to={route.path} isExternal={route.isExternal}>
              <button class=" py-2 button button2">
                <b>{route.displayName}</b>
              </button>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
