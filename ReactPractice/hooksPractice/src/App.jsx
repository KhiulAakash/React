import React, { useEffect, useState } from "react";
import "./App.css";
import useCurrencyInfo from "./useCurrencyInfo";

function App() {
  const [amount,setAmount]=useState(1)
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(amount<1){
            setAmount(1);
          }
          convert();
        }}
      >
        <h2>Currency Converter</h2>
        
          <label>Enter Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <label>To:</label>
          <input type="number" value={convertedAmount} disabled />
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        <button type="submit" onClick={()=>{if(amount<1){setAmount(1)}}}>
          Convert {from} to {to}
        </button>
      </form>
    </>
  );
}

export default App;
