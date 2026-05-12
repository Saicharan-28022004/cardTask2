import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './Nav'
import Increment from './components/Increment'
import Item1 from './components/Item1'
import Item2 from './components/Item2'
import ArrayDelete from './components/ArrayDelete'
import FriendsList from './components/FriendsList'
import Row from './components/Row'
import Parent from './Parent'

function App() {
  
  const[flag,setflag]=useState(false);

  function login(){
    alert("Hello World");
  }
  function logout(){
    alert ("Bye");
  }
  function change(){
    setflag(true);
  }

  
  return (
    <div>
      <Nav></Nav>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={function(){alert("Submitted")}}>Submit</button>
      <button
      onClick={()=>alert("Arrow function")}
      >Arrow</button>
        <Increment/>
        <button onClick={change}>Display</button>
        {flag==false?<Item1/>:<Item2/>}
        <ArrayDelete/>
      <FriendsList/>
      <Parent/>
    </div>
  );
}

export default App;
