import React from "react";

const Header = () => {
  return (
    <header>
      <h2 className="logo">
        <a href="#">Kimisuke Web</a>
      </h2>
      <nav>
        <ul className="main-nav">
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Note</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
