import React, { useState } from 'react'

function Nav() {
    const[name,setname]=useState("Ballaya");
    function changeName(){
        setname("chiru");
    }
  return (
    <div>
      <button onClick={changeName}>Change</button>
      <h1>{name}</h1>   
    </div>
  )
}

export default Nav
