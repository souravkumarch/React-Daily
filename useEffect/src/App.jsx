import { useEffect, useState } from "react"

function App(){
  //   const[num,setNum]=useState(12)
  // useEffect(()=>{alert("warning")},[num])
  // const [val,setVal]=useState(0)
  const[val,setval]=useState(true)
  const[btn,setBtn]=useState("click here")

  return(
    <>
    {/* <h1>App Page</h1>
    <h1>{val}</h1>
    <button onClick={()=>{setVal(val+1)}}>+</button>
    <h1>{num}</h1>
    <button onClick={()=>{setNum(90)}}>Change</button> */}
    {val?<h1>Get Ready</h1>:<h1>Not Ready</h1>}
    {btn?<h1>Get Ready</h1>:<h1>Not Ready</h1>}
    <button onClick={()=>{setval(!val)
      setBtn("Click again")
    }}>{btn}</button>
    </>
  )
}export default App
