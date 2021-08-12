import React from 'react'
import { motion } from "framer-motion";
import StaffData from './data/staff.json'
import "./index.css";


const Staff = () => {
    return (


        <div className="container">
            {StaffData.staff && StaffData.staff.map((member, id) => {
                return (
                    <motion.div className="card"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: Math.random(0, 10),
                                delay: Math.random(0, 4),
                            },
                        }}
                        key={id}>
                        <div className="content">
                            <div className="imgBx">
                                <img alt={member.name} src={member.img}></img>
                            </div>
                            <div className="contentBx">
                                <h4>{member.name}</h4>
                                <h5>{member.description}</h5>
                            </div>
                        </div>
                    </motion.div>
                )
            }
            )
            }

        </div>

    );
}

export default Staff
