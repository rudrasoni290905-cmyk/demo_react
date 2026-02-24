import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* alert("sum") */}
    <h1>My Name is VENGEANCE!!!</h1>
    <h1>I am from BGMIPUR.</h1>
    <Employee></Employee>
    {sum()}
      </div>
  )
}
function Employee(){
  return(
    <h1>Rudra Soni</h1>
  )
}
function sum(){
  return(
    (10+10)
  )
}

export default App
