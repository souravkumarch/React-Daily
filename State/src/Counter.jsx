import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const [color,setColor]=useState()


    
    function increament(){
        SetCount(count+1)
    }
    function decreament(){
        setCount(count-1)
    }
    
  return (
    <div>
      <h1>Counter = {count}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>

      <hr />
      <div style={{backgroundColor:color,height:"200px"}}>
      <button onClick={()=>{setColor("red")}}>red</button>
      <button onClick={()=>{setColor("yellow")}}>yellow</button>
      <button onClick={()=>{setColor("green")}}>green</button>
      <button onClick={()=>{setColor("blue")}}>blue</button>
      </div>
    </div>
  )
}

export default Counter
