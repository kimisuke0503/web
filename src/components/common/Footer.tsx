import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Kimisuke Web</p>
        <p>
          &copy; 2022, Kimisuke
          <br />
          &emsp;&ensp;icon by<Link to="https://icons8.com">Icons8</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
