import React, { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [enableHex, setEnableHex] = useState(true);
  const [enableRGB, setEnableRGB] = useState(false);

  function handleCreateRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setTypeOfColor(color);
  }

  function handleCreateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    setTypeOfColor(`rgb(${red}, ${green}, ${blue})`);
  }
  return (
    <div className="container" style={{ backgroundColor: `${typeOfColor}` }}>
      <div className="btn">
        <button onClick={() => {setEnableHex(!enableHex);setEnableRGB(!enableRGB)}}>
          {enableHex ? "Hex Color Enabled" : "Enable Hex Color"}
        </button>
        <button
          onClick={() => {
            setEnableRGB(!enableRGB);
            setEnableHex(!enableHex);
          }}
        >
          {enableRGB ? "RGB Color Enabled" : "Enable RBG Color"}
        </button>
        <button onClick={() => enableHex?handleCreateRandomHexColor():handleCreateRandomRGBColor()}>
          Generate Random Color
        </button>
      </div>
      <div>
        <h1>{typeOfColor}</h1>
      </div>
    </div>
  );
}
