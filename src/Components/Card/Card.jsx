import React from 'react'
import './Card.css'
const Card = ({emoji, heading, details}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <div className="c-button">LERAN MORE</div>
    </div>
  )
}

export default Card