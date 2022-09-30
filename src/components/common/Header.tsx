import React from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import Hamberger from "./Hamberger";

const Header = () => {
  const isWide = useMedia("(min-width: 600px)");
  return isWide ? (
    <header>
      <Link to="/web" className="logo">
        Kimisuke Web
      </Link>
      <ul className="main-nav">
        <li>
          <Link to="/web" className="main-nav-menu">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/web/note" className="main-nav-menu">
            Note
          </Link>
        </li>
        <li>
          <Link to="/web/blog" className="main-nav-menu">
            Blog
          </Link>
        </li>
      </ul>
    </header>
  ) : (
    <header>
      <Link to="/web" className="logo">
        Kimisuke Web
      </Link>
      <Hamberger />
    </header>
  );
};

export default Header;
