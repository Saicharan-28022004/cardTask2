import React, { useState } from 'react'

function FriendsList() {
    const[frnd,setfrnds]=useState(["Praveen","Vivek Sai","Karthik","Bhanu","Koushik","Charan",]);
    function deletefrnd(index){
        let newarr=frnd.filter((item,ind)=>{
          if(index==ind){
            return false;
          }
          return true;
        });
        setfrnds(newarr)
    }

   let result = frnd.map((item, ind) => {
    return (
        <tr key={ind}>
            <td>{ind + 1}</td>
            <td>{item}</td>
            <td>
                <button onClick={() => deletefrnd(ind)}>
                    Delete
                </button>
            </td>
        </tr>
    )
})

return (
    <div>
        {
            frnd.length === 0 ? (
                <h2>Empty List</h2>
            ) : (
                <table border="1" className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Friend Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {result}
                    </tbody>
                </table>
            )
        }
    </div>
)
}

export default FriendsList
