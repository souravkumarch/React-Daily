import React from 'react'

const Map = () => {
    let person =[
        {
            name:"Sourav",age:22,city:"bhopal"
        },
        {
            name:"Adarsh",age:23,city:"indore"
        },
        {
            name:"ayush",age:23,city:"deora"
        }
    ]
  return (
  <>
  {
   person.map((e)=>(<h1>{e.name}</h1>)
   )
  }
  </>
  )
}

export default Map
