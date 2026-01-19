import Home from "./Components/Home"
import {Contact as Alpha ,About } from "./Components/Contact"
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"

function App(){
  const person ={
    name :"sourav",
     Age :20,
     sec :"c"

  }
  let name = "Sourav"
  let Roll = 26
  let degree = "B-Tech"
  let myStyle={
    backgroundColor:"blue",
    color:"white",
    padding:"20px"
  }
  return(
    <div>
        <Navbar />
        <Body />
      <h1 style={myStyle}>{person.name} : this is object 😁</h1>
    <h1>Hello {name} !!!!!</h1>
    <h1 style={{backgroundColor:"yellow"}}>your roll number is :" {Roll} "</h1>
    <h1 style={{backgroundColor:"tomato",padding:"20px"}}>Sourav yor persuing " {degree} "</h1>
     <Home/>
    <Alpha/>
   <About />
 
    </div>
  )
}
export default App