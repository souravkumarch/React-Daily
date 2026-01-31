import React from 'react'
import { Link } from 'react-router-dom'
function Kuchnahi ()  {
  return (
  <>
   <nav>
    <h1>LOGO</h1>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
   </nav>
  </>
  )
}

export default Kuchnahi
