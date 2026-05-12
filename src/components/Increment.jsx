import React, { useState } from 'react'

function Increment() {
    const[count,setcount]=useState(0);
    function Inc(){
        let newCount=count+1;
        setcount(newCount);
    }
    function Dec(){
        let newCount=count-1;
        setcount(newCount);
    }
  return (
    <div>
      <button onClick={Inc}>Inc</button>
      <h1>{count}</h1>
      <button onClick={Dec}>Dec</button>
      <button onClick={()=>setcount(0)}>Reset</button> {/* Arrow Function */}
      
    </div>
  )
}

export default Increment
