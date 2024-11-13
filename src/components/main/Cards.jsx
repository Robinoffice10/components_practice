import React from 'react'
import './card.css'

import imageOne from '../../assets/image-one.jpg'


const Cards = (props) => {
  return (
    <div className="box">

    <div className="cards">
     <div className='card'>
       <img src={props.src} alt="image-one" width="100%" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      </div>
      <div className='card'>
       <img src={props.src} alt="image-one" width="100%" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      </div>
      <div className='card'>
       <img src={props.src} alt="image-one" width="100%" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      </div>
      <div className='card'>
       <img src={props.src} alt="image-one" width="100%" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Cards
