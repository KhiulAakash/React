import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
  const addValue=()=>{
    setCounter(counter+1);
  }
  const removeValue=()=>{
    setCounter(0);
  }
  return (
    <>
      <h1>Welcome to my application</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
