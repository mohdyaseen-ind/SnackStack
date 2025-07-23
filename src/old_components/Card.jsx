import React from 'react'
import './card.css'
import { IMG_CDN_URL } from './config'

const Card = (props) => {
  return (
    <>
    <div className='w-56 p-2 m-2 shadow bg\'>
        <img className='card-photo' src={IMG_CDN_URL+props.cloudinaryImageId} alt="photo" />
        <h2 className='font-bold text-xl'>{props.name}</h2>
        <h3>{props.cuisines[0]}</h3>
        <h4>{props.avgRating} stars</h4>
    </div>
    </>
  )
}

export default Card