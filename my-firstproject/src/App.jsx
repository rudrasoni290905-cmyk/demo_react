import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,setdata] = useState("Hello");
  function fun(){
    setdata ("Changed value")  
  }
  return (
    <>
    <h1> State of variable </h1>
    <h2> {data} </h2>
    <button onClick={fun}>click</button>
    </>
  )
}
export default App