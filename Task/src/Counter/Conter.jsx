import React, { useState } from 'react'

const Conter = () => {
    const [val,setVal]=useState(0);
  return (
    <div className='bg-amber-200 flex justify-center container h-screen'>
     <div className='p-50'>
 
      <h1 className='p-10 rounded-xl bg-emerald-50 text-orange-700 text-8xl'>{val}</h1>
      <button className=' bg-teal-400 text-blue-50 px-10 py-2 rounded-xl items-center my-5 mx-2 ' onClick={()=>{
       setVal(val+1)
      }}>+</button>
      <button className=' bg-teal-400 text-blue-50 px-10 py-2  rounded-xl ' onClick={()=>{
        {val>0?setVal(val-1):setVal(0)}
      }}>-</button>
     </div>
    </div>
  )
}

export default Conter
