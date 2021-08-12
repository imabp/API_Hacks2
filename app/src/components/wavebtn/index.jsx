import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './index.css'
const WaveBTN = (props) => {

    let { type, text, route, onClick } = props;
    if (!text)
        text = "WaveBTN";

    switch (type) {
        case 'btn':
            return (<motion.button
                class="button ptext-base md:text-lg text-black mt-12 py-2 px-4 btn"
                initial={{
                    opacity: 0,
                    y: "-100vw",
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    zIndex: 1,
                    transition: {
                        type: "spring",
                        stiffness: 50,
                        duration: 3,
                    },
                }}
                onClick={onClick ? onClick : () => { }}
            >
                {props.text}
            </motion.button>)
        case 'nav-btn':
            return (<motion.li
                whileHover={{
                    scale: 1.2,
                    originX: 0.5
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300
                }}>
                <Link to={route.path} isExternal={route.isExternal}>
                    <button onClick={onClick} class="  py-2 button2">
                        <b>{route.displayName.toLowerCase()}</b>
                    </button>
                </Link>
            </motion.li>);
        default:
            return (<motion.button
                class="button ptext-base md:text-lg text-black mt-12 py-2 px-4 btn"
                initial={{
                    opacity: 0,
                    y: "-100vw",
                }}
                onClick={onClick ? onClick : () => { }}
                animate={{
                    opacity: 1,
                    y: 0,
                    zIndex: 1,
                    transition: {
                        type: "spring",
                        stiffness: 50,
                        duration: 3,
                    },
                }}
            >
                {props.text}
            </motion.button>);

    }
}
export default WaveBTN;