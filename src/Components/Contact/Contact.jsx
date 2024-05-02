import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    const [inputData, setInputData] = useState({
        user_name: '',
        user_email: '',
        message: ''
      });
      
      const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
          .sendForm('service_p98l7qs', 'template_4nj4pyj', form.current, {
            publicKey: 'WNrjJl27bEfzkbb8I',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setDone(true);
              setInputData({
                user_name: '',
                user_email: '',
                message: ''
              });
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;


  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} 
         onSubmit={sendEmail}>
                <input 
                type="text" 
                name='user_name' className='user' 
                placeholder='Name' 
                value={inputData.user_name}
                onChange={(e) => setInputData({ ...inputData, user_name: e.target.value })}
                />

                <input 
                type="email" 
                name='user_email' className='user' 
                placeholder='Email'
                value={inputData.user_email}
                onChange={(e) => setInputData({ ...inputData, user_email: e.target.value })}

            
                />
                <textarea 
                name="message" className='user' 
                placeholder='Message'
                value={inputData.message}
                onChange={(e) => setInputData({ ...inputData, message: e.target.value })}
                ></textarea>
                <input 
                type="submit" 
                value="send" className="button" />
                <span>{done && "Thanks for Contacting me."}</span>
                <div className="blur c-blur1" style={{background: "var(--purple)" }}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
