import React from 'react'

function Row({name,age,email,id,deleteItem}) {
  return (
    
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td><button onClick={()=>deleteItem(id)}>Delete</button></td>
      </tr>
    
  )
}

export default Row
