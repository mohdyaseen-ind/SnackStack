import React, {useState} from 'react'
import About from './About'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    <div className='header'>
        <img src="../public/logo.png" alt="logo" className="logo"/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>Cart</li>
            </ul>
        </div>
        {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
    </>
  )
}

export default NavBar