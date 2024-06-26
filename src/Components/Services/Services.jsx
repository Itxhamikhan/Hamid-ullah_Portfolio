import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png' 
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion"

const Services = () => {
    const transition = { duration : 1, type : 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='Services'>
                        {/* left side */}
    <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, dolorum <br />explicabo quasi numquam facilis voluptatibus molestias eligendi.</span>
    <a href={Resume} download>

    
    <button className="button s-button">Download CV</button>
    </a>
    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
    </div>
                         {/* right side */}
    <div className="cards">
                         {/* First Card */}
        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
        style={{left:'14rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            details ={'Figma, Sketch, Photoshop, Adobe, Adobe xd and much more'}
            />
        </motion.div>
                         {/* Second Card */}
                        
        <motion.div
         whileInView={{left:'-4rem'}}
         initial={{left:'-10rem'}}
         transition={transition}
        style={{top: '12rem', left: '-4rem'}}>
            <Card
            emoji = {Glasses}
            heading = {'Developer'}
            details ={'Html, Css, JavaScript, React, Figma, Sketch,Photoshop, Adobe, Adobe xd'}
            />
        </motion.div>
                         {/* 3rd Card */}
         <motion.div

        whileInView={{left:'12rem'}}
        initial={{left:'21rem'}}
        transition={transition}
          style={{top: '19rem', left: '12rem'}}>
            <Card
            emoji = {Humble}
            heading = {'UI/UX'}
            details ={'lorem ipsum dummy text usually use in section where we need some random text'}
            />
        </motion.div>
        <div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>

    </div>
   </div>
  )
}

export default Services