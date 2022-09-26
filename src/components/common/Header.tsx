import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/web" className="logo">
          Kimisuke Web
        </Link>
      </h2>
      <nav>
        <ul className="main-nav">
          <li>
            <Link to="/web" className="main-nav-menu">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/web" className="main-nav-menu">
              Note
            </Link>
          </li>
          <li>
            <Link to="/web" className="main-nav-menu">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
