import { Route,Routes } from "react-router-dom"
import Nav from "./Navbar/Nav"
import Conter from "./Counter/Conter"
import Image from "./Image/image"

function App(){
  return(
    <>
<Routes>
  <Route path="/" element={<Nav/>}>
  <Route path="/image" element={<Image/>} />
  <Route path="/counter" element={<Conter/>}/>
  </Route>
</Routes>
    </>
  )
} export default App