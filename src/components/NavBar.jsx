import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='header'>
        <img src="../public/logo.png" alt="logo" className="logo"/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar