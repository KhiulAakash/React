// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import "./style.css";

const Header = () => {
  const { setIs} = useTheme;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button onClick={toggleMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
