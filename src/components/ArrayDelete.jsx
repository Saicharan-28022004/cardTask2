import React, { useState } from "react";

function ArrayDelete() {
  const [arr, setarr] = useState(["Blayya", "Chiru", "Venkatesh", "Nagarjuna"]);
  function deleteItem(index){
    // let newarr=[...arr];
    // newarr.splice(index,1);
    // setarr(newarr);

    let newarr=arr.filter((item,ind)=>{
        if(index==ind){
           return false;
        }
        return true;
    });
    setarr(newarr);
  }
  let result = arr.map((item, ind) => {
    return <li key={ind}>
        {item}
        <button onClick={()=>deleteItem(ind)}>Delete</button>
    </li>;
  });
  return (
    <div>
      <ol>{arr.length==0?"Empty List":result}</ol>
    </div>
  );
}

export default ArrayDelete;
