import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%&*';
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }  
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className='body'>
    <div className='container'>
      <h1>Password Generator</h1>
      <div className='box'>
        <input type="text" value={password} placeholder="Password" readOnly />
        <button onClick={passwordGenerator}>Generate</button>
      </div>
      <div className='box2'>
      <input
        type="range"
        min={6}
        max={20}
        value={length}
        onChange={(e) => {
          setLength(Number(e.target.value));
        }}
      />
      <label>Length: {length}</label>
      <input
        type="checkbox"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numberInput">Numbers</label>
      <input
        type="checkbox"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
      />
      <label>Characters</label>
      </div>
      </div>
      </div>
  );
}

export default App;
