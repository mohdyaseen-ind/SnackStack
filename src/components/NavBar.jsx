import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    <div className='flex justify-between bg-neutral-500 shadow-lg'>
        <img src="../public/logo.png" alt="logo" className="h-24 px-2 py-1"/>
        <div className="nav-items">
            <ul className='flex py-10'>
                <Link to="/"><li className='px-2'>Home</li></Link>
                <Link to="/about"><li className='px-2'>About</li></Link>
                <Link to="/contact"><li className='px-2'>Contact</li></Link>
                <Link to="/cart"><li className='px-2'>Cart</li></Link>
                <Link to="/Instamart"><li className='px-2'>Instamart</li></Link>
            </ul>
        </div>
        {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
    </>
  )
}

export default NavBar