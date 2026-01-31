import React, { useState } from 'react'

const App = () => {
       let[frmdata,setFrmdata]=useState()
  function handledata(e){
    // console.log(e.target.value)
    setFrmdata(e.target.value)
  }
  function submitfunction(e){
   e.preventDefault()
   console.log(frmdata)
  }
  return (
    <div>
      <h1>{frmdata}</h1>
      <form action="" onSubmit={submitfunction}>
        <label htmlFor="">Name</label> <br />
        <input type="text" onChange={handledata}/>
        {/* <button onClick={()=>{
          console.log({frmdata})
        }}>Submit</button> */}
        <input type="submit" />
      </form>
    
    </div>
  )
}

export default App
