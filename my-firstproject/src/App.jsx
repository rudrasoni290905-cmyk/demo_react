import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function button(){
    alter ("You clicked on Button")
  }
  const fruit = ()=>{
    alter ("Example of arrow function")
  }
  let data = "Demo"
  function updata(){
    data = "Example"
    alter (data);
  }
  return (
    <div>
      <h1>Example of Arrow function</h1>
      <button onClick={button}>Click on the Button</button>
      <button onClick={()=>fruit("First Parameter")}>Fruit Button</button>
      <button onClick={()=>fruit("You clicked on Apple")}>Apple</button>
      <button onClick={()=>fruit("You clicked on Banana")}>Banana</button>
      <h2>{data}</h2>
      <button onClick={updata}>Click to change value</button>
    </div>
  )
}
export default App