import { useState } from "react"

function App() {
  const [color,setColor]=useState("white");

  return (
    <div className="w-full h-screen duration-2000"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="text-white px-4 rounded hover:opacity-70"
          style={{backgroundColor:"red"}} onClick={()=>setColor("red")} onMouseOver={()=>{style.opacity="0.5"}}>Red</button>
          <button className="text-white px-4 rounded hover:opacity-70"
          style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="text-black px-4 rounded hover:opacity-70"
          style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="text-white px-4 rounded hover:opacity-70"
          style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="text-white px-4 rounded hover:opacity-70"
          style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className="text-white px-4 rounded hover:opacity-70"
          style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
          <button className="text-white px-4 rounded hover:opacity-70"
          style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className="text-black px-4 rounded hover:opacity-70"
          style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          </div>
        </div>
    </div>
  )
}

export default App
