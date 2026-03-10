import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './components/Demo'
import { Name1 } from './components/Name1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* alert("sum") */}
    <h1>My Name is VENGEANCE!!!</h1>
    <h1>I am from BGMIPUR.</h1>
    <Employee></Employee>
    <Demo></Demo>
    <Name></Name>
    <Name1></Name1>
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
function Name(){
  return(
    <h1>Ye lo</h1>
  )
}
export default App