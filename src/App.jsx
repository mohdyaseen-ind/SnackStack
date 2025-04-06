import NavBar from './components/NavBar'
import React from 'react'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
