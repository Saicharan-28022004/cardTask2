import React from "react";
import { useState } from 'react'
import Row from "./components/Row";

function Parent() {
  const [friend, setfriend] = useState([
    { id: 1, name: "Vivek sai", age: 24, email: "vivek@gmail.com" },
    { id: 2, name: "Praveen", age: 25, email: "praveen@gmail.com" },
    { id: 3, name: "Bhanu", age: 22, email: "bhanu@gmail.com" },
    { id: 4, name: "Sai", age: 23, email: "sai@gmail.com" },
    { id: 5, name: "Charan", age: 25, email: "charan@gmail.com" },
  ]);
  function deleteItem(id) {
    let newarr = friend.filter((item) => {
      if (item.id == id) {
        return false;
      }
      return true;
    });
    setfriend(newarr);
  }
  
  let result = friend.map((item, ind) => {
    return (
      <Row
        name={item.name}
        age={item.age}
        id={item.id}
        email={item.email}
        deleteItem={deleteItem}
        key={item.id}
      />
    );
  });
  return <div>
     {friend.length == 0 ? (
        <h1>Empty List</h1>
      ) : (
        <table border="1px">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

          {result}
        </table>
      )}
  </div>;
}

export default Parent;
