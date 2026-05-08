import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let arr=[
  {id:1,content:"The Taj Mahal is one of the most famous monuments in the world and a symbol of love and architectural beauty. It was built by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal in the 17th century."},
  {id:2,content:"The Charminar is one of the most famous historical monuments in India. It is located in Hyderabad and was built in 1591 by Muhammad Quli Qutb Shah. The monument is known for its four grand minarets and beautiful Indo-Islamic architecture."},
  {id:3,content:"The India Gate is a famous war memorial located in New Delhi. It was built to honor the soldiers of the Indian Army who lost their lives during World War I. Designed by Edwin Lutyens, the monument is made of sandstone and stands as a symbol of courage and sacrifice."}
]
  let result=arr.map((item,ind)=>{
    return(
      <div className='card' key={item.id}>
      <h1>{item.id}</h1>
      <p>{item.content}</p>
      <button className='btn'>Read More</button>
      
      </div>
    )
  });

  return (
   <div className='container'>
    {result}
   </div>
  )
}

export default App
