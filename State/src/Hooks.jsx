import React, { useState } from 'react'

const Hooks = () => {
    let [num,setNum]=useState(20)
    function fun(){
        setNum("updated value ")
    }
  return (
    <div>
        <button onClick={fun}>Usestate</button>

      <h1>this is hook Page ={num} </h1>
      <button onClick={()=>{setNum("Changed")}}>Tap</button>
    </div>
  )
}

export default Hooks
