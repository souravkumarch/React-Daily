import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Nav = () => {
  return (
    <div >
        <header className='flex bg-cyan-700 justify-around items-center p-2'>
    <h2 className='text-3xl text-amber-50'>LOGO</h2>
    <ul className='flex gap-10 text-rose-50'>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/image">Image</Link></li>
    </ul>
    </header>

  <main className=''>
    <Outlet />
  </main>

    <footer>
        <h1 className='flex justify-center text-5xl bg-cyan-950 text-amber-50 p-2'>This is footer</h1>
    </footer>
    </div>
  )
}

export default Nav
