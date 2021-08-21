import React from 'react'
import { motion } from "framer-motion";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Staff = () => {
    const URI = "https://imabp.github.io/API_Hacks2/data/staffdata.json"
    const [StaffData, setStaffData] = React.useState({ "staff": [] });
    React.useEffect(() => {
        fetch(URI)
            .then((response) => response.json())
            .then((data) => { setStaffData(data) })
            .catch(error => console.log(error))
    }, []);
    return (<>
      
        <div className=" text-xl pl-6 md:pl-12 pt-10 ">
            <div className="text-4xl pb-2">👨‍💼 hackathon staff</div>  
         we are always up to learn things by building them out... 
        </div>
        <div className="container">
            
            {
                StaffData.staff && StaffData.staff.map((member, id) => {
                    return (
                        <>
                        <a href={member.linkedin} target="_blank" rel="noreferrer">
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
                                    <h5>{member.description.toLowerCase()}</h5>
                             
                                    {member.linkedin && <><FontAwesomeIcon icon={["fab", "linkedin"]} /></>}
                                    {member.github && <><FontAwesomeIcon icon={["fab", "github"]} /></>}
                                    {member.twitter && <><FontAwesomeIcon icon={["fab", "twitter"]} /></>}
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

export default Staff
