import React from 'react'
import { motion } from "framer-motion";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Evangelists = () => {
    const URI = "https://imabp.github.io/API_Hacks2/data/evangelist.json"
    const [StaffData, setStaffData] = React.useState({ "evangelist": [] });
    React.useEffect(() => {
        fetch(URI)
            .then((response) => response.json())
            .then((data) => { setStaffData(data) })
            .catch(error => console.log(error))
    }, []);
    return (<>
      
        <div className=" text-xl pl-6 md:pl-12 pt-10 ">
            <div className="text-4xl pb-2">👨‍💼 API Hacks Evangelists</div>  
         They are our hackers and evangelists, who have taken a step up in helping people to know about APIs and, <br/>
         and how API Hacks can boost their journey in API Development.
        </div>
        <div className="container">
            
            {
                StaffData.staff && StaffData.evangelist.map((member, id) => {
                    return (
                        <>
                        <a href={member.social} target="_blank" rel="noreferrer">
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
                                    <img alt={member.name.toLowerCase()} src={member.img}></img>
                                </div>
                                <div className="contentBx">
                                    <h4>{member.name.toLowerCase()}</h4>
                                    <h5>{member.university.toLowerCase()}</h5>
                                </div>
                            </div>
                            </motion.div>
                            </a>
                            </>
                    )
                }
                )
            }

        </div>
        </>

    );
}

export default Evangelists
