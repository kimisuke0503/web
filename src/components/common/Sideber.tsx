import React from "react";
import { Link } from "react-router-dom";

const Sideber = () => {
  return (
    <ul className="sub-nav">
      <li>
        <Link to="/web" className="sub-nav-menu">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/web/note" className="sub-nav-menu">
          Note
        </Link>
      </li>
      <li>
        <Link to="/web/blog" className="sub-nav-menu">
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default Sideber;
