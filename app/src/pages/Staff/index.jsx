import React from 'react'
import { motion } from "framer-motion";
import ScrollAnimation from 'react-animate-on-scroll';
import "./index.css";


const Staff = () => {
    return (

     
        <div className="container">
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 2,
                delay:0.6,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874155918785400882/ssss_1.png"></img>
                </div>
                <div className="contentBx">
                    <h4>Abir Pal</h4>
                    <h5>Incoming Winter Engineering Intern, Affinidi, Singapore</h5>
                </div>
            </div>
        </motion.div>

        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:1.2,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874227279482478612/IMG_20191224_155514-02.jpeg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Ashish Chawda</h4>
                    <h5> SWE Intern, Tray, GitHub Campus Expert</h5>
                </div>
            </div>
        </motion.div>

        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:0.9,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://media.discordapp.net/attachments/864382375182336000/874255567353442355/IMG_20210809_141226_983.webp?width=676&height=676"></img>
                </div>
                <div className="contentBx">
                    <h4>Rajdeep Deb</h4>
                    <h5>SDE II Amazon</h5>
                </div>
            </div>
        </motion.div>
        
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:1.8,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://media.discordapp.net/attachments/874149053313716284/874275833324376114/ankit.png?width=468&height=468" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Ankit Singh</h4>
                    <h5>Technical Writing Intern, Geeks for Geeks</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:3.3,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874177070433972234/IMG_20191112_103220-01.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Pranav</h4>
                    <h5>CS Student,  GDG Chandigarh</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:2.1,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/810228073173745764/875115168080728114/46107BE4-D813-4CC9-AA14-3851D2B1126C.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Yajush Vyas</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:3,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874636058300649482/IMG-20210810-WA00243.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Ravanpreet Kaur Bagga</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:4.1,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874641530986565672/4F87FFD9-DE23-4FD8-8D82-560D5CB70FB6_2.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Prathamesh</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:1.5,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    {/* <img src="./team3.jpg" alt=""> */}
                </div>
                <div className="contentBx">
                    <h4>Vaibhav</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:3.9,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/875094429269106768/img1628607974899.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Anushka</h4>
                    <h5>CS Student</h5>
                </div>
            </div>
        </motion.div>
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:2.7,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874637332903497738/IMG_20210810_182614.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Dhruv</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        
        
        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:3.6,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    <img src="https://cdn.discordapp.com/attachments/874149053313716284/874625170835382333/2021-07-04-16-30-18-907.jpg" alt=""></img>
                </div>
                <div className="contentBx">
                    <h4>Pranjal</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        
        

        <motion.div  className="card"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                duration: 1.5,
                delay:2.4,
                },
            }}>
            <div className="content">
                <div className="imgBx">
                    {/* <img src="./team3.jpg" alt=""> */}
                </div>
                <div className="contentBx">
                    <h4>Sarthak Sharma</h4>
                    <h5>Developer</h5>
                </div>
            </div>
        </motion.div>
        </div>

      );
}
  
export default Staff
  