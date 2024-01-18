// Header.js
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
import UserContext from '../../Context/UserContext';

const Header = () => {
    const [mode, setMode] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleMode = () => {
        setMode(!mode);
        setUser(!mode); // Here, pass the updated value of mode
        console.log(mode);
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li>
                    <button onClick={() => handleMode()}>{mode ? "Enable Light Mode" : "Enable Dark Mode"}</button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
