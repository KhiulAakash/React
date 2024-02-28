import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menuIcon">
        <FontAwesomeIcon
          icon={faBars}
          id="menuIcon"
          onClick={() => setActive(!active)}
        />
      </div>
      <ul className="menuList">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
      <ul className={active ? "mobileMenuList active" : "mobileMenuList"}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
