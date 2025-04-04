import React from 'react'
import './card.css'

const Card = () => {
  return (
    <>
    <div className='card'>
        <img className='card-photo' src="../public/burger.avif" alt="photo" />
        <h2>Burger King</h2>
        <h3>Burgers, American</h3>
        <h4>4.2 stars</h4>
    </div>
    </>
  )
}

export default Card