import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instigram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbUp from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion"

const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white' : ''}}>Hy! I Am </span>
            <span>Hassan Khan</span>
            <span>Forntend Developer With High Level Of Experience In Web Designing And Development, Producting The Quality Work.</span>
        </div>

        <button className=" button i-button">Hire Me</button>

        <div className="i-icons">
            <img src={Github} alt="Github pic" />
            <img src={LinkedIn} alt="LinkedIn pic" />
            <img src={Instigram} alt="Instigram pic" />
        </div>
    </div>
    <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
  initial={{ left: '-36%' }}
  whileInView={{ left: '-24%' }}
  transition={transition} 
  src={glassesimoji}
  alt=""
/>
<motion.div
        initial={{top:'-4%', left:'64%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top: '-4%', left:'68%'}}
        className='floating-div'
        >
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>

        <motion.div 
         initial={{left:'9rem', top:'18rem'}}
         whileInView={{left:'0rem'}}
         transition={transition}

        style={{top: '18rem', left:'0rem'}}
        className='floating-div'
        >
            <FloatingDiv image={thumbUp} txt1='Best Design' txt2='Award'/>
        </motion.div>
        <div className='blur' style={{background: "rgb (238 210 255"}}></div>
        <div className='blur' style={{background: "#C1F5FF", top:"17rem", width: "21rem", height: "11rem", left: "-9rem"}}></div>
    </div>
    </div>
  )
}

export default Intro