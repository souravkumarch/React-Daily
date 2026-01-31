import React from 'react'
import About from './About'
import Add from './Add'
import Home from './Home'
import { Route,Link,Routes } from 'react-router-dom'
import Kuchnahi from './Kuchnahi'
import Check from './Check'
import Menu from './Menu'
import Check1 from './Check1'

const App = () => {
  return (
   <>
   <Kuchnahi />
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/Add">Add</Link>

  <Routes>
    <Route index element = {<Home/>}></Route>
    <Route path="/about" element ={<About/>}> </Route>
    <Route path="/Add" element ={<Add/>}> </Route>
    
  </Routes>
  <Routes>
    <Route path='/' element={<Menu/>}>
    <Route path='/check' element={<Check/>}/>
    <Route path='/check1' element={<Check1/>}/>
    </Route>
  </Routes>
   </>
  )
}

export default App
