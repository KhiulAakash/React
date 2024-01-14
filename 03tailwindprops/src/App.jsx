import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from './components/Card.jsx'
import "./App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);

  const nameValue1=(event)=>{
    if(event.key==="Enter"){
      setName1(event.target.value);
      event.target.style.display="none";
    }
  }

  const nameValue2=(event)=>{
    if (event.key === 'Enter') {
      setName2(event.target.value);
      setIsInputVisible(false);
    }
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <input type="text" onKeyPress={nameValue1} placeholder="Enter name" className="bg-white text-black mb-4"/>
    <br />
    <Card name={name1}/>
    {isInputVisible && (<input type="text" onKeyPress={nameValue2} placeholder="Enter the name" className="bg-white text-black my-4"/>)}
    <br />
    <Card name={name2}/>
    </>
  );
}

export default App;
