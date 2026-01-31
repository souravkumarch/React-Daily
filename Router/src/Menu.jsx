import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <header>
      <h1>Logo</h1>
      <ul>
        <li><Link to="/check">Check</Link></li>
        <li><Link to="/check1">Check 1</Link></li>
      </ul>
      </header>
     <main>
        <Outlet/>
     </main>
      <footer>
        <h1>This is footer</h1>
      </footer>
    </div>
  )
}

export default Menu
