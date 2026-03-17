import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "John";
  let x = 90;
  let y = 51;
  function name1 ()
    {
      return "My name is Vengeance";
    }
    function sum (a,b,op)
    {
      if(op=='+'){
        return (a+b);

      }
      else if(op=='-'){
        return (a-b);
      }
    }
  return (
    <div>
      <h1>User variable with jsx</h1>
      <h2>My name is {name}</h2>
      <h3>The value of variable{x+y}</h3>
      <h4>{name1()}</h4>
      <h5>{sum(20,7,'+')}</h5>
    </div>
  )
}
export default App