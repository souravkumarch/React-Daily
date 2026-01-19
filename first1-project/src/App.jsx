import Child1 from "./Child1"
import Menu from "./Home"
import {About,About1} from "./About"
function App(){
  return(
    <div>
   <Child1/>
   <Menu/>
   {/* <Home /> */}
   <About />
   <About1 />
   </div>
  )
}
export default App
